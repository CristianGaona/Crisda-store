import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { CustomerController } from '../controller/customers.controller';
import { CustomersService } from '../service/customers.service';

@Module({
    controllers: [UserController, CustomerController],
    providers: [UserService, CustomersService],
    exports: [UserService, CustomersService]
})
export class UserModule {}
