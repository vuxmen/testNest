import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseAbstract } from './BaseAbstract';

Entity('user');
export class UserEntity extends BaseAbstract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
