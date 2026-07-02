import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AvaliacaoAntropometrica } from '../entities/avaliacaoantropometrica.entity';
import { CreateAvaliacaoAntropometricaDto } from '../Dto/create-avaliacaoantropometrica.dto';
import { UpdateAvaliacaoAntropometricaDto } from '../Dto/update-avaliacaoantropometrica.dto';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Injectable()
export class AvaliacaoAntropometricaService {
  constructor(
    @InjectRepository(AvaliacaoAntropometrica)
    private avaliacaoAntropometricaRepository: Repository<AvaliacaoAntropometrica>,

    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async create(
    dto: CreateAvaliacaoAntropometricaDto,
  ): Promise<AvaliacaoAntropometrica> {
    const { pacienteId, ...dadosAvaliacao } = dto;

    const paciente = await this.pacienteRepository.findOne({
      where: { id: pacienteId },
    });

    if (!paciente) {
      throw new NotFoundException('Paciente não encontrado');
    }

    const avaliacaoAntropometrica =
      this.avaliacaoAntropometricaRepository.create(dadosAvaliacao);

    avaliacaoAntropometrica.paciente = paciente;

    return await this.avaliacaoAntropometricaRepository.save(
      avaliacaoAntropometrica,
    );
  }

  async findAll(): Promise<AvaliacaoAntropometrica[]> {
    return await this.avaliacaoAntropometricaRepository.find({
      relations: ['paciente'],
    });
  }

  async findById(id: number): Promise<AvaliacaoAntropometrica> {
    const avaliacao = await this.avaliacaoAntropometricaRepository.findOne({
      where: { id },
      relations: ['paciente'],
    });

    if (!avaliacao) {
      throw new NotFoundException(
        'Avaliação antropométrica não encontrada',
      );
    }

    return avaliacao;
  }

  async findByPacienteId(
    pacienteId: number,
  ): Promise<AvaliacaoAntropometrica[]> {
    const paciente = await this.pacienteRepository.findOne({
      where: { id: pacienteId },
    });

    if (!paciente) {
      throw new NotFoundException('Paciente não encontrado');
    }

    return await this.avaliacaoAntropometricaRepository.find({
      where: {
        paciente: {
          id: pacienteId,
        },
      },
      relations: ['paciente'],
      order: {
        dataAvaliacao: 'DESC',
      },
    });
  }

  async update(
    id: number,
    dto: UpdateAvaliacaoAntropometricaDto,
  ): Promise<AvaliacaoAntropometrica> {
    const avaliacao = await this.findById(id);

    Object.assign(avaliacao, dto);

    return await this.avaliacaoAntropometricaRepository.save(avaliacao);
  }

  async delete(id: number): Promise<void> {
    const avaliacao = await this.findById(id);

    await this.avaliacaoAntropometricaRepository.remove(avaliacao);
  }
}