#!/bin/bash

FREE_MEM=$(free -mt | grep Total | awk '{print $4}')
TH=100

if [[ $FREE_MEM -lt $TH ]]
then
    echo "Memory Warning"
else
    echo "Free Memory is $FREE_MEM M"
fi