# Installation : 
- Run the init.bat script in the terminal and **make sure you're in the root dir**  , this will take some time because the node_modules are very heavy 
and the project can go to 600mb 
- install postgresql database this video is recommanded : https://www.youtube.com/watch?v=qeSzBXsjVzY&t=617s


**don't forget the user's password**

- once database is created and connected , the default user should be postgres  
and the default database should be postgres also 
- now we will proceed to seed our database the commande is the following 

- now go the the .env file that is located in the source folder aka : 
    |
    | backend
    | frontend
    | .env <== this file 
- and change the url to be more something like this : 
```
    DATABASE_URL="postgresql://<USER_NAME>:<PASSWORD>@localhost:5432/<database>?schema=public"
    USER_NAME: <USER> , by default use postgres 
    PASSWORD : <YOUR_PASSWORD> 
    database: <DATABASE> ,  by default use postgres 
```
- since we can't share credentials for the google auth the sending message will not be working , but if you want check **google_gmail** folder that explains everything you need to know  
- after this it should be working , create two terminals one for the client one for the server and make sure you're in the root folder 
- run the scripts on each terminal (runserver.bat / runclient.bat ) 
- and it should be working just fine ! 
