#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client/client && npm run build --prefix client/client
cp -a client/client/build/. public/

bundle install
bundle exec rake db:migrate 