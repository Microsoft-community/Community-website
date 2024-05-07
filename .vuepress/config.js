import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default {
  title: 'Microsoft Community',
  description: 'Microsoft Community Discord general information website.',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }]
  ],
  evergreen: true,
  port: 1337,
  plugins: [
    searchPlugin({}),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    contributors: false,
    lastUpdated: 'Last Updated',
    navbar: [{
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
      children: [{
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
      children: [{
        text: 'Home',
        link: '/wiki/',
        activeMatch: '/wiki/$'
      },
      {
        text: 'Troubleshooting',
        link: '/wiki/troubleshooting'
      },
      {
        text: 'Fixing the Microsoft Store',
        link: '/wiki/fixing-microsoft-store'
      },
      {
        text: 'Installing Windows',
        link: '/wiki/installing-windows'
      },
      {
        text: "Joining and Leaving the Windows Insider Program",
        link: "/wiki/windows-insiders"
      },
      {
        text: 'Reinstalling Graphics Drivers',
        link: '/wiki/reinstalling-gpu-drivers'
      },
      {
        text: 'Downloading Windows',
        link: '/wiki/downloading-windows'
      },
      {
        text: 'Common Windows Misconceptions',
        link: '/wiki/common-misconceptions'
      },
      {
        text: 'Backing Up Data',
        link: '/wiki/backup'
      },
      {
        text: 'The Windows Feature Store',
        link: '/wiki/windows-feature-store'
      },
      {
        text: 'Useful Windows Tips',
        link: '/wiki/useful-windows-tips'
      }
      ]
    },
    {
      text: 'About',
      children: [{
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
  })
}
