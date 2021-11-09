---
title: Incorporating BLE to an existing comms protocol
tags: ['post']
date: 2021-06-20
layout: post.njk
---
My first use of Bluetooth Low Energy was to get a wireless link between two devices with the lowest power consumption possible. The data being sent was basically a couple of long integers every now and again. It sounds technological quite simple, the complexity was on the custom biosensor being developed (not by me thankfully!).

The second time I came across Bluetooth Low Energy, we needed to get several hundreds of MBs from a chunky lateral flow point of care device to a mobile app. BLE was not our preferred Bluetooth protocol but once we found out about Apple's policy regarding Bluetooth BR/EDR, we had to stick with that. 

So how do you go about sending this much data on BLE?  

# Different layers of BLE
Bluetooth Low Energy is split into different layers, as per any developed communications protocol. A common source of confusion is the mix up between GAP (Generic Access Profile) and GATT (Generic Attribute Protocol). GAP is a part of the BLE stack and describes some of the topology behind the protocol. On the other hand, GATT outlines a higher level protocol for the devices once there is a BLE link established. 

The short story is that, whilst your BLE comms will work without requiring an in-depth knowledge of GAP, it does require you to understand GATT, as this is how the BLE frames get sent between devices.

To learn more about the Generic Access Profile and the role it plays in the establishment of a BLE connection, I would suggest reading the Bluetooth Core paper.

# Generic Attribute Protocol (GATT)

As mentioned before, the Generic Attribute Profile sits at the top level of this BLE stack. This layer dictates the rules and expected format of the BLE Profiles. 

Each Profile is a stand-alone data configuration, think of it as an XML file almost, which encompasses separate containers of data, which should be related to each other. The basic example is the "Glucose Profile" or "Air Pressure Profile", these are standardised profiles that are reused across different applications. It is useful because different devices from different manufacturers could use the same "Profile" and then one app could decipher the information on all of them more easily.

## Characteristics and Attributes
A Profile includes several characteristics inside it (or perhaps just one, even). These characteristics will then hold Attributes, which are the elementary pieces of data that can have their values read or written.


# Creating a Profile from scratch vs. borrowing one
If you already have an existing protocol, you may or may not want to reevaluate the domain of the information you are transferring, and consider whether it fits into existing Profiles. 

If you have an assortment of information that needs to be transferred at different periodic intervals, then it may make sense to create different Profiles to specific bits of data, and you can then regulate how often each Profile will be updated, etc.

However, if you are only attempting to send a serial stream of data over BLE and not interested in generating a new profile, you could borrow the "Generic Attribute Profile" since it is open for configuration. I will say it again because it sounds confusing the first time around, there is an already defined profile called Generic Attribute Profile, which follows the specifications of the "Generic Attribute Profile" in the Bluetooth Core Spec. Yes, a bit of an inception of GATTs if you ask me! 

## Borrowing a Profile
This route involves creating a custom characteristic, for which you will need to create a UUID number to identify it in your collection of Profiles. 

You then need to character an Attribute within this characteristic, and define some of the parameters associated with it. 

At this point, you have the structure that your data will follow but you will need to make sure it then works with the host.

## Notifications and subscriptions in BLE
One tricky thing about reading and writing the same attribute within a characteristic is that it is not very cache-friendly, especially in iOS devices. 

I soon found that Apple was caching the attribute of my custom characteristic as soon as the BLE connection was established. This was by far the intended result, since the value written to the attribute was meant to notify the host of a certain event! 

I had to create yet another profile which would serve the purpose of notifying the device to reset or refresh the profiles that it had loaded upon connecting to the client.

# Conclusion
This article is barely scratching the surface of what you can do with Profiles over BLE. I will try to write a separate article about the different layers of BLE. 


