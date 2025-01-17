import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Board, (board) => board.photos, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  board: Board;
}
