import { Test, TestingModule } from '@nestjs/testing';
import { PbsController } from './pbs.controller';
import { PbsService } from './pbs.service';

describe('PbsController', () => {
  let controller: PbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PbsController],
      providers: [PbsService],
    }).compile();

    controller = module.get<PbsController>(PbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
