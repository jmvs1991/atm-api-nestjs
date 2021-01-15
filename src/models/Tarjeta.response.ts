import { TarjetaEntity } from 'src/tarjeta/entities/tarjeta.entity';
import { Respuesta } from './Respuesta';
import { ApiProperty } from '@nestjs/swagger';

export class TarjetaResponse implements Respuesta {

  @ApiProperty()
  Resultado: boolean = false;

  @ApiProperty()
  Mensaje: string = '';

  @ApiProperty()
  Datos: TarjetaEntity[] = [];
}