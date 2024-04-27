const path = "/main.html"
const valid_ids_json = "/assets/data/valid-ids.json"

export function blank(url, sentWindow = window){
  var w = window.open("about:blank", "_blank")
  w.document.write('<script>document.title = "about:blank";</script>' +
  '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="'+url+'"></iframe>');
  sentWindow.close()
}

function inFrame(){
  return window.self !== window.parent
}

function ensure(){
  if (inFrame() && location.pathname !== path){
    location.href = path
  }
}

export function login(){
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
.then(FingerprintJS => FingerprintJS.load())

fpPromise
.then(fp => fp.get())
.then((result = {visitorId:""}) => {
  try {
    fetch(valid_ids_json)
    .then((res) => res.json())
    .then((data = {}) => {
      const id = result.visitorId
      console.log(id)
      
      if (data.includes(id)){
        //valid
        ensure()
      } else{
        console.log('visitorId not found')

        let par = (!inFrame() && window) || inFrame() && window.parent
        par.location.href = "https://drive.google.com/drive"
      }
    })
  } catch(err){
    console.warn('cant fetch?')
  }
})
}