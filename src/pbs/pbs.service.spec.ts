import { Test, TestingModule } from '@nestjs/testing';
import { PbsService } from './pbs.service';

describe('PbsService', () => {
  let service: PbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PbsService],
    }).compile();

    service = module.get<PbsService>(PbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
