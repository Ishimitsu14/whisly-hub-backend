import { IUser } from "../User"

export enum UserAccountProviderEnum {
    UNKNOWN = 0,
    GOOGLE = 1,
    UNRECOGNIZED = -1
}

export interface IUserAccount {
    id: number
    userId: number
    provider: UserAccountProviderEnum

    user?: IUser
}