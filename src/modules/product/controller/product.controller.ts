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
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './../service/product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne( @Param('productId') productId: string) {
    return this.productService.findOne(+productId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any){
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any){

    return this.productService.update(+id, payload);
  };

  @Delete(':id')
  delete(@Param('id') id: string) {
      return this.productService.remove(+id);
  }
}
