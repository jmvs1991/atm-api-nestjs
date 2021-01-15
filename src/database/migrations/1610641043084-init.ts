import {MigrationInterface, QueryRunner} from "typeorm";

export class init1610641043084 implements MigrationInterface {
    name = 'init1610641043084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tarjeta" ("Id" SERIAL NOT NULL, "Numero" character varying NOT NULL, "Pin" character varying NOT NULL, "Bloqueado" boolean NOT NULL DEFAULT false, "Intentos" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_10002a11dbe3025766b18ee5739" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tarjeta"`);
    }

}
