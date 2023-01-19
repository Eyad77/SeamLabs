
// the function checkIfValid checks if the number has any 5 in it

module.exports = app => {
    app.get("/getNumbers", async (req, res) => {

        const startNumber = req.body.startNumber
        const endNumber = req.body.endNumber
        const array = [];

        for (let i = startNumber; i <= endNumber; i++) {

            let number = checkIfValid(i);
            if (number != 0) {
                array.push(number)
            }

        }

        res.send(array)

    })
}

//checkIfValid function checks if there is any 5 in the number using modulus and division
// to do "sort of slicing the number and check for a 5"

function checkIfValid(number) {

    let j = number
    while (Math.floor(j) != 0) {
        if (Math.floor(j % 10) === 5) {

            return 0;
        } else {

            j = Math.floor(j / 10)
        }
    }
    return number


}