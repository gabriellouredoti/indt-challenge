import { JwtService } from '@nestjs/jwt';
import { UserProps } from '../types/user.type';

function doExpiresIn(expiresIn: string): number {
	const typeOfTime = expiresIn.match(/(\d{1,3})([hmd])/);

	if (!typeOfTime) {
		throw new Error(
			'Verifique se a variável de ambiente JWT EXPIRES segue o formato: [0-9][h,m,d] por exemplo: 1h, 1m ou 1d.',
		);
	}
	switch (typeOfTime[2]) {
		case 'h':
			return 60 * 60 * parseInt(typeOfTime[1]);
		case 'm':
			return 60 * parseInt(typeOfTime[1]);
		case 'd':
			return 24 * 60 * 60 * parseInt(typeOfTime[1]);
		default:
			throw new Error('Unidade de tempo inválida.');
	}
}

export default async function signToken(
	user: UserProps,
	expiresIn: string = '1h',
	secret = process.env.JWT_AT_SECRET,
	jwtService: JwtService,
) {
	return jwtService.signAsync(
		{
			sub: user.id,
			email: user.email || undefined,
			profiles: user?.profiles,
		},
		{
			secret: secret,
			expiresIn: doExpiresIn(expiresIn),
		},
	);
}
