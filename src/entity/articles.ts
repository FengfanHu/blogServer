import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Categories } from './categories';
import { User } from './user';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desciption: string;

  @Column()
  content: string;

  @CreateDateColumn()
  'created_at': Date;

  @UpdateDateColumn()
  'updated_at': Date;

  @ManyToOne(() => Categories, category => category.articles)
  category: Categories;

  @ManyToOne(() => User, user => user.articles)
  user: User;
}
