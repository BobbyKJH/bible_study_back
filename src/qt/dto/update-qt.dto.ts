import { PartialType } from '@nestjs/mapped-types';
import { CreateQtDto } from './create-qt.dto';

export class UpdateQtDto extends PartialType(CreateQtDto) {}
