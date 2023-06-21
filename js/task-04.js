let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", ButtonDecrement);
increment.addEventListener("click", ButtonIncrement);

function ButtonDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function ButtonIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}
