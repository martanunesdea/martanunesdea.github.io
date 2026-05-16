---
title: Getting BLE to work - Sharing
date: 2021-06-05
---

So how do you go about sending data on BLE? It is highly encouraged that data is sent through the ATT protocol. GATT sits on top of ATT and defines how that data is grouped into services and characteristics.

### Hold on, is GATT the same as GAP?
No, there is a common source of confusion between GAP (Generic Access Profile) and GATT (Generic Attribute Profile). GAP is a part of the BLE Host and describes some of the functionality behind advertisement, connecting, security, and pairing. On the other hand, GATT is used once there is a BLE link established and defines how devices read, write, and notify data.

The short story is that, whilst your BLE comms will work without requiring an in-depth knowledge of GAP, it does require you to understand GATT, as this is how you structure and exchange data over ATT.

To learn more about the Generic Access Profile and the role it plays in the establishment of a BLE connection, I would suggest reading the [Bluetooth Core Specification](https://www.bluetooth.com/specifications/specs/).

# What is GATT?
It is a standardised way of communicating in Bluetooth. It relies on the idea of grouping data into **services** and **characteristics** on a GATT server (often your peripheral), which a GATT client (often a phone app) can discover and use.

In the spec, SIG **profiles** (e.g. the Glucose Profile or Heart Rate Profile) are interoperability documents. They describe which services and characteristics a device should expose so different manufacturers' client apps can work with it. 
In everyday talk, people also say "profile" loosely for a custom bundle of data; that usually means a **custom service** with your own UUIDs. Each service is a stand-alone data configuration, think of it as an XML file almost, which encompasses separate sub-categories that should be related to each other.

## Example
If a device can share a "weather profile", that usually means a **weather service** with some weather-related data packaged together.

Inside this service, there may be two characteristics, e.g. "rainfall" and "temperature". Each characteristic has a **value**—that is what gets read or written over ATT.

# Characteristics and Attributes
A service includes several characteristics inside it (or perhaps just one, even). In the ATT table, everything is technically an "attribute", but the characteristic **value** is the piece of data you usually read or write.

## So, do I need to create a profile to send data?
It depends. There are existing SIG profiles and standard services you may be able to reuse. For instance, if you are wanting to send temperature data, Bluetooth SIG defines profiles and services such as **Health Thermometer** and **Environmental Sensing**—worth checking before inventing your own layout.

However, most people create **custom services**, give them custom UUIDs, and expose them in the GATT table after the client connects. Then you can create any characteristics as you please.

## SIG standard vs. custom service
If you already have an existing protocol, you may or may not want to reevaluate the domain of the information you are transferring, and consider whether it fits into existing SIG profiles or standard services.

If you have an assortment of information that needs to be transferred at different periodic intervals, then it may make sense to use different **services** (or characteristics) for specific bits of data, and you can then regulate how often each is updated in your firmware.

However, if you are only attempting to send a serial stream of data over BLE, you would typically add a **custom service** with one or more characteristics and define your own byte layout.

## Implementing a (minimal) custom service
This route involves creating a custom service and characteristic, each with a UUID to identify them.

You then need to define the characteristic's properties (read, write, notify, etc.) and its value format.

At this point, you have the structure that your data will follow but you will need to make sure it then works with the GATT client on the central (e.g. your phone app).

# Notifications and subscriptions in BLE
One tricky thing about reading and writing the same characteristic is that it is not very cache-friendly, especially on iOS devices.

I soon found that Apple was caching the value of my custom characteristic as soon as the BLE connection was established. This was **not** the intended result, since the value written to the characteristic was meant to signal an event to the central device!

For event-style updates, **notifications** (and subscribing via the CCCD) work better than relying on reads alone. In my case I also added another service to tell the app to refresh what it had cached after connecting.

# Conclusion
This article is barely scratching the surface of what you can do with GATT services and characteristics over BLE. I will try to write a separate article about the different layers of BLE.
