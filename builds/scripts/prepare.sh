#!/bin/bash

# testing before publish
npm run lint && npm run build #&& npm run test

if [ $? = 0 ]; then
  # purge dist
  rm -fr dist

  export TARGET=lib

  yarn build:lib

else
  echo 'Code cant be verify, plz check ~'
fi