#!/bin/bash
pwd | cat
echo "this is current dir $(pwd)"

cd $(find -type d -name `ls -lt $(find / -type f -name appspec.yml | sort -n | awk -F / 'NR==1 {print  }' | cut -d/ -f 1-5) |  awk  'NR==2 {print  }' | cut -d ' '  -f 9 `)/deployment-archive
echo "this is application dir  after change $(pwd)"

# cp -rf ../*  /
# cd /
sudo npm install

# sudo npm  start &

# sudo node '.\Apphandlebars.js'

# sudo pm2 delete all || sudo pm2 -f start  Apphandlebars.js

sudo pm2 delete all
case {?} in
0)
sudo pm2  -f start  Apphandlebars.js;;
*) sudo pm2  -f start  Apphandlebars.js;;
esac

echo "node.js job done on pid number `pgrep node`"

