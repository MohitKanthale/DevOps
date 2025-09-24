DISK_USAGE=$(df -h | egrep -v "tmpfs|Filesystem" | grep /dev/sda2 | awk '{print $5}' | tr -d %)

TH=20

TO="mohitkanthale.eidiko@gmail.com"

if [[ $DISK_USAGE -gt $TH ]]
then
    echo "Disk usage is high - $DISK_USAGE % " | mail -s "Disk space alert" $TO
else
    echo "Disk space is sufficient - $DISK_USAGE %" | mail -s "Disk space is sufficient" $TO
fi