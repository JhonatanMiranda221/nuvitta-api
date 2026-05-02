import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Nutricionista } from "../entities/nutricionista.entity";
import { CreateNutricionistaDto } from "../Dto/create-nutricionista.dto";


@Injectable()
export class NutricionistaService {
  constructor(
    @InjectRepository(Nutricionista)
    private nutricionistaRepository: Repository<Nutricionista>,
  ) {}

    async create(dto: CreateNutricionistaDto): Promise<Nutricionista> { 
    const nutricionista = this.nutricionistaRepository.create(dto);
    return this.nutricionistaRepository.save(nutricionista);
  }

    async findAll(): Promise<Nutricionista[]> {
    return this.nutricionistaRepository.find();
  }

    async findBynome (nome: string): Promise<Nutricionista[]> {
        return await this.nutricionistaRepository.find({ 
            where: {
                nome: ILike (`%${nome}%`) },
    }); //Fazer if quando digitar um nome que não exista, retornar mensagem de erro
    }
    async findById (id: number): Promise<Nutricionista> {
        const nutricionista = await this.nutricionistaRepository.findOne({ where: { id } });
        if (!nutricionista) throw new HttpException('Nutricionista não encontrado', 404);
        return nutricionista;
    }
    async update (id: number, dto: CreateNutricionistaDto): Promise<Nutricionista> {
        const nutricionista = await this.findById(id);
        this.nutricionistaRepository.merge(nutricionista, dto);
        return this.nutricionistaRepository.save(nutricionista);
    }
    async delete (id: number): Promise<void> {
        await this.nutricionistaRepository.delete(id);
    }
}
