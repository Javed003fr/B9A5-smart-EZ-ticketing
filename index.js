// const busLogoBtn = document.getElementById('bus-btn');
// busLogoBtn.addEventListener('click', bookingTicket);

// function bookingTicket(){
//     document.getElementById('bus-btn').classList.toggle("ticket-section");

//     console.log(bookingTicket)
// }
// alert()

// function getSeatNumber(){
//     const seatNumbers = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4']
//     console.log(seatNumbers);
// }

// function seatSelect(){
//     console.log("seat select korsi")
// }

const allSeatBtn = document.getElementsByClassName('seat-btn');
let count = 0;

for(const btn of allSeatBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;

        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes)

        setInnerText('seat-count', count);
    })
}

function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
}



// const allSeats = document.getElementsByClassName("seat-left")
// let availableSeats = 40;
// for(const seat of allSeats){
//     seat.addEventListener("click", function(elementId) {
//         availableSeats -= 1;
//         document.getElementById("total-seats").innerText = availableSeats;
//         console.log(availableSeats);
//     })
// }