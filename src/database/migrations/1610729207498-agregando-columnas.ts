import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoColumnas1610729207498 implements MigrationInterface {
    name = 'agregandoColumnas1610729207498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "Balance" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD "Operacion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD "Importe" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD "Fecha_Creacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD "Fecha_Actualizacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Balance" DROP COLUMN "Fecha_Actualizacion"`);
        await queryRunner.query(`ALTER TABLE "Balance" DROP COLUMN "Fecha_Creacion"`);
        await queryRunner.query(`ALTER TABLE "Balance" DROP COLUMN "Importe"`);
        await queryRunner.query(`ALTER TABLE "Balance" DROP COLUMN "Operacion"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "Balance"`);
    }

}
