---
title: A short summary on Bluetooth
tags: ['post']
date: 2021-04-09
layout: post.njk
---
As with any standardised communications protocol, Bluetooth is heavily documented and described to guarantee that it can be replicated by RF manufacturers around the world. It is often hard to find a middleground between the Bluetooth SIG standard and a large simplification of how Bluetooth works. Here's an attempt to bridge this gap.

# Different types of Bluetooth
It all started with normal "Bluetooth". Back in the day, I remember using Bluetooth to transfer .mp3 files from our old phones and being amazed at the idea of "wireless". 

## Bluetooth BD/EDR ("Bluetooth Classic" or "Bluetooth 5")
This old type of Bluetooth was designed to have a quick data rate (as quick as it can get when going without cables). However, it was fairly power hungry. 

## Bluetooth Low Energy (BLE)
Bluetooth Low Energy, previously also known as "Bluetooth Ultra Low Power" or "Bluetooth Low Power", was designed to overcome the power requirements from the Bluetooth (henceforth known as Bluetooth BR/EDR - Enhanced Data Rate). Since then, BLE has been widely favoured in many applications and it is the more popular choice of Bluetooth when designing an application. This is possibly exaggerated by the fact that Apple insists on mostly only accepting BLE communications (unless you go through a special procedure and become authorized to communicate with BR/EDR). 

This is a bit of a shame, because many applications would benefit from once-off but large-size data transfer. We instead live in a world that favours very small-sized data transfer over many continuous timepoints. 