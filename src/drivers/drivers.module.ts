import { Module } from '@nestjs/common';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@app/auth/auth.module';

import { Driver } from './models/driver.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Driver ]),
    AuthModule,
  ],
  controllers: [ DriversController ]
})
export class DriversModule {
}
