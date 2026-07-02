import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AvaliacaoAntropometrica } from './entities/avaliacaoantropometrica.entity';
import { Paciente } from '../paciente/entities/paciente.entity';

import { AvaliacaoAntropometricaController } from './controllers/avaliacaoantropometrica.controller';
import { AvaliacaoAntropometricaService } from './services/avaliacaoantropometrica.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AvaliacaoAntropometrica,
      Paciente,
    ]),
  ],
  controllers: [AvaliacaoAntropometricaController],
  providers: [AvaliacaoAntropometricaService],
  exports: [AvaliacaoAntropometricaService],
})
export class AvaliacaoAntropometricaModule {}