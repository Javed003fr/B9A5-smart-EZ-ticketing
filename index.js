// const busLogoBtn = document.getElementById('bus-btn');
// busLogoBtn.addEventListener('click', bookingTicket);

// function bookingTicket(){
//     document.getElementById('bus-btn').classList.toggle("ticket-section");

//     console.log(bookingTicket)
// }
// alert()


    const seatNumbers = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'];
    console.log(seatNumbers);

    const seats = document.getElementsByClassName('seat-btn');
    let seatCount = 0;

    for(let i =0; i < seatNumbers.length; i++){
        const seatNum = seatNumbers[i];
        const seat = seats[i];
        seat.addEventListener("click", function(e){
            if(seatCount < 4){
                e.target.style.backgroundColor = '#1DD100';
                seatCount++;
            }
            else{
                alert('You are not allowed to book more than 4 seats.');
            }
            
        })
    }


const allSeatBtn = document.getElementsByClassName('seat-btn');
let count = 0;

for(const btn of allSeatBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;
        setInnerText('seat-count', count);
    })
}

function setInnerText(e, value){
    document.getElementById(e).innerText = value;
}

function seatLeftCount(){
    const leftSeat = document.querySelector('.seat-left');
    const seatsLeft = parseInt(seatsLeft);
    seatsLeft--;
}
const seatBtn = document.getElementsByClassName('seat-btn');
seatBtn.addEventListener("click", seatLeftCount);