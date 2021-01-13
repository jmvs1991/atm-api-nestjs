import { Module } from '@nestjs/common';
import { TarjetaService } from './services/tarjeta.service';
import { TarjetaController } from './controllers/tarjeta.controller';

@Module({
  providers: [TarjetaService],
  controllers: [TarjetaController]
})
export class TarjetaModule {}
