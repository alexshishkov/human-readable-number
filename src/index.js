const numbers = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
]
const DoubleFigures = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
]
let DoubleFiguresFunc = (number) => {
    if (number.toString()[2] == 0) {
        return `${DoubleFigures[number.toString()[1]]}`
    } else return `${DoubleFigures[number.toString()[1]]} ${numbers[number.toString()[2]]}`
}
module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero'
    } else if (number < 20 && number > 0) {
        return numbers[number]
    } else if (number.toString().length === 2) {
        if (number.toString()[1] == 0) {
            return `${DoubleFigures[number.toString()[0]]}`
        } else return `${DoubleFigures[number.toString()[0]]} ${numbers[number.toString()[1]]}`
    } else if (number.toString().length === 3) {
        if (number.toString()[1] ==0 && number.toString()[2] == 0) {
            return `${numbers[number.toString()[0]]} hundred`
        } else if (number.toString()[1] + number.toString()[2] < 10) {
            return `${numbers[number.toString()[0]]} hundred ${numbers[number.toString()[2]]}`
        } else if (number.toString()[1] + number.toString()[2] < 20) {
            return `${numbers[number.toString()[0]]} hundred ${numbers[number.toString()[1] + number.toString()[2]]}`
        } else return `${numbers[number.toString()[0]]} hundred ${DoubleFiguresFunc(number)}`
    }
};
