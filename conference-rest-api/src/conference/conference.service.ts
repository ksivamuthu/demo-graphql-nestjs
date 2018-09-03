import { Injectable } from '@nestjs/common';
import { Conference } from './conference.model';
import { ConferenceDTO } from './dto/create-conference-dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConferenceService {
  constructor(
    @InjectRepository(Conference)
    private readonly conferenceRepo: Repository<Conference>,
  ) {}

  public async create(confDto: ConferenceDTO): Promise<Conference> {
    const conference = { ...new Conference(), ...confDto };
    return this.conferenceRepo.save(conference);
  }

  public async findAll(): Promise<Conference[]> {
    return this.conferenceRepo.find();
  }

  public async findById(id: number): Promise<Conference> {
    return this.conferenceRepo.findOneOrFail({ where: { id } });
  }

  public async update(id: number, conference: ConferenceDTO) {
    const existing = await this.conferenceRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.conferenceRepo.save({ ...existing, ...conference });
    }
  }

  public async delete(id: number) {
    const existing = await this.conferenceRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.conferenceRepo.remove(existing);
    }
  }
}
