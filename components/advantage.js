import $ from 'jquery';
import { advantage } from '../assets/js/option';

function setAdvantage(){
    for (let i = 0;i < advantage.length;i++){
        $('#second-section').append(`
        <article>
            <i class="fa fa-4x ${advantage[i].icon}"></i>
            <h3>${advantage[i].title}</h3>
            <p>${advantage[i].text}</p>
        </article>
        `);
    }
}

export { setAdvantage }