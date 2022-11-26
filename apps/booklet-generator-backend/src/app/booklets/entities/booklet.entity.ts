import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Booklet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}

export default Booklet;
