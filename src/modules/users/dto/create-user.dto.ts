import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({description:'Nombre de usuario'})
    @IsString({message:'El nombre debe ser caracteres'})
    @IsNotEmpty({message:'El nombre no debe estar vacio'})
    name: string;

    @ApiProperty({description:'Correo Electronico '})
    @IsString({message:'El formato debe ser de correo'})
    @IsNotEmpty({message:'El correo no debe estar vacio'})
    email: string;

    @ApiProperty({description:'Contraseña de usuario'})
    @MinLength(6,{message: 'La contraseña debe tener como minimo 6 caracteres'})
    @IsString({message:'LLa contraseña debe ser una cadena'})
    password: string;
}
