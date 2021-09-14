/*function increaselikes(){
    let numberin = document.querySelector('.increaseNum');
    console.log( numberin.target.value );
}*/

/*let i = 0;
function increaselikes(){
    let numberin = document.querySelectorAll('.increaseNum').values = i++;
}*/

/*let i = 0;
function increaselikes(i, element){
    i++
    let increase = document.querySelector('.likeButton');
    document.getElementsByClassName('.increaseNum').value = i;
}*/

/*let increase = document.querySelector('.likeButton');*/

/*for( let i = 0; i < increase.length; i++){
    increase[i].addEventListener("click", increaselikes);
}*/

function increaselikes(){
    let numberin = document.querySelector('.increaseNum');
    let numberLikes = parseInt(numberin.innerHTML);
    numberLikes += 1;
    numberin.innerHTML = numberLikes;
}
