import { SpeakerService } from "./speaker.service";
import { Args, Query, Resolver, Mutation } from "@nestjs/graphql";
import { Speaker } from "./speaker.model";
import { SpeakerDTO } from "./dto/create-speaker-dto";

@Resolver('Speaker')
export class SpeakerResolver {
    constructor(private readonly speakerService: SpeakerService) {}

    @Query('speakers')
    public async findAll():  Promise<Speaker[]> {
        return this.speakerService.findAll();
    }

    @Query('speaker')
    public async findById(@Args('id') id: number): Promise<Speaker> {
        return this.speakerService.findById(id);
    }

    @Mutation('createSpeaker') 
    public async createSpeaker(@Args('speaker') speaker: SpeakerDTO) {
        return this.speakerService.create(speaker);
    }
}
