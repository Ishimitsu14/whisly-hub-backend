#!/bin/bash

servicesDirectory="$(pwd)/apps"
protoInputDir="$(pwd)/proto"
protoOutputDirectory="$(pwd)/.generated/grpc"
protoPluginFile="$(pwd)/node_modules/.bin/protoc-gen-ts_proto"

execute_command() {
  local command="$1"
  eval "$command"
}

run_proto_generate_command() {
  local serviceName="$1"
  local command="protoc -I=${protoInputDir} --plugin=protoc-gen-ts_proto=${protoPluginFile} --ts_proto_out=${protoOutputDirectory} ${serviceName}.proto"
  execute_command "$command"
}

start() {
  local selectedService="$1"
  local services=$(ls "$servicesDirectory")

  for service in $services; do
    if [ -n "$selectedService" ] && [ "$selectedService" != "$service" ]; then
      continue
    fi

    if [ -f "${protoInputDir}/${service}.proto" ]; then
      run_proto_generate_command "$service"
      echo "The schema for the \"$service\" service has been successfully generated"
    else
      echo "Service: $service has no proto schema"
    fi
  done
}

start "$1"
