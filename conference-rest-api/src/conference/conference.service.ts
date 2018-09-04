import { Injectable } from '@nestjs/common';
import { Conference } from './conference.model';
import { ConferenceDTO } from './dto/create-conference-dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from '../session/session.model';

@Injectable()
export class ConferenceService {
  constructor(
    @InjectRepository(Conference)
    private readonly conferenceRepo: Repository<Conference>,
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
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
  public async sessions(id: number): Promise<Session[]> {
     return this.sessionRepo.find({where: { conference: id }});
  }
}
