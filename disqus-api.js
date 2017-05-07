!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t){},function(e,t){!function(t,o){"object"==typeof e&&e.exports?(e.exports=o(),e.exports.default=e.exports):t.timeago=o()}("undefined"!=typeof window?window:this,function(){function e(e){return e instanceof Date?e:isNaN(e)?/^\d+$/.test(e)?new Date(t(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e)):new Date(t(e))}function t(e){return parseInt(e)}function o(e,o,n){o=g[o]?o:g[n]?n:"en";for(var a=0,i=e<0?1:0,c=e=Math.abs(e);e>=p[a]&&a<f;a++)e/=p[a];return e=t(e),a*=2,e>(0===a?9:1)&&(a+=1),g[o](e,a,c)[i].replace("%s",e)}function n(t,o){return((o=o?e(o):new Date)-e(t))/1e3}function a(e){for(var t=1,o=0,n=Math.abs(e);e>=p[o]&&o<f;o++)e/=p[o],t*=p[o];return n%=t,n=n?t-n:t,Math.ceil(n)}function i(e){return e.dataset.timeago?e.dataset.timeago:c(e,h)}function c(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0}function m(e,t){return e.setAttribute?e.setAttribute(v,t):e.attr?e.attr(v,t):void 0}function s(e){return c(e,v)}function l(e,t){this.nowDate=e,this.defaultLocale=t||"en"}function r(e,t){return new l(e,t)}var d="second_minute_hour_day_week_month_year".split("_"),u="秒_分钟_小时_天_周_月_年".split("_"),g={en:function(e,t){if(0===t)return["just now","right now"];var o=d[parseInt(t/2)];return e>1&&(o+="s"),[e+" "+o+" ago","in "+e+" "+o]},zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var o=u[parseInt(t/2)];return[e+o+"前",e+o+"后"]}},p=[60,60,24,7,365/7/12,12],f=6,h="datetime",v="data-tid",I={};return l.prototype.doRender=function(e,t,i){var c,s=n(t,this.nowDate),l=this;e.innerHTML=o(s,i,this.defaultLocale),I[c=setTimeout(function(){l.doRender(e,t,i),delete I[c]},Math.min(1e3*a(s),2147483647))]=0,m(e,c)},l.prototype.format=function(e,t){return o(n(e,this.nowDate),t,this.defaultLocale)},l.prototype.render=function(e,t){void 0===e.length&&(e=[e]);for(var o=0,n=e.length;o<n;o++)this.doRender(e[o],i(e[o]),t)},l.prototype.setLocale=function(e){this.defaultLocale=e},r.register=function(e,t){g[e]=t},r.cancel=function(e){var t;if(e)(t=s(e))&&(clearTimeout(t),delete I[t]);else{for(t in I)clearTimeout(t);I={}}},r})},function(e,t,o){"use strict";function n(e){if(r.indexOf("?")>-1&&r.indexOf("=")>-1)for(var t=r.split("?")[1],o=t.split("&"),n=0;n<o.length;n++){var a=o[n].split("=");if(a[0]==e)return a[1]}return!1}function a(){this.init()}function i(){this.imagesize=[],this.unload=[],this.next="",this.init(),this.box=document.querySelector(".comment-box").outerHTML}Object.defineProperty(t,"__esModule",{value:!0});for(var c=o(1),m=(o.n(c),o(0),o(2)),s=document.querySelectorAll("script"),l=0;l<s.length;l++)if(/disqus-api.js/.test(s[l].src)){var r=s[l].src;break}var d={apipath:r.substring(0,r.lastIndexOf("/"))+"/api",origin:location.origin,shortname:n("shortname")},u={title:document.title,url:location.pathname,desc:document.querySelector('meta[name="description"]').content},g=!1;if(window.disqus_config=function(){this.page.url=d.origin+u.url,this.callbacks.onReady.push(function(){g=!0,document.querySelector(".comment").style.display="none",document.getElementById("comment").dataset.tips="",document.querySelector(".disqus").style.display="block"})},a.prototype={init:function(){this.load();var e=document.getElementsByClassName("comment-box"),t=this;"true"==t.logged_in?[].forEach.call(e,function(e,o){e.querySelector(".comment-form-wrapper").classList.add("logged-in"),e.querySelector(".comment-avatar-image").setAttribute("src",t.avatar),e.querySelector(".comment-form-name").value=t.name,e.querySelector(".comment-form-email").value=t.email,e.querySelector(".comment-form-url").value=t.url}):([].forEach.call(e,function(e,t){e.querySelector(".comment-form-wrapper").classList.remove("logged-in")}),localStorage.setItem("logged_in","false"))},load:function(){this.name=localStorage.getItem("name"),this.email=localStorage.getItem("email"),this.url=localStorage.getItem("url"),this.avatar=localStorage.getItem("avatar"),this.logged_in=localStorage.getItem("logged_in")},clear:function(){localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("url"),localStorage.removeItem("avatar"),localStorage.setItem("logged_in","false"),guest.init()},submit:function(e){if("false"==guest.logged_in){var t=e.currentTarget.closest(".comment-item")||e.currentTarget.closest(".comment-box"),o=t.querySelector(".comment-form-name").value,n=t.querySelector(".comment-form-email").value,a=t.querySelector(".comment-avatar-image").getAttribute("src"),i=t.querySelector(".comment-form-url").value;if(!/\S/i.test(o)||!/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(n))return void alert("请正确填写必填项");localStorage.setItem("name",o),localStorage.setItem("email",n),localStorage.setItem("url",i),localStorage.setItem("avatar",a),localStorage.setItem("logged_in","true"),guest.init()}}},i.prototype={init:function(){if(d.shortname){document.getElementById("comment").dataset.tips="正在检测能否连接 Disqus……";var e=new XMLHttpRequest;e.open("GET","//disqus.com/next/config.json?"+(new Date).getTime(),!0),e.timeout=n("timeout")?n("timeout"):1e3,e.onload=function(){document.getElementById("comment").dataset.tips="连接成功，正在加载 Disqus 评论框……",comment.disqus()},e.ontimeout=function(){document.getElementById("comment").dataset.tips="连接失败，正在加载简单评论框……",comment.getlist(),e.abort()},e.onerror=function(){document.getElementById("comment").dataset.tips="连接失败，正在加载简单评论框……",comment.getlist()},e.send(null)}else this.getlist()},disqus:function(){if(g)document.querySelector(".comment").style.display="none",document.querySelector(".disqus").style.display="block";else{var e=document,t=e.createElement("script");t.src="//"+d.shortname+".disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}},form:function(){var e="";comment.emoji.forEach(function(t,o){e+='<li class="emojione-item" title="'+t.title+'" data-code="'+t.code+'"><img class="emojione-item-image" src="'+t.url+'" /></li>'});var t=document.getElementsByClassName("emojione-list");[].forEach.call(t,function(t,o){t.innerHTML=e});var o=document.getElementsByClassName("emojione-item");[].forEach.call(o,function(e,t){e.addEventListener("click",comment.field,!1)});var n=document.getElementsByClassName("comment-item-reply");[].forEach.call(n,function(e,t){e.addEventListener("click",comment.show,!1)});var a=document.getElementsByClassName("comment-form-textarea");[].forEach.call(a,function(e,t){e.addEventListener("focus",comment.focus,!1),e.addEventListener("blur",comment.focus,!1)});var i=document.getElementsByClassName("comment-form-email");[].forEach.call(i,function(e,t){e.addEventListener("blur",comment.verify,!1)});var c=document.getElementsByClassName("exit");[].forEach.call(c,function(e,t){e.addEventListener("click",guest.clear,!1)});var m=document.getElementsByClassName("comment-form-submit");[].forEach.call(m,function(e,t){e.addEventListener("click",guest.submit,!1),e.addEventListener("click",comment.post,!1)});var s=document.getElementsByClassName("comment-image-input");[].forEach.call(s,function(e,t){e.addEventListener("change",comment.upload,!1)})},focus:function(e){var t=e.currentTarget.closest(".comment-form-wrapper");t.classList.add("editing"),t.classList.contains("focus")?t.classList.remove("focus"):t.classList.add("focus")},field:function(e){var t=e.currentTarget,o=t.closest(".comment-form").querySelector(".comment-form-textarea");o.value+=t.dataset.code,o.focus()},emoji:[{code:":smile:",title:"笑脸",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f604.png"},{code:":mask:",title:"生病",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f637.png"},{code:":joy:",title:"破涕为笑",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f602.png"},{code:":stuck_out_tongue_closed_eyes:",title:"吐舌",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f61d.png"},{code:":flushed:",title:"脸红",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f633.png"},{code:":scream:",title:"恐惧",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f631.png"},{code:":pensive:",title:"失望",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f614.png"},{code:":unamused:",title:"无语",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f612.png"},{code:":grin:",title:"露齿笑",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f601.png"},{code:":heart_eyes:",title:"色",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png"},{code:":sweat:",title:"汗",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f613.png"},{code:":smirk:",title:"得意",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60f.png"},{code:":relieved:",title:"满意",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png"},{code:":rolling_eyes:",title:"翻白眼",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f644.png"},{code:":ok_hand:",title:"OK",url:"//assets-cdn.github.com/images/icons/emoji/unicode/1f44c.png"},{code:":v:",title:"胜利",url:"//assets-cdn.github.com/images/icons/emoji/unicode/270c.png"}],verify:function(e){var t=e.currentTarget,o=t.closest(".comment-box"),n=o.querySelector(".comment-avatar-image"),a=o.querySelector(".comment-form-name");if(""!=a.value&&/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(t.value)){var i=new XMLHttpRequest;i.open("GET",d.apipath+"/getgravatar.php?email="+t.value+"&name="+a.value,!0),i.send(),i.onreadystatechange=function(){4==i.readyState&&200==i.status&&("false"==i.responseText?alert("您所填写的邮箱地址有误！"):n.src=i.responseText)}}},post:function(e){var t=e.currentTarget.closest(".comment-item")||e.currentTarget.closest(".comment-box"),o=t.querySelector(".comment-form-textarea").value.replace("+","&#43;"),n=t.dataset.id?t.dataset.id:"",a=(new Date).toJSON(),i=t.getElementsByClassName("comment-image-item"),c=[],s="";if([].forEach.call(i,function(e,t){c[t]=e.dataset.imageUrl,s+=" "+e.dataset.imageUrl}),guest.name||guest.email){if(0==c.length&&""==o)return alert("无法发送空消息"),void t.querySelector(".comment-form-textarea").focus();var l=o;comment.emoji.forEach(function(e,t){l=l.replace(e.code,'<img class="emojione" src="'+e.url+'" />')}),guest.url=guest.url?guest.url:"";var r={url:guest.url,name:guest.name,avatar:guest.avatar,id:"preview",parent:n,createdAt:a,message:"<p>"+l+"</p>",media:c};comment.load(r,comment.count),m().render(document.querySelectorAll(".timeago"),"zh_CN"),o+=s,comment.message=o,n?t.querySelector(".comment-item-cancel").click():(t.querySelector(".comment-form-textarea").value="",t.querySelector(".comment-image-list").innerHTML="",t.querySelector(".comment-form-wrapper").classList.remove("expanded","editing"));var g="thread="+comment.thread+"&parent="+n+"&message="+o+"&name="+guest.name+"&email="+guest.email+"&url="+guest.url+"&link="+u.url+"&title="+u.title,p=new XMLHttpRequest;p.open("POST",d.apipath+"/postcomment.php",!0),p.setRequestHeader("Content-type","application/x-www-form-urlencoded"),p.send(g),p.onreadystatechange=function(){if(4==p.readyState&&200==p.status){var e=JSON.parse(p.responseText);if(0===e.code){var t=document.querySelector('.comment-item[data-id="preview"]');t.parentNode.removeChild(t),comment.count+=1,document.getElementById("comment-count").innerHTML=comment.count+" 条评论",comment.load(e.response,comment.count),m().render(document.querySelectorAll(".timeago"),"zh_CN"),comment.form()}else if(2===e.code){if(e.response.indexOf("email")>-1)return void alert("请输入正确的名字或邮箱！");if(e.response.indexOf("message")>-1)return void alert("评论不能为空！")}}}}},load:function(e,t){var o=e.parent?{name:document.querySelector('.comment-item[data-id="'+e.parent+'"]')?'<a class="at" href="#'+document.querySelector('.comment-item[data-id="'+e.parent+'"]').getAttribute("id")+'">@'+document.querySelector('.comment-item[data-id="'+e.parent+'"]').dataset.name+"</a>":"",dom:document.querySelector('.comment-item[data-id="'+e.parent+'"] .comment-item-children'),insert:"beforeend"}:{name:"",dom:document.querySelector(".comment-list"),insert:"afterbegin"},n=e.url?e.url:"javascript:;",a=e.message.replace(/(.{3})/,"$1"+o.name),i="";e.media.forEach(function(e,t){i+='<a class="comment-item-imagelink" target="_blank" href="'+e+'" ><img class="comment-item-image" src="'+e+'?imageView2/2/h/200"></a>'}),i='<div class="comment-item-images">'+i+"</div>";var c='<li class="comment-item" data-index="'+(t+1)+'" data-id="'+e.id+'" data-name="'+e.name+'" id="comment-'+e.id+'">';c+='<div class="comment-item-avatar"><img src="'+e.avatar+'"></div>',c+='<div class="comment-item-main">',c+='<div class="comment-item-header"><a class="comment-item-name" rel="nofollow" target="_blank" href="'+n+'">'+e.name+'</a><span class="comment-item-bullet"> • </span><span class="comment-item-time timeago" datetime="'+e.createdAt+'"></span><span class="comment-item-bullet"> • </span><a class="comment-item-reply" href="javascript:;">回复</a></div>',c+='<div class="comment-item-content">'+a+i+"</div>",c+='<ul class="comment-item-children"></ul>',c+="</div>",c+="</li>",o.dom?o.dom.insertAdjacentHTML(o.insert,c):comment.unload.push(e)},getlist:function(){if(document.querySelector(".disqus").style.display="none",document.querySelector(".comment").style.display="block",!this.count||comment.offsetTop){var e=new XMLHttpRequest;e.open("GET",d.apipath+"/getcomments.php?link="+encodeURIComponent(u.url)+"&cursor="+this.next,!0),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){document.getElementById("comment").dataset.tips="";var t=JSON.parse(e.responseText);if(0===t.code){if(comment.thread=t.thread,document.querySelector(".comment").classList.remove("loading"),null==t.response)return void(comment.count=t.posts);var o=comment.unload?t.response.concat(comment.unload):t.response;comment.root=[],comment.unload=[],o.forEach(function(e,t){comment.load(e,t),e.parent||comment.root.unshift(e.id)}),t.cursor.hasPrev?(comment.root.forEach(function(e){document.querySelector(".comment-list").appendChild(document.getElementById("comment-"+e))}),window.scrollTo(0,comment.offsetTop),comment.offsetTop=void 0):(comment.count=t.posts,document.getElementById("comment-count").innerHTML=t.posts+" 条评论",document.querySelector(".comment-tips-link").setAttribute("href",t.link));var n=document.querySelector(".comment-loadmore");t.cursor.hasNext?(n?n.classList.remove("loading"):(document.querySelector(".comment").insertAdjacentHTML("beforeend",'<a href="javascript:;" class="comment-loadmore">加载更多评论</a>'),document.querySelector(".comment-loadmore").addEventListener("click",function(){this.classList.add("loading"),comment.offsetTop=this.offsetTop,comment.getlist()},!1)),comment.next=t.cursor.next):n&&n.parentNode.removeChild(n),m().render(document.querySelectorAll(".timeago"),"zh_CN"),/^#disqus|^#comment/.test(location.hash)&&!t.cursor.hasPrev&&window.scrollTo(0,document.querySelector(location.hash).offsetTop)}else if(2===t.code){var a='<div class="comment-header">';a+='    <span class="comment-header-item">创建 Thread</span>',a+="</div>",a+='<div class="comment-thread-form">',a+="<p>由于 Disqus 没有本文的相关 Thread，故需先创建 Thread</p>",a+='<div class="comment-form-item"><label class="comment-form-label">url:</label><input class="comment-form-input" id="thread-url" name="url" value="'+d.origin+u.url+'" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">title:</label><input class="comment-form-input" id="thread-title" name="title" value="'+u.title+'" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">slug:</label><input class="comment-form-input" id="thread-slug" name="slug" placeholder="（别名，选填）" /></div>',a+='<div class="comment-form-item"><label class="comment-form-label">message:</label><textarea class="comment-form-textarea" id="thread-message" name="message">'+u.desc+"</textarea></div>",a+='<button id="thread-submit" class="comment-form-submit">提交</button></div>',document.querySelector(".comment").classList.remove("loading"),document.querySelector(".comment").innerHTML=a,document.getElementById("thread-submit").addEventListener("click",function(){var e="url="+document.getElementById("thread-url").value+"&title="+document.getElementById("thread-title").value+"&slug="+document.getElementById("thread-slug").value+"&message="+document.getElementById("thread-message").value,t=new XMLHttpRequest;t.open("POST",d.apipath+"/createthread.php",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(e),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&0===JSON.parse(t.responseText).code&&(alert("创建 Thread 成功！"),location.reload())}},!0)}}},e.onload=function(){comment.form()}}},show:function(e){var t=document.querySelector(".comment-item .comment-box");if(t){t.parentNode.removeChild(t);var o=document.querySelector(".comment-item-cancel");o.outerHTML=o.outerHTML.replace("cancel","reply")}var n=e.currentTarget,a=n.closest(".comment-item"),i=a.dataset.id,c=a.dataset.name,m=comment.box.replace(/emoji-input/g,"emoji-input-"+i).replace(/upload-input/g,"upload-input-"+i).replace(/加入讨论……|写条留言……/,"@"+c).replace(/加入讨论……|写条留言……/,"").replace(/<label class="comment-actions-label exit"(.|\n)*<\/label>\n/,"").replace(/<input id="tips-input"(.|\n)*<\/label>/,"");a.querySelector(".comment-item-main .comment-item-children").insertAdjacentHTML("beforebegin",m),n.outerHTML=n.outerHTML.replace("reply","cancel"),guest.init(),a.querySelector(".comment-item-cancel").addEventListener("click",function(){var e=a.querySelector(".comment-box");e.parentNode.removeChild(e),this.outerHTML=this.outerHTML.replace("cancel","reply"),comment.form()},!1),comment.form()},upload:function(e){var t=e.currentTarget,o=t.closest(".comment-box"),n=o.querySelector(".comment-image-progress"),a=o.querySelector(".comment-image-loaded"),i=o.querySelector(".comment-form-wrapper");if(0!==t.files.length){var c=t.files[0].size;if(-1==comment.imagesize.indexOf(c)){comment.imagesize.push(c),n.style.width="80px",i.classList.add("expanded");var m=new FormData;m.append("file",t.files[0]);var s=t.files[0].name,l=new XMLHttpRequest;l.onreadystatechange=function(){if(4==l.readyState&&200==l.status)try{var e=JSON.parse(l.responseText);if(0==e.code){var t=e.response[s].url,n=new Image;n.src=t,n.onload=function(){o.querySelector('[data-image-size="'+c+'"] .comment-image-object').setAttribute("src",n.src),o.querySelector('[data-image-size="'+c+'"]').dataset.imageUrl=n.src,o.querySelector('[data-image-size="'+c+'"]').classList.remove("loading"),o.querySelector('[data-image-size="'+c+'"]').addEventListener("click",comment.remove,!1)}}}catch(t){var e={status:"error",data:"Unknown error occurred: ["+l.responseText+"]"}}},l.upload.addEventListener("progress",function(e){a.style.width=Math.ceil(e.loaded/e.total*100)+"%"},!1),l.upload.addEventListener("load",function(e){a.style.width=0,n.style.width=0;var t='<li class="comment-image-item loading" data-image-size="'+c+'"><img class="comment-image-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+ICA8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiAgICAgd2lkdGg9IjI0cHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDI0IDMwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgICA8cmVjdCB4PSIwIiB5PSIxMCIgd2lkdGg9IjQiIGhlaWdodD0iMTAiIGZpbGw9InJnYmEoMTI3LDE0NSwxNTgsMSkiIG9wYWNpdHk9IjAuMiI+ICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjAuMjsgMTsgLjIiIGJlZ2luPSIwcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgMjA7IDEwIiBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjEwOyA1OyAxMCIgYmVnaW49IjBzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICA8L3JlY3Q+ICAgIDxyZWN0IHg9IjgiIHk9IjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSIxMCIgZmlsbD0icmdiYSgxMjcsMTQ1LDE1OCwxKSIgIG9wYWNpdHk9IjAuMiI+ICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjAuMjsgMTsgLjIiIGJlZ2luPSIwLjE1cyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgMjA7IDEwIiBiZWdpbj0iMC4xNXMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjEwOyA1OyAxMCIgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICA8L3JlY3Q+ICAgIDxyZWN0IHg9IjE2IiB5PSIxMCIgd2lkdGg9IjQiIGhlaWdodD0iMTAiIGZpbGw9InJnYmEoMTI3LDE0NSwxNTgsMSkiICBvcGFjaXR5PSIwLjIiPiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIwLjI7IDE7IC4yIiBiZWdpbj0iMC4zcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgMjA7IDEwIiBiZWdpbj0iMC4zcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiIHZhbHVlcz0iMTA7IDU7IDEwIiBiZWdpbj0iMC4zcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgPC9yZWN0PiAgPC9zdmc+" /></li>';o.querySelector(".comment-image-list").insertAdjacentHTML("beforeend",t)},!1),l.open("POST",d.apipath+"/upload.php",!0),l.send(m)}}},remove:function(e){var t=e.currentTarget.closest(".comment-image-item"),o=e.currentTarget.closest(".comment-form-wrapper");t.parentNode.removeChild(t),comment.imagesize=[];var n=document.getElementsByClassName("comment-image-item");[].forEach.call(n,function(e,t){comment.imagesize[t]=e.dataset.imageSize}),0==comment.imagesize.length&&o.classList.remove("expanded")}},document.getElementById("comment")){var p='<div class="comment loading">';p+='    <div class="comment-header">',p+='        <span class="comment-header-item" id="comment-count">评论</span>',p+="    </div>",p+='    <div class="comment-box">',p+='        <div class="comment-avatar avatar">',p+='            <img class="comment-avatar-image" src="https://a.disquscdn.com/images/noavatar92.png" />',p+="        </div>",p+='        <div class="comment-form">',p+='            <div class="comment-form-wrapper">',p+='                <textarea class="comment-form-textarea" placeholder="加入讨论……"></textarea>',p+='                <div class="comment-image">',p+='                    <ul class="comment-image-list">',p+="                    </ul>",p+='                    <div class="comment-image-progress">',p+='                        <div class="comment-image-loaded">',p+="                        </div>",p+="                    </div>",p+="                </div>",p+='                <div class="comment-actions">',p+='                    <div class="comment-actions-group">',p+='                        <input id="emoji-input" class="comment-actions-input" type="checkbox"/>',p+='                        <label class="comment-actions-label emojione" for="emoji-input" title="选择表情"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 1024c-282.713043 0-512-229.286957-512-512s229.286957-512 512-512c282.713043 0 512 229.286957 512 512S792.486957 1024 512 1024zM512 44.521739c-258.226087 0-467.478261 209.252174-467.478261 467.478261 0 258.226087 209.252174 467.478261 467.478261 467.478261s467.478261-209.252174 467.478261-467.478261C979.478261 253.773913 768 44.521739 512 44.521739z"></path><path d="M801.391304 554.295652c0 160.278261-129.113043 289.391304-289.391304 289.391304s-289.391304-129.113043-289.391304-289.391304L801.391304 554.295652z"></path><path d="M674.504348 349.495652m-57.878261 0a2.6 2.6 0 1 0 115.756522 0 2.6 2.6 0 1 0-115.756522 0Z"></path><path d="M347.269565 349.495652m-57.878261 0a2.6 2.6 0 1 0 115.756522 0 2.6 2.6 0 1 0-115.756522 0Z"></path></svg>',p+='<ul class="emojione-list"></ul></label>',p+='                        <input id="upload-input" class="comment-actions-input comment-image-input" type="file" accept="image/*" name="file"/>',p+='                        <label class="comment-actions-label" for="upload-input" title="上传图片"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M15.515152 15.515152 15.515152 15.515152 15.515152 15.515152Z"></path><path d="M15.515152 139.636364l0 806.787879 992.969697 0 0-806.787879-992.969697 0zM946.424242 884.363636l-868.848485 0 0-682.666667 868.848485 0 0 682.666667zM698.181818 356.848485c0-51.417212 41.673697-93.090909 93.090909-93.090909s93.090909 41.673697 93.090909 93.090909c0 51.417212-41.673697 93.090909-93.090909 93.090909s-93.090909-41.673697-93.090909-93.090909zM884.363636 822.30303l-744.727273 0 186.181818-496.484848 248.242424 310.30303 124.121212-93.090909z"></path></svg>',p+="</label>",p+="                    </div>",p+='                    <div class="comment-actions-form">',p+='                        <input id="tips-input" class="comment-actions-input" type="checkbox"/>',p+='                        <label class="comment-actions-label tips" title="提示" for="tips-input"><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M511.999488 300.468283c-26.749224 0-48.479131 21.73093-48.479131 48.479131 0 26.796296 21.729907 48.479131 48.479131 48.479131 26.797319 0 48.479131-21.682835 48.479131-48.479131C560.478619 322.199213 538.796808 300.468283 511.999488 300.468283zM511.999488 106.551758c-214.177987 0-387.833049 173.654039-387.833049 387.833049 0 214.228129 173.655062 387.833049 387.833049 387.833049 214.181057 0 387.833049-173.60492 387.833049-387.833049C899.832538 280.205796 726.180546 106.551758 511.999488 106.551758zM511.999488 833.738725c-187.429787 0-339.353918-151.923108-339.353918-339.353918S324.569702 155.030889 511.999488 155.030889c187.43081 0 339.353918 151.923108 339.353918 339.353918S699.430298 833.738725 511.999488 833.738725zM536.239566 445.905676l-48.479131 0c-13.397125 0-24.240077 10.841929-24.240077 24.240077l0 193.916525c0 13.398148 10.842952 24.240077 24.240077 24.240077l48.479131 0c13.399171 0 24.240077-10.841929 24.240077-24.240077l0-193.916525C560.478619 456.747605 549.638737 445.905676 536.239566 445.905676z"></path></svg>',p+="",p+='                            <div class="comment-tips">',p+='                                本评论框利用 Disqus API 实现访客评论，登录请自带梯子 <a target="_blank" title="科学使用 Disqus" class="comment-tips-link">前往 Disqus</a>',p+="                            </div>",p+="                        </label>",p+='                        <label class="comment-actions-label exit" title="重置访客信息"><svg class="icon" fill="#c2c6cc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><defs><style type="text/css"></style></defs><path d="M348.870666 210.685443l378.570081 0c32.8205 0 58.683541 26.561959 58.683541 58.683541 0 162.043606 0 324.804551 0 486.848157 0 32.81129-26.561959 58.674331-58.683541 58.674331L348.870666 814.891472c-10.477632 0-18.850323-8.363482-18.850323-18.841114l0-37.728276c0-10.477632 8.372691-18.841114 18.850323-18.841114l343.645664 0c10.477632 0 18.850323-8.372691 18.850323-18.850323L711.366653 304.983109c0-10.477632-8.372691-18.841114-18.850323-18.841114L348.870666 286.141996c-10.477632 0-18.850323-8.363482-18.850323-18.841114l0-37.728276C329.98248 219.095997 338.393034 210.685443 348.870666 210.685443z"></path><path d="M128.152728 526.436804l112.450095 112.450095c6.985088 6.985088 19.567661 6.985088 26.552749 0l26.561959-26.561959c6.985088-6.985088 6.985088-19.567661 0-26.552749l-34.925441-34.925441L494.168889 550.84675c10.477632 0 18.850323-8.372691 18.850323-18.850323l0-37.719066c0-10.477632-8.372691-18.850323-18.850323-18.850323L258.754229 475.427036l34.925441-34.925441c6.985088-6.985088 6.985088-19.567661 0-26.552749l-26.561959-26.524097c-6.985088-6.985088-19.567661-6.985088-26.552749 0L128.152728 499.875868C120.431883 506.859933 120.431883 519.451716 128.152728 526.436804z"></path></svg>',p+="</label>",p+='                        <button class="comment-form-submit"><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M565.747623 792.837176l260.819261 112.921839 126.910435-845.424882L66.087673 581.973678l232.843092 109.933785 562.612725-511.653099-451.697589 563.616588-5.996574 239.832274L565.747623 792.837176z" fill="#ffffff"></path></svg>',p+="</button>",p+="                    </div>",p+="                </div>",p+="            </div>",p+='            <div class="comment-login">',p+='                <input class="comment-form-input comment-form-name" type="text" placeholder="名字（必填）" autocomplete="name" required>',p+='                <input class="comment-form-input comment-form-email" type="email" placeholder="邮箱（必填）" autocomplete="email" required>',p+='                <input class="comment-form-input comment-form-url" type="url" placeholder="网址（可选）" autocomplete="url">',p+="            </div>",p+="        </div>",p+="    </div>",p+='    <ul id="comments" class="comment-list">',p+="    </ul>",p+="</div>",p+='<div class="disqus" id="disqus_thread"></div>',document.getElementById("comment").innerHTML=p,window.guest=new a,window.comment=new i}}]);