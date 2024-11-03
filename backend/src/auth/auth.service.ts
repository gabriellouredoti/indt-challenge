import {
    BadRequestException,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserRepository } from 'src/users/user.repository';
import { Tokens, UserPayloadProps, UserProps } from 'src/common/types';
import signToken from 'src/common/functions/sign-token.function';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(authDto: AuthDto): Promise<Tokens> {
        const user = await this.userRepository.findOne({
            where: { email: authDto.email },
            relations: {
                profiles: true,
            },
        });

        if (!user)
            throw new ForbiddenException({
                message: 'Usuário não encontrado.',
            });

        if (!user?.status)
            throw new ForbiddenException({
                message: 'Usuário desativado.',
            });

        if (!(await user.validatePassword(authDto.password)))
            throw new BadRequestException({
                message: 'Credenciais inválidas.',
            });

        const tokens = await this.getTokens({
            id: user.id,
            name: user.name,
            email: user.email,
            profiles: user.profiles,
        });

        delete user.password;

        return {
            ...user,
            token: tokens.token,
            message: 'Login realizado com sucesso!',
        };
    }

    async whoami(currentUser: UserPayloadProps, token: string) {
        const user = await this.userRepository.getUser(+currentUser.sub);

        delete user.password;

        return {
            ...user,
            token,
        };
    }

    private async getTokens(user: UserProps): Promise<Tokens> {
        const at = await signToken(
            user,
            process.env.JWT_AT_EXPIRES,
            process.env.JWT_AT_SECRET,
            this.jwtService,
        );

        return { token: at };
    }
}
