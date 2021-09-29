# Moderator Documentation
## Roles
| Role Name                                                                                    | Role Requirement                                                      | Role Perks                                                                                                                           |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Tier 1 (Regular)                                                                             | MEE6 Level 3                                                          | Can send embedded messages in all channels, can send messages in #deal-alerts                                                            |
| Tier 2 (Regularly regular)                                                                   | MEE6 Level 10                                                         | Access to #politics and #giveaways                                                                                                     |
| Tier 3 (Superbly regularly regular)                                                          | MEE6 Level 20                                                         | Can "Go Live" in a voice channel, access to #lounge                                                                                     |
| Tier 4 (Ludicrously superbly regularly regular)                                              | MEE6 Level 30                                                         | Decorative                                                                                                                      |
| Tier 5 (Uber regular)                                                                        | MEE6 Level 45                                                         | Decorative                                                                                                                      |
| Tier 6 (Hyper uber regular)                                                                  | MEE6 Level 55                                                         | Can manage messages in #deal-alerts                                                                                             |
| Tier 7 (Mega hyper uber regular)                                                             | MEE6 Level 70                                                         | Access to Audit Log and Server Insights                                                                                         |
| Tier 8 (Ultra mega hyper uber regular)                                                       | MEE6 Level 85                                                         | Decorative                                                                                                                      |
| Tier S (Extremely ultra mega hyper uber regular)                                             | MEE6 Level 100                                                        | Decorative                                                                                                                      |
| Tier X (Unbelievably ludicrously insanely seriously ridiculously stupidly regularly regular) | MEE6 Level 125                                                        | Decorative                                                                                                                      |
| 💎 Nitro boosters                                                                            | Boost the server with Discord Nitro                                   | Hoisted in sidebar, access to #lounge, access to Voice Channel screen sharing/streaming                                                 |
| Community Tech Support                                                                       | Have Technical Queries Slayer, use !on-call command                   | Can be mentioned for assistance when necessary                                                                                         |
| Technical Queries Slayer                                                                     | Be extremely helpful in #tech-support                                 | Can pin and delete messages and create threads in #tech-support, as well as bypass its slowmode. Also provides a private channel − #tqs-break-room |
| Office Ninja                                                                                 | Be helpful to users in #office channel                                | Can pin and delete messages in #office                                                                                                  |
| Seasonal Logos Contributor                                                                   | Have a lot of your server logo designs used                           | Decorative                                                                                                                      |
| Community Website/Wiki Contributor                                                           | Contribute to the Community Website, Wiki                             | Provides a private channel - #gh-msft-chat-feed                                                                                          |
| Giveaways boss                                                                               | Host loads of awesome giveaways in #giveaways                         | Decorative                                                                                                                      |
| Muted                                                                                        | Break rules or ask nicely                                             | Cannot talk anywhere in the server                                                                                                     |
| Trial moderators                                                                             | Apply for moderator position and be accepted                          | Access to moderator permissions; cannot ban or kick                                                                                    |
| Moderators                                                                                   | Be a good Trial moderator for a while                                 | Access to moderator permissions                                                                                                        |
| Lead moderators                                                                              | Be a very good moderator for a very long time and have Kirby love you | Access to administrator permissions                                                                                                    |
| /r/Windows moderator                                                                         | Be a moderator on /r/Windows                                          | Decorative                                                                                                                      |
| /r/Surface moderator                                                                         | Be a moderator on /r/Surface                                          | Decorative                                                                                                                      |
| /r/MicrosoftTeams moderator                                                                  | Be a moderator on /r/MicrosoftTeams                                   | Decorative                                                                                                                      |
| 💌 Moderator's mail                                                                          | Be the modmail bot                                                    | Decorative                                                                                                                      |
| 🌟 Microsoft employees                                                                       | Verify in #ms-employee-verification                                   | Access to #msft-chat                                                                                                                   |
| Alumni Microsoft employees                                                                   | Stop being a Microsoft employee                                       | Decorative                                                                                                                      |
| Alumni moderator                                                                             | Stop being a moderator                                                | Decorative                                                                                                                      |
| 💙 Edgevatars Event participant                                                              | Take part in the 2019 Edgevatars Event                               | Decorative                                                                                                                      |
| Coffee Club participant                                                                      | Take part in the 2020 Coffee Club Event                               | Decorative                                                                                                                      |
| Minecraft Build Pro                                                                          | Win Minecraft Creative Contest                                        | Decorative                                                                                                                      |
| Minecraft Champion                                                                           | Take part in the 2020 Minecraft Event                                 | Decorative                                                                                                                      |
| Windows Insiders (Release Preview)                                                           | See the Commands section                                              | Receive notifications                                                                                                                   |
| Windows Insiders (Beta)                                                                      | See the Commands section                                              | Receive notifications                                                                                                                   |
| Windows Insiders (Dev)                                                                       | See the Commands section                                              | Receive notifications                                                                                                                   |
| 💻 Patch Tuesday                                                                             | See the Commands section                                              | Receive notifications                                                                                                                   |

## Commands
Moderation commands are available through Cliptok and Dyno. Some commands are restricted to permanent moderators.
| Moderation Action            | Command                                      | Restriction                                                                  |
|------------------------------|----------------------------------------------|------------------------------------------------------------------------------|
| Ban member                   | !ban <member​> [appeal¦duration] [reason]    | Permanent moderators                                                         |
| Ban member, save messages    | !bankeep <member​> [appeal¦duration] [reason]| Permanent moderators                                                         |
| Unban member                 | !unban <member​>                             | Permanent moderators                                                         |
| Kick member                  | !kick <member​> [reason]                     | Permanent moderators                                                         |
| Mute member                  | !mute <member​> [duration] <reason​>         | All moderators                                                               |
| Unmute member                | !unmute <member​>                            | All moderators                                                               |
| Warn member                  | !warn <member​> <reason​>                    | All moderators                                                               |
| Anonymously warn member      | !anonwarn <channel​> <member​> [reason]      | All moderators                                                               |
| Edit member's infraction     | !editwarn <member​> <warning ID​> <reason>   | All moderators (Permanent moderators for warnings not created by themselves) |
| Remove member's infraction   | !delwarn <member​> <warning ID​>             | All moderators (Permanent moderators for warnings not created by themselves) |
| Display member’s infractions | !infractions [member]                        | All members                                                                  |
| Grant Tier 1 to member       | !grant [member]                              | Permanent moderators                                                         |
| Clear messages               | !clear [member] <message count​>             | All moderators                                                               |
| Dehoist                      | !dehoist <users​>                            | All moderators                                                               |
| Activate slow mode           | !slowmode <duration¦off​>                    | All moderators                                                               |
| Display server info          | !server-info                                 | All members                                                                  |
| Display role info            | !role-info <role name​>                      | All moderators                                                               |
| Display member info          | !user-info [member]                          | All members                                                                  |
  
## Auditing
Events are logged in the six logging channels as well as the Discord Audit Log.
### #cliptok-user-logs
* Member joined
* Member left

### #dyno-user-logs
* Member joined
* Member left
* Member joined voice channel
* Member left voice channel
* Member switched voice channel
* Member posted invite
* Role assigned
* Role revoked
* Nickname changed

### #mod-logs
* Member banned
* Member unbanned
* Member kicked
* Member muted
* Member unmuted
* Member warned
* Member warning revoked
* Role created
* Role edited
* Role deleted
* Infringing message removed
* Server information updated

### #message-logs
* Message edited
* Message deleted
* Bulk message delete
* Channel created
* Channel deleted

### #vortex-logs
* Message edited
* Message deleted
* Bulk message delete dump
* Deleted media message content

### #modmail-logs
* Modmail thread opened
* Modmail thread closed
* Modmail thread close time
* Modmail thread log link

### Discord Audit Log
* Update server
* Create channel
* Update channel
* Delete channel
* Create channel permissions
* Update channel permissions
* Delete channel permissions
* Kick member
* Prune members
* Ban member
* Unban member
* Update member
* Update member roles
* Move member
* Disconnect member
* Add bot
* Create role
* Update role
* Delete role
* Create invite
* Update invite
* Delete invite
* Create webhook
* Update webhook
* Delete webhook
* Create emoji
* Update emoji
* Delete emoji
* Delete messages
* Bulk delete messages
* Pin message
* Unpin message
* Create integration
* Update integration
* Delete integration

## Modmail
When a user messages the modmail bot, it creates a new private channel in the Modmail category and notifies all active moderators (@here)
### Modmail Commands
| Modmail Action                            | Command                                     | Restriction     |
|-------------------------------------------|---------------------------------------------|-----------------|
| Reply                                     | !reply, !r <​message>                       | All moderators  |
| Reply anonymously                         | !anonreply, !ar <​message>                  | All moderators  |
| Edit message                              | !edit                                       | All moderators  |
| Close thread                              | !close [silent] [in `time`] [reason]        | All moderators  |
| Create thread with member                 | !contact                                    | All moderators  |
| Display set snippets                      | !snippets                                   | All moderators  |
| Display link to current thread’s logs     | !loglink                                    | All moderators  |
| Display member’s previous modmail threads | !logs                                       | All moderators  |
| Block member from modmail                 | !block                                      | All moderators  |
| Display blocked members                   | !blocked                                    | All moderators  |
| Unblock member from modmail               | !unblock                                    | All moderators  |  
| Notify of every message received          | !subscribe, !sub                            | All moderators  |
| Notify of next message received           | !notify                                     | All moderators  |
| Stop being notified of messages received  | !unsubscribe, !unsub                        | All moderators  |
| Take note about current thread            | !note <​note>                               | All moderators  |
| Take persistent note about current user   | !note persist <​note>                       | All moderators  |
| Move thread to another category           | !move                                       | All moderators  |
| Flag thread as NSFW                       | !nsfw                                       | All moderators  |
| Set up server for modmail                 | !setup                                      | Lead moderators |

### General Commands
| Bot Action                                  | Command    | Restriction     |
|---------------------------------------------|------------|-----------------|
| Display bot info                            | !about     | All moderators  |
| Set activity of bot                         | !activity  | Lead moderators |
| Display changelog of bot                    | !changelog | All moderators  |
| Display aliases                             | !alias     | All moderators  |
| Display help message                        | !help      | All moderators  |
| Change what bot mentions at start of thread | !mention   | Lead moderators |
| Test websocket latency                      | !ping      | Lead moderators |
| Change bot prefix                           | !prefix    | Lead moderators |
| Set status of bot                           | !status    | Lead moderators |

### Modmail Message Snippets
Send a message snippet by typing the prefix then the snippet name. For example, `!thanks` will automatically send the message "Thank you for reaching out!"
| Snippet Name   | Snippet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| baduse               | Using modmail inappropriately might lead to suspension                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| techsupport, ts      | (As !ask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| inactivity           | Hi, we're closing the thread due to inactivity. If you have any questions remaining feel free to re-open it, thank you!                                                                                                                                                                                                                                                                                                                                                                       |
| thanks               | Thank you for reaching out!                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| accounts             | We do not have the access to assist with purchasing and account queries. Please contact official Microsoft support at support.microsoft.com.                                                                                                                                                                                                                                                                                                                                                   |
| greeting             | Hello! How can we help you?                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| the-rules            | https://go.msft.chat/rules                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| warned               | Thanks, this user has been warned!                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| warn-limit           | [As in FAQ](https://msft.chat/member/#i-got-warned-how-many-times-can-i-get-warned-before-i-get-banned)                                                                                                                                                                                                                                                                                                                                                                                       |
| questions?           | Do you have any other questions?                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| modwhen              | [As in FAQ](https://msft.chat/member/#i-applied-to-become-a-moderator-how-long-before-i-get-an-answer)                                                                                                                                                                                                                                                                                                                                                                                         |
| modapply             | To find out how to apply to be a moderator, go here: https://msft.chat/member/#how-do-i-apply-to-be-a-moderator                                                                                                                                                                                                                                                                                                                                                                               |
| unofficial           | [As in FAQ](https://msft.chat/member/#is-this-server-official)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| verifysuccess        | There you go, you should be able to interact with the server normally now. Make sure you've read our rules, and have fun!                                                                                                                                                                                                                                                                                                                                                                     |
| ms-support           | Redirects member to Microsoft Support and Virtual Agent                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| bots                 | Information about our bots can be found here: https://msft.chat/about/bots.html                                                                                                                                                                                                                                                                                                                                                                                                               |
| nosupport            | Modmail is not for tech support. We can only handle moderation queries here.<br>If you need help, describe your problem in #tech-support and someone may try their best to help you.<br>See #server-information for more information about support channels.                                                                                                                                                                                                                                 |
| betterhelp           | Whilst we do have #tech-support, we aren't a support-first server. People help as and when they can, and you can always ping the Community Tech Support role to see if any of our Technical Query Slayers are available, but we still ask that you exercise some patience here.                                                                                                                                                                                                             |
| patience             | If nobody is answering your question or helping you, *be patient*. No one is obligated to help you. It might take a while for someone to be able to help you. Furthermore, be sure you've provided __as much detail as possible__ to make it easy for us to help you. If you've done this, and you still need help and it's been around a day or so and you've not had any help, then *consider asking again*. If you need official support, go to https://support.microsoft.com/contactus|
| banned               | Thanks, they've been banned.                                                                                                                                                                                                                                                                               |
| ban-appeal/banappeal | Bans can be appealed by following the instructions here: https://msft.chat/member/#ban-appeal-process                                                                                                                                                                                                                                                                                                                                                                                         |

## Automated Actions

### Auto-Mute
Cliptok will automatically mute users after they pass a certain threshold of infractions in a given time:
| Trigger | Action                                                                                                                          |
|--------------------------------------------|----------------------------------------------------------------------------------------------|
| 2 infractions or more in the last 30 days  | Mute for 6 hours                                                                             |
| 4 infractions or more in the last 30 days  | Mute for 12 hours                                                                            |
| 6 infractions or more in the last 30 days  | Mute for 1 day                                                                               |

### Auto-Moderator
Bots will carry out these automated actions based on the following actions:
| Trigger                     | Action                                                                                                                      | Bot       |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------|
| Prohibited words            | Delete message, warn member                                                                                                 | Cliptok   |
| Server invites              | Delete message, warn member<br>Allowed roles: Moderators, Tier 3 and above, Microsoft employees                             | Cliptok   |
| Excessive emoji (> 6)       | 1st offense − Delete message, inform member. 2nd+ offense − Delete message, warn member<br>Ignored channels: #random-stuff  | Cliptok   |
| Mass mention (> 4)          | Delete message, warn member <br>Allowed roles: Tier 3 and above                                                             | Cliptok   |
| Zalgo                       | Delete message<br>Allowed roles: Tier 3 and above                                                                           | MEE6      |
| Toxicity                    | Delete message, mute member, alert moderators<br>Trusted members: two toxic messages in succession                          | Dotsimus  |
| Client-crashing video/GIF   | Delete message, mute member, alert moderators                                                                               | GIFtok    |
