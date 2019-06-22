import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';

import { PriceGroup } from '../models/price-group.entity';
import { UpdatePriceGroupDto } from '../models/update-price-group.dto';
import { CreatePriceGroupDto } from '../models/create-price-group.dto';

@Controller('price-groups')
@UseGuards(AuthGuard())
export class PriceGroupsController {
  constructor(
    @InjectRepository(PriceGroup)
    private readonly priceGroupRepository: Repository<PriceGroup>,
  ) {}

  @Post()
  create(@Body() createPriceGroupDto: CreatePriceGroupDto) {
    return this.priceGroupRepository.save(createPriceGroupDto);
  }

  @Get()
  findAll() {
    return this.priceGroupRepository.find({ relations: [ 'prices', 'prices.product' ] });
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.priceGroupRepository.findOne(id, { relations: [ 'prices', 'prices.product' ] });
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updatePriceGroupDto: UpdatePriceGroupDto) {
    const priceGroup = await this.priceGroupRepository.findOne(id);

    Object.assign(priceGroup, updatePriceGroupDto);

    return this.priceGroupRepository.save(priceGroup);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const priceGroup = await this.priceGroupRepository.findOne(id);
    return this.priceGroupRepository.remove(priceGroup);
  }
}
