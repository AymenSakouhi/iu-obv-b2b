let s = window.location.href;
let captured = /key=([^&]+)/.exec(s)[1];
let result = captured ? captured : 'myDefaultValue';
console.log(result);

let cntr = [
    {
        Code: "AF",
        Name: "Afghanistan"
    },
    {
        Code: "AX",
        Name: "Åland Islands"
    },
    {
        Code: "AL",
        Name: "Albania"
    },
    {
        Code: "DZ",
        Name: "Algeria"
    },
    {
        Code: "AS",
        Name: "American Samoa"
    },
    {
        Code: "AD",
        Name: "Andorra"
    },
    {
        Code: "AO",
        Name: "Angola"
    },
    {
        Code: "AI",
        Name: "Anguilla"
    },
    {
        Code: "AQ",
        Name: "Antarctica"
    },
    {
        Code: "AG",
        Name: "Antigua and Barbuda"
    },
    {
        Code: "AR",
        Name: "Argentina"
    },
    {
        Code: "AM",
        Name: "Armenia"
    },
    {
        Code: "AW",
        Name: "Aruba"
    },
    {
        Code: "AU",
        Name: "Australia"
    },
    {
        Code: "AT",
        Name: "Austria"
    },
    {
        Code: "AZ",
        Name: "Azerbaijan"
    },
    {
        Code: "BS",
        Name: "Bahamas"
    },
    {
        Code: "BH",
        Name: "Bahrain"
    },
    {
        Code: "BD",
        Name: "Bangladesh"
    },
    {
        Code: "BB",
        Name: "Barbados"
    },
    {
        Code: "BY",
        Name: "Belarus"
    },
    {
        Code: "BE",
        Name: "Belgium"
    },
    {
        Code: "BZ",
        Name: "Belize"
    },
    {
        Code: "BJ",
        Name: "Benin"
    },
    {
        Code: "BM",
        Name: "Bermuda"
    },
    {
        Code: "BT",
        Name: "Bhutan"
    },
    {
        Code: "BO",
        Name: "Bolivia, Plurinational State of"
    },
    {
        Code: "BQ",
        Name: "Bonaire, Sint Eustatius and Saba"
    },
    {
        Code: "BA",
        Name: "Bosnia and Herzegovina"
    },
    {
        Code: "BW",
        Name: "Botswana"
    },
    {
        Code: "BV",
        Name: "Bouvet Island"
    },
    {
        Code: "BR",
        Name: "Brazil"
    },
    {
        Code: "IO",
        Name: "British Indian Ocean Territory"
    },
    {
        Code: "BN",
        Name: "Brunei Darussalam"
    },
    {
        Code: "BG",
        Name: "Bulgaria"
    },
    {
        Code: "BF",
        Name: "Burkina Faso"
    },
    {
        Code: "BI",
        Name: "Burundi"
    },
    {
        Code: "KH",
        Name: "Cambodia"
    },
    {
        Code: "CM",
        Name: "Cameroon"
    },
    {
        Code: "CA",
        Name: "Canada"
    },
    {
        Code: "CV",
        Name: "Cape Verde"
    },
    {
        Code: "KY",
        Name: "Cayman Islands"
    },
    {
        Code: "CF",
        Name: "Central African Republic"
    },
    {
        Code: "TD",
        Name: "Chad"
    },
    {
        Code: "CL",
        Name: "Chile"
    },
    {
        Code: "CN",
        Name: "China"
    },
    {
        Code: "CX",
        Name: "Christmas Island"
    },
    {
        Code: "CC",
        Name: "Cocos (Keeling) Islands"
    },
    {
        Code: "CO",
        Name: "Colombia"
    },
    {
        Code: "KM",
        Name: "Comoros"
    },
    {
        Code: "CG",
        Name: "Congo"
    },
    {
        Code: "CD",
        Name: "Congo, the Democratic Republic of the"
    },
    {
        Code: "CK",
        Name: "Cook Islands"
    },
    {
        Code: "CR",
        Name: "Costa Rica"
    },
    {
        Code: "CI",
        Name: "Côte d'Ivoire"
    },
    {
        Code: "HR",
        Name: "Croatia"
    },
    {
        Code: "CU",
        Name: "Cuba"
    },
    {
        Code: "CW",
        Name: "Curaçao"
    },
    {
        Code: "CY",
        Name: "Cyprus"
    },
    {
        Code: "CZ",
        Name: "Czech Republic"
    },
    {
        Code: "DK",
        Name: "Denmark"
    },
    {
        Code: "DJ",
        Name: "Djibouti"
    },
    {
        Code: "DM",
        Name: "Dominica"
    },
    {
        Code: "DO",
        Name: "Dominican Republic"
    },
    {
        Code: "EC",
        Name: "Ecuador"
    },
    {
        Code: "EG",
        Name: "Egypt"
    },
    {
        Code: "SV",
        Name: "El Salvador"
    },
    {
        Code: "GQ",
        Name: "Equatorial Guinea"
    },
    {
        Code: "ER",
        Name: "Eritrea"
    },
    {
        Code: "EE",
        Name: "Estonia"
    },
    {
        Code: "ET",
        Name: "Ethiopia"
    },
    {
        Code: "FK",
        Name: "Falkland Islands (Malvinas)"
    },
    {
        Code: "FO",
        Name: "Faroe Islands"
    },
    {
        Code: "FJ",
        Name: "Fiji"
    },
    {
        Code: "FI",
        Name: "Finland"
    },
    {
        Code: "FR",
        Name: "France"
    },
    {
        Code: "GF",
        Name: "French Guiana"
    },
    {
        Code: "PF",
        Name: "French Polynesia"
    },
    {
        Code: "TF",
        Name: "French Southern Territories"
    },
    {
        Code: "GA",
        Name: "Gabon"
    },
    {
        Code: "GM",
        Name: "Gambia"
    },
    {
        Code: "GE",
        Name: "Georgia"
    },
    {
        Code: "DE",
        Name: "Germany"
    },
    {
        Code: "GH",
        Name: "Ghana"
    },
    {
        Code: "GI",
        Name: "Gibraltar"
    },
    {
        Code: "GR",
        Name: "Greece"
    },
    {
        Code: "GL",
        Name: "Greenland"
    },
    {
        Code: "GD",
        Name: "Grenada"
    },
    {
        Code: "GP",
        Name: "Guadeloupe"
    },
    {
        Code: "GU",
        Name: "Guam"
    },
    {
        Code: "GT",
        Name: "Guatemala"
    },
    {
        Code: "GG",
        Name: "Guernsey"
    },
    {
        Code: "GN",
        Name: "Guinea"
    },
    {
        Code: "GW",
        Name: "Guinea-Bissau"
    },
    {
        Code: "GY",
        Name: "Guyana"
    },
    {
        Code: "HT",
        Name: "Haiti"
    },
    {
        Code: "HM",
        Name: "Heard Island and McDonald Islands"
    },
    {
        Code: "VA",
        Name: "Holy See (Vatican City State)"
    },
    {
        Code: "HN",
        Name: "Honduras"
    },
    {
        Code: "HK",
        Name: "Hong Kong"
    },
    {
        Code: "HU",
        Name: "Hungary"
    },
    {
        Code: "IS",
        Name: "Iceland"
    },
    {
        Code: "IN",
        Name: "India"
    },
    {
        Code: "ID",
        Name: "Indonesia"
    },
    {
        Code: "IR",
        Name: "Iran, Islamic Republic of"
    },
    {
        Code: "IQ",
        Name: "Iraq"
    },
    {
        Code: "IE",
        Name: "Ireland"
    },
    {
        Code: "IM",
        Name: "Isle of Man"
    },
    {
        Code: "IL",
        Name: "Israel"
    },
    {
        Code: "IT",
        Name: "Italy"
    },
    {
        Code: "JM",
        Name: "Jamaica"
    },
    {
        Code: "JP",
        Name: "Japan"
    },
    {
        Code: "JE",
        Name: "Jersey"
    },
    {
        Code: "JO",
        Name: "Jordan"
    },
    {
        Code: "KZ",
        Name: "Kazakhstan"
    },
    {
        Code: "KE",
        Name: "Kenya"
    },
    {
        Code: "KI",
        Name: "Kiribati"
    },
    {
        Code: "KP",
        Name: "Korea, Democratic People's Republic of"
    },
    {
        Code: "KR",
        Name: "Korea, Republic of"
    },
    {
        Code: "KW",
        Name: "Kuwait"
    },
    {
        Code: "KG",
        Name: "Kyrgyzstan"
    },
    {
        Code: "LA",
        Name: "Lao People's Democratic Republic"
    },
    {
        Code: "LV",
        Name: "Latvia"
    },
    {
        Code: "LB",
        Name: "Lebanon"
    },
    {
        Code: "LS",
        Name: "Lesotho"
    },
    {
        Code: "LR",
        Name: "Liberia"
    },
    {
        Code: "LY",
        Name: "Libya"
    },
    {
        Code: "LI",
        Name: "Liechtenstein"
    },
    {
        Code: "LT",
        Name: "Lithuania"
    },
    {
        Code: "LU",
        Name: "Luxembourg"
    },
    {
        Code: "MO",
        Name: "Macao"
    },
    {
        Code: "MK",
        Name: "Macedonia, the Former Yugoslav Republic of"
    },
    {
        Code: "MG",
        Name: "Madagascar"
    },
    {
        Code: "MW",
        Name: "Malawi"
    },
    {
        Code: "MY",
        Name: "Malaysia"
    },
    {
        Code: "MV",
        Name: "Maldives"
    },
    {
        Code: "ML",
        Name: "Mali"
    },
    {
        Code: "MT",
        Name: "Malta"
    },
    {
        Code: "MH",
        Name: "Marshall Islands"
    },
    {
        Code: "MQ",
        Name: "Martinique"
    },
    {
        Code: "MR",
        Name: "Mauritania"
    },
    {
        Code: "MU",
        Name: "Mauritius"
    },
    {
        Code: "YT",
        Name: "Mayotte"
    },
    {
        Code: "MX",
        Name: "Mexico"
    },
    {
        Code: "FM",
        Name: "Micronesia, Federated States of"
    },
    {
        Code: "MD",
        Name: "Moldova, Republic of"
    },
    {
        Code: "MC",
        Name: "Monaco"
    },
    {
        Code: "MN",
        Name: "Mongolia"
    },
    {
        Code: "ME",
        Name: "Montenegro"
    },
    {
        Code: "MS",
        Name: "Montserrat"
    },
    {
        Code: "MA",
        Name: "Morocco"
    },
    {
        Code: "MZ",
        Name: "Mozambique"
    },
    {
        Code: "MM",
        Name: "Myanmar"
    },
    {
        Code: "NA",
        Name: "Namibia"
    },
    {
        Code: "NR",
        Name: "Nauru"
    },
    {
        Code: "NP",
        Name: "Nepal"
    },
    {
        Code: "NL",
        Name: "Netherlands"
    },
    {
        Code: "NC",
        Name: "New Caledonia"
    },
    {
        Code: "NZ",
        Name: "New Zealand"
    },
    {
        Code: "NI",
        Name: "Nicaragua"
    },
    {
        Code: "NE",
        Name: "Niger"
    },
    {
        Code: "NG",
        Name: "Nigeria"
    },
    {
        Code: "NU",
        Name: "Niue"
    },
    {
        Code: "NF",
        Name: "Norfolk Island"
    },
    {
        Code: "MP",
        Name: "Northern Mariana Islands"
    },
    {
        Code: "NO",
        Name: "Norway"
    },
    {
        Code: "OM",
        Name: "Oman"
    },
    {
        Code: "PK",
        Name: "Pakistan"
    },
    {
        Code: "PW",
        Name: "Palau"
    },
    {
        Code: "PS",
        Name: "Palestine, State of"
    },
    {
        Code: "PA",
        Name: "Panama"
    },
    {
        Code: "PG",
        Name: "Papua New Guinea"
    },
    {
        Code: "PY",
        Name: "Paraguay"
    },
    {
        Code: "PE",
        Name: "Peru"
    },
    {
        Code: "PH",
        Name: "Philippines"
    },
    {
        Code: "PN",
        Name: "Pitcairn"
    },
    {
        Code: "PL",
        Name: "Poland"
    },
    {
        Code: "PT",
        Name: "Portugal"
    },
    {
        Code: "PR",
        Name: "Puerto Rico"
    },
    {
        Code: "QA",
        Name: "Qatar"
    },
    {
        Code: "RE",
        Name: "Réunion"
    },
    {
        Code: "RO",
        Name: "Romania"
    },
    {
        Code: "RU",
        Name: "Russian Federation"
    },
    {
        Code: "RW",
        Name: "Rwanda"
    },
    {
        Code: "BL",
        Name: "Saint Barthélemy"
    },
    {
        Code: "SH",
        Name: "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        Code: "KN",
        Name: "Saint Kitts and Nevis"
    },
    {
        Code: "LC",
        Name: "Saint Lucia"
    },
    {
        Code: "MF",
        Name: "Saint Martin (French part)"
    },
    {
        Code: "PM",
        Name: "Saint Pierre and Miquelon"
    },
    {
        Code: "VC",
        Name: "Saint Vincent and the Grenadines"
    },
    {
        Code: "WS",
        Name: "Samoa"
    },
    {
        Code: "SM",
        Name: "San Marino"
    },
    {
        Code: "ST",
        Name: "Sao Tome and Principe"
    },
    {
        Code: "SA",
        Name: "Saudi Arabia"
    },
    {
        Code: "SN",
        Name: "Senegal"
    },
    {
        Code: "RS",
        Name: "Serbia"
    },
    {
        Code: "SC",
        Name: "Seychelles"
    },
    {
        Code: "SL",
        Name: "Sierra Leone"
    },
    {
        Code: "SG",
        Name: "Singapore"
    },
    {
        Code: "SX",
        Name: "Sint Maarten (Dutch part)"
    },
    {
        Code: "SK",
        Name: "Slovakia"
    },
    {
        Code: "SI",
        Name: "Slovenia"
    },
    {
        Code: "SB",
        Name: "Solomon Islands"
    },
    {
        Code: "SO",
        Name: "Somalia"
    },
    {
        Code: "ZA",
        Name: "South Africa"
    },
    {
        Code: "GS",
        Name: "South Georgia and the South Sandwich Islands"
    },
    {
        Code: "SS",
        Name: "South Sudan"
    },
    {
        Code: "ES",
        Name: "Spain"
    },
    {
        Code: "LK",
        Name: "Sri Lanka"
    },
    {
        Code: "SD",
        Name: "Sudan"
    },
    {
        Code: "SR",
        Name: "Suriname"
    },
    {
        Code: "SJ",
        Name: "Svalbard and Jan Mayen"
    },
    {
        Code: "SZ",
        Name: "Swaziland"
    },
    {
        Code: "SE",
        Name: "Sweden"
    },
    {
        Code: "CH",
        Name: "Switzerland"
    },
    {
        Code: "SY",
        Name: "Syrian Arab Republic"
    },
    {
        Code: "TW",
        Name: "Taiwan, Province of China"
    },
    {
        Code: "TJ",
        Name: "Tajikistan"
    },
    {
        Code: "TZ",
        Name: "Tanzania, United Republic of"
    },
    {
        Code: "TH",
        Name: "Thailand"
    },
    {
        Code: "TL",
        Name: "Timor-Leste"
    },
    {
        Code: "TG",
        Name: "Togo"
    },
    {
        Code: "TK",
        Name: "Tokelau"
    },
    {
        Code: "TO",
        Name: "Tonga"
    },
    {
        Code: "TT",
        Name: "Trinidad and Tobago"
    },
    {
        Code: "TN",
        Name: "Tunisia"
    },
    {
        Code: "TR",
        Name: "Turkey"
    },
    {
        Code: "TM",
        Name: "Turkmenistan"
    },
    {
        Code: "TC",
        Name: "Turks and Caicos Islands"
    },
    {
        Code: "TV",
        Name: "Tuvalu"
    },
    {
        Code: "UG",
        Name: "Uganda"
    },
    {
        Code: "UA",
        Name: "Ukraine"
    },
    {
        Code: "AE",
        Name: "United Arab Emirates"
    },
    {
        Code: "GB",
        Name: "United Kingdom"
    },
    {
        Code: "US",
        Name: "United States"
    },
    {
        Code: "UM",
        Name: "United States Minor Outlying Islands"
    },
    {
        Code: "UY",
        Name: "Uruguay"
    },
    {
        Code: "UZ",
        Name: "Uzbekistan"
    },
    {
        Code: "VU",
        Name: "Vanuatu"
    },
    {
        Code: "VE",
        Name: "Venezuela, Bolivarian Republic of"
    },
    {
        Code: "VN",
        Name: "Viet Nam"
    },
    {
        Code: "VG",
        Name: "Virgin Islands, British"
    },
    {
        Code: "VI",
        Name: "Virgin Islands, U.S."
    },
    {
        Code: "WF",
        Name: "Wallis and Futuna"
    },
    {
        Code: "EH",
        Name: "Western Sahara"
    },
    {
        Code: "YE",
        Name: "Yemen"
    },
    {
        Code: "ZM",
        Name: "Zambia"
    },
    {
        Code: "ZW",
        Name: "Zimbabwe"
    }
]

function initiate() {
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
            document.getElementById('showFirstName').innerText = data.firstName;
            document.getElementById('showSurName').innerText = data.lastName;
            document.getElementById('showStreet').innerText = data.street;
            document.getElementById('showEmail').innerText = data.email;
            document.getElementById('showPhone').innerText = data.phone;
            document.getElementById('showStudy').innerText = data.studyProgram;
            getNameFromApi(document.getElementById('showStudy').innerText)
            //console.log(data.country);


            cntr.forEach(function(element) {
                console.log(element.Code)
                if (element.Code == data.country) {
                    document.getElementById('showCountry').innerText = element.Name;
                }
            })

            document.getElementById('showCity').innerText = data.city;
            document.getElementById('ShowStreetNo').innerText = data.streetNo;
            document.getElementById('showZip').innerText = data.zip;
            document.getElementById('showDateOfBirth').innerText = data.dateOfBirth;
            document.getElementById('showEnglishLevel').innerText = data.englishLevel;
            document.getElementById('showBudget').innerText = data.budgetPerMonth;
            document.getElementById('showWorkExperience').innerText = data.workExperience;
            switch (data.accountOwner) {
                case  '2' :  {
                    document.getElementById('showFormat').innerText = 'On Campus';
                    break;
                }case  '3' :  {
                    document.getElementById('showFormat').innerText = 'Online';
                    break;
                }
                default : {
                    document.getElementById('showFormat').innerText = 'Online';
                }
            }
            document.getElementById('showTimeModel').innerText = data.duration + ' Months';
            document.getElementById('showStartDate').innerText = data.studyStartDate;

            switch (data.gender) {
                case  '2' :  {
                    document.getElementById('gender').innerText = 'Female';
                    break;
                }case  '3' :  {
                    document.getElementById('gender').innerText = 'Non-Binary';
                    break;
                }case  '4' :  {
                    document.getElementById('gender').innerText = 'Other';
                    break;
                }
                default : {
                    document.getElementById('gender').innerText = 'Male';
                }
            }

            document.getElementById('finalPrice').innerText = data.accountBank;





        }).then(() => {


        }
    ).catch(error => console.log(error))
}

initiate();

let mT = [
    {
        "name" : 'B.Sc. Computer Science in IT Security - 180',
        "careId" : '10007850'
    },
    {
        "name" : 'B.Sc. Data Science - 180',
        "careId" : '10007851'
    },
    {
        "name" : 'M.Sc. Computer Science in IT Security - 120',
        "careId" : '10007852'
    },
    {
        "name" : 'M.Sc. Computer Science in Cyber Security - 60',
        "careId" : '10007853'
    },
    {
        "name" : 'M.Sc. Data Science - 120',
        "careId" : '10007854'
    },
    {
        "name" : 'M.Sc. Data Science - 60',
        "careId" : '10007855'
    },
    {
        "name" : 'M.Sc. Data Science for Smart Manufacturing - 60',
        "careId" : '10007856'
    },
    {
        "name" : 'M.Sc. Data Science for Autonomous Vehicles - 60',
        "careId" : '10007866'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence - 120',
        "careId" : '10007857'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence - 60',
        "careId" : '10007858'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence for Robotics - 60',
        "careId" : '10007859'
    },
    {
        "name" : 'M.Sc. Artificial Intelligence for Autonomous Vehicles - 60',
        "careId" : '10007865'
    },
    {
        "name" : 'M.A. Management - Finance & Accounting - 60',
        "careId" : '10007958_FI_FA'
    },
    {
        "name" : 'M.A. Management - Leadership - 60',
        "careId" : '10007958_FI_L'
    },
    {
        "name" : 'M.A. Management - 60',
        "careId" : '10007958_FI'
    },
    {
        "name" : 'B.A. Business Administration - 180',
        "careId" : '10007953_FI'
    },
    {
        "name" : 'M.A. Management - Engineering Management - 60',
        "careId" : '10007958_FI_EM'
    },
    {
        "name" : 'M.A. Management - Big Data Management - 60',
        "careId" : '10007958_FI_BDM'
    },
    {
        "name" : 'M.A. Management - IT Management - 60',
        "careId" : '10007958_FI_ITM'
    },
    {
        "name" : 'iMBA - 60',
        "careId" : '10007841'
    },
    {
        "name" : 'iMBA - 90',
        "careId" : '10007840'
    },
    {
        "name" : 'iMBA - Big Data Management - 90',
        "careId" : '10007840_BDM'
    },
    {
        "name" : 'iMBA - Engineering Management - 90',
        "careId" : '10007840_EM'
    },
    {
        "name" : 'iMBA - Finance & Accounting - 90',
        "careId" : '10007840_FA'
    },
    {
        "name" : 'iMBA - IT Management - 90',
        "careId" : '10007840_ITM'
    },
    {
        "name" : 'iMBA - Marketing - 90',
        "careId" : '10007840_M'
    },
    {
        "name" : 'iMLM - 60',
        "careId" : '10007842'
    },
    {
        "name" : 'M.Sc. Cyber Security - 120',
        "careId" : '10008014_FI'
    },
    {
        "name" : 'B.Sc. Cyber Security - 180',
        "careId" : '10007999_FI'
    },
    {
        "name" : 'MBA Master of Business Administration - 90',
        "careId" : '121_FI'
    },
    {
        "name" : 'MBA One-Year - 60',
        "careId" : '120_FI'
    },
    {
        "name" : 'MBA - specialisation Big Data Management - 90',
        "careId" : '121_FI_BDM'
    },
    {
        "name" : 'MBA - specialisation International Marketing - 90',
        "careId" : '121_FI_IM'
    },
    {
        "name" : 'MBA - specialisation Finance & Accounting - 90',
        "careId" : '121_FI_FA'
    },
    {
        "name" : 'MBA - specialisation Engineering Management - 90',
        "careId" : '121_FI_EM'
    },
    {
        "name" : 'MBA - specialisation IT Management - 90',
        "careId" : '121_FI_ITM'
    },
    {
        "name" : 'B.A. Entrepreneurship - 180',
        "careId" : '10008062_FI'
    },
    {
        "name" : 'B.Sc. Business & IT - 180',
        "careId" : '10007964_FI'
    },
    {
        "name" : 'B.Eng. Robotics - 180',
        "careId" : '10008001_FI'
    },
    {
        "name" : 'B.Eng. Industrial Engineering & Management - 180',
        "careId" : '10008000_FI'
    },
    {
        "name" : 'B.A. International Management - 180',
        "careId" : '10008002_FI'
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
        "name" : 'M.A. Management - International Marketing - 60',
        "careId" : '10007958_FI_IM'
    },
    {
        "name" : 'Orientation Programm - 5',
        "careId" : '10007997'
    },
    {
        "name" : 'B.Sc. Computer Science - 180',
        "careId" : '10007944_FI'
    },
    {
        "name" : 'M.Sc. Computer Science - 120',
        "careId" : '10007941_FI'
    }
]

function getNameFromApi(careId) {

                function populate(careId) {

                    for (let i = 0; i < mT.length ; i++) {
                        if (mT[i].careId === careId) {
                                document.getElementById('showStudy').innerText = mT[i].name;
                            }
                        }
                    }
                populate(careId)


        }

