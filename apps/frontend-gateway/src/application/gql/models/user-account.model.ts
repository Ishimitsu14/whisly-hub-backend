import { UserAccount, UserAccountProviderEnum } from "@generated/grpc/user-identity";
import { UserModel } from "./user.model";
import { Directive, Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

registerEnumType(UserAccountProviderEnum, {
    name: 'UserAccountProviderEnum'
})

@ObjectType('UserAccount')
@Directive('@key(fields: "id")')
export class UserAccountModel implements UserAccount {
    @Field(() => ID)
    id: number;

    @Field(() => Number)
    userId: number;

    @Field(() => UserAccountProviderEnum)
    provider: UserAccountProviderEnum;

    @Field(() => UserModel)
    user: UserModel;
}