let s = window.location.href;
let captured = /key=([^&]+)/.exec(s)[1];
let result = captured ? captured : 'myDefaultValue';
console.log(result);


let t = JSON.parse(localStorage.getItem('allData'));
console.log(t);

if (t.degree === "Bachelor"){
    $('.upload_proof_of_work_experience-cont').hide()
}


fetch('https://hooks.zapier.com/hooks/catch/9270658/btreyx9/' , {
    method : 'POST',
    body: JSON.stringify(t)
}).then(res => {
    if (!res.ok){
        throw Error('error getting the API to POST')
    }
    return res.json()
})
    .then(data => {
        obj = data;
        console.log('sent to Zapier')

    })
    .catch(error => console.log(error))


function getOppInfo() {
    fetch('https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v2/application/obw/'+result , {
        method : 'GET',
        headers: {
            Authorization: "TPPDVgSNCvp4TY5y",
            //Authorization: "74UgeuBcRZjX6akV",
            'Content-Type' : 'application/json'
        }
    }).then(res => {
        if (!res.ok){
            throw Error('error getting the API to POST')
        }
        return res.json()


    })
        .then(data => {
            console.log("Information were found in the SF")
            obj = data;
            if (data.completed === false && data.currentPage === 2){
            //if (data.businessUnit === 'cs'){
                $( ".contract-section" ).hide()
            }
            if (data.businessUnit === "fi") {
                $("#tel").text('+49-303-1198-720')
            }
        }).catch(error => console.log(error))
}

getOppInfo() ;


function toAnotherPage() {
    if (obj.completed === false && obj.currentPage === 2){
    //if (obj.businessUnit === "cs"){
        window.location.href='../thankyou.html'
        //window.location.href='../contract_sign.html?key='+result

    } else {
        window.location.href='../contract_sign.html?key='+result
        $( ".contract-section" ).show()
    }
}



$( "#skip" ).click(function() {
    window.dataLayer.push({
        event: 'customEvent',
        eventData: {
            action: 'Download contract button',
            category: 'Application Form',
            label: 'Click on download contract button'
        }
    });
    toAnotherPage();
});



