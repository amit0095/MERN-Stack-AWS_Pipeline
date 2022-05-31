#!/bin/bash

curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y httpd nodejs
sudo npm install -g pm2 serve 


