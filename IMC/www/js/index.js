function calculerImc(){
    const poids = document.getElementById('poids').value;
    const tailleCm = document.getElementById('taille').value;
    const tailleM = tailleCm / 100;
    const imc = poids / (tailleM * tailleM);
    let interpretationText = 'Vous êtes en état ';

    if(imc < 16.5){
        interpretationText += 'de dénutrition';
    } else if(imc < 18.5){
        interpretationText += 'de maigreur';
    } else if(imc < 25){
        interpretationText = 'Vous avez un poids normal';
    } else if(imc < 30){
        interpretationText += 'de surpoids';
    } else if(imc < 35){
        interpretationText += "d'obésité modérée";
    } else if(imc < 40){
        interpretationText += "d'obésité sévère";
    } else {
        interpretationText += "d'obésité morbide ou massive";
    }

    document.getElementById('resultatIMC').innerHTML = imc.toFixed(2);
    document.getElementById('interpretation').innerHTML = interpretationText;
}
