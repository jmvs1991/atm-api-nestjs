import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTasks1610678565910 implements MigrationInterface {
    name = 'changeTasks1610678565910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "creation_at"`);
    }

}
