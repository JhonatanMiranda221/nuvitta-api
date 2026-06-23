import { PartialType } from '@nestjs/mapped-types';
import { CreateNutricionistaDto } from './create-nutricionista.dto';

export class UpdateNutricionistaDto extends PartialType(
  CreateNutricionistaDto,
) {}