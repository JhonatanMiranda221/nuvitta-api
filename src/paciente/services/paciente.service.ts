import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';

import { Paciente } from '../entities/paciente.entity';
import { CreatePacienteDto } from '../Dto/create-paciente.dto';
import { UpdatePacienteDto } from '../Dto/update-paciente.dto';
import { Nutricionista } from '../../nutricionista/entities/nutricionista.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,

    @InjectRepository(Nutricionista)
    private nutricionistaRepository: Repository<Nutricionista>,
  ) {}

  async create(dto: CreatePacienteDto): Promise<Paciente> {
    const emailExistente = await this.pacienteRepository.findOne({
      where: {
        email: dto.email,
      },
    });

    if (emailExistente) {
      throw new ConflictException('Email já cadastrado');
    }

    const nutricionista = await this.nutricionistaRepository.findOne({
      where: {
        id: dto.nutricionistaId,
      },
    });

    if (!nutricionista) {
      throw new NotFoundException('Nutricionista não encontrado');
    }

    const paciente = this.pacienteRepository.create(dto);

    paciente.nutricionista = nutricionista;

    return await this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find({
      relations: ['nutricionista'],
    });
  }

  async findById(id: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { id },
      relations: ['nutricionista'],
    });

    if (!paciente) {
      throw new NotFoundException('Paciente não encontrado');
    }

    return paciente;
  }

  async findByNome(nome: string): Promise<Paciente[]> {
    return await this.pacienteRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: ['nutricionista'],
    });
  }

  async update(id: number, dto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.findById(id);

    Object.assign(paciente, dto);

    return await this.pacienteRepository.save(paciente);
  }

  async delete(id: number): Promise<void> {
    const paciente = await this.findById(id);

    await this.pacienteRepository.remove(paciente);
  }
}
