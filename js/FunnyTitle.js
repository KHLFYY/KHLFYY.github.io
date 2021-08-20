<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '怎么不看我了Σ(っ°Д°;)っ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '欢迎回来ヽ(･ω･´)--'+ OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });