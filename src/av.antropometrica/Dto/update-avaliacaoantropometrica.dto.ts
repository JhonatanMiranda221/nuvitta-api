import {PartialType} from '@nestjs/mapped-types';
import { CreateAvaliacaoAntropometricaDto } from './create-avaliacaoantropometrica.dto';

export class UpdateAvaliacaoAntropometricaDto extends PartialType(
  CreateAvaliacaoAntropometricaDto,
) {}