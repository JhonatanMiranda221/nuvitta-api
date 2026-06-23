import { IsString, IsNotEmpty, IsEmail,IsOptional, MinLength} from "class-validator";

export class CreateNutricionistaDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @IsString()
    nome!: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O email é obrigatório' })
    email!: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    senha!: string;

    @IsString()
    @IsNotEmpty({ message: 'O CRN é obrigatório' })
    crn!: string;

    @IsString()
    @IsOptional()
    especialidade?: string;

    @IsString()
    @IsOptional()
    telefone?: string;
}