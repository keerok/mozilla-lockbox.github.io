onload=()=>{
  $(location.hash);
}
onclick=()=>{
  $("#"+location.hash.substr(1));
}

onmouseover=()=>{
  $(unescape(location.hash))
}


onmessage=()=>{
  var z = location.hash
  test(unescape(z));
}

function test(str){
  $(str)
}
