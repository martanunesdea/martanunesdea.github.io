---
title: Getting into programming - Episode 1
description: Learning Python
tags: ['post']
date: 2019-09-15
layout: post.njk
---
This article forms part of a tutorial series to learn technology and software through Python. 
# Understanding Technology
I've had a lot of demand from young and old people alike, to explain the topic of Software Engineering, with a view to understand the subject that seems to dominate everything we do nowadays. In my opinion, technology is joining the league of topics that we are not taught in school (or taught poorly) yet play a critical role in our daily lifes as adults (just like personal finance, healthy eating habits and fixing things around the house). 
This article will introduce the practice of programming and will use Python as a programming language to show a few concepts. 

## What is software? 
A lot of explanatory texts in the world of software engineering will start with the history of how computers were created, or perhaps with the advent of internet-connected machines. Whilst I will not skip on these key milestones in the world of technology, I will start by desmistifying what software really is. 
Software consists of a combination of programs, designed to solve a problem or provide a service to an end-user. This is a huge generalization, but it also goes to show the reason why software has ended up *everywhere*. 
Let's split this statement into parts.
### Software as a combination of programs
Ok so now we're back to square one - what is a program? Think about it as a list of instructions to be computed by the machine. E.g.:
1. Wait for button press.
2. On button press: Turn on screen.
3. Wait for 5 seconds.
4. Display "Welcome back".

That sounds simple enough, right? Yet, on its own, it probably isn't very useful. That's why it is easier to think of software as a combination of several programs. You may hear the word "abstraction" pop up in the world of programmers, this is essentially referring to the practice of hiding certain specific details away from other programs that don't need to see all of those details. Anyway, let's get on to the second part of our software definition.

### Designed to solve a problem or serve an end-user
Just like many other engineering fields; software engineering aims to solve a problem for someone. A lot of the times, software and hardware go hand in hand to create products. For example: your phone, your playstation, your smart speakers, even your car, have bits of electronics collecting information and that is then processed by the software. On other occasions, such as when browsing the internet or shopping online, it is mostly just software working in web servers that is doing all the work. In this case, the software is very dependent on the communication and networks. The applications for software really are endless and it is possible a comprehensive list would still neglect some fields of software engineering.

## Problem definition
How do we solve a problem by designing programs? Just like many other engineering projects, we start by thinking about the user requirements (e.g. what is the problem the user faces, when does it occur, how many times does it happen, how quickly does the program need to detect it, all sorts of questions, really). And from there, we determine the specifications of the product. When starting, it is very easy to get caught up with this part of the design process, but it is important to iterate through the requirements phase since the first phase of requirements collection is very likely to miss certain bits, or assume they will be straightforward to implement. 

## Problem solving
Once the problem is *defined*, the onus is to think of ways to *solve* it. The good news is that, if our inputs and outputs are well-defined, it is a matter of coming up with a program that can cope with that.

So how do we deal with inputs? And how do we generate outputs? The truth is the topic of software construction can get complicated very quickly. Let's introduce two important concepts in the computer machines we deal with normally: 
- Memory, to store and retrieve values that it may need in the future.
- A processing unit, to perform mathematical operations on data (e.g. comparing if a value is larger than another, increminting through the list of tasks to do, etc.)

### Popular software constructs
If we were to set an alarm clock with Python, we would first need to define the time to get woken up:


```python
# main.py 
alarm_time = 7
clock_time = 0;
if clock_time == 7:
  print("Wake up!!!!")
  clock_time++

```

