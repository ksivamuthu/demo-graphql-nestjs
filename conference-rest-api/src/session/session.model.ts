import { Column, Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, Index, JoinColumn } from 'typeorm';
import { Conference } from '../conference/conference.model';
import { Speaker } from '../speaker/speaker.model';

@Entity()
export class Session {
    // tslint:disable-next-line:variable-name
    @ObjectIdColumn() public readonly _id: ObjectID;
    @Column() @Index({unique: true}) public readonly id: number;
    @Column() public readonly title: string;
    @Column() public readonly abstract: number;
    @Column() public readonly level: TalkLevel;
    @Column() public readonly category: Category;
    @Column() public readonly keywords: string[];

    @ManyToOne(type => Conference, conference => conference.sessions)
    @JoinColumn({name: 'conference'})
    public readonly conference: Conference;

    @OneToOne(type => Speaker, speaker => speaker.session)
    @JoinColumn({name: 'speaker'})
    public readonly speaker: Speaker;
}

export enum Category {
    GeneralDiscussion,
    ClientDevelopment,
    WebDevelopment,
    DatabaseDevelopment,
    CloudDevelopment,
    Design,
    ProfessionalDevelopment,
    CareerAdvancement,
    ITTopics,
}

export enum TalkLevel {
    Beginner,
    Intermediate,
    Advanced,
    Expert,
}