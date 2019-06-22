import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';

import { Driver } from './models/driver.entity';

@Controller('drivers')
@UseGuards(AuthGuard())
export class DriversController {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}

  @Post()
  create(@Body() createDriverDto) {
    return this.driverRepository.save(createDriverDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.driverRepository.find({
      relations: [ 'clients' ],
    });
  }

  @Get(':id')
  findOne(@Param('id') id, @Query() query) {
    return this.driverRepository.findOne(id, {
      relations: [ 'clients' ],
    });
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateDriverDto) {
    const driver = await this.driverRepository.findOne(id);

    Object.assign(driver, updateDriverDto);

    return this.driverRepository.save(driver);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const driver = await this.driverRepository.findOne(id);
    return this.driverRepository.remove(driver);
  }
}
