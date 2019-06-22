import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from '@app/products/models/product.entity';
import { PriceGroup } from './price-group.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => PriceGroup, priceGroup => priceGroup.prices, { onDelete: 'CASCADE' })
  priceGroup: PriceGroup;

  @ManyToOne(type => Product)
  product: Product[];

  @Column({ type: 'float' })
  value: number;
}