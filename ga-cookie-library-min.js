(function(){function c(b){var a;return(a=RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)").exec(document.cookie))?a[1]:null}var a=c("__utma"),d=c("__utmz"),b={};a&&d&&(a=a.split("."),b=function(){for(var a=d.split(".").slice(4).join(".").split("|"),b={},c=0;c<a.length;c++){var e=a[c].split("=");b[e[0]]=e[1]}return b}(),b={traffic_source:{source:b.utmgclid?"google":b.utmcsr,medium:b.utmgclid?"cpc":b.utmcmd,campaign:b.utmccn,content:b.utmcct,term:b.utmctr},domain_hash:a[0],visitor_id:a[1],first_visit:new Date(a[2]*
1E3),previous_visit:new Date(a[3]*1E3),current_visit:new Date(a[4]*1E3),visit_count:+a[5],session_hit_count:+c("__utmb").split(".")[1]});window.GoogleAnalyticsCookie=b})();