---
title: A short summary on Bluetooth
tags: ['post']
date: 2021-04-09
layout: post.njk
---
Bluetooth is defined in the Core standards as: "Bluetooth wireless technology is a short-range communications system intended to replace the cable(s) connecting portable and/or fixed electronic devices."

# Different types of Bluetooth
It all started with just one word: "Bluetooth". Back in the day, I remember using Bluetooth to transfer mp3 files from our old phones and being amazed at the idea of wireless data transfer at the tip of our fingers. 

## Bluetooth BD/EDR ("Bluetooth Classic" or "Bluetooth 5")
This older type of Bluetooth was optimised to have a decent data rate (as quick as it could get when going without cables). However, this higher data rate also means that the Bluetooth connection needs to be active for longer periods and consumes more power all in all. These days most applications lean away from Bluetooth BR/EDR in favour of a more power economic solution. The largest exception lies in audio-related products like headsets and speakers, since these benefit for higher data rate and less latency.

## Bluetooth Low Energy (BLE)
Bluetooth Low Energy, previously also known as "Bluetooth Ultra Low Power" or "Bluetooth Low Power", was designed to overcome the power requirements from Bluetooth (henceforth known as Bluetooth Basic Rate/EDR - Enhanced Data Rate). Since then, BLE has been adopted in a wide array of devices, with a huge uptake in consumer electronics such as sports gear and smart home. 

Although BLE is more predominant nowadays, when designing a new device, it is worth considering the use-case and user requirements for the communications pattern as it could tilt the balance from one to the other.

# Bluetooth Core architecture
## Common components in architecture
The Bluetooth Core is made up of a "Controller" which sits at the lower-level of the protocol and a "Host" which sits on top the of the Controller. 
The core system protocols are:

At Controller level,
- Radio protocol (PHY)
- Link Layer (LL) - includes Link Control and Link Manager protocol

At Host level (BLE and BR/EDR alike),
- Logical Link Control and Adaptation Protocol (L2CAP) - provides a channel-based abstraction to applications and services. It carries out fragmentation and de-fragmentation of application data and multiplexing and de-multiplexing of multiple channels over a shared logical link.
- Generic Access Profile (GAP) Protocol - represents the base functionality such as modes and access procedures used by the transports, protocols and applications profiles. GAP services include: device discovery, connection modes, security and authentication.

## Differences
The minimal requirements for a BR/EDR Host is simply to implement L2CAP and GAP. However a "minimal" BLE host needs to also implement:
- SMP (Security Manager Protocol) - uses a fixed L2CAP channel to implement security features (e.g. pairing and bonding).
- ATT (Attribute Protocol) provides a method to communicate small amounts of data over a fixed L2CAP channel. The Attribute protocol is also used by devices to determine the services and capabilities of other devices. 

# Final word
I'll leave it here on the short summary on Bluetooth as a technology, and tackle the BLE specific protocols in a next article. 