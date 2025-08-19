#!/bin/bash

#Bash has no explicit data types.

#Variables are treated as strings by default, but you can perform arithmetic operations using (( )):

var="value"

if [ "$var" == "value" ]; then
    echo "Match found!"
else
    echo "No match!"
fi


#For Loop

# for fruit in apple banana mango; do
#     echo "I like Mango"
# done


#While loop

# count=0

# while [ $count -lt 5 ]; do
#     echo "Count: $count"
#     ((count++))
# done