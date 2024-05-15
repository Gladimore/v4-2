if (!getObj("favoritedApps")) setObj("favoritedApps", [])
apps.forEach(app => {
  var card = document.createElement("div")
  var image = document.createElement("img")
  var text = document.createElement("h4")
  var descrip = document.createElement("p")
  descrip.classList.add("description")
  card.classList.add("card")

  image.src = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${app.url}&size=256`
  
  if (app.description) descrip.innerHTML = app.description
  image.loading = "lazy"
  text.innerHTML = app.title
  card.appendChild(image)
  card.appendChild(text)
  //card.appendChild(descrip)
  document.querySelector("#appcards").appendChild(card)

  //card.classList.add(`hvr-${effects[Math.floor(Math.random() * effects.length)]}`)
  card.classList.add("hvr-bob")
  card.addEventListener("click", () => {

    if (app.id == "customapp") return loadcustomapp()
    window.location.href = `/load.html?app=${app.id}`
  })
})
