---
title: Getting BLE to work
tags: ['post']
date: 2021-05-02
layout: post.njk
---
Bluetooth can be a multi-client network but the simplest network only requires two devices: a host and a client. Normally, the host is the device providing the information and the client is the one requesting it. 

In order to get this network to communicate, it is necessary to establish the following points:
- Who is the host device? And who is the client device?
- How is the connection going to be established? Security considerations regarding this.
- How is the data going to be transferred? Plus data integrity considerations regarding this.

Depending on the application, there may be other things that need a detailed consideration but for most people wanting to develop a marketable application this should suffice.

# Device roles
During the advertisement and connection stages, the device may take different roles and it can get a bit confusing to determine what is the role of a given device.

As far as I understand it: a device may be a "broadcaster" if it is advertising, or an "observer" if it is scanning for devices. Then, a device may be a "peripheral" if it requests a connection, and a "central" device, if it accepts a connection.

The roles of a device may vary based on the stages of the protocol.

## Link layer
At the most basic level, we think of the "link layer". At this layer, the device starting the pairing and bonding is the "peripheral" and the device responding is the "central".

## Generic Access Profile
Further up, once a connection is established, we think of the "GAP" Generic Access Profile layer. In this layer, the device initiating the communication is often the "peripheral" and the device responding to the request is the "central".

## Generic Attribute Protocol
Lastly, we have the Generic Attribute Protocol layer, whereby devices pass frames as "attributes". In this layer, we mark a distinction in device type based on which device requests the data (ie. the client) and the device providing the data (ie. the server).


# Establishing a connection 

