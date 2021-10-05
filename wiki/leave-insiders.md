# Opting out of Windows Insider updates (Windows 11)

If your machine is enrolled into the Windows Insider Program and you wish to stop receiving Insider updates, follow the steps below

## Determine your current channel

Open Settings, go to Windows Updates and Windows Insider Program

![](img/leave-insiders/wu-page.png)

There, look to the right side of "Choose your Insider settings" to determine your Insider channel, it can be Dev, Beta or Release Preview.

![](img/wu-insiders-channel.png)

## For Beta/Release Preview

If you found your channel to be Beta or Release Preview, opting out of Insider updates should be as easy as turning on a switch.

Open the "Stop getting preview builds" section and turn on "Unenroll this device when the next version of Windows releases"

![](img/wu-insiders-stop.png)

Restart your PC and you should be opted out.

## For Dev

If you have the Dev channel, you would want to pay attention to the build number, as it will affect whether you can leave Insiders without a clean install.

### Determine your current build

Press the "Windows" and "R" key simultaneously on the keyboard and type "winver" (without quotes) and press Enter, an "About Windows" window will appear.

![](img/winver.png)

Look closely to the "OS Build" field, this field will tell you which build you have.

### If the build is 22000.xxx

1. On the Windows Insider Program page in Settings, open the "Choose your Insider settings" section and choose "Beta channel".

   ![](img/wu-change-channel.png)

2. Restart your PC and now you should be in the Beta channel. Follow the Beta/Release Preview instructions to opt out of Insiders.

### If the build is higher than 22000.xxx

1. Choose "System" on the left side of the Settings app and open "Recovery"

    ![](img/system-page.png)

2. Click on "Go back" in the Recovery page.

   ![](img/system-go-back.png)

   **NOTE:** If the Go back option is disabled, a clean install is required, see [Installing Windows 10](installing_windows_10.md) for instructions to do so.

3. Follow the instructions on screen to go back to a previous build.

4. Check your build again.

   If winver reports 22000.xxx, follow the instructions for 22000.xxx above.

   If not, then unfortunately a clean install is required, see [Installing Windows 10](installing_windows_10.md) for instructions to do so.