import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserTableAddColumnSurname1730652715494
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users',
			new TableColumn({
				name: 'surname',
				type: 'varchar',
				isNullable: false,
				length: '100',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('users', 'surname');
	}
}
