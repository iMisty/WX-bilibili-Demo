import $ from 'jquery';
import { header } from '../assets/js/option';

function setHeader(){
    $('#header-title')
        .append(`<h1 class="header-title-text">${header.title}</h1>`)
        .append(`<p class="header-title-text">${header.text}</p>`);
}

export { setHeader }