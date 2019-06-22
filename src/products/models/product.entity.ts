import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'float' })
  weight: number;

  @Column()
  description: string;

  @Column({ type: 'float' })
  defaultPrice: number;
}