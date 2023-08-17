document.getElementById("btn").addEventListener("click", function () {
    const applyBtn = document.getElementById("btn");
  const priceText = document.getElementById("price").innerText;
  const priceTextElement = priceText.split(".");
  const price = parseFloat(priceTextElement[1]);
  const disc = price - price * 0.3;

const btn = document.createElement("button");
btn.style.padding = '10px';
btn.innerText = 'Rs.'+ disc;

const pay = document.querySelector('#pay');
pay.appendChild(btn);
applyBtn.setAttribute('disabled',true)

//   const finalPrice = document.getElementById("final-price");
//   finalPrice.innerText ='Rs.'+ disc;


});
document.getElementById("btn-2").addEventListener("click", function () {
    const priceText = parseFloat(document.getElementById("mrp").innerText);
const discountedPrice = priceText-priceText*0.3;
console.log(discountedPrice)
    const inputText = document.getElementById('coupon-text');
    const inputTextValue = inputText.value;

    const finalPrice = document.getElementById('discounted-price');
    if(inputTextValue === "DISC30"){
        finalPrice.style.visibility = "visible";
        finalPrice.innerText = "Rs." + discountedPrice;
    }else{
        alert("invalid coupon");
        finalPrice.style.visibility = "visible";
        finalPrice.innerText = "Rs." +  priceText;
    }
});

