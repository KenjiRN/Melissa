$('#slowscroll').click(function() {
    $('html, body').animate(
   { scrollTop:0 }, 5000);
        return false;
}
);

/*----------------------------------
11 May 15
I'll be fixing this soon, starting with:
1. Responsive type px to rem: https://offroadcode.com/prototypes/rem-calculator/
2. Picturefill and make img responsive
3. Update the content!

Other considerations: 
1. parallax and mobile: https://ihatetomatoes.net/make-parallax-website-responsive/
2. social links look clumsy in the way they expand
3. and general love! 2014 was so yesterday!

Big thanks to:
1. Andrew for parallax framework: https://codepen.io/designbyremedy/pen/ouHca
2. Paul for tooltips: https://codepen.io/PerryC/pen/wGeAb
3. Sunny for social icon idea: https://codepen.io/SunnyWu/pen/pHLor?editors=110
4. Font Awesome for being Awesome
5. Unsplash for free CDN images: http://unsplash.com/

-------------------------------*/