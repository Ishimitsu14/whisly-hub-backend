import { UserAccountProviderEnum } from "../../../domain";

export class SignInWithProviderCommand {
    constructor(
        public readonly provider: UserAccountProviderEnum,
        public readonly email: string,
        public readonly firstName?: string,
        public readonly lastName?: string,
    ) {}
}