import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTablaTarjeta1610679045571 implements MigrationInterface {
    name = 'changeTablaTarjeta1610679045571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP CONSTRAINT "PK_bfe3a76fa2fda96676fd81a84d0"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "idTarjeta"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "creation_at"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "IdTarjeta" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD CONSTRAINT "PK_d261873ce9eacc7b0436b22db33" PRIMARY KEY ("IdTarjeta")`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "Fecha_Creacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "Fecha_Actualizacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "Fecha_Actualizacion"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "Fecha_Creacion"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP CONSTRAINT "PK_d261873ce9eacc7b0436b22db33"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" DROP COLUMN "IdTarjeta"`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD "idTarjeta" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Tarjeta" ADD CONSTRAINT "PK_bfe3a76fa2fda96676fd81a84d0" PRIMARY KEY ("idTarjeta")`);
    }

}
