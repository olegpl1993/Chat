# crud-api

- npm run start:dev\
Start development mode

- npm run start:prod\
Start building bundle and start production mode

- Users are stored as objects that have following properties:\
id — unique identifier (string, uuid) generated on server side\
username — user's name (string, required)\
age — user's age (number, required)\
hobbies — user's hobbies (array of strings or empty array, required)

- GET localhost:4000/api/users is used to get all persons\
Server answer with status code 200 and all users records

- GET localhost:4000/api/users/{userId}\
Server answer with status code 200 and record with id === userId if it exists\
Server answer with status code 400 and corresponding message if userId is invalid (not uuid)\
Server answer with status code 404 and corresponding message if record with id === userId doesn't exist

- POST localhost:4000/api/users is used to create record about new user and store it in database\
Server answer with status code 201 and newly created record\
Server answer with status code 400 and corresponding message if request body does not contain required fields

- PUT localhost:4000/api/users/{userId} is used to update existing user\
Server answer with status code 200 and updated record\
Server answer with status code 400 and corresponding message if userId is invalid (not uuid)\
Server answer with status code 404 and corresponding message if record with id === userId doesn't exist

- DELETE localhost:4000/api/users/{userId} is used to delete existing user from database\
Server answer with status code 204 if the record is found and deleted\
Server answer with status code 400 and corresponding message if userId is invalid (not uuid)\
Server answer with status code 404 and corresponding message if record with id === userId doesn't exist