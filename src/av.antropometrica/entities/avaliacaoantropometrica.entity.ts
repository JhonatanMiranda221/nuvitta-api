import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Paciente } from 'src/paciente/entities/paciente.entity';

@Entity({ name: 'tb_avaliacoes_antropometricas' })
export class AvaliacaoAntropometrica {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  peso!: number;

  @Column({
    type: 'decimal',
    precision: 4,
    scale: 2,
  })
  altura!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  cintura!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  quadril!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  abdomen!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  braco!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  panturrilha!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  percentualGordura!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  massaMagra!: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  massaGorda!: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  observacoes?: string;

  @Column({
    type: 'date',
  })
  dataAvaliacao!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  
  @ManyToOne(
    () => Paciente,
    (paciente) => paciente.avaliacoes,
    {
        onDelete: 'CASCADE',
    },
    )
    paciente!: Paciente;
    }