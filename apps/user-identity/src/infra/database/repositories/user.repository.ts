import { Inject, Injectable } from '@nestjs/common';
import { IUser, IUserRepository, UserAccountProviderEnum } from '../../../domain';
import { DRIZZLE_ORM_TOKEN, DatabaseService, buildConflictUpdateColumns } from '@shared/db';
import { UserIdentityDrizzleSchema } from '../schema';
import { users, usersAccounts } from '../models';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject(DRIZZLE_ORM_TOKEN)
    private readonly dbService: DatabaseService<typeof UserIdentityDrizzleSchema>,
  ) {}

  async findById(id: number): Promise<IUser> {
    return (await this.dbService.db.query.users.findFirst({
      where: eq(users.id, id),
    })) as IUser;
  }

  async createUser(
    email: string,
    provider: UserAccountProviderEnum,
    firstName?: string,
    lastName?: string,
  ): Promise<IUser> {
    const user = await this.dbService.db.transaction<IUser>(async (tx) => {
      const [user] = await tx
        .insert(users)
        .values({
          email,
          firstName,
          lastName,
        })
        .returning()
        .onConflictDoUpdate({
          target: users.email,
          set: buildConflictUpdateColumns(users, ['firstName', 'lastName']),
        });

      await tx.insert(usersAccounts).values({
        userId: user.id,
        provider,
      });

      return user as IUser;
    });

    return user;
  }
}
