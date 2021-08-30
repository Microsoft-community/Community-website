module.exports = {
  title: 'Microsoft Community',
  description: 'Microsoft Community Discord general information website.',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }]
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-142733476-1'
    }]
  ],
  evergreen: true,
  port: 1337,
  theme: 'default-prefers-color-scheme',
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
            text: 'Apply for mod position',
            link: 'https://apply.msft.chat'
          },
          {
            text: 'Server Analytics',
            link: 'https://statbot.net/dashboard/150662382874525696'
          },
          {
            text: 'Server Reviews',
            link: 'https://disboard.org/server/reviews/150662382874525696'
          }
        ]
      },
      {
        text: 'Wiki',
        items: [{
            text: 'Home',
            link: '/wiki/'
          },
          {
            text: 'Troubleshooting',
            link: '/wiki/troubleshooting'
          },
          {
            text: 'Using the Media Creation Tool',
            link: '/wiki/using-the-media-creation-tool'
          },
          {
            text: 'Installing Windows 10',
            link: '/wiki/installing-windows-10'
          },
          {
            text: 'Reinstalling Graphics Drivers',
            link: '/wiki/reinstalling-gpu-drivers'
          },
          {
            text: 'Fixing the Microsoft Store',
            link: '/wiki/fixing-microsoft-store'
          }
        ]
      },
      {
        text: 'About',
        items: [{
            text: 'Join Discord server',
            link: 'https://aka.ms/community-discord'
          },
          {
            text: 'Bots',
            link: '/about/bots'
          },
          {
            text: 'Contributors',
            link: '/about/contributors'
          },
          {
            text: 'Moderation team',
            link: '/about/moderators'
          },
          {
            text: 'Community reviews',
            link: 'https://disboard.org/server/150662382874525696'
          }
        ]
      }
    ],
    sidebar: 'auto'
  }
}
