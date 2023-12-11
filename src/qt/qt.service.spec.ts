import { Test, TestingModule } from '@nestjs/testing';
import { QtService } from './qt.service';

describe('QtService', () => {
  let service: QtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QtService],
    }).compile();

    service = module.get<QtService>(QtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
