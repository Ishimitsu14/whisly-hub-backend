import { UserIdentityConfig } from '@shared/config'
import { drizzleMigrate } from '@shared/db'
import { UserIdentityDrizzleSchema } from '../schema'

(async () => {
    console.log('asdkanslkfgjdskjlhgjosdhgjk')
    const migrate = drizzleMigrate('user-identity', UserIdentityConfig.database.url, UserIdentityDrizzleSchema)
    
    await migrate()

    process.exit();
})()