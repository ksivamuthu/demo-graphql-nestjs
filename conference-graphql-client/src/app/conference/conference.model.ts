import { Session } from './sessions.model';

export class Conference {
    id: number;
    name: string;
    year: string;
    location: string;
    websiteUrl: string;
    sessions: Session[];
}
