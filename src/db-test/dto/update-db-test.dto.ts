import { PartialType } from '@nestjs/swagger';
import { CreateDbTestDto } from './create-db-test.dto';

export class UpdateDbTestDto extends PartialType(CreateDbTestDto) {}
