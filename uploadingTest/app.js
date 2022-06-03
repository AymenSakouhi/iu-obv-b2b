let s = window.location.href;
let captured = /key=([^&]+)/.exec(s)[1];
let result = captured ? captured : 'myDefaultValue';
console.log(result);



//{{mw_base_url}}/lara/api/v2/file/ed9e2bbb-2576-462a-91ff-24aaf6dc6639/file-upload?type=application&category=CV


function f1() {

    let input = document.querySelector('input[type="file"]')
    let data = new FormData()



    for (let i = 0; i < $('#upload')[0].files.length; i++) {
        data.append('upload', input.files[i])
        fetch('https://api.careerpartner.eu/integration-centraldataservice-api/lara/api/v2/file/'+result+'/file-upload?type=application', {
            method: 'POST',
            body: data
        }).then(res => {
            if (!res.ok){
                throw Error('error getting the API to POST')
            }
            console.log(res);
        }
    )

    }
    return false;


}

