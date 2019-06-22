import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { MeController } from './me/me.controller';

import { AuthModule } from '@app/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    AuthModule,
  ],
  providers: [],
  exports: [],
  controllers: [ MeController ],
})
export class UsersModule {
}
