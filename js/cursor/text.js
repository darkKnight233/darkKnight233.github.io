// build time:Mon Jun 08 2020 21:06:36 GMT+0800 (GMT+08:00)
var a_idx=0;jQuery(document).ready(function(a){a("body").click(function(e){var n=new Array("喜欢我","不喜欢我");var o=a("<span/>").text(n[a_idx]);var t=e.pageX,i=e.pageY;o.css({"z-index":99999,top:i-28,left:t-n[a_idx].length*8,position:"absolute",color:"#ff7a45"});a("body").append(o);o.animate({top:i-180,opacity:0},1500,function(){o.remove()});a_idx=(a_idx+1)%n.length})});
//rebuild by neat 