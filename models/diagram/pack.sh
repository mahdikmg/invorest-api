#!/bin/bash

# This file goes into the directory containing the model contents, zips them up, and saves them as a .mwb model

cd tracking/
zip -r ../invorest_db.mwb ./* -x lock
cd ..