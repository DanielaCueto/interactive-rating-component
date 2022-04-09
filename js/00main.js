/*- Select and submit a number rating
- See the "Thank you" card state after submitting a rating*/
'use strict'; 


const container = document.querySelector('.main')
const formulary = document.querySelector('form')

function handleSubmit(ev){
    ev.preventDefault() 
    const formData = new FormData (formulary)
    console.log(formData);
    const selectedRating = formData.get('select'); 
    console.log(selectedRating);
    container.innerHTML = 
    `<div class="main"><img src ="./images/illustration-thank-you.svg" alt="thank you" >
    <p>You selected ${selectedRating} out of 5</p>
    <h2>Thank you!</h2>
    <p>We apreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
    </div>`

}




formulary.addEventListener('submit', handleSubmit)




