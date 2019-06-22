import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';

import { Product } from './models/product.entity';
import { UpdateProductDto } from './models/update-product.dto';

@Controller('products')
@UseGuards(AuthGuard())
export class ProductsController {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  @Post()
  create(@Body() createProductDto) {
    return this.productRepository.save(createProductDto);
  }

  @Get()
  findAll() {
    return this.productRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.productRepository.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);

    Object.assign(product, updateProductDto);

    return this.productRepository.save(product);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const product = await this.productRepository.findOne(id);
    return this.productRepository.remove(product);
  }
}
