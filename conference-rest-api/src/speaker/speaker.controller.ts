import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { Speaker } from './speaker.model';
import { SpeakerService } from './speaker.service';

@Controller('speakers')
export class SpeakerController {
    constructor(private readonly speakerService: SpeakerService) {}

    @Get()
    public async findAll() {
        return this.speakerService.findAll();
    }

    @Get(':id')
    public async findById(@Param('id', new ParseIntPipe())id: number) {
        return this.speakerService.findById(id);
    }

    @Post()
    public async create(@Body() speakerDto: Speaker) {
        return this.speakerService.create(speakerDto);
    }

    @Put(':id')
    public async update(@Param('id', new ParseIntPipe())id: number, @Body() speakerDto: Speaker) {
        return this.speakerService.update(id, speakerDto);
    }

    @Delete(':id')
    public async remove(@Param('id', new ParseIntPipe())id: number) {
        return this.speakerService.delete(id);
    }
}
