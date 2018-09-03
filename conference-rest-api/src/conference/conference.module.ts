import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conference } from './conference.model';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';

@Module({
    imports: [TypeOrmModule.forFeature([Conference])],
    controllers: [ConferenceController],
    providers: [ConferenceService],
})
export class ConferenceModule {}
