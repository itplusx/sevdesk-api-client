#!/bin/sh

rm -rf ./src/generated
rm openapi.yaml

curl https://api.sevdesk.de/openapi.yaml -o openapi.yaml

docker run --rm \
  -v ${PWD}/openapi.yaml:/openapi.yaml \
  -v ${PWD}/src/generated:/local/out/typescript-fetch \
  openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g typescript-fetch \
  -o /local/out/typescript-fetch
