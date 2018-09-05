import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conference } from './conference.model';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';
import { Session } from '../session/session.model';

@Module({
    imports: [TypeOrmModule.forFeature([Conference, Session])],
    controllers: [ConferenceController],
    providers: [ConferenceService],
})
export class ConferenceModule {}
