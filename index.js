const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.far');
const colorsArr = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

upadateRating(0);

starsEl.forEach((starEl,index) => {
    starEl.addEventListener('click', () => {
        upadateRating(index);
    });
});

function upadateRating(index){
    starsEl.forEach((starEl,idx) => {
        if(idx < index + 1){
            starEl.classList.add('active');
        }else{
            starEl.classList.remove('active');
        }
    });

    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArr[index];
    })
}