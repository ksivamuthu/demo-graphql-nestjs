import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conference } from './conference.model';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';
import { ConferenceSessionController } from './conference.session.controller';
import { Session } from '../session/session.model';

@Module({
    imports: [TypeOrmModule.forFeature([Conference, Session])],
    controllers: [ConferenceController, ConferenceSessionController],
    providers: [ConferenceService],
})
export class ConferenceModule {}
