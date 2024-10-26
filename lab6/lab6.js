const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const comments = document.getElementById("comment")
const commentlist = document.getElementById('comment-list')

const initLike = 1122;
const intitDislike = 550;

let likeCounter = initLike;
let dislikeCounter = intitDislike;

likeButton.innerText = '👍';
likeButton.innerText = '👎 ';

likeButton.addEventListener("click", ()=>{
    likeCounter ++;
    likeButton.innerText = '👍' + likeCounter;
    console.log(likeCounter)
    setCookie()
    console.log(document.cookie)
});

dislikeButton.addEventListener("click", () => {
    dislikeCounter ++;
    dislikeButton.innerText = '👎 ' + dislikeCounter;
    console.log(dislikeCounter)
    setCookie()
})

submit.addEventListener("click", () => {
    const element = document.createElement("p");
    element.innerText = comments.value.trim();
    commentlist.appendChild(element)
    comments.value = "";
})

clear.addEventListener("click", () => {
    comments.value = "";
})

function setCookie(){
    document.cookie = "voted=true; max-age=" + 60;
}


if(document.cookie === "voted=true"){
    likeButton.disabled = true;
    dislikeButton.disabled = true;
    submit.disabled = true;
}
