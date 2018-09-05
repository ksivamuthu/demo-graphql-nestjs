import { ConferenceService } from './conference.service';
import { Resolver, Query, ResolveProperty, Parent, Args, Mutation } from '@nestjs/graphql';
import { Conference } from './conference.model';
import { ConferenceDTO } from './dto/create-conference-dto';

@Resolver('Conference')
export class ConferenceResolver {

    constructor(private readonly conferenceService: ConferenceService) {}

    @Query('conferences')
    public async findAll() {
        return this.conferenceService.findAll();
    }

    @Query('conference')
    public async findById( @Args('id') id: number) {
        return this.conferenceService.findById(id);
    }

    @ResolveProperty('sessions')
    public async sessions(@Parent() conference: Conference) {
        return this.conferenceService.sessions(conference.id);
    }

    @Mutation('createConference') 
    public async createConference(@Args('conference') conference: ConferenceDTO) {
        return this.conferenceService.create(conference);
    }
}
