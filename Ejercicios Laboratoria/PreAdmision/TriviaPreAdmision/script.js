function getName() {
    if (userName.value) {
        let name = document.getElementById('userName');
        document.getElementById('Greetings').innerHTML = 'Hola ' + name.value + ', juguemos';
        document.getElementById('screentwo').style.display = 'block'
        document.getElementById('screenone').style.display = 'none'

    } else {
        alert('Para jugar debes escribir tu nombre');
        return false;
    }
}

function clickInternationalButton() {
    document.getElementById('screenthreeInternationalPreguntaOne').style.display = 'block'
    document.getElementById('Greetings').style.display = 'none'
    document.getElementById('screentwo').style.display = 'none'
}

function clickNationalButton() {
    document.getElementById('screenthreeNationalPreguntaOne').style.display = 'block'
    document.getElementById('Greetings').style.display = 'none'
    document.getElementById('screentwo').style.display = 'none'
}

//preguntas internacional

function nextQuestion1() {

    if ((option1.checked || option2.checked || option3.checked)) {

        document.getElementById('screenthreeInternationalPreguntatwo').style.display = 'block';
        document.getElementById('Greetings').style.display = 'none';
        document.getElementById('screentwo').style.display = 'none';
        document.getElementById('screenone').style.display = 'none';


    } else {

        alert('Debes seleccionar una opción');
        return false;
    }
}

function nextQuestion2() {


    if ((option4.checked || option5.checked || option6.checked)) {

        document.getElementById('screenthreeInternationalPreguntathree').style.display = 'block';
        document.getElementById('Greetings').style.display = 'none';
        document.getElementById('screentwo').style.display = 'none';
        document.getElementById('screenone').style.display = 'none';
    } else {
        alert('Debes seleccionar una opción');
        return false;
    }
}

function result() {
    count = 0;

    if (document.getElementById('option2').checked) {
        count++;
    }

    if (document.getElementById('option4').checked) {
        count++;
    }

    if (document.getElementById('option9').checked) {
        count++;
    }
    let name = document.getElementById('userName');

    if (count == 1) {
        document.getElementById('resultInternational').innerHTML = name.value + ' obtuviste ' + count + ' punto.';
    } else {
        document.getElementById('resultInternational').innerHTML = name.value + ' obtuviste ' + count + ' puntos.';
    }

}

//preguntas Nacional
function nextQuestionNational1() {

    if ((option1.checked || option2.checked || option3.checked)) {

        document.getElementById('screenthreeInternationalPreguntatwo').style.display = 'block';
        document.getElementById('Greetings').style.display = 'none';
        document.getElementById('screentwo').style.display = 'none';
        document.getElementById('screenone').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntaOne').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntatwo').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntathree').style.display = 'none';



    } else {

        alert('Debes seleccionar una opción');
        return false;
    }
}

function nextQuestionNational2() {


    if ((option4.checked || option5.checked || option6.checked)) {

        document.getElementById('screenthreeInternationalPreguntathree').style.display = 'block';
        document.getElementById('Greetings').style.display = 'none';
        document.getElementById('screentwo').style.display = 'none';
        document.getElementById('screenone').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntaOne').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntatwo').style.display = 'none';
        document.getElementById('screenthreeInternationalPreguntathree').style.display = 'none';
    } else {
        alert('Debes seleccionar una opción');
        return false;
    }
}

function resultNational() {
    count = 0;

    if (document.getElementById('option2').checked) {
        count++;
    }

    if (document.getElementById('option5').checked) {
        count++;
    }

    if (document.getElementById('option7').checked) {
        count++;
    }
    let name = document.getElementById('userName');

    if (count == 1) {
        document.getElementById('resultNational').innerHTML = name.value + ' obtuviste ' + count + ' punto.';
    } else {
        document.getElementById('resultNational').innerHTML = name.value + ' obtuviste ' + count + ' puntos.';
    }

}