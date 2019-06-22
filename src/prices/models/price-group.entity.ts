import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Price } from './price.entity';

@Entity()
export class PriceGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(type => Price, price => price.priceGroup, { cascade: [ 'insert', 'update', 'remove' ] })
  prices: Price[];

  @Column({ default: false })
  isDefault: boolean;
}