import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../models/user.entity';
import { CurrenUser } from '../current-user.decorator';

@Controller('me')
@UseGuards(AuthGuard())
export class MeController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  find(@Headers('authorization') authorization, @CurrenUser() user) {
    return user;
  }
}