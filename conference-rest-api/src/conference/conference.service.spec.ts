import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceService } from './conference.service';

describe('ConferenceService', () => {
  let service: ConferenceService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConferenceService],
    }).compile();
    service = module.get<ConferenceService>(ConferenceService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
