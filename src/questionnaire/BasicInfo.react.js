/**
 * Created by Shaochen on 12/21/2016.
 */

import React from 'react';
import PlainTextInput from './PlainTextInput.react';
import PlainSelectInput from './PlainSelectInput.react';
import RadioInputGroupGender from './RadioInputGroupGender.react';


let nonimmigrantStatus = [
  {name: "B1 - TEMPORARY VISITOR FOR BUSINESS", code: "B1"},
  {name: "B1A - NI PERSNL-DOM SRVANT OF NI EMP", code: "B1A"},
  {name: "B1B - NI DOMESTIC SERVANT OF USC", code: "B1B"},
  {name: "B1C - NI EMPLOYED BY FOREIGN AIRLINE", code: "B1C"},
  {name: "B1D - NI - MISSIONARIES", code: "B1D"},
  {name: "B2 - TEMPORARY VISITOR FOR PLEASURE", code: "B2"},
  {name: "BE - BERING STRAIT ENTRIES", code: "BE"},
  {name: "F1 - STUDENT - ACADEMIC", code: "F1"},
  {name: "F2 - SPOUSE-CHILD OF F-1", code: "F2"},
  {name: "H1 - ALIEN OF DIST MERIT & ABILITY", code: "H1"},
  {name: "H1A - REGISTERED NURSE", code: "H1A"},
  {name: "H1B - SPECIALITY OCCUPATION", code: "H1B"},
  {name: "H1C - NURSE RELIEF", code: "H1C"},
  {name: "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R", code: "H4"},
  {name: "J1 - EXCHANGE VISITOR - OTHERS", code: "J1"},
  {name: "J1S - EXCHANGE VISITOR - STUDENT", code: "J1S"},
  {name: "J2 - SPOUSE-CHILD OF J-1", code: "J2"},
  {name: "J2S - SPOUSE-CHILD OF J-1S", code: "J2S"},
  {name: "L1 - INTRA-COMPANY TRANSFEREE", code: "L1"},
  {name: "L1A - MANAGER OR EXECUTIVE", code: "L1A"},
  {name: "L1B - SPECIALIZED KNOWLEDGE ALIEN", code: "L1B"},
  {name: "L2 - SPOUSE-CHILD OF L-1", code: "L2"},
  {name: "O1 - ALIEN W-EXTRAORDINARY ABILITY", code: "O1"},
  {name: "O1A - EXTRAORDINARY ALIEN - NON-ARTS", code: "O1A"},
  {name: "O1B - EXTRAORDINARY ALIEN IN ARTS", code: "O1B"},
  {name: "O2 - ACCOMPANYING ALIEN TO O1", code: "O2"},
  {name: "O3 - SPOUSE-CHILD OF O-1, O-2", code: "O3"},
];

let countries = [
  {name: 'China', code: 'CN'},
  {name: 'United States', code: 'US'},
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'S Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
];

let nationality_selection = [];

for(let country of countries)
  nationality_selection.push({name: country.name, value: country.code});

let statusSelections = [];
for(let status of nonimmigrantStatus)
  statusSelections.push({name: status.name, value: status.code});

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fullName: "",
        gender: "",
        nationality: "CN",
        dob: "",
        currentStatus: "",
      },
      validity: {
        fullName: false,
        gender: false,
        nationality: true,
        dob: false,
        currentStatus: false,
      },
      isSubmitted: false,
    }
  }

  submit() {
    let data = {...this.state.data};
    this.props.onSubmit(data, "BasicInfo");
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.status == "loading")
      return;
    if (!this.state.isSubmitted)
      this.setState({isSubmitted: true});
    let readyToSubmit = true, data = this.state.data, validity = this.state.validity;
    for (let i in data)
      if (data.hasOwnProperty(i))
        readyToSubmit = readyToSubmit && validity[i];
    if (readyToSubmit) {
      this.submit();
    }
  }

  handleChange(tagName, value, aValidity) {
    const data = Object.assign({}, this.state.data);
    const validity = Object.assign({}, this.state.validity);
    data[tagName] = value;
    validity[tagName] = aValidity;
    this.setState({data, validity});
  }

  render() {
    const data = this.state.data;
    return (
      <div className="regular-form-1">
        <div className="title">申请人信息</div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <PlainTextInput
            id="full-name" title="全名" value={data.fullName} required={true}
            onChange={(value, validity) => this.handleChange("fullName", value, validity)}
            isSubmitted={this.state.isSubmitted} placeholder="请填写姓名拼音"
            errorMessage="请填写名字"
          />
          <RadioInputGroupGender
            value={data.gender} required={true}
            onChange={value => this.handleChange("gender", value, true)}
            errorMessage="请选择性别" isSubmitted={this.state.isSubmitted}
          />
          <PlainSelectInput
            id="nationality" title="国籍" value={data.nationality}
            onChange={(value, validity) => this.handleChange("nationality", value, validity)}
            isSubmitted={this.state.isSubmitted} selections={nationality_selection}
            errorMessage="请选择您的国籍" required={true}
          />
          <PlainTextInput
            id="dob" title="生日" value={data.dob} required={true} errorMessage="请输入正确格式MM/DD/YYYY"
            onChange={(value, validity) => this.handleChange("dob", value, validity)}
            isSubmitted={this.state.isSubmitted} placeholder="MM/DD/YYYY" format="^[0-9]{2}/[0-9]{2}/[0-9]{4}$"
          />
          <PlainSelectInput
            id="currentStatus" title="当前身份" value={data.currentStatus} required={true}
            onChange={(value, validity) => this.handleChange("currentStatus", value, validity)}
            selections={statusSelections} isSubmitted={this.state.isSubmitted}
          />
          <div className="action-bar">
            <button type="submit" className="questionnaire-btn" disabled={this.props.status == "loading"}>下一步</button>
          </div>
        </form>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  status: React.PropTypes.string,
};