import { ApiProperty } from '@nestjs/swagger';

export class TarjetaRequest {
  @ApiProperty()
  IdTarjeta?: string = '';

  @ApiProperty()
  Numero?: string = '';

  @ApiProperty()
  Pin?: string = '';
}
