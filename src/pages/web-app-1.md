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