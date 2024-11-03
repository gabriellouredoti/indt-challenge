import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
@Entity('profiles')
export class Profile {
	@PrimaryGeneratedColumn('increment')
	id: number;
	@Column()
	description: string;
	@Column()
	slug: string;
	@OneToMany(() => User, (user) => user.profiles)
	users: User[];
}
