import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";

import { Nutricionista } from "../entities/nutricionista.entity";
import { CreateNutricionistaDto } from "../Dto/create-nutricionista.dto";
import { UpdateNutricionistaDto } from "../Dto/update-nutricionista.dto";

@Injectable()
export class NutricionistaService {
  constructor(
    @InjectRepository(Nutricionista)
    private nutricionistaRepository: Repository<Nutricionista>,
  ) {}

  async create(
    dto: CreateNutricionistaDto,
  ): Promise<Nutricionista> {

    const emailExistente =
      await this.nutricionistaRepository.findOne({
        where: { email: dto.email },
      });

    if (emailExistente) {
      throw new ConflictException(
        "Email já cadastrado",
      );
    }

    const crnExistente =
      await this.nutricionistaRepository.findOne({
        where: { crn: dto.crn },
      });

    if (crnExistente) {
      throw new ConflictException(
        "CRN já cadastrado",
      );
    }

    const nutricionista =
      this.nutricionistaRepository.create(dto);

    return this.nutricionistaRepository.save(
      nutricionista,
    );
  }

  async findAll(): Promise<Nutricionista[]> {
    return this.nutricionistaRepository.find();
  }

  async findBynome(
    nome: string,
  ): Promise<Nutricionista[]> {
    return this.nutricionistaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async findById(
    id: number,
  ): Promise<Nutricionista> {
    const nutricionista =
      await this.nutricionistaRepository.findOne({
        where: { id },
      });

    if (!nutricionista) {
      throw new NotFoundException(
        "Nutricionista não encontrado",
      );
    }

    return nutricionista;
  }

  async update(
    id: number,
    dto: UpdateNutricionistaDto,
  ): Promise<Nutricionista> {

    const nutricionista =
      await this.findById(id);

    if (
      dto.email &&
      dto.email !== nutricionista.email
    ) {
      const emailExistente =
        await this.nutricionistaRepository.findOne({
          where: { email: dto.email },
        });

      if (emailExistente) {
        throw new ConflictException(
          "Email já cadastrado",
        );
      }
    }

    if (
      dto.crn &&
      dto.crn !== nutricionista.crn
    ) {
      const crnExistente =
        await this.nutricionistaRepository.findOne({
          where: { crn: dto.crn },
        });

      if (crnExistente) {
        throw new ConflictException(
          "CRN já cadastrado",
        );
      }
    }

    this.nutricionistaRepository.merge(
      nutricionista,
      dto,
    );

    return this.nutricionistaRepository.save(
      nutricionista,
    );
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);

    await this.nutricionistaRepository.delete(id);
  }
}