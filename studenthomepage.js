let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.addEventListener('click', e => {
    sidebar.classList.toggle('active')
});

searchBtn.addEventListener('click', e => {
    sidebar.classList.toggle('active')
})

/************* Event *****************/ 

const viewDetails = document.querySelector('#events-section');
const eventTile = document.querySelector('.container-full-events');
const events = document.querySelector('.event-container');


viewDetails.addEventListener('click',  e => {
    if(e.target.classList.contains('details')) {
        eventTile.style.display = 'block';
        events.style.display = 'none';
    }
})

eventTile.addEventListener('click', e => {
    if(e.target.classList.contains('exit')) {
        eventTile.style.display = 'none';
        events.style.display = 'block';   
    }
});


const back = document.querySelector('#header > nav > li.back');

back.addEventListener('click', () => {
    events.style.display = 'none';
    frontPage.style.display = 'block';
})


/*****************/
const frontPage = document.querySelector('.event')
const viewAll = document.querySelector('#browse-by-category > div.button-event > button');

viewAll.addEventListener('click', () => {
    
    events.style.display = 'block';
    frontPage.style.display = 'none';
})


