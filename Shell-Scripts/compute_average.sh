#!/bin/bash

# PROBLEM: Given  integers, compute their average, rounded to three decimal places.

# Ask how many numbers to read.
echo -n "Enter how many numbers you want to average: "
read N

i=0
sum=0

while [[ ${i} -lt ${N} ]]; do
    echo -n "Enter number $((i+1)): "
    read num
    ((sum += num))
    ((i++))
done

# Calculate and display average
echo -n "The average of $N numbers is: "
echo "scale=3; ${sum}/${N}" | bc
