#!/bin/bash

# Compile the Java files
javac @compile.list @arg.list

# Run the controller class
java -cp class Controller