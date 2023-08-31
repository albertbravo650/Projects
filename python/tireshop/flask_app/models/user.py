from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re


# bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z -]+$')

mydb = 'profile_app'

class User:
    def __init__(self, data):
        self.id = data['id']
        self.firstName = data['firstName']
        self.lastName = data['lastName']
        self.email = data['email']
        self.password = data['password']
        self.createdAt = data['createdAt']
        self.updatedAt = data['updatedAt']
        self.allUsers = []


    @classmethod
    def save(cls, data):
        query = '''INSERT INTO users 
        ( firstName,  lastName, email, 
        password, createdAt, updatedAt ) 
        VALUES ( %(firstName)s , %(lastName)s, 
        %(email)s, %(password)s, NOW() , NOW() );'''
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(mydb).query_db( query, data )

    @classmethod
    def getById(cls, data):
        query = " SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db( query, data )
        print(results)
        return cls(results[0])

    @classmethod
    def getByEmail(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(mydb).query_db(query,data)
        # Didn't find a matching user
        # print("testinggg", result, len(result))
        if len(result) < 1:
            return False
        return cls(result[0])

    # @classmethod
    # def get_user_with_players( cls , data ):
    #     query = "SELECT * FROM users LEFT JOIN players ON players.users_id = users.id WHERE users.id = %(id)s;"
    #     results = connectToMySQL(mydb).query_db( query , data )
    #     players_user = []
    #     for column in results:
    #         player_data = {
    #             "player_id" : column["players.id"],
    #             "name" : column["name"],
    #             "age" : column["age"],
    #             "image" : column["image"],
    #             "gender" : column["gender"]
    #         }
    #         players_user.append(player_data)
    #     return players_user

    @staticmethod
    def validateRegistration(user):
        is_valid = True # we assume this is true
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(mydb).query_db(query, user)
        if len(results) >= 1:
            flash("Email already in use", 'regError')
            is_valid = False
        # First Name Validations
        if len(user['firstName']) < 1:
            flash("Please Enter First Name.", 'regError')
            is_valid = False
        elif len(user['firstName']) < 2:
            flash("First Name must be at least 2 characters.", 'regError')
            is_valid = False
        elif not NAME_REGEX.match(user['firstName']):
            flash("First name requires letters only", 'regError')
            is_valid = False
        # Last Name Validations
        if len(user['lastName']) < 1:
            flash("Please Enter Last Name.", 'regError')
            is_valid = False    
        elif len(user['lastName']) < 2:
            flash("Last Name must be at least 2 characters.", 'regError')
            is_valid = False
        elif not NAME_REGEX.match(user['lastName']):
            flash("Last name requires letters only", 'regError')
            is_valid = False
        # Email Validations
        if len(user['email']) < 1:
            flash("Please Enter An Email Address", 'regError')
            is_valid = False
        elif not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!", 'regError')
            is_valid = False
        # Password Validation
        if len (user['password']) < 8:
            flash("Password must be at least 8 characters.", 'regError')
            is_valid = False
        if len (user['confirmPassword']) < 1:
            flash("Please Confirm Your Password.", 'regError')
            is_valid = False
        elif (user['password'])!= (user['confirmPassword']):
            flash("Passwords Do Not Match.", 'regError')
            is_valid = False
        return is_valid