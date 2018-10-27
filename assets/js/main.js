import $ from 'jquery';
import css from '../css/style.css';
import { setTemplate } from './template';

$(document).ready(() => {
    setTemplate();
});
$(document).scroll(function () {
    let sTop = $(this).scrollTop();
    let ft = $("#first-section").offset().top - 40;
    
    if (sTop > ft) {
        $('.header-nav').css({'background-color':'#fff','box-shadow':'0 2px 12px rgba(0,0,0,.18)'});
        $('.header-logo-name').css('color','rgba(0,0,0,.54)');
        $('.header-nav-list li a').css('color','rgba(0,0,0,.54)');
    }
    if (sTop < ft) {
        $('.header-nav').css({'background-color':'transparent','box-shadow':'none'});
        $('.header-logo-name').css('color','#fff');
        $('.header-nav-list li a').css('color','#fff');
    }
});

