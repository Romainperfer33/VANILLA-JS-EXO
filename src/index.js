// EXO 1 

const btns = document.querySelectorAll('.btn-1')
const result1 = document.querySelector('.result-1')

btns.forEach((el) => {
    el.addEventListener('click',(e) => {
        result1.style.backgroundColor = e.target.textContent
    })
})

// EXO 2

const input2 = document.querySelector('.input-2')
const result2 = document.querySelector('.result-2')

input2.addEventListener('input', (e) => {
    result2.textContent = e.target.value
})

// EXO 3

const input = document.querySelector('.input-3')
const value = document.querySelector('.value')


input.addEventListener('input', (e) => {
    value.textContent = e.target.value
  })

// EXO 4

const input4 = document.querySelector('.input-4')
const btn2 = document.querySelector('.btn-2')
const result3 = document.querySelector('.result result-3')

input4.addEventListener('input', (e) => {


})