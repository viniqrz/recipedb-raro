import { MigrationInterface, QueryRunner } from 'typeorm';

export class dropManyToMany1635895618833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`recipe_ingredients_ingredient\``);
    await queryRunner.query(`DROP TABLE \`ingredient_recipes_recipe\``);
  }
}
