import {MigrationInterface, QueryRunner} from "typeorm";

export class fieldNumeroUnique1610724942184 implements MigrationInterface {
    name = 'fieldNumeroUnique1610724942184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Numero" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD CONSTRAINT "UQ_deb679cf5595f8a5fef75c630f8" UNIQUE ("Numero")`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP CONSTRAINT "UQ_deb679cf5595f8a5fef75c630f8"`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Numero" IS NULL`);
    }

}
