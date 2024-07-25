import { defineConfig } from 'drizzle-kit'

export const drizzleConfig = (appName: string) => defineConfig({
    schema: `apps/${appName}/src/infra/database/models`,
    out: `apps/${appName}/src/infra/database/migrations`,
    dialect: 'postgresql',
})