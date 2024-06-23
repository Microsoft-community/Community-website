# Installing and Updating Drivers 
In this guide, you will learn how to download or update drivers on your computer.

::: warning Warning
It is highly recommended to avoid using third-party software to update or install your drivers.
:::
## Identifying Your Hardware
The first step in installing drivers is to correctly identify the hardware you need drivers for. This information can be found in your computer's manual or by using the Device Manager. You can access the device manager by right-clicking the Windows start button or by pressing <kbd>Win</kbd> + <kbd>X</kbd> and selecting Device Manager. In the Device Manager, look for the device you require drivers for, and expand its entry to see its model number. In System Information, navigate to the “Hardware” section and find the device you require drivers for.

## Method 1: Using Windows Update
You can usually find drivers for your devices in Windows Update, instead of having to manually download the file.

1. Open Settings through the start menu or by pressing <kbd>Win</kbd> + <kbd>I</kbd>.
 
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


See [Reinstalling GPU drivers from the OEM's website](/wiki/reinstalling-gpu-drivers.html#method-3-oem-website) for more information on installing GPU drivers.
## Troubleshooting 🔧
### If you can access Windows:
1. Open the Device Manager by pressing <kbd>Win</kbd> + <kbd>X</kbd> and then clicking the "Device Manager" option. You can also search for it in the Start Menu.

<img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-power-user-menu.png" alt="The Win+X 'power user' menu, with Device Manager highlighted." height="400px">

2. In Device Manager, find the device that is causing problems (you might have to expand a category), right-click on it, and click "Properties".

<img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-button.png" alt="The context menu for a display adapter in Device Manager, with Properties highlighted." width="500px">

3. Go to the "Driver" tab at the top of the window, and then click "Roll Back Driver".

<img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-roll-back-driver.png" alt="The properties window for a device in Device Manager, with the Driver tab and Roll Back Driver button highlighted." height="350px">

4. Windows will ask you why you're rolling back to a previous driver. Select a reason, and click "Yes". If you want to, you can leave a detailed response in the "Tell Us More" field, at the bottom of the window.

<img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." height="300px">

5. Windows will then restore your driver to the previous version, which could take up to 5-10 minutes.

<img src="./img/installing-and-updating-drivers/troubleshooting/hardware-change-restart-prompt.png" alt="The prompt to restart your computer, shown after rolling back a driver." width="500px">

### Safe Mode
Safe mode is a diagnostic tool, which loads Windows with only the essential drivers. This allows you to access Windows even if the problematic driver is causing issues during normal boot.
1. Enter Safe Mode:


On Windows 10 or 11:

1. Open the Start menu, click on the power button, and hold <kbd>Shift</kbd> while clicking Restart. This will take you to the Windows Recovery Environment:


2. Click on "Troubleshoot"

   <img src="./img/installing-and-updating-drivers/winre/troubleshoot.png" alt="An image of advanced startup" height="350px">

3. Then, select "Advanced options"

   <img src="./img/installing-and-updating-drivers/winre/advanced_options.png" alt="An image to entrace to advanced options" height="350px">

4. Finally, click "Startup Settings" and then "Restart".
 <img src="./img/installing-and-updating-drivers/winre/startup_settings.png" alt="An image to click to startup options" height="350px">

   After your computer restarts, press <kbd>4</kbd> to boot into Safe Mode, or <kbd>5</kbd> to boot into Safe Mode with internet access.
4. Finally, click "Startup Settings" and then "Restart".
 <img src="./img/installing-and-updating-drivers/winre/startup_settings.png" alt="An image to click to startup options" height="350px">

   After your computer restarts, press <kbd>4</kbd> to boot into Safe Mode, or <kbd>5</kbd> to boot into Safe Mode with internet access.

On earlier versions of Windows:

- Restart your computer and repeatedly press F8 before the Windows logo appears.
- At the Advanced Boot Options menu, select “Safe Mode” to boot into Safe Mode, or “Safe Mode with Networking” to boot into Safe Mode with internet access.

2. Uninstall the Driver in Safe Mode:

Once in safe mode, you can uninstall the problematic driver:

1. Open the Device Manager (search for it in the Start Menu).

2. Expand the category for the device with the recently installed driver.

<img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-button.png" alt="The context menu for a display adapter in Device Manager, with Properties highlighted." width="500px">

3. In Device Manager, find the device that is causing problems (you might have to expand a category), right-click on it, and click "Properties".

<img src="./img/installing-and-updating-drivers/troubleshooting/device-manager-properties-roll-back-driver.png" alt="The properties window for a device in Device Manager, with the Driver tab and Roll Back Driver button highlighted." height="350px">

4. Go to the "Driver" tab at the top of the window, and then click "Roll Back Driver".

<img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." height="300px">

5. Windows will ask you why you're rolling back to a previous driver. Select a reason, and click "Yes". If you want to, you can leave a detailed response in the "Tell Us More" field, at the bottom of the window.

<img src="./img/installing-and-updating-drivers/troubleshooting/driver-rollback-confirmation.png" alt="The confirmation dialogue presented after selecting Roll Back Driver." width="500px">

6. Windows will then restore your driver to the previous version, which could take up to 5-10 minutes.

<img src="./img/installing-and-updating-drivers/troubleshooting/hardware-change-restart-prompt.png" alt="The prompt to restart your computer, shown after rolling back a driver." width="500px">


Or if you can't access the normal safe mode, you may try and access Safe Mode with Command Prompt and execute the following commands in Command Prompt:

1. ```Dism /image:C:/ /Get-Drivers```

2. ```DISM /Image:C:/ /Remove-Driver /Driver:not_working_driver.inf``` (replace not_working_driver with the driver that isn't working).

3. You should see something like this:  
```
::: tip Note
If you have trouble with this, proceed to another troubleshooting method below.
:::
```
::: Info:
If something went wrong, proceed with another method of troubleshooting
:::

1. At startup options, click Troubleshoot.

   <img src="./img/installing-and-updating-drivers/winre/troubleshoot.png" alt="An image of advanced startup" height="350px">

2. Click Advanced options.

   <img src="./img/installing-and-updating-drivers/winre/advanced_options.png" alt="An image to entrace to advanced options" height="350px">

3. Click System Restore and follow the instructions.

   <img src="./img/installing-and-updating-drivers/winre/system_restore.png" alt="An image to enter to system restore menu" height="350px">

3. Click System Restore and follow the instructions.

<img src="./img/installing-and-updating-drivers/winre/system_restore.png" alt="An image to enter to system restore menu" height="350px">

### Startup Repair

2. Boot your computer using the recovery drive and pick “Fix computer problems"
    
   1. Select "Troubleshoot"
    
      <img src="./img/installing-and-updating-drivers/winre/troubleshoot.png" alt="An image of advanced startup" height="350px">
    
   2. Select "Advanced options"
    
      <img src="./img/installing-and-updating-drivers/winre/advanced_options.png" alt="An image to entrace to advanced options" height="350px">
    
   3.  Select "Startup Repair"
    
      <img src="./img/installing-and-updating-drivers/winre/startup_repair.png" alt="An image to click startup repair" height="350px">
    
    - Select "Startup Repair"
    
    <img src="./img/installing-and-updating-drivers/winre/startup_repair.png" alt="An image to click startup repair" height="350px">

### Reinstall Windows

If none of the solutions above work, you may need to reinstall Windows. This will erase all your data and applications, so make sure you have a backup. You may learn how to backup your data [here](/wiki/backup.html).

1. Download Windows using a working computer: [Downloading Windows](/wiki/downloading-windows.html)
 
2. Next, to install Windows, follow this guide: [Installing Windows](/wiki/installing-windows.html) 