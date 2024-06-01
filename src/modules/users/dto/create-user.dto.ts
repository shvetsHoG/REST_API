import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'mail@mail.com',
        description: 'Электронная почта пользователя',
    })
    readonly email: string;

    @ApiProperty({ example: '123456Qq1', description: 'Пароль пользователя' })
    readonly password: string;
}
