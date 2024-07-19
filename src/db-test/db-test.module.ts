import { Module } from '@nestjs/common';
import { DbTestService } from './db-test.service';
import { DbTestController } from './db-test.controller';
import { DbTest } from './entities/db-test.entity'; //关联实体
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DbTest])],
  controllers: [DbTestController],
  providers: [DbTestService],
})
export class DbTestModule {}
