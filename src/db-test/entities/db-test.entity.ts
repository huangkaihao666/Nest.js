import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class DbTest {
  @PrimaryGeneratedColumn() //自增
  id: number;
  @Column() //对应数据库表的列
  stuName: string;
  @Column() //对应数据库表的列
  stuAge: number;
}
