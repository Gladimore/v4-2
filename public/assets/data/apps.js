var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on"
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app"
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/"
    }, 
    {
      "id": "guilded",
      "title": "Guilded",
      "url": "https://www.guilded.gg/"
    },
    {
      "id": "geforce",
      "title": "GeForce NOW (may not work)",
      "url": "https://play.geforcenow.com"
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com"
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com"
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com"
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com'
    },
    {
      'id': 'movie-web',
      'title': 'CineGo.tv',
      'url': 'http://cinego.tv/'
    },
    {
      'id': 'twitch-web',
      'title': 'Twitch',
      'url': 'http://twitch.tv'
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
