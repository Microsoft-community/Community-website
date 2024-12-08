import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Microsoft Community",
  description: "Microsoft Community general documentation site.",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://msft.chat"
  },
  head: [
    ['meta', { name: 'theme-color', content: '#60CFFE' }],
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Member Information', link: '/member/' },
      {
        text: 'Moderator Resources',
        items: [
          { text: 'Moderator Documentation', link: '/mod/docs/' },
          { text: 'Apply for mod position', link: 'https://apply.msft.chat' },
          { text: 'Server Analytics', link: 'https://statbot.net/dashboard/150662382874525696' },
          { text: 'Server Reviews', link: 'https://disboard.org/server/reviews/150662382874525696' },
        ]
      },
      {
        text: 'Wiki',
        items: wikiLinks()
      },
      {
        text: 'About',
        items: [
          { text: 'Bots', link: '/about/bots' },
          { text: 'Contributors', link: '/about/contributors' },
          { text: 'Moderation team', link: '/about/moderators' },
          { text: 'Community reviews', link: 'https://disboard.org/server/150662382874525696' }
        ]
      },
    ],
    sidebar: {
      '/wiki/': [
        {
          text: 'Wiki',
          items: wikiLinks()
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Microsoft-community' },
      { icon: 'discord', link: 'https://aka.ms/community-discord' }
    ],
    editLink: {
      pattern: 'https://github.com/Microsoft-community/Community-website/edit/master/src/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Not associated with Microsoft.'
    },
  },
  srcDir: './src',
  srcExclude: ["**/README.md"]
})

function wikiLinks() {
  return [
    { text: 'Home', link: '/wiki/' },
    { text: 'Downloading Windows', link: '/wiki/downloading-windows' },
    { text: 'Installing Windows', link: '/wiki/installing-windows' },
    { text: 'Creating a Bootable USB Using Ventoy', link: '/wiki/ventoy' },
    { text: 'Installing and Updating Drivers', link: '/wiki/installing-and-updating-drivers' },
    { text: 'Joining and Leaving the Windows Insider Program', link: '/wiki/windows-insiders' },
    { text: 'Backing Up Data', link: '/wiki/backup' },
    { text: 'Desktop & Mobile Wallpapers', link: '/wiki/wallpapers' },
    { text: 'Useful Windows Tips', link: '/wiki/useful-windows-tips' },
    { text: 'Windows Keyboard Shortcuts', link: '/wiki/keyboard-shortcuts' },
    { text: 'Common Windows Misconceptions', link: '/wiki/common-misconceptions' },
    { text: 'Troubleshooting', link: '/wiki/troubleshooting' },    
    { text: 'Fixing Problems with the Microsoft Store', link: '/wiki/fixing-microsoft-store' },
    { text: 'Getting Live Support for Hacked Accounts', link: '/wiki/hacked-accounts' },
    { text: 'The Windows Feature Store', link: '/wiki/windows-feature-store' }
  ];
}
