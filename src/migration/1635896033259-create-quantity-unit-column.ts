import {MigrationInterface, QueryRunner} from "typeorm";

export class createQuantityUnitColumn1635896033259 implements MigrationInterface {
    name = 'createQuantityUnitColumn1635896033259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quantity\` ADD \`unit\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quantity\` DROP COLUMN \`unit\``);
    }

}
