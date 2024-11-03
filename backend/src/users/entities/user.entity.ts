import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	BeforeInsert,
} from 'typeorm';
import { Profile } from './profile.entity';
import { hashData } from 'src/common/functions';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	name: string;

	@Column()
	surname: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	status: number;

	@Column()
	profile_id: number;

	@ManyToOne(() => Profile, (profile) => profile.id)
	@JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
	profiles: Profile;

	@BeforeInsert()
	async hashPassword() {
		if (this.password) this.password = await hashData(this.password);
	}

	async validatePassword(password: string): Promise<boolean> {
		return bcrypt.compare(password, this.password);
	}
}
