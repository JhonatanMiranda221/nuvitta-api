import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutricionistaController } from './controllers/nutricionista.controller';
import { NutricionistaService } from './services/nutricionista.service';
import { Nutricionista } from './entities/nutricionista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nutricionista])],
  controllers: [NutricionistaController],
  providers: [NutricionistaService],
})
export class NutricionistaModule {}
