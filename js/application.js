let voucherVar = null;
let businessUnit = "fi";
let obwVersion = "b2b";
let agbVersion = '1.0';
let directDebit = null;
let locationSite = "3";
let currentPage = 3;
let completed = true;

//intake variables
let currentProgramme = "";
let ProgrammeIntakes = [];
let allIntakes = ["oct21","jan22","apr22", "jun22", "oct22", "apr23", "oct23"]
let difference = []

let discMyStu180B = 0.770081;
let discMyStu60M = 0.87243;
let discMyStu90M = 0.843152;
let discMyStu120M = 0.865815;

//error function + labels
let labelContent = ""

function EmptyFields() {
    labelContent = ""
    if(document.getElementById('voucher').value == "") {
        labelContent += '~VoucherAgentCode'
    }
    if($('#Degree').find(":selected").text().startsWith('S') || $('#studyProgram').find(":selected").text().startsWith('S')) {
        labelContent += '~DegreeFieldEmpty~studyProgramFieldEmpty'
    }
    if($('input[name=timemodel]:checked').length === 0) {
        labelContent += '~timeModelModalSection'
    }
    if($('.study-start').val() === "") {
        labelContent += '~startDataOnlineSectionEmpty'
    }
    if($('input[name=gender]:checked').length === 0) {
        labelContent += '~GenderSectionEmpty'
    }
    if (document.getElementById('first-name').value == "") {
        labelContent += '~NameFieldInputEmpty'
    }
    if(document.getElementById('last-name').value == "") {
        labelContent += '~SurnameFieldInputEmpty'
    }
    if(document.getElementById('street').value === "") {
        labelContent += '~AddressStreetInputEmpty'
    }
    if(document.getElementById('e-mail').value === "") {
        labelContent += '~EmailInputEmpty'
    }
    if(document.getElementById('date-of-birth').value === "") {
        labelContent += '~dateOfBirthInputEmpty'
    }
    if(document.getElementById('city').value === "") {
        labelContent += '~AddressCityInputEmpty'
    }
    if($('.study-start').val() === "") {
        labelContent += '~submitWithoutStartDateEmpty'
    }


    labelContent += '~b2b'

    return labelContent;


}

function scrollTo() {
    if(document.getElementById('voucher').value == "") {
        document.getElementById('voucher').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    if($('#Degree').find(":selected").text().startsWith('S') || $('#studyProgram').find(":selected").text().startsWith('S')) {
        document.getElementById('Degree').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    else if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=studyLocation]:checked').length === 0) {
        document.getElementById('studyProgram').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if($('input[name=timemodel]:checked').length === 0) {
        document.getElementById('timeModalsSection').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if($('.study-start').val() === "") {
        document.getElementById('datepicker').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if($('input[name=gender]:checked').length === 0) {
        document.getElementById('gender').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    else if (document.getElementById('first-name').value == "") {
        document.getElementById('first-name').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if(document.getElementById('last-name').value == "") {
        document.getElementById('last-name').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if(document.getElementById('street').value === "") {
        document.getElementById('street').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if(document.getElementById('e-mail').value === "") {
        document.getElementById('e-mail').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if(document.getElementById('date-of-birth').value === "") {
        document.getElementById('date-of-birth').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if(document.getElementById('city').value === "") {
        document.getElementById('city').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    else if($('.study-start').val() === "") {
        document.getElementById('last-name').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }


}

function errorPush(label) {
    if (label === '~b2b') {
        console.log('there was no error')
    } else {
        window.dataLayer.push({
            event: 'customEvent',
            eventData: {
                action: 'submit error',
                category: 'Application Form',
                label: label
            }
        });
        console.log('error sent')
        console.log(label)
    }

}


//to check only english letters
document.getElementById('first-name').addEventListener('input', function(){
    this.value = this.value.replace(/[^\x00-\x7F]+/ig, '');
});
document.getElementById('last-name').addEventListener('input', function(){
    this.value = this.value.replace(/[^\x00-\x7F]+/ig, '');
});


//randomly choose a study advisor
select = document.getElementById("StudyAdvisor")
$("#StudyAdvisor").prop('disabled', true);
let items = select.getElementsByTagName('option');
let index = Math.floor(Math.random() * items.length);
select.selectedIndex = index;


$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $(".summary").css("bottom","110px")
    } else {
        $(".summary").css("bottom","10px")
    }
});

$('.container').bind('click', function(e) {
    if($(e.target).closest('#mySidenav').length == 0) {
        document.getElementById("mySidenav").style.width = "0";
    }
});



let step1 = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;

            window.dataLayer.push({
                event: 'ee-checkout',
                eventData: {
                    action: 'checkout',
                    category: 'ecommerce',
                    label: 'step 2'
                },
                ecommerce: {
                    checkout: {
                        actionField: {
                            action: 'checkout',
                            step: 2
                        }
                    }
                }
            });

            window.dataLayer.push({
                event: 'ee-addToCart',
                eventData: {
                    action: 'addToCart',
                    category: 'ecommerce',
                },
                ecommerce: {
                    checkout: {
                        actionField: {
                            action: 'addToCart',
                            step: 2
                        }
                    }
                }
            });
        }
    };
})();

let step3 = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;

            window.dataLayer.push({
                event: 'ee-checkout',
                eventData: {
                    action: 'checkout',
                    category: 'ecommerce',
                    label: 'step 3'
                },
                ecommerce: {
                    checkout: {
                        actionField: {
                            action: 'checkout',
                            step: 3
                        }
                    }
                },
                user  : {
                    gender : $("input[name='gender']:checked").val(),
                    zip : $("#postcode").val(),
                    dateBirth : $("#date-of-birth").val()
                }
            });
        }
    };
})();

let step4 = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;

            window.dataLayer.push({
                event: 'ee-checkout',
                eventData: {
                    action: 'checkout',
                    category: 'ecommerce',
                    label: 'step 4'
                },
                ecommerce: {
                    checkout: {
                        actionField: {
                            action: 'checkout',
                            step: 4
                        }
                    }
                }
            });



            window.dataLayer.push({
                event: 'ee-checkout_option',
                eventData: {
                    action: 'checkout-option',
                    category: 'ecommerce',
                },
                ecommerce: {
                    checkout: {
                        actionField: {
                            action: 'checkout-option',
                            step: 4
                        }
                    }
                }
            });
        }
    };
})();


$( "#city" ).change(function() {
    setTimeout(function () {
        step3()
    },5000)

});


/*$("input[name='workexperience']").click(function() {
    step4()
});*/

document.querySelectorAll(".toSelect").forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById("voucher").classList.toggle("hide");
        document.getElementById("chevron").classList.toggle("fa-chevron-up");
        document.getElementById("chevron").classList.toggle("fa-chevron-down");

    })
})

function th() {
        let tracker = window.ga.getAll()[0];
        return tracker;
}

let tpt = null;
let q = null;
let z = null;


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

setTimeout(function (){
    if (getCookie('sfStore') !== undefined){
        tpt = JSON.parse(atob(getCookie('sfStore')));
        q = tpt.gclid;
        z = tpt.utm;
    }
},1000)




let disC = 0;

let englishProof = ["American Samoa","Anguilla","Antigua and Barbuda","Austria","Bahamas","Barbados","Bermuda","Botswana","British Indian Ocean Territory","Virgin Islands, British","Canada","Cayman Islands","Christmas Island","Cook Islands","Dominica","United Kingdom","Falkland Islands (Malvinas)","Fiji","Ghana",]


let tabc1 = [
    {"name": "Afghanistan", "code": "AF", "tier" : 2},
    {"name": "land Islands", "code": "AX", "tier" : 2},
    {"name": "Albania", "code": "AL", "tier" : 2},
    {"name": "Algeria", "code": "DZ", "tier" : 2},
    {"name": "American Samoa", "code": "AS", "tier" : 2},
    {"name": "AndorrA", "code": "AD", "tier" : 2},
    {"name": "Angola", "code": "AO", "tier" : 2},
    {"name": "Anguilla", "code": "AI", "tier" : 2},
    {"name": "Antarctica", "code": "AQ", "tier" : 2},
    {"name": "Antigua and Barbuda", "code": "AG", "tier" : 2},
    {"name": "Argentina", "code": "AR", "tier" : 2},
    {"name": "Armenia", "code": "AM", "tier" : 2},
    {"name": "Aruba", "code": "AW", "tier" : 2},
    {"name": "Australia", "code": "AU", "tier" : 1},
    {"name": "Austria", "code": "AT", "tier" : 2},
    {"name": "Azerbaijan", "code": "AZ", "tier" : 2},
    {"name": "Bahamas", "code": "BS", "tier" : 2},
    {"name": "Bahrain", "code": "BH", "tier" : 1},
    {"name": "Bangladesh", "code": "BD", "tier" : 2},
    {"name": "Barbados", "code": "BB", "tier" : 2},
    {"name": "Belarus", "code": "BY", "tier" : 2},
    {"name": "Belgium", "code": "BE", "tier" : 1},
    {"name": "Belize", "code": "BZ", "tier" : 2},
    {"name": "Benin", "code": "BJ", "tier" : 2},
    {"name": "Bermuda", "code": "BM", "tier" : 1},
    {"name": "Bhutan", "code": "BT", "tier" : 2},
    {"name": "Bolivia", "code": "BO", "tier" : 2},
    {"name": "Bosnia and Herzegovina", "code": "BA", "tier" : 2},
    {"name": "Botswana", "code": "BW", "tier" : 2},
    {"name": "Bouvet Island", "code": "BV", "tier" : 2},
    {"name": "Brazil", "code": "BR", "tier" : 2},
    {"name": "British Indian Ocean Territory", "code": "IO", "tier" : 2},
    {"name": "Brunei Darussalam", "code": "BN", "tier" : 1},
    {"name": "Bulgaria", "code": "BG", "tier" : 2},
    {"name": "Burkina Faso", "code": "BF", "tier" : 2},
    {"name": "Burundi", "code": "BI", "tier" : 2},
    {"name": "Cambodia", "code": "KH", "tier" : 2},
    {"name": "Cameroon", "code": "CM", "tier" : 2},
    {"name": "Canada", "code": "CA", "tier" : 1},
    {"name": "Cape Verde", "code": "CV", "tier" : 2},
    {"name": "Cayman Islands", "code": "KY", "tier" : 1},
    {"name": "Central African Republic", "code": "CF", "tier" : 2},
    {"name": "Chad", "code": "TD", "tier" : 2},
    {"name": "Chile", "code": "CL", "tier" : 2},
    {"name": "China", "code": "CN", "tier" : 2},
    {"name": "Christmas Island", "code": "CX", "tier" : 2},
    {"name": "Cocos (Keeling) Islands", "code": "CC", "tier" : 2},
    {"name": "Colombia", "code": "CO", "tier" : 2},
    {"name": "Comoros", "code": "KM", "tier" : 2},
    {"name": "Congo", "code": "CG", "tier" : 2},
    {"name": "Congo, The Democratic Republic of the", "code": "CD", "tier" : 2},
    {"name": "Cook Islands", "code": "CK", "tier" : 2},
    {"name": "Costa Rica", "code": "CR", "tier" : 2},
    {"name": "Cote D'Ivoire", "code": "CI", "tier" : 2},
    {"name": "Croatia", "code": "HR", "tier" : 2},
    {"name": "Cuba", "code": "CU", "tier" : 2},
    {"name": "Cyprus", "code": "CY", "tier" : 2},
    {"name": "Czech Republic", "code": "CZ", "tier" : 1},
    {"name": "Denmark", "code": "DK", "tier" : 1},
    {"name": "Djibouti", "code": "DJ", "tier" : 2},
    {"name": "Dominica", "code": "DM", "tier" : 2},
    {"name": "Dominican Republic", "code": "DO", "tier" : 2},
    {"name": "Ecuador", "code": "EC", "tier" : 2},
    {"name": "Egypt", "code": "EG", "tier" : 2},
    {"name": "El Salvador", "code": "SV", "tier" : 2},
    {"name": "Equatorial Guinea", "code": "GQ", "tier" : 2},
    {"name": "Eritrea", "code": "ER", "tier" : 2},
    {"name": "Estonia", "code": "EE", "tier" : 2},
    {"name": "Ethiopia", "code": "ET", "tier" : 2},
    {"name": "Falkland Islands (Malvinas)", "code": "FK", "tier" : 2},
    {"name": "Faroe Islands", "code": "FO", "tier" : 2},
    {"name": "Fiji", "code": "FJ", "tier" : 2},
    {"name": "Finland", "code": "FI", "tier" : 1},
    {"name": "France", "code": "FR", "tier" : 1},
    {"name": "French Guiana", "code": "GF", "tier" : 2},
    {"name": "French Polynesia", "code": "PF", "tier" : 2},
    {"name": "French Southern Territories", "code": "TF", "tier" : 2},
    {"name": "Gabon", "code": "GA", "tier" : 2},
    {"name": "Gambia", "code": "GM", "tier" : 2},
    {"name": "Georgia", "code": "GE", "tier" : 2},
    {"name": "Germany", "code": "DE", "tier" : 1},
    {"name": "Ghana", "code": "GH", "tier" : 2},
    {"name": "Gibraltar", "code": "GI", "tier" : 2},
    {"name": "Greece", "code": "GR", "tier" : 2},
    {"name": "Greenland", "code": "GL", "tier" : 2},
    {"name": "Grenada", "code": "GD", "tier" : 2},
    {"name": "Guadeloupe", "code": "GP", "tier" : 2},
    {"name": "Guam", "code": "GU", "tier" : 2},
    {"name": "Guatemala", "code": "GT", "tier" : 2},
    {"name": "Guernsey", "code": "GG", "tier" : 2},
    {"name": "Guinea", "code": "GN", "tier" : 2},
    {"name": "Guinea-Bissau", "code": "GW", "tier" : 2},
    {"name": "Guyana", "code": "GY", "tier" : 2},
    {"name": "Haiti", "code": "HT", "tier" : 2},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM", "tier" : 2},
    {"name": "Holy See (Vatican City State)", "code": "VA", "tier" : 2},
    {"name": "Honduras", "code": "HN", "tier" : 2},
    {"name": "Hong Kong", "code": "HK", "tier" : 1},
    {"name": "Hungary", "code": "HU", "tier" : 2},
    {"name": "Iceland", "code": "IS", "tier" : 1},
    {"name": "India", "code": "IN", "tier" : 2},
    {"name": "Indonesia", "code": "ID", "tier" : 2},
    {"name": "Iran, Islamic Republic Of", "code": "IR", "tier" : 2},
    {"name": "Iraq", "code": "IQ", "tier" : 2},
    {"name": "Ireland", "code": "IE", "tier" : 1},
    {"name": "Isle of Man", "code": "IM", "tier" : 2},
    {"name": "Israel", "code": "IL", "tier" : 1},
    {"name": "Italy", "code": "IT", "tier" : 1},
    {"name": "Jamaica", "code": "JM", "tier" : 2},
    {"name": "Japan", "code": "JP", "tier" : 1},
    {"name": "Jersey", "code": "JE", "tier" : 2},
    {"name": "Jordan", "code": "JO", "tier" : 2},
    {"name": "Kazakhstan", "code": "KZ", "tier" : 2},
    {"name": "Kenya", "code": "KE", "tier" : 2},
    {"name": "Kiribati", "code": "KI", "tier" : 2},
    {"name": "Korea, Democratic People'S Republic of", "code": "KP", "tier" : 1},
    {"name": "Korea, Republic of", "code": "KR", "tier" : 1},
    {"name": "Kuwait", "code": "KW", "tier" : 1},
    {"name": "Kyrgyzstan", "code": "KG", "tier" : 2},
    {"name": "Lao People'S Democratic Republic", "code": "LA", "tier" : 2},
    {"name": "Latvia", "code": "LV", "tier" : 2},
    {"name": "Lebanon", "code": "LB", "tier" : 2},
    {"name": "Lesotho", "code": "LS", "tier" : 2},
    {"name": "Liberia", "code": "LR", "tier" : 2},
    {"name": "Libyan Arab Jamahiriya", "code": "LY", "tier" : 2},
    {"name": "Liechtenstein", "code": "LI", "tier" : 2},
    {"name": "Lithuania", "code": "LT", "tier" : 2},
    {"name": "Luxembourg", "code": "LU", "tier" : 1},
    {"name": "Macao", "code": "MO", "tier" : 1},
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK", "tier" : 2},
    {"name": "Madagascar", "code": "MG", "tier" : 2},
    {"name": "Malawi", "code": "MW", "tier" : 2},
    {"name": "Malaysia", "code": "MY", "tier" : 2},
    {"name": "Maldives", "code": "MV", "tier" : 2},
    {"name": "Mali", "code": "ML", "tier" : 2},
    {"name": "Malta", "code": "MT", "tier" : 1},
    {"name": "Marshall Islands", "code": "MH", "tier" : 2},
    {"name": "Martinique", "code": "MQ", "tier" : 2},
    {"name": "Mauritania", "code": "MR", "tier" : 2},
    {"name": "Mauritius", "code": "MU", "tier" : 2},
    {"name": "Mayotte", "code": "YT", "tier" : 2},
    {"name": "Mexico", "code": "MX", "tier" : 2},
    {"name": "Micronesia, Federated States of", "code": "FM", "tier" : 2},
    {"name": "Moldova, Republic of", "code": "MD", "tier" : 2},
    {"name": "Monaco", "code": "MC", "tier" : 2},
    {"name": "Mongolia", "code": "MN", "tier" : 2},
    {"name": "Montenegro", "code": "ME", "tier" : 2},
    {"name": "Montserrat", "code": "MS", "tier" : 2},
    {"name": "Morocco", "code": "MA", "tier" : 2},
    {"name": "Mozambique", "code": "MZ", "tier" : 2},
    {"name": "Myanmar", "code": "MM", "tier" : 2},
    {"name": "Namibia", "code": "NA", "tier" : 2},
    {"name": "Nauru", "code": "NR", "tier" : 2},
    {"name": "Nepal", "code": "NP", "tier" : 2},
    {"name": "Netherlands", "code": "NL", "tier" : 1},
    {"name": "Netherlands Antilles", "code": "AN", "tier" : 1},
    {"name": "New Caledonia", "code": "NC", "tier" : 2},
    {"name": "New Zealand", "code": "NZ", "tier" : 1},
    {"name": "Nicaragua", "code": "NI", "tier" : 2},
    {"name": "Niger", "code": "NE", "tier" : 2},
    {"name": "Nigeria", "code": "NG", "tier" : 2},
    {"name": "Niue", "code": "NU", "tier" : 2},
    {"name": "Norfolk Island", "code": "NF", "tier" : 2},
    {"name": "Northern Mariana Islands", "code": "MP", "tier" : 2},
    {"name": "Norway", "code": "NO", "tier" : 1},
    {"name": "Oman", "code": "OM", "tier" : 2},
    {"name": "Pakistan", "code": "PK", "tier" : 2},
    {"name": "Palau", "code": "PW", "tier" : 2},
    {"name": "Palestinian Territory, Occupied", "code": "PS", "tier" : 2},
    {"name": "Panama", "code": "PA", "tier" : 2},
    {"name": "Papua New Guinea", "code": "PG", "tier" : 2},
    {"name": "Paraguay", "code": "PY", "tier" : 2},
    {"name": "Peru", "code": "PE", "tier" : 2},
    {"name": "Philippines", "code": "PH", "tier" : 2},
    {"name": "Pitcairn", "code": "PN", "tier" : 2},
    {"name": "Poland", "code": "PL", "tier" : 2},
    {"name": "Portugal", "code": "PT", "tier" : 2},
    {"name": "Puerto Rico", "code": "PR", "tier" : 2},
    {"name": "Qatar", "code": "QA", "tier" : 1},
    {"name": "Reunion", "code": "RE", "tier" : 2},
    {"name": "Romania", "code": "RO", "tier" : 2},
    {"name": "Russian Federation", "code": "RU", "tier" : 2},
    {"name": "Rwanda", "code": "RW", "tier" : 2},
    {"name": "Saint Helena", "code": "SH", "tier" : 2},
    {"name": "Saint Kitts and Nevis", "code": "KN", "tier" : 2},
    {"name": "Saint Lucia", "code": "LC", "tier" : 2},
    {"name": "Saint Pierre and Miquelon", "code": "PM", "tier" : 2},
    {"name": "Saint Vincent and the Grenadines", "code": "VC", "tier" : 2},
    {"name": "Samoa", "code": "WS", "tier" : 2},
    {"name": "San Marino", "code": "SM", "tier" : 1},
    {"name": "Sao Tome and Principe", "code": "ST", "tier" : 2},
    {"name": "Saudi Arabia", "code": "SA", "tier" : 1},
    {"name": "Senegal", "code": "SN", "tier" : 2},
    {"name": "Serbia", "code": "RS", "tier" : 2},
    {"name": "Seychelles", "code": "SC", "tier" : 2},
    {"name": "Sierra Leone", "code": "SL", "tier" : 2},
    {"name": "Singapore", "code": "SG", "tier" : 1},
    {"name": "Slovakia", "code": "SK", "tier" : 2},
    {"name": "Slovenia", "code": "SI", "tier" : 2},
    {"name": "Solomon Islands", "code": "SB", "tier" : 2},
    {"name": "Somalia", "code": "SO", "tier" : 2},
    {"name": "South Africa", "code": "ZA", "tier" : 2},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS", "tier" : 2},
    {"name": "Spain", "code": "ES", "tier" : 1},
    {"name": "Sri Lanka", "code": "LK", "tier" : 2},
    {"name": "Sudan", "code": "SD", "tier" : 2},
    {"name": "Suriname", "code": "SR", "tier" : 2},
    {"name": "Svalbard and Jan Mayen", "code": "SJ", "tier" : 2},
    {"name": "Swaziland", "code": "SZ", "tier" : 2},
    {"name": "Sweden", "code": "SE", "tier" : 1},
    {"name": "Switzerland", "code": "CH", "tier" : 2},
    {"name": "Syrian Arab Republic", "code": "SY", "tier" : 2},
    {"name": "Taiwan, Province of China", "code": "TW", "tier" : 1},
    {"name": "Tajikistan", "code": "TJ", "tier" : 2},
    {"name": "Tanzania, United Republic of", "code": "TZ", "tier" : 2},
    {"name": "Thailand", "code": "TH", "tier" : 2},
    {"name": "Timor-Leste", "code": "TL", "tier" : 2},
    {"name": "Togo", "code": "TG", "tier" : 2},
    {"name": "Tokelau", "code": "TK", "tier" : 2},
    {"name": "Tonga", "code": "TO", "tier" : 2},
    {"name": "Trinidad and Tobago", "code": "TT", "tier" : 2},
    {"name": "Tunisia", "code": "TN", "tier" : 2},
    {"name": "Turkey", "code": "TR", "tier" : 2},
    {"name": "Turkmenistan", "code": "TM", "tier" : 2},
    {"name": "Turks and Caicos Islands", "code": "TC", "tier" : 2},
    {"name": "Tuvalu", "code": "TV", "tier" : 2},
    {"name": "Uganda", "code": "UG", "tier" : 2},
    {"name": "Ukraine", "code": "UA", "tier" : 2},
    {"name": "United Arab Emirates", "code": "AE", "tier" : 1},
    {"name": "United Kingdom", "code": "GB", "tier" : 1},
    {"name": "United States", "code": "US", "tier" : 1},
    {"name": "United States Minor Outlying Islands", "code": "UM", "tier" : 1},
    {"name": "Uruguay", "code": "UY", "tier" : 2},
    {"name": "Uzbekistan", "code": "UZ", "tier" : 2},
    {"name": "Vanuatu", "code": "VU", "tier" : 2},
    {"name": "Venezuela", "code": "VE", "tier" : 2},
    {"name": "Viet Nam", "code": "VN", "tier" : 2},
    {"name": "Virgin Islands, British", "code": "VG", "tier" : 2},
    {"name": "Virgin Islands, U.S.", "code": "VI", "tier" : 2},
    {"name": "Wallis and Futuna", "code": "WF", "tier" : 2},
    {"name": "Western Sahara", "code": "EH", "tier" : 2},
    {"name": "Yemen", "code": "YE", "tier" : 2},
    {"name": "Zambia", "code": "ZM", "tier" : 2},
    {"name": "Zimbabwe", "code": "ZW", "tier" : 2},
    {"name": "Kosovo", "code": "XK", "tier" : 2}
]


    //let c1 = document.getElementsByClassName('iti__selected-flag')[0].title.split(":")[0]
    //c1 =    c1.split(" (")[0]
//on campus only
mtCheck = []

function checkIpAndChange() {
    if(geoplugin_countryName()!== $("#country :selected").text()){
        if(!mtCheck.includes($("#studyProgram :selected").text())){
            let c2 = $("#country :selected").text();
            for (let j = 0; j < tabc1.length; j++) {
                if (tabc1[j].name === c2 && tabc1[j].tier === 2) {
                    disC = 1;
                    //voucherVar = "IUINTLSCHOLDISCOUNT80";
                    businessUnit = "fi";
                } else if (tabc1[j].name === c2 && tabc1[j].tier === 1)
                {
                    disC = 1;
                    //voucherVar = "IUINTLSCHOLDISCOUNT60";
                    businessUnit = "fi";
                }
            }
            if (disC===0){
                disC = 1;
            }
        }else {
            voucherVar = null;
            businessUnit = "cs"
        }
    } else {
        if(!mtCheck.includes($("#studyProgram :selected").text())){
            let c1 = geoplugin_countryName()
            for (let i = 0; i < tabc1.length; i++) {
                if (tabc1[i].name === c1 && tabc1[i].tier === 2) {
                    disC = 1;
                    //voucherVar = "IUINTLSCHOLDISCOUNT80";
                    businessUnit = "fi";
                } else if (tabc1[i].name === c1 && tabc1[i].tier === 1)
                {
                    disC = 1;
                    //voucherVar = "IUINTLSCHOLDISCOUNT60";
                    businessUnit = "fi";
                }
            }
            if (disC===0){
                disC = 1;
            }
        }else {
            voucherVar = null;
            businessUnit = "cs"
        }
    }


    if($('input[name="studyLocation"]:checked').val() === "Study on campus"){
        voucherVar = null;
        businessUnit = "cs"
    }
}
//change the country here.
$('[name=country]').val(geoplugin_countryCode())
checkIpAndChange()

document.getElementById("country").addEventListener("change", function() {
    checkIpAndChange();
    PriceChange();
});

document.querySelectorAll(".degree").forEach(item => {
    item.disabled = true;

})
document.querySelectorAll(".study-programme").forEach(item => {
    item.disabled = true;

})
document.querySelectorAll(".campus").forEach(item => {
    item.disabled = true;

})
document.querySelectorAll(".study-model").forEach(item => {
    item.disabled = true;

})
document.querySelectorAll(".study-start").forEach(item => {
    item.disabled = true;

})

document.querySelectorAll(".campusSite").forEach(item => {
    item.disabled = true;

})

document.querySelectorAll(".finalPrice").forEach(item => {
    item.innerHTML = '0000';
})
document.querySelectorAll(".discountPrice").forEach(item => {
    item.innerHTML = '0000';
})


let mT = [
    {
        "name" : 'B.A. Business Administration - 180',
        "careId" : '10007953_FI'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence - 60',
        "careId" : '10007858'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence - 120',
        "careId" : '10007857'
    },
    {
        "name" : 'M.Sc. Computer Science - 120',
        "careId" : '10007941_FI'

    },
    {
        "name" : 'M.Sc. Data Science - 60',
        "careId" : '10007855'
    },
    {
        "name" : 'M.Sc. Data Science - 120',
        "careId" : '10007854'
    },
    {
        "name" : 'M.Sc. Cyber Security - 120',
        "careId" : '10008014_FI'
    },
    {
        "name" : 'M.Sc. Data Management - 60',
        "careId" : '10008099_FI_DM'
    },
    {
        "name" : 'M.Sc. Data Management - 120',
        "careId" : '10008098_FI_DM'
    },
    {
        "name" : 'M.Sc. Business Intelligence - 60',
        "careId" : '10008093_FI_BI'
    },
    {
        "name" : 'M.Sc. Business Intelligence - 120',
        "careId" : '10008092_FI_BI'
    },
    {
        "name" : 'M.Sc. Finance, Accounting & Taxation - 120',
        "careId" : '10008096_FI_FAT'
    },
    {
        "name" : 'B.A. Digital Business - 180',
        "careId" : '10008068_FI'
    },
    {
        "name" : 'B.A. International Healthcare Management - 180',
        "careId" : '10008144_FI_HCM'
    },
    {
        "name" : 'MBA One-Year - 60',
        "careId" : '120_FI'
    },
    {
        "name" : 'MBA - Master of Business Administration - 90',
        "careId" : '121_FI'
    },
    {
        "name" : 'MBA - Specialisation Big Data Management - 90',
        "careId" : '121_FI_BDM'
    },
    {
        "name" : 'MBA - Specialisation International Marketing - 90',
        "careId" : '121_FI_IM'
    },
    {
        "name" : 'MBA - Specialisation Finance & Accounting - 90',
        "careId" : '121_FI_FA'
    },
    {
        "name" : 'MBA - Specialisation Engineering Management - 90',
        "careId" : '121_FI_EM'
    },
    {
        "name" : 'MBA - Specialisation IT Management - 90',
        "careId" : '121_FI_ITM'
    },{
        "name" : 'MBA - Specialisation Health Care Management - 90',
        "careId" : '121_FI_HCM'
    },
    {
        "name" : 'MBA - Specialisation Human Resource Management - 90',
        "careId" : '121_FI_HRM'
    },
    {
        "name" : 'MBA - Specialisation Supply Chain Management - 90',
        "careId" : '121_FI_SCM'

    },
    {
        "name" : 'MBA - Specialisation Innovation & Entrepreneurship - 90',
        "careId" : '121_FI_IE'
    },
    {
        "name" : 'MBA - Specialisation Artificial Intelligence - 90',
        "careId" : '121_FI_AI'
    },
    {
        "name" : 'MBA - Specialisation E-Sports Management - 90',
        "careId" : '121_FI_ESM'
    },
    {
        "name" : 'B.A. Entrepreneurship - 180',
        "careId" : '10008062_FI'
    },
    {
        "name" : 'B.A. International Management - 180',
        "careId" : '10008002_FI'
    },
    {
        "name" : 'B.A. Aviation Management - 180',
        "careId" : '10008295_FI_AM'
    },
    {
        "name" : 'B.A. Hospitality Management - 180',
        "careId" : '10008294_FI_HM'
    },
    {
        "name" : 'B.Eng. Robotics - 180',
        "careId" : '10007964_FI'
    },
    /*{
        "name" : 'B.Eng. Engineering - 180',
        "careId" : '10008091_FI_E'
    },*/
    {
        "name" : 'B.Eng. Industrial Engineering & Management - 180',
        "careId" : '10008000_FI'

    },
    {
        "name" : 'B.Sc. Applied Artificial Intelligence - 180',
        "careId" : '10008073_FI_AI'
    },
    {
        "name" : 'B.Sc. Cyber Security - 180',
        "careId" : '10007999_FI'
    },
    {
        "name" : 'B.Sc. Data Science - 180',
        "careId" : '10007851'
    },
    {
        "name" : 'B.Sc. Business & IT - 180',
        "careId" : '10008001_FI'
    },
    {
        "name" : 'B.Sc. Computer Science - 180',
        "careId" : '10007944_FI'
    },
    {
        "name" : 'B.Sc. Software Development - 180',
        "careId" : '10008074_FI_SD'
    },
    {
        "name" : 'M.A. Management - 60',
        "careId" : '10007958_FI'
    },
    {
        "name" : 'M.A. Management - Specialisation Finance & Accounting - 60',
        "careId" : '10007958_FI_FA'
    },
    {
        "name" : 'M.A. Management - Specialisation Leadership - 60',
        "careId" : '10007958_FI_L'
    },
    {
        "name" : 'M.A. International Healthcare Management - 60',
        "careId" : '10008178_FI_HCM'
    },
    {
        "name" : 'M.A. International Healthcare Management - 120',
        "careId" : '10008179_FI_HCM'
    },
    {
        "name" : 'M.A. Human Resource Management - 60',
        "careId" : '10008137_FI_HRM'
    },
    {
        "name" : 'M.A. Human Resource Management - 120',
        "careId" : '10008136_FI_HRM'
    },
    {
        "name" : 'M.A. Innovation & Entrepreneurship - 120',
        "careId" : '10008132_FI_IE'
    },
    {
        "name" : 'M.A. Management - Specialisation Engineering Management - 60',
        "careId" : '10007958_FI_EM'
    },
    {
        "name" : 'M.A. Management - Specialisation Big Data Management - 60',
        "careId" : '10007958_FI_BDM'
    },
    {
        "name" : 'M.A. Management - Specialisation IT Management - 60',
        "careId" : '10007958_FI_ITM'
    },
    {
        "name" : 'M.A. Management - Specialisation International Marketing - 60',
        "careId" : '10007958_FI_IM'
    },
    {
        "name" : 'M.A. Marketing Management - 60',
        "careId" : '10007977_FI'
    },
    {
        "name" : 'M.A. Marketing Management - 120',
        "careId" : '10007976_FI'
    },
    {
        "name" : 'M.A. Information Technology Management - 60',
        "careId" : '10008090_FI_ITM'
    },
    {
        "name" : 'M.A. Information Technology Management - 120',
        "careId" : '10008089_FI_ITM'
    },
    {
        "name" : 'M.A. Digital Innovation & Intrapreneurship - 60',
        "careId" : '10008133_FI_DII'
    },
    {
        "name" : 'M.A. Project Management - 60', //today
        "careId" : '10008088_FI_PM'
    },
    {
        "name" : 'M.A. Project Management - 120', //today
        "careId" : '10008087_FI_PM'
    },
    {
        "name" : 'M.A. International Management - 60',
        "careId" : '10008044_FI'
    },
    {
        "name" : 'M.A. International Management - 120',
        "careId" : '10008045_FI'
    },
    {
        "name" : 'M.A. International Management - Specialisation AI & Robotics - 120',
        "careId" : '10008045_FI_AR'
    },
    {
        "name" : 'M.A. International Management - Specialisation Big Data Management - 120',
        "careId" : '10008045_FI_BDM'
    },
    {
        "name" : 'M.A. International Management - Specialisation Engineering Management - 120',
        "careId" : '10008045_FI_EM'
    },
    {
        "name" : 'M.A. International Management - Specialisation IT Management - 120',
        "careId" : '10008045_FI_ITM'
    },
    {
        "name" : 'M.A. International Management - Specialisation International Marketing - 120',
        "careId" : '10008045_FI_IM'
    },
    {
        "name" : 'M.A. International Management - Specialisation Finance & Accounting - 120',
        "careId" : '10008045_FI_FA'
    },
    {
        "name" : 'M.Eng. Engineering Management - 60',
        "careId" : '10008075_FI'
    }


]



//online only
mtCheckOnline = [
    'M.Eng. Engineering Management - 60',
    'M.A. International Management - Specialisation Finance & Accounting - 120',
    'M.A. International Management - Specialisation IT Management - 120',
    'M.A. International Management - Specialisation Engineering Management - 120',
    'M.A. International Management - Specialisation International Marketing - 120',
    'M.A. International Management - Specialisation Big Data Management - 120',
    'M.A. International Management - Specialisation AI & Robotics - 120',
    'M.A. International Management - 120',
    'M.A. International Management - 60',
    'M.A. Management - Specialisation International Marketing - 60',
    'M.A. Management - Specialisation IT Management - 60',
    'M.A. Management - Specialisation Big Data Management - 60',
    'M.A. Management - Specialisation Engineering Management - 60',
    'M.A. Management - Specialisation Finance & Accounting - 60',
    'M.A. Management - 60',
    'B.Sc. Computer Science - 180',
    'B.Sc. Business & IT - 180',
    'B.Eng. Industrial Engineering & Management - 180',
    'MBA - Specialisation IT Management - 90',
    'MBA - Specialisation Engineering Management - 90',
    'MBA - Specialisation Finance & Accounting - 90',
    'MBA - Specialisation International Marketing - 90',
    'MBA - Specialisation Big Data Management - 90',
    'MBA - Master of Business Administration - 90',
    'MBA One-Year - 60',
    'M.Sc. Computer Science - 120',
    'B.Eng. Robotics - 180',
    'B.A. Business Administration - 180',
    'B.Sc. Data Science - 180',
    'B.A. Digital Business - 180',
    'B.Sc. Cyber Security - 180',
    'B.A. Entrepreneurship - 180',
    'M.Sc. Data Science - 60',
    'M.Sc. Data Science - 120',
    'M.Sc. Artificial Intelligence - 60',
    'M.Sc. Artificial Intelligence - 120',
    'M.A. Marketing Management - 60',
    'M.A. Marketing Management - 120',
    'M.A. Management - Specialisation Leadership - 60',
    'M.Sc. Cyber Security - 120',
    'M.A. Information Technology Management - 60',
    'M.A. Information Technology Management - 120',
    'B.Sc. Applied Artificial Intelligence - 180',
    "M.Sc. Data Management - 60",
    "M.Sc. Data Management - 120",
    "B.A. International Healthcare Management - 180",
    "M.A. International Healthcare Management - 120",
    "M.A. International Healthcare Management - 60",
    "M.A. Human Resource Management - 120",
    "M.A. Human Resource Management - 60",
    "B.Sc. Software Development - 180",
    "M.A. Digital Innovation & Intrapreneurship - 60",
    "M.Sc. Business Intelligence - 60",
    "M.Sc. Business Intelligence - 120",
    "M.Sc. Finance, Accounting & Taxation - 120",
    "M.A. Innovation & Entrepreneurship - 120",
    "B.A. Aviation Management - 180",
    "B.A. Hospitality Management - 180",
    "B.A. International Management - 180",
    "M.A. Project Management - 60",
    "M.A. Project Management - 120",
    "MBA - Specialisation E-Sports Management - 90"

]

function fullOut(dip) {
    let option;
    function populate(x,w,t) {
            //t = [];
            //showing each obj its attributes
            for (let i = 0; i < mT.length ; i++) {
                if(mT[i].name.startsWith(dip)){
                    //t.push();
                    option = document.createElement('option');
                    option.text = mT[i].name;
                    option.value = mT[i].careId;
                    w.add(option);
                }
            }

        }

        populate('studies',InitiateDropDown('studyProgram'),'name');

        function InitiateDropDown(y) {
        let dropdown = document.getElementById(y);
        dropdown.length = 0;
        //let defaultOption = document.createElement('option');
        //defaultOption.text = z;
        //dropdown.add(defaultOption);
        dropdown.selectedIndex = 0;

        return dropdown;
    }



}

function validatefilledIn() {
    let requiredFields = document.getElementsByTagName('input');
    let arr = Array.from(requiredFields).filter(input => input.required);
    let arr2 = $("label").filter(".pl-0");

    if ($('#Degree').find(":selected").text().startsWith('S')) { $('#Degree').css('border-color', 'red'); } else { $('#Degree').css('border-color', 'green'); }
    if ($('#studyProgram').find(":selected").text().startsWith('S')) { $('#studyProgram').css('border-color', 'red'); } else { $('#studyProgram').css('border-color', 'green'); }


    if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && !($('#Degree').find(":selected").text().startsWith('S') || $('#studyProgram').find(":selected").text().startsWith('S') )){
            for (let i = 0; i < 2; i++) {
                if ($('input[name=studyLocation]:checked').length === 0) {
                    arr2[i].style.borderColor = 'red'
                    setTimeout(function () {
                        arr2[i].style.borderColor = ''
                    },3000)
                } else {
                    arr2[i].style.borderColor = 'green'
                }
            }

    }

    for(let i=0; i<arr.length;i++){
        if(arr[i].value == "") {
            $(arr[i]).val('').css( "border-color", "red" );
        } else {
            $(arr[i]).css( "border-color", "green" );
        }
    }

    for (let i = 8; i < 12; i++) {
        if ($('input[name=gender]:checked').length === 0) {
            arr2[i].style.borderColor = 'red'
            setTimeout(function () {
                arr2[i].style.borderColor = ''
            },3000)
        } else {
            arr2[i].style.borderColor = 'green'
        }
    }


    //document.getElementsByClassName('study-model')[0].value


}


function checkingFields() {
     let myNameCheck = document.getElementById('first-name').value;
    let surNameCheck = document.getElementById('last-name').value;

    if ($('#voucher').val()=== ''){
        validatefilledIn();
        $("#myModalVoucher").modal();
        document.getElementById("submit").disabled = false;
        return false;
    } else if ($('#Degree').find(":selected").text().startsWith('S') || $('#studyProgram').find(":selected").text().startsWith('S')){
        validatefilledIn();
        $("#myModalStudyProgramme").modal();
        document.getElementById("submit").disabled = false;
        return false;
    } else if (!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=studyLocation]:checked').length === 0){
            validatefilledIn();
            $("#myModalStudyModel").modal();
            document.getElementById("submit").disabled = false;
            return false;
    } else if($('input[name=timemodel]:checked').length === 0) {
            validatefilledIn();
            $("#timeModelModal").modal();
            document.getElementById("submit").disabled = false;
            return false;
    } else if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=intake]:checked').length === 0 && $('input[name="studyLocation"]:checked').val() === "Study on campus") {
            validatefilledIn();
            $("#myModalStartDate").modal();
            document.getElementById("submit").disabled = false;
            return false;
    } else if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=intake]:checked').length > 0 && $('input[name=studyLocation]:checked').length > 0 && $('input[name=site]:checked').length === 0) {
            validatefilledIn();
            $("#myModalSite").modal();
            document.getElementById("submit").disabled = false;
            return false;
    }else if($('input[name=gender]:checked').length === 0) {
            validatefilledIn();
            $("#myModalgender").modal();
            document.getElementById("submit").disabled = false;
            return false;
    } else if(document.getElementById('phone').value.length === 0) {
            validatefilledIn();
            $("#ModalPhone").modal();
            document.getElementById("submit").disabled = false;
            return false;
    } else if (   myNameCheck == "" || surNameCheck == "" || document.getElementById('street').value === "" || document.getElementById('e-mail').value === "" || document.getElementById('date-of-birth').value === "" || document.getElementById('city').value === "" || document.getElementById('city').value === ""  ) {
        validatefilledIn();
        $("#myModal").modal();
        document.getElementById("submit").disabled = false;
        return false;
    } else {
        return true
    }




}


function activate() {
    PriceChange();
    if (document.getElementById("submit").disabled === false){
        document.getElementById("submit").disabled = true;
    if (!checkingFields()) {
        let x = EmptyFields();
        scrollTo();
        errorPush(x)
        return 0;
    }
    $('.loading').toggleClass("hide")
    let degree = document.getElementById('Degree').value;
    let myName = document.getElementById('first-name').value;
    let surName = document.getElementById('last-name').value;
    let street = document.getElementById('street').value;
    let streetno = document.getElementById('nr').value;
    let postcode = document.getElementById('postcode').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let studyStartDate = document.getElementsByClassName('study-start')[0].value;
    let fullNumber = document.getElementsByClassName('iti__selected-dial-code')[0].innerText + document.getElementById('phone').value;
    let mobileNumber = document.getElementById('phone').value;
    let email = document.getElementById('e-mail').value;
    let studyProgram = document.getElementById('studyProgram').value;
    //let englishLevel = document.getElementsByClassName('EnglishLevelSummary')[0].value;
    //let budgetPerMonth = document.getElementsByClassName('budgetSummary')[0].value;
    let campsite = document.getElementsByClassName('campusSite')[0].value;


    /*let workExperience = 10;
    if (document.getElementsByClassName('workExperienceSummary')[0].value !== "") {
            workExperience = document.getElementsByClassName('workExperienceSummary')[0].value;
    }*/

    let diplom = document.getElementsByClassName('Diploma')[0].value;
    let gender = document.getElementsByClassName('gender')[0].value;
    let finalPrice =  (parseFloat(document.getElementsByClassName('finalPrice')[0].innerHTML)/parseFloat(document.getElementsByClassName('study-model')[0].value))/*-(800/parseFloat(document.getElementsByClassName('study-model')[0].value))*/ ;
    let monthlyPrice = document.getElementsByClassName('monthlyPrice')[0].innerHTML;
    let dateOfBirth = document.getElementById('date-of-birth').value;
    /*let location = "1";
    if (document.getElementsByClassName('campus')[0].value === 'Study online' || document.getElementsByClassName('campus')[0].value === 'Study on campus'){
        location = "3";
    } else  { //1 is badhonnef 4 is berlin
        location = "2";
    }*/
        if(businessUnit === "cs") {
            //if (files.files.length === 0 ){
                completed = true;
                currentPage = 3;

                //console.log('without files cs program')
                console.log('without files cs program or with files as well')
            //}
        }

    let intake = null;
    if (document.getElementsByClassName('intake')[0].value !== "") {
        //studyStartDate = null;
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()) {
                intake = document.getElementsByClassName('intake')[0].value
            }
        }
        }
    let studyDuration = document.getElementsByClassName('study-model')[0].value;

    //let eSignature = document.getElementById('eSignature').checked
    //let optIn = document.getElementById('toCheck').checked

    voucherVar = document.getElementById('voucher').value
    let StudyAdvisor = document.getElementById('StudyAdvisor').value



        let t = {
        "degree" : degree,
        "name" : myName,
        "surName" : surName,
        "street" : street,
        "streetno" : streetno,
        "postcode" : postcode,
        "city" : city,
        "country" : country,
        "mobileNumber" : fullNumber,
        "email" : email,
        "studyProgram" : studyProgram,
        "studyStartDate" : studyStartDate,
        "englishLevel" : "10",
        "workExperience" : 10,
        "budgetPerMonth" : "Above 300 EUR",
        "diplom" : diplom,
        "gender" : gender,
        "finalPrice" : finalPrice,
        "dateOfBirth" : dateOfBirth,
        "studyDuration" : studyDuration,
        "locationSite" : locationSite,
        "intake" : intake,
        "voucher" : voucherVar,
        //"eSignature" : eSignature,
        "optIn" : false,
        "businessUnit" : businessUnit,
        "key" : "",
        "completed" : completed,
        "currentPage" : currentPage,
        "obwVersion": obwVersion,
        "agbVersion": agbVersion,
        "StudyAdvisor": StudyAdvisor

    }
    let obj;

    fetch('https://api.careerpartner.eu/centraldataservice-api/lara/api/v2/application/obw' , {
        method : 'POST',
        headers: {
            //Authorization: "TPPDVgSNCvp4TY5y",
            Authorization: "74UgeuBcRZjX6akV",
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(
            {
                "key": null,
                "completed": completed,
                "currentPage": currentPage,
                "businessUnit": businessUnit,
                "version": null,
                "formVersion": "ExternalApplication",
                "courseFormat" : "B2B",
                "locale": "en",
                "obwVersion": obwVersion,
                "gender": gender,
                "firstName": myName,
                "lastName": surName,
                "nationality": country,
                "dateOfBirth": dateOfBirth,
                "placeOfBirth": country,
                "countryOfBirth": country,
                "email": email,
                "phone": fullNumber,
                "street": street,
                "streetNo": streetno,
                "zip": postcode,
                "city": city,
                "country": country,
                "studyProgram": studyProgram,
                "studyStartDate": studyStartDate,
                "intake": intake,
                "studySite": locationSite,
                "duration": studyDuration,
                "monthlyFee": finalPrice,
                "graduationFee": 0,
                "voucherId": voucherVar,
                "paymentInterval": null,
                "directDebit": directDebit,
                "accountOwner": null,
                "accountBank": null,
                "accountIBAN": null,
                "accountBIC": null,
                "agbVersion": agbVersion,
                "hasStudied": null,
                "hasDiploma": diplom,
                "referralCode": null,
                "referrerName": null,
                "referrerEmail": null,
                "ectsAchieved": null,
                "masterPermission": null,
                "ipad": false,
                "attendanceDays": null,
                "englishLevel": "5",
                "workExperience": 5,
                "budgetPerMonth": "Above 300 EUR",
                "attendeeProgram": null,
                "isESigningAgreed": false,
                "startMonth": null,
                "gaClientId": th().get('clientId'),
                "gaGuid": th().get('userId'),
                "gaTrackingId": th().get('trackingId'),
                "gaReferrer": th().get('referrer'),
                "gtmUtm": z,
                "gtmGclid": q,
                "gtmSource": null,
                "optIn": false
            }
        )
    }).then(res => {
        if (!res.ok){
            throw Error('error getting the API to POST')
        }
        return res.json()


    })
        .then(data => {
            obj = data;

        }).then(
        () => {
            t.key = obj.key
            console.log(obj.key)


            /*for (let i = 0; i < $('.file-row').length; i++) {
                console.log(i)
                data.append('upload', files.files[i])
                fetch('https://api.careerpartner.eu/centraldataservice-api/lara/api/v2/file/'+obj.key+'/file-upload?type=application', {
                    method: 'POST',
                    body: data
                }).then(res => {
                        if (!res.ok){
                            throw Error('error getting the API to POST')
                        }
                        console.log(res);
                    }
                )
            }*/
            //study-model it as a json
            localStorage.setItem('allData', JSON.stringify(t));
            //localStorage.setItem('Keys', JSON.stringify(t));
            //Long link in case variables arent accessible in the success page
            //window.location.href='success.html?firstname='+ myName+'&surName='+surName+'&country='+country+'&email='+email+'&mobileNumber='+mobileNumber+'&address='+address+'&studyProgram='+studyProgram+'&key='+obj.key
            //For shorting the link
            window.dataLayer.push({
                event: 'ee-transaction',
                eventData: {
                    label: '',
                    action: 'transaction',
                    category: 'ecommerce'
                },
                ecommerce: {
                    purchase: {
                        actionField: {
                            id: t.key
                        },
                        products: [
                            {
                                name: $("#studyProgram :selected").text(),
                                id: t.studyProgram,
                                category: 'studiegang/' + degree.toLowerCase(),
                                variant: t.studyDuration+'Monat~'+t.studyStartDate,
                                quantity: 1,
                                brand: t.locationSite,
                                value: t.finalPrice,
                                location : campsite,
                                duration: t.duration,
                                intake: t.intake,
                                businessUnit : t.businessUnit

                            }
                        ]
                    }
                },
                user: {
                    id: t.key
                },
                mqa: {
                    budget: "Above 300 EUR",
                    englishlevel: "10",
                    workExperience: 10,
                    diploma : diplom
                }
            });
            console.log(t.businessUnit)
            console.log(t.completed)
            setTimeout(function () {
                window.location.href='./upload/index.html?key='+t.key
            },5000)

        }
    )
        .catch(error => console.log(error))
    return false;
}
}

//**************************************************


function findOutAndChange(x, y) {
    let D1 = document.getElementById(x);
    let D2 = document.getElementsByClassName(y);
    if ( y === 'study-programme') {
           // getNameFromApi(D1.value)
        //setTimeout(PriceChange, 1000);
    } else if(x === 'datepicker') {
        for (let i = 0; i < D2.length; i++) {
            D2[i].value = D1.value;
        }
    }else if(y === 'study-model') {
        // $( "#graduationFee" ).removeClass( "hide" )
        // $( "#graduationFee2" ).removeClass( "hide" )
        for (let i = 0; i < D2.length; i++) {
            D2[i].value = D1.value;
            PriceChange();
        }
        if ($("input[name='timemodel']:checked").length !== 0){
            step1();
        }
    }
    else if(y === 'gender') {
        for (let i = 0; i < D2.length; i++) {
            if (D1.value === 'Male') {
                D2[i].value = 1
            } else if (D1.value === 'Female'){
                D2[i].value = 2
            }else if (D1.value === 'Non-Binary'){
                D2[i].value = 1
            } else {
                D2[i].value = 1
            }
        }
    }
    else if(y === 'diploma') {
        for (let i = 0; i < D2.length; i++) {
            if (D1.value === 'Yes') {
                D2[i].value = true
            } else {
                D2[i].value = false
            }
        }
    }
    else if(x === 'Degree') {
        for (let i = 0; i < D2.length; i++) {
            if (D1.value === 'Bachelor') {

                D2[i].value = D1.value;
            } else {

                D2[i].value = D1.value;
            }
        }
    }
    else if(x === 'winterintake' || x === 'winterintake2') { //intakes here
                document.getElementsByClassName("intake")[0].value = "70";
                document.getElementsByClassName("intake")[1].value = "70";
        /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
        checkIntakeStart()
    } else if(x === 'summerintake' || x === 'summerintake2') {
        document.getElementsByClassName("intake")[0].value = "71";
        document.getElementsByClassName("intake")[1].value = "71";
        /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
        checkIntakeStart()
    } else if(x === 'winterintake3') {
        document.getElementsByClassName("intake")[0].value = "72";
        document.getElementsByClassName("intake")[1].value = "72";
        /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
        checkIntakeStart()
    }else if(x === 'summerintake3') {
        document.getElementsByClassName("intake")[0].value = "73";
        document.getElementsByClassName("intake")[1].value = "73";
        /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
        checkIntakeStart()
    }else if(x === 'winterintake4') {
        document.getElementsByClassName("intake")[0].value = "74";
        document.getElementsByClassName("intake")[1].value = "74";
        /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
        checkIntakeStart()
    }

    else {
        for (let i = 0; i < D2.length; i++) {
            D2[i].value = D1.value;
        }
    }

}



function HideElements(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.display = 'none'
    }
}

let toHide = document.getElementsByClassName('toHide');
HideElements(toHide);



function verifyStudyModel() {
    for (let i = 0; i <  document.getElementsByClassName('models').length; i++) {
        if (document.getElementsByClassName('models')[i].checked){
            document.getElementsByClassName('study-model')[0].value = document.getElementsByClassName('models')[i].value;
            document.getElementsByClassName('study-model')[1].value = document.getElementsByClassName('models')[i].value;
        }
    }
}
function checkLocation() {

    if(mtCheckOnline.includes($("#studyProgram :selected").text())) {
        console.log("online program")
        $('.labelMonthlyPrice').text('Monthly Price With Scholarship')
        $('.labelMonthlyPrice').css("line-height", "18px");
        setTimeout(function () {
            $("#datepicker").show()
            $("#intakes").hide()
        },100)

        //document.getElementById('study-on-campus').disabled = true;
        //document.getElementById('study-on-campus').checked = true;
        document.querySelectorAll(".campus").forEach(item => {
            item.value = 'Study online'

        })
        document.getElementById("something").value = 'Study online'
        //$("#something").css("background","url(../images/online.png) 95% center no-repeat");
        $( "#something" ).removeClass( "study-campus" )
        $( "#something" ).addClass( "study-online" )

        //$("#something").css("background-color","#F5F4F3");
        $('#campus1').css("background", "url(./images/online.png) 95% center no-repeat");
        $('#campus2').css("background", "url(./images/online.png) 95% center no-repeat");


        setTimeout(function () {
            $( "#rowLocOne" ).removeClass( "hide" )
            $( "#rowLocTwo" ).addClass( "hide" )
            $( "#rowLocThree" ).addClass( "hide" )
            $( "#rowLocFour" ).addClass( "hide" )

            // $( "#semesterOnCampusOnly" ).addClass( "hide" )
            // $( "#semesterVariable" ).addClass( "hide" )
            // $( "#semesterVariable2" ).addClass( "hide" )

            $("div").find("label[for=monthstwo]").show()
            $("div").find("label[for=monthsthree]").show()

            $(".siteRow").hide()
        },100)


        //deleting the statement
        //$( ".statements" ).addClass( "hide" )
    } else if (!mtCheckOnline.includes($("#studyProgram :selected").text())){
        $( "#rowLocOne" ).addClass( "hide" )
        $( "#rowLocTwo" ).removeClass( "hide" )
        $( "#rowLocThree" ).removeClass( "hide" )
        $( "#rowLocFour" ).removeClass( "hide" )
        $(".siteRow").show()

        // $( "#semesterOnCampusOnly" ).addClass( "hide" )
        // $( "#semesterVariable" ).addClass( "hide" )
        // $( "#semesterVariable2" ).addClass( "hide" )

        $("div").find("label[for=monthstwo]").show()
        $("div").find("label[for=monthsthree]").show()

        //deleting the statement
        //$( ".statements" ).removeClass( "hide" )
    }



    //if(mtCheck.includes($("#studyProgram :selected").text())){
    if($('input[name="studyLocation"]:checked').val() === "Study on campus"){
        $("#datepicker").hide()
        $("#intakes").show()
        $("#site").show()
        $(".siteRow").show()
        $('.labelMonthlyPrice').text('Monthly Price')
        $('.labelMonthlyPrice').css("line-height", "44px");
        //document.getElementById('study-on-campus').disabled = true;
        //document.getElementById('study-on-campus').checked = true;
        /*document.querySelectorAll(".campus").forEach(item => {
            item.value = 'On Campus'
        })*/
        // document.getElementById("textInCheckbox").innerHTML = 'Study On Campus'
        //document.getElementById("something").value = 'Study on campus'

        // $("#something").css("background","url(../images/on-campus.png) 95% center no-repeat");
        // $("#something").css("background-color","#F5F4F3");
        /*$( "#something" ).removeClass( "study-online" )
        $( "#something" ).addClass( "study-campus" )*/

        $('#campus1').css("background", "url(./images/on-campus.png) 95% center no-repeat");
        $('#campus2').css("background", "url(./images/on-campus.png) 95% center no-repeat");

        //$( "#rowLocOne" ).removeClass( "hide" )
        //$( "#rowLocTwo" ).addClass( "hide" )
        //$( "#rowLocThree" ).addClass( "hide" )
        //$( "#rowLocFour" ).addClass( "hide" )

        // $( "#semesterOnCampusOnly" ).removeClass( "hide" )
        // $( "#semesterVariable" ).addClass( "hide" )
        // $( "#semesterVariable2" ).addClass( "hide" )
        $( "#rowLocOne" ).addClass( "hide" )
        $( "#rowLocTwo" ).removeClass( "hide" )
        $( "#rowLocThree" ).removeClass( "hide" )
        $( "#rowLocFour" ).removeClass( "hide" )


        $("div").find("label[for=monthstwo]").hide()
        $("div").find("label[for=monthsthree]").hide()


        //deleting the statement
        //$( ".statements" ).addClass( "hide" )



    } else {
        $('.labelMonthlyPrice').text('Monthly Price With Scholarship')
        $('.labelMonthlyPrice').css("line-height", "18px");
        $("#datepicker").show()
        $("#intakes").hide()
        $("#site").hide()
        $(".siteRow").hide()
        //document.getElementById('study-on-campus').disabled = true;
        //document.getElementById('study-on-campus').checked = true;
        /*document.querySelectorAll(".campus").forEach(item => {
            item.value = 'Online'

        })*/
        //document.getElementById("something").value = 'Study online'
        //$("#something").css("background","url(../images/online.png) 95% center no-repeat");
        //$( "#something" ).removeClass( "study-campus" )
        //$( "#something" ).addClass( "study-online" )

        //$("#something").css("background-color","#F5F4F3");
        //$("#campus1").css("background","url(./images/online.png) 95% center no-repeat !important");
        //$("#campus2").css("background","url(./images/online.png) 95% center no-repeat !important");

        $('#campus1').css("background", "url(./images/online.png) 95% center no-repeat");
        $('#campus2').css("background", "url(./images/online.png) 95% center no-repeat");

        /*$( "#rowLocOne" ).removeClass( "hide" )
        $( "#rowLocTwo" ).addClass( "hide" )
        $( "#rowLocThree" ).addClass( "hide" )
        $( "#rowLocFour" ).addClass( "hide" )*/

        // $( "#semesterOnCampusOnly" ).addClass( "hide" )
        // $( "#semesterVariable" ).addClass( "hide" )
        // $( "#semesterVariable2" ).addClass( "hide" )

        $("div").find("label[for=monthstwo]").show()
        $("div").find("label[for=monthsthree]").show()


        //deleting the statement
        //$( ".statements" ).removeClass( "hide" )
    }
/*Old code*/


    /*if (!mtCheckOnline.includes($("#studyProgram :selected").text()) && !mtCheck.includes($("#studyProgram :selected").text())){
        $('.labelMonthlyPrice').text('Monthly Price With Scholarship')
        $('.labelMonthlyPrice').css("line-height", "18px");
        $("#datepicker").show()
        $("#intakes").hide()
        //document.getElementById('study-on-campus').disabled = true;
        //document.getElementById('study-on-campus').checked = true;
        document.querySelectorAll(".campus").forEach(item => {
            item.value = 'Online or on campus'

        })

        $( "#rowLocOne" ).addClass( "hide" )
        $( "#rowLocTwo" ).removeClass( "hide" )
        //$( "#rowLocThree" ).removeClass( "hide" )
        $( "#rowLocFour" ).removeClass( "hide" )

        $("#campus1").css("background","url()");
        $("#campus2").css("background","url()");

        // $( "#semesterOnCampusOnly" ).addClass( "hide" )
        // $( "#semesterVariable" ).removeClass( "hide" )
        // $( "#semesterVariable2" ).removeClass( "hide" )

        $("div").find("label[for=monthstwo]").show()
        $("div").find("label[for=monthsthree]").show()


        //adding the statement
        $( ".statements" ).removeClass( "hide" )

    }*/
}


function PriceChange() {
    let x = 0;


    if ($('input[name="studyLocation"]:checked').val() === "Study on campus" && $("#studyProgram :selected").text().includes('180')) {

        //disC = discMyStu180B
        //voucherVar = "IUINTLCAMPUSDISCOUNT23"

    } else if ($('input[name="studyLocation"]:checked').val() === "Study on campus" && $("#studyProgram :selected").text().includes('90')){
        //disC = discMyStu90M
        //voucherVar = "IUINTLCAMPUSDISCOUNT16"
    } else if (($('input[name="studyLocation"]:checked').val() === "Study on campus" && $("#studyProgram :selected").text().includes('60'))){
        //disC = discMyStu60M
        //voucherVar = "IUINTLCAMPUSDISCOUNT13"
    } else if ($('input[name="studyLocation"]:checked').val() === "Study on campus" && $("#studyProgram :selected").text().includes('120')){
        //disC = discMyStu120M
        //voucherVar = "IUINTLCAMPUSM120DISCOUNT13"
    } else {
        //disC = storeDisc
    }


    switch (mtCheck.includes($("#studyProgram :selected").text())) {
        case true :
        {

            if ($("#studyProgram :selected").text().includes('180')) {
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '48' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '23490'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '23490'
                        
                        x = parseFloat('23490')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        break;
                    }
                    case '72' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '26990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '26990'
                        
                        x = parseFloat('26990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/72).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/72).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '20990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '20990'
                        
                        x = parseFloat('20990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('60')){

                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '18' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '13950'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '13950'
                        
                        x = parseFloat('13950')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        break;
                    }
                    case '24' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '14550'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '14550'
                        
                        x = parseFloat('14550')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '11950'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '11950'
                        
                        x = parseFloat('11950')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/12).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/12).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('120')){
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '36' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '19990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '19990'
                        
                        x = parseFloat('19990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        break;
                    }
                    case '48' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '23490'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '23490'
                        
                        x = parseFloat('23490')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '17990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '17990'
                        
                        x = parseFloat('17990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('90')){
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '24' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '17990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '17990'
                        
                        x = parseFloat('17990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        break;
                    }
                    case '36' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '19990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '19990'
                        
                        x = parseFloat('19990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '15990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '15990'
                        
                        x = parseFloat('15990')
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                    }
                }
            }

            break;
        }

        default : {

            if ($("#studyProgram :selected").text().includes('180')) {
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '48' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '23490'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '23490'
                        
                        x = parseFloat('23490')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        break;
                    }
                    case '72' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '26990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '26990'
                        
                        x = parseFloat('26990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/72).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/72).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '20990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '20990'
                        
                        x = parseFloat('20990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('60')){

                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '18' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '13950'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '13950'
                        
                        x = parseFloat('13950')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        break;
                    }
                    case '24' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '14550'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '14550'
                        
                        x = parseFloat('14550')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '11950'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '11950'
                        
                        x = parseFloat('11950')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/12).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/12).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('120')){
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '36' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '19990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '19990'
                        
                        x = parseFloat('19990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        break;
                    }
                    case '48' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '23490'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '23490'
                        
                        x = parseFloat('23490')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/48).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '17990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '17990'
                        
                        x = parseFloat('17990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                    }
                }
            } else if ($("#studyProgram :selected").text().includes('90')){
                //verifyStudyModel()
                switch (document.getElementsByClassName('study-model')[0].value) {
                    case '24' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '17990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '17990'
                        
                        x = parseFloat('17990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/24).toFixed(1))
                        break;
                    }
                    case '36' : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '19990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '19990'
                        
                        x = parseFloat('19990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/36).toFixed(1))
                        break;
                    }
                    default : {
                        document.getElementsByClassName('finalPrice')[0].innerHTML = '15990'
                        document.getElementsByClassName('finalPrice')[1].innerHTML = '15990'
                        
                        x = parseFloat('15990')*disC
                        document.getElementsByClassName('discountPrice')[0].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('discountPrice')[1].innerHTML = Math.ceil(x.toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[0].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                        document.getElementsByClassName('monthlyPrice')[1].innerHTML = Math.ceil((parseFloat(x)/18).toFixed(1))
                    }
                }
            }
        }
    }


}



document.getElementById("Degree").addEventListener("change", function() {
    if ($("#Degree :selected").text().includes('Master')){
        $( "#rowLocOne" ).removeClass( "hide" )
        $( "#rowLocTwo" ).addClass( "hide" )
        $( "#rowLocThree" ).addClass( "hide" )
        $( "#rowLocFour" ).addClass( "hide" )
    } else {

        /*$( "#rowLocOne" ).addClass( "hide" )
        $( "#rowLocTwo" ).removeClass( "hide" )
        $( "#rowLocThree" ).removeClass( "hide" )
        $( "#rowLocFour" ).removeClass( "hide" )*/
        //ONLINE ONLY
        $( "#rowLocOne" ).removeClass( "hide" )
        $( "#rowLocTwo" ).addClass( "hide" )
        $( "#rowLocThree" ).addClass( "hide" )
        $( "#rowLocFour" ).addClass( "hide" )
    }



    $('.labelMonthlyPrice').text('Monthly Price With Scholarship')
    $('.labelMonthlyPrice').css("line-height", "18px");
    //document.getElementById('study-on-campus').disabled = true;
    //document.getElementById('study-on-campus').checked = true;
    document.querySelectorAll(".campus").forEach(item => {
        item.value = 'Study online'

    })
    document.getElementById("something").value = 'Study online'
    //$("#something").css("background","url(../images/online.png) 95% center no-repeat");
    $( "#something" ).removeClass( "study-campus" )
    $( "#something" ).addClass( "study-online" )

    //$("#something").css("background-color","#F5F4F3");
    $('#campus1').css("background", "url(./images/online.png) 95% center no-repeat");
    $('#campus2').css("background", "url(./images/online.png) 95% center no-repeat");

    //checkLocation()

    $("#campus1").css("background","url()");
    $("#campus2").css("background","url()");

    /* $('#datepicker').datepicker("setDate", +10 )
    $('#datepicker').datepicker("option",{ minDate: +10})
    $('#datepicker').datepicker("setDate", +10 )
    $('#datepicker').datepicker("option",{ minDate: +10})

    setTimeout(function () {
        document.querySelectorAll('.study-start').forEach(item => {
            item.value = $( "#datepicker" ).val()
        })
    },100) */


            //document.getElementsByClassName("study-start")[0].value = $( "#datepicker" ).val()

    // $( "#semesterVariable" ).removeClass( "hide" )
    // $( "#semesterOnCampusOnly" ).addClass( "hide" )


//graduation fee
//     $( "#graduationFee" ).removeClass( "hide" )
//     $( "#graduationFee2" ).removeClass( "hide" )


//time model showing up
    $("div").find("label[for=monthstwo]").show()
    $("div").find("label[for=monthsthree]").show()



    if(document.getElementById("Degree").value == 'Master'){
        fullOut('M');
        starting()
        $(".siteRow").hide()
        //document.getElementById("bgrInformation").innerHTML = 'Do you have a Bachelor Diploma?' ;
        //document.getElementById("workExperienceRow").classList.remove("hide");
        document.getElementsByClassName('numMonth')[0].innerHTML = 12;
        document.getElementsByClassName('numMonth')[1].innerHTML = 18;
        document.getElementsByClassName('numMonth')[2].innerHTML = 24;
        document.getElementById('monthsone').value = '12';
        document.getElementById('monthstwo').value = '18';
        document.getElementById('monthsthree').value = '24';

            document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
            document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();

            // trigger the change function of the study program to fix the date picker
            document.getElementById('studyProgram').dispatchEvent(new CustomEvent('change'));   

        document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
        document.getElementsByClassName("finalPrice")[1].classList.add("crossed");

        PriceChange();

    } else {
        fullOut('B');
        starting()
        $(".siteRow").show()
        //document.getElementById("bgrInformation").innerHTML = 'Do you have a High School Diploma?' ;
        //document.getElementById("workExperienceRow").classList.add("hide");
        document.getElementsByClassName('numMonth')[0].innerHTML = 36;
        document.getElementsByClassName('numMonth')[1].innerHTML = 48;
        document.getElementsByClassName('numMonth')[2].innerHTML = 72;
        document.getElementById('monthsone').value = '36';
        document.getElementById('monthstwo').value = '48';
        document.getElementById('monthsthree').value = '72';

            document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
            document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();


            // trigger the change function of the study program to fix the date picker
            document.getElementById('studyProgram').dispatchEvent(new Event('change'));

        document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
        document.getElementsByClassName("finalPrice")[1].classList.add("crossed");


        PriceChange();

    }

});

document.getElementById("studyProgram").addEventListener("change", function() {

    checkIpAndChange();

    checkLocation()

    //checkIpAndChange(); changed position

    // $( "#graduationFee" ).addClass( "hide" )
    // $( "#graduationFee2" ).addClass( "hide" )

    if($("#studyProgram :selected").text() === "B.A. Aviation Management - 180" || $("#studyProgram :selected").text() === "B.A. Hospitality Management - 180"){
        $('#datepicker').datepicker("setDate", new Date(2022,8,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,8,1)})
    } else if($("#studyProgram :selected").text() === "M.Sc. Data Management - 60" || $("#studyProgram :selected").text() === "M.Sc. Business Intelligence - 60" ) {
        $('#datepicker').datepicker("setDate", new Date(2023,8,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2023,8,1)})
    } else if($("#studyProgram :selected").text() === "B.Eng. Engineering - 180" ){
        $('#datepicker').datepicker("setDate", new Date(2022,7,15) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,7,15)})
    }else if($("#studyProgram :selected").text() === "M.Sc. Data Management - 120" ){
        $('#datepicker').datepicker("setDate", new Date(2023,2,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2023,2,1)})
    } else if($("#studyProgram :selected").text() === "B.A. International Healthcare Management - 180" || $("#studyProgram :selected").text() === "M.A. International Healthcare Management - 120"){
        $('#datepicker').datepicker("setDate", new Date(2022,3,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,3,1)})
    } else if($("#studyProgram :selected").text() === "M.A. International Healthcare Management - 60" ){
        $('#datepicker').datepicker("setDate", new Date(2022,8,30) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,8,30)})
    } else if( $("#studyProgram :selected").text() === "B.Sc. Software Development - 180"){
        $('#datepicker').datepicker("setDate", new Date(2022,3,15) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,3,15)})
    }else if( $("#studyProgram :selected").text() === "M.A. Digital Innovation & Intrapreneurship - 60"){
        $('#datepicker').datepicker("setDate", new Date(2022,10,16) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,10,16)})
    }else if( $("#studyProgram :selected").text() === "M.Sc. Business Intelligence - 120"){
        $('#datepicker').datepicker("setDate", new Date(2023,2,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2023,2,1)})
    }else if( $("#studyProgram :selected").text() === "M.Sc. Finance, Accounting & Taxation - 120" || $("#studyProgram :selected").text() === "M.A. Innovation & Entrepreneurship - 120"){
        $('#datepicker').datepicker("setDate", new Date(2022,4,16) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,4,16)})
    }else if( $("#studyProgram :selected").text() === "M.A. Human Resource Management - 60" || $("#studyProgram :selected").text() === "M.Sc. Artificial Intelligence - 60"){
        $('#datepicker').datepicker("setDate", new Date(2022,6,15) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,6,15)})
    }else if($("#studyProgram :selected").text() === "M.A. Project Management - 60"){
        $('#datepicker').datepicker("setDate", new Date(2022,11,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,11,1)})
    }else if($("#studyProgram :selected").text() === "M.A. Project Management - 120"){
        $('#datepicker').datepicker("setDate", new Date(2022,5,1) );
        $('#datepicker').datepicker("option",{ minDate: new Date(2022,5,1)})
    } else {
        $('#datepicker').datepicker("setDate", +10 )
        $('#datepicker').datepicker("option",{ minDate: +10})
        $('#datepicker').datepicker("setDate", +10 )
        $('#datepicker').datepicker("option",{ minDate: +10})
    }

    //here

    setTimeout(function () {
        document.querySelectorAll('.study-start').forEach(item => {
            item.value = $( "#datepicker" ).val()
        })
    },100)

    if($("#studyProgram :selected").text().includes('60')){
        starting()
        //document.getElementById("bgrInformation").innerHTML = 'Do you have a Bachelor Diploma?' ;
        document.getElementsByClassName('numMonth')[0].innerHTML = 12;
        document.getElementsByClassName('numMonth')[1].innerHTML = 18;
        document.getElementsByClassName('numMonth')[2].innerHTML = 24;
        document.getElementById('monthsone').value = '12';
        document.getElementById('monthstwo').value = '18';
        document.getElementById('monthsthree').value = '24';

            document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
            document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();


    }
    else if ($("#studyProgram :selected").text().includes('120')){
        starting()
        //document.getElementById("bgrInformation").innerHTML = 'Do you have a Bachelor Diploma?' ;
        document.getElementsByClassName('numMonth')[0].innerHTML = 24;
        document.getElementsByClassName('numMonth')[1].innerHTML = 36;
        document.getElementsByClassName('numMonth')[2].innerHTML = 48;
        document.getElementById('monthsone').value = '24';
        document.getElementById('monthstwo').value = '36';
        document.getElementById('monthsthree').value = '48';
            document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
            document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();

    }
    else if ($("#studyProgram :selected").text().includes('90')){
        starting()
        //document.getElementById("bgrInformation").innerHTML = 'Do you have a Bachelor Diploma?' ;
        document.getElementsByClassName('numMonth')[0].innerHTML = 18;
        document.getElementsByClassName('numMonth')[1].innerHTML = 24;
        document.getElementsByClassName('numMonth')[2].innerHTML = 36;
        document.getElementById('monthsone').value = '18';
        document.getElementById('monthstwo').value = '24';
        document.getElementById('monthsthree').value = '36';
            document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
            document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();

    } else {
        starting()
        //because all the rest is bachelor
        document.getElementsByClassName('study-programme')[0].value = $('#studyProgram').find(":selected").text();
        document.getElementsByClassName('study-programme')[1].value = $('#studyProgram').find(":selected").text();

    }

});



function checkIntakeStart() {

        switch ($('input[type=radio][name=intake]:checked').val()) {
            case "October 2021" : {
                //$('#datepicker').datepicker("setDate", new Date(2021,9,1) )

                    document.getElementsByClassName("study-start")[0].value = "2021/10/01";
                    document.getElementsByClassName("study-start")[1].value = "2021/10/01";

                break;
            }
            case "October 2022" : {
                //$('#datepicker').datepicker("setDate", new Date(2021,9,1) )

                    document.getElementsByClassName("study-start")[0].value = "2022/10/01";
                    document.getElementsByClassName("study-start")[1].value = "2022/10/01";

                break;
            }
            case "January 2022" : {
                //$('#datepicker').datepicker("setDate", new Date(2022,0,1) )

                    document.getElementsByClassName("study-start")[0].value = "2022/01/01";
                    document.getElementsByClassName("study-start")[1].value = "2022/01/01";

                break;
            }
            case "April 2022" : {
                //$('#datepicker').datepicker("setDate", new Date(2022,3,1) )

                    document.getElementsByClassName("study-start")[0].value = "2022/04/01";
                    document.getElementsByClassName("study-start")[1].value = "2022/04/01";

                break;
            }
            case "April 2023" : {
                //$('#datepicker').datepicker("setDate", new Date(2022,3,1) )

                    document.getElementsByClassName("study-start")[0].value = "2023/04/01";
                    document.getElementsByClassName("study-start")[1].value = "2023/04/01";

                break;
            }
            case "October 2023" : {
                //$('#datepicker').datepicker("setDate", new Date(2022,3,1) )

                    document.getElementsByClassName("study-start")[0].value = "2023/10/01";
                    document.getElementsByClassName("study-start")[1].value = "2023/10/01";

                break;
            }
            default : {
                //$('#datepicker').datepicker("setDate", new Date(2022,5,1) )

                    document.getElementsByClassName("study-start")[0].value = "2022/06/01";
                    document.getElementsByClassName("study-start")[1].value = "2022/06/01";

            }
        }

}


function starting() {

    businessUnit = "fi";
    obwVersion = "b2b";
    agbVersion = '1.0';
    directDebit = null;
    locationSite = "3";
    currentPage = 3;
    completed = true;

    document.querySelectorAll(".study-model").forEach(item => {
        item.value = ''
    })
    document.querySelectorAll(".models").forEach(item => {
        item.checked = false;
    })

    $('input[name="studyLocation"]').prop('checked', false);


    //$('#uploadDocumentRow').hide()


    document.querySelectorAll(".finalPrice").forEach(item => {
        item.innerHTML = '0000';
    })
    document.querySelectorAll(".discountPrice").forEach(item => {
        item.innerHTML = '0000';
    })
    document.querySelectorAll(".monthlyPrice").forEach(item => {
        item.innerHTML = '0000';
    })
    document.querySelectorAll(".totalBeforeDiscount").forEach(item => {
        item.innerHTML = '0000';
    })
    document.querySelectorAll(".monthlyPriceBefore").forEach(item => {
        item.innerHTML = '0000';
    })
    document.querySelectorAll(".study-start").forEach(item => {
        item.value = '';
    })

    if(mtCheck.includes($("#studyProgram :selected").text())){
        document.querySelectorAll(".intake").forEach(item => {
            item.value = "70";
            $(".labelStudyStart").text("Intake")
        })
    } else {
        document.querySelectorAll(".intake").forEach(item => {
            item.value = "";
            $(".labelStudyStart").text("Study Start")
        })
    }

    document.getElementsByClassName("finalPrice")[0].classList.remove("crossed");
    document.getElementsByClassName("finalPrice")[1].classList.remove("crossed");

    document.getElementById("submit").disabled = false;

        /// working here
   /* if (builtDifferent.includes($("#studyProgram :selected").text())) {
        $( "#jan22" ).addClass( "hide" )
        $( "#jun22" ).addClass( "hide" )

    } else {
        $( "#jan22" ).removeClass( "hide" )
        $( "#jun22" ).removeClass( "hide" )
    }*/


    //addding code here!
}

document.querySelectorAll(".models").forEach(item => {
    item.addEventListener('click', event => {
        if ($('#Degree').find(":selected").text().startsWith('S') && $('#studyProgram').find(":selected").text().startsWith('S')){
            validatefilledIn()
            $("#myModal2").modal();
            starting();
            return false;
        }
        if(!mtCheck.includes($("#studyProgram :selected").text())){
            document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
            document.getElementsByClassName("finalPrice")[1].classList.add("crossed");
        }



    })
})



function changeCareIds() {
    let newCareId = null;
    if ($('input[name="studyLocation"]:checked').val() === "Study on campus"){
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()){
                newCareId = mT[i].careIdCs;
            }
        }
        $("#studyProgram :selected").attr('value', newCareId);
    } else {
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()){
                newCareId = mT[i].careId;
            }
        }
        $("#studyProgram :selected").attr('value', newCareId);
    }
}


//=================== NEW ADDED CHANGES

let storeDisc = disC
$("input[name='studyLocation']").change(function() {
    if ($('input[name="studyLocation"]:checked').val() === "Study on campus") {
        businessUnit = "cs";
        obwVersion = "defaultEN";
        agbVersion = "2.8";
        directDebit = true;

        changeCareIds()
        checkLocation();
        PriceChange();
        checkIpAndChange()

        // to fix the problem with upload documents.
        //$('#uploadDocumentRow').show()
        $( ".admissionFee").show()

        files = document.querySelector('input[type="file"]');

        $('input[name=timemodel]:checked').prop('checked', false)
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()) {
                currentProgramme = mT[i]
                if (currentProgramme.hasOwnProperty('intake')) {
                    ProgrammeIntakes = []
                    difference = []
                    console.log('new stuff')
                    currentProgramme.intake.split(", ").forEach(function (e, incre, t) {
                        ProgrammeIntakes.push(e.replace(' ', '').toLowerCase())
                        $( `#${ProgrammeIntakes[incre]}`).removeClass( "hide" )
                        console.log(`#${ProgrammeIntakes[incre]}`)
                    })
                    difference = allIntakes.filter(x => !ProgrammeIntakes.includes(x));
                    console.log('=========')
                    difference.forEach(function (e, incre, t) {
                        $( `#${difference[incre]}`).addClass( "hide" )
                        console.log(`#${difference[incre]}`)
                    })

                }
            }
        }

    } else {
         businessUnit = "fi";
         obwVersion = "b2b";
         agbVersion = '1.0';
         directDebit = null;
        setTimeout(function () {
            $('input[name=site]:checked').prop('checked', false)
            $('input[name=intake]:checked').prop('checked', false)
            locationSite = "3"
            document.querySelectorAll(".intake").forEach(item => {
                item.value = "";
            })
            document.querySelectorAll('.study-start').forEach(item => {
                item.value = $( "#datepicker" ).val()
            })
        },100)




        changeCareIds()
        checkLocation();
        PriceChange();
        setTimeout(function () {
            checkIpAndChange()
        },100)

        //to fix the problem with upload documents from Patty
        //$('#uploadDocumentRow').hide()
        $( ".admissionFee").hide()

        $('input[name=timemodel]:checked').prop('checked', false)
    }
});


$("#studyOnCampus").click(function() {
    setTimeout(function () {
        $( "#monthsone" ).trigger( "click" )
        $('#intakes div.col-md-6').each(function(index) {
            if(!$( this ).hasClass( "hide" )){
                //document.getElementById(this.id).click()
                $('input[name="intake"]')[index].click()
                return false;
            }
        });
        //document.getElementById("winterintake").click()
        locationSite = "3"
        $( "#berlin" ).trigger( "click" )

    },100)
});

//added new
$("#studyOnline").click(function() {
    setTimeout(function () {
        $( "#monthsone" ).trigger( "click" )
    },100)
});

$("input[name='site']").change(function() {
    if ($('input[name="site"]:checked').val() === "Bad Honnef") {
        $('#campusSite1').css("background", "url(./images/village.png) 95% center no-repeat");
        $('#campusSite2').css("background", "url(./images/village.png) 95% center no-repeat");

        locationSite = "1"
        //added this last
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()) {
                currentProgramme = mT[i]
                if (currentProgramme.hasOwnProperty('intake2')) {
                    ProgrammeIntakes = []
                    difference = []
                    console.log('new stuff')
                    currentProgramme.intake2.split(", ").forEach(function (e, incre, t) {
                        ProgrammeIntakes.push(e.replace(' ', '').toLowerCase())
                        $( `#${ProgrammeIntakes[incre]}`).removeClass( "hide" )
                        console.log(`#${ProgrammeIntakes[incre]}`)
                    })
                    difference = allIntakes.filter(x => !ProgrammeIntakes.includes(x));
                    console.log('=========')
                    difference.forEach(function (e, incre, t) {
                        $( `#${difference[incre]}`).addClass( "hide" )
                        console.log(`#${difference[incre]}`)
                    })

                }
            }
        }


    } else {
        for (let i = 0; i < mT.length; i++) {
            if (mT[i].name === $("#studyProgram :selected").text()) {
                currentProgramme = mT[i]
                if (currentProgramme.hasOwnProperty('intake')) {
                    ProgrammeIntakes = []
                    difference = []
                    console.log('new stuff')
                    currentProgramme.intake.split(", ").forEach(function (e, incre, t) {
                        ProgrammeIntakes.push(e.replace(' ', '').toLowerCase())
                        $( `#${ProgrammeIntakes[incre]}`).removeClass( "hide" )
                        console.log(`#${ProgrammeIntakes[incre]}`)
                    })
                    difference = allIntakes.filter(x => !ProgrammeIntakes.includes(x));
                    console.log('=========')
                    difference.forEach(function (e, incre, t) {
                        $( `#${difference[incre]}`).addClass( "hide" )
                        console.log(`#${difference[incre]}`)
                    })

                }
            }
        }

        $('#campusSite1').css("background", "url(./images/skyline.png) 95% center no-repeat");
        $('#campusSite2').css("background", "url(./images/skyline.png) 95% center no-repeat");

        locationSite = "4"
    }
    setTimeout(function () {
        $('#intakes div.col-md-6').each(function(index) {
            if(!$( this ).hasClass( "hide" )){
                //document.getElementById(this.id).click()
                $('input[name="intake"]')[index].click()
                return false;
            }
        });
    },100)
});

let files = null;
let data = new FormData()





if ($(window).width() < 400 ) {
    $("#postcode").attr("placeholder","ZIP*");
}
else { $("#postcode").attr("placeholder","Postcode*");}

