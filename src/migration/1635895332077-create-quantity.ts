import {MigrationInterface, QueryRunner} from "typeorm";

export class createQuantity1635895332077 implements MigrationInterface {
    name = 'createQuantity1635895332077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`quantity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`recipeId\` int NOT NULL, \`ingredientId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quantity\` ADD CONSTRAINT \`FK_f86daf7c53a10fb87ebc61587df\` FOREIGN KEY (\`recipeId\`) REFERENCES \`recipe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quantity\` ADD CONSTRAINT \`FK_0e4f529bff7969ac2a2a46a8718\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredient\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quantity\` DROP FOREIGN KEY \`FK_0e4f529bff7969ac2a2a46a8718\``);
        await queryRunner.query(`ALTER TABLE \`quantity\` DROP FOREIGN KEY \`FK_f86daf7c53a10fb87ebc61587df\``);
        await queryRunner.query(`DROP TABLE \`quantity\``);
    }

}
