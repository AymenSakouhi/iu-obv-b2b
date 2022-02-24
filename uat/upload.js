const url = 'process.php';
const form = document.querySelector('form');
const formAgain = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('files[]', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    });

    const FirstName = document.getElementById('showFirstName').innerText
    const SurName = document.getElementById('showSurName').innerText
    const Street = document.getElementById('showStreet').innerText
    const Email = document.getElementById('showEmail').innerText
    const Phone = document.getElementById('showPhone').innerText
    const Study = document.getElementById('showStudy').innerText
    const City = document.getElementById('showCity').innerText
    const StreetNo = document.getElementById('ShowStreetNo').innerText
    const Zip = document.getElementById('showZip').innerText
    const Birth = document.getElementById('showDateOfBirth').innerText
    const EnglishLevel = document.getElementById('showEnglishLevel').innerText
    const Budget = document.getElementById('showBudget').innerText
    const WorkExperience = document.getElementById('showWorkExperience').innerText
    const Format = document.getElementById('showFormat').innerText
    const TimeModel = document.getElementById('showTimeModel').innerText
    const StartDate = document.getElementById('showStartDate').innerText
    const finalPrice = document.getElementById('finalPrice').innerText
    const gender = document.getElementById('gender').innerText
    const country = document.getElementById('showCountry').innerText
    let obj = {
        'FirstName': FirstName,
        'SurName': SurName,
        'Street': Street,
        'Email': Email,
        'Phone': Phone,
        'StreetNo': StreetNo,
        'Zip': Zip,
        'Study': Study,
        'City': City,
        'StreetNo': StreetNo,
        'Birth' : Birth,
        'EnglishLevel' : EnglishLevel,
        'Budget' : Budget,
        'WorkExperience' : WorkExperience,
        'Format' : Format,
        'TimeModel' : TimeModel,
        'StartDate' : StartDate,
        'finalPrice' : finalPrice,
        'gender' : gender,
        'country' : country
    }
    console.log(obj)

    localStorage.setItem('Contract', JSON.stringify(obj));

    setTimeout(function () {
        window.location.href = 'contract.html';
    }, 3000)

});
