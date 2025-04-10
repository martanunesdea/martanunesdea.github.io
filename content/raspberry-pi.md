---
title: I've finally starting testing out my Raspberry Pi
tags: ['post']
date: 2022-09-22
layout: post.njk
---
# So, what had taken me so long to do an embedded project on my free time?
The short answer: motivation. To be more precise, the right type of slight pressure to get something done within a timeframe and the purpose-driven motivation to yield that satisfactory moment of having something ticked off your to-do list. It's not the easiest type of motivation to come by, and that's probably why it's taken me this long. 

Aaanyway, let's get to the point. What follows here is my "public learning" log-type stuff.

MVP:
1. Set up
2. Read about security on SSH Raspberry Pi and implement extra steps for secure connection
3. Interface with USB
4. Protocol to share between Raspberry Pi and Mac
5. Interface with hard drive


# 1. Set up
First, wiped out sd card with NOOBS but kept FAT32 formatting.

Second, downloaded Raspberry Pi Imager which helped downloading the Raspberry Pi OS onto the sd card.

Third, added ssh file onto the boot partition.

Fourth, popped in the sd card, powered on the raspberry pi (whilst connected to the router) and found the IP address for the raspberry pi using scanner app (Fing) 

Lastly, connected through ssh with terminal on Mac. To configure WLAN settings, I then entered "sudo raspi-config" which allowed me to enter the WLAN SSID and password. 

I did have to repeat this cycle once or twice more, as I had to reset the OS image to ensure my mistakes were undone. In doing so, I realised that when using the "Rasperry Pi Imager" you can actually configure wireless settins from there (and you might even be able to reconfigure the generic "raspberry" username to something different).

# 2. Read about security and implement extra steps.
I thought about writing all that I did in this post, but it probably merits a separate article. The first and most important thing is to change the password to something different. If using SSH then you probably want to prioritise getting the right security settings sooner rather than later. Depending on where you live too (remote Arctic living may not be as vulnerable to WLAN attacks).


To change password from default:

```bash
ssh pi@192.168.0.56 -l pi
// upon prompted with password i typed a custom password
// to change password:
passwd
```

# 3. Interface with USB

I followed these commands:

### **Mount A USB Memory Stick / Drive**

**List available devices**

```

ls -l /dev/disk/by-uuid/

```

SDA1 will be your USB memory stick (unless you have multiple).  What it means:

The SD means SCSI device which also incoporates USB drives.The A means the 1st drive found (the next would be SDB, SDC, etc)The 1 means the first partition of the device (multiple partitions will give SDA2, SDA3, etc)

**Create a directory to assign it to and apply ownership of it**

Note that "usb" can be anything you want,

```bash
sudo mkdir /media/usb 
```

**Mount the USB Drive**

```

sudo mount /dev/sda1 /media/usb -o uid=my_user,gid=my_user
```

You can now access your drive using the path /media/usb/

**Un-mount the USB drive**

```

sudo umount /media/usb
```

[https://raspberry-projects.com/pi/command-line/file-system-command-line/usb-drives](https://raspberry-projects.com/pi/command-line/file-system-command-line/usb-drives)

# 4. Protocols for sharing between RPI and Mac

- Transferring files between RPI and PC
    - secure copy through SSH, this is quick but it is not very convenient for things like shared albums, etc.
    - File transfer protocol (FTP) with something like FireZilla. But this needs to be “set up” every time we want to share files, not completely frictionless.
    - SMB - samba solution
    - Netatalk - seems to be Mac only (or maybe UNIX only?). It seems like AFP protocol is deprecated on new Mac OS anyway, so I believe I would have to go with Samba for a somewhat simpler implementation.
    - NFS - Network File Sharing, seems complicated to be honest and a bit too much for what I need. I am open to use it in the future but for now I’m more interested on getting something up and running.
    - CIFS

# 5. Connecting Raspberry Pi hard drive with Mac

I ended up following this tutorial and it worked, but I’ve got no idea why. I should probably read up on the samba settings I’ve used.. the rest makes sense.

[https://tutorials-raspberrypi.com/raspberry-pi-samba-server-share-files-in-the-local-network/](https://tutorials-raspberrypi.com/raspberry-pi-samba-server-share-files-in-the-local-network/)

We create a new folder in the previously mounted directory:

```
mkdir /media/usb/share
```

Now we can edit the Samba configuration. But first, we create a backup (just in case):

```
sudo cp /etc/samba/smb.conf /etc/samba/smb.conf_backup
sudo nano /etc/samba/smb.conf
```

Add the following section to the end of the file and save with CTRL + O.

```
[share]
Comment = Raspberry Pi Shared Folder
Path = /media/usb/share
Browseable = yes
Writeable = Yes
only guest = no
create mask = 0777
directory mask = 0777
Public = yes
Guest ok = yes
```

This configuration means that every user can read, write and execute files. Either a Samba user or a “guest” is authorized.

The Samba user (also called “pi”) has to get a password. This password can differ from the SSH password of the user. We hereby put it:

```
sudo smbpasswd -a pi
```

The last step on the Raspberry Pi is to restart the Samba server.

```
sudo service smbd restart
```

And later on…

No reboot is necessary on **Mac Systems**. Here you can simply open a Finder window and select “Network” in the sidebar. Then select “raspberry pi” and the “shared” folder to get to the directory.

I had pinned this resource earlier on ([https://www.linux.com/news/using-samba-share-files-between-linux-and-windows/](https://www.linux.com/news/using-samba-share-files-between-linux-and-windows/)) and I’ve managed to work out the meaning behind the settings that I had used previously. I have now changed the config file to not be public.

These are my current settings:

```bash
[drive]
Comment = Shared Foldeer
Path = /media/hd0
Writeable = yes
create mask = 0777
directory mask = 0777
Public = no
Guest ok = no
```

This link was useful:

[https://raspberrypi-guide.github.io/filesharing/filesharing-raspberry-pi](https://raspberrypi-guide.github.io/filesharing/filesharing-raspberry-pi)

I also found this resource at some point but I’ve got no idea what this guy is doing, and whether it is even necessary. [https://www.jeremycollins.net/using-a-raspberry-pi-as-a-nas-mac-os-time-machine](https://www.jeremycollins.net/using-a-raspberry-pi-as-a-nas-mac-os-time-machine)

Looking back at it, this one was also heading the right way: [https://uk.pcmag.com/network-attached-storage/124258/how-to-turn-a-raspberry-pi-into-a-nas-for-whole-home-file-sharing](https://uk.pcmag.com/network-attached-storage/124258/how-to-turn-a-raspberry-pi-into-a-nas-for-whole-home-file-sharing)

Pinning these three for later reading:

[https://www.redhat.com/sysadmin/samba-file-sharing#:~:text=The Samba project provides file,%2C macOS%2C and Windows clients](https://www.redhat.com/sysadmin/samba-file-sharing#:~:text=The%20Samba%20project%20provides%20file,%2C%20macOS%2C%20and%20Windows%20clients).

(mentioned above) [https://www.linux.com/news/using-samba-share-files-between-linux-and-windows/](https://www.linux.com/news/using-samba-share-files-between-linux-and-windows/) 

[https://www.raspberrypi.com/documentation/computers/remote-access.html#installing-samba-support](https://www.raspberrypi.com/documentation/computers/remote-access.html#installing-samba-support)

(used to get stuff up and running) [https://tutorials-raspberrypi.com/raspberry-pi-samba-server-share-files-in-the-local-network/](https://tutorials-raspberrypi.com/raspberry-pi-samba-server-share-files-in-the-local-network/)
