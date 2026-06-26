import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PacienteService } from "../services/paciente.service";
import { CreatePacienteDto } from "../Dto/create-paciente.dto";
import { UpdatePacienteDto } from "../Dto/update-paciente.dto";

@Controller('/paciente')
export class PacienteController {
    constructor(private pacienteService: PacienteService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.pacienteService.findAll();
    }

    @Get("/nome/:nome")
    @HttpCode(HttpStatus.OK)
    findBynome(@Param('nome') nome: string) {
        return this.pacienteService.findByNome(nome);
    }
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.pacienteService.findById(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: CreatePacienteDto) {
        return this.pacienteService.create(dto);
    }
    @Put("/:id")
    @HttpCode(HttpStatus.OK)
    update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePacienteDto,
) {
    return this.pacienteService.update(id, dto);
}
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.pacienteService.delete(id);
    }
}