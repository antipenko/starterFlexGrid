import css from '../css/style.scss';
import $ from 'jquery';
import slick from 'slick-carousel';

function app() {
    "use strict";
    $(document).ready(function () {
        //announce slider on home page
        $('.announces-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // news slider on home page
        $('.news-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.vb-header').addClass('sticky');
        }
        else {
            $('.vb-header').removeClass('sticky');
        }
    });
}

window.addEventListener('load', app);