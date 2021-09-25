import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ParseIntPipe } from '../../../common/parse-int.pipe';
import { UserService } from '../service/user.service';
import { CreateUserDto, UpdateUserDto } from '../../../dtos/users.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUsers(){
        return this.userService.findAll();
    }

    @Get(':userId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.findOne(+userId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateUserDto){
    return this.userService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto){

    return this.userService.update(+id, payload);
  };
}
