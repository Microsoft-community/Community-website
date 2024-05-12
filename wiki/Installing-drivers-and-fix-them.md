# Installing and updating drivers 
In this post, you will learn how to download or update drivers on your computer.
It's highly recommended to avoid using third-party software to update or install drivers.
## Before you get into the process, you need to know your computer.
The first step in installing drivers is to correctly identify the hardware you need drivers for. This information can be found in your computer's manual or by using the Device Manager (Windows) (right click into windows icon and press “Device Manager”). In the Device Manager, look for the device you require drivers for, and expand its entry to see its model number. In System Information, navigate to the “Hardware” section and find the device you require drivers for.

## Method 1: Check Windows Update
You can usually find drivers and drivers update in Windows Update, instead of manually downloading the file.
 1. Open the Settings app using the Start menu.
 2. Go to Updates and security.
 3. Click on “Check updates”.
 4. Windows Update might say that you are up-to-date, even if optional updates are available. In this case, you will see an “Optional Updates” button. Clicking on it will show a list of updates (all of them are typically driver updates). Select all of them and click on “Download and install”.

## Method 2: Download using the manufacturer's website.
It's highly recommended to download or update the drivers, through the manufacturer's website, as it's guaranteed that they will work correctly. This is especially a good idea for the GPU (Graphics) drivers.
All you need to do is:

 1. On the search engine of your choice (Google, Bing, etc…), search for "{device manufacturer} drivers".
 2. Next, enter the ID of the device and follow the instructions on the page.
 3. When you select the product, you have two options:
	- Download the driver downloader (recommended)
	- And download the driver on specific and run executable

## Method 3: Download using the OEM's website.
If you want to download the drivers for your GPU (Graphics Card), and the manufacturer's website doesn't provide the drivers, you can download them from the OEM's website. Only do this if you have to.
Now follow the same instructions as Method 2, but with the OEM's website.

 1. On the search engine of your choice (Google, Bing, etc…), search for "{the OEM's name} drivers".
 2. Search for the model number of the piece of hardware you want to upgrade/install drivers for.
 3. When you select the product, you have two options:
	- It's recommended to use the driver downloader if it's provided, as it makes the installation a lot easier.
	- Download the driver on specific and run the executable
- See [Reinstalling GPU drivers from the OEM's website](https://msft.chat/wiki/reinstalling-gpu-drivers.html#method-3-oem-website) for more information.
## Troubleshooting 🔧

1. Enter Safe Mode:

Safe mode is a diagnostic tool, which loads Windows with only the essential drivers. This allows you to access Windows even if the problematic driver is causing issues during normal boot.

 - Windows 10/11: Repeatedly press and hold the power button while booting to trigger a forced restart. After 2–3 restarts, you'll see the “Advanced options” screen. Navigate to “Troubleshoot” > “Advanced options” > “Startup Settings” > “Restart now”. Upon restart, choose “Enable Safe Mode with Networking” (if you need internet) or simply “Safe Mode”.

 - Earlier Windows versions: Restart your computer and repeatedly press F8 before the Windows logo appears. This should open the Advanced Boot Options menu, where you can select “Safe Mode”.

2. Uninstall the Driver in Safe Mode:

Once in safe mode, you can uninstall the problematic driver:

 1. Open the Device Manager (search for it in the Start Menu).
 2. Expand the category for the device with the recently installed driver.
 3. Right-click on the device and select “Uninstall device”.
 4. Check the box “Delete the driver software for this device” (if available) and click “Uninstall”.

3. System Restore (if applicable):

If you recently created a system restore point before installing the driver, you can restore Windows to that point:

 1. In Safe Mode, open the Start Menu and search for “System Restore”.
 2. Click “Create a restore point” and then “Next”.
 3. Choose the desired restore point (ideally the one before installing the driver) and click “Next” followed by “Finish”.

4. Startup Repair (if Windows won't boot at all):

If Safe Mode isn't accessible, you can try Startup Repair, a built-in tool on Windows that will attempt to fix boot issues:

 1. Create a Windows Recovery USB drive using another computer. See : [Download Windows](https://msft.chat/wiki/downloading-windows.html).
 2. Boot your computer using the recovery drive and pick “Fix computer problems > Troubleshoot” > “Advanced options” > “Startup Repair”.

5. Reinstall Windows (last resort):

If none of the above solutions work, you may need to reinstall Windows. This will erase all your data and applications, so make sure you have a backup.

 1. Download Windows using a working computer: [Downloading Windows](https://msft.chat/wiki/downloading-windows.html)
 2. Next, to install Windows, follow this guide: [Installing Windows](https://msft.chat/wiki/installing-windows.html) 
::: tip Note
Note: During the installation process, you may be asked to enter a licence key. If you don't have one, you can click Skip or "I don't have a product key" and Windows will automatically reactivate later. If you were previously signed in with a Microsoft account, you may need to sign in with the same account again.
:::