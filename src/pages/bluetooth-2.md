---
title: Getting BLE to work - Connecting
tags: ['post']
date: 2021-05-02
layout: post.njk
---
Bluetooth can be a multi-client network but the simplest network only requires two devices: a host and a client. Normally, the host is the device providing the information and the client is the one requesting it. 

In order to get this network to communicate, it is necessary to establish the following points:
- Which device starts the connection? Which device accepts the connection?
- How is the connection going to be established? 
- Security considerations regarding the connection link.

# Device roles
The roles of a device may vary based on the stages of the protocol. This is a simplified version of how to distinguish between these.

## Advertisement
A device may be a "broadcaster" if it is advertising, or an "observer" if it is scanning for devices. 

## Connection
Then, a device may be a "peripheral" if it requests a connection, or a "central" device, if it accepts a connection.

## Communication 
Lastly, when communicating through ATT, a device becomes a "client" when asking for information, and another device the "server" that provides that information.

# Establishing a connection
In a scenario with low security requirements, connecting can be as easy as, finding a Bluetooth device and issuing a conenction command to it. (This is assuming you have access to the Bluetooth's module library or API).

Provided the "central" device is willing to connect, it will accept and connect. This functionality is enabled through GAP: it discovers devices available and attempts to connect. 

# Security implications
A simple connection relies on the assumption that a device would readily accept any incoming connections but this could a dangerous and vulnerable position. For instance, if that device is also connected with a wide area network, it could be maliciously infected with malware and propagate through the network. 

This is why a lot of device require "pairing" as a way to safely confirm that two devices should indeed be connected. 

## Pairing and bonding
Coming soon...

# Final word
Now we've learned about establishing a connection, in the next article, I will be discussing the use of GATT as means to share data.
