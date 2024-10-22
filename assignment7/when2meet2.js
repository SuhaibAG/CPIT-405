const startTimeSelect = document.getElementById('start-time');
const endTimeSelect = document.getElementById('end-time');

let startHour = 8
let endHour = 18
populateDropDown(startTimeSelect, startHour)
populateDropDown(endTimeSelect, endHour)

function populateDropDown(selectElem, value){
    for (let index = 0; index < 24; index++) {
        let optionElement = document.createElement("option")
        let hour = index % 12 === 0? 12: index % 12;
        hour +=':00' 
        hour += index<12? ' AM': ' PM'
        optionElement.text = hour;
        optionElement.value = index;
        if(index === value){
            optionElement.selected = true;
        }
        selectElem.appendChild(optionElement)
    }
}

startTimeSelect.addEventListener('change', function(){
    startHour = parseInt(this.value)
    createTable();
})

endTimeSelect.addEventListener('change', function(){
    startHour = parseInt(this.value)
    createTable();
})

function createTable(){
    const location = document.getElementById('timeTable')

    let tableHTML = '<table><thead><tr><th></th>'
    const days = ["Sunday", "Monday" , "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    
    days.forEach(day => {
        tableHTML += `<th class="day-header"> ${day}</th>`
        
    })


    tableHTML += '</tr></thead><tbody>'
    console.log(startHour)
    console.log(endHour)
    for (let i = startHour; i <= endHour; i++) {
        let hour = i % 12 === 0? 12: i % 12;
        hour +=':00' 
        hour += i<12? ' AM': ' PM'

        tableHTML += `<tr> <td class ="time-label>${hour}</td?>`
        days.forEach(day =>{
            tableHTML +=`
            <td class="time-slot"
                onclick="toggleTimeSlot(this)"
                data-day="${day}"
                data-time="${hour}"
            </td>
            `;    
        })
        tableHTML+= "</tr>"
    }

    tableHTML += '</tbody></table>'
    location.innerHTML = tableHTML;
}

function toggleTimeSlot(tdelem){

}

createTable();