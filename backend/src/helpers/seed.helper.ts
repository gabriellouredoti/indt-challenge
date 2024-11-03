import { DataSource } from 'typeorm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { seedData } from 'src/seeders/initial-data.seed';

async function runSeeder() {
    const app = await NestFactory.create(AppModule);
    const dataSource = app.get(DataSource);
    await seedData(dataSource);
    await app.close();
}
runSeeder();
