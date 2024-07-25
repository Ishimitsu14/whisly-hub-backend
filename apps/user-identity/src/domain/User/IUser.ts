import { IUserAccount } from "../UserAccount"

export interface IUser {
    id: number
    email: string
    
    firstName?: string
    lastName?: string

    accounts?: IUserAccount[]
}