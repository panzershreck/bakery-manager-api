import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@app/users/models/user.entity';

import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { AuthController } from './auth.controller';


@Module({
  providers: [
    AuthService,
    HttpStrategy,
  ],
  imports: [
    TypeOrmModule.forFeature([ User ]),
    JwtModule.register({ secretOrPrivateKey: 'key' }),
    PassportModule.register({ defaultStrategy: 'bearer' }),
    // UsersModule,
  ],
  controllers: [ AuthController ],
})
export class AuthModule {
}
