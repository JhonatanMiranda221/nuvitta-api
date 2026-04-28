
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tb_nutricionistas' })
export class Nutricionista {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
     nome!: string;

    @Column({unique: true, length: 150})
    email!: string;

    @Column()
    senha!: string;

    @Column({ unique: true, length: 20 })
    crn!: string;

     @Column({ length: 100, nullable: true })
    especialidade!: string;

    @Column({ length: 20, nullable: true })
    telefone!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}