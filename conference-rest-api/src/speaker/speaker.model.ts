import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Session } from '../session/session.model';

@Entity()
export class Speaker {
    // tslint:disable-next-line:variable-name
    @PrimaryGeneratedColumn() public readonly id: number;
    @Column() public readonly name: string;
    @Column({length: 1000}) public readonly bio: string;
    @Column() public readonly phonenumber: string;
    @Column() public readonly companyname: string;
    @Column({default: ""}) public readonly companytitle: string;
    @Column({default: ""}) public readonly companywebsite: string;
    @Column({default: ""}) public readonly blog: string;
    @Column({default: ""}) public readonly website: string;
    @Column({default: ""}) public readonly twitter: string;

    @OneToMany(() => Session, session => session.speaker)
    public readonly session: Session[];

    @CreateDateColumn({type: 'timestamp'}) public readonly createdAt: Date;
    @UpdateDateColumn({type: 'timestamp'}) public readonly updatedAt: Date;
}