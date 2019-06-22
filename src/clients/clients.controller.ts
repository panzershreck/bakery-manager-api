import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';

import { Client } from './models/client.entity';
import { CreateClientDto } from './models/create-client.dto';
import { UpdateClientDto } from './models/update-client.dto';

@Controller('clients')
@UseGuards(AuthGuard())
export class ClientsController {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {

  }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientRepository.save(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientRepository.find({ relations: [ 'driver' ], order: { id: 'DESC' } });
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.clientRepository.findOne(id, { relations: [ 'driver' ] });
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne(id);

    Object.assign(client, updateClientDto);

    return this.clientRepository.save(client);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const client = await this.clientRepository.findOne(id);
    return this.clientRepository.remove(client);
  }
}
