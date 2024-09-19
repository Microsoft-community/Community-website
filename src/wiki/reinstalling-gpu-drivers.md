# Reinstalling Graphics Drivers

## Method 1: Windows Update

::: tip Note
This method will update Windows and all available drivers, however as a general troubleshooting step this is not a bad idea.
:::

1. Open the Settings app. You can do this by searching for it in the Start menu, pressing <kbd>Win</kbd> + <kbd>I</kbd>, or pressing the Settings icon above the power button.

   ![The Settings button in Windows 10's Start menu.](./img/reinstalling-gpu-drivers/opensettings.png)

2. Select "Update & Security".

   ![The "Update & Security" tile in Windows 10's Settings app.](./img/reinstalling-gpu-drivers/updateandsecurity.png)

3. If there are updates available, click "Download". Otherwise, click "Check for Updates".

   ![The "Check for updates" button in Windows Update settings.](./img/reinstalling-gpu-drivers/checkforupdates.png)

4. Windows should begin looking for any drivers or updates available for your device, including graphics drivers if any are available.

   ![Windows Update is checking for updates.](./img/reinstalling-gpu-drivers/checkingforupdates.png)

## Method 2: Device Manager

::: tip Note
This method may not work effectively on older versions of Windows, if this is the case then use method 3.
:::

1. Open Device Manager by either searching for it in Start, or pressing <kbd>Win</kbd> + <kbd>X</kbd> and tapping <kbd>M</kbd> afterwards.

   ![Windows 10's taskbar search menu, with "Device Manager" shown as the first result.](./img/reinstalling-gpu-drivers/devmgmtsearch.png)

2. Find and expand the "Display adapters" icon. You'll be presented with a list of the graphics devices in your system. There will usually be only one or two.

   ![Device Manager's "Display adapters" section is expanded. Underneath it, Device Manager shows any connected graphics devices. This image shows an NVIDIA GeForce RTX 2060 SUPER in the "Display adapters" section.](./img/reinstalling-gpu-drivers/devmgmtdisplayadapt.png)

3. Right-click the adapter you wish to reinstall the graphics drivers for and right-click it. Then, select "Uninstall device".

   ![The "Uninstall device" option is in the context menu that appears when right-clicking a device in Device Manager.](./img/reinstalling-gpu-drivers/devmgmtuninstall.png)

4. Select "Delete the driver software for this device" then click "Uninstall". Note that your screen may flicker after clicking this button.

   ![Device Manager shows a confirmation window before uninstalling the driver for the device. The checkbox for "Delete the driver software for this device" is checked.](./img/reinstalling-gpu-drivers/devmgmtdelete.png)

5. Go to "Action", then select "Scan for hardware changes".

   !["Scan for hardware changes" is shown under Device Manager's "Action" menu, at the top of the window.](./img/reinstalling-gpu-drivers/devmgmtscan.png)

6. Go back to Display Adapters and find the graphics device you are attempting to reinstall. Note that it may now be called "Microsoft Basic Display Adapter". Right-click it and select "Update driver".

   ![The "Update driver" option is in the context menu that appears when right-clicking a device in Device Manager.](./img/reinstalling-gpu-drivers/devmgmtupdate.png)

7. Windows will now begin installing the latest graphics driver it can find. Note this may take some time and your screen may flicker. Note that if you get a message claiming the latest drivers are already installed, attempt method 3.

## Method 3: OEM Website

::: tip Note
Not all computers come with a complete list of drivers, especially custom-built computers. This means you should use generic drivers from the original GPU manufacturer (either Intel, NVIDIA, or AMD.).

Generic drivers for most common graphics cards can be found here:

- [Intel](https://downloadcenter.intel.com/)
- [NVIDIA](https://www.nvidia.com/Download/index.aspx)
- [AMD](https://www.amd.com/en/support)

You may also want to use Display Driver Uninstaller (DDU) for this if you're using an NVIDIA or Intel GPU. If that's the case, there is an excellent guide on that [here](https://www.wagnardsoft.com/content/ddu-guide-tutorial). If you're using an AMD GPU, then the Radeon installer's built-in "factory reset" (under Additional Options) function is preferred over DDU.
:::

1. Open your web browser and navigate to the website of your device or graphics card's manufacturer. For example, if this is a Dell laptop then go to Dell's website, however if it's a custom-built desktop with an NVIDIA graphics card, then head to NVIDIA's website.

2. Locate the option for downloading drivers for your product. If it is a pre-built computer such as a laptop you may need to model or serial number to find the download page.

3. Find the download for the graphics drivers, agree to any terms and conditions, then download the file.

4. Run the downloaded executable file and follow the on-screen instructions.
