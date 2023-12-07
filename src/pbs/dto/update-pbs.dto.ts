import { PartialType } from "@nestjs/mapped-types";
import { CreatePbsDto } from "./create-pbs.dto";

export class UpdatePbsDto extends PartialType(CreatePbsDto) {}
