# The Windows Feature Store

::: danger
This article covers the modification of core Windows components that can lead to instability or crashes. You may also encounter difficult-to-diagnose issues or make irreversible changes to your system. Proceed at your own risk.
:::

## What is it?

The Windows Feature Store (known internally as Velocity) is a component of Windows that toggles various functionality and experiments, known as features. A feature can be anything; from having a preview of fonts in File Explorer, to being able to download themes from the Microsoft Store, to having the Task View button on the taskbar.

Features are used by Microsoft for a few main purposes. It can help reduce the size of Windows Updates by including unfinished functionality in earlier updates, patching it incrementally and then enabling it once its ready. In the event that a feature is buggy or has a security flaw, it can be automatically disabled very easily. The Insider Program utilizes features for controlled rollout of experimental features. They're also used internally to quickly toggle unfinished functionality.

These last two points are what you're most likely interested in. Insider and Production builds of Windows usually have a lot of disabled features that contain new upcoming functionality, that either you weren't picked for in a controlled rollout, or has not been officially announced yet. By manipulating the Windows Feature Store, you can gain access to this.

## How to interact with the Windows Feature Store

Features in the Store each have a unique ID, such as `17325319` or `6478855`. Each ID can be in one of three states:

- Default (`0`) - this is the normal behavior for this feature.
- Disabled (`1`) - this will disable a feature entirely.
- Enabled (`2`) - this will forcefully enable a feature.
  
Multiple community tools exist to allow the toggling the state of features. The most popular and well-known currently is [ViVeTool](https://github.com/thebookisclosed/ViVe). To set the state for a feature, use `vivetool.exe /enable /id:<id> <state>`. To remove the custom state, use `vivetool.exe /reset id:<id>`.

Other tools include [mach2](https://github.com/riverar/mach2) which is an older application similar to ViVeTool, and [ViVeTool GUI](https://github.com/PeterStrick/vivetool-gui) which adds a user interface to ViVeTool.