---
title: Back end development and Flask
tags: ['notes']
date: 2020-11-10
layout: post.njk
---
## Back end development and Flask

Flask is a very lightweight server side library built in Python. The plus side to the "lightweight" characteristic is that it is very quick to get it up and running. The downside is that, it effectively builds with the barebones and you have to sort out the rest. Which is a relatively good thing in cases where the website or web app doesn't require many features.

In this case, I am using Flask precisely because:
1. I didn't want to go through the hassle of learning Django
2. The use of lightweight server library will be useful when I start with sending data to servers from microprocessors or embedded systems. So a win/win for my learning journey.

Since Flask is built in Python, it comes with integration to SQLite as part of the sqlite3 package. That's also one less thing to worry about, since I have already built my database handler around sqlite3. 

Making calls to routes specified within Flask is fairly straightforward. Understanding the relation between templates, javascript add-ons, and then the flask source file is a little bit trickier. I found myself particularly stuck when attempting to make calls from the javascript functions onto flask, until I realised that it all revolves around HTTP requests.

Essentially, when integrating dynamic javascript onto your site, you will have to perform requests, which will then re-direct you to the routes defined within the flask source file. Now, the choice of library responsible for performing these HTTP requests is down to the programmer. When searching for a way to approach this problem, I found most people where recurring to AJAX and jQuery as the solution. However, the downside to this is that other web development frameworks don't support jQuery (or they do, but it presents additional work). When reading through Flask's documentation, I found they actually present their AJAX example with two other formats: plain XHR and fetch. Again, there are upsides and downsides to either, and many posts cover this in detail. Essentially, Fetch API is meant to be the new way of making requests but not everyone seems to think it's the most straightforward way. 

As for me, I will pick XHR for now since this seems to be compatible with all browsers, and gives me the flexibility to at some point, use it with React if I decide to incorporate it on other projects.