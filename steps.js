/*
!1) Please install the POSTGRES DATABASE use the version 14 
!2) by default it will have a user named postgres and the password is the one you created 
!3) in the .env files (the root one ) put the DATABASE_URL variable like this , just be simple and use the database named postgres : 
*   DATABASE_URL="postgresql://postgres:<YOURPASSWORD>@localhost:5432/postgres?schema=public"
?       for us we will be using a posssword Yanis123
!4) cd to the root directory (./) and : npm install  than cd the frontend and do the same thing 
!5) cd to the root directory (./) and run the runserver script 
!5) open new terminal cd to the root directory (./) and run the runserver client

! [npx prisma db pull]: to pull database to a schema 
! [npx prisma migrate dev ] : just cd to the ./backend folder 
*/