import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Between, FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';
import * as moment from 'moment';

import { Invoice } from './models/invoice.entity';

@Controller('invoices')
@UseGuards(AuthGuard())
export class InvoicesController {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {

  }

  @Post()
  create(@Body() createInvoiceDto) {
    return this.invoiceRepository.save(createInvoiceDto);
  }

  @Get()
  findAll(@Query() query) {
    const options: FindManyOptions = {
      relations: [ 'client', 'invoiceItems', 'invoiceItems.product' ],
      order: { id: 'DESC' },
    };

    if (query.date && moment(query.date).isValid()) {
      const dayStart = moment(query.date).startOf('day').toDate();
      const dayEnd = moment(query.date).endOf('day').toDate();

      options.where = { date: Between(dayStart, dayEnd) };
    }

    if (query.relations) {
      const relations = typeof query.relations === 'string' ? [ query.relations ] : query.relations;

      options.relations.push(...relations);
    }

    return this.invoiceRepository.find(options);
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.invoiceRepository.findOne(id, { relations: [ 'client', 'invoiceItems', 'invoiceItems.product' ] });
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateInvoiceDto) {
    const invoice = await this.invoiceRepository.findOne(id, {
      relations: [
        'client',
        'invoiceItems',
        'invoiceItems.product',
      ],
    });

    Object.assign(invoice, updateInvoiceDto);

    return this.invoiceRepository.save(invoice);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const invoice = await this.invoiceRepository.findOne(id);
    return this.invoiceRepository.remove(invoice);
  }
}
