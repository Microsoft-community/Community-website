# Fixing Problems with the Microsoft Store

The Microsoft Store is used to download applications. It may sometimes stop working correctly; this article covers the process of repairing and, if necessary, reinstalling it.

## Method 1: Clearing the Microsoft Store cache

There are two ways to clear the Microsoft Store cache. 

### Clearing the Microsoft Store cache in Settings

1. Open the Settings app. You can do this by searching for it in the Start menu, pressing <kbd>Win</kbd> + <kbd>I</kbd>, or clicking the Settings button found above the Power button in Start.

    ![](img/fixing-microsoft-store/opensettings.png)

2. Click *Apps*.

    <img src="img/fixing-microsoft-store/apps.png" width=300px>

3. Find *Microsoft Store*, click it, and click *Advanced options*.

    <img src="img/fixing-microsoft-store/microsoftstore.png" width=500px>

> If you don't see *Microsoft Store* here, you will have to reinstall it completely. Skip to [Method 2](#method-2-reinstalling-the-microsoft-store).

4. Scroll down and click the *Reset* button. Then wait for a check mark to appear. Once you see the check mark, you're done; if the Microsoft Store still doesn't work, try the next option below.

    <img src="img/fixing-microsoft-store/resetmicrosoftstore.png" width=500px>

### Clearing the Microsoft Store cache with `wsreset`

> Note: The `wsreset` function is outdated and may not function correctly in the latest versions of Windows 10 or Windows 11. If you try `wsreset` and it does not work, consider [reinstalling the Microsoft Store](#method-2-reinstalling-the-microsoft-store).

1. Open the Run dialog. You can do this by searching for it in the Start menu, or by pressing <kbd>Win</kbd> + <kbd>R</kbd>.

    <img src="img/fixing-microsoft-store/run.png" width=400px>

2. Type `wsreset.exe`, then press <kbd>Enter</kbd> or click *OK*.

    <img src="img/fixing-microsoft-store/wsreset.png" width=400px>

3. A black Command Prompt window will appear briefly; once it closes, restart your PC and the Microsoft Store might work again. If it still doesn't work, try Method 2 below.

## Method 2: Reinstalling the Microsoft Store

1. Run PowerShell as administrator by either right-clicking the Start button or pressing <kbd>Win</kbd> + <kbd>X</kbd> and clicking "PowerShell (Admin)". You can also use Search; if using Search, make sure to right-click Windows PowerShell and select *Run as Administrator*. You may be shown a User Account Control prompt ("Do you want to allow this program to make changes to your device?"); click Yes or enter an administrator's username and password to continue.

    > Once PowerShell is open, it should look like the image below.

    <img src="img/fixing-microsoft-store/powershell.png" width=600px>

2. Type or paste `Get-AppxPackage *windowsstore* | Remove-AppxPackage` and press <kbd>Enter</kbd>.

    > This command will completely remove the Microsoft Store from your PC. The command in the next step will reinstall it.

    <img src="img/fixing-microsoft-store/removingmicrosoftstore.png" width=600px>

3. After the last command finishes, type or paste `Get-AppXPackage *WindowsStore* -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}` and press <kbd>Enter</kbd>.

    <img src="img/fixing-microsoft-store/installingmicrosoftstore.png" width=600px>

4. After completing these steps, PowerShell should look like the image below. If it looks different or displays any errors, make sure you typed the commands correctly.

    <img src="img/fixing-microsoft-store/afterinstallingmicrosoftstore.png" width=600px>

If PowerShell looks like the image above, restart your PC to ensure any changes are applied, then try opening the Microsoft Store again. If you are still having issues, try [repairing Windows](https://msft.chat/wiki/using-the-media-creation-tool.html#method-1-repairing-an-existing-installation).
