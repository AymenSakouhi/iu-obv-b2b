let s = window.location.href;
let captured = /key=([^&]+)/.exec(s)[1];
let result = captured ? captured : 'myDefaultValue';
console.log(result);


$("#contractIframe").attr("src", "https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v1/application/contract/"+result+"/stream");


//old version here of the download button
/*function downloadContract() {
    $('#download').click(function() {
        window.location='https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v1/application/contract/'+result;
    });

    return false;
}*/


$('#download2').click(function() {
    window.dataLayer.push({
        event: 'customEvent',
        eventData: {
            action: 'Sign contract page',
            category: 'Application Form',
            label: "Downloaded contract!"
        }
    });
    window.location='https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v1/application/contract/'+result;
});

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
            console.log(data)
            console.log("Information were found in the SF")
            if (data.isESigningAgreed){
                $("#EsignatureTrue").modal();
                $(".singOrDownload").text("download")
                $(".sign").hide()
            }
        }).then(() => {


        }
    ).catch(error => console.log(error))

}


    getOppInfo() ;



function signContract() {
    document.getElementById("accept").disabled = true;
    fetch('https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v2/application/'+result+'/sign' , {
        method : 'POST',
        headers: {
            Authorization: "TPPDVgSNCvp4TY5y",
            //Authorization: "74UgeuBcRZjX6akV",
            'Content-Type' : 'application/json'
        },
    }).then(res => {
        if (!res.ok){
            throw Error('error getting the API to POST')
        }
        return res.json()


    })
        .then(data => {
            obj = data;
            console.log(obj)
            window.dataLayer.push({
                event: 'customEvent',
                eventData: {
                    action: 'Sign contract page',
                    category: 'Application Form',
                    label: "Signed contract!"
                }
            });

        }).then(
        () => {
            //t.key = obj.key
            //study-model it as a json
            //localStorage.setItem('allData', JSON.stringify(t));
            //localStorage.setItem('Keys', JSON.stringify(t));
            //Long link in case variables arent accessible in the success page
            //window.location.href='success.html?firstname='+ myName+'&surName='+surName+'&country='+country+'&email='+email+'&mobileNumber='+mobileNumber+'&address='+address+'&studyProgram='+studyProgram+'&key='+obj.key
            //For shorting the link

            $('.loading').toggleClass("hide")
            setTimeout(function () {
                window.location.href='contract_sign.html?key='+result
            },10000)
        }
    )
        .catch(error => console.log(error))

    return false;
}

