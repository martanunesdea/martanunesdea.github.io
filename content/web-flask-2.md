---
title: Flask and MongoDB
description: A short summary on integration
tags: ['post', 'web']
date: 2021-10-12
layout: post.njk
---
## Adding a DB to Flask
Flask is a great little web-server framework in Python. It is very simple and straightforward. 

One of its advantages is how quickly you are able to create something that is deployable. This also means that very quickly, you will need a database solution as a means to have persistent storage in the web application. 

You could opt for sqlite, since this also a very "simple and straightforward" database option with Python. Looking more towards a production state application, you may however consider something like PostgreSQL or MongoDB.


## Opting for MongoDB

My web projects tend to be experiment projects, of a certain "hobbyist" nature. As such, I like the flexibility that MongoDB provides. The fact that it is a document-based NoSQL database makes the database management as easy as managing JSOB objects. And it allows you to increase or decrease the amount of information being stored per document as you wish. As a disclaimer, I'm not saying this is necessarily a good thing in more mature and universally available web apps but for me, it works. 

The only downside to using MongoDB is the fiddly "ObjectID" that Mongo attaches to each document, since it is not directly comparable to a Python string. However, there are some modules that help you cast an ObjectID into a string type so it's all good. 


## Adding MongoDB to Flask

Below is a snippet of my "db.py" file, with the two functions responsible for initialising a connection to the MongoDB instance. 

```
from flask import g, current_app
from flask_pymongo import PyMongo

def get_db():
    if 'db' not in g:
        pymongo = PyMongo(current_app)
        g.db = pymongo.db
    return g.db
```

So, I can use the current_app object on the PyMongo constructor as a way to serve the flask app instance.

## Querying
Querying from MongoDB is fairly straightforward and there is ample support on the Mongo website. Additionally, by logging in to Mongo Atlas you can check what is the state of your database collection.

## DB stubs
The only issue I'm still battling is how to connect my "test" DB with the flask app. As written above, my way of connecting to MongoDB is with "current_app", ie. with the app instance that is running. This makes things a bit difficult when running tests, since the app isn't running per se... I will keep investigating. 

One thing I've noticed is that there is not a lot of people or articles writing about Flask + MongoDB. You mostly see people using something like SQLAlchemy or other SQL-based solution.s