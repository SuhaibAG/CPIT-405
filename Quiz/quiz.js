const makeList = document.getElementById("makeList");
let make = makeList.value;

makeList.addEventListener("change", () => {
    make = makeList.value;
    getModels(make);
});

async function getModels() {
    //  https://vpic.nhtsa.dot.gov/api/Home/Index/LanguageExamples
    // get the list of models for the selected make
    await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)
        .then((response) => response.json())
        .then((data) => {
            appendModels(data.Results);
        });
}



function appendModels(models) {
    const uiElem = document.getElementById("modelList");
    uiElem.innerHTML = "";
    for (const model of models) {
        const liElem = document.createElement("li");
        liElem.innerText = model.Model_Name;
        uiElem.appendChild(liElem);
        console.log(model.Model_Name);
    }
}