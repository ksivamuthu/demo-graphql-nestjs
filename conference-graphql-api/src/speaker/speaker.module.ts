import { Module } from '@nestjs/common';
import { SpeakerController } from './speaker.controller';
import { SpeakerService } from './speaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from './speaker.model';

@Module({
    imports: [TypeOrmModule.forFeature([Speaker])],
    controllers: [SpeakerController],
    providers: [SpeakerService],
})
export class SpeakerModule {}
