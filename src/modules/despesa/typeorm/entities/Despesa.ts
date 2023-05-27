
import Conta from "../../../conta/typeorm/entities/Conta";
import User from "../../../users/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('despesa')
export default class Despesa {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column()
  valorTotal: number;

  @Column()
  transferir: Boolean;

  @ManyToOne(() => Conta, { eager : true})
  @JoinColumn({ name: 'conta' })
  conta: Conta;

  @ManyToOne(() => Conta, { eager : true})
  @JoinColumn({ name: 'transferirPara' })
  transferirPara: Conta;

  @ManyToOne(() => User, { eager : true})
  @JoinColumn({ name: 'usuario' })
  usuario: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
