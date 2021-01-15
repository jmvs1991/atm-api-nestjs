import {MigrationInterface, QueryRunner} from "typeorm";

export class renombrarRelacion1610727585136 implements MigrationInterface {
    name = 'renombrarRelacion1610727585136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Balance" DROP CONSTRAINT "FK_bff865c993dd73667e515177a12"`);
        await queryRunner.query(`ALTER TABLE "Balance" RENAME COLUMN "tarjetaIdTarjeta" TO "IdTarjeta"`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD CONSTRAINT "FK_36dc8f29c766899a500a2b80db8" FOREIGN KEY ("IdTarjeta") REFERENCES "Tarjeta"("IdTarjeta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Balance" DROP CONSTRAINT "FK_36dc8f29c766899a500a2b80db8"`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Balance" RENAME COLUMN "IdTarjeta" TO "tarjetaIdTarjeta"`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD CONSTRAINT "FK_bff865c993dd73667e515177a12" FOREIGN KEY ("tarjetaIdTarjeta") REFERENCES "Tarjeta"("IdTarjeta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
