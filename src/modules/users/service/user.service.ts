import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@Injectable()
export class UserService {

    private counterId: number = 1;

    private users: User[] = [
      {
        id: 1,
        name: 'Cristian Gaona',
        lastName: 'Es un producto',
        dni: '1106017345',
        phone: '0985890234',
        email: 'crgaonas24@gmail.com',
        username: 'crisda24',
        password: 'crisda24@',
        role: 'ADMIN_SHOP',
      },
    ];

    findAll(){
        return this.users;
    }

    findOne(id: number){
        const user = this.users.find((item) => item.id === id);
    if (!user){
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
    }


    create(payload: CreateUserDto) {
        this.counterId = this.counterId + 1;
        const newUser = {
          id: this.counterId,
          ...payload,
        };
        this.users.push(newUser);
    
        return newUser;
      }


      update(id: number, payload: UpdateUserDto){
        const user = this.findOne(id);
        if (user){
          const index = this.users.findIndex((item) => item.id === id);
          this.users[index] = {
            ...user,
            ...payload
          }
          return this.users[index];
        }
        return null;
      }

      remove (id: number){
        const index = this.users.findIndex((item) => item.id === id);
        if (index === -1) {
          throw new NotFoundException(`User #${id} not found`);
        }
    
        this.users.splice(index, 1);
        return true;
      }
}
