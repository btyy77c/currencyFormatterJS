var FormatCurrencies = {
  currencyList: {
    AED: {
      name: 'United Arab Emirates Dirham',
      symbol: '&#x62f;&#x2e;&#x625',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + ' &#x62f;&#x2e;&#x625';
      }
    },
    AFN: {
      name: 'Afghan Afghani',
      symbol: '&#x60b;',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + '&#x60b;';
      }
    },
    ALL: {
      name: 'Albanian Lek',
      symbol: 'Lek',
      countryFormat: function (number) {
        return 'Lek' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    AMD: {
      name: 'Armenian Dram',
      symbol:  '&#1423;', // https://www.utf8icons.com/character/1423/armenian-dram-sign
      countryFormat: function (number) {
      	return '&#1423; ' + FormatCurrencies.standardFormat(number);
      }
    },
    ANG: {
      name: 'Netherlands Antillean Guilder',
      symbol:  "&#x192;",
      countryFormat: function (number) {
      	return "&#x192;" + FormatCurrencies.standardFormat(number);
      }
    },
    AOA: {
      name: 'Angolan Kwanza',
      symbol:  'Kz',
      countryFormat: function (number) {
      	return 'Kz' + FormatCurrencies.standardFormat(number);
      }
    },
    ARS: {
      name: 'Argentine Peso',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    AUD: {
      name: 'Australian Dollar',
      symbol:  'A$',
      countryFormat: function (number) {
        return 'A$ ' + FormatCurrencies.standardFormat(number);
      }
    },
    AWG: {
      name: 'Aruban Florin',
      symbol:  '&#x192;',
      countryFormat: function (number) {
      	return '&#x192;' + FormatCurrencies.standardFormat(number);
      }
    },
    AZN: {
      name: 'Azerbaijani Manat',
      symbol:  '&#x20bc;',
      countryFormat: function (number) {
      	return  FormatCurrencies.standardFormat(number, " ", ',') + ' &#x20bc;';
      }
    },
    BAM: {
      name: 'Bosnia-Herzegovina Convertible Mark',
      symbol:  'KM',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, '.', ',') + ' KM';
      }
    },
    BBD: {
      name: 'Barbadian Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    BDT: {
      name: 'Bangladeshi Taka',
      symbol:  '&#x9f3;',
      countryFormat: function (number) {
        return '&#x9f3; ' + FormatCurrencies.standardFormat(number);
      }
    },
    BGN: {
      name: 'Bulgarian Lev',
      symbol:  'лв',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, " ", ',') + ' &#x43b;&#x432;';
      }
    },
    BHD: {
      name: 'Bahraini Dinar',
      symbol:  'BD',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', '.', 3) + ' BD';
      }
    },
    BIF: {
      name: 'Burundian Franc',
      symbol:  'FBu',
      countryFormat: function (number) {
      	return  FormatCurrencies.noDecimals(number) + 'FBu';
      }
    },
    BMD: {
      name: 'Bermudan Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    BND: {
      name: 'Brunei Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    BOB: {
      name: 'Bolivian Boliviano',
      symbol:  'Bs',
      countryFormat: function (number) {
      	return 'Bs ' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    BRL: {
      name: 'Brazilian Real',
      symbol:  'R$',
      countryFormat: function (number) {
      	return 'R$ ' + FormatCurrencies.standardFormat(number);
      }
    },
    BSD: {
      name: 'Bahamian Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    BTC: {
      name: 'Bitcoin',
      symbol:  '&#x243;',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + '&#x243;';
      }
    },
    BTN: {
      name: 'Bhutanese Ngultrum',
      symbol:  'Nu',
      countryFormat: function (number) {
      	return 'Nu. ' + FormatCurrencies.standardFormat(number, ',', '.');
      }
    },
    BWP: {
      name: 'Botswanan Pula',
      symbol:  'P',
      countryFormat: function (number) {
      	return 'P' + FormatCurrencies.standardFormat(number);
      }
    },
    BYN: {
      name: 'Belarusian Ruble',
      symbol:  'Br',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + ' Br';
      }
    },
    BZD: {
      name: 'Belize Dollar',
      symbol:  'BZ$',
      countryFormat: function (number) {
      	return 'BZ$' + FormatCurrencies.standardFormat(number);
      }
    },
    CAD: {
      name: 'Canadian Dollar',
      symbol:  'C$',
      countryFormat: function (number) {
      	return 'C$ ' + FormatCurrencies.standardFormat(number);
      }
    },
    CDF: {
      name: 'Congolese Franc',
      symbol:  'FC',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + 'FC';
      }
    },
    CHF: {
      name: 'Swiss Franc',
      symbol:  'CHF',
      countryFormat: function (number) {
      	return  "CHF " + FormatCurrencies.standardFormat(number, "'");
      }
    },
    CLF: {
      name: 'Chilean Unit of Account (UF)',
      symbol:  'UF',
      countryFormat: function (number) {
      	return 'UF' + FormatCurrencies.standardFormat(number);
      }
    },
    CLP: {
      name: 'Chilean Peso',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$ ' + FormatCurrencies.noDecimals(number, '.', ',');
      }
    },
    CNY: {
      name: 'Chinese Yuan',
      symbol:  "&#x5143;",
      countryFormat: function (number) {
      	return "&#x5143; " + FormatCurrencies.standardFormat(number);
      }
    },
    COP: {
      name: 'Colombian Peso',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$ ' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    CRC: {
      name: 'Costa Rican Colón',
      symbol:  '&#x20a1;',
      countryFormat: function (number) {
      	return '&#x20a1;' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    CUC: {
      name: 'Cuban Convertible Peso',
      symbol:  'CUC$',
      countryFormat: function (number) {
      	return 'CUC$' + FormatCurrencies.standardFormat(number);
      }
    },
    CUP: {
      name: 'Cuban Peso',
      symbol:  '$MN',
      countryFormat: function (number) {
      	return '$MN' + FormatCurrencies.standardFormat(number);
      }
    },
    CVE: {
      name: 'Cape Verdean Escudo',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    CZK: {
      name: 'Czech Republic Koruna',
      symbol:  ' K&#x10d;',
      countryFormat: function (number) {
      	return  FormatCurrencies.standardFormat(number, " ", ',') + ' K&#x10d;';
      }
    },
    DJF: {
      name: 'Djiboutian Franc',
      symbol:  'Fdj',
      countryFormat: function (number) {
      	return  FormatCurrencies.noDecimals(number) + 'Fdj';
      }
    },
    DKK: {
      name: 'Danish Krone',
      symbol:  'kr.',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, '', ',') + ' kr.';
      }
    },
    DOP: {
      name: 'Dominican Peso',
      symbol:  'RD$',
      countryFormat: function (number) {
      	return 'RD$' + FormatCurrencies.standardFormat(number);
      }
    },
    DZD: {
      name: 'Algerian Dinar',
      symbol:  '&#x062F;.&#x062C;',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + ' &#x062F;.&#x062C;';
      }
    },
    EGP: {
      name: 'Egyptian Pound',
      symbol:  '&#x00A3; ',
      countryFormat: function (number) {
      	return '&#x00A3; ' + FormatCurrencies.standardFormat(number);
      }
    },
    ERN: {
      name: 'Eritrean Nakfa',
      symbol:  'Nfk',
      countryFormat: function (number) {
      	return  FormatCurrencies.standardFormat(number) + 'Nfk';
      }
    },
    ETB: {
      name: 'Ethiopian Birr',
      symbol:  'Br',
      countryFormat: function (number) {
      	return 'Br ' + FormatCurrencies.standardFormat(number);
      }
    },
    EUR: {
      name: 'Euro',
      symbol:  '&#x20AC;',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, " ", ',') + ' &#x20AC;';
      }
    },
    FJD: {
      name: 'Fijian Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    FKP: {
      name: 'Falkland Islands Pound',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
      	return '&#x00A3;' + FormatCurrencies.standardFormat(number);
      }
    },
    GBP: {
      name: 'British Pound Sterling',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
      	return '&#x00A3;' + FormatCurrencies.standardFormat(number, ',', '.');
      }
    },
    GEL: {
      name: 'Georgian Lari',
      symbol:  'Lari',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, " ", ',') + ' Lari';
      }
    },
    GGP: {
      name: 'Guernsey Pound',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
      	return '&#x00A3;' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    GHS: {
      name: 'Ghanaian Cedi',
      symbol:  '&#x20B5;',
      countryFormat: function (number) {
      	return '&#x20B5;' + FormatCurrencies.standardFormat(number);
      }
    },
    GIP: {
      name: 'Gibraltar Pound',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
      	return '&#x00A3;' + FormatCurrencies.standardFormat(number);
      }
    },
    GMD: {
      name: 'Gambian Dalasi',
      symbol:  'D',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number) + 'D';
      }
    },
    GNF: {
      name: 'Guinean Franc',
      symbol:  'FG',
      countryFormat: function (number) {
      	return  FormatCurrencies.noDecimals(number) + 'FG';
      }
    },
    GTQ: {
      name: 'Guatemalan Quetzal',
      symbol:  'Q',
      countryFormat: function (number) {
      	return 'Q' + FormatCurrencies.standardFormat(number);
      }
    },
    GYD: {
      name: 'Guyanaese Dollar',
      symbol:  '$',
      countryFormat: function (number) {
      	return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    HKD: {
      name: 'Hong Kong Dollar',
      symbol:  'HK$',
      countryFormat: function (number) {
      	return 'HK$' + FormatCurrencies.standardFormat(number);
      }
    },
    HNL: {
      name: 'Honduran Lempira',
      symbol:  'L.',
      countryFormat: function (number) {
      	return 'L. ' + FormatCurrencies.standardFormat(number);
      }
    },
    HRK: {
      name: 'Croatian Kuna',
  		symbol:  'kn',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, '.', ',') + ' kn';
      }
    },
    HTG: {
      name: 'Haitian Gourde',
  		symbol:  "G",
      countryFormat: function (number) {
      	return "G" + FormatCurrencies.standardFormat(number);
      }
    },
    HUF: {
      name: 'Hungarian Forint',
  		symbol:  'Ft',
      countryFormat: function (number) {
      	return FormatCurrencies.standardFormat(number, " ", ',') + ' Ft';
      }
    },
    IDR: {
      name: 'Indonesian Rupiah',
  		symbol:  'Rp',
      countryFormat: function (number) {
      	return 'Rp' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    ILS: {
      name: 'sraeli New Sheqel',
  		symbol:  '&#x20AA;',
      countryFormat: function (number) {
      	return '&#x20AA; ' + FormatCurrencies.standardFormat(number);
      }
    },
    IMP: {
      name: 'Manx pound',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
      	return '&#x00A3;' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    INR: {
      name: 'Indian Rupee',
      symbol:  "&#x20B9;",
      countryFormat: function (number) {
        return "&#x20B9;" + FormatCurrencies.INRCurrency(number);
      }
    },
    IQD: {
      name: 'Iraqi Dinar',
  		symbol:  '&#x062F;.&#x0639;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + ' &#x062F;.&#x0639;';
      }
    },
    IRR: {
      name: 'Iranian Rial',
  		symbol:  "&#xFDFC;",
  		"symbolOnLeft": true,
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', "/") + " &#xFDFC;";
      }
    },
    ISK: {
      name: 'Icelandic Króna',
  		symbol:  'kr.',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, '.', ',') + ' kr.';
      }
    },
    JEP: {
      name: 'Jersey Pound',
      symbol:  '&#x00A3;',
      countryFormat: function (number) {
        return '&#x00A3;' + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    JMD: {
      name: 'Jamaican Dollar',
  		symbol:  "J$",
      countryFormat: function (number) {
        return "J$" + FormatCurrencies.standardFormat(number);
      }
    },
    JOD: {
      name: 'Jordanian Dinar',
  		symbol:  "JD",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', '.', 3) + 'JD';
      }
    },
    JPY: {
      name: 'Japanese Yen',
  		symbol:  '&#x00A5;',
      countryFormat: function (number) {
        return '&#x00A5; ' + FormatCurrencies.noDecimals(number);
      }
    },
    KES: {
      name: 'Kenyan Shilling',
  		symbol:  'S',
      countryFormat: function (number) {
        return 'S ' + FormatCurrencies.standardFormat(number);
      }
    },
    KGS: {
      name: 'Kyrgystani Som',
  		symbol:  '&#x0441;&#x043E;&#x043C;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, " ", '-') + ' &#x0441;&#x043E;&#x043C;';
      }
    },
    KHR: {
      name: 'Cambodian Riel',
  		symbol:  '&#x17DB;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + '&#x17DB;';
      }
    },
    KMF: {
      name: 'Comorian Franc',
  		symbol:  'CF',
      countryFormat: function (number) {
        return FormatCurrencies.noDecimals(number) + 'CF';
      }
    },
    KPW: {
      name: 'North Korean Won',
      symbol:  '&#x20A9;',
      countryFormat: function (number) {
        return '&#x20A9;' + FormatCurrencies.standardFormat(number);
      }
    },
    KRW: {
      name: 'South Korean Won',
  		symbol:  '&#x20A9;',
      countryFormat: function (number) {
        return '&#x20A9; ' + FormatCurrencies.noDecimals(number);
      }
    },
    KWD: {
      name: 'Kuwaiti Dinar',
  		symbol:  '&#x0643;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', '.', 3) + ' &#x0643;';
      }
    },
    KYD: {
      name: 'Cayman Islands Dollar',
  		symbol:  '$',
      countryFormat: function (number) {
        return '$' + FormatCurrencies.standardFormat(number);
      }
    },
    KZT: {
      name: 'Kazakhstani Tenge',
  		symbol:  '&#x20B8;',
      countryFormat: function (number) {
        return '&#x20B8;' + FormatCurrencies.standardFormat(number, " ", '-');
      }
    },
    LAK: {
      name: 'Laotian Kip',
  		symbol:  '&#x20AD;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + '&#x20AD;';
      }
    },
    LBP: {
      name: 'Lebanese Pound',
      symbol:  '&#x0644;.&#x0644;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + ' &#x0644;.&#x0644;';
      }
    },
    LKR: {
      name: 'Sri Lankan Rupee',
      symbol:  "&#x20A8;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + " &#x20A8;";
      }
    },
    LRD: {
      name: 'Liberian Dollar',
  		symbol:  "$",
      countryFormat: function (number) {
        return "$" + FormatCurrencies.standardFormat(number);
      }
    },
    LSL: {
      name: 'Lesotho Loti',
  		symbol:  'M',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + 'M';
      }
    },
    LYD: {
      name: 'Libyan Dinar',
      symbol:  'LD',
      countryFormat: function (number) {
        return 'LD' +  FormatCurrencies.standardFormat(number);
      }
    },
    MAD: {
      name: 'Moroccan Dirham',
      symbol:  "DH",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + ' DH';
      }
    },
    MDL: {
      name: 'Moldovan Leu',
      symbol:  'lei',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + ' lei';
      }
    },
    MGA: {
      name: 'Malagasy Ariary',
      symbol:  'Ar',
      countryFormat: function (number) {
        return 'Ar' +  FormatCurrencies.noDecimals(number, ',');
      }
    },
    MKD: {
      name: 'Macedonian Denar',
      symbol:  '&#x0434;&#x0435;&#x043D;',
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, '.', ',')  + ' &#x0434;&#x0435;&#x043D;';
      }
    },
    MMK: {
      name: 'Myanma Kyat',
      symbol:  'K',
      countryFormat: function (number) {
        return 'K' +  FormatCurrencies.standardFormat(number);
      }
    },
    MNT: {
      name: 'Mongolian Tugrik',
      symbol:  "&#x20AE;",
      countryFormat: function (number) {
        return "&#x20AE;" +  FormatCurrencies.standardFormat(number, " ", ",");
      }
    },
    MOP: {
      name: 'Macanese Pataca',
      symbol:  'MOP$',
      countryFormat: function (number) {
        return 'MOP$' +  FormatCurrencies.standardFormat(number);
      }
    },
    MRO: {
      name: 'Mauritanian Ouguiya',
      symbol:  'UM',
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number) + 'UM';
      }
    },
    MTL: {
      name: 'Maltese Lira',
      symbol:  "&#x20A4;",
      countryFormat: function (number) {
        return '&#x20A4;' +  FormatCurrencies.standardFormat(number);
      }
    },
    MUR: {
      name: 'Mauritian Rupee',
      symbol:  "&#x20A8;",
      countryFormat: function (number) {
        return "&#x20A8;" +  FormatCurrencies.standardFormat(number);
      }
    },
    MVR: {
      name: 'Maldivian Rufiyaa',
      symbol:  'Rf',
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number)  + 'Rf';
      }
    },
    MWK: {
      name: 'Malawian Kwacha',
      symbol:  'MK',
      countryFormat: function (number) {
        return 'MK' +  FormatCurrencies.standardFormat(number) ;
      }
    },
    MXN: {
      name: 'Mexican Peso',
      symbol:  'Mex$',
      countryFormat: function (number) {
        return 'Mex$ ' +  FormatCurrencies.standardFormat(number) ;
      }
    },
    MYR: {
      name: 'Malaysian Ringgit',
      symbol:  'RM',
      countryFormat: function (number) {
        return 'RM ' +  FormatCurrencies.standardFormat(number);
      }
    },
    MZN: {
      name: 'Mozambican Metical',
      symbol:  'MT',
      countryFormat: function (number) {
        return 'MT' +  FormatCurrencies.standardFormat(number);
      }
    },
    NAD: {
      name: 'Namibian Dollar',
      symbol:  '$',
      countryFormat: function (number) {
        return '$' +  FormatCurrencies.standardFormat(number) ;
      }
    },
    NGN: {
      name: 'Nigerian Naira',
      symbol:  '&#x20A6;',
      countryFormat: function (number) {
        return '&#x20A6;' +  FormatCurrencies.standardFormat(number);
      }
    },
    NIO: {
      name: 'Nicaraguan Córdoba',
      symbol:  'C$',
      countryFormat: function (number) {
        return 'C$' + FormatCurrencies.standardFormat(number);
      }
    },
    NOK: {
      name: 'Norwegian Krone',
      symbol:  'kr',
      countryFormat: function (number) {
        return 'kr ' + FormatCurrencies.standardFormat(number, " ", ",");
      }
    },
    NPR: {
      name: 'Nepalese Rupee',
      symbol:  "&#x20A8;",
      countryFormat: function (number) {
        return "&#x20A8;" +  FormatCurrencies.standardFormat(number);
      }
    },
    NZD: {
      name: 'New Zealand Dollar',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    OMR: {
      name: 'Omani Rial',
      symbol:  "&#xFDFC;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', '.', 3) + "&#xFDFC;";
      }
    },
    PAB: {
      name: 'Panamanian Balboa',
      symbol:  "B/.",
      countryFormat: function (number) {
        return "B/. " + FormatCurrencies.standardFormat(number);
      }
    },
    PEN: {
      name: 'Peruvian Nuevo Sol',
      symbol:  "S/.",
      countryFormat: function (number) {
        return "S/. " + FormatCurrencies.standardFormat(number);
      }
    },
    PGK: {
      name: 'Papua New Guinean Kina',
      symbol:  "K",
      countryFormat: function (number) {
        return "K" +  FormatCurrencies.standardFormat(number) ;
      }
    },
    PHP: {
      name: 'Philippine Peso',
      symbol:  "&#x20B1;",
      countryFormat: function (number) {
        return "&#x20B1;" +  FormatCurrencies.standardFormat(number);
      }
    },
    PKR: {
      name: 'Pakistani Rupee',
      symbol:  "&#x20A8;",
      countryFormat: function (number) {
        return "&#x20A8;" +  FormatCurrencies.standardFormat(number);
      }
    },
    PLN: {
      name: 'Polish Zloty',
      symbol:  "z&#x0142;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, " ", ",")  + " z&#x0142;";
      }
    },
    PYG: {
      name: 'Paraguayan Guarani',
      symbol:  "&#x20B2;",
      countryFormat: function (number) {
        return "&#x20B2; " + FormatCurrencies.noDecimals(number) ;
      }
    },
    QAR: {
      name: 'Qatari Rial',
      symbol:  "&#xFDFC;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + " &#xFDFC;";
      }
    },
    RON: {
      name: 'Romanian Leu',
      symbol:  "lei",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, '.', ',')  + " lei";
      }
    },
    RSD: {
      name: 'Serbian Dinar',
      symbol:  "&#x0420;&#x0421;&#x0414;Дин.",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, '.', ',')  + " &#x0420;&#x0421;&#x0414;";
      }
    },
    RUB: {
      name: 'Russian Ruble',
      symbol:  "&#x20BD;",
      countryFormat: function (number) {
        return " &#x20BD; " + FormatCurrencies.standardFormat(number, ",", ".");
      }
    },
    RWF: {
      name: 'Rwandan Franc',
      symbol:  "RF",
      countryFormat: function (number) {
        return "RF "+ FormatCurrencies.noDecimals(number);
      }
    },
    SAR: {
      name: 'Saudi Riyal',
      symbol:  "&#xFDFC;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + "&#xFDFC;";
      }
    },
    SBD: {
      name: 'Solomon Islands Dollar',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    SCR: {
      name: 'Seychellois Rupee',
      symbol:  "&#x20A8;",
      countryFormat: function (number) {
        return "&#x20A8;" +  FormatCurrencies.standardFormat(number);
      }
    },
    SDG: {
      name: 'Sudanese Pound',
      symbol:  "&#x062C;.&#x0633;.",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + "&#x062C;.&#x0633;." ;
      }
    },
    SEK: {
      name: 'Swedish Krona',
      symbol:  "kr",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, '.', ',')  + " kr";
      }
    },
    SGD: {
      name: 'Singapore Dollar',
      symbol:  "S$",
      countryFormat: function (number) {
        return "S$ " +  FormatCurrencies.standardFormat(number);
      }
    },
    SHP: {
      name: 'Saint Helena Pound',
      symbol:  "&#x00A3;",
      countryFormat: function (number) {
        return "&#x00A3;" +  FormatCurrencies.standardFormat(number);
      }
    },
    SLL: {
      name: 'Sierra Leonean Leone',
      symbol:  "Le",
      countryFormat: function (number) {
        return "Le" +  FormatCurrencies.standardFormat(number);
      }
    },
    SOS: {
      name: 'Somali Shilling',
      symbol:  "S",
      countryFormat: function (number) {
        return "S" +  FormatCurrencies.standardFormat(number);
      }
    },
    SRD: {
      name: 'Surinamese Dollar',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    STD: {
      name: 'São Tomé and Príncipe Dobra',
      symbol:  "Db",
      countryFormat: function (number) {
        return "Db" +  FormatCurrencies.standardFormat(number);
      }
    },
    SVC: {
      name: 'Salvadoran Colón',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    SYP: {
      name: 'Syrian Pound',
      symbol:  "&#x00A3;",
      countryFormat: function (number) {
        return "&#x00A3;" + FormatCurrencies.standardFormat(number);
      }
    },
    SZL: {
      name: 'Swazi Lilangeni',
      symbol:  "E",
      countryFormat: function (number) {
        return "E" +  FormatCurrencies.standardFormat(number);
      }
    },
    THB: {
      name: 'Thai Baht',
      symbol:  "&#x0E3F;",
      countryFormat: function (number) {
        return "&#x0E3F;" +  FormatCurrencies.standardFormat(number);
      }
    },
    TJS: {
      name: 'Tajikistani Somoni',
      symbol:  'TJS',
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number);
      }
    },
    TMT: {
      name: 'Turkmenistani Manat',
      symbol:  "m",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, ".", ',') + "m";
      }
    }, TND: {
      name: 'Tunisian Dinar',
      symbol:  "&#x062F;.&#x062A;",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number, ',', '.', 3 ) + "&#x062F;.&#x062A;";
      }
    },
    TOP: {
      name: 'Tongan Pa?anga',
      symbol:  "T$",
      countryFormat: function (number) {
        return "T$" +  FormatCurrencies.standardFormat(number);
      }
    },
    TRY: {
      name: 'Turkish Lira',
      symbol:  "&#x20BA;",
      countryFormat: function (number) {
        return  "&#x20BA;" + FormatCurrencies.standardFormat(number);
      }
    },
    TTD: {
      name: 'Trinidad and Tobago Dollar',
      symbol:  "TT$",
      countryFormat: function (number) {
        return "TT$"+  FormatCurrencies.standardFormat(number);
      }
    },
    TVD: {
      name: 'Tuvaluan Dollar',
      symbol:  '$',
      countryFormat: function (number) {
        return '$' +  FormatCurrencies.standardFormat(number);
      }
    },
    TWD: {
      name: 'New Taiwan Dollar',
      symbol:  "NT$",
      countryFormat: function (number) {
        return "NT$" +  FormatCurrencies.standardFormat(number);
      }
    },
    TZS: {
      name: 'Tanzanian Shilling',
      symbol:  "TSh",
      countryFormat: function (number) {
        return "TSh" +  FormatCurrencies.standardFormat(number);
      }
    },
    UAH: {
      name: 'Ukrainian Hryvnia',
      symbol:  "&#x20B4;",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, '.', ',') + "&#x20B4;";
      }
    },
    UGX: {
      name: 'Ugandan Shilling',
      symbol:  "USh",
      countryFormat: function (number) {
        return "USh" +  FormatCurrencies.standardFormat(number);
      }
    },
    USD: {
      name: 'United States Dollar',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    UYU: {
      name: 'Uruguayan Peso',
      symbol:  "$U",
      countryFormat: function (number) {
        return "$U " + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    UZS: {
      name: 'Uzbekistan Som',
      symbol:  "&#x043B;&#x0432;",
      countryFormat: function (number) {
        return  FormatCurrencies.standardFormat(number, '.', ',')  + "&#x043B;&#x0432;";
      }
    },
    VEB: {
      name: 'Venezuelan Bolívar Fuerte',
      symbol:  "Bs.",
      countryFormat: function (number) {
        return "Bs." +  FormatCurrencies.standardFormat(number);
      }
    },
    VEF: {
      name: 'Venezuelan Bolivar',
      symbol:  "Bs. F.",
      countryFormat: function (number) {
        return "Bs. F. " + FormatCurrencies.standardFormat(number, '.', ',');
      }
    },
    VND: {
      name: 'Vietnamese Dong',
      symbol:  "&#x20AB;",
      countryFormat: function (number) {
        return "&#x20AB;" + FormatCurrencies.noDecimals(number, ',');
      }
    },
    VUV: {
      name: 'Vanuatu Vatu',
      symbol:  "VT",
      countryFormat: function (number) {
        return "VT" + FormatCurrencies.noDecimals(number, ',');
      }
    },
    WST: {
      name: 'Samoan Tala',
      symbol:  'WS$',
      countryFormat: function (number) {
        return 'WS$' +  FormatCurrencies.standardFormat(number);
      }
    },
    XAF: {
      name: 'CFA Franc BEAC',
      symbol:  "FCFA",
      countryFormat: function (number) {
        return FormatCurrencies.noDecimals(number) + " FCFA";
      }
    },
    XCD: {
      name: 'East Caribbean Dollar',
      symbol:  "$",
      countryFormat: function (number) {
        return "$" +  FormatCurrencies.standardFormat(number);
      }
    },
    XOF: {
      name: 'CFA Franc BCEAO',
      symbol:  "CFA",
      countryFormat: function (number) {
        return  FormatCurrencies.noDecimals(number, ',') + " CFA";
      }
    },
    XPF: {
      name: 'CFP Franc',
      symbol:  "CFP",
      countryFormat: function (number) {
        return  FormatCurrencies.noDecimals(number) + " CFP";
      }
    },
    YER: {
      name: 'Yemeni Rial',
      symbol:  "&#xFDFC;.",
      countryFormat: function (number) {
        return FormatCurrencies.standardFormat(number) + "&#xFDFC;.";
      }
    },
    ZAR: {
      name: 'South African Rand',
      symbol:  "R",
      countryFormat: function (number) {
        return "R " + FormatCurrencies.standardFormat(number);
      }
    },
    ZMW: {
      name: 'Zambian Kwacha',
      symbol:  "ZK",
      countryFormat: function (number) {
        return "ZK "+  FormatCurrencies.standardFormat(number);
      }
    }
  },

  // Format example 1,000,000.00
  standardFormat: function(number, intSeparator, decimalSeparator, floatPrecision) {
      // Set default values
  		number = Number(number) || 0;
      intSeparator = intSeparator || ',';
      decimalSeparator = decimalSeparator || '.';
      floatPrecision = floatPrecision || 2

      // Set floatPrecision
      return number.toFixed(floatPrecision).
        // set intSeparator
        replace(/(\d)(?=(\d{3})+\.)/g, '$1' + intSeparator).
        // set decimalSeparator
        replace(/\.([^\.]*)$/, decimalSeparator + '$1');
  },

  // Currencies with no coins.  Format example 1,000,000
  noDecimals: function(number, intSeparator) {
    // Set default values
    number = Number(number) || 0;
    intSeparator = intSeparator || ',';

    return number.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + intSeparator);
  },

  // Indian Currency. Format example 10,00,000
  INRCurrency: function(number) {
  	ints = (Number(number) || 0).toFixed(2).slice(0, -3);
    decimals = (Number(number) || 0).toFixed(2).slice(-3);
    return ints.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + decimals;
  },

  // Format and symbol.  Example $1,000,000.00
  setCurrency: function(number, currencyCode) {
  	if (FormatCurrencies.currencyList[currencyCode]) {
    	return FormatCurrencies.currencyList[currencyCode].countryFormat(number);
    } else {
    	return FormatCurrencies.standardFormat(number);
    }
  }
}
