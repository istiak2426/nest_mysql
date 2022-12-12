import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:"users"})

export class User {

    @PrimaryGeneratedColumn({ type:'bigint'})
    id: number;

    @Column({unique: true})
    username: String;

    @Column()
    password: String;

    @Column()
    createdAt: Date;

    @Column({ nullable: true})
    authStategy: String;


}