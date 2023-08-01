# Installing Windows

This article covers the steps of re-installing, or fresh installing Windows 10 or Windows 11 from a USB.

## Booting with USB

Turn on the computer that is not working, and repeatedly press the boot menu key. Usually the boot menu key is either one of <kbd>F10</kbd>, <kbd>F12</kbd>, <kbd>ESC</kbd>, or <kbd>F2</kbd> keys. This depends on the manufacturer of your device. The boot menu key for your device can be found out by searching up your computer's motherboard/model.

Once the boot menu is open, move the cursor using the arrow keys to the name of the USB¹ you have inserted and then press Enter.

¹ Can be usually USB HDD or your USB drive model. Your mileage may vary.

## Installing

::: danger
The disk that you are trying to install Windows on must be a GPT disk if you are on a UEFI system or MBR if you are on a BIOS system, otherwise it will not let you install. Use `diskpart` to change the partition scheme. ***THIS DELETES ALL DATA ON THE DISK***
:::

1. Select the correct regional settings then press Next.

   ![](./img/installing-windows/chooselanguage.png)

2. Click Install Now.

   ![](./img/installing-windows/installnow.png)

3. Enter your product key if you know it, otherwise click I don't have a product key. Note that this screen may not always come up, based on the computer.

   ::: tip Note
   If you click "I don't have a product key", you may be prompted with a screen to select a version of Windows to install. Select the edition you have a key or digital license for, or the edition of Windows that was previously installed.
   :::

   ![](./img/installing-windows/productkey.png)

4. Accept the agreement.

   ![](./img/installing-windows/licenseterms.png)

5. On the next screen, click Custom.

   ![](./img/installing-windows/upgradecustom.png)

## Method 1: Re-installing and keeping your data

::: tip Note
The drive that you are installing Windows to requires enough space to move the contents of the drive to a folder called `Windows.old` for this method.
:::

1. On the next screen, you will see a list of partitions for each disk you have, you want to select the partition marked "Primary" on the disk that you have Windows installed on, and that has a similar amount of space as the drive you have Windows installed on. In this example, Windows is installed on a 256 GB SSD, so we select the partition with approximately 256 GB of storage. Leave the other partitions untouched.

   ![](./img/installing-windows/custompartitionmanager.png)

2. After this, click Next.

Windows will now start re-installing on the partition that you selected. It will move any data from that partition to a folder located at `C:\Windows.old` if there is enough space.

![](./img/installing-windows/installing.png)

## Method 2: Clean install without keeping data

1. On the next screen, you will see a list of partitions for each disk you have. Now, you can choose to do one of two things:

   - Click the "Format" button at the bottom with your current Windows partition selected. ***THIS WILL ERASE ALL DATA ON THE SELECTED PARTITION***

   - Delete all of the partitions on the drive you want to install Windows on and then select the unallocated space on that drive to let Windows redo its partition setup. This is useful for brand new drives or if your partition setup is broken. ***THIS DELETES ALL DATA ON THE DISK***

     ![](./img/installing-windows/emptycustompartitionmanager.png)

2. After this, click Next.

Windows will now start installing on the partition that you selected.

![](./img/installing-windows/installing.png)
