import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({
        example: 'ADMIN',
        description: 'Роль пользователя',
    })
    @Column({ unique: true })
    value: string;

    @ApiProperty({
        example: 'Администратор сервера',
        description: 'Описание роли',
    })
    @Column
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
