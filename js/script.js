document.addEventListener('DOMContentLoaded', () => {
    $('.body__slider').slick({
        variableWidth: true,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
    });



    const openBtn = document.querySelectorAll('.card__btn');
    const popup = document.querySelector('.popup');
    const bodyPopup = document.getElementById('#body');
    const btnClose = document.getElementById('btn-close');
    const btnCloseForm = document.getElementById('btn-close-form');
    const imgSource = document.createElement('img');
    const titleArray = {card1: 'Пуртупея "Пиппа"', card2: 'Портупея "Влади"', card3: 'Портупея "Джони Миллер"'};
    const popupTitle = document.querySelector('.popup__title');
    const popupImg = document.querySelector('.popup__img');

    
    for (let index = 0; index < openBtn.length; index++) {
        
        openBtn[index].addEventListener('click', (event) => {
            if(event.target.getAttribute("data-name") == 'card1') {
                popupTitle.innerHTML = titleArray.card1;
                imgSource.src = './img/card-img_1.png';
                popupImg.appendChild(imgSource);
            };
            if(event.target.getAttribute("data-name") == 'card2') {
                popupTitle.innerHTML = titleArray.card2;
                imgSource.src = './img/card-img_2.png';
                popupImg.appendChild(imgSource);
            };
            if(event.target.getAttribute("data-name") == 'card3') {
                popupTitle.innerHTML = titleArray.card3;
                imgSource.src = './img/card-img_3.png';
                popupImg.appendChild(imgSource);
            };
        });   
    }

    openBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('open');
            bodyPopup.classList.add('open'); 
        })
    })

    btnClose.addEventListener('click', () => {
        popup.classList.remove('open');
        bodyPopup.classList.remove('open');
    });
    btnCloseForm.addEventListener('click', () => {
        popup.classList.remove('open');
        bodyPopup.classList.remove('open');
    });


    
})
