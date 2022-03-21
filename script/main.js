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
        $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS;<br/>Датчики топлива.</div>");
        $(".controlSubtitle").html("<div>Местоположения, скорости, моточасов, посещения контрольных точек, соблюдения маршрута и расхода топлива в режиме реального времени.</div>");
    });
    $(".taxi").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/taxi.png');
        $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
    });
    $(".corp").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/corp.png');
        $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
    });
    $(".spec").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/spec.png');
        $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
    });
    $(".passenger").click(function (){
        $(".switch").removeClass('active');
        $(this).addClass('active');
        $(".truckPic").attr('src','images/passenger.png');
        $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
    });
});