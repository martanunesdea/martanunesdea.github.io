---
title: Getting set up with ESP32
description: Simple tutorial for a starting up on development with ESP32
tags: ['post']
date: 2022-05-20
layout: post.njk
---
# Getting set up with ESP32
## Project Rationale

This project idea came to possibly in my second year of university and so many things have got in the way that I kept on postponing it. Perhaps the ambition behind the idea was a bit too big to simply start working on it during my down time. Perhaps not. In essence, I am hoping to connect a microphone to an esp32 board, perhaps do a bit of pre-processing from the board and then send the data wirelessly. Once the data is in a bit of a more powerful machine, I will try to use more advanced filtering and algorithms to process the audio. If all goes well, I will try to use the final speech output as the input for a future NLP project (this would be separately implemented to avoid complications, and to enable me to work on different things concurrently). Sounds simple, right? Well, let's get working then!

## Development diaries
### Getting started

The esp32 is setup and running. The instructions provided by Espressif are fairly simple to understand, and it helps that I'm not looking to do anything more complicated other than, program the esp32 using the command line tools on Mac OS.
### Getting the board to flash

Using a few of the examples from the esp-idf library, I was able to check that the development board I have from 3 years ago it's still functional! (I shouldn't really be surprised, but I have travelled with the box containing these components back and forth a few times now...).

### Getting a blink and digitalised voltage

It's another day and a bit more of complexity creeping in slowly!

I've implemented the classic LED circuit, once again just to check the I/O of the board is working well. For a few minutes, I got a bit frustrated as I remembered that my dev board has a very obscure pinout mapping (ie. it's not from an established manufacturer so I had no way to check which pins corresponded to the ESP32 module datasheet). However, thankfully, someone on the internet has the same module (it may not be that obscure after all), with the mapping for the pinout for this board, as well as some other handy info. Link is , in case anyone wants to see the board I've got. Although, I will always reference the pins used as per the official esp32 datasheet (e.g. GPIOXX, etc.).

I've also managed to get the output from the microphone read by the board, and printed on the monitor in "debugging style". This feels like a tiny victory as yet again, I wasn't even sure if the microphone was going to be functional. However, on the other hand, now that I've got the microphone output's reading, I've got a big job ahead. In fact I've got two jobs that I could do in no different order:

- Sort out the microphone settings and ADC settings in the board. The voltage readings I'm getting are somewhat non-sense at the moment. And I know that regardless, it'll be a LONG way until the audio signal is all nice and pretty. So perhaps I may skip to my second job instead...
- Setup a WiFi connection and send the audio signal through this connection. This shouldn't be too hard, as I've done it before. And at least, once I've got the data on my laptop, it will be easier to evaluate the signal visually and what really needs to be done.

Ok, so next up! Establishing a WiFi connection between the board and my computer. One may ask why not use bluetooth low energy, for power saving reasons and because it is so widely used nowadays that you really feel like you're missing out if you're not using it. Well, my really ambitious plans for the project are to actually get the audio processed through cloud storage, most likely python scripts hosted in an instance of AWS. But this is very ambitious, and I might not get to this stage before I get distracted with a new idea.

### Communications via WiFi with ESP32

The WiFi stack in the ESP32 and is fairly simple and well documented. The chip is able to act as a station (e.g. connecting to a home router) or to act as an access point (i.e. accepting connections from clients). It can also be set to a dual-mode, where it can handle both roles.

In my case, I'm not looking to conenct the esp32 to a website to display the news, or the weather. And, for the time being, I'm also not looking to post new information in a dedicated website. Instead, I want to establish a WiFi connection so I can then communicate data packets from the esp32 to my computer. This involves the usage of a transmission protocol (TCP/IP or UDP/IP).

The UDP protocol relies on a more asynchronous communication and for this reason this a higher probability of getting mixed up samples. This isn't the end of the world, and in fact I've worked on a wearable tech device that used UDP as the protocol, since this also provides less latency. I'll be trying the TCP/IP implemention using lwIP (lightweight IP) that is compatible with the ESP-IDF environment.
Client and server roles

The terminology for client and server is widely used around the Internet development sector. In the case of TCP/IP protocol, I'll be setting up the esp32 as the "host" that is providing information to the computer (which acts as the "client".).

To setup my computer as a client, I have to run either a python script or a couple of netcat commands to tune in to the correct address and listen to the port.
