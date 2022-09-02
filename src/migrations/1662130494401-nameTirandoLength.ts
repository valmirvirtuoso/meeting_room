import { MigrationInterface, QueryRunner } from "typeorm";

export class nameTirandoLength1662130494401 implements MigrationInterface {
    name = 'nameTirandoLength1662130494401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "name" character varying(150) NOT NULL`);
    }

}
