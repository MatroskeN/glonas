//open modal function
document.querySelector('.getSolution').onclick = function (){
    document.querySelector('.mask').style.display = "flex";
}

document.querySelector('.xclose').onclick = function (){
    document.querySelector('.mask').style.display = "none";
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$( document ).ready(function() {
    //desktop tabs change function
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
//mobTabs change function
    $(".selectCar").change(function (){
        switch ($(this).val()){
            case 'truck':
                $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS;<br/>Датчики топлива.</div>");
                $(".controlSubtitle").html("<div>Местоположения, скорости, моточасов, посещения контрольных точек, соблюдения маршрута и расхода топлива в режиме реального времени.</div>");
            break;
            case 'taxi':
                $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
                $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
            break;
            case 'corp':
                $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
            break;
            case 'spec':
                $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
            break;
            case 'passenger':
                $(".equipmentSubtitle").html("<div>Абонентский терминал ГЛОНАСС/GPS</div>");
        $(".controlSubtitle").html("<div>работы и простоя ТС, маршрутов, пробега, стиля вождения, скоростного режима, нахождения в пределах заданной геозоны, сроков ТО</div>");
            break;
            default:
                console.log('Oops');
        }
    })
    //report tabs
    $(".reportTab").click(function (){
        $(".activeReport").removeClass('activeReport')
        $(this).addClass('activeReport')
    })

    $(".first").click(function (){
        $('.reportPic').attr('src', 'images/monitor/report1.png')
    })
    $(".second").click(function (){
        $('.reportPic').attr('src', 'images/monitor/report2.png')
    })
    $(".third").click(function (){
        $('.reportPic').attr('src', 'images/monitor/report3.png')
    })
    $(".fourth").click(function (){
        $('.reportPic').attr('src', 'images/monitor/report4.png')
    })
    $(".fifth").click(function (){
        $('.reportPic').attr('src', 'images/monitor/report5.png')
    })
    //mob reportTabs
    $(".selectReport").change(function (){
        switch ($(this).val()){
            case 'first':
                $('.reportPic').attr('src', 'images/monitor/report1.png')
                break;
            case 'second':
                $('.reportPic').attr('src', 'images/monitor/report2.png')
                break;
            case 'third':
                $('.reportPic').attr('src', 'images/monitor/report3.png')
                break;
            case 'fourth':
                $('.reportPic').attr('src', 'images/monitor/report4.png')
                break;
            case 'fifth':
                $('.reportPic').attr('src', 'images/monitor/report5.png')
                break;
            default:
                console.log('Oops');
        }
    })

    //faq tabs
    $(".passive").click(function (){
        $('.active').removeClass('active')
        $(this).addClass('active')
        $(this).removeClass('passive')
    });
});