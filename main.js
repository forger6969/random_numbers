let hello = alert(` Сейчас будут появлятся рнадомные числа :)`)

let random = Math.round(Math.random() * 100)

let randomAlert = alert(` Выпавшее рандомное число: ${random}`)

let randomAction = random * 2
let randomAction2 = random / 2
let remainder = random % 3;

if (confirm(`Мы хотим выполнить математические действие с выпавшим числом:${random}`)) {

    console.log('Дейстиве с числом подтверждено')
    alert(`Выпавшее рандомное число: ${random}\nМы умножили его в 2 и получили число ${randomAction}\nИ поделив ${random} на 2 мы получили число ${randomAction2}\nИ при отсатке получили число ${remainder}`)

} else {
    console.log(`Отменаа -_-`)
}
