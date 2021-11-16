#!/bin/bash

# Unzip the model (MyModel.mwb) into a particular directory (project_root/schema/MyModel)
unzip -o invorest_db.mwb -d tracking/

# Replace all _ptr_="...." attributes with _ptr_="xxx"
sed -i presed -E 's/_ptr_="0x[0-9a-f]+"/_ptr_="xxx"/g' tracking/invorest_db.mwb.xml
