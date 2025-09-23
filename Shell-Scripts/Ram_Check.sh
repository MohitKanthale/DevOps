#!/bin/bash

# Here, free ram is calculated using total of "free + Swap".
# But, for calculating specific free ram use below line
# "FREE_MEM=$(free -mt | grep Mem | awk '{print $7}')"   --- It will show total avialable ram.

FREE_MEM=$(free -mt | grep Total | awk '{print $4}')
TH=100

if [[ $FREE_MEM -lt $TH ]]
then
    echo "Memory Warning"
else
    echo "Free Memory is $FREE_MEM M"
fi