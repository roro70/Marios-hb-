const startButton = document.getElementById("startButton");

const countdown = document.getElementById("countdown");

const candles = document.querySelectorAll(".candle");

const birthdayMessage =
    document.getElementById("birthdayMessage");


startButton.addEventListener("click", () => {

    startButton.classList.add("hidden");

    let numbers = ["3", "2", "1"];

    let currentNumber = 0;

    countdown.textContent = numbers[currentNumber];


    const timer = setInterval(() => {

        currentNumber++;


        if (currentNumber < numbers.length) {

            countdown.textContent =
                numbers[currentNumber];

        } else {

            clearInterval(timer);

            countdown.textContent = "💨";


            setTimeout(() => {

                // Blow out all candles
                candles.forEach((candle) => {

                    candle.classList.add("blown");

                });


                countdown.textContent = "";


                // Show birthday message
                setTimeout(() => {

                    birthdayMessage.classList.add("show");

                }, 600);


            }, 500);

        }

    }, 1000);

});
