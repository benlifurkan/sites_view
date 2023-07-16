$(document).ready(function(){
    
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $('.button').fadeIn();
        }
        else{
            $('.button').fadeOut();
        }
    });

    $('.button').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    var copybutton1 = document.getElementById("copybutton1");
    var copycontainer1 = document.getElementById("copycontainer1");

    copybutton1.addEventListener("click", function() {
    var metin = copycontainer1.innerText;
  
    var textarea = document.createElement("textarea");
    textarea.value = metin;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    $("#copybutton1").click(function(){
        $("#copybutton1").css("display","none");
        $("#copybutton1text").css("display","block");
        setTimeout(function(){
        $("#copybutton1text").css("display","none");
        $("#copybutton1").css("display","block");
        }, 1500);
    });

    });









    var copybutton2 = document.getElementById("copybutton2");
    var copycontainer2 = document.getElementById("copycontainer2");

    copybutton2.addEventListener("click", function() {
    var metin = copycontainer2.innerText;
  
    var textarea = document.createElement("textarea");
    textarea.value = metin;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    $("#copybutton2").click(function(){
        $("#copybutton2").css("display","none");
        $("#copybutton2text").css("display","block");
        setTimeout(function(){
        $("#copybutton2text").css("display","none");
        $("#copybutton2").css("display","block");
        }, 1500);
    });

    });










    var copybutton3 = document.getElementById("copybutton3");
    var copycontainer3 = document.getElementById("copycontainer3");

    copybutton3.addEventListener("click", function() {
    var metin = copycontainer3.innerText;
  
    var textarea = document.createElement("textarea");
    textarea.value = metin;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    $("#copybutton3").click(function(){
        $("#copybutton3").css("display","none");
        $("#copybutton3text").css("display","block");
        setTimeout(function(){
        $("#copybutton3text").css("display","none");
        $("#copybutton3").css("display","block");
        }, 1500);
    });

    });









    var copybutton4 = document.getElementById("copybutton4");
    var copycontainer4 = document.getElementById("copycontainer4");

    copybutton4.addEventListener("click", function() {
    var metin = copycontainer4.innerText;
  
    var textarea = document.createElement("textarea");
    textarea.value = metin;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    $("#copybutton4").click(function(){
        $("#copybutton4").css("display","none");
        $("#copybutton4text").css("display","block");
        setTimeout(function(){
        $("#copybutton4text").css("display","none");
        $("#copybutton4").css("display","block");
        }, 1500);
    });

    });

});