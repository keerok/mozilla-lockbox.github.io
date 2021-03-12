var hash = location.hash.substr(1);

function setCookie(value){
  document.cookie += "test="+unescape(value);
}


function setCookie2(value){
  document.cookie = "test="+unescape(value)
}

function setCookie3(value){
  document.cookie = "test="+value
}

function setCookie4(value){
  document.cookie = value;
}


setCookie(hash);
setCookie2(hash);
setCookie3(hash);
setCookie4(hash);
