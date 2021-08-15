$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 방향
        loop: true, //무한 반복
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        autoplay : {
            delay : 3000
        }
    });
});

//메인 네비게이션 //
$(function(){
    var $Main_active = $('.gnb > li');
  

    $Main_active.hover(function(e){
    e.preventDefault();
            
    $Main_active.removeClass('active');
    $(this).addClass('active');      
    })
  })

  //서브 네비게이션 //
  
  $(function(){
    var $Sub_active = $('#Sub1_contents .Sub_GNB > li');

    $Sub_active.hover(function(e){
    e.preventDefault();
            
    $Sub_active.removeClass('active');
    $(this).addClass('active');      
    })
  });    
  
  $(function(){
    var $Sub_active = $('#Sub1_contents .Sub_GNB > li');

    $Sub_active.hover(function(e){
    e.preventDefault();
            
    $Sub_active.removeClass('active');
    $(this).addClass('active');      
    })
  });    

  //Tappanel 
  $(function(){
    var $Tabpanel = $('#Search .Tabpanel ul li')

    $Tabpanel.click(function(e){
    e.preventDefault();

     $Tabpanel.removeClass('active');
     $(this).addClass('active')

    })
  });


$(function(){
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('#CompanyInfo'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
      var scrolled = $window.scrollTop() >= page >= 100; //맨위스크롤하면
      $header.toggleClass(false); //클래스 토글
    });
  });
  


//Subpage scroll  //
$(function(){
  var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('#Sub1_contents'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
    var scrolled = $window.scrollTop() >= page >= 100; //맨위스크롤하면
    $header.toggleClass(false); //클래스 토글
  });
});

