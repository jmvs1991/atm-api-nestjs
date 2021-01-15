import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TarjetaService } from './../services/tarjeta.service';
import { TarjetaRequest } from '../../models/Tarjeta.request';
import { TarjetaResponse } from 'src/models/Tarjeta.response';
import { TarjetaEntity } from '../entities/tarjeta.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tarjeta')
@Controller('api/tarjeta')
export class TarjetaController {
  constructor(private tarjetaService: TarjetaService) {}

  @Get()
  async getAll(): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const tarjetas: TarjetaEntity[] = await this.tarjetaService.findAll();
      respuesta.Resultado = true;
      respuesta.Mensaje = '';
      respuesta.Datos = tarjetas;
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const tarjeta: TarjetaEntity = await this.tarjetaService.findOne(id);
      respuesta.Resultado = true;
      respuesta.Mensaje = '';
      respuesta.Datos = [tarjeta];
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }

  @Post()
  async create(@Body() Body: TarjetaRequest): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const { Numero, Pin } = Body;

      if (!Numero) {
        respuesta.Resultado = false;
        respuesta.Mensaje = 'Número de tarjeta inválido.';
        return respuesta;
      }

      if (!Pin) {
        respuesta.Resultado = false;
        respuesta.Mensaje = 'Pin inválido.';
        return respuesta;
      }

      const tarjeta: TarjetaEntity[] = await this.tarjetaService.create(Body);
      respuesta.Resultado = true;
      respuesta.Mensaje = '';
      respuesta.Datos = tarjeta;
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }

  @Post('ValidarNro')
  @HttpCode(200)
  async ValidarNro(@Body() Body: TarjetaRequest): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const { Numero } = Body;

      if (!Numero) {
        respuesta.Resultado = false;
        respuesta.Mensaje = 'Debe indicar el nro de la tarjeta.';
        return respuesta;
      }

      const tarjetas: TarjetaEntity[] = await this.tarjetaService.findByNro(
        Numero,
      );

      if (tarjetas.length <= 0 || !tarjetas) {
        respuesta.Resultado = false;
        respuesta.Mensaje = 'El nro de la tarjeta no fue encontrado.';
        return respuesta;
      }

      const tarjeta: TarjetaEntity = tarjetas[0];
      const { Bloqueado } = tarjeta;

      if (Bloqueado) {
        respuesta.Resultado = false;
        respuesta.Mensaje = 'La tarjeta se encuentra bloqueada.';
        return respuesta;
      }

      respuesta.Resultado = true;
      respuesta.Mensaje = '';
      respuesta.Datos = tarjetas;
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() Body: any,
  ): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const tarjeta: TarjetaEntity = await this.tarjetaService.update(id, Body);

      respuesta.Resultado = true;
      respuesta.Mensaje = '';
      respuesta.Datos = [tarjeta];
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<TarjetaResponse> {
    let respuesta: TarjetaResponse = new TarjetaResponse();

    try {
      const resultado: boolean = await this.tarjetaService.delete(id);

      respuesta.Resultado = resultado;
      respuesta.Mensaje = '';
    } catch (error) {
      respuesta.Resultado = false;
      respuesta.Mensaje = error.message;
    }

    return respuesta;
  }
}
