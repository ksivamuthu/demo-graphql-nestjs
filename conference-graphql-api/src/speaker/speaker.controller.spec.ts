import { Test, TestingModule } from '@nestjs/testing';
import { SpeakerController } from './speaker.controller';

describe('Speaker Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SpeakerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SpeakerController = module.get<SpeakerController>(SpeakerController);
    expect(controller).toBeDefined();
  });
});
