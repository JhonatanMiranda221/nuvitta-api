import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
 
} from 'class-validator';
import { Type } from 'class-transformer';
import {OrigemAlimento} from 'src/shared/enums/origem-alimento.enum';



export class CreateAlimentoDto {

  @IsString()
  @IsNotEmpty({ message: 'O nome do alimento é obrigatório' })
  nome!: string;

  @IsOptional()
  @IsString()
  marca?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'As calorias devem ser um número' })
  calorias!: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'As proteínas devem ser um número' })
  proteinas!: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'Os carboidratos devem ser um número' })
  carboidratos!: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'As gorduras devem ser um número' })
  gorduras!: number;

  

}