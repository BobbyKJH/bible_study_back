import { PartialType } from '@nestjs/mapped-types';
import { CreatePbsDto } from 'pbs/dto/create-pbs.dto';

export class UpdatePbsDto extends PartialType(CreatePbsDto) {}
