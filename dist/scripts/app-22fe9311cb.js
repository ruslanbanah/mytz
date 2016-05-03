!function(){"use strict";angular.module("tz",["ui.bootstrap","underscore","angular-timezone-selector"])}(),function(){angular.module("tz").service("timeZone",["_",function(i){function e(){return i.map(moment.tz.names(),function(i){var e=moment.tz(i);return console.log(),{name:i.replace(/_/g," "),offset:"UTC"+e.format("Z"),nOffset:e.utcOffset()}})}function n(e){var n=[{id:"AF",timeZone:"Asia/Kabul",country:"Afghanistan"},{id:"AX",timeZone:"Europe/Mariehamn",country:"Aland Islands"},{id:"AL",timeZone:"Europe/Tirane",country:"Albania"},{id:"DZ",timeZone:"Africa/Algiers",country:"Algeria"},{id:"AS",timeZone:"Pacific/Pago_Pago",country:"American Samoa"},{id:"AD",timeZone:"Europe/Andorra",country:"Andorra"},{id:"AO",timeZone:"Africa/Luanda",country:"Angola"},{id:"AI",timeZone:"America/Anguilla",country:"Anguilla"},{id:"AQ",timeZone:"Antarctica/McMurdo",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Rothera",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Palmer",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Mawson",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Davis",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Casey",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Vostok",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/DumontDUrville",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Syowa",country:"Antarctica"},{id:"AQ",timeZone:"Antarctica/Troll",country:"Antarctica"},{id:"AG",timeZone:"America/Antigua",country:"Antigua And Barbuda"},{id:"AR",timeZone:"America/Argentina/Buenos_Aires",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Cordoba",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Salta",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Jujuy",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Tucuman",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Catamarca",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/La_Rioja",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/San_Juan",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Mendoza",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/San_Luis",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Rio_Gallegos",country:"Argentina"},{id:"AR",timeZone:"America/Argentina/Ushuaia",country:"Argentina"},{id:"AM",timeZone:"Asia/Yerevan",country:"Armenia"},{id:"AW",timeZone:"America/Aruba",country:"Aruba"},{id:"AU",timeZone:"Australia/Lord_Howe",country:"Australia"},{id:"AU",timeZone:"Antarctica/Macquarie",country:"Australia"},{id:"AU",timeZone:"Australia/Hobart",country:"Australia"},{id:"AU",timeZone:"Australia/Currie",country:"Australia"},{id:"AU",timeZone:"Australia/Melbourne",country:"Australia"},{id:"AU",timeZone:"Australia/Sydney",country:"Australia"},{id:"AU",timeZone:"Australia/Broken_Hill",country:"Australia"},{id:"AU",timeZone:"Australia/Brisbane",country:"Australia"},{id:"AU",timeZone:"Australia/Lindeman",country:"Australia"},{id:"AU",timeZone:"Australia/Adelaide",country:"Australia"},{id:"AU",timeZone:"Australia/Darwin",country:"Australia"},{id:"AU",timeZone:"Australia/Perth",country:"Australia"},{id:"AU",timeZone:"Australia/Eucla",country:"Australia"},{id:"AT",timeZone:"Europe/Vienna",country:"Austria"},{id:"AZ",timeZone:"Asia/Baku",country:"Azerbaijan"},{id:"BS",timeZone:"America/Nassau",country:"Bahamas"},{id:"BH",timeZone:"Asia/Bahrain",country:"Bahrain"},{id:"BD",timeZone:"Asia/Dhaka",country:"Bangladesh"},{id:"BB",timeZone:"America/Barbados",country:"Barbados"},{id:"BY",timeZone:"Europe/Minsk",country:"Belarus"},{id:"BE",timeZone:"Europe/Brussels",country:"Belgium"},{id:"BZ",timeZone:"America/Belize",country:"Belize"},{id:"BJ",timeZone:"Africa/Porto-Novo",country:"Benin"},{id:"BM",timeZone:"Atlantic/Bermuda",country:"Bermuda"},{id:"BT",timeZone:"Asia/Thimphu",country:"Bhutan"},{id:"BO",timeZone:"America/La_Paz",country:"Bolivia"},{id:"BA",timeZone:"Europe/Sarajevo",country:"Bosnia And Herzegovina"},{id:"BW",timeZone:"Africa/Gaborone",country:"Botswana"},{id:"BR",timeZone:"America/Noronha",country:"Brazil"},{id:"BR",timeZone:"America/Belem",country:"Brazil"},{id:"BR",timeZone:"America/Fortaleza",country:"Brazil"},{id:"BR",timeZone:"America/Recife",country:"Brazil"},{id:"BR",timeZone:"America/Araguaina",country:"Brazil"},{id:"BR",timeZone:"America/Maceio",country:"Brazil"},{id:"BR",timeZone:"America/Bahia",country:"Brazil"},{id:"BR",timeZone:"America/Sao_Paulo",country:"Brazil"},{id:"BR",timeZone:"America/Campo_Grande",country:"Brazil"},{id:"BR",timeZone:"America/Cuiaba",country:"Brazil"},{id:"BR",timeZone:"America/Santarem",country:"Brazil"},{id:"BR",timeZone:"America/Porto_Velho",country:"Brazil"},{id:"BR",timeZone:"America/Boa_Vista",country:"Brazil"},{id:"BR",timeZone:"America/Manaus",country:"Brazil"},{id:"BR",timeZone:"America/Eirunepe",country:"Brazil"},{id:"BR",timeZone:"America/Rio_Branco",country:"Brazil"},{id:"IO",timeZone:"Indian/Chagos",country:"British Indian Ocean Territory"},{id:"BN",timeZone:"Asia/Brunei",country:"Brunei Darussalam"},{id:"BG",timeZone:"Europe/Sofia",country:"Bulgaria"},{id:"BF",timeZone:"Africa/Ouagadougou",country:"Burkina Faso"},{id:"BI",timeZone:"Africa/Bujumbura",country:"Burundi"},{id:"KH",timeZone:"Asia/Phnom_Penh",country:"Cambodia"},{id:"CM",timeZone:"Africa/Douala",country:"Cameroon"},{id:"CA",timeZone:"America/St_Johns",country:"Canada"},{id:"CA",timeZone:"America/Halifax",country:"Canada"},{id:"CA",timeZone:"America/Glace_Bay",country:"Canada"},{id:"CA",timeZone:"America/Moncton",country:"Canada"},{id:"CA",timeZone:"America/Goose_Bay",country:"Canada"},{id:"CA",timeZone:"America/Blanc-Sablon",country:"Canada"},{id:"CA",timeZone:"America/Toronto",country:"Canada"},{id:"CA",timeZone:"America/Nipigon",country:"Canada"},{id:"CA",timeZone:"America/Thunder_Bay",country:"Canada"},{id:"CA",timeZone:"America/Iqaluit",country:"Canada"},{id:"CA",timeZone:"America/Pangnirtung",country:"Canada"},{id:"CA",timeZone:"America/Resolute",country:"Canada"},{id:"CA",timeZone:"America/Atikokan",country:"Canada"},{id:"CA",timeZone:"America/Rankin_Inlet",country:"Canada"},{id:"CA",timeZone:"America/Winnipeg",country:"Canada"},{id:"CA",timeZone:"America/Rainy_River",country:"Canada"},{id:"CA",timeZone:"America/Regina",country:"Canada"},{id:"CA",timeZone:"America/Swift_Current",country:"Canada"},{id:"CA",timeZone:"America/Edmonton",country:"Canada"},{id:"CA",timeZone:"America/Cambridge_Bay",country:"Canada"},{id:"CA",timeZone:"America/Yellowknife",country:"Canada"},{id:"CA",timeZone:"America/Inuvik",country:"Canada"},{id:"CA",timeZone:"America/Creston",country:"Canada"},{id:"CA",timeZone:"America/Dawson_Creek",country:"Canada"},{id:"CA",timeZone:"America/Vancouver",country:"Canada"},{id:"CA",timeZone:"America/Whitehorse",country:"Canada"},{id:"CA",timeZone:"America/Dawson",country:"Canada"},{id:"CA",timeZone:"America/Montreal",country:"Canada"},{id:"CV",timeZone:"Atlantic/Cape_Verde",country:"Cape Verde"},{id:"KY",timeZone:"America/Cayman",country:"Cayman Islands"},{id:"CF",timeZone:"Africa/Bangui",country:"Central African Republic"},{id:"TD",timeZone:"Africa/Ndjamena",country:"Chad"},{id:"CL",timeZone:"America/Santiago",country:"Chile"},{id:"CL",timeZone:"Pacific/Easter",country:"Chile"},{id:"CN",timeZone:"Asia/Shanghai",country:"China"},{id:"CN",timeZone:"Asia/Harbin",country:"China"},{id:"CN",timeZone:"Asia/Chongqing",country:"China"},{id:"CN",timeZone:"Asia/Urumqi",country:"China"},{id:"CN",timeZone:"Asia/Kashgar",country:"China"},{id:"CX",timeZone:"Indian/Christmas",country:"Christmas Island"},{id:"CC",timeZone:"Indian/Cocos",country:"Cocos (Keeling) Islands"},{id:"CO",timeZone:"America/Bogota",country:"Colombia"},{id:"KM",timeZone:"Indian/Comoro",country:"Comoros"},{id:"CG",timeZone:"Africa/Brazzaville",country:"Congo"},{id:"CD",timeZone:"Africa/Kinshasa",country:"Congo (Democratic Republic)"},{id:"CD",timeZone:"Africa/Lubumbashi",country:"Congo (Democratic Republic)"},{id:"CK",timeZone:"Pacific/Rarotonga",country:"Cook Islands"},{id:"CR",timeZone:"America/Costa_Rica",country:"Costa Rica"},{id:"CI",timeZone:"Africa/Abidjan",country:"Cote D'Ivoire"},{id:"HR",timeZone:"Europe/Zagreb",country:"Croatia"},{id:"CU",timeZone:"America/Havana",country:"Cuba"},{id:"CY",timeZone:"Asia/Nicosia",country:"Cyprus"},{id:"CZ",timeZone:"Europe/Prague",country:"Czech Republic"},{id:"DK",timeZone:"Europe/Copenhagen",country:"Denmark"},{id:"DJ",timeZone:"Africa/Djibouti",country:"Djibouti"},{id:"DM",timeZone:"America/Dominica",country:"Dominica"},{id:"DO",timeZone:"America/Santo_Domingo",country:"Dominican Republic"},{id:"EC",timeZone:"America/Guayaquil",country:"Ecuador"},{id:"EC",timeZone:"Pacific/Galapagos",country:"Ecuador"},{id:"EG",timeZone:"Africa/Cairo",country:"Egypt"},{id:"SV",timeZone:"America/El_Salvador",country:"El Salvador"},{id:"GQ",timeZone:"Africa/Malabo",country:"Equatorial Guinea"},{id:"ER",timeZone:"Africa/Asmara",country:"Eritrea"},{id:"EE",timeZone:"Europe/Tallinn",country:"Estonia"},{id:"ET",timeZone:"Africa/Addis_Ababa",country:"Ethiopia"},{id:"FK",timeZone:"Atlantic/Stanley",country:"Falkland Islands (Malvinas)"},{id:"FO",timeZone:"Atlantic/Faroe",country:"Faroe Islands"},{id:"FJ",timeZone:"Pacific/Fiji",country:"Fiji"},{id:"FI",timeZone:"Europe/Helsinki",country:"Finland"},{id:"FR",timeZone:"Europe/Paris",country:"France"},{id:"GF",timeZone:"America/Cayenne",country:"French Guiana"},{id:"PF",timeZone:"Pacific/Tahiti",country:"French Polynesia"},{id:"PF",timeZone:"Pacific/Marquesas",country:"French Polynesia"},{id:"PF",timeZone:"Pacific/Gambier",country:"French Polynesia"},{id:"TF",timeZone:"Indian/Kerguelen",country:"French Southern Territories"},{id:"GA",timeZone:"Africa/Libreville",country:"Gabon"},{id:"GM",timeZone:"Africa/Banjul",country:"Gambia"},{id:"GE",timeZone:"Asia/Tbilisi",country:"Georgia"},{id:"DE",timeZone:"Europe/Berlin",country:"Germany"},{id:"DE",timeZone:"Europe/Busingen",country:"Germany"},{id:"GH",timeZone:"Africa/Accra",country:"Ghana"},{id:"GI",timeZone:"Europe/Gibraltar",country:"Gibraltar"},{id:"GR",timeZone:"Europe/Athens",country:"Greece"},{id:"GL",timeZone:"America/Godthab",country:"Greenland"},{id:"GL",timeZone:"America/Danmarkshavn",country:"Greenland"},{id:"GL",timeZone:"America/Scoresbysund",country:"Greenland"},{id:"GL",timeZone:"America/Thule",country:"Greenland"},{id:"GD",timeZone:"America/Grenada",country:"Grenada"},{id:"GP",timeZone:"America/Guadeloupe",country:"Guadeloupe"},{id:"GU",timeZone:"Pacific/Guam",country:"Guam"},{id:"GT",timeZone:"America/Guatemala",country:"Guatemala"},{id:"GG",timeZone:"Europe/Guernsey",country:"Guernsey"},{id:"GN",timeZone:"Africa/Conakry",country:"Guinea"},{id:"GW",timeZone:"Africa/Bissau",country:"Guinea-Bissau"},{id:"GY",timeZone:"America/Guyana",country:"Guyana"},{id:"HT",timeZone:"America/Port-au-Prince",country:"Haiti"},{id:"VA",timeZone:"Europe/Vatican",country:"Holy See (Vatican City State)"},{id:"HN",timeZone:"America/Tegucigalpa",country:"Honduras"},{id:"HK",timeZone:"Asia/Hong_Kong",country:"Hong Kong"},{id:"HU",timeZone:"Europe/Budapest",country:"Hungary"},{id:"IS",timeZone:"Atlantic/Reykjavik",country:"Iceland"},{id:"IN",timeZone:"Asia/Kolkata",country:"India"},{id:"ID",timeZone:"Asia/Jakarta",country:"Indonesia"},{id:"ID",timeZone:"Asia/Pontianak",country:"Indonesia"},{id:"ID",timeZone:"Asia/Makassar",country:"Indonesia"},{id:"ID",timeZone:"Asia/Jayapura",country:"Indonesia"},{id:"IR",timeZone:"Asia/Tehran",country:"Iran (Islamic Republic Of)"},{id:"IQ",timeZone:"Asia/Baghdad",country:"Iraq"},{id:"IE",timeZone:"Europe/Dublin",country:"Ireland"},{id:"IM",timeZone:"Europe/Isle_of_Man",country:"Isle Of Man"},{id:"IL",timeZone:"Asia/Jerusalem",country:"Israel"},{id:"IT",timeZone:"Europe/Rome",country:"Italy"},{id:"JM",timeZone:"America/Jamaica",country:"Jamaica"},{id:"JP",timeZone:"Asia/Tokyo",country:"Japan"},{id:"JE",timeZone:"Europe/Jersey",country:"Jersey"},{id:"JO",timeZone:"Asia/Amman",country:"Jordan"},{id:"KZ",timeZone:"Asia/Almaty",country:"Kazakhstan"},{id:"KZ",timeZone:"Asia/Qyzylorda",country:"Kazakhstan"},{id:"KZ",timeZone:"Asia/Aqtobe",country:"Kazakhstan"},{id:"KZ",timeZone:"Asia/Aqtau",country:"Kazakhstan"},{id:"KZ",timeZone:"Asia/Oral",country:"Kazakhstan"},{id:"KE",timeZone:"Africa/Nairobi",country:"Kenya"},{id:"KI",timeZone:"Pacific/Tarawa",country:"Kiribati"},{id:"KI",timeZone:"Pacific/Enderbury",country:"Kiribati"},{id:"KI",timeZone:"Pacific/Kiritimati",country:"Kiribati"},{id:"KR",timeZone:"Asia/Seoul",country:"Korea"},{id:"KW",timeZone:"Asia/Kuwait",country:"Kuwait"},{id:"KG",timeZone:"Asia/Bishkek",country:"Kyrgyzstan"},{id:"LA",timeZone:"Asia/Vientiane",country:"Lao People's Democratic Republic"},{id:"LV",timeZone:"Europe/Riga",country:"Latvia"},{id:"LB",timeZone:"Asia/Beirut",country:"Lebanon"},{id:"LS",timeZone:"Africa/Maseru",country:"Lesotho"},{id:"LR",timeZone:"Africa/Monrovia",country:"Liberia"},{id:"LY",timeZone:"Africa/Tripoli",country:"Libyan Arab Jamahiriya"},{id:"LI",timeZone:"Europe/Vaduz",country:"Liechtenstein"},{id:"LT",timeZone:"Europe/Vilnius",country:"Lithuania"},{id:"LU",timeZone:"Europe/Luxembourg",country:"Luxembourg"},{id:"MO",timeZone:"Asia/Macau",country:"Macao"},{id:"MK",timeZone:"Europe/Skopje",country:"Macedonia"},{id:"MG",timeZone:"Indian/Antananarivo",country:"Madagascar"},{id:"MW",timeZone:"Africa/Blantyre",country:"Malawi"},{id:"MY",timeZone:"Asia/Kuala_Lumpur",country:"Malaysia"},{id:"MY",timeZone:"Asia/Kuching",country:"Malaysia"},{id:"MV",timeZone:"Indian/Maldives",country:"Maldives"},{id:"ML",timeZone:"Africa/Bamako",country:"Mali"},{id:"MT",timeZone:"Europe/Malta",country:"Malta"},{id:"MH",timeZone:"Pacific/Majuro",country:"Marshall Islands"},{id:"MH",timeZone:"Pacific/Kwajalein",country:"Marshall Islands"},{id:"MQ",timeZone:"America/Martinique",country:"Martinique"},{id:"MR",timeZone:"Africa/Nouakchott",country:"Mauritania"},{id:"MU",timeZone:"Indian/Mauritius",country:"Mauritius"},{id:"YT",timeZone:"Indian/Mayotte",country:"Mayotte"},{id:"MX",timeZone:"America/Mexico_City",country:"Mexico"},{id:"MX",timeZone:"America/Cancun",country:"Mexico"},{id:"MX",timeZone:"America/Merida",country:"Mexico"},{id:"MX",timeZone:"America/Monterrey",country:"Mexico"},{id:"MX",timeZone:"America/Matamoros",country:"Mexico"},{id:"MX",timeZone:"America/Mazatlan",country:"Mexico"},{id:"MX",timeZone:"America/Chihuahua",country:"Mexico"},{id:"MX",timeZone:"America/Ojinaga",country:"Mexico"},{id:"MX",timeZone:"America/Hermosillo",country:"Mexico"},{id:"MX",timeZone:"America/Tijuana",country:"Mexico"},{id:"MX",timeZone:"America/Santa_Isabel",country:"Mexico"},{id:"MX",timeZone:"America/Bahia_Banderas",country:"Mexico"},{id:"FM",timeZone:"Pacific/Chuuk",country:"Micronesia (Federated States Of)"},{id:"FM",timeZone:"Pacific/Pohnpei",country:"Micronesia (Federated States Of)"},{id:"FM",timeZone:"Pacific/Kosrae",country:"Micronesia (Federated States Of)"},{id:"MD",timeZone:"Europe/Chisinau",country:"Moldova"},{id:"MC",timeZone:"Europe/Monaco",country:"Monaco"},{id:"MN",timeZone:"Asia/Ulaanbaatar",country:"Mongolia"},{id:"MN",timeZone:"Asia/Hovd",country:"Mongolia"},{id:"MN",timeZone:"Asia/Choibalsan",country:"Mongolia"},{id:"ME",timeZone:"Europe/Podgorica",country:"Montenegro"},{id:"MS",timeZone:"America/Montserrat",country:"Montserrat"},{id:"MA",timeZone:"Africa/Casablanca",country:"Morocco"},{id:"MZ",timeZone:"Africa/Maputo",country:"Mozambique"},{id:"MM",timeZone:"Asia/Rangoon",country:"Myanmar"},{id:"NA",timeZone:"Africa/Windhoek",country:"Namibia"},{id:"NR",timeZone:"Pacific/Nauru",country:"Nauru"},{id:"NP",timeZone:"Asia/Kathmandu",country:"Nepal"},{id:"NL",timeZone:"Europe/Amsterdam",country:"Netherlands"},{id:"NC",timeZone:"Pacific/Noumea",country:"New Caledonia"},{id:"NZ",timeZone:"Pacific/Auckland",country:"New Zealand"},{id:"NZ",timeZone:"Pacific/Chatham",country:"New Zealand"},{id:"NI",timeZone:"America/Managua",country:"Nicaragua"},{id:"NE",timeZone:"Africa/Niamey",country:"Niger"},{id:"NG",timeZone:"Africa/Lagos",country:"Nigeria"},{id:"NU",timeZone:"Pacific/Niue",country:"Niue"},{id:"NF",timeZone:"Pacific/Norfolk",country:"Norfolk Island"},{id:"MP",timeZone:"Pacific/Saipan",country:"Northern Mariana Islands"},{id:"NO",timeZone:"Europe/Oslo",country:"Norway"},{id:"OM",timeZone:"Asia/Muscat",country:"Oman"},{id:"PK",timeZone:"Asia/Karachi",country:"Pakistan"},{id:"PW",timeZone:"Pacific/Palau",country:"Palau"},{id:"PS",timeZone:"Asia/Gaza",country:"Palestinian Territory (Occupied)"},{id:"PS",timeZone:"Asia/Hebron",country:"Palestinian Territory (Occupied)"},{id:"PA",timeZone:"America/Panama",country:"Panama"},{id:"PG",timeZone:"Pacific/Port_Moresby",country:"Papua New Guinea"},{id:"PY",timeZone:"America/Asuncion",country:"Paraguay"},{id:"PE",timeZone:"America/Lima",country:"Peru"},{id:"PH",timeZone:"Asia/Manila",country:"Philippines"},{id:"PN",timeZone:"Pacific/Pitcairn",country:"Pitcairn"},{id:"PL",timeZone:"Europe/Warsaw",country:"Poland"},{id:"PT",timeZone:"Europe/Lisbon",country:"Portugal"},{id:"PT",timeZone:"Atlantic/Madeira",country:"Portugal"},{id:"PT",timeZone:"Atlantic/Azores",country:"Portugal"},{id:"PR",timeZone:"America/Puerto_Rico",country:"Puerto Rico"},{id:"QA",timeZone:"Asia/Qatar",country:"Qatar"},{id:"RE",timeZone:"Indian/Reunion",country:"Reunion"},{id:"RO",timeZone:"Europe/Bucharest",country:"Romania"},{id:"RU",timeZone:"Europe/Kaliningrad",country:"Russian Federation"},{id:"RU",timeZone:"Europe/Moscow",country:"Russian Federation"},{id:"RU",timeZone:"Europe/Volgograd",country:"Russian Federation"},{id:"RU",timeZone:"Europe/Samara",country:"Russian Federation"},{id:"RU",timeZone:"Europe/Simferopol",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Yekaterinburg",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Omsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Novosibirsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Novokuznetsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Krasnoyarsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Irkutsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Yakutsk",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Khandyga",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Vladivostok",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Sakhalin",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Ust-Nera",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Magadan",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Kamchatka",country:"Russian Federation"},{id:"RU",timeZone:"Asia/Anadyr",country:"Russian Federation"},{id:"RW",timeZone:"Africa/Kigali",country:"Rwanda"},{id:"BL",timeZone:"America/St_Barthelemy",country:"Saint Barthelemy"},{id:"SH",timeZone:"Atlantic/St_Helena",country:"Saint Helena"},{id:"KN",timeZone:"America/St_Kitts",country:"Saint Kitts And Nevis"},{id:"LC",timeZone:"America/St_Lucia",country:"Saint Lucia"},{id:"MF",timeZone:"America/Marigot",country:"Saint Martin"},{id:"PM",timeZone:"America/Miquelon",country:"Saint Pierre And Miquelon"},{id:"VC",timeZone:"America/St_Vincent",country:"Saint Vincent And Grenadines"},{id:"WS",timeZone:"Pacific/Apia",country:"Samoa"},{id:"SM",timeZone:"Europe/San_Marino",country:"San Marino"},{id:"ST",timeZone:"Africa/Sao_Tome",country:"Sao Tome And Principe"},{id:"SA",timeZone:"Asia/Riyadh",country:"Saudi Arabia"},{id:"SN",timeZone:"Africa/Dakar",country:"Senegal"},{id:"RS",timeZone:"Europe/Belgrade",country:"Serbia"},{id:"SC",timeZone:"Indian/Mahe",country:"Seychelles"},{id:"SL",timeZone:"Africa/Freetown",country:"Sierra Leone"},{id:"SG",timeZone:"Asia/Singapore",country:"Singapore"},{id:"SK",timeZone:"Europe/Bratislava",country:"Slovakia"},{id:"SI",timeZone:"Europe/Ljubljana",country:"Slovenia"},{id:"SB",timeZone:"Pacific/Guadalcanal",country:"Solomon Islands"},{id:"SO",timeZone:"Africa/Mogadishu",country:"Somalia"},{id:"SS",timeZone:"Africa/Juba",country:"South Sudan"},{id:"ZA",timeZone:"Africa/Johannesburg",country:"South Africa"},{id:"GS",timeZone:"Atlantic/South_Georgia",country:"South Georgia And Sandwich Isl."},{id:"ES",timeZone:"Europe/Madrid",country:"Spain"},{id:"ES",timeZone:"Africa/Ceuta",country:"Spain"},{id:"ES",timeZone:"Atlantic/Canary",country:"Spain"},{id:"LK",timeZone:"Asia/Colombo",country:"Sri Lanka"},{id:"SD",timeZone:"Africa/Khartoum",country:"Sudan"},{id:"SR",timeZone:"America/Paramaribo",country:"Suriname"},{id:"SJ",timeZone:"Arctic/Longyearbyen",country:"Svalbard And Jan Mayen"},{id:"SZ",timeZone:"Africa/Mbabane",country:"Swaziland"},{id:"SE",timeZone:"Europe/Stockholm",country:"Sweden"},{id:"CH",timeZone:"Europe/Zurich",country:"Switzerland"},{id:"SY",timeZone:"Asia/Damascus",country:"Syrian Arab Republic"},{id:"TW",timeZone:"Asia/Taipei",country:"Taiwan"},{id:"TJ",timeZone:"Asia/Dushanbe",country:"Tajikistan"},{id:"TZ",timeZone:"Africa/Dar_es_Salaam",country:"Tanzania"},{id:"TH",timeZone:"Asia/Bangkok",country:"Thailand"},{id:"TL",timeZone:"Asia/Dili",country:"Timor-Leste"},{id:"TG",timeZone:"Africa/Lome",country:"Togo"},{id:"TK",timeZone:"Pacific/Fakaofo",country:"Tokelau"},{id:"TO",timeZone:"Pacific/Tongatapu",country:"Tonga"},{id:"TT",timeZone:"America/Port_of_Spain",country:"Trinidad And Tobago"},{id:"TN",timeZone:"Africa/Tunis",country:"Tunisia"},{id:"TR",timeZone:"Europe/Istanbul",country:"Turkey"},{id:"TM",timeZone:"Asia/Ashgabat",country:"Turkmenistan"},{id:"TC",timeZone:"America/Grand_Turk",country:"Turks And Caicos Islands"},{id:"TV",timeZone:"Pacific/Funafuti",country:"Tuvalu"},{id:"UG",timeZone:"Africa/Kampala",country:"Uganda"},{id:"UA",timeZone:"Europe/Kiev",country:"Ukraine"},{id:"UA",timeZone:"Europe/Uzhgorod",country:"Ukraine"},{id:"UA",timeZone:"Europe/Zaporozhye",country:"Ukraine"},{id:"AE",timeZone:"Asia/Dubai",country:"United Arab Emirates"},{id:"GB",timeZone:"Europe/London",country:"United Kingdom"},{id:"US",timeZone:"America/New_York",country:"United States"},{id:"US",timeZone:"America/Detroit",country:"United States"},{id:"US",timeZone:"America/Kentucky/Louisville",country:"United States"},{id:"US",timeZone:"America/Kentucky/Monticello",country:"United States"},{id:"US",timeZone:"America/Indiana/Indianapolis",country:"United States"},{id:"US",timeZone:"America/Indiana/Vincennes",country:"United States"},{id:"US",timeZone:"America/Indiana/Winamac",country:"United States"},{id:"US",timeZone:"America/Indiana/Marengo",country:"United States"},{id:"US",timeZone:"America/Indiana/Petersburg",country:"United States"},{id:"US",timeZone:"America/Indiana/Vevay",country:"United States"},{id:"US",timeZone:"America/Chicago",country:"United States"},{id:"US",timeZone:"America/Indiana/Tell_City",country:"United States"},{id:"US",timeZone:"America/Indiana/Knox",country:"United States"},{id:"US",timeZone:"America/Menominee",country:"United States"},{id:"US",timeZone:"America/North_Dakota/Center",country:"United States"},{id:"US",timeZone:"America/North_Dakota/New_Salem",country:"United States"},{id:"US",timeZone:"America/North_Dakota/Beulah",country:"United States"},{id:"US",timeZone:"America/Denver",country:"United States"},{id:"US",timeZone:"America/Boise",country:"United States"},{id:"US",timeZone:"America/Phoenix",country:"United States"},{id:"US",timeZone:"America/Los_Angeles",country:"United States"},{id:"US",timeZone:"America/Anchorage",country:"United States"},{id:"US",timeZone:"America/Juneau",country:"United States"},{id:"US",timeZone:"America/Sitka",country:"United States"},{id:"US",timeZone:"America/Yakutat",country:"United States"},{id:"US",timeZone:"America/Nome",country:"United States"},{id:"US",timeZone:"America/Adak",country:"United States"},{id:"US",timeZone:"America/Metlakatla",country:"United States"},{id:"US",timeZone:"Pacific/Honolulu",country:"United States"},{id:"UM",timeZone:"Pacific/Johnston",country:"United States Outlying Islands"},{id:"UM",timeZone:"Pacific/Midway",country:"United States Outlying Islands"},{id:"UM",timeZone:"Pacific/Wake",country:"United States Outlying Islands"},{id:"UY",timeZone:"America/Montevideo",country:"Uruguay"},{id:"UZ",timeZone:"Asia/Samarkand",country:"Uzbekistan"},{id:"UZ",timeZone:"Asia/Tashkent",country:"Uzbekistan"},{id:"VU",timeZone:"Pacific/Efate",country:"Vanuatu"},{id:"VE",timeZone:"America/Caracas",country:"Venezuela"},{id:"VN",timeZone:"Asia/Ho_Chi_Minh",country:"Viet Nam"},{id:"VG",timeZone:"America/Tortola",country:"Virgin Islands (British)"},{id:"VI",timeZone:"America/St_Thomas",country:"Virgin Islands (U.S.)"},{id:"WF",timeZone:"Pacific/Wallis",country:"Wallis And Futuna"},{id:"EH",timeZone:"Africa/El_Aaiun",country:"Western Sahara"},{id:"YE",timeZone:"Asia/Aden",country:"Yemen"},{id:"ZM",timeZone:"Africa/Lusaka",country:"Zambia"},{id:"ZW",timeZone:"Africa/Harare",country:"Zimbabwe"},{id:"SX",timeZone:"America/Lower_Princes",country:"Sint Maarten"},{id:"CW",timeZone:"America/Curacao",country:"Curacao"},{id:"BQ",timeZone:"America/Kralendijk",country:"Bonaire"},{id:"KP",timeZone:"Asia/Pyongyang",country:"North Korea"}];return i.map(n,function(i){return i.timeZone==e?i:void 0})}return{getTimeZone:e,getCountries:n}}])}(),function(){"use strict";angular.module("tz").controller("TimeZoneController",["$scope","_","timeZone",function(i,e,n){i.timeZoneList=[],i.countries=[],i.timeZoneList=n.getTimeZone()}])}(),function(){"use strict";angular.module("tz").run(["$log",function(i){i.debug("run Time Zone.")}])}(),function(){"use strict"}(),function(){"use strict";angular.module("tz").constant("moment",moment)}(),function(){"use strict";angular.module("tz").config(["$logProvider",function(i){i.debugEnabled(!0)}])}(),angular.module("tz").run(["$templateCache",function(i){i.put("app/main/main.html","")}]);
//# sourceMappingURL=../maps/scripts/app-22fe9311cb.js.map
