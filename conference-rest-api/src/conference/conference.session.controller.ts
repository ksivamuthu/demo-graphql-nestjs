import { Controller, Get, Param, ParseIntPipe, Post, Put, Delete, Body } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { ConferenceDTO } from './dto/create-conference-dto';

@Controller('sessions')
export class ConferenceSessionController {

    constructor(private readonly conferenceService: ConferenceService) {}

    @Get()
    public async findAll() {
        return this.conferenceService.findAll();
    }
}
