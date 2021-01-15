import {MigrationInterface, QueryRunner} from "typeorm";

export class relaciones1610727169737 implements MigrationInterface {
    name = 'relaciones1610727169737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Balance" ("IdBalance" SERIAL NOT NULL, "tarjetaIdTarjeta" integer, CONSTRAINT "PK_17d37ca487374bfa0f2fd533c55" PRIMARY KEY ("IdBalance"))`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Balance" ADD CONSTRAINT "FK_bff865c993dd73667e515177a12" FOREIGN KEY ("tarjetaIdTarjeta") REFERENCES "Tarjeta"("IdTarjeta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Balance" DROP CONSTRAINT "FK_bff865c993dd73667e515177a12"`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Actualizacion" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Tarjeta"."Fecha_Creacion" IS NULL`);
        await queryRunner.query(`DROP TABLE "Balance"`);
    }

}
