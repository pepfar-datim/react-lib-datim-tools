#!/usr/bin/env bash

Developers, please follow these steps:
1. Copy this file to the patch subdirectory (e.g., Global/patches/1234)
2. Fill in dhisAppKey in line 17, which is case-sensitive and must match 
   the key property of the app in /api/apps
3. Fill in appVersion in line 18
4. If this is a new app, make sure all of the needed app information is
   in libAppRepairs.sh
5. Delete these instructions, lines 2-7

cat << README
After this patch is deployed to production, make sure someone updates
the latest version of the app in libAppRepairs.
README

dhisAppKey='Data-Deduplication'
appVersion='1.5.6'

source ../../src/lib/libAppRepairs.sh

installApp $dhisAppKey $appVersion

exit 0