---
title: Web dev 101 - Back end development and Flask
date: 2020-11-10
---
# Quick intro to Flask
Flask is a very lightweight Python web framework that allows back-end development. The plus side to the "lightweight" characteristic is that it is very quick to get it up and running. The downside is that it effectively builds with the barebones and you are left to manage the rest. Which is a relatively good thing in cases where the website or web app doesn't require many features.

In this case, I am using Flask precisely because:
1. Flask was easy to pick up from reading the documents and following the example demo.
2. The use of lightweight framework will be useful when I start with sending data to servers from microprocessors or embedded systems. So a win/win for my learning journey.

Since Flask is built in Python, it integrates well with Python's standard library sqlite3 package. That's also one less thing to worry about, since I have already built my database handler around sqlite3. 

## Routing HTTP requests
Making calls to routes specified within Flask is fairly straightforward. Understanding the relation between templates, client-side JavaScript, and then the routes in app.py is a little bit trickier. I found myself particularly stuck when attempting to make calls from the Javascript functions onto Flask, until I realised that it all revolves around HTTP requests.

When integrating dynamic JavaScript onto your site, you will have to perform requests, which will then call the routes defined within the Flask app module. Now, the choice of library responsible for performing these HTTP requests is down to the programmer. 

When searching for a solution to this problem, it looked like AJAX and jQuery were the popular options. But I also found that jQuery can often require additional work to ensure compability with modern web frameworks, so I skipped it for this project. Flask’s documentation shows the same idea with plain XHR and Fetch API. Plenty of posts compare them; there are upsides and downsides to either, so it was more of a case of picking the one that suited me best.

I went with plain XHR for now: it matched Flask’s documentation, behaved consistently in the browsers I cared about, and felt close enough to patterns I might reuse if I try React later. With this decision, I felt like we had resolved the mystery of how to wire JavaScript to the routes in the Flask app. So, now that the browser was now htting my Flask routes reliably, next step is to  give these routes something persistent to read and write (covered in the MongoDB post).