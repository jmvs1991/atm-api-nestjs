import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { BalanceModule } from "./balance/balance.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'nico',
      password: 'postgres',
      database: 'my_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    TarjetaModule,
    BalanceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
