#!/bin/bash
isExistApp = `pgrep node`

if [[ -n  $isExistApp ]]; then
    pm2 delete all      
fi

