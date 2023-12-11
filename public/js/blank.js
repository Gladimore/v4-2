const name = 'main.html'
const url = document.URL + name

function inFrame(){
  return location.href !== window.parent.location.href
}

function blank(){
      var w = window.open("about:blank", "_blank")
      w.document.write('<script>document.title = "about:blank";</script>' +
  '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="'+url+'"></iframe>');
}

if (inFrame()){
  blank();
} else{
  location.href = url
}
