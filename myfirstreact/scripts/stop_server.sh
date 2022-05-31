#!/bin/bash
isExistApp = `pgrep httpd`
if [[ -n  $isExistApp ]]; then
    npm stop        
fi

