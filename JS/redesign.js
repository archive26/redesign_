$(document).ready(function(){

    // let count = 0;
    // $(".btnNext").click(function(e){
    //     e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
    //     count++;
    //     if(count>6){
    //         count=0;
    //     }
    //     $(".main_train").css("transform","translateY("+(count*-20)+"%)")
    // })

    // $(".btnPrev").click(function(e){
    //     e.preventDefault()
    //     count--;
    //     if(count<0){
    //         count=6;
    //     }
    //     $(".main_train").css("transform","translateY("+(count*-20)+"%)")
    // })
    
    // let timer = setInterval(function(){
    //     count++
    //     if(count>6){count=0;} 
    //     moveSlider(count)
    // },5000)

    // $(".main_station").mouseover(function(){
    //     clearInterval(timer)
    // })

    // $(".main_station").mouseout(function(){
    //     timer = setInterval(function(){
    //     //let timer 을 만들어주면 마우스를 뗄 때마다 위에 정의한 timer기능이 실행됨. 그러므로 let을 지워준다.(지역변수/전역변수)
    //         count++
    //         if(count>6){count=0} 
    //         moveSlider(count)
    //     },5000)
    // })

    // function moveSlider(idx){
    //     $(".main_train").css("transform","translateY("+( -20*idx)+"%)")
    // }
    $(function () {
        var prevScrollTop = 0;
    
        document.addEventListener("scroll", function () {
    
          var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
    
          if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
          // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
          else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
          prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
    
        })
    })

    $(document).ready(function(){
      $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
      })
    })

    $(document).ready(function(){
    $(".tabMenu>dd").click(function(){
      $(".tabMenu>dd").removeClass("on")
      $(this).addClass("on")
      })
    })

})

