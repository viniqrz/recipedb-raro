import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quantity } from './QuantityEntity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @OneToMany(() => Quantity, (quantity) => quantity.ingredient)
  quantities: Quantity[];
}
