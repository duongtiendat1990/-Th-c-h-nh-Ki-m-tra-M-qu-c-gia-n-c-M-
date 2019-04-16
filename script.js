function checkZipCode() {
    let patt =/^[0-9]{5}(?:-[0-9]{4})?$/;
    let sequence = document.getElementById('zipCode').value;
    let result = patt.test(sequence);
    if (result) document.getElementById('result').innerText = 'The number sequence is Zip Code';
    else document.getElementById('result').innerText = 'The number sequence is not Zip Code';
}