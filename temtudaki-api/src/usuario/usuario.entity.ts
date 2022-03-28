import { Servico } from 'src/servico/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({length: 20})
  telefone: string;

  @Column({length: 14})
  cpf: string

  @OneToMany(() => Servico, servico => servico.usuario)
  servicos: Servico[];
}