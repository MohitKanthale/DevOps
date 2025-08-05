#!/bin/bash
FILE_NAME="my_log.txt"
echo "Creating a new file: $FILE_NAME"
touch "$FILE_NAME"
echo "Adding content to $FILE_NAME"
echo "This is a log entry." >> "$FILE_NAME"
echo "Displaying content of $FILE_NAME:"
cat "$FILE_NAME"