import { Injectable } from '@nestjs/common';
import { CreateDbTestDto } from './dto/create-db-test.dto';
import { UpdateDbTestDto } from './dto/update-db-test.dto';

@Injectable()
export class DbTestService {
  create(createDbTestDto: CreateDbTestDto) {
    return 'This action adds a new dbTest';
  }

  findAll() {
    return `This action returns all dbTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dbTest`;
  }

  update(id: number, updateDbTestDto: UpdateDbTestDto) {
    return `This action updates a #${id} dbTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} dbTest`;
  }
}
