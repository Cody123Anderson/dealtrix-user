#!/bin/bash

echo 'Configuring AWS CLI'
aws configure set aws_access_key_id ${SERENADE_AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${SERENADE_AWS_SECRET_ACCESS_KEY}
# aws configure set preview.cloudfront true

echo 'Running Production Build'
npm run prod

echo 'Deploying to AWS S3 Bucket'
aws s3 sync . s3://www.serenadedates.com \
  --exclude '*' \
  --include 'index-prod.html' \
  --include 'dist/index.js*' \
  --include 'favicon.ico'

echo 'Deployed'

# echo 'Invalidating Cloudfront Cache'
# aws cloudfront create-invalidation \
#   --distribution-id [idgoeshere] \
#   --paths \
#     /favicon.ico \
#     /index-prod.html \
#     /dist/index.js \
#     /dist/index.js.map
