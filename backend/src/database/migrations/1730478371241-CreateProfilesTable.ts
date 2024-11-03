import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfilesTable1730478371241 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'profiles',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'description',
						type: 'varchar',
						length: '100',
					},
					{
						name: 'slug',
						type: 'varchar',
						length: '30',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('profiles');
	}
}
