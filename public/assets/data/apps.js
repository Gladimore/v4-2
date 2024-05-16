var apps = [{
    id: 'customapp',
    title: 'Add custom app',
    image: 'assets/images/add.png'
  },
  {
    title: 'Google',
    url: 'https://www.google.com/?safe=active&ssui=on'
  },
  {
    title: 'Discord',
    url: 'https://discord.com/app'
  },
  {
    title: 'Telegram',
    url: 'https://web.telegram.org/a/'
  },
  {
    title: 'Guilded',
    url: 'https://www.guilded.gg/'
  },
  {
    title: 'GeForce NOW (may not work)',
    url: 'https://play.geforcenow.com'
  },
  {
    title: 'Visual Studio Code',
    url: 'https://vscode.dev/'
  },
  {
    title: 'TikTok',
    url: 'https://tiktok.com'
  },
  {
    id: 'youtube',
    title: 'YouTube',
    url: 'https://youtube.com'
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/browse'
  },
  {
    title: 'CineGo',
    url: 'https://cinego.tv/'
  },
]

var customapps = JSON.parse(localStorage.getItem("customapps"))
if (customapps) customapps.forEach(app => {
  apps.push(app)
})

async function assignIds() {
  for (let i = 0; i < apps.length; i++) {
    let app = apps[i];

    if (app.id === undefined) {
      await fetch('https://www.uuidtools.com/api/generate/v1')
        .then((res) => res.json())
        .then((data) => {
          app.id = data[0];
        });
    }
  }
}

assignIds().then(() => {
  console.log("Loaded " + apps.length + " apps");
  if (customapps) console.log("Loaded " + customapps.length + " custom apps");
});
