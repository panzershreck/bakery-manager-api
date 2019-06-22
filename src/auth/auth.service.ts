import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '@app/users/models/user.entity';

import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  createToken(user: User) {
    const accessToken = this.jwtService.sign({ email: user.email, timestamp: new Date().getTime() });

    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // console.log(token);
    return await this.userRepository.findOne({ where: { token } });
  }

  async login(email, password) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException(`The user with email ${email} does not exist.`);
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = this.createToken(user);
      user.token = token.accessToken;

      await this.userRepository.save(user);

      return token;
    }

    throw new UnauthorizedException();
  }
}