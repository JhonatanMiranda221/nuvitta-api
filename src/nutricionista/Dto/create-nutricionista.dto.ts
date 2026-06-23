import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MinLength,
  Length,
  IsPhoneNumber
} from "class-validator";

export class CreateNutricionistaDto {

    @IsString()
    @IsNotEmpty({
      message: 'O nome é obrigatório'
    })
    nome!: string;


    @IsEmail({}, {
      message: 'Informe um email válido'
    })
    @IsNotEmpty({
      message: 'O email é obrigatório'
    })
    email!: string;


    @IsString()
    @MinLength(8, {
      message: 'A senha deve ter no mínimo 8 caracteres'
    })
    @IsNotEmpty({
      message: 'A senha é obrigatória'
    })
    senha!: string;


    @IsString()
    @Length(5, 30)
    @IsNotEmpty({
      message: 'O CRN é obrigatório'
    })
    crn!: string;


    @IsString()
    @IsOptional()
    especialidade?: string;


    @IsPhoneNumber('BR')
    @IsOptional()
    telefone?: string;
}