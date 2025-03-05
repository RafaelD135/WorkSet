#!/bin/bash

# Compile the Java files
javac -cp "libs/*" @compile.list @arg.list

# Run the controller class
java -cp "class:libs/*"  Controller