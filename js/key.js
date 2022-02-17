//CONTRACT HERE


let s = window.location.href;
let captured = /studyProgram=([^&]+)/.exec(s)[1];
let result = captured ? captured : 'myDefaultValue';
let str = result;
let z=10;

let url = window.location.href;

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }
    return obj;
}

/*let x = getAllUrlParams(url);
console.log(x);*/
//document.getElementById('course-of-studies').value = contractData.Study;
/*document.getElementById('fullName').innerText = x.firstname + ' ' + x.surname;
document.getElementById('fullName').style.textTransform = "capitalize";
document.getElementById('ContractId').innerText = 'T100' + z;
document.getElementById('email').innerText = x.email;
document.getElementById('address').innerText = x.address.replace(/%20/g, " ");
document.getElementById('address2').innerText = x.address.replace(/%20/g, " ");
document.getElementById('address3').innerText = x.address.replace(/%20/g, " ");
document.getElementById('address').style.textTransform = "capitalize";
document.getElementById('address2').style.textTransform = "capitalize";
document.getElementById('address3').style.textTransform = "capitalize";
document.getElementById('country').innerText = x.country.replace(/%20/g, " ");
document.getElementById('country2').innerText = x.country.replace(/%20/g, " ");
document.getElementById('country').style.textTransform = "capitalize";
document.getElementById('country2').style.textTransform = "capitalize";*/






/*
html2pdf(element, {
    margin:       1,
    filename:     'Contract.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
});*/
