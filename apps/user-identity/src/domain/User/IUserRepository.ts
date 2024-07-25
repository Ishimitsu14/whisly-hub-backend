import { UserAccountProviderEnum } from '../UserAccount';
import { IUser } from './IUser';

export interface IUserRepository {
  findById(id: number): Promise<IUser | undefined>;

  createUser(
    email: string,
    provider: UserAccountProviderEnum,
    firstName?: string,
    lastName?: string,
  ): Promise<IUser>;
}
