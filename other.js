onload=()=>{
  $(location.hash);
}
onclick=()=>{
  $("#"+location.hash.substr(1));
}

onmouseover=()=>{
  $(unescape(location.hash))
}
