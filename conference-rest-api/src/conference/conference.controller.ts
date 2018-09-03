import { Controller, Get, Param, ParseIntPipe, Post, Put, Delete, Body } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { ConferenceDTO } from './dto/create-conference-dto';

@Controller('conferences')
export class ConferenceController {

    constructor(private readonly conferenceService: ConferenceService) {}

    @Get()
    public async findAll() {
        return this.conferenceService.findAll();
    }

    @Get(':id')
    public async findById(@Param('id', new ParseIntPipe())id: number) {
        return this.conferenceService.findById(id);
    }

    @Post()
    public async create(@Body() confDto: ConferenceDTO) {
        return this.conferenceService.create(confDto);
    }

    @Put(':id')
    public async update(@Param('id', new ParseIntPipe())id: number, @Body() confDto: ConferenceDTO) {
        return this.conferenceService.update(id, confDto);
    }

    @Delete(':id')
    public async remove(@Param('id', new ParseIntPipe())id: number) {
        return this.conferenceService.delete(id);
    }
}
