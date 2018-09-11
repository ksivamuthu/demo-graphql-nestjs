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

export class Session {
    id: number;
    title: string;
    abstract: string;
    level: TalkLevel;
    category: Category;
    keywords: string;
    stars: number;
}
