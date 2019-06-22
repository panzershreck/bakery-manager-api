import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientsController } from './clients.controller';
import { Client } from './models/client.entity';
import { AuthModule } from '@app/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Client ]),
    AuthModule,
  ],
  controllers: [ ClientsController ],
})
export class ClientsModule {
}
