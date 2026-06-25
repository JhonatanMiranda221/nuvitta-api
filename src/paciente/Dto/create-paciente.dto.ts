import { IsString, IsNotEmpty, IsEmail, MinLength, Length, IsOptional, IsPhoneNumber, IsDate, IsEnum, IsBoolean } from 'class-validator';
import { Sexo } from '../entities/paciente.entity';
export class CreatePacienteDto {
    
    @IsString()
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome!: string;

    @IsDate({
    message: 'Informe uma data válida'
    })
    @IsNotEmpty({
    message: 'A data de nascimento é obrigatória'
    })
    dataNascimento!: Date;

    @IsEnum(Sexo)
    @IsNotEmpty({
    message:'O sexo é obrigatório'
    })
    sexo!: Sexo;

    @IsNotEmpty({ message: 'O email é obrigatório' })
    @IsEmail({}, { message: 'Informe um email válido' })
    email!: string;

    @IsString()
    @Length(10,11,{
    message:'Telefone deve ter entre 10 e 11 números'
    })
    telefone!: string;
    
    @IsString()
    @IsNotEmpty({ message: 'O objetivo é obrigatório' })
    objetivo!: string;

    @IsBoolean()
    ativo!: boolean;

    @IsNotEmpty({ message: 'O ID do nutricionista é obrigatório' })
    nutricionistaId!: number;       
}
