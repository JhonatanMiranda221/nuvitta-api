import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimento } from '../entities/alimentos.entity';
import { CreateAlimentoDto } from '../dto/create-alimento.dto';
import { UpdateAlimentoDto } from '../dto/update-alimento.dto';
import { OrigemAlimento } from 'src/shared/enums/origem-alimento.enum';

@Injectable()
export class AlimentosService {
  constructor(
    @InjectRepository(Alimento)
    private alimentoRepository: Repository<Alimento>,
  ) {}

  async create(dto: CreateAlimentoDto): Promise<Alimento> {
    const alimento = this.alimentoRepository.create({
      ...dto,
      origem: OrigemAlimento.MANUAL,
    });

    return this.alimentoRepository.save(alimento);
  }
}
