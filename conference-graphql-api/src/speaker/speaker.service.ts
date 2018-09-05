import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Speaker } from './speaker.model';
import { SpeakerDTO } from './dto/create-speaker-dto';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private readonly speakerRepo: Repository<Speaker>,
  ) {}

  public async create(speakerDto: SpeakerDTO): Promise<Speaker> {
    const speaker = { ...new Speaker(), ...speakerDto };
    return this.speakerRepo.save(speaker);
  }

  public async findAll(): Promise<Speaker[]> {
    return this.speakerRepo.find();
  }

  public async findById(id: number): Promise<Speaker> {
    return this.speakerRepo.findOneOrFail({ where: { id } });
  }

  public async update(id: number, speaker: Speaker) {
    const existing = await this.speakerRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.speakerRepo.save({ ...existing, ...Speaker });
    }
  }

  public async delete(id: number) {
    const existing = await this.speakerRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.speakerRepo.remove(existing);
    }
  }
}
