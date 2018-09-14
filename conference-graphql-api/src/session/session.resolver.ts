import { SessionService } from './session.service';
import { Session, Category } from './session.model';
import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Subscription, Context } from '@nestjs/graphql';
import { SpeakerService } from '../speaker/speaker.service';
import { SessionDTO } from './dto/create-session-dto';
import { PubSub } from 'graphql-subscriptions';
import * as DataLoader from 'dataloader';

const pubSub = new PubSub();
@Resolver('Session')
export class SessionResolver {

    constructor(private readonly sessionService: SessionService,
        private readonly speakerService: SpeakerService) {}

    @Query('sessions')
    public async findAll(@Context() ctx): Promise<Session[]> {
        ctx.dataloader = new DataLoader(keys => this.speakerService.findByIds(keys as number[])); 
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
    public async sessions(@Context() ctx, @Parent() session: Session) {
        console.log(`Retrieving speaker with id: ${session.speakerId}`);
        return this.speakerService.findById(session.speakerId);
        // return ctx.dataloader.load(session.speakerId);
    }

    @Mutation('starSession') 
    public async starSession(@Args('id') id: number) {
        var result = await this.sessionService.incrementStars(id);
        pubSub.publish('sessionStarred', { sessionStarred: result });
        return result;
    }
    
    @Mutation('createSession') 
    public async createSession(@Args('session') session: SessionDTO) {
        return this.sessionService.create(session);
    }

    @Subscription('sessionStarred')
    public sessionStarred() {
      return {
        subscribe: () => pubSub.asyncIterator('sessionStarred')
      };
    }
}
