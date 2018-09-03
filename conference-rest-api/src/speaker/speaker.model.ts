import { Column, Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, Index } from 'typeorm';
import { Session } from '../session/session.model';

@Entity()
export class Speaker {
    // tslint:disable-next-line:variable-name
    @ObjectIdColumn() public readonly _id: ObjectID;
    @Column() @Index({unique: true}) public readonly id: number;
    @Column() public readonly name: string;
    @Column() public readonly bio: string;
    @Column() public readonly phonenumber: string;
    @Column() public readonly companyname: string;
    @Column() public readonly companytitle: string;
    @Column() public readonly companywebsite: string;
    @Column() public readonly blog: string;
    @Column() public readonly website: string;
    @Column() public readonly twitter: string;

    @OneToOne(type => Session, session => session.speaker)
    public readonly session: Session;
}