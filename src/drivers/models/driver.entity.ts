import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Client } from '@app/clients/models/client.entity';

@Entity()
export class Driver {
  @OneToMany(type => Client, clients => clients.driver)
  clients: Client[];

  @Column()
  firstName: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  phone: string;
}