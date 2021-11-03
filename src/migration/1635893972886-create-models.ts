import {MigrationInterface, QueryRunner} from "typeorm";

export class createModels1635893972886 implements MigrationInterface {
    name = 'createModels1635893972886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`recipe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredient\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_b6802ac7fbd37aa71d856a95d8\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recipe_ingredients_ingredient\` (\`recipeId\` int NOT NULL, \`ingredientId\` int NOT NULL, INDEX \`IDX_b67e81a9afa83f2ee13440175c\` (\`recipeId\`), INDEX \`IDX_d2bbcf7bab477bfdcec65465c0\` (\`ingredientId\`), PRIMARY KEY (\`recipeId\`, \`ingredientId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredient_recipes_recipe\` (\`ingredientId\` int NOT NULL, \`recipeId\` int NOT NULL, INDEX \`IDX_072bbf7228576c8f78cd665789\` (\`ingredientId\`), INDEX \`IDX_d6419735e518590462fb34edc8\` (\`recipeId\`), PRIMARY KEY (\`ingredientId\`, \`recipeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`recipe_ingredients_ingredient\` ADD CONSTRAINT \`FK_b67e81a9afa83f2ee13440175ce\` FOREIGN KEY (\`recipeId\`) REFERENCES \`recipe\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recipe_ingredients_ingredient\` ADD CONSTRAINT \`FK_d2bbcf7bab477bfdcec65465c0c\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredient\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`ingredient_recipes_recipe\` ADD CONSTRAINT \`FK_072bbf7228576c8f78cd6657898\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredient\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`ingredient_recipes_recipe\` ADD CONSTRAINT \`FK_d6419735e518590462fb34edc89\` FOREIGN KEY (\`recipeId\`) REFERENCES \`recipe\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredient_recipes_recipe\` DROP FOREIGN KEY \`FK_d6419735e518590462fb34edc89\``);
        await queryRunner.query(`ALTER TABLE \`ingredient_recipes_recipe\` DROP FOREIGN KEY \`FK_072bbf7228576c8f78cd6657898\``);
        await queryRunner.query(`ALTER TABLE \`recipe_ingredients_ingredient\` DROP FOREIGN KEY \`FK_d2bbcf7bab477bfdcec65465c0c\``);
        await queryRunner.query(`ALTER TABLE \`recipe_ingredients_ingredient\` DROP FOREIGN KEY \`FK_b67e81a9afa83f2ee13440175ce\``);
        await queryRunner.query(`DROP INDEX \`IDX_d6419735e518590462fb34edc8\` ON \`ingredient_recipes_recipe\``);
        await queryRunner.query(`DROP INDEX \`IDX_072bbf7228576c8f78cd665789\` ON \`ingredient_recipes_recipe\``);
        await queryRunner.query(`DROP TABLE \`ingredient_recipes_recipe\``);
        await queryRunner.query(`DROP INDEX \`IDX_d2bbcf7bab477bfdcec65465c0\` ON \`recipe_ingredients_ingredient\``);
        await queryRunner.query(`DROP INDEX \`IDX_b67e81a9afa83f2ee13440175c\` ON \`recipe_ingredients_ingredient\``);
        await queryRunner.query(`DROP TABLE \`recipe_ingredients_ingredient\``);
        await queryRunner.query(`DROP INDEX \`IDX_b6802ac7fbd37aa71d856a95d8\` ON \`ingredient\``);
        await queryRunner.query(`DROP TABLE \`ingredient\``);
        await queryRunner.query(`DROP TABLE \`recipe\``);
    }

}
