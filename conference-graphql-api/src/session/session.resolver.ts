import { SessionService } from './session.service';
import { Session, Category } from './session.model';
import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from '@nestjs/graphql';
import { SpeakerService } from '../speaker/speaker.service';
import { SessionDTO } from './dto/create-session-dto';

@Resolver('Session')
export class SessionResolver {
    constructor(private readonly sessionService: SessionService,
                private readonly speakerService: SpeakerService) {}

    @Query('sessions')
    public async findAll():  Promise<Session[]> {
        return this.sessionService.findAll();
    }

    @Query('session')
    public async findById(@Args('id') id: number): Promise<Session> {
        return this.sessionService.findById(id);
    }
    
    @Query('sessionsByCategory')  
    public async findSessionsByCategory(@Args('category') category: Category):  Promise<Session[]> {
        return this.sessionService.findByCategory(category);
    }

    @ResolveProperty('speaker')
    public async sessions(@Parent() session: Session) {
        return this.speakerService.findById(session.speakerId);
    }

    @Mutation('createSession') 
    public async createSession(@Args('session') session: SessionDTO) {
        return this.sessionService.create(session);
    }
}
