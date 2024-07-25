#!/bin/bash

MODULE=$1
pnpm drizzle-kit generate --config="apps/${MODULE}/src/infra/database/commands/generate.ts"
