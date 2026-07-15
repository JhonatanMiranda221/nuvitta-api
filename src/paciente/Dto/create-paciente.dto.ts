import { IsString, IsNotEmpty, IsEmail, Length, IsDate, IsEnum, IsNumber } from 'class-validator';
import { Sexo } from '../entities/paciente.entity';
import { Type } from 'class-transformer';
export class CreatePacienteDto {
    
    @IsString()
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome!: string;

    @Type(() => Date)
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

    @IsNotEmpty({
    message: 'O ID do nutricionista é obrigatório'
    })
    @IsNumber({}, {
    message: 'O ID do nutricionista deve ser um número'
    })
    nutricionistaId!: number;      
}
