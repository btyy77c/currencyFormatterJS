var formatter = require('./formatter')

var currencies =
{
  AED:
  {
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ.‏',
    formatCurrency: function (number) {
    	return formatter.standardFormat(number) + ' ' + currencies.AED.symbol;
    }
  },
  AFN:
  {
    name: 'Afghan Afghani',
    symbol: '؋',
    formatCurrency: function (number) {
    	return formatter.standardFormat(number) + currencies.AFN.symbol;
    }
  },
  ALL:
  {
    name: 'Albanian Lek',
    symbol: 'Lek',
    formatCurrency: function (number) {
    	return currencies.ALL.symbol + standardFormat(number, '.', ',');
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
    	return currencies.ANG.symbol + standardFormat(number);
    }
  },
  AOA:
  {
    name: 'Angolan Kwanza',
    symbol: 'Kz',
    formatCurrency: function (number) {
    	return currencies.AOA.symbol + standardFormat(number);
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
    	return currencies.AUD.symbol + standardFormat(number);
    }
  },
  AWG:
  {
    name: 'Aruban Florin',
    symbol: 'ƒ',
    formatCurrency: function (number) {
    	return currencies.AWG.symbol + standardFormat(number);
    }
  },
  AZN:
  {
    name: 'Azerbaijani Manat',
    symbol: '₼',
    formatCurrency: function (number) {
    	return  standardFormat(number, ' ', ',') + ' ' + currencies.AZN.symbol;
    }
  },
  BAM:
  {
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbol: 'KM',
    formatCurrency: function (number) {
    	return standardFormat(number, '.', ',') + ' ' + currencies.BAM.symbol;
    }
  },
  BBD:
  {
    name: 'Barbadian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BBD.symbol + standardFormat(number);
    }
  },
  BDT:
  {
    name: 'Bangladeshi Taka',
    symbol: '৳',
    formatCurrency: function (number) {
    	return currencies.BDT.symbol + ' ' + noDecimals(number);
    }
  },
  BGN:
  {
    // Check
    name: 'Bulgarian Lev',
    symbol: 'лв',
    formatCurrency: function (number) {
    	return standardFormat(number, ' ', ',') + ' ' + currencies.BGN.symbol;
    }
  },
  BHD:
  {
    name: 'Bahraini Dinar',
    symbol: 'BD',
    formatCurrency: function (number) {
    	return standardFormat(number, ',', '.', 3) + ' ' + currencies.BHD.symbol;
    }
  },
  BIF:
  {
    name: 'Burundian Franc',
    symbol: 'FBu',
    formatCurrency: function (number) {
    	return  noDecimals(number) + currencies.BIF.symbol;
    }
  },
  BMD:
  {
    // Check
    name: 'Bermudan Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BMD.symbol + standardFormat(number);
    }
  },
  BND:
  {
    name: 'Brunei Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.BND.symbol + standardFormat(number, '.', ',');
    }
  },
  BOB:
  {
    name: 'Bolivian Boliviano',
    symbol: 'Bs',
    formatCurrency: function (number) {
    	return currencies.BOB.symbol + ' ' + standardFormat(number, '.', ',');
    }
  },
  BRL:
  {
    name: 'Brazilian Real',
    symbol: 'R$',
    formatCurrency: function (number) {
    	return currencies.BRL.symbol + ' ' + standardFormat(number, '.', ',');
    }
  },
  BSD:
  {
    name: 'Bahamian Dollar',
    formatCurrency: function (number) {
    	return currencies.BSD.symbol + standardFormat(number);
    }
  },
  BTC:
  {
    name: 'Bitcoin',
    symbol: 'Ƀ',
    formatCurrency: function (number) {
    	return standardFormat(number) + currencies.BTC.symbol;
    }
  },
  BTN:
  {
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu',
    formatCurrency: function (number) {
    	return currencies.BTN.symbol + '. ' + standardFormat(number, ',', '.', 1);
    }
  },
  BWP:
  {
    name: 'Botswanan Pula',
    symbol: 'P',
    formatCurrency: function (number) {
    	return currencies.BWP.symbol + standardFormat(number);
    }
  },
  BYN:
  {
    // Check
    name: 'Belarusian Ruble',
    symbol: '????',
    formatCurrency: function (number) {
    	return currencies.BYN.symbol + ' ' + standardFormat(number);
    }
  },
  BYR:
  {
    name: 'Belarusian Ruble (pre-2016)',
    symbol: 'p.',
    formatCurrency: function (number) {
    	return '. ' + noDecimals(number, ' ', ',') + ' ' + currencies.BYR.symbol ;
    }
  },
  BZD:
  {
    name: 'Belize Dollar',
    symbol: 'BZ$',
    formatCurrency: function (number) {
    	return currencies.BZD.symbol + standardFormat(number);
    }
  },
  CAD:
  {
    // Check
    name: 'Canadian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CAD.symbol + standardFormat(number);
    }
  },
  CDF:
  {
    name: 'Congolese Franc',
    symbol: 'FC',
    formatCurrency: function (number) {
    	return standardFormat(number) + currencies.CDF.symbol;
    }
  },
  CHF:
  {
    name: 'Swiss Franc',
    symbol: 'CHF',
    formatCurrency: function (number) {
    	return  standardFormat(number, "'", '.') + ' ' + currencies.CHF.symbol;
    }
  },
  CLF:
  {
    // Check
    name: 'Chilean Unit of Account (UF)',
    symbol: '',
    formatCurrency: function (number) {
    	return currencies.CLF.symbol + standardFormat(number);
    }
  },
  CLP:
  {
    name: 'Chilean Peso',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CLP.symbol + ' ' + noDecimals(number, '.', ',');
    }
  },
  CNY:
  {
    // Check
    name: 'Chinese Yuan',
    symbol: '¥',
    formatCurrency: function (number) {
    	return currencies.CNY.symbol + standardFormat(number);
    }
  },
  COP:
  {
    name: 'Colombian Peso',
    symbol: '$'
    formatCurrency: function (number) {
    	return currencies.COP.symbol + ' ' + standardFormat(number, '.', ',');
    }
  },
  CRC:
  {
    name: 'Costa Rican Colón',
    symbol: '₡',
    formatCurrency: function (number) {
    	return currencies.CRC.symbol + standardFormat(number, '.', ',');
    }
  },
  CUC:
  {
    name: 'Cuban Convertible Peso',
    symbol: 'CUC',
    formatCurrency: function (number) {
    	return currencies.CUC.symbol + standardFormat(number);
    }
  },
  CUP:
  {
    name: 'Cuban Peso',
    symbol: '$MN',
    formatCurrency: function (number) {
    	return currencies.CUP.symbol + standardFormat(number);
    }
  },
  CVE:
  {
    // Check
    name: 'Cape Verdean Escudo',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.CVE.symbol + standardFormat(number);
    }
  },
  CZK:
  {
    name: 'Czech Republic Koruna',
    symbol: 'Kč',
    formatCurrency: function (number) {
    	return  + ' ' + standardFormat(number, ' ', ',') + ' ' + currencies.CZK.symbol;
    }
  },
  DJF:
  {
    name: 'Djiboutian Franc',
    symbol: 'Fdj',
    formatCurrency: function (number) {
    	return  noDecimals(number) + currencies.DJF.symbol;
    }
  },
  DKK:
  {
    name: 'Danish Krone',
    symbol: 'kr.',
    formatCurrency: function (number) {
    	return standardFormat(number, '', ',') + ' ' + currencies.DKK.symbol;
    }
  },
  DOP:
  {
    name: 'Dominican Peso',
    symbol: 'RD$',
    formatCurrency: function (number) {
    	return currencies.DOP.symbol + standardFormat(number);
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
    // Check
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
    	return  standardFormat(number) + currencies.ERN.symbol;
    }
  },
  ETB:
  {
    name: 'Ethiopian Birr',
    symbol: 'ETB',
    formatCurrency: function (number) {
    	return currencies.ETB.symbol + standardFormat(number);
    }
  },
  EUR:
  {
    name: 'Euro',
    symbol: '€',
    formatCurrency: function (number) {
    	return standardFormat(number, ' ', ',') + ' ' + currencies.EUR.symbol;
    }
  },
  FJD:
  {
    name: 'Fijian Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.FJD.symbol + standardFormat(number);
    }
  },
  FKP:
  {
    name: 'Falkland Islands Pound',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.FKP.symbol + standardFormat(number);
    }
  },
  GBP:
  {
    name: 'British Pound Sterling',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.GBP.symbol + standardFormat(number, ',', '.');
    }
  },
  GEL:
  {
    name: 'Georgian Lari',
    symbol: 'Lari',
    formatCurrency: function (number) {
    	return standardFormat(number, ' ', ',') + ' ' + currencies.GEL.symbol;
    }
  },
  GGP:
  {
    name: 'Guernsey Pound',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.GGP.symbol + standardFormat(number, '.',, ',');
    }
  },
  GHS:
  {
    name: 'Ghanaian Cedi',
    symbol: '₵',
    formatCurrency: function (number) {
    	return currencies.GHS.symbol + standardFormat(number);
    }
  },
  GIP:
  {
    name: 'Gibraltar Pound',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.GIP.symbol + standardFormat(number);
    }
  },
  GMD:
  {
    name: 'Gambian Dalasi',
    symbol: 'D',
    formatCurrency: function (number) {
    	return standardFormat(number) + currencies.GIP.symbol;
    }
  },
  GNF:
  {
    name: 'Guinean Franc',
    symbol: 'FG',
    formatCurrency: function (number) {
    	return  noDecimals(number) + currencies.GNF.symbol;
    }
  },
  GTQ:
  {
    name: 'Guatemalan Quetzal',
    symbol: 'Q',
    formatCurrency: function (number) {
    	return currencies.GTQ.symbol + standardFormat(number);
    }
  },
  GYD:
  {
    name: 'Guyanaese Dollar',
    symbol: '$',
    formatCurrency: function (number) {
    	return currencies.GYD.symbol + standardFormat(number);
    }
  },
  HKD:
  {
    name: 'Hong Kong Dollar',
    symbol: 'HK$',
    formatCurrency: function (number) {
    	return currencies.HKD.symbol  + standardFormat(number);
    }
  },
  HNL:
  {
    name: 'Honduran Lempira',
    symbol: 'L.',
    formatCurrency: function (number) {
    	return currencies.HKD.symbol + ' ' + standardFormat(number);
    }
  },
  HRK:
  {
    name: 'Croatian Kuna',
		symbol: 'kn',
    formatCurrency: function (number) {
    	return standardFormat(number, '.', ',') + ' ' + currencies.HRK.symbol;
    }
  },
  HTG:
  {
    name: 'Haitian Gourde',
		symbol: "G",
    formatCurrency: function (number) {
    	return currencies.HTG.symbol + standardFormat(number);
    }
  },
  HUF:
  {
    name: 'Hungarian Forint',
		symbol: 'Ft',
    formatCurrency: function (number) {
    	return standardFormat(number, ' ', ',') + ' ' + currencies.HUF.symbol;
    }
  },
  IDR:
  {
    name: 'Indonesian Rupiah',
		symbol: 'Rp',
    formatCurrency: function (number) {
    	return currencies.IDR.symbol + standardFormat(number, '.', ',');
    }
  },
  ILS:
  {
    name: 'sraeli New Sheqel',
		symbol: "₪",
    formatCurrency: function (number) {
    	return currencies.ILS.symbol + ' ' +standardFormat(number);
    }
  },
  IMP:
  {
    name: 'Manx pound',
    symbol: '£',
    formatCurrency: function (number) {
    	return currencies.IMP.symbol + standardFormat(number, '.', ',');
    }
  },
  INR:
  {
    name: 'Indian Rupee', // TODO
    symbol: "₹",
    formatCurrency: function (number) {
      return currencies.INR.symbol + INRCurrency(number);
    }
  },
  IQD:
  {
    name: 'Iraqi Dinar',
		symbol: "د.ع.‏",
    formatCurrency: function (number) {
      return currencies.INR.symbol + ' ' + standardFormat(number);
    }
  },
  IRR:
  {
    name: 'Iranian Rial',
		symbol: "﷼",
		"symbolOnLeft": true,
    formatCurrency: function (number) {
      return currencies.IRR.symbol + ' ' + standardFormat(number, ',', "/");
    }
  },
  ISK:
  {
    name: 'Icelandic Króna',
		symbol: 'kr.',
    formatCurrency: function (number) {
      return standardFormat(number, '.', ',') + ' ' + currencies.ISK.symbol;
    }
  },
  JEP:
  {
    name: 'Jersey Pound',
    symbol: '£',
    formatCurrency: function (number) {
      return currencies.JEP.symbol + standardFormat(number, '.', ',');
    }
  },
  JMD:
  {
    name: 'Jamaican Dollar',
		symbol: "J$",
    formatCurrency: function (number) {
      return currencies.JMD.symbol + standardFormat(number);
    }
  },
  JOD:
  {
    name: 'Jordanian Dinar',
		symbol: "د.ا.‏",
    formatCurrency: function (number) {
      return currencies.JOD.symbol + ' ' + standardFormat(number, ',', '.', 3);
    }
  },
  JPY:
  {
    name: 'Japanese Yen',
		symbol: '¥',
    formatCurrency: function (number) {
      return currencies.JPY.symbol + ' ' + standardFormat(number);
    }
  },
  KES:
  {
    name: 'Kenyan Shilling',
		symbol: 'S',
    formatCurrency: function (number) {
      return currencies.KES.symbol + ' ' + standardFormat(number);
    }
  },
  KGS:
  {
    name: 'Kyrgystani Som',
		symbol: 'сом',
    formatCurrency: function (number) {
      return standardFormat(number, ' ', '-') + ' ' + currencies.KGS.symbol;
    }
  },
  KHR:
  {
    name: 'Cambodian Riel',
		symbol: '៛',
    formatCurrency: function (number) {
      return standardFormat(number) + currencies.KHR.symbol;
    }
  },
  KMF:
  {
    name: 'Comorian Franc',
		symbol: 'CF',
    formatCurrency: function (number) {
      return standardFormat(number) + currencies.KMF.symbol;
    }
  },
  KPW:
  {
    name: 'North Korean Won',
		symbol: '₩',
    formatCurrency: function (number) {
      return currencies.KPW.symbol + standardFormat(number);
    }
  },
  KRW:
  {
    name: 'South Korean Won',
		symbol: '₩',
    formatCurrency: function (number) {
      return currencies.KRW.symbol + standardFormat(number);
    }
  },
  KWD:
  {
    name: 'Kuwaiti Dinar',
		symbol: 'ك',
    formatCurrency: function (number) {
      return currencies.KWD.symbol + ' ' + standardFormat(number, ',', '.', 3);
    }
  },
  KYD:
  {
    name: 'Cayman Islands Dollar',
		symbol: '$',
    formatCurrency: function (number) {
      return currencies.KYD.symbol + standardFormat(number);
    }
  },
  KZT:
  {
    name: 'Kazakhstani Tenge',
		symbol: '₸',
    formatCurrency: function (number) {
      return currencies.KZT.symbol + standardFormat(number, ' ', '-');
    }
  },
  LAK:
  {
    name: 'Laotian Kip',
		symbol: '₭',
    formatCurrency: function (number) {
      return standardFormat(number) + currencies.LAK.symbol;
    }
  },
  LBP:
  {
    name: 'Lebanese Pound',
    symbol: 'ل.ل',
    formatCurrency: function (number) {
      return standardFormat(number) + ' ' + currencies.LBP.symbol;
    }
  },
  LKR:
  {
    name: 'Sri Lankan Rupee',
    symbol: "₨",
    formatCurrency: function (number) {
      return standardFormat(number) + ' ' + currencies.LBP.symbol;
    }
  },
  LRD:
  {
    name: 'Liberian Dollar',
		symbol: "$",
    formatCurrency: function (number) {
      return currencies.LRD.symbol + standardFormat(number);
    }
  },
  LSL:
  {
    name: 'Lesotho Loti',
		symbol: 'M',
    formatCurrency: function (number) {
      return standardFormat(number, ',', '.', 2 ) + currencies.LSL.symbol;
    }
  },
 LYD:
 {
   name: 'Libyan Dinar',
   symbol: 'LD',
   formatCurrency: function (number) {
     return currencies.LYD.symbol +  standardFormat(number, ',', '.', 3 );
   }
 },
 MAD:
 {
   name: 'Moroccan Dirham',
   symbol: "د.م.‏",
   formatCurrency: function (number) {
     return currencies.MAD.symbol +  ' ' + standardFormat(number, ',', '.', 2 );
   }
 },
 MDL:
 {
   name: 'Moldovan Leu'
   symbol: 'lei',
   formatCurrency: function (number) {
     return standardFormat(number, ',', '.', 2 ) + ' ' + currencies.MDL.symbol;
   }
 },
 MGA:
 {
   name: 'Malagasy Ariary',
   symbol: 'Ar',
   formatCurrency: function (number) {
     return currencies.MGA.symbol +  noDecimals(number, ',');
   }
 },
 MKD:
 {
   name: 'Macedonian Denar',
   symbol: 'ден.',
   formatCurrency: function (number) {
     return standardFormat(number, '.', ',')  + ' ' + currencies.MKD.symbol;
   }
 },
 MMK:
 {
   name: 'Myanma Kyat'
   symbol: 'K',
   formatCurrency: function (number) {
     return currencies.MMK.symbol +  standardFormat(number);
   }
 },
 MNT:
 {
   name: 'Mongolian Tugrik',
   symbol: "₮",
   formatCurrency: function (number) {
     return currencies.MMK.symbol +  standardFormat(number, ' ', ',');
   }
 },
 MOP:
 {
   name: 'Macanese Pataca',
   symbol: 'MOP$',
   formatCurrency: function (number) {
     return currencies.MOP.symbol +  standardFormat(number);
   }
 },
 MRO:
 {
   name: 'Mauritanian Ouguiya',
   symbol: 'UM',
   formatCurrency: function (number) {
     return  standardFormat(number) + currencies.MRO.symbol;
   }
 },
 MTL:
 {
   name: 'Maltese Lira',
   symbol: '₤',
   formatCurrency: function (number) {
     return currencies.MTL.symbol +  standardFormat(number);
   }
 },
 MUR:
 {
   name: 'Mauritian Rupee',
   symbol: '₨',
   formatCurrency: function (number) {
     return currencies.MUR.symbol +  standardFormat(number);
   }
 },
 MVR:
 {
   name: 'Maldivian Rufiyaa',
   symbol: 'MVR',
   formatCurrency: function (number) {
     return  standardFormat(number, ',', '.', 1 )  + ' ' + currencies.MVR.symbol;
   }
 },
 MWK:
 {
   name: 'Malawian Kwacha',
   symbol: 'MK',
   formatCurrency: function (number) {
     return currencies.MWK.symbol +  standardFormat(number) ;
   }
 },
 MXN:
 {
   name: 'Mexican Peso',
   symbol: '$',
   formatCurrency: function (number) {
     return currencies.MXN.symbol +  standardFormat(number) ;
   }
 },
 MYR:
 {
   name: 'Malaysian Ringgit',
   symbol: 'RM',
   formatCurrency: function (number) {
     return currencies.MYR.symbol +  standardFormat(number);
   }
 },
 MZN:
 {
   name: 'Mozambican Metical',
   symbol: 'MT',
   formatCurrency: function (number) {
     return currencies.MZN.symbol +  noDecimals(number);
   }
 },
 NAD:
 {
   name: 'Namibian Dollar',
   symbol: '$',
   formatCurrency: function (number) {
     return currencies.NAD.symbol +  standardFormat(number) ;
   }
 },
 NGN:
 {
   name: 'Nigerian Naira',
   symbol: '₦',
   formatCurrency: function (number) {
     return currencies.NGN.symbol +  standardFormat(number);
   }
 },
 NIO:
 {
   name: 'Nicaraguan Córdoba',
   symbol: 'C$',
   formatCurrency: function (number) {
     return currencies.NIO.symbol +  ' ' + standardFormat(number);
   }
 },
 NOK:
 {
   name: 'Norwegian Krone',
   symbol: 'kr',
   formatCurrency: function (number) {
     return currencies.NOK.symbol +  ' ' + standardFormat(number, ' ', ',');
   }
 },
 NPR:
 {
   name: 'Nepalese Rupee',
   symbol: "₨",
   formatCurrency: function (number) {
     return currencies.NPR.symbol +  standardFormat(number);
   }
 },
 NZD:
 {
   name: 'New Zealand Dollar',
   symbol: "$",
   formatCurrency: function (number) {
     return currencies.NZD.symbol +  standardFormat(number);
   }
 },
 OMR:
 {
   name: 'Omani Rial',
   symbol: "﷼",
   formatCurrency: function (number) {
     return currencies.OMR.symbol +  ' ' + standardFormat(number, ',', '.', 3 );
   }
 },
 PAB:
 {
   name: 'Panamanian Balboa',
   symbol: "B/.",
   formatCurrency: function (number) {
     return currencies.PAB.symbol +  ' ' + standardFormat(number);
   }
 },
 PEN:
 {
   name: 'Peruvian Nuevo Sol',
   symbol: "S/.",
   formatCurrency: function (number) {
     return currencies.PEN.symbol +  ' ' + standardFormat(number);
   }
 },
 PGK:
 {
   name: 'Papua New Guinean Kina'
   symbol: "K",
   formatCurrency: function (number) {
     return currencies.PGK.symbol +  standardFormat(number) ;
   }
 },
 PHP:
 {
   name: 'Philippine Peso',
   symbol: "₱",
   formatCurrency: function (number) {
     return currencies.PHP.symbol +  standardFormat(number);
   }
 },
 PKR:
 {
   name: 'Pakistani Rupee',
   symbol: "₨",
   formatCurrency: function (number) {
     return currencies.PKR.symbol +  standardFormat(number);
   }
 },
 PLN:
 {
   name: 'Polish Zloty',
   symbol: "zł",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',')  + ' ' + currencies.PLN.symbol;
   }
 },
 PYG:
 {
   name: 'Paraguayan Guarani',
   symbol: "₲",
   formatCurrency: function (number) {
     return currencies.PYG.symbol +  ' ' + standardFormat(number) ;
   }
 },
 QAR:
 {
   name: 'Qatari Rial',
   symbol: "﷼",
   formatCurrency: function (number) {
     return currencies.QAR.symbol +  ' ' + standardFormat(number);
   }
 },
 RON:
 {
   name: 'Romanian Leu',
   symbol: "lei",
   formatCurrency: function (number) {
     return  standardFormat(number, '.', ',')  + ' ' + currencies.RON.symbol;
   }
 },
 RSD:
 {
   name: 'Serbian Dinar',
   symbol: "Дин.",
   formatCurrency: function (number) {
     return  standardFormat(number, '.', ',')  + ' ' + currencies.RSD.symbol;
   }
 },
 RUB: {
   name: 'Russian Ruble',
   symbol: "₽",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',')  + ' ' + currencies.RUB.symbol;
   }
 },
 RWF:
 {
   name: 'Rwandan Franc',
   symbol: "RWF",
   formatCurrency: function (number) {
     return currencies.RWF.symbol +  ' ' + standardFormat(number, ' ', ',') ;
   }
 },
 SAR:
 {
   name: 'Saudi Riyal',
   symbol: "﷼",
   formatCurrency: function (number) {
     return currencies.SAR.symbol +  ' ' + standardFormat(number);
   }
 },
 SBD:
 {
   name: 'Solomon Islands Dollar',
   symbol: "$",
   formatCurrency: function (number) {
     return currencies.SBD.symbol +  standardFormat(number);
   }
 },
 SCR:
 {
   name: 'Seychellois Rupee',
   symbol: "₨",
   formatCurrency: function (number) {
     return currencies.SCR.symbol +  standardFormat(number);
   }
 },
 SDG:
 {
   name: 'Sudanese Pound',
   symbol: "£‏",
   formatCurrency: function (number) {
     return currencies.SDG.symbol +  standardFormat(number) ;
   }
 },
 SEK:
 {
   name: 'Swedish Krona',
   symbol: "kr",
   formatCurrency: function (number) {
     return  standardFormat(number, '.', ',')  + ' ' + currencies.SEK.symbol;
   }
 },
 SGD:
 {
   name: 'Singapore Dollar',
   symbol: "$",
   formatCurrency: function (number) {
     return currencies.SGD.symbol +  standardFormat(number);
   }
 },
 SHP:
 {
   name: 'Saint Helena Pound',
   symbol: "£",
   formatCurrency: function (number) {
     return currencies.SHP.symbol +  standardFormat(number);
   }
 },
 SLL:
 {
   name: 'Sierra Leonean Leone',
   symbol: "Le",
   formatCurrency: function (number) {
     return currencies.SLL.symbol +  standardFormat(number);
   }
 },
 SOS:
 {
   name: 'Somali Shilling',
   symbol: "S",
   formatCurrency: function (number) {
     return currencies.SOS.symbol +  standardFormat(number);
   }
 },
 SRD:
 {
   name: 'Surinamese Dollar',
   symbol: "$"
   formatCurrency: function (number) {
     return currencies.SRD.symbol +  standardFormat(number);
   }
 },
 STD:
 {
   name: 'São Tomé and Príncipe Dobra',
   symbol: "Db",
   formatCurrency: function (number) {
     return currencies.STD.symbol +  standardFormat(number);
   }
 },
 SVC:
 {
   name: 'Salvadoran Colón',
   symbol: "₡",
   formatCurrency: function (number) {
     return currencies.SVC.symbol +  standardFormat(number);
   }
 },
 SYP:
 {
   name: 'Syrian Pound',
   symbol: "£",
   formatCurrency: function (number) {
     return currencies.SYP.symbol +  ' ' + standardFormat(number);
   }
 },
 SZL:
 {
   name: 'Swazi Lilangeni',
   symbol: "E",
   formatCurrency: function (number) {
     return currencies.SZL.symbol +  standardFormat(number);
   }
 },
 THB:
 {
   name: 'Thai Baht',
   symbol: "฿",
   formatCurrency: function (number) {
     return currencies.THB.symbol +  standardFormat(number);
   }
 },
 TJS:
 {
   name: 'Tajikistani Somoni',
   symbol: 'TJS'
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ';')  + ' ' + currencies.TJS.symbol;
   }
 },
 TMT:
 {
   name: 'Turkmenistani Manat',
   symbol: "m",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',') + currencies.TMT.symbol;
   }
 },
 TND:
 {
   name: 'Tunisian Dinar',
   symbol: "د.ت.‏",
   formatCurrency: function (number) {
     return currencies.TND.symbol +  ' ' + standardFormat(number, ',', '.', 3 );
   }
 },
 TOP:
 {
   name: 'Tongan Pa?anga',
   "symbol": "T$",
   formatCurrency: function (number) {
     return currencies.TOP.symbol +  standardFormat(number);
   }
 },
 TRY:
 {
   name: 'Turkish Lira',
   symbol: "TL",
   formatCurrency: function (number) {
     return  standardFormat(number, '.', ',')  + ' ' + currencies.TRY.symbol;
   }
 },
 TTD: {
   name: 'Trinidad and Tobago Dollar',
   symbol: "TT$",
   formatCurrency: function (number) {
     return currencies.TTD.symbol +  standardFormat(number);
   }
 },
 TVD:
 {
   name: 'Tuvaluan Dollar',
   symbol: '$',
   formatCurrency: function (number) {
     return currencies.TVD.symbol +  standardFormat(number);
   }
 },
 TWD:
 {
   name: 'New Taiwan Dollar',
   symbol: "NT$",
   formatCurrency: function (number) {
     return currencies.TWD.symbol +  standardFormat(number);
   }
 },
 TZS:
 {
   name: 'Tanzanian Shilling',
   symbol: "TSh",
   formatCurrency: function (number) {
     return currencies.TZS.symbol +  standardFormat(number);
   }
 },
 UAH:
 {
   name: 'Ukrainian Hryvnia',
   symbol: "₴",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',') + currencies.UAH.symbol;
   }
 },
 UGX:
 {
   name: 'Ugandan Shilling',
   symbol: "USh",
   formatCurrency: function (number) {
     return currencies.UGX.symbol +  standardFormat(number);
   }
 },
 USD:
 {
   name: 'United States Dollar',
   symbol: "$",
   formatCurrency: function (number) {
     return currencies.USD.symbol +  standardFormat(number);
   }
 },
 UYU:
 {
   name: 'Uruguayan Peso',
   symbol: "$U",
   formatCurrency: function (number) {
     return currencies.UYU.symbol +  ' ' + standardFormat(number, '.', ',');
   }
 },
 UZS: {
   name: 'Uzbekistan Som',
   symbol: "сўм",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',')  + ' ' + currencies.UZS.symbol;
   }
 },
 VEB:
 {
   name: 'Venezuelan Bolívar Fuerte',
   symbol: "Bs.",
   formatCurrency: function (number) {
     return currencies.VEB.symbol +  standardFormat(number);
   }
 },
 VEF {
   name: 'Venezuelan Bolivar',
   symbol: "Bs. F.",
   formatCurrency: function (number) {
     return currencies.VEF.symbol +  ' ' + standardFormat(number, '.', ',');
   }
 },
 VND:
 {
   name: 'Vietnamese Dong',
   symbol: "₫",
   formatCurrency: function (number) {
     return  standardFormat(number, '.', ',', 1 )  + ' ' + currencies.VND.symbol;
   }
 },
 VUV:
 {
   name: 'Vanuatu Vatu',
   symbol: "VT",
   formatCurrency: function (number) {
     return  noDecimals(number, ',') + currencies.VUV.symbol;
   }
 },
 WST:
 {
   name: 'Samoan Tala',
   symbol: 'WS$',
   formatCurrency: function (number) {
     return currencies.WST.symbol +  standardFormat(number);
   }
 },
 XAF:
 {
   name: 'CFA Franc BEAC',
   symbol: "F",
   formatCurrency: function (number) {
     return  standardFormat(number) + currencies.XAF.symbol;
   }
 },
 XAG:
 {
   name: 'Silver Ounce',
   symbol: '',
   formatCurrency: function (number) {
     return  standardFormat(number);
   }
 },
 XAU:
 {
   name: 'Gold Ounce',
   symbol: '',
   formatCurrency: function (number) {
     return  standardFormat(number);
   }
 },
 XCD:
 {
   name: 'East Caribbean Dollar',
   symbol: "$",
   formatCurrency: function (number) {
     return currencies.XCD.symbol +  standardFormat(number);
   }
 },
 XOF:
 {
   name: 'CFA Franc BCEAO'
   symbol: "F",
   formatCurrency: function (number) {
     return  standardFormat(number, ' ', ',') + currencies.XOF.symbol;
   }
 },
 XPD:
 {
   name: 'Palladium Ounce',
   symbol: "",
   formatCurrency: function (number) {
     return  standardFormat(number);
   }
 },
 XPF:
 {
   name: 'CFP Franc',
   symbol: "F",
   formatCurrency: function (number) {
     return  standardFormat(number) + currencies.XPF.symbol;
   }
 },
 YER:
 {
   name: 'Yemeni Rial',
   symbol: '﷼',
   formatCurrency: function (number) {
     return currencies.YER.symbol +  ' ' + standardFormat(number);
   }
 },
 ZAR:
 {
   name: 'South African Rand',
   symbol: "R",
   formatCurrency: function (number) {
     return currencies.ZAR.symbol +  ' ' + standardFormat(number);
   }
 },
 ZMW:
 {
   name: 'Zambian Kwacha',
   symbol: "ZK",
   formatCurrency: function (number) {
     return currencies.ZMW.symbol +  standardFormat(number);
   }
 },
 WON:
 {
   name: '',
   symbol: "₩",
   formatCurrency: function (number) {
     return currencies.WON.symbol +  standardFormat(number);
   }
 }
}
