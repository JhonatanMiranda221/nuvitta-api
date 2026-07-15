import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { OrigemAlimento } from 'src/shared/enums/origem-alimento.enum';


@Entity({ name: "tb_alimentos" })
@Unique(['origem', 'externalId'])
export class Alimento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  externalId?: string;

  @Column({ length: 100 })
  nome!: string;

  @Column({ length: 100, nullable: true })
  marca?: string;

  @Column("float")
  calorias!: number;

  @Column("float")
  proteinas!: number;

  @Column("float")
  carboidratos!: number;

  @Column("float")
  gorduras!: number;

  
  @Column({
  type: 'enum',
  enum: OrigemAlimento,
})
    origem!: OrigemAlimento;
}