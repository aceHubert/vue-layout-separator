#!/bin/bash

# testing before publish
npm run lint && npm run build #&& npm run test

if [ $? = 0 ]; then
  # purge dist
  rm -fr dist

  npm run build:lib

else
  echo 'Code cant be verify, plz check ~'
fi