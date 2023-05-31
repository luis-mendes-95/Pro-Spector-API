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

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client)
  @JoinColumn({ name: "clientId" })
  client: Client;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45 })
  email: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: Date;
}

export default Contact