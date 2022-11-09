# The Windows Feature Store

::: danger
This article covers the modification of core Windows components that can lead to instability or crashes. You may also encounter difficult-to-diagnose issues or make irreverisble changes to your system. Proceed at your own risk.
:::

## What is it?

The Windows Feature Store (known internally as Velocity) is a component of Windows that toggles various functionality and experiments, known as features. A feature can be anything; from having a preview of fonts in File Explorer, to being able to download themes from the Microsoft Store, to having the Task View button on the taskbar.

Features are used by Microsoft for a few main purposes. It can help reduce the size of Windows Updates by including unfinished functionality in earlier updates, patching it incrementally and then enabling it once its ready. In the event that a feature is buggy or has a security flaw, it can be automatically disabled very easily. The Insider Program utilises features for controlled rollout of experimental features. They're also used internally to quickly toggle unfinished functionality.

These last two points are what you're most likely interested in. Insider and Production builds of Windows usually have a lot of disabled features that contain new upcoming functionality, that either you weren't picked for in a controlled rollout, or has not been officially announced yet. By manipulating the Windows Feature Store, you can gain access to this.

## How to interact with the Windows Feature Store

Features in the Store each have a unique ID, such as `17325319` or `6478855`. Each ID can be in one of three states:

 - Default (`0`) - this is the normal behaviour for this feature.
 - Disabled (`1`) - this will disable a feature entirely.
 - Enabled (`2`) - this will forcefully enable a feature.
  
Multiple community tools exist to allow the toggling the state of features. The most popular and well-known currently is [ViVeTool](https://github.com/thebookisclosed/ViVe). To set the state for a feature, use `vivetool.exe /enable /id:<id> <state>`. To remove the custom state, use `vivetool.exe /reset id:<id>`.

Other tools include [mach2](https://github.com/riverar/mach2) which is an older application similar to ViVeTool, and [ViVeTool GUI](https://github.com/PeterStrick/vivetool-gui) which adds a user interface to ViVeTool.

## Where to find feature IDs

The developer of mach2 keeps an up-to-date set of feature IDs for each Insider build, as well as the changes between builds (useful for identifying new hidden features) [here](https://github.com/riverar/mach2/tree/master/features). Similarly, you can also use ViVeTool GUI to search through and toggle feature IDs from within the app.

Remember, not all feature IDs will have any noticeable change, or any change at all. Some will make permanent changes that you can't revert. Others might just break functionality or make your PC entirely unusable. Since these are used by Windows Update, changing certain features can put your device in an unsupported state that can cause issues. If you're choosing to experiment with the Feature Store, you should do so in a virtual machine first.

Below is a list of relevant features that may be of interest. Despite being listed here, they may still cause problems on your configuration, so enable them at your own risk. These may also require other feature IDs to be enabled before they work properly or at all - you'll have to experiment yourself.

| Feature ID | Description                          | Minimum Version |
| ---------- | ------------------------------------ | --------------- |
| 36302090   | Modern "Open with" dialog            | 22622.290       |
| 37634385   | Tabs in File Explorer                | 21536           |
| 36354489   | Updated navigation pane              | 21536           |
| 39145991   | Enable to use above features on Beta | 22621.160       |
| 37010913   | Move search button to left           | 21536           |
| 37969115   | Show the desktop search bar          | 25120           |
| 40887771   | Move new searchbox next to widgets   | 25217           |
| 39072097   | New taskbar loading animation        | 25179 / 22622.575 |
| 39072097   | Task Manager on Taskbar Conext Menu  | 25211           |
| 38764045   | New system tray                      | 25211           |
| 34878152   | Animated Settings navigation panel icons | 25197       |
| 26008830   | Tablet-optimized Taskbar             | 25197           |
| 38652916   | Widgets settings menu                | 25217           |
| 39413510   | Studio Effects on quick actions on arm64 devices | 25236 |
| 39427030 and 41249924 | Energy recommendations on settings | 25231 |
