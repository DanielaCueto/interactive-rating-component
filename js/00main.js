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
    `<div class="second-main"><img width="200px" height= "125px" src ="./images/illustration-thank-you.svg" alt="thank you" >
    <p class="selectedrating">You selected ${selectedRating} out of 5</p>
    <h2 clas="thankyou">Thank you!</h2>
    <p class="paragraph">We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>`

}




formulary.addEventListener('submit', handleSubmit)




