import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Reservation } from "./reservationEntity";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 45 })
    name: string;

    @Column({ unique: true, length: 60 })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column()
    isAdmin: boolean;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Reservation, reservation => reservation.user)
    reservations: Reservation[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

export{ User };