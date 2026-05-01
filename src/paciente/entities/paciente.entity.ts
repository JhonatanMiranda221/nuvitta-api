
import { Nutricionista } from 'src/nutricionista/entities/nutricionista.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn, ManyToOne} from 'typeorm';

export enum Sexo {
    MASCULINO = 'M',
    FEMININO = 'F',
    OUTRO = 'O',
}

@Entity({ name: 'tb_pacientes' })
export class Paciente {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column()
    dataNascimento!: Date;
    
    @Column({ type: 'enum', enum: Sexo })
    sexo!: Sexo;

    @Column ({ unique: true, length: 150 })
    email!: string;

    @Column({ length: 20 })
    telefone!: string;

    @Column({ length: 200 })
    objetivo!: string;

    @Column()
    ativo!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => Nutricionista, (nutricionista) => nutricionista.pacientes, {
        onDelete: 'CASCADE', // Se o nutricionista for deletado, os pacientes dele também serão
      
    })
      nutricionista!: Nutricionista;

}