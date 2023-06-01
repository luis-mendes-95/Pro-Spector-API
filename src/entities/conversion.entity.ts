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
  client: Client;

  @Column()
  details: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: Date;
}

export default Conversion;