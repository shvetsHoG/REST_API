import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttrs {
    emails: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({
        example: 'mail@mail.com',
        description: 'Электронная почта пользователя',
    })
    @Column({ allowNull: false })
    email: string;

    @ApiProperty({ example: '123456Qq!', description: 'Пароль пользователя' })
    @Column({ allowNull: false })
    password: string;

    @ApiProperty({
        example: 'true',
        description: 'Является ли пользователь забаненым',
    })
    @Column
    banned: boolean;

    @ApiProperty({ example: 'Плохо себя вел', description: 'Причина бана' })
    @Column
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
