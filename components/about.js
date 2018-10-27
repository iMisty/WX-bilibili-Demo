import $ from 'jquery';
import { about } from '../assets/js/option';

function setAbout(){
    $('#fifth-section').append(`
    <div class="section-title">
        <h2>${about.title}</h2>
    </div>
    <p class="header-title-text fifth-section-text">${about.text}</p>
    `
    );
}

export { setAbout };