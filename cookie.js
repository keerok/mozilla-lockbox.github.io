function setCookieAnalytics(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + value + expires + ";path=/";
    }
function getParam(p) {
        var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
    var gclid = getParam('gclid');
    if (gclid) {
        var gclsrc = getParam('gclsrc');
        if (!gclsrc || gclsrc.indexOf('aw') !== -1) {
            setCookieAnalytics('gclid', gclid, 90);
        }
    }
    
    
function setCookie(a,d,b){
  var c=new Date;
  c.setTime(c.getTime()+864E5*b);
  b="; expires\x3d"+c.toGMTString();
  document.cookie=a+"\x3d"+d+b
}
    
function test(){
            var t;
            return t = {},
            window.location.search.replace("?", "").split("&").forEach(function(e) {
                var n;
                return n = e.split("="),
                t[n[0]] = n[1]
            }),
            t.coupon ? setCookie("singup_coupon", t.coupon, {
                expires: 2592e3
            }) : void 0
        })
