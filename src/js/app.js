import css from '../css/style.scss';
import $ from 'jquery';
import slick from 'slick-carousel';

function app() {
    "use strict";
    $(document).ready(function () {
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
    });

}

window.addEventListener('load', app);