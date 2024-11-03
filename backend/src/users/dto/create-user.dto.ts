import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';
import { IsStrongPassword, PasswordMatch } from 'src/common/validators';

export class CreateUserDto {
	@ApiProperty({
		required: true,
		type: 'string',
	})
	@IsNotEmpty({
		message: 'O campo "name" não pode estar vazio!',
	})
	@MinLength(3, { message: 'Campo nome requer no mínimo 3 caracteres!' })
	@MaxLength(30, { message: 'Campo nome requer no máximo 30 caracteres!' })
	@IsString()
	@Matches(/^\S.*\S$/, {
		message: 'O Nome não pode começar ou terminar com espaços em branco.',
	})
	@Matches(/^[a-zA-ZÀ-ÿçÇ]+(\s+[a-zA-ZÀ-ÿçÇ]+)*$/, {
		message:
			"O campo nome deve conter caracteres alfabéticos, incluindo acentuação e 'ç'",
	})
	name: string;

	@ApiProperty({
		required: true,
		type: 'string',
	})
	@IsNotEmpty({
		message: 'O campo "surname" não pode estar vazio!',
	})
	@MinLength(3, { message: 'Campo sobrenome requer no mínimo 3 caracteres!' })
	@MaxLength(30, {
		message: 'Campo sobrennome requer no máximo 30 caracteres!',
	})
	@IsString()
	@Matches(/^\S.*\S$/, {
		message:
			'O sobrenome não pode começar ou terminar com espaços em branco.',
	})
	@Matches(/^[a-zA-ZÀ-ÿçÇ]+(\s+[a-zA-ZÀ-ÿçÇ]+)*$/, {
		message:
			"O campo sobrenome deve conter caracteres alfabéticos, incluindo acentuação e 'ç'",
	})
	surname: string;

	@ApiProperty({
		required: true,
		type: 'string',
	})
	@IsNotEmpty({
		message: 'O campo "email" não pode estar vazio!',
	})
	@IsString()
	@IsEmail({}, { message: 'E-mail inválido!' })
	email: string;

	@ApiProperty({
		required: true,
		type: 'number',
	})
	@IsNotEmpty({
		message: 'O campo "profile_id" não pode estar vazio!',
	})
	@Transform(({ value }) => {
		return Number(value);
	})
	profile_id: number;

	@ApiProperty({
		required: false,
		type: 'string',
	})
	@IsNotEmpty({
		message: 'O campo de senha não pode estar vazio.',
	})
	@MaxLength(20, {
		message: 'Campo senha necessita no máximo 20 caracteres!',
	})
	@IsStrongPassword({ field: 'senha' })
	password: string;

	@ApiProperty({
		required: false,
		type: 'string',
	})
	@IsNotEmpty({
		message: 'O campo de confirmação de senha não pode estar vazio.',
	})
	@MaxLength(12, {
		message:
			'Campo confirmação de senha necessita no máximo 20 caracteres!',
	})
	@IsStrongPassword({ field: 'confirmação de senha' })
	@PasswordMatch()
	confirmPassword: string;
}
