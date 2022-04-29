#!/bin/bash
hostname=$(curl http://169.254.169.254/metadata/v1/hostname)
docker run -d -p 80:3000 --name ui-"$hostname" josephakayesi/lesscontactsui:latest