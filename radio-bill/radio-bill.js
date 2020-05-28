// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var textTotalAddBtn = document.querySelector (".radioBillAddBtn");
var billTypeText = document.querySelector (".billItemTypeRadio");
var callTotal = document.querySelector (".callTotalTwo");
var smsTotal = document.querySelector (".smsTotalTwo");
var totalCost = document.querySelector  (".totalTwo");

var billTotal = 0;
var callsTotal = 0;
var smsTotal = 0;

function textTotalAddBtnClicked (){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 if (checkedRadioBtn){ 
var billItem = checkedRadioBtn.value;  
//var billItem = billItemType.trim ();
if (billItem === "call"){
billTotal += 2.75;
callsTotal += 2.75;
}
else if (billItem === "sms"){
billTotal += 0.75;
smsTotal += 0.75;
}
totalAddBtnClicked ()
}
}
function totalAddBtnClicked (){
callTotal.innerHTML = callsTotal.toFixed (2);
smsTotal.innerHTML = smsTotal.toFixed (2);
totalCost.innerHTML = billTotal.toFixed (2);

if (billTotal >= 50 ){
totalCost.classList.add ("danger");
}
else if (billTotal >= 30){
totalCost.classList.add ("warning");
}
} 
textTotalAddBtn.addEventListener("click", textTotalAddBtnClicked );