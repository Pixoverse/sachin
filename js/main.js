'use strict'; 


/*----------------------------------------------------------------------*/
/* =  Preloader
/*----------------------------------------------------------------------*/
$(window).on('load', function () {

  gsap.to($('.preloader .circle'), .7, {strokeDashoffset:0, delay:1 });
  //gsap.to('.preloader .profile-image', {duration: 4, rotationX:360, delay:1.7, ease:Cubic.easeOut});
  
  gsap.to($('.loading'), 0.7, {y:-100, autoAlpha:0, delay:1.7 });
  gsap.to($('#loader'), 3, {y:-3000, delay:2, ease:'easeOutExpo' } );
  
  setTimeout(function(){ $('#loader').remove(); }, 3000);
 

});

function ajaxLoad(){

  header_options();
  testimonialSlider();
  workslider();
  lightbox();
  ContactForm(); 
  videoPlay();
  charts();
  isotope();
  contactmap();
  setTimeout(() => {
    scrollAnimation();
  }, 1000);
  setTimeout(() => {
   typed ();
   clientSlider();
  }, 250);
}

setTimeout(() => {
  
ajaxLoad();
}, 1000);


  // BARBA JS
  function delay(n) {
    n = n || 500;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);


    });
  }

  barba.init({
    transitions: [{
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(700);
        done();
      },

      async enter(data) {
        ajaxLoad();
          scrollbar.scrollTo(0, 0, 0);
        gsap.to(".page-cover", {'margin-top': '0px', autoAlpha:1, delay:.4, ease: Power3.easeOut });
        $('.page-cover').addClass('yoket');
        setTimeout(() => {
          $('.page-cover').removeClass('yoket');
        }, 1500);
      },
    }, ],
  });

  function pageTransition() {
    var tl = new gsap.timeline({
      yoyo: false,
      reversed: false
    });
    tl.to(".page-cover", .5, {'margin-top': '-50px', autoAlpha:0, ease: Power3.easeOut },"Start");
  }




// MAGNIFIC POPUP    
function lightbox() {
  if( $('.lightbox').length ){
    $('.lightbox').attr('data-barba-prevent', 'all');
    $('.lightbox').magnificPopup({
          type:'image',
          gallery:{enabled:true},
          zoom:{enabled: true, duration: 300}
      });
  }
}




// VIDEO HOVER PLAY
function videoPlay(){
  if($('.video-wrapper').length){
    setTimeout(() => {
      $('video').get(0).pause();
    }, 10);
  }


  if($('.grid-item.grid-video').length){
    $('.grid-video').on("mouseenter",  function() {
      $(this).find('video').get(0).play();
    }).on("mouseleave", function(){
      $(this).find('video').get(0).pause();
    });
  }

  if($('.work-hero').length){
    setTimeout(() => {
      $('.work-hero').find('video').get(0).play();
    }, 10);
  }


}


  
  // SCROLL ANIMATION
  function scrollAnimation() {
  if( $('.scroll-animation-on').length ){

  var controller = new ScrollMagic.Controller();
  $('.classic-animation').each(function(){
  var animationDelay = $(this).data('delay') ? $(this).data('delay') : 0;
  var animationDuration = $(this).data('duration') ? $(this).data('duration')  : 1;


    // build a tween
    var tween = gsap.to($(this), animationDuration, {autoAlpha: 1, y:0, scale:1, delay: animationDelay, ease:"expo.out"});
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      reverse: false,
      offset: -500,
    })
    .setTween(tween)
    .addTo(controller)
  })

  $('.clip-animation').each(function(){
    var animationDelay = $(this).data('delay') ? $(this).data('delay') : 0;
    var animationDuration = $(this).data('duration') ? $(this).data('duration')  : 1;

    // build a tween
    var tween = gsap.to($(this), animationDuration, { clipPath: "polygon(-2% 0%, 100% 0%, 105% 100%, 0% 100%)", delay: animationDelay, ease:"expo.out"});
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      reverse: false,
      offset: -650,
    })
    .setTween(tween)
    .addTo(controller)
  })

  $('.scale-animation').each(function(){
    var animationDelay = $(this).data('delay') ? $(this).data('delay') : 0;
    var animationDuration = $(this).data('duration') ? $(this).data('duration')  : 1;

    // build a tween
    var tween = gsap.to($(this), animationDuration, { scaleY:1, autoAlpha:1, y:0, delay: animationDelay, ease:"expo.out"});
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      reverse: false,
      offset: -500,
    })
    .setTween(tween)
    .addTo(controller)
  })

}

}

//CARTS 
function charts() {

  if( $('.chart').length ){
    if ( $(window).width() >= 991  ){
    $(window).on('resize', function(){
      if ( $(window).width() <= 991  ){
        location.reload();
      }
    });
   }else{
    $(window).on('resize', function(){
      if ( $(window).width() >= 991  ){
        location.reload();
      }
    });
   }
  }

  $(".chart").each(function() {

    if ( $(window).width() >= 991  ){
      var charSize = 150;
      var charLine = 8;
    }else{
      var charSize = 100;
      var charLine = 6;
    }

    var bartrack = '#000';
    if( $('body').hasClass('dark-version') ){
      var bartrack = '#363636';
    }

    $(".chart").easyPieChart({
      barColor:  "#D1ED5D",
      scaleColor: "#D1ED5D",
      trackColor: bartrack,
      size: charSize,
      lineWidth: charLine,
      lineCap: "square",
      onStep: function(a, b, c) {
          $(this.el).find(".percent").text(Math.round(c));
      }
    });
  });
  
  
      $(".skill-list li").each(function() {
        var percentBar = $(this).find('.percentage');
        gsap.to(percentBar, {  'width':percentBar.attr("data-percent"), duration:2, delay:2, ease:Power2.easeOut  });
    });
    
}


// HOME TYPED JS
function typed () {
  if ($('.element').length) {
    var animateSpan	= jQuery('.element');
var textWords	= animateSpan.data('values');
var textArray	= textWords.split(',');
var html	=[];
var back_delay = $('.element').data('backdelay') * 1000;

for(var i = 0;i < textArray.length;i++){
html.push(textArray[i]);
}
    
    $('.element').each(function () {
        $(this).typed({
          strings: html,
            loop: $(this).data('loop') ? $(this).data('loop') : false ,
            backDelay: back_delay,               
            typeSpeed: 20,
        });
    });
  }
}

  //CLIENT SLIDER JS
  function clientSlider(){

    $(".bxslider").bxSlider({
      minSlides: 1,
      maxSlides: 5,
      slideMargin: 0,
      ticker: true,
      infiniteLoop: true,
      speed: 30000
    });

  }


  // SMOOTH SCROLL JS


  var onur = 0.1;
  if( $(window).width() <= 1024 ){
    var onur = 0.02;
  }

    var scrollbar = Scrollbar.init(
      document.getElementById('page-scroll'), { 
        damping: onur,  
      });

  if( $('.onepage').length ){

    $('header nav ul li a').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");            
      $('header nav ul li a').removeClass('active');          
      $(this).addClass('active');
      var target = $(this).attr("href");
      target = $(target);
      scrollbar.scrollTo(0, target.position().top, 1000);
  });

  }

// fixed item
if($('#fixed').length   ){
      scrollbar.addListener(({ offset }) => {  
        if (offset.y >= 45 ){
          fixed.style.top = offset.y + 'px';
        }else{
          $('header').removeAttr('style');
        }
      });
}

if( $('.onepage').length ){
  scrollbar.addListener(({ offset }) => {  
  var scrollPos = offset.y;
  $('header nav ul li a').each(function () {
  var currLink = $(this);
  var refElement = $(currLink.attr("href"));
  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('header nav ul li a').removeClass("active");
      currLink.addClass("active");
  }
  else{
      currLink.removeClass("active");
  }
  });
});
} 

  function header_options(){
    var headerAnimation = new gsap.timeline({yoyo: false,reversed: true });
    headerAnimation.pause();
    headerAnimation.to($('header nav ul li'), .4, { autoAlpha:1, x:0, stagger:0.05, ease:Power2.easeOut });

    $('.hamburger, header ul li a').on('click', function(){
      headerAnimation.reversed() ? headerAnimation.play() : headerAnimation.reverse();
      $('body').toggleClass('header-is-active');
    });
  }  


      // isotope
      function isotope(){
        if ( $('.masonry').length ){
        var $container = $('.masonry');  
        $container.isotope({
          itemSelector: '.grid-item',
          sortBy : 'parseInt',
          gutter:0,
          transitionDuration: "0.5s",
          columnWidth: '.grid-item'
        });
        $('.portfolio_filter ul li a').on("click", function(){
          $(".portfolio_filter ul li a").removeClass("select-cat");
          $(this).addClass("select-cat");        
          var selector = $(this).attr('data-filter');
          $(".masonry").isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false,
        }
      });
          return false;
      });   
          
    }
  }



  // SWIPER JS
function workslider(){
  var swiper = new Swiper(".work-carousel", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
          delay: 3000,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
}

//Love BG

var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize the GL context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL.");
}

//Time
var time = 0.0;

//************** Shader sources **************

var vertexSource = `
attribute vec2 position;
void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}
`;

var fragmentSource = `
precision highp float;

uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;

#define POINT_COUNT 8

vec2 points[POINT_COUNT];
const float speed = -0.5;
const float len = 0.25;
float intensity = 1.3;
float radius = 0.008;

//https://www.shadertoy.com/view/MlKcDD
//Signed distance to a quadratic bezier
float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){    
	vec2 a = B - A;
	vec2 b = A - 2.0*B + C;
	vec2 c = a * 2.0;
	vec2 d = A - pos;

	float kk = 1.0 / dot(b,b);
	float kx = kk * dot(a,b);
	float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
	float kz = kk * dot(d,a);      

	float res = 0.0;

	float p = ky - kx*kx;
	float p3 = p*p*p;
	float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
	float h = q*q + 4.0*p3;

	if(h >= 0.0){ 
		h = sqrt(h);
		vec2 x = (vec2(h, -h) - q) / 2.0;
		vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
		float t = uv.x + uv.y - kx;
		t = clamp( t, 0.0, 1.0 );

		// 1 root
		vec2 qos = d + (c + b*t)*t;
		res = length(qos);
	}else{
		float z = sqrt(-p);
		float v = acos( q/(p*z*2.0) ) / 3.0;
		float m = cos(v);
		float n = sin(v)*1.732050808;
		vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
		t = clamp( t, 0.0, 1.0 );

		// 3 roots
		vec2 qos = d + (c + b*t.x)*t.x;
		float dis = dot(qos,qos);
        
		res = dis;

		qos = d + (c + b*t.y)*t.y;
		dis = dot(qos,qos);
		res = min(res,dis);
		
		qos = d + (c + b*t.z)*t.z;
		dis = dot(qos,qos);
		res = min(res,dis);

		res = sqrt( res );
	}
    
	return res;
}


//http://mathworld.wolfram.com/HeartCurve.html
vec2 getHeartPosition(float t){
	return vec2(16.0 * sin(t) * sin(t) * sin(t),
							-(13.0 * cos(t) - 5.0 * cos(2.0*t)
							- 2.0 * cos(3.0*t) - cos(4.0*t)));
}

//https://www.shadertoy.com/view/3s3GDn
float getGlow(float dist, float radius, float intensity){
	return pow(radius/dist, intensity);
}

float getSegment(float t, vec2 pos, float offset, float scale){
	for(int i = 0; i < POINT_COUNT; i++){
		points[i] = getHeartPosition(offset + float(i)*len + fract(speed * t) * 6.28);
	}
    
	vec2 c = (points[0] + points[1]) / 2.0;
	vec2 c_prev;
	float dist = 10000.0;
    
	for(int i = 0; i < POINT_COUNT-1; i++){
		//https://tinyurl.com/y2htbwkm
		c_prev = c;
		c = (points[i] + points[i+1]) / 2.0;
		dist = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));
	}
	return max(0.0, dist);
}

void main(){
	vec2 uv = gl_FragCoord.xy/resolution.xy;
	float widthHeightRatio = resolution.x/resolution.y;
	vec2 centre = vec2(0.5, 0.5);
	vec2 pos = centre - uv;
	pos.y /= widthHeightRatio;
	//Shift upwards to centre heart
	pos.y += 0.02;
	float scale = 0.000015 * height;
	
	float t = time;
    
	//Get first segment
  float dist = getSegment(t, pos, 0.0, scale);
  float glow = getGlow(dist, radius, intensity);
  
  vec3 col = vec3(0.0);

	//White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Pink glow
  col += glow * vec3(1.0,0.05,0.3);
  
  //Get second segment
  dist = getSegment(t, pos, 3.4, scale);
  glow = getGlow(dist, radius, intensity);
  
  //White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Blue glow
  col += glow * vec3(0.1,0.4,1.0);
        
	//Tone mapping
	col = 1.0 - exp(-col);

	//Gamma
	col = pow(col, vec3(0.4545));

	//Output to screen
 	gl_FragColor = vec4(col,1.0);
}
`;

//************** Utility functions **************

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
	gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform1f(widthHandle, window.innerWidth);
  gl.uniform1f(heightHandle, window.innerHeight);
}


//Compile shader and combine with source
function compileShader(shaderSource, shaderType){
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
  	throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
  }
  return shader;
}

//From https://codepen.io/jlfwong/pen/GqmroZ
//Utility to complain loudly if we fail to find the attribute/uniform
function getAttribLocation(program, name) {
  var attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find attribute ' + name + '.';
  }
  return attributeLocation;
}

function getUniformLocation(program, name) {
  var attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find uniform ' + name + '.';
  }
  return attributeLocation;
}

//************** Create shaders **************

//Create vertex and fragment shaders
var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

//Create shader programs
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

//Set up rectangle covering entire canvas 
var vertexData = new Float32Array([
  -1.0,  1.0, 	// top left
  -1.0, -1.0, 	// bottom left
   1.0,  1.0, 	// top right
   1.0, -1.0, 	// bottom right
]);

//Create vertex buffer
var vertexDataBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// Layout of our data in the vertex buffer
var positionHandle = getAttribLocation(program, 'position');

gl.enableVertexAttribArray(positionHandle);
gl.vertexAttribPointer(positionHandle,
  2, 				// position is a vec2 (2 values per component)
  gl.FLOAT, // each component is a float
  false, 		// don't normalize values
  2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
  0 				// how many bytes inside the buffer to start from
  );

//Set uniform handle
var timeHandle = getUniformLocation(program, 'time');
var widthHandle = getUniformLocation(program, 'width');
var heightHandle = getUniformLocation(program, 'height');

gl.uniform1f(widthHandle, window.innerWidth);
gl.uniform1f(heightHandle, window.innerHeight);

var lastFrame = Date.now();
var thisFrame;

function draw(){
	
  //Update time
	thisFrame = Date.now();
  time += (thisFrame - lastFrame)/1000;	
	lastFrame = thisFrame;

	//Send uniforms to program
  gl.uniform1f(timeHandle, time);
  //Draw a triangle strip connecting vertices 0-4
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  requestAnimationFrame(draw);
}

draw();


// SWIPER JS
function testimonialSlider(){
  var swiper = new Swiper(".testimonial-carousel", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
          delay: 3000,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      },
      });
}



  //CONTACT FORM
  function ContactForm() {	
	
    if( jQuery('#contact-formular').length > 0 ){
      $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
          $('#message').hide();
          $('#submit').attr('disabled','disabled');		
          $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val()
          },
          function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null) $('#contactform').slideUp('slow');		
          }
        );		
        });		
        return false;		
      });		
  
        
    $("form .form-group input, form .form-group textarea,  form .form-group select").focus(function(){
      
      
        $(this).parents('.form-group').addClass('in');
      
        $('form .form-group input, form .form-group textarea,  form .form-group select').blur(function()
          {
            if( !$(this).val() ) {
              $(this).parents('.form-group').removeClass('in');
            }
          });
      });
    }
  
  }//End ContactForm





