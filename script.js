let selectedTask = null;

function selectTask(taskNumber) {
    selectedTask = taskNumber;

    task(taskNumber);
}

function task(taskNumber) {

    switch(taskNumber) {
        case 1:
            console.log("Executing Task 1");

            let country = prompt("Країна доставки?", '').trim();
            let price = prompt("Ціна товару?", '').trim();
            let deliveryFee = prompt("Ціна доставки?", '').trim();

            function getShippingMessage(country, price, deliveryFee) {
                if(country && isNaN(country) && !isNaN(price) && !isNaN(deliveryFee)){
                    return `Shipping to ${country} will cost ${+price + +deliveryFee} credits`;
                }else {
                    return "Error: Enter a valid country name and numeric values for price and delivery fee.";
                }
                
            }
            console.log(getShippingMessage(country, price, deliveryFee));
            break;
        case 2:
            console.log("Executing Task 2");
            
            let quantity = prompt("Кількість?", '');
            let pricePerDroid = prompt("Ціна за один?", '');
            let customerCredits = prompt("Сума коштів на рахунку?", '');

            function makeTransaction(quantity, pricePerDroid, customerCredits) {
                let totalPrice = quantity * pricePerDroid;

                if (totalPrice > customerCredits) {
                    return "Insufficient funds!";
                } else {
                    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
                }
            }

            console.log(makeTransaction(quantity, pricePerDroid, customerCredits));
            break;
        case 3:
            console.log("Executing Task 3");

            let firstArray = prompt("Введіть елементи першого масиву, розділяючи їх комами", '').split(',');
            let secondArray = prompt("Введіть елементи другого масиву, розділяючи їх комами", '').split(',');
            let maxLength = parseInt(prompt("Введіть максимальну довжину масиву", ''));

            function makeArray(firstArray, secondArray, maxLength) {
                let combinedArray = firstArray.concat(secondArray);

                if(combinedArray.length < maxLength) {
                    return combinedArray;
                } else {
                    let truncatedArray = combinedArray.slice(0, maxLength);
                    return truncatedArray;
                }
            }

            console.log(makeArray(firstArray, secondArray, maxLength));
            break;
        case 4:
            console.log("Executing Task 4");

            let A = prompt("Введіть 10 елементів першого масиву, розділяючи їх комами", '').split(',').map(Number);
            let B = prompt("Введіть 10 елементів другого масиву, розділяючи їх комами", '').split(',').map(Number);

            let C = [];

            function createArrayC(A, B) {

                for(let i = 0; i < 10; i++) {
                    if(A[i] != B[i]) {
                        C[i] = 1 / (A[i] - B[i]);
                    } else {
                        C[i] = 1;
                    }
                }
                return C;
            }

            console.log(createArrayC(A, B));

            function swapFirstAndMax(C) {
                let maxNumber = Math.max(...C);
                let maxIndex = C.indexOf(maxNumber);
                
                if(maxIndex !== 0) {
                    let temp = C[0];
                    C[0] = C[maxIndex];
                    C[maxIndex] = temp;
                }

                return C;
            }

            console.log(swapFirstAndMax(C));

            function bubbleSort(C) {
                for(let i = 0; i < C.length - 1; i++) {
                    for(let j = 0; j < C.length - 1; j++) {
                        if(C[j] > C[j + 1]) {
                            let tmp = C[j];

                            C[j] = C[j + 1];
                            C[j + 1] = tmp;
                        }
                    }
                }
                return C;
            }

            console.log(bubbleSort(C));
            break;
        case 5:
            console.log("Executing Task 5");

            document.getElementById("editorSection").style.display = "block";
            break;
        default:
            console.log("Invalid Task");
    }
}

function toggleEditorVisibility() {
    const editorSection = document.getElementById("editorSection");
    editorSection.style.display = (editorSection.style.display === "none" || editorSection.style.display === "") ? "block" : "none";
}

function applyStyle(style) {
    let editorText = document.getElementById("editorText");
    let formattedText = document.getElementById("formattedText");
    
    switch (style) {
        case 'bold':
            formattedText.style.fontWeight = formattedText.style.fontWeight === 'bold' ? 'normal' : 'bold';
            break;
        case 'italic':
            formattedText.style.fontStyle = formattedText.style.fontStyle === 'italic' ? 'normal' : 'italic';
            break;
        case 'underline':
            formattedText.style.textDecoration = formattedText.style.textDecoration === 'underline' ? 'none' : 'underline';
            break;
    }
    formattedText.innerText = editorText.value;
}

function applyColor(color) {
    const formattedText = document.getElementById("formattedText");
    formattedText.style.color = color;
}

function toggleCase() {
    const formattedText = document.getElementById("formattedText");
    const isUpperCase = formattedText.innerText === formattedText.innerText.toUpperCase();
    formattedText.innerText = isUpperCase ? formattedText.innerText.toLowerCase() : formattedText.innerText.toUpperCase();
}

document.getElementById("editorText").addEventListener("input", updateFormattedText);

function updateFormattedText() {
    document.getElementById("formattedText").innerText = document.getElementById("editorText").value;
}
