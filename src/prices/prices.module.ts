import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@app/auth/auth.module';

import { PriceGroup } from './models/price-group.entity';
import { Price } from './models/price.entity';
import { PriceGroupsController } from './price-groups/price-groups.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ PriceGroup, Price ]),
    AuthModule,
  ],
  controllers: [ PriceGroupsController ],
})
export class PricesModule {
}
