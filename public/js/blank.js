const path = "/main.html"
const valid_ids_json = "/assets/data/valid-ids.json"

export function blank(url, sentWindow = window) {
  var w = window.open("about:blank", "_blank")
  w.document.write('<script>document.title = "about:blank";</script>' +
    '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
  sentWindow.close()
}

function inFrame() {
  return window.self !== window.parent
}

function ensure() {
  if (inFrame() && location.pathname !== path) {
    location.href = path
  }
}

export function login() {
  try {
    fetch(valid_ids_json)
      .then((res) => res.json())
      .then((data = {}) => {
        const nav_info = window.navigator
        const screen_info = window.screen
        var uid = nav_info.mimeTypes.length
        uid += nav_info.userAgent.replace(/\D+/g, '')
        uid += nav_info.plugins.length
        uid += screen_info.height || ""
        uid += screen_info.width || ""
        uid += screen_info.pixelDepth || ""

        console.log(uid)

        if (data.includes(uid)) {
          //valid
          ensure()
        } else {
          console.log('visitorId not found')

          let par = (!inFrame() && window) || inFrame() && window.parent
          par.location.href = "https://drive.google.com/drive"
        }
      })
  } catch (err) {
    console.warn('cant fetch?')
  }
}
