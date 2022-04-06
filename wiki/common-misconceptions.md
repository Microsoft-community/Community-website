# Common Windows Misconceptions

This article covers many of the misinterpretations people may have with Windows and attempts to explain them. Seeing as this is a long article with a lot of required information that could not be condensed or cut out, it is recommended to link directly to individual sections.

This does not cover all of the misconceptions - more sections will be added here as necessary.

## RAM utilization

Possibly the most common misunderstanding when it comes to Windows. Windows does not do memory management like any other OS. It preloads things that it thinks the user will use most into memory so it can be quickly accessed when other programs do not need the memory - this can lead to seemingly high idle memory utilization, and the user being alarmed. However, what the user doesn't know is that Windows will reallocate that memory holding data in standby to other programs or games if they so need it. Windows will not keep that memory allocated forever as that would lead to bad consequences such as system lock-ups, and no sane OS forgets to reallocate memory.

For example: let's say we have `stuff.dll`, a massive 1 GB library of shared code. Windows knows that it commonly loads this file into memory and a lot of programs use it. If there's plenty of unused memory available, Windows will quietly load `stuff.dll` into memory and mark it as standby. If a program comes along and needs to use `stuff.dll`, instead of loading it from disk (which is a lot slower than the RAM bus), Windows directs it to the copy already in memory so it can skip loading it. It'll then be marked as in-use. After that program is done with it, it'll go back to being standby again. If a different program comes along and needs that space, Windows will freely allow it to overwrite `stuff.dll` as well as anything else in standby memory.

Try loading up a memory intensive game, and taking a look at your total system memory utilization before and after launching the game. Let's say you are at 10 GB of total utilization before launching it, and the game is taking up about 6 GB. You'll see the total memory utilization only slightly creep up, possibly to 12 or 13 GB, not to 16 GB as you would expect. This is because Windows unloads stuff you don't need anymore to make room for the game's resources.

RAM utilization is also dependent on your RAM capacity - the more RAM you have, the more Windows uses to store frequently used code into standby memory. This is why some people with more memory notice higher utilization while some others with less memory notice significantly decreased utilization. Windows adapts based on how much memory you have and there is nothing to be concerned about if you notice high idle RAM utilization.

## "Bloatware" and resource usage

It is commonly thought that Windows is 'bloated' by default and all those pre-installed apps take up a significant amount of system resources that could be used for other things. This can also apply to system services which people often disable hoping it brings an improvement.

The improvement is not real, if marginal at best. Uninstalling the pre-installed apps, disabling system services, and messing with the registry will 99% of the time **not** bring you an improvement in performance. Windows does not load up all of those apps in the memory at the same time, only when you use them. Services take up a very insignificant amount of memory and CPU resources, even on a low end machine. And Windows does not access the registry sequentially, meaning that deleting or modifying registry keys will not bring about an improvement as Windows accesses that key directly - it is not akin to disk fragmentation.

Attempting to 'debloat' Windows will most of the time bring about problems instead of improvements - it has been tested time and time again and the results show that the default state of Windows will not harm performance. Unless you have an OEM machine with actual OEM bloatware (that can and will harm performance) installed on it, then a clean installation of Windows is recommended. But attempting to debloat an already clean installation will give you more trouble than it's worth.

Besides, if you are concerned about these things affecting your gaming peformance, Windows already has its own 'Game Mode' built in that works quite well at supressing its background tasks while you play. It's also enabled by default, so you don't need to do anything more.

## Forced updates

Windows does not *usually* force you to update. It only does so if you are almost reaching (or have reached) the end-of-life date for the current feature update you're on (for example 1809 for Windows 10). At that point, your machine's security is compromised by running an unsupported build, and there may be other issues that can arise the longer you stay on an unsupported build, such as Store apps no longer downloading due to an unsupported version, the system no longer trusting its own code signing which can results in system apps becoming unstable, etc. This also applies to expired Dev channel builds - Windows forces you to update there for a reason.

The reason Windows 10 and later's update agent seems so 'pushy' is most likely due to users on Windows 7 or 8 in the past completely disabling automatic updates and never updating their systems. This possibly led Microsoft to make the updates as pushy as they are, in order to ensure people remain on a stable & secure version of Windows and that they don't compromise the security of their own machine.

## Windows updates requiring a restart

Windows restarts after a cumulative update because they contain direct changes to the kernel. Think of it as 'core' packages on Linux. Those also need you to restart your system. Windows needs to restart often for updates while Linux doesn't - but that's because WU mostly provides kernel updates, while Linux package managers also provide updates for software that do not need a restart; they don't always include kernel or core package updates, leading to the misconception.

Forced restarts aren't usually a thing (especially if you are responsible and keep your OS updated yourself), and if it *has* happened to you, there is the option to set up your active hours in order to keep Windows from restarting when you're at your machine - however, there is no reason why it *shouldn't* update overnight or when you're away.
