# Pro-Spector-API
This is the API that connects the database to the platform used to prospectate new clients, Pro-Spector.

# IMPORTANT!
Fill the request informations EXACTLY in the patterns as shown below:

# Localhost (http://localhost:3000):
1) Clone the repository
2) Fill the .env file as shown in ".env.example"
3) In the terminal type "yarn" to install all libraries.
4) And finally, type "yarn dev" to run the application.

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

# CLIENTS:

# Clients - Create Client - POST - url/clients :

Request Example:

{
	"name": "Coca Cola S.A",
	"email": "contact@cocacola.com",
	"phone": "+55 356 958 743",
	"createdAt": "04-06-2023",
	"updatedAt": "",
	"deletedAt": ""
}

Response Example:

{
	"name": "Coca Cola S.A",
	"email": "contact@cocacola.com",
	"phone": "+55 356 958 743",
	"createdAt": "2023-06-04",
	"updatedAt": "2023-06-04",
	"deletedAt": null,
	"id": 1
}

# Clients - Edit Client - PATCH - url/clients/${clientId} :

Request Example:

{
	"name": "Coca Cola S.A",
	"email": "contact@cocacola.com",
	"phone": "+55 356 958 743",
	"createdAt": "05-30-2023",
	"updatedAt": "",
	"deletedAt": ""
}

Response Example:

{
	"name": "Coca Cola S.A",
	"email": "contact@cocacola.com",
	"phone": "+55 356 958 743",
	"createdAt": "2023-06-01",
	"updatedAt": "2023-06-01",
	"deletedAt": null,
	"id": 1
}

# Clients - Get All Clients - GET - url/clients/ :

Request Example:

*no body*
!!!TOKEN NEEDED!!! >>> LOGIN TO HAVE ACCESS

Response Example:

[
	{
		"name": "Luís Mendes",
		"email": "blackwinds66@gmail.com",
		"phone": "(47) 99966-0515",
		"createdAt": "2023-06-04",
		"updatedAt": "2023-06-04",
		"deletedAt": null,
		"id": 2
	}
]

# Clients - Delete Client - DELETE - url/clients/${clientId} :

Request Example:

*no body*
!!!TOKEN NEEDED!!! >>> LOGIN TO HAVE ACCESS

Response Example:

204 - No Content

# CONTACTS:

# Contacts - Create Contact - POST - url/contacts :

Request Example:

{
	"clientId": 1,
	"name": "Márcio Pedro",
	"email": "contact@cocacola.com",
	"phone": "47999055665",
	"createdAt": "05-30-2023",
	"updatedAt": "05-30-2023",
	"deletedAt": ""
}

Response Example:

{
	"clientId": 1,
	"name": "Márcio Pedro",
	"email": "contact@cocacola.com",
	"phone": "47999055665",
	"createdAt": "05-30-2023",
	"updatedAt": "05-30-2023",
	"deletedAt": ""
}

# Contacts - Edit Contact - PATCH - url/contacts/${contactId} :

Request Example:

{
	"clientId": 2,
	"name": "Márcio Pedroso",
	"email": "contact@cocacola.com",
	"phone": "479990",
	"createdAt": "05-30-2023",
	"updatedAt": "05-30-2023",
	"deletedAt": ""
}

Response Example:

{
	"id": 3,
	"name": "Márcio Pedroso",
	"email": "contact@cocacola.com",
	"phone": "(47) 99966-0515",
	"createdAt": "2023-06-04",
	"updatedAt": "2023-06-04",
	"deletedAt": null
}

# Contacts - Get All Contacts - GET - url/contacts/ :

Request Example:

*no body*
!!!TOKEN NEEDED!!! >>> LOGIN TO HAVE ACCESS

Response Example:

[
	{
		"id": 4,
		"name": "Luís Mendes",
		"email": "coca@coca.com",
		"phone": "+5547999660515",
		"createdAt": "2023-06-04",
		"updatedAt": "2023-06-04",
		"deletedAt": null,
		"client": {
			"id": 1,
			"name": "Coca Cola S.A",
			"email": "coca@coca.com",
			"phone": "(47) 99966-0515",
			"createdAt": "2023-06-04",
			"updatedAt": "2023-06-04",
			"deletedAt": null
		}
	}
]

# Contacts - Delete Contact - DELETE - url/contacts/${contactId} :

Request Example:

*no body*
!!!TOKEN NEEDED!!! >>> LOGIN TO HAVE ACCESS

Response Example:

204 - No Content
