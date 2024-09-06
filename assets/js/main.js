const headerTop = document.querySelector(".header-top");
const markIcon = document.querySelector(".header-top i");
markIcon.addEventListener("click", ()=>{
    headerTop.style.display="none";
})

let countNumber = document.querySelectorAll(".number");
        for (let i = 0; i < countNumber.length; i++) {
            if (countNumber[i].innerText === "0") {
                function increment() {
                    let current = +countNumber[i].innerText;
                    let dataNum = +countNumber[i].getAttribute("data-num");
                    let incrementVa = Math.ceil(dataNum / 60); 
                    current += incrementVa;
                    countNumber[i].innerText = current;
                    if (current < dataNum) {
                        setTimeout(increment, 50);
                    } else {
                        countNumber[i].innerText = dataNum; 
                    }
                }
                increment();
            }
        }
