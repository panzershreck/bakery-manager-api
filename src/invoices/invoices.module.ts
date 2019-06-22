import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@app/auth/auth.module';

import { InvoicesController } from './invoices.controller';
import { Invoice } from './models/invoice.entity';
import { InvoiceItem } from './models/invoice-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Invoice, InvoiceItem ]),
    AuthModule,
  ],
  controllers: [ InvoicesController ]
})
export class InvoicesModule {
}
