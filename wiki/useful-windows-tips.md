# Useful tips and "hacks" for Windows

### Get more options when right-clicking

When right-clicking on a file or folder, you can hold <kbd>Shift</kbd> to get more options, such as "Copy as path", which lets you copy the full path to the file or folder.

### Enable the legacy context menu

The context menu is the pop-up menu that appears when you right-click on a file or folder.

In Windows 11, the new context menu was introduced which has fewer options and some of them are replaced with icons. At the bottom, there is an option to "Show more options" which will show the legacy menu.

<img src="./img/useful-windows-tips/new-context-menu.png" alt="Screenshot of the new context menu, introduced in Windows 11." width="150">

However, if you prefer the legacy menu, and you don't want to click "Show more options" every time, you can modify a registry key to disable the new context menu. To do that, open Powershell and run the following command

```powershell
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

<img src="./img/useful-windows-tips/powershell-legacy-context-menu.png" alt="Screenshot of a Powershell window, running the command above." width="600px">


Then, open the Task Manager, and search for _Windows Explorer_, then right-click on the process and click Restart. If you right-click a file or folder, you should now see the legacy context menu.

<img src="./img/useful-windows-tips/legacy-context-menu.png" alt="Screenshot of the legacy context menu." width="200">

::: tip Note
When holding down <kbd>Shift</kbd> when right-clicking, the legacy context menu will always appear (and with the extra options as described in the previous tip), even without modifying this registry key.
:::


### Windows Master Control Panel shortcut

The Windows Master Control Panel shortcut, often referred to as "God Mode", is a shortcut to access all control panel settings in one place.

To create the shortcut, create a folder and name it `allSettings.{ED7BA470-8E54-465E-825C-99712043E01C}`

The text in front of the dot has no effect. You may change it to whatever you want, but the shortcut will appear to have no name.

You can now open the folder to find all control panel settings.

### Make Windows search faster

You can make the Windows Search way faster by enabling Indexing, which indexes the locations you select. In simple words, it essentially creates a list of all files, so that when you search for a file, Windows searches in that list instead.

Although indexing is enabled by default, it only indexes important folders, such as the Desktop or the user's Documents. However, it can be configured to index all drives and folders on the computer.

First, search for "Indexing Options" in the Start menu.

<img src="./img/useful-windows-tips/search-indexing-options.png" alt="Screenshot of the user searching for the Indexing Options in the Start menu search." height="200">

Then, in the window that appears, click "Modify".

<img src="./img/useful-windows-tips/indexing-modify.png" alt="Screenshot of the Indexing Options window with the modify button highlighted." height="400">

Then, click "Show All Locations".

<img src="./img/useful-windows-tips/indexing-show-all-locations.png" alt="Screenshot of the Indexed Locations window with the Show All Locations button highlighted." height="400">

Now, check all the locations that you want Windows to index. Finally, click Ok to confirm.

<img src="./img/useful-windows-tips/indexing-check-all-and-ok.png" alt="Screenshot of the Indexed Locations window with the location checkboxes and the Ok button highlighted." height="400">

Your files will now be indexed.

::: tip Note
Indexing can take a long time depending on how many files it has to go through, and it may consume some system resources while indexing is in-progress. Indexing will pause however if it detects that you are using your computer. The indexing process only needs to run once.
:::

### Restart GPU drivers

If your screen glitches sometimes, or your graphics are lagging, try restarting your GPU drivers using the shortcut <kbd>Win</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>. You will hear a beep sound, and your screen will go black for a few seconds.

You can always try a restart if that doesn't fix it.

### View more columns in the Details view in File Explorer

In the details view in File Explorer, you can show more columns in addition to the default ones, such as Focal Length for images, or Rating for media files.

To do that, right-click on the columns in the Details view, and then choose More. You can then enable the columns you want to see by checking them.

<img src="./img/useful-windows-tips/enable-more-columns-fileExplorer.png" alt="Screenshot of the window for adding more columns to the File Explorer details view." height=350px>

### Voice typing

::: tip Note
To use Voice Typing, you need a microphone.
:::

Voice Typing is a feature built-into Windows, that allows you to "type", without actually typing, but using your microphone instead.

To use Voice Typing, press <kbd>Win</kbd> + <kbd>H</kbd>, and a small window will appear.

<img src="./img/useful-windows-tips/voice-typing-window.png" alt="Screenshot of the voice typing window." height=100px>

If it does not turn on automatically, simply click on the microphone button. Now, you can speak into your microphone to enter text, instead of typing!

\
\
\
_**More tips will be added to this page soon!**_
