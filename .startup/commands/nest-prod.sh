#!/bin/bash

MODULE=$1
nest build ${MODULE}
node dist/apps/${MODULE}/main.js
