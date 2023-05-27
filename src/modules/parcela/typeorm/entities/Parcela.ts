import Despesa from "@modules/despesa/typeorm/entities/Despesa";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('parcela')
export default class Parcela {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  valor: number;

  @Column()
  vencimento: Date;

  @Column()
  status: Boolean;

  @ManyToOne(() => Despesa, { eager : true})
  @JoinColumn({ name: 'despesa' })
  despesa: Despesa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
