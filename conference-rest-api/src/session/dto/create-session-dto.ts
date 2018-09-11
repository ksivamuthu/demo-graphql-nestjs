import { TalkLevel, Category } from "../session.model";

export class SessionDTO {
    readonly title: string;
    readonly abstract: string;
    readonly level: TalkLevel;
    readonly category: Category;
    readonly keywords: string;
    readonly speaker: number;
    readonly conference: number;
}