import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conference } from './conference.model';
import { ConferenceService } from './conference.service';
import { Session } from '../session/session.model';
import { ConferenceResolver } from './conference.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Conference, Session])],
    providers: [ConferenceService, ConferenceResolver],
})
export class ConferenceModule {}
