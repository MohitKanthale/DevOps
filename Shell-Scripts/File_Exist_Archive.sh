#!/bin/bash

# Variables
BASE=/home/ubuntu/
DEPTH=1


if [[ ! -d $BASE ]]
then
    echo "Directory does not exist - $BASE"
    exit 1
fi

# Create an archive folder if it does not exist

if [[ ! -d $BASE/archive ]]
then
    mkdir $BASE/archive
fi

# Find the list of files larger than 2 MB

for i in `find $BASE -maxdepth $DEPTH -type f -size +3M`
do
    gzip $i || exit 1
    mv $i.gz $BASE/archive || exit 1
done