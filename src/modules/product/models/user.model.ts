import { IsNotEmpty, Length, MinLength, MaxLength, IsEmail } from 'class-validator';
export class User {

    id: number;

    @IsNotEmpty()
    @Length(6,50)
    name: string;

    @IsNotEmpty()
    @Length(6,50)
    lastName: string;

    @IsNotEmpty()
    dni: string;

    @MinLength(6)
    @MaxLength(16)
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8,16)
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(16)
    password: string;

    @IsNotEmpty()
    role: string;
}