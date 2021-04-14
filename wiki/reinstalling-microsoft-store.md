# Reinstalling the Microsoft Store

The Microsoft Store is used to download applications. However, it may sometimes stop working correctly. This article covers the process of repairing and, if necessary, reinstalling it.

## Method 1: Resetting the Microsoft Store cache

There are two methods to clear out the Microsoft Store cache. 

### Method 1: Resetting the Microsoft Store through the Settings App

1. Open the Settings app. You can do this by searching for it in the Start menu, pressing <kbd>Win</kbd> + <kbd>I</kbd>, or clicking the Settings icon found above the power button in Start.

    ![](img/reinstalling-microsoft-store/opensettings.png)

2. Select "Apps".

    <img src="img/reinstalling-microsoft-store/apps.png" style="width:300px;">

3. Find "Microsoft Store" and click advanced options.

    <img src="img/reinstalling-microsoft-store/microsoftstore.png" style="width:500px">

> If you can't find the Microsoft Store here, you will have to reinstall it completely. Follow Method 2 to reinstall the Microsoft Store

4. Scroll down and click the reset button. Then wait for a check mark to appear.

    <img src="img/reinstalling-microsoft-store/resetmicrosoftstore.png" style="width:500px">

### Method 2: Resetting the Microsoft Store through WSReset

> The WSReset function is outdated and may not function correctly in the latest versions of Windows 10. If Method 1 for resetting the Microsoft Store cache doesn't work, try reinstalling the Microsoft Store. This method is still available.

1. Open the Run dialog. You can do this by searching for it in the Start menu, or by pressing <kbd>Win</kbd> + <kbd>R</kbd>.

    <img src="img/reinstalling-microsoft-store/run.png" style="width:400px">

2. Enter `wsreset` and hit <kbd>Enter</kbd> or press "OK".

    <img src="img/reinstalling-microsoft-store/wsreset.png" style="width:400px">

3. A black window will pop up and when it's finished, restart your computer and it should be fixed.

>If this does not fix your problem, try the Method 2: Reinstalling the Microsoft Store instead.

## Method 2: Reinstalling the Microsoft Store

1. Launch PowerShell as administrator by either right-clicking the Start button or by pressing <kbd>Win</kbd> + <kbd>X</kbd> and press "Powershell (Admin)" or by searching it up in the Start Menu then right click and select "Run as Administrator". Either way you will be prompted with a User Account Control prompt. Hit yes or enter an administrator's password to continue.

    <img src="img/reinstalling-microsoft-store/powershell.png" style="width:600px">

2. Enter the command `Get-AppxPackage *windowsstore* | Remove-AppxPackage` and hit <kbd>Enter</kbd>.

> This command will remove the Microsoft Store and it is irreversible, the nest command will install the Microsoft Store back.

    <img src="img/reinstalling-microsoft-store/removingmicrosoftstore.png" style="width:600px">

3. After the command finishes, enter the command `Get-AppXPackage *WindowsStore* -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}` and hit <kbd>Enter</kbd>.

    <img src="img/reinstalling-microsoft-store/installingmicrosoftstore.png" style="width:600px">

4. After completing these steps, PowerShell should look like this. If it looks different or displays some kind of error, check you typed the commands correctly. If you are still having issues, it's worth trying some more [general troubleshooting steps](troubleshooting.md), and then walk through this guide again.

    <img src="img/reinstalling-microsoft-store/afterinstallingmicrosoftstore.png" style="width:600px">

After that, you want to restart your computer to apply changes that were made and the Microsoft Store should be working again.