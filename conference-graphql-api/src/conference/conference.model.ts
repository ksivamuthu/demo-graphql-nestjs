import { Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Session } from '../session/session.model';

@Entity()
export class Conference {
    @PrimaryGeneratedColumn() public readonly id: number;
    @Column() public readonly name: string;
    @Column() public readonly year: number;
    @Column() public readonly websiteUrl: string;
    @Column() public readonly location: string;
    @CreateDateColumn({type: 'timestamp'}) public readonly createdAt: Date;
    @UpdateDateColumn({type: 'timestamp'}) public readonly updatedAt: Date;

    @OneToMany(type => Session, session => session.conference)
    sessions: Session[];
}