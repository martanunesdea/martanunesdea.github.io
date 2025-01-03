---
title: Password manager with C++ and MySQL
description: Designing a simple storage system for passwords with C++ and MySQL
tags: ['post']
date: 2020-08-24
layout: post.njk
---
# Processing text in C++
## Project Rationale

It's been a while since I have made a significant project in C++ and I would like to start small, but still achieve something that is "functionally complete". My self-prescribed project brief is the following:
1. Create program that generates random (but safe) passwords
2. Capture details about the credentials (website for account, etc).
2. Store password hash and details of account in DB.

This nicely packages two things I'm keen to practice in C++, the first is hashing and safe random number generation, and the second is database management.


### Day 1, 2 - Start with password manager

There's been a lot of things that have been implemented in C++ in the past few years but for this project I'm wanting to borrow as little as possible. I'd like to do a bit more of my own software design and implementation. So I deliberately made the decision to narrow the scope of the project so it is attainable; to generate random passwords, save them on a database and retrieve them.

Obtaining text input and parsing it was not difficult, I had already done that with my parsing project.

The tricky bit was in creating a randomly generated password. 

### Day 3, 4 and 5 - Setting up MySQL Connector-C++

This will be a long post...

Download the appropiate binary package from the community downloads page and followed the process. When trying to talk to mysql, it works fine in the appropiate directory but, this isn't the desired outcome, so I changed the PATH variable from my terminal.

So I got to talk to MySQL and even created my own database and tables within the terminal. But ideally, I'd like to do that from my C++ project. So I downloaded also Connector C++.

This is a convenient driver that allows MySQL APIs to interact with MySQL. I first struggled with the downloading and linking my existing C++ project with connector C++. I look very close into what the Makefile or CMake should be doing, and I was doing as suggested; including and linking the right files. However for some reason, it wasn't able to identify the library file from within the connector c++ directory. In a desperate attempt, I thought perhaps re-installing the program for Connector C++ wouldn't do any further harm. And so I did. This time, I installed it from a binary and let the process run. Afterwards, I used the suggested Makefile content with a very basic C++ project file and it successfully linked.

After successfully linking, I was finally quite relieved of at least having achieved something. I then looked for one of the sample code files on how to initiate a session from C++ (using the X dev API). This was not the most straightforward, as I wasn't quite sure which parameters to use to initiate a session but I finally got there...

I will re-edit and add code excerpts at some point. But these are all the steps I followed.

### Day 6 - Talking in SQL!

Today the progress was much quicker after the previous three days of work to get the setup running. But now that there is a C++ file talking to the MySQL server everything is going smoothly! The folks at MySQL did a good job at creating a good dev guide/tutorial for X Dev API with samples of code (that I am yet to paraphrase here) which makes trying things out quick and easy. Today, I've managed to create a table within the schema for the project, inserting rows and selecting some of the elements in the row and printing them out. I used MySQL on a second terminal to check whether some of these function calls had really worked since (for the time being) I don't know how to identify these errors with commands from the API.

The insertion of variables into the table was done through hard-coded variables and names initially, but I also managed to append C++ variables with the SQL command and that got executed just as easily (expect code fragment here).

Next thing to do is to split up this sample code into a nicer structure (it's currently all in one function). And then to try and integrate this source file onto the rest of the project.
