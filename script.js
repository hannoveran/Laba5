let selectedTask = null;


// lab5
function selectTaskLab5(taskNumber) {
    selectedTask = taskNumber;

    taskLab5(taskNumber);
}

function taskLab5(taskNumber) {

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



// Lab6
function selectTaskLab6(taskNumber) {
    selectedTask = taskNumber;

    taskLab6(taskNumber);
}

function taskLab6(taskNumber) {
    switch(taskNumber) {
        case 2:
            console.log("Executing Task 2");
            const shirts = [
                { productId: 1, name: 'shirt1', color: 'red', price: 100, },
                { productId: 2, name: 'shirt2', color: 'blue', price: 200, },
                { productId: 3, name: 'shirt3', color: 'orange', price: 300, },
                { productId: 4, name: 'shirt4', color: 'black', price: 400, }
            ];

            
            function getProductDetails(array, propertyName, valueToFind, success, error) {
                const foundProduct = array.find(obj => obj[propertyName] == valueToFind);
                if (foundProduct) return success(foundProduct)
                else error();
            }

            function successCallback(product) {
                return product;
            }

            function errorCallback() {
                console.log("Такого товару не існує!");
            }

            let id = prompt("id?", '');
            const result = getProductDetails(shirts, 'productId', id, successCallback, errorCallback);
            console.log(result);

            break;
        case 4:
            console.log("Executing Task 4");
            const concerts = {
                Київ: new Date("2020-04-01"),
                Умань: new Date("2025-07-02"),
                Вінниця: new Date("2020-04-21"),
                Одеса: new Date("2025-03-15"),
                Хмельницький: new Date("2020-04-18"),
                Харків: new Date("2025-07-10"),
            };

            const getFutureConcerts = concerts => {
                const currentDate = new Date();

                const futureConcerts = Object.entries(concerts)
                .filter(([city, date]) => date > currentDate) 
                .sort((a, b) => a[1] - b[1]) 
                .map(([city]) => city);

                return futureConcerts;
            }

            console.log(getFutureConcerts(concerts));
            break;
        case 6:
            console.log("Executing Task 6");
            
            const medicines = [
                { name: "Noshpa", price: 170 },
                { name: "Analgin", price: 55 },
                { name: "Quanil", price: 310 },
                { name: "Alphacholine", price: 390 },
            ];
            
            const discountedProducts = medicines.map((product, id) => {
                const discountedProduct = {
                    ...product,
                    id: id + 1,
                };

                if (product.price > 300) {
                    discountedProduct.price = product.price * 0.7 
                }
                
                return discountedProduct;
            });

            console.log(discountedProducts);

            break;
        case 8:
            console.log("Executing Task 8");
            
            function Storage(initialItems) {
                this.items = initialItems;
            }

            Storage.prototype.getItems = function() {
                return this.items;
            };

            Storage.prototype.addItem = function(item) {
                this.items.push(item);
            };

            Storage.prototype.removeItem = function(item) {
                const itemIndex = this.items.indexOf(item);
                if (itemIndex !== -1) {
                    this.items.splice(itemIndex, 1);
                }
            };


            const arr = ["apple", "banana", "mango"];
            const storage = new Storage(arr);

            console.log(storage.getItems()); 
            storage.addItem("orange");
            console.log(storage.getItems()); 
            storage.removeItem("banana");
            console.log(storage.getItems());

            break;
        case 9:
            console.log("Executing Task 9");

            const tweets = [
                { id: "000", likes: 5, tags: ["js", "nodejs"] },
                { id: "001", likes: 2, tags: ["html", "css"] },
                { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
                { id: "003", likes: 8, tags: ["css", "react"] },
                { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
            ];

            function countTags(tweets) {
                const tagCounts = {};
            
                tweets.forEach(tweet => {
                    tweet.tags.forEach(tag => {
                        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                    });
                });
            
                return tagCounts;
            }
            
            console.log(countTags(tweets));
            
            break;
        case 10:
            console.log("Executing Task 10");

            function checkBrackets(str) {
                const stack = []; 
                const openingBrackets = "({["; 
                const closingBrackets = ")}]"; 
                
                for (let char of str) {
                    if (openingBrackets.includes(char)) {
                        stack.push(char);
                    } else if (closingBrackets.includes(char)) {
                        const last = stack.pop(); 
                        if (char === ')' && last !== '(' ||
                            char === '}' && last !== '{' ||
                            char === ']' && last !== '[') {
                            return false; 
                        }
                    }
                }
                
                return stack.length === 0;
            }
            
            console.log(checkBrackets("function someFn() { console.log('test'); }")); 
            console.log(checkBrackets("function someFn( { console.log('test'); ) }")); 
            console.log(checkBrackets("function someFn() [ console.log('test'); ]")); 
            console.log(checkBrackets("function someFn() { console.log('test');")); 
            
            
            break;
        default:
            console.log("Invalid Task");
    }
}
