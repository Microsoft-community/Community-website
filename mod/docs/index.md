# Moderator Documentation
## Roles
| Role Name                              | Role Requirement                                                      | Role Perks                                                      |
|----------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------|
| Regular                                | MEE6 Level 3                                                          | Can send embedded messages in all channels, can change nickname |
| Regularly regular                      | MEE6 Level 10                                                         | Access to #politics                                             |
| Superbly regularly regular             | MEE6 Level 20                                                         | Can "Go Live" in a voice channel                                                      |
| Ludicrously superbly regularly regular | MEE6 Level 30                                                         | Decorative                                                      |
| Uber regular                           | MEE6 Level 45                                                         | Decorative                                                      |
| Hyper uber regular                     | MEE6 Level 55                                                         | Access to Audit Log                                             |
| 💎 Nitro boosters                           | Boost the server with Discord Nitro                                   | Access to #boosters-chat; hoisted in sidebar                |
| Technical Queries Slayer               | Be extremely helpful in #technical-support                            | Can pin and delete messages in #technical-support               |
| Seasonal Logos Contributor             | Have a lot of your server logo designs used                           | Decorative                                                      |
| Giveaways boss                         | Host loads of awesome giveaways in #deals-and-giveaways               | Decorative                                                      |
| Muted                                  | Break rules or ask nicely                                             | Cannot talk anywhere in the server                              |
| Trial moderators                       | Apply for moderator position and be accepted                          | Access to moderator permissions; cannot ban                     |
| Moderators                             | Be a good Trial moderator for a while                                 | Access to moderator permissions                                 |
| Lead moderators                        | Be a very good moderator for a very long time and have Jaska love you | Access to administrator permissions                             |
| /r/Windows moderator                   | Be a moderator on /r/Windows                                          | Access to some moderator permissions                            |
| /r/Surface moderator                   | Be a moderator on /r/Surface                                          | Decorative                                                      |
| 💌 Moderator's mail                     | Be the modmail bot                                                    | Decorative                                                      |
| 🌟 Microsoft employees                  | Verify in #ms-employee-verification                                   | Access to #msft-chat                                            |
| Alumni Microsoft employees             | Stop being a Microsoft employee                                       | Decorative                                                      |
| Alumni moderator                       | Stop being a moderator                                                 | Decorative
| 💙 Edgevatars Event participant         | Take part in the 2019 Edgevatars Event                                | Decorative                                                      |
| Windows Insiders                       | See the Commands section                                              | Receive notifications                                           |
| Windows Insiders (Skip ahead)          | See the Commands section                                              | Receive notifications                                           |
| 💻 Patch Tuesday                        | See the Commands section                                              | Receive notifications                                           |
## Commands
Moderation commands are available through the MEE6 bot. Some commands are restricted to permanent moderators.
| Moderation Action            | Command                                         | Restriction          |
|------------------------------|-------------------------------------------------|----------------------|
| Ban member                   | !ban [member] (optional reason)                 | Permanent moderators |
| Temporarily ban member       | !tempban [member] [duration] (optional reason)  | All moderators       |
| Clear messages               | !clear (optional member) (optional count)       | All moderators       |
| Display member’s infractions | !infractions [member]                           | All members          |
| Kick member                  | !kick [member] (optional reason)                | All moderators       |
| Mute member                  | !mute [member] (optional reason)                | All moderators       |
| Temporarily mute member      | !tempmute [member] [duration] (optional reason) | All moderators       |
| Display role info            | !role-info [role]                               | All members          |
| Display server info          | !server-info                                    | All members          |
| Activate slow mode           | !slowmode (optional timeout) (optional off)     | Lead moderators      |
| Unban member                 | !unban [member]                                 | Permanent moderators |
| Unmute member                | !unmute [member]                                | All moderators       |
| Display member info            | !user-info (optional member)                    | All members          |
| Warn member                  | !warn [member] (optional reason)                | All moderators       |
## Auditing
Use the logs channel and Discord Audit Log to audit events.
### Logs Channel
The Dyno bot logs the following events in the #logs channel.
* Member joined
* Member left
* Member banned
* Member unbanned
* Message edited
* Message deleted
* Bulk message deletion
* Channel created
* Channel deleted
* Role created
* Role deleted
* Role update
* Role given
* Role removed
* Nickname changed
* Moderator command used
* Member joined voice channel
* Member left voice channel
* Member moved to voice channel
* Invites/invite info.
### Discord Audit Log
The Discord Audit Log in Server Settings logs the following actions.
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
* Delete messages.
## Modmail
The modmail bot sends @here pings when members submit modmail, creating channels for each thread under the Modmail category.
### Modmail Commands
| Modmail Action                            | Command                                     | Restriction     |
|-------------------------------------------|---------------------------------------------|-----------------|
| Reply anonymously                         | !anonreply                                  | All moderators  |
| Block member from modmail                 | !block                                      | Lead moderators |
| Display blocked members                   | !blocked                                    | Lead moderators |
| Close thread                              | !close [silent] [in X [days/hours/minutes]] | All moderators  |
| Create thread with member                 | !contact                                    | All moderators  |
| Edit message                              | !edit                                       | All moderators  |
| Display link to current thread’s logs     | !loglink                                    | All moderators  |
| Display member’s previous modmail threads | !logs                                       | All moderators  |
| Move thread to another category           | !move                                       | All moderators  |
| Take note about current thread            | !note                                       | All moderators  |
| Notify of next message received           | !notify                                     | All moderators  |
| Flag thread as NSFW                       | !nsfw                                       | All moderators  |
| Reply                                     | !reply, !r                                  | All moderators  |
| Set up server for modmail                 | !setup                                      | Lead moderators |
| Display set snippets                      | !snippets                                   | All moderators  |
| Notify of every message received          | !subscribe                                  | All moderators  |
| Unblock member from modmail               | !unblock                                    | Lead moderators |
| Stop being notified of messages received  | !unsubscribe                                | All moderators  |
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
Send a message snippet by typing the prefix then the snippet name, e.g. !thanks to send the message ‘Thank you for reaching out!’
| Snippet Name | Snippet                                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| baduse       | Using modmail inappropriately might lead to suspension                                                                  |
| techsupport  | [As !ask]                                                                                                               |
| accounts  | We do not have the access to assist with purchasing and account queries. Please contact official Microsoft support at support.microsoft.com.|
| inactivity   | Hi, we're closing the thread due to inactivity. If you have any questions remaining feel free to re-open it, thank you! |
| thanks       | Thank you for reaching out!                                                                                             |
## Automated Actions
MEE6 bot performs the following actions when triggered.
| Trigger | Action                                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| 2 infractions or more in the last 30 days       | Mute for 6 hours                                                                  |
| 4 infractions or more in the last 30 days  | Mute for 12 hours                                                                                                               |
| 6 infractions or more in the last 30 days  | Mute for 1 day|
### MEE6 Auto-Moderator
| Trigger               | Action                                                                                                   |
|--------------------------|----------------------------------------------------------------------------------------------------------|
| Bad words                | Delete message & warn member                                                                             |
| Repeated text            | Disabled                                                                                                 |
| Server invites           | Delete message & warn member<br>Allowed roles: Moderators, Superbly regularly regular, Microsoft employees |
| External links           | Disabled                                                                                                 |
| Spammed caps (70%> caps) | Disabled                                                                                                 |
| Excessive emojis         | Delete message & warn member<br>Ignored channels: #random-stuff<br>Emoji limit: 7                            |
| Mass spoilers            | Disabled                                                                                                 |
| Mass mention             | Delete message & warn member                                                                             |
| Zalgo                    | Delete message<br>Allowed roles: Superbly regularly regular                                                |
### Dyno Auto-Moderator
| Trigger              | Action    |
|-------------------------|-----------|
| Banned words            | Disabled  |
| All caps                | Disabled  |
| Duplicate text          | Disabled  |
| Fast message spam       | Auto mute |
| Discord invites         | Disabled  |
| All links               | Disabled  |
| Mass mentions           | Auto mute |
| Link cooldown           | Disabled  |
| Image spam              | Auto mute |
| Emoji spam              | Disabled  |
| Spoilers                | Disabled  |
| Selfbot detection       | Warn      |
| Automute time (minutes) | 480       |
| Mute violations (count) | 2         |
| Link cooldown (seconds) | 10        |
| Max emoji count         | 4         |
| Mass mention count      | 10        |
