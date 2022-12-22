const billAmount = document.querySelector('#bill-Amount');
// const nextbutton = document.querySelector("#nxt-button");
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// nextbutton.addEventListener("click",( ()=> {



    
checkButton.addEventListener("click",  validateBillAndCashAmount) ;

function validateBillAndCashAmount(){
    hideMessage();
  
      if( billAmount.value  > 0 ) {

                   if(cashGiven.value > billAmount.value){
  
                       const amountToBeReturned = cashGiven.value - billAmount.value;
                    //    console.log(billAmount.value);
                       calculateChange(amountToBeReturned);
  
                   }
                   else if( cashGiven.value === billAmount.value){
                       showMessage("Bill Payment Done!!")
                   }
            
                   else {
                      showMessage ('Do you wanna wash plates !!!!!');
                     
                   }
               
        }  
                else {
  
          showMessage ('Invalid Bill Amount');
          
      }
  }
  



function calculateChange(amountToBeReturned){
// console.log("i am function");
 for (let i = 0; i<availableNotes.length; i++) {

     const numberOfNotes = Math.trunc( amountToBeReturned / availableNotes[i] );
     amountToBeReturned = amountToBeReturned % availableNotes[i];
     noOfNotes[i].innerHTML = numberOfNotes;
        //  console.log(noOfNotes);
 }

};


function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

}
