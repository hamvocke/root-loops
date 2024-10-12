#!/usr/bin/env bash

# https://tldp.org/HOWTO/Bash-Prompt-HOWTO/x329.html

T='gYw' # The test text

echo -e "               40m     41m     42m     43m\
     44m     45m     46m     47m";

for FGs in '  m' ' 1m' '30m' '90m' '31m' '91m' '32m' \
           '92m' '33m' '93m' '34m' '94m' '35m' '95m' \
           '36m' '96m' '37m' '97m';
  do FG=${FGs// /}
  echo -en " $FGs \033[$FG  $T  "
  for BG in 40m 41m 42m 43m 44m 45m 46m 47m;
    do echo -en "$EINS \033[$FG\033[$BG  $T  \033[0m";
  done
  echo;
done
