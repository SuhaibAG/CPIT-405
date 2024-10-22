const xhrSearchBtn = document.getElementById("xhrSearch")
xhrSearchBtn.addEventListener("click", searchUsingXHR)

const fetchSearchBtn = document.getElementById("fetchSearch")

const fetchAsyncAwaitBtn = document.getElementById("fetchAsyncAwaitSearch")

const searchQuery = document.getElementById("queryInput")

const API_URL = "https://api.unsplash.com/search/photos"
const Access_key = "onV-2LmQ8C2ZHFKGAo-qxS-UPvyIwV1E4FXUEti5rAc"

//search using XMLHTTP
function searchUsingXHR(){
    let queryTerm = searchQuery.value.trim();
    const xhr = new XMLHttpRequest();

    xhr.open("GET", API_URL + "?query=" + queryTerm)
    xhr.setRequestHeader("Authorization", "Client-ID " + Access_key) 
    if(xhr.onreadystatechange == 4 && xhr.status == 200){
        let ResponseText = xhr.responseText;
        let ResponseObj = JSON.parse(ResponseText);
        createImages(ResponseObj);
    }
    xhr.send();
}


function createImages(data){
    const resultsElem = document.getElementById("results");
    for(let item in data.results){
        let imgElem = document.createElement("img");
        imgElem.src = item.urls.small;
        resultsElem.appendChild(imgElem);
    }
}

function searchUsingFetchAsyncAwait(){
    let queryTerm = searchQuery.value.trim();
    let response =  fetch (API_URL, {
        method: "GET",
        headers:{
            "Authorization": "Client-ID " + Access_key
        }
    })
    if(response.ok){
        const ResponseObj =  response.json
    }


}