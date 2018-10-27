import $ from 'jquery';
import { introduce } from '../assets/js/option';

function setIntroduce(){
    $('#first-section').append(`<p>${introduce.text}</p>`);
}

export { setIntroduce }