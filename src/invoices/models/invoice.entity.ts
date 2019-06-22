import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Client } from '@app/clients/models/client.entity';

import { InvoiceItem } from './invoice-item.entity';

@Entity()
export class Invoice {
  @ManyToOne(type => Client)
  client: Client[];

  @Column()
  date: Date;

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => InvoiceItem, invoiceItem => invoiceItem.invoice, { cascade: [ 'insert', 'update', 'remove' ] })
  invoiceItems: InvoiceItem[];
}