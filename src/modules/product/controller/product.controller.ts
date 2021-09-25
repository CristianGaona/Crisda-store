import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Query,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '../../../common/parse-int.pipe';
import { Response } from 'express';
import { ProductService } from './../service/product.service';
import { CreateProductDto, UpdateProductDto } from '../../../dtos/products.dto';


@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne( @Param('productId', ParseIntPipe ) productId: number) {
    return this.productService.findOne(+productId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto){
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto){

    return this.productService.update(+id, payload);
  };

  @Delete(':id')
  delete(@Param('id') id: string) {
      return this.productService.remove(+id);
  }
}
