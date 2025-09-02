#!/bin/bash

#here in place of bandaru, use your local system user-name

#set -exo

#use mail cmd in linux terminal to check the mails

THRESHOLD=80
cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')
if (( $(echo "$cpu_usage > $THRESHOLD" | bc -l) )); then
    echo "CPU usage is above $THRESHOLD%. Current usage: $cpu_usage%" | mail -s "CPU Alert" bandaru
else
    echo "cpu usage is below 80" | mail -s "CPU Alert" bandaru
fi