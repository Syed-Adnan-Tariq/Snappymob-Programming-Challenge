# Snappymob-Programming-Challenge

## Challenge A
Write a program that will generate four (4) types of printable random objects and
store them in a single file, each object will be separated by a ",". These are the 4
objects: alphabetical strings, real numbers, integers, alphanumerics. The
alphanumerics should contain a random number of spaces before and after it (not
exceeding 10 spaces). The output should be 10MB in size.

## Challenge B
Create a program that will read the generated file above and print to the console the
object and its type. Spaces before and after the alphanumeric object must be
stripped.

## Challenge C
Dockerize Challenge B. Write a docker file so that it reads the output from Challenge
A as an Input. Once this container is started, the program in challenge B is executed
to process this file. The output should be saved in a file and should be exposed to
the Docker host machine.


## Solution A
- install node.js
- run the script "node challengeA.js"

## Solution B
- install node.js
- run the script "node challengeB.js"

## Solution C
- install docker desktop
- run the following command to build the docker image from the Dockerfile "docker build -t challenge-b"
- run following command to run start the container, process the file and save the output "docker run -v $(pwd)/output:/app/output challenge-b"
