$(document).ready(function(){
    var slickScript = document.createElement('script');
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    $('head').prepend(slickScript);

    var slickStyle = document.createElement('link');
    slickStyle.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
    slickStyle.rel = 'stylesheet';
    slickStyle.type = 'text/css';
    document.head.appendChild(slickStyle);

    $('body').append('<div class="your-class"><div>your content</div><div>your content</div><div>your content</div></div>');
    setTimeout(function(){
        $('.your-class').slick({
            rtl: true
        });
    }, 1000);
    
          
});