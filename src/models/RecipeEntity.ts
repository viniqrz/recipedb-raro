import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quantity } from './QuantityEntity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 200 })
  name: string;

  @OneToMany(() => Quantity, (quantity) => quantity.recipe)
  quantities: Quantity[];
}
