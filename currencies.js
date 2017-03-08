var formatter = require('./formatter')

var currencies =
{
  AED:
  {
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ.‏',
    formatCurrency: function (number) {
    	return standardFormat(number) + ' ' + currencies.AED.symbol;
    }
  },
  AFN:
  {
    name: 'Afghan Afghani',
    symbol: '؋',
    formatCurrency: function (number) {
    	return standardFormat(number) + ' ' + currencies.AFN.symbol;
    }
  },
  ALL:
  {
    name: 'Albanian Lek',
    symbol: 'Lek',
    formatCurrency: function (number) {
    	return currencies.ALL.symbol + ' ' + standardFormat(number);
    }
  },
  AMD:
  {
    name: 'Armenian Dram',
    symbol: ' &#1423; ', // https://www.utf8icons.com/character/1423/armenian-dram-sign
    formatCurrency: function (number) {
    	return currencies.AMD.symbol + ' ' + standardFormat(number);
    }
  },
  ANG:
  {
    name: 'Netherlands Antillean Guilder',
    symbol: 'ƒ',
    formatCurrency: function (number) {
    	return currencies.ANG.symbol + ' ' + standardFormat(number, '.', ',');
    }
  },
  AOA:
  {
    name: 'Angolan Kwanza',
    symbol: 'Kz',
    formatCurrency: function (number) {
    	return currencies.AOA.symbol + ' ' + standardFormat(number);
    }
  },
  ARS:
  {
    name: 'Argentine Peso',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.ARS.symbol + ' ' + standardFormat(number, '.', ',');
    }
  },
  AUD:
  {
    name: 'Australian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.AUD.symbol + ' ' + standardFormat(number);
    }
  },
  AWG:
  {
    name: 'Aruban Florin',
    symbol: 'ƒ',
    formatCurrency: function (number) {
    	return currencies.AWG.symbol + ' ' + standardFormat(number);
    }
  },
  AZN:
  {
    name: 'Azerbaijani Manat',
    symbol: '₼',
    formatCurrency: function (number) {
    	return currencies.AZN.symbol + ' ' + standardFormat(number, ' ', ',');
    }
  },
  BAM:
  {
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbol: 'KM',
    formatCurrency: function (number) {
    	return currencies.BAM.symbol + ' ' + standardFormat(number);
    }
  },
  BBD:
  {
    name: 'Barbadian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BBD.symbol + ' ' + standardFormat(number);
    }
  },
  BDT: {
    name: 'Bangladeshi Taka',
    symbol: '৳',
    formatCurrency: function (number) {
    	return currencies.BDT.symbol + ' ' + standardFormat(number);
    }
  },
  BGN:
  {
    name: 'Bulgarian Lev',
    symbol: 'лв',
    formatCurrency: function (number) {
    	return currencies.BGN.symbol + ' ' + standardFormat(number);
    }
  },
  BHD:
  {
    name: 'Bahraini Dinar',
    symbol: 'د.ب.‏',
    formatCurrency: function (number) {
    	return currencies.BHD.symbol + ' ' + standardFormat(number);
    }
  },
  BIF:
  {
    name: 'Burundian Franc',
    symbol: 'FBu',
    formatCurrency: function (number) {
    	return currencies.BIF.symbol + ' ' + standardFormat(number);
    }
  },
  BMD:
  {
    name: 'Bermudan Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BMD.symbol + ' ' + standardFormat(number);
    }
  },
  BND:
  {
    name: 'Brunei Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BND.symbol + ' ' + standardFormat(number);
    }
  },
  BOB:
  {
    name: 'Bolivian Boliviano',
    symbol: 'Bs',
    formatCurrency: function (number) {
    	return currencies.BOB.symbol + ' ' + standardFormat(number);
    }
  },
  BRL:
  {
    name: 'Brazilian Real',
    symbol: 'R$',
    formatCurrency: function (number) {
    	return currencies.BRL.symbol + ' ' + standardFormat(number);
    }
  },
  BSD:
  {
    name: 'Bahamian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BSD.symbol + ' ' + standardFormat(number);
    }
  },
  BTC:
  {
    name: 'Bitcoin',
    symbol: 'Ƀ',
    formatCurrency: function (number) {
    	return currencies.BTC.symbol + ' ' + standardFormat(number);
    }
  },
  BTN:
  {
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu',
    formatCurrency: function (number) {
    	return currencies.BTN.symbol + ' ' + standardFormat(number);
    }
  },
  BWP:
  {
    name: 'Botswanan Pula',
    symbol: 'P',
    formatCurrency: function (number) {
    	return currencies.BWP.symbol + ' ' + standardFormat(number);
    }
  },
  BYN:
  {
    name: 'Belarusian Ruble',
    symbol: '????',
    formatCurrency: function (number) {
    	return currencies.BYN.symbol + ' ' + standardFormat(number);
    }
  },
  BYR:
  {
    name: 'Belarusian Ruble (pre-2016)',
    symbol: 'p',
    formatCurrency: function (number) {
    	return currencies.BYR.symbol + ' ' + standardFormat(number);
    }
  },
  BZD:
  {
    name: 'Belize Dollar',
    symbol: 'BZ$',
    formatCurrency: function (number) {
    	return currencies.BZD.symbol + ' ' + standardFormat(number);
    }
  },
  CAD:
  {
    name: 'Canadian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CAD.symbol + ' ' + standardFormat(number);
    }
  },
  CDF: {
    name: 'Congolese Franc',
    symbol: 'FC',
    formatCurrency: function (number) {
    	return currencies.CDF.symbol + ' ' + standardFormat(number);
    }
  },
  CHF:
  {
    name: 'Swiss Franc',
    symbol: 'CHF',
    formatCurrency: function (number) {
    	return currencies.CHF.symbol + ' ' + standardFormat(number);
    }
  },
  CLF:
  {
    name: 'Chilean Unit of Account (UF)',
    symbol: '???',
    formatCurrency: function (number) {
    	return currencies.CLF.symbol + ' ' + standardFormat(number);
    }
  },
  CLP:
  {
    name: 'Chilean Peso',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CLP.symbol + ' ' + standardFormat(number);
    }
  },
  CNY:
  {
    name: 'Chinese Yuan',
    symbol: '¥',
    formatCurrency: function (number) {
    	return currencies.CNY.symbol + ' ' + standardFormat(number);
    }
  },
  COP:
  {
    name: 'Colombian Peso',
    symbol: '$'
    formatCurrency: function (number) {
    	return currencies.COP.symbol + ' ' + standardFormat(number);
    }
  },
  CRC:
  {
    name: 'Costa Rican Colón',
    symbol: '₡',
    formatCurrency: function (number) {
    	return currencies.CRC.symbol + ' ' + standardFormat(number);
    }
  },
  CUC:
  {
    name: 'Cuban Convertible Peso',
    symbol: 'CUC',
    formatCurrency: function (number) {
    	return currencies.CUC.symbol + ' ' + standardFormat(number);
    }
  },
  CUP:
  {
    name: 'Cuban Peso',
    symbol: '$MN',
    formatCurrency: function (number) {
    	return currencies.CUP.symbol + ' ' + standardFormat(number);
    }
  },
  CVE:
  {
    name: 'Cape Verdean Escudo',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CVE.symbol + ' ' + standardFormat(number);
    }
  },
  CZK:
  {
    name: 'Czech Republic Koruna',
    symbol: 'Kč',
    formatCurrency: function (number) {
    	return currencies.CZK.symbol + ' ' + standardFormat(number);
    }
  },
  DJF:
  {
    name: 'Djiboutian Franc',
    symbol: 'Fdj',
    formatCurrency: function (number) {
    	return currencies.DJF.symbol + ' ' + standardFormat(number);
    }
  },
  DKK:
  {
    name: 'Danish Krone',
    symbol: 'kr',
    formatCurrency: function (number) {
    	return currencies.DKK.symbol + ' ' + standardFormat(number);
    }
  },
  DOP:
  {
    name: 'Dominican Peso',
    symbol: 'RD$',
    formatCurrency: function (number) {
    	return currencies.DOP.symbol + ' ' + standardFormat(number);
    }
  },
  DZD:
  {
    name: 'Algerian Dinar',
    symbol: 'د.ج.‏',
    formatCurrency: function (number) {
    	return currencies.DZD.symbol + ' ' + standardFormat(number);
    }
  },
  EEK:
  {
    name: 'Estonian Kroon',
    symbol: '',
    formatCurrency: function (number) {
    	return currencies.EEK.symbol + ' ' + standardFormat(number);
    }
  },
  EGP:
  {
    name: 'Egyptian Pound',
    symbol: 'ج.م.‏',
    formatCurrency: function (number) {
    	return currencies.EGP.symbol + ' ' + standardFormat(number);
    }
  },
  ERN:
  {
    name: 'Eritrean Nakfa',
    symbol: 'Nfk',
    formatCurrency: function (number) {
    	return currencies.ERN.symbol + ' ' + standardFormat(number);
    }
  },
  ETB:
  {
    name: 'Ethiopian Birr',
    symbol: '',
    formatCurrency: function (number) {
    	return currencies.ETB.symbol + ' ' + standardFormat(number);
    }
  },
  EUR: {
    name: 'Euro',
    symbol: '',
    formatCurrency: function (number) {
    	return currencies.EUR.symbol + ' ' + standardFormat(number);
    }
  },
  FJD:
  {
    name: 'Fijian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.FJD.symbol + ' ' + standardFormat(number);
    }
  },
  FKP:
  {
    name: 'Falkland Islands Pound',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.FKP.symbol + ' ' + standardFormat(number);
    }
  },
  GBP: {
    name: 'British Pound Sterling',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.GBP.symbol + ' ' + standardFormat(number);
    }
  },
  GEL:
  {
    name: 'Georgian Lari'
  },
 "GGP"=>"Guernsey Pound",
 "GHS"=>"Ghanaian Cedi",
 "GIP"=>"Gibraltar Pound",
 "GMD"=>"Gambian Dalasi",
 "GNF"=>"Guinean Franc",
 "GTQ"=>"Guatemalan Quetzal",
 "GYD"=>"Guyanaese Dollar",
 "HKD"=>"Hong Kong Dollar",
 "HNL"=>"Honduran Lempira",
 "HRK"=>"Croatian Kuna",
 "HTG"=>"Haitian Gourde",
 "HUF"=>"Hungarian Forint",
 "IDR"=>"Indonesian Rupiah",
 "ILS"=>"Israeli New Sheqel",
 "IMP"=>"Manx pound",
 "INR"=>"Indian Rupee",
 "IQD"=>"Iraqi Dinar",
 "IRR"=>"Iranian Rial",
 "ISK"=>"Icelandic Króna",
 "JEP"=>"Jersey Pound",
 "JMD"=>"Jamaican Dollar",
 "JOD"=>"Jordanian Dinar",
 "JPY"=>"Japanese Yen",
 "KES"=>"Kenyan Shilling",
 "KGS"=>"Kyrgystani Som",
 "KHR"=>"Cambodian Riel",
 "KMF"=>"Comorian Franc",
 "KPW"=>"North Korean Won",
 "KRW"=>"South Korean Won",
 "KWD"=>"Kuwaiti Dinar",
 "KYD"=>"Cayman Islands Dollar",
 "KZT"=>"Kazakhstani Tenge",
 "LAK"=>"Laotian Kip",
 "LBP"=>"Lebanese Pound",
 "LKR"=>"Sri Lankan Rupee",
 "LRD"=>"Liberian Dollar",
 "LSL"=>"Lesotho Loti",
 "LTL"=>"Lithuanian Litas",
 "LVL"=>"Latvian Lats",
 "LYD"=>"Libyan Dinar",
 "MAD"=>"Moroccan Dirham",
 "MDL"=>"Moldovan Leu",
 "MGA"=>"Malagasy Ariary",
 "MKD"=>"Macedonian Denar",
 "MMK"=>"Myanma Kyat",
 "MNT"=>"Mongolian Tugrik",
 "MOP"=>"Macanese Pataca",
 "MRO"=>"Mauritanian Ouguiya",
 "MTL"=>"Maltese Lira",
 "MUR"=>"Mauritian Rupee",
 "MVR"=>"Maldivian Rufiyaa",
 "MWK"=>"Malawian Kwacha",
 "MXN"=>"Mexican Peso",
 "MYR"=>"Malaysian Ringgit",
 "MZN"=>"Mozambican Metical",
 "NAD"=>"Namibian Dollar",
 "NGN"=>"Nigerian Naira",
 "NIO"=>"Nicaraguan Córdoba",
 "NOK"=>"Norwegian Krone",
 "NPR"=>"Nepalese Rupee",
 "NZD"=>"New Zealand Dollar",
 "OMR"=>"Omani Rial",
 "PAB"=>"Panamanian Balboa",
 "PEN"=>"Peruvian Nuevo Sol",
 "PGK"=>"Papua New Guinean Kina",
 "PHP"=>"Philippine Peso",
 "PKR"=>"Pakistani Rupee",
 "PLN"=>"Polish Zloty",
 "PYG"=>"Paraguayan Guarani",
 "QAR"=>"Qatari Rial",
 "RON"=>"Romanian Leu",
 "RSD"=>"Serbian Dinar",
 "RUB"=>"Russian Ruble",
 "RWF"=>"Rwandan Franc",
 "SAR"=>"Saudi Riyal",
 "SBD"=>"Solomon Islands Dollar",
 "SCR"=>"Seychellois Rupee",
 "SDG"=>"Sudanese Pound",
 "SEK"=>"Swedish Krona",
 "SGD"=>"Singapore Dollar",
 "SHP"=>"Saint Helena Pound",
 "SLL"=>"Sierra Leonean Leone",
 "SOS"=>"Somali Shilling",
 "SRD"=>"Surinamese Dollar",
 "STD"=>"São Tomé and Príncipe Dobra",
 "SVC"=>"Salvadoran Colón",
 "SYP"=>"Syrian Pound",
 "SZL"=>"Swazi Lilangeni",
 "THB"=>"Thai Baht",
 "TJS"=>"Tajikistani Somoni",
 "TMT"=>"Turkmenistani Manat",
 "TND"=>"Tunisian Dinar",
 "TOP"=>"Tongan Pa?anga",
 "TRY"=>"Turkish Lira",
 "TTD"=>"Trinidad and Tobago Dollar",
 "TWD"=>"New Taiwan Dollar",
 "TZS"=>"Tanzanian Shilling",
 "UAH"=>"Ukrainian Hryvnia",
 "UGX"=>"Ugandan Shilling",
 "USD"=>"United States Dollar",
 "UYU"=>"Uruguayan Peso",
 "UZS"=>"Uzbekistan Som",
 "VEF"=>"Venezuelan Bolívar Fuerte",
 "VND"=>"Vietnamese Dong",
 "VUV"=>"Vanuatu Vatu",
 "WST"=>"Samoan Tala",
 "XAF"=>"CFA Franc BEAC",
 "XAG"=>"Silver Ounce",
 "XAU"=>"Gold Ounce",
 "XCD"=>"East Caribbean Dollar",
 "XDR"=>"Special Drawing Rights",
 "XOF"=>"CFA Franc BCEAO",
 "XPD"=>"Palladium Ounce",
 "XPF"=>"CFP Franc",
 "XPT"=>"Platinum Ounce",
 "YER"=>"Yemeni Rial",
 "ZAR"=>"South African Rand",
 "ZMK"=>"Zambian Kwacha (pre-2013)",
 "ZMW"=>"Zambian Kwacha",
 "ZWL"=>"Zimbabwean Dollar"
}
