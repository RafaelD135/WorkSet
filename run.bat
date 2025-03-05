REM Compile the Java files
javac -cp "libs/*" @compile.list @arg.list

REM Run the controller class
java -cp "class;libs/*" Controller