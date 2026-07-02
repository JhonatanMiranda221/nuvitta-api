import{
    Body, 
    Controller,
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus,
    Param, 
    ParseIntPipe,
    Patch,
    Post, 
} from "@nestjs/common";
import { AvaliacaoAntropometricaService } from "../services/avaliacaoantropometrica.service";
import { CreateAvaliacaoAntropometricaDto } from "../Dto/create-avaliacaoantropometrica.dto";
import { UpdateAvaliacaoAntropometricaDto } from "../Dto/update-avaliacaoantropometrica.dto";

@Controller('avaliacao-antropometrica')
export class AvaliacaoAntropometricaController {
    constructor(private avaliacaoAntropometricaService: AvaliacaoAntropometricaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.avaliacaoAntropometricaService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.avaliacaoAntropometricaService.findById(id);
    }
    @Get('/paciente/:pacienteId')
    @HttpCode(HttpStatus.OK)
    findByPacienteId(
    @Param('pacienteId', ParseIntPipe) pacienteId: number,
    ) {
    return this.avaliacaoAntropometricaService.findByPacienteId(pacienteId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: CreateAvaliacaoAntropometricaDto) {
        return this.avaliacaoAntropometricaService.create(dto);
    }

    @Patch("/:id")
    @HttpCode(HttpStatus.OK)
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateAvaliacaoAntropometricaDto,
    ) {
        return this.avaliacaoAntropometricaService.update(id, dto);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.avaliacaoAntropometricaService.delete(id);
    }
}