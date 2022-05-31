#!/bin/bash

# sudo yum update -y
# sudo yum install -y ruby wget
# sudo wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install

# sudo chmod +x ./install
# sudo ./install auto
# sudo service codedeploy-agent status


curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y httpd nodejs
sudo npm install -g pm2 serve 

echo "all dependencies job has been done."
