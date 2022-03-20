document.querySelector('.getSolution').onclick = function (){
    document.querySelector('.mask').style.display = "flex";
}

document.querySelector('.xclose').onclick = function (){
    document.querySelector('.mask').style.display = "none";
}
$( document ).ready(function() {
    $(".cargo").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/truck.png');
    });
    $(".taxi").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/taxi.png');
    });
    $(".corp").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/corp.png');
    });
    $(".spec").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/spec.png');
    });
    $(".passenger").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/passenger.png');
    });
});