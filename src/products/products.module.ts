import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@app/auth/auth.module';

import { ProductsController } from './products.controller';
import { Product } from './models/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Product ]),
    AuthModule,
  ],
  controllers: [ ProductsController ],
})
export class ProductsModule {
}
