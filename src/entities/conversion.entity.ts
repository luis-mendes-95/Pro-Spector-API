import Client from "./client.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("conversions")
class Conversion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client)
  @JoinColumn({ name: "clientId" })
  cliente: Client;

  @Column()
  details: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @CreateDateColumn({ type: "date" })
  createdAt: String;

  @UpdateDateColumn({ type: "date" })
  updatedAt: String;

  @DeleteDateColumn({ type: "date" })
  deletedAt: String;
}

export default Conversion;