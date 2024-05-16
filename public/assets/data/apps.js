var apps = [{
    id: 'customapp',
    title: 'Add custom app',
    image: 'assets/images/add.png'
  },
  {
    id: 'google',
    title: 'Google',
    url: 'https://www.google.com/?safe=active&ssui=on'
  },
  {
    id: 'disc',
    title: 'Discord',
    url: 'https://discord.com/app'
  },
  {
    id: 'telegram',
    title: 'Telegram',
    url: 'https://web.telegram.org/a/'
  },
  {
    id: 'guilded',
    title: 'Guilded',
    url: 'https://www.guilded.gg/'
  },
  {
    id: 'geforce',
    title: 'GeForce NOW (may not work)',
    url: 'https://play.geforcenow.com'
  },
  {
    id: 'studiocode',
    title: 'Visual Studio Code',
    url: 'https://vscode.dev/'
  },
  {
    id: 'tikkytok',
    title: 'TikTok',
    url: 'https://tiktok.com'
  },
  {
    id: 'youtube',
    title: 'YouTube',
    url: 'https://youtube.com'
  },
  {
    id: 'spofity',
    title: 'Spotify',
    url: 'https://open.spotify.com/browse'
  },
  {
    id: 'cinego',
    title: 'CineGo',
    url: 'https://cinego.tv/'
  },
  {
    id: 'now.gg',
    title: 'Now.gg',
    url: 'https://now.gg'
  }
]

for (let i = 0; i < apps.length; i++) {
  let app = apps[i]
  app.image = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${app.url}&size=256`
}

var customapps = JSON.parse(localStorage.getItem("customapps"))
if (customapps) customapps.forEach(app => {
  apps.push(app)
})

console.log("Loaded " + apps.length + " apps");
if (customapps) console.log("Loaded " + customapps.length + " custom apps");
