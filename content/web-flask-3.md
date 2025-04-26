---
title: I wrote a web app and it was so slow
tags: ['post']
date: 2023-05-20
layout: post.njk
---
With so many accessible web frameworks in a variety of programming languages, one would be quick to assume that making a web app should be no trouble at all, right? Well, I managed to mess it up somehow

# The chosen "stack"
I decided to develop my web app mostly using Flask and with a very, very thin front-end. The front end is a simple template library that generates html based on data fetched from a database. 
However, the database engine in question was MongoDB and for some reason this combination of retrieving data from MongoDB and feeding that to an html generator was causing a very laggy user interface.


## Thoughts on Flask
I like Flask and have nothing wrong to say about it. I must say I have not used any back-end frameworks in Python and hence I don't know whether Flask is underperforming against its competitors. However, I have used Node-based frameworks in the past that were slighly more performant. I do wonder whether perhaps the Python http server library is not the best.

## Thoughts on MongoDB
The reason I went with MongoDB in the first place was because I thought it lent itself well to the type of data I was storing and two, I preferred it over SQL driven engines. I just feel sometimes using SQL adds unnecessary layers of complexity. 

## Thoughts on the html generator I used
I believe out all the options I picked, this html generator is the least offending, especially for the type of application that I'm attempting to build. Ie. I am mostly concerned about the retrieval of data, and presentation in a clear way.


# What needs changing?
I am still unsure. I will have a look at the architecture of the project, and read about ways of making database-fetches more efficient. 
I am tempted to say that the combination of Flask and MongoDB is not the best. I shall do some research about where to go from here.

# Update
I made the switch from MongoDB to SQLite and it made a significant difference in behaviour. It makes intuitive sense, removing one less network connection in the chain will improve performance. I also have unverified suspicions that the SQLite library in Python is likely to be more performante the MongoDB python library I was using.
The switch over to SQLite wasn't actually as painful, since the DB access was nicely encapsulated. The main thing was ensuring the SQL queries were written correctly and parameterised such that the input parameters were correctly parsed. After making the necessary changes, I could quickly see the searching operations were dramatically quicker. This improvement in performance also opened the door to create a word search option which was the main thing I was looking for when implementing this website. E.g. Type in the word of an ingredient, and all the recipes using that ingredient show up. While on this winning streak, I also implemented some quick filters based on cuisine and type of meal.

# Conclusion
So that is it! Now that the website is usable as well as functional, I have packaged it up and it is ready to be served. Since this is a personal project, I will host it locally on my Raspberry Pi. I already it have an Apache server running on the Pi so it should be a straightforward operation. I think this is the end on the flask website projects, one thing that occurs to me as a potential extension is to run the app inside Docker, more as a practice run than anything else. Anyway, one for different day.