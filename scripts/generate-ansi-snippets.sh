#! /usr/bin/env bash

set -e

npm run test:unit -- --run --color > testoutput.txt
screenfetch -A "Mac OS X" > screenfetch.txt