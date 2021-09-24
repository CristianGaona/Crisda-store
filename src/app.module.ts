import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './modules/order/controller/order.controller';
import { CustomerController } from './modules/customer/controller/customer.controller';
import { OrderModule } from './modules/order/module/order.module';
import { OrderService } from './modules/order/service/order.service';
import { CustomerModule } from './modules/customer/module/customer.module';
import { CustomerService } from './modules/customer/service/customer.service';
import { UserController } from './modules/user/controller/user.controller';
import { UserModule } from './modules/user/module/user.module';
import { UserService } from './modules/user/service/user.service';
import { CategoryController } from './modules/category/controller/category.controller';
import { CategoryModule } from './modules/category/module/category.module';
import { CategoryService } from './modules/category/service/category.service';
import { ProductController } from './modules/product/controller/product.controller';
import { ProductModule } from './modules/product/module/product.module';
import { ProductService } from './modules/product/service/product.service';
import { BrandController } from './modules/brand/controller/brand.controller';
import { BrandModule } from './modules/brand/module/brand.module';
import { BrandService } from './modules/brand/service/brand.service';



@Module({
  imports: [OrderModule, CustomerModule, UserModule, CategoryModule, ProductModule, BrandModule],
  controllers: [AppController, OrderController, CustomerController, UserController, CategoryController, ProductController, BrandController],
  providers: [AppService, OrderService, CustomerService, UserService, CategoryService, ProductService, BrandService],
})
export class AppModule {}
