let button = document.querySelectorAll('.line div');
let input = document.querySelector('input');
const withdraw = document.querySelector('.withdraw');
const body = document.querySelector('body');

body.addEventListener('keyup', (e) => {
    let key = e.key;

    if (key >= 0 && key <= 9) {
        input.value += key;
    } else if (key == 'Enter') {
        confirm();
    } else if (key == 'Delete') {
        clear();
    }

});


button.forEach((value, index) => {
    let number = button[index];
    number.addEventListener('click', () => {

        if (number.innerHTML === "Limpar") {
            clear();
        } else if (number.innerHTML === "Confirmar") {
            confirm();

        } else {
            input.value += number.innerHTML;
        }


    });
})



function calcNotes(x) {
  let money = Number(x);
  if (money % 10 != 0) {
    return withdraw.innerHTML = `<p>Erro de notas indisponíveis</p>`

    } else if (money == 0) {
        return withdraw.innerHTML = `<p>Erro de valor nulo</p>`
    } else {
        const notes = [100, 50, 20, 10];
        for (let note of notes) {
            let notesValue = parseInt(money / note);
            printNotes(notesValue, note)
            money = money % note;
        }
    }
}

function printNotes(notesValue, note) {
    if (notesValue === 0) return;
    withdraw.innerHTML += `<p>${notesValue} nota(s) de $ ${note},00</p>`;
}

function clear() {
    withdraw.innerHTML = "";
    input.value = "";
}

function confirm() {
    withdraw.innerHTML = "";
    calcNotes(input.value)

}