db.data_dict.insert({
	"fieldName"        : 'AMBS-CRLIM',
	"fileName"         : 'AMBS',
	"length"           : '6 Bytes',
	"description"      : 'Stores the credit limit of the account',
	"hostScreenName"   : 'ARMB-01, ARIH-01, ARIQ-01',
	"fieldCode"        : '0103',
	"possibleValues"   : '0 to 999999999',
	"availableDWH"     : 'EDW-BS-CRLIM',
	"mliNumber"        : 'MLI95',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'IVR, eClipse, CBOL',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Customer_demo Model, CCL Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMBS-BILLING-CYCLE',
	"fileName"         : 'AMBS',
	"length"           : '2 Bytes',
	"description"      : 'Day on the month on which account statement is generated',
	"hostScreenName"   : 'ARMB-01',
	"fieldCode"        : '0121',
	"possibleValues"   : '01 to 31',
	"availableDWH"     : 'EDW-BS-BILLING-CYCLE',
	"mliNumber"        : 'MLI95, MLI35',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Account Structure, Billing and Payment, Statement'
});

db.data_dict.insert({
	"fieldName"        : 'AMBS-CARD-TECH',
	"fileName"         : 'AMBS',
	"length"           : '1 Byte',
	"description"      : 'Code which indicates technology used for embossing',
	"hostScreenName"   : 'ARMB-05',
	"fieldCode"        : '8468',
	"possibleValues"   : '0 - MagStripe, 1 - FDO, 2 - EDO',
	"availableDWH"     : 'EDW-BS-CARD-TECH',
	"mliNumber"        : 'MLI295',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Embossing and Account Structure Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMNA-MAKER-INCOME',
	"fileName"         : 'AMNA',
	"length"           : '6 Bytes',
	"description"      : 'Annual Income of the customer as of application date or joining date',
	"hostScreenName"   : 'ARMN-02',
	"fieldCode"        : '8042',
	"possibleValues"   : '0 to 999999999',
	"availableDWH"     : 'EDW-NA-INCOME',
	"mliNumber"        : 'MLI3 - Query, MLI4 - Query, MLI95 - Query, MLI20 - Update',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Account Structure and customer demo Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMNA-NATIONALITY',
	"fileName"         : 'AMNA',
	"length"           : '3 Bytes',
	"description"      : 'Nationality of customer',
	"hostScreenName"   : 'ARMN-01',
	"fieldCode"        : '8002',
	"possibleValues"   : 'N/A',
	"availableDWH"     : 'EDW-NA-NATIONALITY',
	"mliNumber"        : 'MLI4 - Query, MLI95 - Query, MLI20 - Update',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Account Structure and customer demo Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMNA-VIP-FLAG',
	"fileName"         : 'AMNA',
	"length"           : '1 Byte',
	"description"      : 'Denotes VIP or CITIGOLD status',
	"hostScreenName"   : 'ARMN-01',
	"fieldCode"        : '8283',
	"possibleValues"   : '1,2,3,4,6,7,P,G,V,Space',
	"availableDWH"     : 'EDW-NA-VIP-FLAG',
	"mliNumber"        : 'MLI4 - Query, MLI95 - Query, MLI213 - Update, MLI20 - Update',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Account Structure and customer demo Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMED-DATE-OPENED',
	"fileName"         : 'AMED',
	"length"           : '4 Bytes',
	"description"      : 'Date on which card was opened under the account',
	"hostScreenName"   : 'N/A',
	"fieldCode"        : 'N/A',
	"possibleValues"   : 'N/A',
	"availableDWH"     : 'EDW-ED-DATE-OPENED',
	"mliNumber"        : 'MLI95 - Query',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Embossing, Account Structure and customer demo Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMED-SALES-CTD',
	"fileName"         : 'AMED',
	"length"           : '7 Bytes',
	"description"      : 'Total amount of sale transactions by the card, cycle-to-date',
	"hostScreenName"   : 'ARME-05',
	"fieldCode"        : 'N/A',
	"possibleValues"   : 'N/A',
	"availableDWH"     : 'N/A',
	"mliNumber"        : 'MLI95 - Query, MLI6 -Query',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Authorization Model'
});

db.data_dict.insert({
	"fieldName"        : 'AMED-PRIMARY-CARD-IND',
	"fileName"         : 'AMED',
	"length"           : '1 Bytes',
	"description"      : 'Indicates whether the cardholder is primary or supplementary',
	"hostScreenName"   : 'ARME-02',
	"fieldCode"        : '8005',
	"possibleValues"   : 'P - Primary, S - Supplementary',
	"availableDWH"     : 'EDW-ED-PRIMARY-CARD-IND',
	"mliNumber"        : 'MLI95 - Query, MLI32 -Query',
	"avlbleClipse"     : 'Yes',
	"channelsUsing"    : 'eClipse, CBOL',
	"G2C_v"            : 'Base Field',
	"bpReference"      : 'Authorization Model, Embossing Model'
});