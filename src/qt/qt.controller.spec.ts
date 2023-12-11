import { Test, TestingModule } from '@nestjs/testing';
import { QtController } from './qt.controller';
import { QtService } from './qt.service';

describe('QtController', () => {
  let controller: QtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QtController],
      providers: [QtService],
    }).compile();

    controller = module.get<QtController>(QtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
