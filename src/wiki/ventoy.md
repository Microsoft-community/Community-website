# Creating a Multi-OS Bootable Drive (with Ventoy)
In this article, you will learn how to create a multi-OS bootable USB drive using Ventoy.

Ventoy is a tool that allows you to create a bootable USB drive with multiple operating systems or recovery tools. Unlike other software, Ventoy allows you to simply store the ISO files **directly** on the USB. This can be really helpful if you have a suite of tools that you often use, and you don't want to use a different USB drive for each one of them.

## Installing Ventoy on a USB
In this section, you will learn how to use the Ventoy-to-USB tool to install Ventoy on your USB.

::: warning Caution
Installing Ventoy **will wipe all data on the target drive**. Back up your data before proceeding, or use a drive that you know is empty.
:::

1. Download the [Ventoy-to-USB tool](https://www.ventoy.net/en/download.html). Since Ventoy is open-source, [you can also download the latest release from GitHub](https://github.com/ventoy/Ventoy/releases).

    ![Download page of Ventoy](<img/ventoy/ventoy-download.png>)

2. Plug-in the drive you want to use, which should have at least 8GB available.

3. In File Explorer, right-click on the file that you have just downloaded and select Extract. Then, inside the folder named `ventoy-1.x.xx`, run the executable named `Ventoy2Disk.exe`. A UAC prompt will pop up, click Yes.

4. Select your drive in the device drop-down menu. If your drive is not in the list, try clicking the green refresh button.

    ![Select USB](<img/ventoy/ventoy-window-screen.png>)
    
5. Click the Install button to install Ventoy on the drive. After it has finished, you will see a drive called "Ventoy" in File Explorer. This is where you can store the ISO files.

    ![Click on Install button](img/ventoy/install-ventoy.png)

## Downloading ISO files
### Windows
To download a Windows ISO file, refer to the [Downloading Windows](./downloading-windows.md) page.


::: tip Note
You can read more about reinstalling Windows on the [Installing Windows](installing-windows) wiki page.
:::

### Other tools
- **Kaspersky Rescue Disk** (Antivirus): https://www.kaspersky.com/downloads/free-rescue-disk (Not available in the US)

- **Microsoft Defender Offline** (Antivirus):
    - [32-bit version](https://go.microsoft.com/fwlink/?LinkID=234123)
    - [64-bit version](https://go.microsoft.com/fwlink/?LinkID=234124)

- **Clonezilla** (Disk imaging and cloning): https://clonezilla.org/downloads/download.php?branch=stable

- **Gparted** (Disk partitioning): https://gparted.org/download.php
