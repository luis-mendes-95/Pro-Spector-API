# Pro-Spector-API
This is the API that connects the database to the platform used to prospectate new clients, Pro-Spector.

# Localhost:
You can clone the repository and run local: http://localhost:3000

# Deploy:
Or you can run on deploy link: https://prospector-api.onrender.com

# Users - Create User - POST - url/users :

Request Example:

{
	"email":"user@user.com",
	"name": "user",
	"password": "1234",
	"admin": true
}

Response Example:

{
	"name": "user",
	"email": "user@user.com",
	"admin": true,
	"id": 1,
	"createdAt": "2023-06-04",
	"updatedAt": "2023-06-04",
	"deletedAt": null
}

# Login - POST - url/login :

Request Example:

{
	"email":"user@user.com",
	"password": "1234"
}

Response Example:

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjg1OTIxMzQ2LCJleHAiOjE2ODYwMDc3NDYsInN1YiI6IjEifQ.TKTQkhPhMCBouv5AgOa-yGJGDD2mk0M7cSxcBdxOGis"
}
