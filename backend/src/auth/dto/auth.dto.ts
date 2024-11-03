import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { IsStrongPassword } from 'src/common/validators';

export class AuthDto {
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
}
