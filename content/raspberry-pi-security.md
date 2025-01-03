---
title: Securing my raspberry pi wireless connection
tags: ['post']
date: 2022-09-25
layout: post.njk
---
# Security

This list is inspired by the official docs section: [“Securing your Raspberry Pi”](https://www.raspberrypi.com/documentation/computers/configuration.html#securing-your-raspberry-pi) and in fact, many of the steps I took were based on that documentation.
1. Change default credentials
2. Improve SSH security
3. Firewall and ban2safe
4. Automatic updates
5. (not really security but wifi related) Set a static IP address


# Changing default credentials

## Password

To change password:
`passwd`

## User

I followed these instructions, on official docs on the 15th August:

You can, of course, make your Raspberry Pi even more secure by also changing your username. All Raspberry Pis come with the default username `pi`, so changing this will immediately make your Raspberry Pi more secure.

To add a new user, enter:

`sudo adduser alice`

You will be prompted to create a password for the new user.

The new user will have a home directory at `/home/alice/`.

To add them to the `sudo` group to give them `sudo` permissions as well as all of the other necessary permissions:

`sudo usermod -a -G adm,dialout,cdrom,sudo,audio,video,plugdev,games,users,input,netdev,gpio,i2c,spi alice`

You can check your permissions are in place (i.e. you can use `sudo`) by trying the following:

`sudo su - alice`

If it runs successfully, then you can be sure that the new account is in the `sudo` group.

Once you have confirmed that the new account is working, you can delete the `pi` user. In order to do this, you’ll need to first change the autologin user to your new user `alice`, with the following:

`sudo raspi-config`

Select option 1, S5 `Boot / Auto login`, and say yes to reboot. Please note that with the current Raspberry Pi OS distribution, there are some aspects that require the `pi` user to be present. If you are unsure whether you will be affected by this, then leave the `pi` user in place. Work is being done to reduce the dependency on the `pi` user.

I did not implement this:

To delete the `pi` user, type the following:

`sudo deluser pi`

This command will delete the `pi` user but will leave the `/home/pi` folder. If necessary, you can use the command below to remove the home folder for the `pi` user at the same time. Note the data in this folder will be permanently deleted, so make sure any required data is stored elsewhere.

`sudo deluser -remove-home pi`

This command will result in a warning that the group `pi` has no more members. The `deluser` command removes both the `pi` user and the `pi` group though, so the warning can be safely ignored.

## Force sudo to have a password

Followed these instructions, from official docs on the 29th August

Placing `sudo` in front of a command runs it as a superuser, and by default, that does not need a password. In general, this is not a problem. However, if your Raspberry Pi is exposed to the internet and somehow becomes exploited (perhaps via a webpage exploit for example), the attacker will be able to change things that require superuser credentials, unless you have set `sudo` to require a password.

To force `sudo` to require a password, enter:

`sudo visudo /etc/sudoers.d/010_pi-nopasswd`

and change the `pi` entry (or whichever usernames have superuser rights) to:

`pi ALL=(ALL) PASSWD: ALL`

Then save the file: it will be checked for any syntax errors. If no errors were detected, the file will be saved and you will be returned to the shell prompt. If errors were detected, you will be asked 'what now?' Press the 'enter' key on your keyboard: this will bring up a list of options. You will probably want to use 'e' for '(e)dit sudoers file again', so you can edit the file and fix the problem.

# Improving SSH security

## Update openssl-server regularly

An up-to-date distribution contains all the latest security fixes, so you should go ahead and [update](https://www.raspberrypi.com/documentation/computers/os.html#updating-and-upgrading-raspberry-pi-os) your version of Raspberry Pi OS to the latest version.

If you are using SSH to connect to your Raspberry Pi, it can be worthwhile to add a `cron` job that specifically updates the ssh-server. The following command, perhaps as a daily cron job, will ensure you have the latest SSH security fixes promptly, independent of your normal update process.

`apt install openssh-server`

## Disable default pi user from logging in via ssh

(ie. in my case “lemontart”). Followed the below steps ([docs](https://www.raspberrypi.com/documentation/computers/configuration.html#make-sudo-require-a-password) on 29/08):

You can also **allow** or **deny** specific users by altering the `sshd` configuration.

`sudo nano /etc/ssh/sshd_config`

Add, edit, or append to the end of the file the following line, which contains the usernames you wish to allow to log in:

`AllowUsers alice bob`

You can also use `DenyUsers` to specifically stop some usernames from logging in:

`DenyUsers jane john`

After the change you will need to restart the `sshd` service using `sudo systemctl restart ssh` or reboot so the changes take effect.

## ****Using key-based authentication****

- Following on from [docs](https://www.raspberrypi.com/documentation/computers/remote-access.html#passwordless-ssh-access) ([Passwordless SSH Access](https://www.raspberrypi.com/documentation/computers/remote-access.html#passwordless-ssh-access)) I copied an existing key to the RPI:

```jsx
ssh-copy-id <USERNAME>@<IP-ADDRESS>
```

- Then verified the key was in ~/.ssh/authorized_keys in the RPI.
- Then logged out of SSH and checked it worked.
- Then disabled password-based ssh login: typed in command:

 `sudo nano /etc/ssh/sshd_config`

- There are three lines that need to be changed to `no`, if they are not set that way already:

`ChallengeResponseAuthentication no`

`PasswordAuthentication no`

`UsePAM no`

Save the file and either restart the ssh system with `sudo service ssh reload` or reboot.
