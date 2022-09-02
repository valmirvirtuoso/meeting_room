import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Room } from "./roomsEntity";
import { User } from "./userEntity";

@Entity("reservations")
class Reservation {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 150 })
    name: string;

    @Column({ unique: true })
    dateMeetingStart: Date;

    @Column({ unique: true })
    dateMeetingEnd: Date;

    @ManyToOne(() => Room)
    room: Room;

    @ManyToOne(() => User)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

export{ Reservation };