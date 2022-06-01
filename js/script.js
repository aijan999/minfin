$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText : ["<img src='../images/icons/chevron-left.svg' alt=''>","<img src='../images/icons/chevron-right.svg' alt=''>"]
})

$(document).scroll(() => {
    let height = $(document).scrollTop();
    let width = $(document).width();

    if(width <= 768 && height > 0){
        $('.brand').addClass('fix');
        return
    }
    else if(width >= 768 && height < 0){
        $('.brand').removeClass('fix');
        return
    }

    if(width <= 1366 && height > 107){
        $('nav').addClass('fix');
        $('.brand').addClass('fix');
        return
    }
    else if(width >= 1366 && height < 107){
        $('nav').removeClass('fix');
        $('.brand').removeClass('fix');
        return
    }

    if(height > 145){
        $('nav').addClass('fix');
        $('.brand').addClass('fix');
    }
    else{
        $('nav').removeClass('fix');
        $('.brand').removeClass('fix');
    }
})

let options = {
    series: [68511052.4, 22224506.3],
    labels: ['Доход', 'Расход'],
    chart: {
        type: 'donut',
        height: '160px',
    },
    colors: ['#1068B1', '#083C6F'],
    responsive: [
        {
            breakpoint: 769,
            options: {
                chart: {
                    type: 'donut',
                    height: '80px',
                },
                legend: {
                    position: 'left',
                    horizontalAlign: 'center',
                    fontSize: '8px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    offsetY: -28,
                    markers: {
                        width: 6,
                        height: 6,
                    },
                },
                plotOptions: {
                    pie: {
                        offsetX: 30,
                        offsetY: 0,
                        customScale: 1.25,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
                        },
                        donut: {
                            size: '50%',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '11px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: undefined
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        padding: 4,
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: '#fff',
                        opacity: 0.9,
                    },
                }
            }
        },
        {
            breakpoint: 1024,
            options: {
                chart: {
                    type: 'donut',
                    height: '90px',
                },
                legend: {
                    position: 'left',
                    horizontalAlign: 'center',
                    fontSize: '13px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    offsetY: -18,
                    markers: {
                        width: 8,
                        height: 8,
                    },
                },
                plotOptions: {
                    pie: {
                        offsetX: 35,
                        offsetY: 5,
                        customScale: 1.25,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
                        },
                        donut: {
                            size: '50%',
                        },
                    }
                },
            }
        },
        {
            breakpoint: 1205,
            options: {
                chart: {
                    type: 'donut',
                    height: '120px',
                },
                legend: {
                    position: 'left',
                    horizontalAlign: 'center',
                    fontSize: '13px',
                    fontFamily: 'Arial',
                    fontWeight: 400,
                    offsetY: -18,
                    markers: {
                        width: 8,
                        height: 8,
                    },
                },
                plotOptions: {
                    pie: {
                        offsetX: 40,
                        offsetY: 5,
                        customScale: 1.10,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
                        },
                        donut: {
                            size: '50%',
                        },
                    }
                },
            }
        }
    ],
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'left',
        horizontalAlign: 'center',
        fontSize: '15px',
        fontFamily: 'Arial',
        fontWeight: 400,
        offsetX: -14,
        labels: {
            colors: '#9FA5AD',
            useSeriesColors: false
        },
        markers: {
            width: 13,
            height: 13,
            offsetX: 1,
        },
        itemMargin: {
            horizontal: -10,
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 65,
            offsetY: 0,
            customScale: 1.1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            },
            donut: {
                size: '55%',
            },
        }
    },
    dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            colors: undefined
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
        },
    }
};

let chart_1 = new ApexCharts(document.querySelector("#economic-chart-1"), options);
chart_1.render();

let chart_2 = new ApexCharts(document.querySelector("#economic-chart-2"), options);
chart_2.render();

$('#economic-chart-1 .apexcharts-legend-text').ready(() => {
    $('#economic-chart-1 .apexcharts-legend-text').append('<p class="ms-lg-3 ms-md-2 apex-chart-info-text">68 511 052,4 тыс. сом</p>')
});
$('#economic-chart-2 .apexcharts-legend-text').ready(() => {
    $('#economic-chart-2 .apexcharts-legend-text').append('<p class="ms-lg-3 ms-md-2 apex-chart-info-text">68 511 052,4 тыс. сом</p>')
});

$('.navigation  .dropOut .sub_nav__items li').click(function(){
    let item = $(this);
    $('.navigation  .dropOut .sub_nav__items li').removeClass('active');
    if(item.hasClass('active')){
        item.removeClass('active');
    }
    else{
        item.addClass('active')
    }
});

(function($) {
    'use strict';

    var Nav = new hcOffcanvasNav('#main-nav', {
        disableAt: false,
        width: '100%',
        position: 'right',
        customToggle: '.MenuToggleButton',
        levelSpacing: 40,
        navTitle: 'All Categories',
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        labelBack: 'Назад'
    });

})();