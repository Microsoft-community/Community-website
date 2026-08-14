# Joining and Leaving the Windows Insider Program

This article covers how to join the Windows Insider Program to get builds that are unreleased to the public.

## Joining the Windows Insider Program

::: tip Note
You must be logged onto a Microsoft Account to be able to join the Windows Insider Program.
:::

### Joining the Windows Insider Program on Windows 11

1. Open the Settings app. You can do this by searching for it in the Start menu, clicking <kbd>Win</kbd> + <kbd>I</kbd>, or clicking the Settings button found above the Power button in Start. After that, open the **Windows Update** Section.

    ![Windows 11's Settings app.](./img/windows-insider/11/settings-home.png)

2. Click on **Windows Insider Program**, then navigate to the sign up page.

    ![The Windows Update section of Windows 11's Settings app. On the right side, near the bottom of the page, there is a button to open Windows Insider Program settings.](./img/windows-insider/11/windows-update-settings-select.png)

3. Click on the **Get Started** button to join the Windows Insider Program.

    ![The Windows Insider Program settings page. A "Get started" button is shown, along with information about the program.](./img/windows-insider/11/get-started.png)

4. Click on **Link an account** to link a Microsoft Account.

    ![You are prompted to link a Windows Insider account to join the program. You must link an account to continue.](./img/windows-insider/11/link-an-account.png)

5. Select an account or login with one by clicking **Microsoft Account**, then click **Continue**.

    ![A screenshot of Windows' Microsoft account selector. You can choose to use a personal Microsoft account, or a work or school account.](./img/windows-insider/11/login.png)

6. Read the [Microsoft Insider Program Agreement](https://insider.windows.com/program-agreement) and the [Microsoft Insider Privacy Agreement](https://privacy.microsoft.com/privacystatement). Click **Continue** when you finish reading and agree to the agreement.

    ![You are shown links to the Microsoft Insider Program Agreement and the Microsoft Insider Privacy Statement. A message is shown to confirm that by joining the Windows Insider Program, you agree to both.](./img/windows-insider/11/agreements.png)

    ::: tip
    If this prompt appears more than one time, click **Continue** until it moves on to the next step.
    :::

7. Now select a channel to receive insider builds, then click **Confirm**. Here are some details on the details of the 4 channels: 
    
    | Channel | Description |
    | ------- | ----------- |
    | Canary | Ideal for highly technical users. Preview the latest platform changes early in the development cycle. These builds are released with limited documentation, without extensive validation, and can be unstable. | 
    | Dev | Ideal for enthusiasts. Access the latest Windows 11 preview builds as we incubate new ideas and develop long lead features. There will be some rough edges and low stability. |
    | Beta | Ideal for early adopters. Preview and provide feedback on pre-release features for Windows 11 in a stable environment. |
    | Release Preview Channel    | Ideal if you want to preview and certain key features, plus get optional access to the next version of Windows before it's generally available to the world. This channel is also recommended for commercial users.                    |

    ![You are prompted to select an Insider channel to join. Each channel is shown with its matching description.](./img/windows-insider/11/channels.png)

    ::: tip Note
    If you don't see all four channels, you might be limited by your hardware.
    :::

8. Review the [Microsoft Insider Privacy Statement](https://privacy.microsoft.com/privacystatement) and the [Microsoft Insider Program Agreement](https://insider.windows.com/program-agreement), then click **Continue**.

    ![You are again shown links to the Microsoft Insider Program Agreement and the Microsoft Insider Privacy Statement. A message is shown to confirm that by joining the Windows Insider Program, you agree to let Microsoft collect information from your PC, and you may experience bugs and other problems.](./img/windows-insider/11/agreements-2.png)

9. Choose to *Restart Now* or *Restart Later*, then you will start receiving insider builds in *Settings > Updates & Security > Windows Update*. Have fun testing Windows Builds!

    ![You are prompted to restart your device to finish enrollment.](./img/windows-insider/11/restart.png)

    ::: tip Note
    Please note that Windows Insider channels are evolving — the **Canary** and **Dev** channels will merge into a new **Experimental** Channel. You’ll also have the option to choose your preferred build number. As shown from the image below.
    :::

    ![Select the new Windows Insider channels](./img/windows-insider/11/new-channels.png)

    ![You can select Windows 11, versions 25H2 or 26H1, or Future Platforms.](./img/windows-insider/11/build-version-choice.png)

## Leaving the Windows Insider Program

If you don't want to participate in the Windows Insider Program anymore, you can leave the program. Your computer will stay on the build that you are currently on until an official build that is newer than the build you have. You can also revert to an older build if you haven't deleted the Windows build and if you installed the build less than 10 days ago.

### Leaving the Windows Insider Program on Windows 11

1. Open Settings and click on **Windows Update**.

    ![Windows 11's Settings app.](./img/windows-insider/11/settings-home.png)

2. Click on **Windows Insider Program**.

    ![The Windows Update section of Windows 11's Settings app. On the right side, near the bottom of the page, there is a button to open Windows Insider Program settings.](./img/windows-insider/11/windows-update-settings-select.png)

3. Turn on **Unenroll Device**.

    ![The Windows Insider Program settings page on a computer that is enrolled in the Windows Insider Program.](./img/windows-insider/11/insider-settings-page.png)

4. You will be redirected to an official website. Click on *Leave the Program now*.

    ![On the Windows Insider Program website, a quick two-sentence explainer describes how you can choose to unregister your Microsoft account from the program, or you can unenroll your device but keep your Microsoft account registered. Below this, there is a "Leave the program now" button.](./img/windows-insider/leave-the-insider-program.png)

    ::: tip
    If you see **You must login to leave the program**, login on the top right corner of the website.
    :::

5. Click on **Stop receiving Insider Preview Builds**.

    ![Once you click "Leave the program now", a disclaimer is shown to indicate that if you are receiving Insider Preview builds through work but are not the administrator, you will still continue to get preview builds. Below this, there is a "Stop receiving Insider Preview builds" button.](./img/windows-insider/left-insider-program-thanks.png)

6. You should see *"This email address is not registered as a Windows Insider"*.

    You should now be unenrolled from the Windows Insider Program.

## Troubleshooting

### Optional Diagnostics Data is disabled

If you see *"To join the Insider Program, turn on optional diagnostic data"*, click on *"Open Diagnostics & Feedback."*.

![Windows 10's Settings app, opened to the Windows Insider Program screen. The above error message is displayed.](./img/windows-insider/insider-settings-page-diagnostic.png)

> Image source: [Minitool](https://www.minitool.com/news/how-to-join-windows-insider-program.html)

Select **Optional diagnostic data** and return back the the Windows Insider Program page and continue with the procedure to join the program.

![The Diagnostics & feedback section of Windows 10's Settings app. The radio button for "Optional diagnostic data" is selected.](./img/windows-insider/optional-diagnostics-feedback.png)

### Windows Insider Program Page not appearing

A registry key might be preventing the page from appearing in settings. Here is what you can do to fix it:

::: danger
Editing the registry incorrectly can cause major problems. Make sure you follow the instructions here exactly and don't proceed if anything is unusual.
:::

1. Press <kbd>Win</kbd> + <kbd>R</kbd> and type in `regedit`, then press <kbd>Enter</kbd>

    ![The Run dialog, with "regedit" typed into the "Open:" field.](./img/windows-insider/run.png)

    ::: tip
    You might be prompted with the User Account Control popup, click yes or enter an administrator's username and password to continue.
    :::

2. Go to the following registry key: `HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/WindowsSelfHost/UI/Visibility`

    ![The Registry Editor is opened to the above registry key. Several items are shown.](./img/windows-insider/registry-1.png)

    ::: tip
    If the registry key does not exist, right click the key `UI` on the side bar and click **New > Key** and name it `Visibility`.
    :::

3. Right click and create a new 32-bit DWORD value named `HideInsiderPage` on the right hand side. Set the value to `0`.

    ![The Edit Value dialog is shown for the "HideInsiderPage" registry value. The number 0 is typed into the "Value data" field, and the radio button for Hexadecimal is selected.](./img/windows-insider/registry-2.png)

You may now close the Registry Editor window and restart your computer. The Windows Insider Program page should appear after the restart.

### Error Code

You may see an error code while trying to register to be a Windows Insider. There are a lot of different error codes, so you should search it on the Internet or ask in [our Discord server](https://discord.gg/microsoft) for support in the `#insiders` channel.
