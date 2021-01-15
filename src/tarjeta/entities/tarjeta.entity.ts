import { ApiProperty } from '@nestjs/swagger';
import { BalanceEntity } from 'src/balance/entities/balance.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Double,
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

  @ApiProperty()
  @Column({
    unique: true
  })
  Numero: string;

  @ApiProperty()
  @Column()
  Pin: string;

  @ApiProperty()
  @Column({ default: false })
  Bloqueado: boolean;

  @ApiProperty()
  @Column({ default: 0 })
  Intentos: number;

  @ApiProperty()
  @Column({ default: 0, type: 'float' })
  Balance: Double;

  @ApiProperty()
  @CreateDateColumn({
    name: 'Fecha_Creacion',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaCreacion: Date;

  @ApiProperty()
  @UpdateDateColumn({
    name: 'Fecha_Actualizacion',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaActualizacion: Date;

  @ApiProperty()
  @OneToMany(() => BalanceEntity, balance => balance.IdTarjeta)
  Balances: BalanceEntity[];

}
