#!/bin/bash

MODULE=$1
pnpm tsx apps/${MODULE}/src/infra/database/commands/migrate.ts
