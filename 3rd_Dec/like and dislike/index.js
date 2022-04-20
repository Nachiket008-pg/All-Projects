// Code of adding likes and dislikes
let text = document.getElementById('counting');

let add_likes = document.getElementById('likes');

let sub_likes = document.getElementById('dislikes');

 let counting = 0;
 add_likes.addEventListener('click', () => {
     counting++;
     text.innerHTML = counting;
 })

 sub_likes.addEventListener('click', () => {
     counting--;
     text.innerHTML = counting;
 })