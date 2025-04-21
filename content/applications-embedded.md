---
title: Applications of embedded software
tags: ['post']
date: 2020-02-21
layout: post.njk
---
Nowadays, a vast majority of end-products from software development are consumed through mobile devices and computers (e-commerce, social media, streaming sites, miscellaneous mobile apps, etc.). It’s easy to understand the strange reactions from people when I tell them about my job as an embedded software engineer. I once had someone asking me if that is the same as “making models”. Mostly, though, the blunt question I get is “what is that?”.

I can’t help but feel like the internet has provided a foundation to a large part of consumer-oriented software products. So, can there be any software applications outside the world wide web? And how often are we using it?

Here’s my attempt to explain embedded software applications.

I’ll be splitting this article into a brief explanation of embedded software, followed by an introduction to the two main areas where embedded software is present. I will finish pointing to other areas where it is also essential, thought not as visible to the everyday consumer.

## Firmware: Where hardware and software meet

Firmware is the software purposefully designed and implemented to interact with specific hardware design. Embedded software is commonly exchanged with firmware, although embedded tends to refer to software that is more agnostic of the hardware (ie. RTOS or Embedded Linux configurations). 

A simple example: A smart speaker.

Inside a smart speaker, there is a microprocessor inside, along with a hefty battery and other components, programmed to perform very specific tasks:

a. Connect through Bluetooth

b. Alert when batter is low

c. Instruct the loudspeakers to play or stop as commanded by the user.

What it boils down to is that embedded software has the responsibility to create an abstraction from the lower levels of electronic components and hardware to a human-friendly interface. This may come in different forms; as a complete operating system, if it’s a widely multi-purpose device, or through the implementation of a simple user interface with some buttons to get user input, if it is a single-purpose device only (e.g. a smart microwave).

Let’s move on to a brief introduction of the two main exponents of embedded software.


## “Internet of Things”

Wearables, HomeTech, CarTech, and any readily available gadget around you…

It’s a commonly used term nowadays. Only a couple of years ago, it was used as a way to explain that “there is this new field emerging and we don’t quite know what it will entail so we’re going to give it this broad and generic name”. It is the idea that more and more products will be connected to the internet since, as it seems, it will control the world going forward.

“Smart” devices have become commonplace thanks to the decrease in cost of microprocessors (in a simplistic way, the brains within computers) and of electronic components in general (e.g. memory storage, modules for Bluetooth, WiFi or Zigbee, sensors, etc.). Why would you get an expensive analogue watch, if you can get one that tells you the weather, how far you’ve walked, and who messaged you, for the same price or less?

Regardless of our personal opinion on the availability of technology, the truth is everywhere we look our lifestyles are now facilitated with assistive technology. And most of it is enabled with firmware: software built to closely interact with the hardware of a device, and delivering the best functionality to the user.

## Industry-grade software

This is one other large area where embedded software is also a key player. The average consumer may not come into contact with these software products but these exist and there are many software engineers behind their efficiency and reliability. A lot of industry-grade equipment is now supported by software and most of the times, this is embedded software. Here’s a short breakdown of software products within different key industries:

- Medical sector: hospital equipment such as ECG readers, surgical devices (endoscopes, assistive surgery devices), medical imaging devices, etc.
- Aviation sector: Planes are covered by sensors, motors, on and off switches, a bunch of electronics really. For the sanity of engineers, a lot of it is controlled by computer systems. This automates a lot of tasks, but also requires very safe software too.
- Automotive sector: The same logic from airplanes applies to cars, although in a smaller scale. The manufacturing of cars is in itself, dependent on yet more embedded software. There’s a special caveat about self-driving technology: this type of software isn’t necessarily embedded, a lot of it is processed through cloud or “edge” computing.
- Logistics and supply chain: The presence of robots automating tasks in warehouses and shipping facilities is yet again reliant on firmware. Although for some people robotics is a completely different field from embedded software, the underpinning idea of software interacting with hardware is there. In most cases, the engineers behind robotics projects were previously embedded software engineers in different sectors.

I realize that categorizing all of these different types of software products into “industry-grade software” is a bit of a generalization. But all of these fulfill the following criteria relevant in this article:

1) They are not a consumer-centric software product (B2B rather than B2C software), and therefore most people are oblivious of its existence and importance.

2) They require high-level of reliability and need to comply which very strict standards (MISRA standards for aviation and automotive sectors, ISO standards for medical equipment, and many more). This is because their purpose and functionality is not to be consumed by an user, but to sustain the foundation of critical processes (such as transportation or saving lives). Thus ,they must prevail much more rigorous testing.

## Conclusion

This article aims to reflect on the unseen and unspoken heroes within the world of software products: embedded software applications. As we’ve seen, a lot of the technologies we use are reliant on embedded software.

In general, a lot of software exists in no small part thanks to embedded software engineering; as it abstracts away all the dependencies on the hardware. You may have heard that a lot of programming languages are based or built on C. This is because UNIX, one of the earliest operating systems, was entirely built on C, effectively bridging the gap between hardware and software. Once there was an OS written in C, other programs could interact with it in the same language. Since then, many compilers have been built to ensure that software written in C could be executed by the computers available.