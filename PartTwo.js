
// we will use the base 26 to calculate the characters value, which is the same concept of binary or hexa or any other base

module.exports = app => {
    app.get("/getString", async (req, res) => {

        const alphabet = {
            A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7,
            H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
            N: 14, O: 15, P: 16, Q: 17, R: 18,
            S: 19, T: 20, U: 21, V: 22,
            W: 23, X: 24, Y: 25, Z: 26
        }

        const input_string = req.body.input_string;
        const length = input_string.length
        let total = 0;

        for (let i = 0; i <= length - 1; i++) {
            let letter = input_string.charAt(i)

            let power = Math.pow(26, (length - (i + 1)))

            total = total + (power * alphabet[letter])

        }
        res.send('' + total)
    })
}