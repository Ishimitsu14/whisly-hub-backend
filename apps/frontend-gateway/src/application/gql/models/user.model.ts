import { User } from "@generated/grpc/user-identity";
import { UserAccountModel } from "./user-account.model";
import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
@Directive('@key(fields: "id")')
export class UserModel implements User {
    @Field(() => ID)
    id: number;

    @Field(() => String)
    email: string;

    @Field(() => String)
    firstName?: string;

    @Field(() => String)
    lastName?: string;

    @Field(() => [UserAccountModel])
    accounts: UserAccountModel[];
}