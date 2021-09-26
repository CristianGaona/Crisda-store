import { Module } from '@nestjs/common';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../service/product.service';
import { CategoriesService } from '../service/categories.service';
import { CategoriesController } from '../controller/categories.controller';
import { BrandsService } from '../service/brands.service';
import { BrandsController } from '../controller/brands.controller';


@Module({
    controllers: [ProductController, BrandsController, CategoriesController],
    providers: [ProductService, BrandsService, CategoriesService],
    exports: [ProductService]
})
export class ProductModule {}
