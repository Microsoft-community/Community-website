module.exports = {
  title: 'Microsoft Community',
  description: 'Discord.gg/Microsoft general info website.',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-142733476-1'
    }]
  ],
  evergreen: true,
  port: 1337,
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'Member Information',
        link: '/member/'
        // items: [
        //   { text: 'Rules', link: '/member/#rules' },
        //   { text: 'Roles', link: '/member/#roles' },
        //   { text: 'Moderator Help', link: '/member/#moderator-help' },
        //   { text: 'Channels', link: '/member/#channels' },
        //   { text: 'Available commands', link: '/member/#commands' },
        //   { text: 'FAQ', link: '/member/#frequently-asked-questions' },
        //   { text: 'Similar communities', link: '/member/#similar-communities' },
        // ]
      },
      {
        text: 'Moderator Resources',
        items: [{
            text: 'Moderator Documentation',
            link: '/mod/docs/'
          },
          {
            text: 'Statbot Analytics',
            link: 'https://statbot.net/dashboard/150662382874525696'
          },
          {
            text: 'Carbonitex Analytics',
            link: 'https://carbonitex.net/Discord/server?s=150662382874525696'
          }
        ]
      },
      {
        text: 'Server Invite',
        link: 'https://aka.ms/community-discord'
      }
    ],
    sidebar: 'auto'
  }
}