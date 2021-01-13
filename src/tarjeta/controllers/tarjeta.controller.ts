import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('api/tarjeta')
export class TarjetaController {

    @Get()
    getAll() {
        return [1, 2, 3]
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return id;
    }

    @Post()
    create(@Body() Body: any) {
        return Body;
    }

    @Put('id')
    update(@Param('id') id: number, @Body() Body: any) {
        return Body;
    }

    @Delete('id')
    delete(@Param('id') id: number) {
        return id;
    }
}
