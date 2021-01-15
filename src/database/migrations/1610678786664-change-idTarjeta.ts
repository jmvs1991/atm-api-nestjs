import {MigrationInterface, QueryRunner} from "typeorm";

export class changeIdTarjeta1610678786664 implements MigrationInterface {
    name = 'changeIdTarjeta1610678786664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" RENAME COLUMN "Id" TO "idTarjeta"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" RENAME CONSTRAINT "PK_10002a11dbe3025766b18ee5739" TO "PK_bfe3a76fa2fda96676fd81a84d0"`);
        await queryRunner.query(`ALTER SEQUENCE "Tarjeta_Id_seq" RENAME TO "Tarjeta_idTarjeta_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."creation_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."updated_at" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."creation_at" IS NULL`);
        await queryRunner.query(`ALTER SEQUENCE "Tarjeta_idTarjeta_seq" RENAME TO "Tarjeta_Id_seq"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" RENAME CONSTRAINT "PK_bfe3a76fa2fda96676fd81a84d0" TO "PK_10002a11dbe3025766b18ee5739"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" RENAME COLUMN "idTarjeta" TO "Id"`);
    }

}
