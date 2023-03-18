import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Asegurándose de que la configuración esté disponible
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('PGHOST'),
        port: configService.get<number>('PGPORT'),
        username: configService.get<string>('PGUSERNAME'),
        password: configService.get<string>('PGPASSWORD'),
        database: configService.get<string>('PGDATABASE'),
        entities: ['dist/**/*.entity{.ts,.js}'], // Agregando entidades a la configuración
        synchronize: true, 
        retryDelay:3000,
        retryAttempts:10,
      }),
      inject: [ConfigService],
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
