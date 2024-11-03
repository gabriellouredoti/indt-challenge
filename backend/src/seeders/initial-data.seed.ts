import { Profile } from 'src/users/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';

export async function seedData(dataSource: DataSource): Promise<void> {
    const profile_list = [
        {
            id: 1,
            description: 'Administrador',
            slug: 'admin',
        },
        {
            id: 2,
            description: 'Comum',
            slug: 'guest',
        },
    ];

    const profileRepository = dataSource.getRepository(Profile);
    const userRepository = dataSource.getRepository(User);

    for (const profile of profile_list) {
        const createProfile = profileRepository.create(
            profile as unknown as Profile,
        );
        await profileRepository.save(createProfile);
    }

    const user = new User();

    user.name = 'Indt';
    user.email = 'indt@email.com';
    user.surname = 'Challenge';
    user.password = 'Indt@2024';
    user.profile_id = 1;

    await userRepository.save(user);
}
