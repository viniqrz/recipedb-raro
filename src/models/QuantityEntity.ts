import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './IngredientEntity';
import { Recipe } from './RecipeEntity';

@Entity()
export class Quantity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  unit: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.quantities, { nullable: false })
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.quantities, {
    nullable: false,
  })
  ingredient: Ingredient;
}
