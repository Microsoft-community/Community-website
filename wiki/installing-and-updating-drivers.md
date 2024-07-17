# Installing and Updating Drivers 
In this guide, you will learn how to download or update drivers on your computer.

::: warning
It is highly recommended to avoid using third-party software to update or install your drivers.
:::

## Identifying Your Hardware
The first step in installing drivers is to correctly identify the hardware you need drivers for. This information can be found in your computer's manual or by using the Device Manager. You can access the device manager by right-clicking the Windows start button or by pressing <kbd>Win</kbd> + <kbd>X</kbd> and selecting Device Manager. In the Device Manager, look for the device you require drivers for, and expand its entry to see its model number.

You can also use the System Information tool to find hardware information; open System Information, navigate to the “Hardware” section and find the device you require drivers for.

## Method 1: Using Windows Update
You can usually find drivers for your devices in Windows Update, instead of having to manually download the file.

1. Open Settings via the start menu or by pressing <kbd>Win</kbd> + <kbd>I</kbd>.
 
2. Go to Update & Security (on Windows 10) or Windows Update (on Windows 11).
 
3. Click on “Check for Updates” or "Download & Install Updates".
 

Windows Update might say that you are up-to-date, even if optional updates are available. You can check for additional optional updates in the 'Optional updates' section of Windows Update settings.

On Windows 11:

1. Click "Advanced options".

   <img src="./img/installing-and-updating-drivers/optional-updates/windows-update-advanced-options.png" alt="Windows 11's Windows Update settings, with the Advanced options button highlighted." width="500px">

2. Click "Optional updates".

   <img src="./img/installing-and-updating-drivers/optional-updates/windows-update-advanced-options-optional-updates.png" alt="The Advanced options menu, with the Optional updates button highlighted." width="500px">

3. Click "Driver updates" to show the list of available driver updates, if there are any.

   <img src="./img/installing-and-updating-drivers/optional-updates/windows-update-optional-updates-driver-updates.png" alt="The Optional updates menu, with the Driver updates menu highlighted." width="500px">

4. Select any optional updates you wish to install, then click "Download & install".

   <img src="./img/installing-and-updating-drivers/optional-updates/windows-update-driver-update-example.png" alt="An available optional driver update, with the Download & install button selected." width="500px">

On Windows 10, a "View optional updates" link will appear under "Check for updates" if optional updates are available. Click on it to see the list of available driver updates.

## Method 2: Using your OEM's website
::: tip Note
"OEM" here refers to the manufacturer of an entire device, like a laptop or pre-built desktop. If you are using a custom-built computer, you should follow [Method 3](#method-3-using-your-manufacturer-s-website) instead.
:::

It is highly recommended to download or update your drivers through your manufacturer's website, as that will guarantee proper functionality, provided you've installed the correct drivers. This is especially a good idea for your Graphics Card (GPU) Drivers.

All you need to do is:
1. On the search engine of your choice (Google, Bing, etc…), search for "{device manufacturer} drivers".
2. Visit the manufacturer's website and enter the model of your device, then follow the instructions on the page.
3. When you select the product, you may be shown with 2 options:
	- Download the driver downloader (recommended).
	- Download this specific driver only and install manually.
### Well-known manufacturers' websites
- [Dell](https://www.dell.com/support/home/en-us?app=drivers)
 
- [HP](https://support.hp.com/us-en/drivers)
 
- [Lenovo](https://pcsupport.lenovo.com/us/en)

- [ASUS](https://www.asus.com/support/download-center)


## Method 3: Using your manufacturer's website
::: tip Note
"Manufacturer" here refers to the manufacturer of an individual piece of hardware. If you are using a laptop or a pre-built desktop, you should probably download drivers from your OEM's website instead. See [Method 2](#method-2-using-your-oem-s-website).
:::

For each piece of hardware in your computer that you wish to get drivers for:
1. On the search engine of your choice (Google, Bing, etc…), search for "{hardware manufacturer} drivers".
 
2. Search for the model number of the piece of hardware you want to upgrade/install drivers for.
 
3. When you select the product, you may have two options:
 
    - Download the driver downloader (recommended).
    - Download this specific driver only and install manually.


See [Reinstalling GPU drivers from the OEM's website](reinstalling-gpu-drivers#method-3-oem-website) for more information on installing GPU drivers.

## Troubleshooting 🔧
### If you can access Windows:
#### Verifying Driver Signatures
1. Press <kbd>Win</kbd> + <kbd>R</kbd> and write `sigverif` and press <kbd>enter</kbd>.

2. A window will pop up. Press the `Start` button to verify driver signatures.

#### Updating Drivers with Device Manager
1. Press <kbd>Win</kbd> + <kbd>X</kbd> and then clicking the "Device Manager" option. You can also search for it in the Start Menu.

   <img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-power-user-menu.png" alt="The Win+X 'power user' menu, with Device Manager highlighted." height="400px">

2. In Device Manager, find the device that is causing problems (you might have to expand a category), right-click on it, and click "Properties".

   <img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-button.png" alt="The context menu for a display adapter in Device Manager, with Properties highlighted." width="500px">

3. Go to the "Driver" tab at the top of the window, and then click "Roll Back Driver".

   <img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-roll-back-driver.png" alt="The properties window for a device in Device Manager, with the Driver tab and Roll Back Driver button highlighted." width="300px">

4. Windows will ask you why you're rolling back to a previous driver. Select a reason, and click "Yes". If you want to, you can leave a detailed response in the "Tell Us More" field, at the bottom of the window.

   <img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." width="300px">

5. Windows will then restore your driver to the previous version, which could take up to 5-10 minutes.

   <img src="./img/installing-and-updating-drivers/troubleshooting/hardware-change-restart-prompt.png" alt="The prompt to restart your computer, shown after rolling back a driver." width="500px">

### Safe Mode
Safe mode is a diagnostic tool, which loads Windows with only the essential drivers. This allows you to access Windows even if the problematic driver is causing issues during normal boot.

1. Enter Safe Mode:

   **On Windows 10 or 11:**

   1. Open the Start menu, click on the power button, and hold <kbd>Shift</kbd> while clicking Restart. This will take you to the Windows Recovery Environment.


   2. Click on "Troubleshoot"

      <img src="./img/installing-and-updating-drivers/winre/choose_an_option_screen.png" alt="A screenshot showing the Windows Recovery Environment screen with an arrow pointing at the Troubleshoot button." width="500px">

   3. Then, select "Advanced options"

      <img src="./img/installing-and-updating-drivers/winre/troubleshoot_screen.png" alt="A screenshot of the Troubleshooting menu in the Windows Recovery Environment with the Advanced Options button highlighted." width="500px">

   4. Finally, click "Startup Settings" and then "Restart".

      <img src="./img/installing-and-updating-drivers/winre/advanced_options_screen.png" alt="A screenshot of the Advanced Options menu in the Windows Recovery Environment, with the Startup Settings button highlighted." width="500px">

   After your computer restarts, press <kbd>4</kbd> to boot into Safe Mode, or <kbd>5</kbd> to boot into Safe Mode with internet access.

   **On earlier versions of Windows:**

   - Restart your computer and repeatedly press F8 before the Windows logo appears.
   - At the Advanced Boot Options menu, select “Safe Mode” to boot into Safe Mode, or “Safe Mode with Networking” to boot into Safe Mode with internet access.

2. Uninstall the Driver in Safe Mode:

   Once in safe mode, you can uninstall the problematic driver:

   1. Open the Device Manager (search for it in the Start Menu).

   2. Expand the category for the device with the recently installed driver.

      <img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-button.png" alt="The context menu for a display adapter in Device Manager, with Properties highlighted." width="500px">

   3. In Device Manager, find the device that is causing problems (you might have to expand a category), right-click on it, and click "Properties".

      <img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-roll-back-driver.png" alt="The properties window for a device in Device Manager, with the Driver tab and Roll Back Driver button highlighted." width="300px">

   4. Go to the "Driver" tab at the top of the window, and then click "Roll Back Driver".

      <img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." width="300px">

   5. Windows will ask you why you're rolling back to a previous driver. Select a reason, and click "Yes". If you want to, you can leave a detailed response in the "Tell Us More" field, at the bottom of the window.

      <img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." width="300px">

   6. Windows will then restore your driver to the previous version, which could take up to 5-10 minutes.

      <img src="./img/installing-and-updating-drivers/troubleshooting/hardware-change-restart-prompt.png" alt="The prompt to restart your computer, shown after rolling back a driver." width="500px">


Or if you can't access the normal safe mode, you may try and access Safe Mode with Command Prompt and execute the following commands in Command Prompt (replace `not_working_driver` with the driver that isn't working):

```
DISM /Image:C:\ /Get-Drivers
DISM /Image:C:\ /Remove-Driver /Driver:not_working_driver.inf
```

3. You should see something like this:  
```
Found 1 driver package(s) to remove.
Removing 1 of 1 – not_working_driver.inf: The driver package was successfully removed.
The operation completed successfully.
```

1. At startup options, click Troubleshoot.

   <img src="./img/installing-and-updating-drivers/winre/choose_an_option_screen.png" alt="An image of advanced startup" width="500px">

2. Then, click on "Advanced Options"

   <img src="./img/installing-and-updating-drivers/winre/troubleshoot_screen.png" alt="An image to entrace to advanced options" width="500px">

3. Finally, click on "System Restore" and follow the instructions

   <img src="./img/installing-and-updating-drivers/winre/advanced_options_screen.png" alt="An image to enter to system restore menu" width="500px">

### Startup Repair
    
   1. Select "Troubleshoot"

      <img src="./img/installing-and-updating-drivers/winre/choose_an_option_screen.png" alt="An image to enter to system restore menu" width="500px">
    
   2. Select "Advanced options"
    
      <img src="./img/installing-and-updating-drivers/winre/troubleshoot_screen.png" alt="An image to entrace to advanced options" width="500px">
    
   3. Select "Startup Repair"
    
      <img src="./img/installing-and-updating-drivers/winre/advanced_options_screen.png" alt="An image to click startup repair" width="500px">

### Reinstall Windows

If none of the solutions above work, you may need to reinstall Windows. This will erase all your data and applications, so make sure you have a backup. You can learn how to backup your data [here](/wiki/backup.html).

You can learn how to download and reinstall Windows [here](downloading-windows).
