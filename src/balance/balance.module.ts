import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { BalanceController } from "./controllers/balance.controller";
import { BalanceService } from "./services/balance.service"
import { BalanceEntity } from "./entities/balance.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([BalanceEntity])
    ],
    providers: [BalanceService],
    controllers: [BalanceController]
})
export class BalanceModule { }
