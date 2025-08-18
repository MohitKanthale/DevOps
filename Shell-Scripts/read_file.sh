#!/bin/bash

#Reading a file:

#In place of file.txt replace it with your file name.

while read line; do
    echo "Line: $line"
done < file.txt