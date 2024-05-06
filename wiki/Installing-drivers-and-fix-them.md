# How to install drivers and fix them 
Hello, in this post you will know how to download or update your drivers for your computer.
## Before you get into the process, you need to know your computer.
The first step in installing drivers is to correctly find the hardware you need drivers for. This information can be found in your computer's manual or by using the Device Manager (Windows) (right click into windows icon and press “Device Manager”). In the Device Manager, look for the device you need drivers for and expand its entry to see its model number. In System Information, navigate to the “Hardware” section and find the device you need drivers for.

## Method 1: Check Windows Update
Most of the time, you will find updates for your driver.

 1. Open the configuration for Windows via windows menu or the searcher.
 2. Go to Updates and security.
 3. Click to “Check updates”.
 4. Windows Update might say that you are up-to-date even if optional updates are available. In the case you see optional updates, and you click into it, you will see some updates (normally drivers), you select to all, and you need to click “Download and install” button.

## Method 2: Download via brand device page.
It's highly recommended to downloading the drivers or update them via brand page or app by the fact that the company verifies that the driver works well with the computer (graphics in most cases is on the brand GPU page)
All you need to do is:

 1. Go to your favourite searcher and search: “{your brand device name} drivers”.
 2. Next, put the ID of your device and follow the instructions on the page.
 3. When you selected the product you have two options:
	- Download the driver downloader (recomended)
	- And download the driver on especific and run executable

## Method 3: Download via brand product page.
Now if you want to download for your GPU or your brand device hasn't the drivers (in this case do it if it is especially important, otherwise apply the saying: “if it works, don't touch it, or you may make it worse”).
Now follow the same instructions but the brand hardware (like intel CPU and GPU).

 1. Go to your favourite searcher again and search: “{your brand name} driver download”.
 2. Search your hardware piece you want to upgrade.
 3. When you selected the product you have two options:
	- Download the driver downloader (recomended)
	- And download the driver on especific and run executable
- (Follow method 3 for more information: [https://msft.chat/wiki/reinstalling-gpu-drivers.html#method-3-oem-website](https://msft.chat/wiki/reinstalling-gpu-drivers.html#method-3-oem-website))

## Oh, no! I can't access to my pc!

1. Enter Safe Mode:

Safe mode is a diagnostic boot way that loads Windows with only the essential drivers. This allows you to access Windows even if the problematic driver is causing issues during normal boot.

 - Windows 10/11: Repeatedly press and hold the power button while booting to trigger a forced restart. After 2–3 restarts, you'll see the “Advanced options” screen. Navigate to “Troubleshoot” > “Advanced options” > “Startup Settings” > “Restart now”. Upon restart, choose “Enable Safe Mode with Networking” (if you need internet) or simply “Safe Mode”.

 - Earlier Windows versions: Restart your computer and repeatedly press F8 before the Windows logo appears. This should open the Advanced Boot Options menu, where you can choose “Safe Mode”.

2. Uninstall the Driver in Safe Mode:

Once in safe mode, you can uninstall the problematic driver:

 1. Open the Device Manager (search for it in the Start Menu).
 2. Expand the category for the device with the recently installed driver.
 3. Right-click on the driver and select “Uninstall device”.
 4. Check the box “Delete the driver software for this device” (if available) and click “Uninstall”.

3. System Restore (if applicable):

If you recently created a system restore point before installing the driver, you can restore Windows to that point:

 1. In Safe Mode, open the Start Menu and search for “System Restore”.
 2. Click “Create a restore point” and then “Next”.
 3. Choose the desired restore point (ideally the one before installing the driver) and click “Next” followed by “Finish”.

4. Startup Repair (if Windows won't boot at all):

If even Safe Mode isn't accessible, you can try Startup Repair, a built-in tool on Windows that tries to fix boot issues:

 1. Create a Windows Recovery USB drive using another computer (https://support.microsoft.com/en-us/windows/create-a-recovery-drive-abb4691b-5324-6d4a-8766-73fab304c246).
 2. Boot your computer using the recovery drive and choose “Troubleshoot” > “Advanced options” > “Startup Repair”.

5. Reinstall Windows (last resort):

If none of the above solutions work, you may need to reinstall Windows. This will erase all your data and applications, so make sure you have a backup.

 1. Download windows with a functional machine, following the steps from this URL https://msft.chat/wiki/downloading-windows.html
 2. Next, follow this guide about how to install it: https://msft.chat/wiki/installing-windows.html (if asks about a licence, and you don't have it, you can press Skip or "I don't have a product key" and Windows will reactivate automatically later. If you were previously signed in with a Microsoft account, you may need to sign in with the same account again).
