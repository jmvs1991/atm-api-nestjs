import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarjetaEntity } from './../entities/tarjeta.entity';

@Injectable()
export class TarjetaService {
  constructor(
    @InjectRepository(TarjetaEntity)
    private TarjetaRepo: Repository<TarjetaEntity>,
  ) {}

  findAll() {
    return this.TarjetaRepo.find();
  }

  findOne(id: number) {
    return this.TarjetaRepo.findOne(id);
  }

  findByNro(numero: string) {
    return this.TarjetaRepo.find({
      where: { Numero: numero },
      take: 1,
    });
  }

  create(body: any) {
    const newTarjeta = this.TarjetaRepo.create(body);
    return this.TarjetaRepo.save(newTarjeta);
  }

  async update(id: number, body: any) {
    const tarjeta = await this.TarjetaRepo.findOne(id);
    this.TarjetaRepo.merge(tarjeta, body);
    return this.TarjetaRepo.save(tarjeta);
  }

  async delete(id: number) {
    await this.TarjetaRepo.delete(id);
    return true;
  }
}
