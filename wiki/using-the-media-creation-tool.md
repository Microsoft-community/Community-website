# Using the Media Creation Tool

One of the most common solutions to many problems in Windows is reinstalling it. While built-in settings exist that do this, they rely on an embedded image that can often become unstable or unusable, and as such the Media Creation Tool is recommended for this purpose.

At least 8 GB of space on the `C:` drive is required to run the tool.

## Downloading the tool

1. For Windows 10, go to [https://www.microsoft.com/software-download/windows10](https://www.microsoft.com/software-download/windows10) <br>
   For Windows 11, go to [https://www.microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11)

2. Click the **Download Tool Now** button.

   ![](img/using-the-media-creation-tool/downloadtoolnow.png)

3. After the tool has been downloaded, run it.

## Using the tool

1. The first thing you will see is this screen, click Accept.

   ![](img/using-the-media-creation-tool/licenseterms.png)

2. The next screen you see will be this, wait for the installer to complete preparation.

   ![](img/using-the-media-creation-tool/gettingthings.png)

3. This is where you select what you want to do.

   - If you want to **repair the Windows installation on this computer** click **Upgrade this PC now** and follow Method 1.

   - If you **want to reinstall Windows on another computer** click **Create installation media** and follow Method 2.

    ![](img/using-the-media-creation-tool/whatdoyouwanttodo.png)

## Method 1: Repairing an existing installation

1. This is the screen that you will see, wait for Windows 10 to finish downloading.

   ![](img/using-the-media-creation-tool/downloading.png)

2. This is the final screen you will see before it starts re-installing Windows 10. Assuming that you want to keep your files, you can just press **Install**.

   > Alternatively, you can click *change what to keep* and choose either Personal Files and Apps, Personal Files, or Nothing.

   ![](img/using-the-media-creation-tool/readytoinstall.png)

After this, the tool will start re-installing Windows 10.

## Method 2: Creating installation media

You need a **blank** USB with at least **8 GB of space** for the following steps.

1. Select the correct Architecture, Edition and Language of Windows 10, or use the recommended settings.

   > If you're planning on installing Windows on another PC and don't know what to select for the architecture, then choose both x86 and x64.

   ![](img/using-the-media-creation-tool/changelanguagearchitecture.png)

2. Select **USB Flash Drive**.

   ![](img/using-the-media-creation-tool/mediatouse.png)

3. Select the USB that you have inserted. ***ANY DATA ON THE USB WILL BE ERASED***

   ![](img/using-the-media-creation-tool/selectusb.png)

4. Wait for Windows 10 to finish downloading.

   ![](img/using-the-media-creation-tool/downloading.png)

After this, you will see a screen saying that the flash drive is ready. Click finish, eject the USB, take it out and insert it into the computer that is not working.

### How to re-install Windows using a USB

1. Turn on the computer that is not working, and repeatedly press the boot menu key. This depends on the manufacturer of your device and can be found out using a web search engine.

2. Once open, move the cursor using the arrow keys to the name of the USB you have inserted and then press Enter.

You will now boot to the Windows 10 Installer. For further guidance, see [Installing Windows 10](installing-windows-10).
