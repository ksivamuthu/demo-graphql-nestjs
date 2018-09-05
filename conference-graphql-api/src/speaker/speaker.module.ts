import { Module } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from './speaker.model';
import { SpeakerResolver } from './speaker.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Speaker])],
    providers: [SpeakerService, SpeakerResolver],
})
export class SpeakerModule {}
