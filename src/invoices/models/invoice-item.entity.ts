import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from '@app/products/models/product.entity';

import { Invoice } from './invoice.entity';

@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Invoice, invoice => invoice.invoiceItems, { onDelete: 'CASCADE' })
  invoice: Invoice;

  @ManyToOne(type => Product)
  product: Product;

  @Column()
  quantity: number;

  @Column()
  price: number;
}