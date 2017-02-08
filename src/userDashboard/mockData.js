/**
 * Created by Shaochen on 12/29/2016.
 */

let caseList = [
  {
    id: "1",
    serviceName: "婚姻绿卡办理套餐",
    status: "draft",
    seller: "NYIS LAW FIRM",
    price: 1000,
    sellerId: "123213",
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "2",
    serviceName: "H1B签证",
    status: "inspect",
    seller: "NYIS LAW FIRM",
    price: 1000,
    sellerId: "123213",
    simpleID: "XZ0192837",
    createTime: 1482877048000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "3",
    serviceName: "劳工移民资格I-140",
    status: "accept",
    seller: "NYIS LAW FIRM",
    sellerId: "123213",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "4",
    serviceName: "绿卡申请I-485",
    status: "complete",
    isCommented: false,
    seller: "NYIS LAW FIRM",
    sellerId: "123213",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "10",
    serviceName: "绿卡申请I-485",
    status: "complete",
    isCommented: true,
    seller: "NYIS LAW FIRM",
    sellerId: "123213",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "5",
    serviceName: "婚姻绿卡办理套餐",
    status: "draft",
    seller: "NYIS LAW FIRM",
    sellerId: "123213",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "6",
    serviceName: "婚姻绿卡办理套餐1",
    status: "draft",
    sellerId: "123213",
    seller: "NYIS LAW FIRM",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "7",
    serviceName: "婚姻绿卡办理套餐2",
    status: "draft",
    sellerId: "123213",
    seller: "NYIS LAW FIRM",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
  {
    id: "8",
    serviceName: "婚姻绿卡办理套餐3",
    status: "draft",
    sellerId: "123213",
    seller: "NYIS LAW FIRM",
    price: 1000,
    checklist: {
      "BasicInfo": {
        "fullName": "大民",
        "gender": "male",
        "nationality": "CN",
        "dob": "4/14/1982",
        "currentStatus": "J2",
      },
      "Specification": {
        "description": "safasfs afasdfd sadsffffjkfak;lj df;akjdf;lajsdjfak;ljlajkk  laf;sjdf;kla jdfk;lajfkajkf jkal;jsdfkajfkjakdf jk;ajdf;ajsd;fja k;sjdf;klajsfd ;ja;djksfklasjdfla ;kjdfkla;jf;lsadkjff"
      },
      "ContactInfo": {
        "phoneRegion": "1",
        "phoneNumber": "1234561234",
        "email": "sss@nyis.com",
        "wechat": ""
      }
    }
  },
];

let profileInfo = {
  fullName: "大明",
  gender: "male",
  dob: "08/03/1998",
  email: "slu@nyis.com",
  addressLine1: "120 Schor Ave",
  addressLine2: "2nd FL",
  city: "Leonia",
  state: "NJ"
};


export {caseList, profileInfo};

