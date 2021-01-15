import { ApiProperty } from '@nestjs/swagger';
import { TarjetaEntity } from 'src/tarjeta/entities/tarjeta.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Double,
} from 'typeorm';

@Entity({
    name: 'Balance',
})
export class BalanceEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({
        name: 'IdBalance',
    })
    IdBalance: number;

    @ApiProperty()
    @ManyToOne(() => TarjetaEntity, tarjeta => tarjeta.IdTarjeta)
    @JoinColumn({
        name: 'IdTarjeta'
    })
    IdTarjeta: number;

    @Column({
        enum: ['C', 'D', 'R']
    })
    Operacion: string;

    @Column({ default: 0, type: 'float' })
    Importe: Double;

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

}