import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../../../application';
import { CurrentUser } from '../../decorators';
import { JwtAuthGuard } from '../../guards';
import { UseGuards } from '@nestjs/common';

@Resolver(() => UserModel)
export class UserResolver {
  constructor() {}

  @Query(() => UserModel, { name: 'findMe' })
  @UseGuards(JwtAuthGuard)
  async findMe(@CurrentUser() user: UserModel) {
    return user;
  }
}
