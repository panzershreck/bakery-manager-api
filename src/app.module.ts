import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PricesModule } from './prices/prices.module';
import { DriversModule } from './drivers/drivers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClientsModule,
    ProductsModule,
    InvoicesModule,
    PricesModule,
    DriversModule,
    UsersModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {

}
