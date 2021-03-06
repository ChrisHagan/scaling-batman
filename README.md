This is an exploratory repository for the creation of games with my kids.

It's written in Scala Lift but the majority of content is in Javascript, which you can find under

src/main/webapp/static/js/

In particular, the typing and spaceships game can be found at

src/main/webapp/static/js/flyover.js

which is included by src/main/webapp/flyover.html.

To run it, ensure that you have at least JDK 1.6 installed on your path (java -vshowersion should reassure you of this), and then run (from the project root directory)

sbt

This is a console application.  Inside sbt, once it's finished pulling all the dependencies, run

container:start

This will launch the application in a web server listening on port 8080.  Thus it's explorable at

http://localhost:8080/flyover
![ScreenShot](/src/main/webapp/static/images/assetsOpen.PNG)

The game is played by flying your ship around with WASD and the Space bar to fire.  When you've got words flying across the screen, use the Esc key to go into capture mode (and to leave it again).  When you're in capture mode, typing the words before they leave the screen will add them to your Assets collection.  This collection will tell you which other words you still need to complete the plugins you're working on.

