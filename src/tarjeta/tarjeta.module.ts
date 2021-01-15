import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { TarjetaService } from './services/tarjeta.service';
import { TarjetaController } from './controllers/tarjeta.controller';
import { TarjetaEntity } from './entities/tarjeta.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TarjetaEntity])
  ],
  providers: [TarjetaService],
  controllers: [TarjetaController]
})
export class TarjetaModule {}
