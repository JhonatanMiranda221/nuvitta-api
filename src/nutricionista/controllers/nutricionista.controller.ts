import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { NutricionistaService } from "../services/nutricionista.service";
import { CreateNutricionistaDto } from "../Dto/create-nutricionista.dto";

@Controller('/nutricionista')
export class NutricionistaController {
    constructor(private nutricionistaService: NutricionistaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.nutricionistaService.findAll();
    }

    @Get("/nome/:nome")
    @HttpCode(HttpStatus.OK)
    findBynome(@Param('nome') nome: string) {
        return this.nutricionistaService.findBynome(nome);
    }
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.nutricionistaService.findById(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: CreateNutricionistaDto) {
        return this.nutricionistaService.create(dto);
    }
    @Put("/:id")
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateNutricionistaDto) {
        return this.nutricionistaService.update(id, dto);
    }
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.nutricionistaService.delete(id);
    }
}