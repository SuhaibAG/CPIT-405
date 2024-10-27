const xhrSearchBtn = document.getElementById("xhrSearch")
xhrSearchBtn.addEventListener("click", searchUsingXHR)

const fetchSearchBtn = document.getElementById("fetchSearch")
fetchSearchBtn.addEventListener("click", searchUsingFetchPromises)

const fetchAsyncAwaitBtn = document.getElementById("fetchAsyncAwaitSearch")
fetchAsyncAwaitBtn.addEventListener("click", searchUsingFetchAsyncAwait)

const searchQuery = document.getElementById("queryInput")

const API_URL = "https://api.unsplash.com/search/photos"
const Access_key = "onV-2LmQ8C2ZHFKGAo-qxS-UPvyIwV1E4FXUEti5rAc"

//search using XMLHTTP
function searchUsingXHR(){
    let queryTerm = searchQuery.value.trim();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL + "?query=" + queryTerm)
    xhr.setRequestHeader("Authorization", "Client-ID " + Access_key) 
   

    xhr.onreadystatechange = () => {
       if(xhr.readyState === 4 && xhr.status === 200){
            let ResponseText = xhr.responseText;
            let ResponseObj = JSON.parse(ResponseText);
            createImages(ResponseObj);
        }
    }
    xhr.send();
}


function createImages(data){
    console.log(data)
    const resultsElem = document.getElementById("results");
    for(let item of data.results){
        let imgElem = document.createElement("img");
        imgElem.src = item.urls.small;
        imgElem.alt = item.alt_description;
        resultsElem.appendChild(imgElem);
    }
}

async function searchUsingFetchAsyncAwait(){
    let queryTerm = searchQuery.value.trim();
    let response =  await fetch (API_URL + "?query=" + queryTerm, {
        method: "GET",
        headers:{
            "Authorization": "Client-ID " + Access_key
        }
    })
    
    if(response.ok){
        const ResponseObj = await response.json();
        createImages(ResponseObj)
        console.log(ResponseObj)
    }


}

function searchUsingFetchPromises(){
    let queryTerm = searchQuery.value.trim();
    fetch (API_URL + "?query=" + queryTerm, {
        method: "GET",
        headers:{
            "Authorization": "Client-ID " + Access_key
        }
    })
    .then(response => {
        if (!response.ok){
            throw Error("message")
        }
        let ResponseObj =  response.json();
        console.log(ResponseObj)
        
    })
    
}