function calculate() {

    if (age.value == "" || ht.value == "" || wt.value == "") {
        alert('Please fill the required field')

    } else {
        if (age.value >= 2 && age.value <= 100) {
            var height = ht.value
            var weight = wt.value
            var bmi = Math.round(weight / ((height / 100) * (height / 100)))
            console.log(bmi);






            newBox.style.display = 'block'

            bmiValue.textContent = `${bmi}`
            newBoxHeading.style.color = "white"
            if (bmi < 18.5) {
                review.textContent = "You are Under Weight..."
                review.style.color = "yellow"
                image.src = 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-this-is-a-cartoon-skeleton-sticker-design-clipart-vector-png-image_12243725.png'
            } else if (bmi >= 18.5 && bmi < 24.9) {
                review.textContent = "You are Normal..."
                review.style.color = "green"
                image.src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-sticker-with-a-man-running-with-a-tangerine-from-fruit-clipart-vector-png-image_6903507.png'
            } else if (bmi >= 25 && bmi < 29.9) {
                review.textContent = "You are Over Weight..."
                review.style.color = "red"
                image.src = 'https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-fat-guy-sticker-vector-art-cd-clipart-png-image_7030462.png'
            } else if (bmi >= 30) {
                review.textContent = "You are Obese..."
                review.style.color = "red"
                image.src = 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-fat-cat-sticker-vector-png-image_12233728.png'
            }

        }

        else {
            alert("enter the correct age")
        }
    }

}

function reset() {
    ht.value = ''
    wt.value = ''
    age.value = ''
    newBox.style.display = 'none'

    var radioButtons = document.getElementsByName("gender");//for clearing radio button
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}