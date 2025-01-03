---
title: Parsing in C++
tags: ['post']
date: 2020-07-28
layout: post.njk
---
# Processing text in C++
## Project Rationale

Starting this project in C++ is partially driven by the enthusiasm to have more flexibility in software design (as compared to C), and partially because I am curious to see the differences from C++ to Python libraries. I used SpaCy about two years ago, and it was already very user-friendly back in the day. However, since it was based on Cython, I was left with the curiosity to try NLP in the C++ environment. But for that, I need to build my own parser.

## Development diaries
### Day 1 - Getting started

I have practiced the C++ capabilities with input streams when using the fstream header file and that's been working as expected. I can separate text files into words and add those onto a vector.

I will be researching a bit and brushing up on tokenization next, I would like to have a rough idea on the topic of the document...
### Day 2 - Vectorisation

I have managed to get a text file onto a vector data structure. For the time being, I will be using vectors as the built-in support for these is quite good. I also have an idea that a lot of NLP libraries use vectors to store containers of words, etc. But when I have got some more time, I would like to research if there are any other structures providing more benefits.

At the moment, I have only just done a print check that the vector contents include all the text content. I have now outlined a few things I would like to do with this vector structure:

    Rank words by the frequency of use: I am expecting a lot of linking words at the top but would also expect the words ranking just below to be about the topic of the document.
    Rank words by the length of word: This would be useful if it is an academic text. And sometimes the longest words don't get repeated often (ie. not appearing in the first rank) but could be quite important... This is only a theory and if I don't get promising results I will probably discard this feature.
    Categorise words: This will categorise words based on their nature, for instance noun, verb, adjective, etc. I will probably need a third party library at this point. And I am not sure the results will be very repeatable but I'm curious to see the outcome. It's all about the learning experience, really.

I have also decided to add two extra options in this document parser program. The second option will be to categorise the document based on the contents (this would involve looking at the words used and seeing of what nature they are, this will definitely rely on third-party algorithms as my time is sadly not infinte). The third option will be to encrypt the document, this will involve outputting a file that is encrypted, perhaps with the encryption key in a different text based file. Still have to consider a few things, so it all might change.

### Day 3, 4 and 5 - Iterators and searching new tools

In an attempt to keep this log somewhat realistic, but without being dragged on to write everytime I'm working, I will write summaries of the progress so far.

For the past days of working on this project, I have focused on the "ranking a word by its frequency" because I thought that could be an interesting exercise to force me to brush up on my vector handling skills. However, I managed to get trapped looking for the next-best solution to tackle this type of problem. Thus, this timely pause for reflection.
Pointers and iterators

From my academic background of C++ at university, I thought I would be making a nifty use of iterators to go through the vector of words, and identify how frequently these are repeated. However, I realised that with C++11 there have been a host of new features added onto the standard library, which has turned a few practices into "old practices" with more safer and quicker alternatives to accomplish things. For instance the "auto" initialiser and the new form to loop over containers.

This made me wonder whether there was already a function that would do what I was looking to do, or one that would make it a simpler operation. I was not very successful in achieving this, but I did learn and try out quite a few different things to see how those worked.

I realised that the issue with keeping track of the frequency of words with a pointer, is that I would need to create another vector of words that have already been counted, and iterate through that before beginning a count for a new word. That would probably succeed in preventing overlaps, but I would rather implement it with hash tables as it could then invalidate the words that have already been counted. Besides, there are loads of new containers that could be used for hash tables so that will force me to get updated on the new additions to the most recent standard.