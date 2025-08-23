#!/bin/bash

#Reading a file:

#In place of nodeHealth.sh replace it with your file name.

while read line; do
    echo "Line: $line"
done < nodeHealth.sh



#IFS= → disables trimming of leading/trailing whitespace.

#-r → prevents read from interpreting backslashes (\).

# while IFS= read -r line; do
#     echo "Line: $line"
# done < file.txt