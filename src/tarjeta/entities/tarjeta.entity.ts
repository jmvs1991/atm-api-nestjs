import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'Tarjeta',
})
export class TarjetaEntity {
  
  @ApiProperty()
  @PrimaryGeneratedColumn({
    name: 'IdTarjeta',
  })
  IdTarjeta: number;

  @Column()
  Numero: string;

  @Column()
  Pin: string;

  @Column({ default: false })
  Bloqueado: boolean;

  @Column({ default: 0 })
  Intentos: number;

  @CreateDateColumn({
    name: 'Fecha_Creacion',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaCreacion: Date;

  @UpdateDateColumn({
    name: 'Fecha_Actualizacion',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaActualizacion: Date;
}
