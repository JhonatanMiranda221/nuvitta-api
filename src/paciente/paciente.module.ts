import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Paciente } from "./entities/paciente.entity";
import { PacienteService } from "./services/paciente.service";
import { PacienteController } from "./controllers/paciente.controller";
import { Nutricionista } from "../nutricionista/entities/nutricionista.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Paciente, Nutricionista])],
    controllers: [PacienteController],
    providers: [PacienteService],
})
export class PacienteModule {}