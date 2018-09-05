import { Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Conference } from '../conference/conference.model';
import { Speaker } from '../speaker/speaker.model';

export enum Category {
    GeneralDiscussion,
    ClientDevelopment,
    WebDevelopment,
    DatabaseDevelopment,
    CloudDevelopment,
    Design,
    ProfessionalDevelopment,
    CareerAdvancement,
    ITTopics
}

export enum TalkLevel {
    Beginner,
    Intermediate,
    Advanced,
    Expert
}
@Entity()
export class Session {
    @PrimaryGeneratedColumn() public readonly id: number;
    @Column() public readonly title: string;
    @Column() public readonly abstract: string;
    @Column('enum', {enum: TalkLevel}) public readonly level: TalkLevel;
    @Column('enum', {enum: Category}) public readonly category: Category;
    @Column() public readonly keywords: string;

    @ManyToOne(() => Conference, conference => conference.sessions)
    @JoinColumn()
    public readonly conference: Conference | number;

    @ManyToOne(() => Speaker, speaker => speaker.session)
    public readonly speaker: Speaker | number;

    @RelationId((session: Session) => session.speaker)
    public readonly speakerId: number;

    @RelationId((session: Session) => session.conference)
    public readonly conferenceId: number;

    @CreateDateColumn({type: 'timestamp'}) public readonly createdAt: Date;
    @UpdateDateColumn({type: 'timestamp'}) public readonly updatedAt: Date;
}