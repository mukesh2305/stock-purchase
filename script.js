var initalPrice = document.querySelector("#intial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);
function submitHandler() {
    var ip = initalPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfilAndLoss(ip, qty, curr);
}
function calculateProfilAndLoss(intial, quantity, current) {
    let flag = 0;
    let message;
    let color = "";
    if (intial && quantity && current) {
        if (intial > current) {
            var loss = Math.abs((intial - current) * quantity).toFixed(4);
            var lossPrecentage = Math.abs((loss / intial) * 100).toFixed(4);
            message = `Hey the loss is ${loss} and the precent is ${lossPrecentage}%`;
            color = "red";

        } else if (current > intial) {
            var profit = Math.abs((current - intial) * quantity).toFixed(4);
            var profitPrecentage = Math.abs((profit / intial) * 100).toFixed(4);
            message = `Hey the profit is ${profit} and the precent is ${profitPrecentage}%`;
            color = "darkgreen";
        } else {
            message = "No pain no gain and no gain No pain";
            color = "gray";
        }
    }
    else {
        flag = flag + 1;
        message = "please fill out all the fees";
    }
    showOutput(message, flag, color);
}

function showOutput(message, flag, color) {
    if (flag === 1) {
        alert(message);
    }
    else {
        outputBox.style.color = color;
        outputBox.innerText = message;
    }
}
