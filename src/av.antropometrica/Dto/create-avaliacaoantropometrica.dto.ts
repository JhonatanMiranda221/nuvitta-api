import {
    IsDate, 
    IsNumber, 
    IsPositive, 
    IsString, 
    IsOptional} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateAvaliacaoAntropometricaDto {
  @IsNumber()
  @IsPositive()
  peso!: number;

  @IsNumber()
  @IsPositive()
  altura!: number;
  
  @IsNumber()
  @IsPositive()
  cintura!: number;

  @IsNumber()
  @IsPositive()
  quadril!: number;

  @IsNumber()
  @IsPositive()
  abdomen!: number;

  @IsNumber()
  @IsPositive()
  braco!: number;

  @IsNumber()
  @IsPositive()
  panturrilha!: number;
  
  @IsNumber()
  @IsPositive()
  percentualGordura!: number;

  @IsNumber()
  @IsPositive()
  massaMagra!: number;

  @IsNumber()
  @IsPositive()
  massaGorda!: number;

  @IsOptional()
  @IsString()
  observacoes?: string;

  @Type(() => Date)
  @IsDate()
  dataAvaliacao!: Date;

  @IsNumber()
  @IsPositive()
  pacienteId!: number;

}

