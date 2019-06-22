import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Driver } from '@app/drivers/models/driver.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  cashPayment: boolean;

  @ManyToOne(type => Driver, driver => driver.clients, { onDelete: 'SET NULL', nullable: true })
  driver: Driver;
}