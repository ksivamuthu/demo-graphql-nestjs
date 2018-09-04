import { Column, Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Session } from '../session/session.model';

@Entity()
export class Conference {
    @ObjectIdColumn() public readonly _id: ObjectID;
    @Column() @Index({unique: true}) public readonly id: number;
    @Column() public readonly name: string;
    @Column() public readonly year: number;
    @Column() public readonly websiteUrl: string;
    @Column() public readonly location: string;

    @OneToMany(type => Session, session => session.conference)
    sessions: Session[];
}