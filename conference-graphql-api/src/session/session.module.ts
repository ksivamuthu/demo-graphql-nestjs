import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './session.model';
import { SessionResolver } from './session.resolver';
import { SpeakerService } from '../speaker/speaker.service';
import { Speaker } from '../speaker/speaker.model';

@Module({
    imports: [TypeOrmModule.forFeature([Session, Speaker])],
    providers: [SessionService, SpeakerService, SessionResolver],
})
export class SessionModule {}
