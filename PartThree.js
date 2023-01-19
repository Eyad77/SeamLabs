// we use the getSteps function to return the outputArray in the response

module.exports = app => {
    app.get("/getMinMoves", async (req, res) => {

        const inputArray = req.body.inputArray;
        console.log(inputArray)
        const outputArray = [];
        for (let i = 0; i <= inputArray.length - 1; i++) {

            let number = inputArray[i];

            outputArray.push(getSteps(number))


        }


        res.send(outputArray);
    })
}

// getSteps function check if the number is prime or not at first using primeNumFlag
// if not prime we get all the maximums in each two numbers which if multiplied, gives us the input number
// then we get the minimum of these maximums we got and add 1 to it and we have our total steps used
// if the number is prime then we return the steps which are equal to the input number

function getSteps(number) {
    let j = number - 1
    let maxProductsArray = []

    let primeNumFlag = 1

    while (j != 1) {

        if (number % j === 0) {
            primeNumFlag = 0
            let firstNum = j;
            let secondNum = number / j;

            maxProductsArray.push(Math.max(firstNum, secondNum))

            j--;

        } else {
            j--;
        }

    }

    if (primeNumFlag == 0) {


        let steps = Math.min(...maxProductsArray) + 1

        return steps

    } else {

        steps = number
        return number

    }
}
