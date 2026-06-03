---
title: Getting BLE to work - Connecting
date: 2021-09-14
---
Bluetooth can be a multi-client network but the simplest network only requires two devices: a server, providing the information and a client, requesting it. 

In order to get this network to communicate, it is necessary to establish the following points:
- Which device initiates the connection? Which device accepts the connection?
- How is the connection going to be established? 
- Security considerations regarding the connection link.

# Device roles
The roles of a device may vary based on the stages of the protocol. This is a simplified version of how to distinguish between these.

## Advertisement
A device may be a "broadcaster" if it is advertising, or an "observer" if it is scanning for devices. 

## Connection
Then, a device may be a "central device" if it requests a connection, or a "peripheral" device, if it accepts a connection.

## Communication 
Lastly, when communicating through ATT, a device becomes a "client" when asking for information, and another device the "server" that provides that information.

# Establishing a connection
In a scenario with low security requirements, connecting can be as easy as, finding a Bluetooth device and issuing a connection command to it. (This is assuming you have access to the Bluetooth's module library or API).

Provided the "peripheral" device is willing to connect, it will accept and connect. This functionality is enabled through GAP: it discovers devices available and attempts to connect. 

# Security implications
A simple connection relies on the assumption that a device would readily accept any incoming connections but this could be a dangerous and vulnerable position. For instance, if that device is also connected with a wide area network, it could be maliciously infected with malware and propagate through the network. 

This is why a lot of devices require "pairing" as a way to safely confirm that two devices should indeed be connected. 

## Pairing and bonding
Pairing is how two BLE devices prove to each other that they are allowed to link up securely. Through the Security Manager Protocol (SMP), they exchange keys and negotiate encryption so that traffic on the connection is not sent in plain text. Depending on your security settings, the user may need to confirm the link—by entering a PIN, tapping "Pair", or checking that the same six-digit code appears on both screens.

Bonding is the step that comes after pairing when devices agree to remember the relationship. The long-term keys are saved on each device, usually in a bond list or trusted-device store. On the next connection, they can skip most of the pairing ceremony and re-establish encryption using the stored keys, which is why your headphones reconnect to your phone without asking for a PIN every time.

It is worth keeping the two ideas separate: you can pair without bonding, which gives you a secure link for that session only, and you must pair (or use stored bond information) before bonding can occur. When you are prototyping, it is common to get basic connections working first and only turn on bonding once you care about fast, trusted reconnects in the field.

# Final word
Now we've learned about establishing a connection, in the next article, I will be discussing the use of GATT as means to share data.
