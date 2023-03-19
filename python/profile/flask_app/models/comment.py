from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

mydb = 'profile_app'

class Comment:
    def __init__(self, data):
        self.id = data['id']
        self.text = data['text']
        self.textLink = data['textLink']
        self.createdAt = data['createdAt']
        self.updatedAt = data['updatedAt']