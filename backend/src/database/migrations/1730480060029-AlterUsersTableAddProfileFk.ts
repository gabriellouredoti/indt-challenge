import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class AlterUsersTableAddProfileFk1730480060029
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users',
			new TableColumn({
				name: 'profile_id',
				type: 'integer',
				isNullable: false,
			}),
		);

		await queryRunner.createForeignKey(
			'users',
			new TableForeignKey({
				name: 'users_profiles_fk',
				columnNames: ['profile_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'profiles',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('users', 'users_profiles_fk');
		await queryRunner.dropColumn('users', 'profile_id');
	}
}
