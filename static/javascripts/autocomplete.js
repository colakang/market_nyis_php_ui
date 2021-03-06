/**
 * Created by shaochenlu on 16/8/24.
 */

/*var AddrInput = function () {
  this.engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/data/states_keywords.json'
  });

  this.stdDict = {
    "delaware": "DE",
    "密歇根州": "MI",
    "rhode island": "RI",
    "ga": "GA",
    "nevada": "NV",
    "maine": "ME",
    "tx": "TX",
    "la": "LA",
    "wyoming": "WY",
    "minnesota": "MN",
    "tn": "TN",
    "华盛顿特区": "DC",
    "maryland": "MD",
    "宾夕法尼亚州": "PA",
    "texas": "TX",
    "iowa": "IA",
    "michigan": "MI",
    "de": "DE",
    "utah": "UT",
    "virginia": "VA",
    "西弗吉尼亚州": "WV",
    "田纳西州": "TN",
    "华盛顿州": "WA",
    "马里兰州": "MD",
    "马萨诸塞州": "MA",
    "hawaii": "HI",
    "nv": "NV",
    "亚拉巴马州": "AL",
    "ohio": "OH",
    "mn": "MN",
    "明尼苏达州": "MN",
    "arizona": "AZ",
    "加利福尼亚州": "CA",
    "怀俄明州": "WY",
    "堪萨斯州": "KS",
    "俄亥俄州": "OH",
    "oklahoma": "OK",
    "佐治亚州": "GA",
    "密西西比州": "MS",
    "新泽西州": "NJ",
    "arkansas": "AR",
    "佛罗里达州": "FL",
    "南达科他州": "SD",
    "路易斯安那州": "LA",
    "ri": "RI",
    "washington d.c.": "DC",
    "夏威夷州": "HI",
    "wisconsin": "WI",
    "亚利桑那州": "AZ",
    "wa": "WA",
    "威斯康星州": "WI",
    "wi": "WI",
    "wv": "WV",
    "california": "CA",
    "new mexico": "NM",
    "阿肯色州": "AR",
    "俄克拉荷马州": "OK",
    "弗吉尼亚州": "VA",
    "伊利诺伊州": "IL",
    "特拉华州": "DE",
    "ok": "OK",
    "oh": "OH",
    "艾奥瓦州": "IA",
    "florida": "FL",
    "内华达州": "NV",
    "纽约州": "NY",
    "阿拉斯加州": "AK",
    "or": "OR",
    "co": "CO",
    "colorado": "CO",
    "ca": "CA",
    "密苏里州": "MO",
    "washington": "WA",
    "内布拉斯加州": "NE",
    "tennessee": "TN",
    "ct": "CT",
    "mississippi": "MS",
    "south dakota": "SD",
    "new jersey": "NJ",
    "犹他州": "UT",
    "俄勒冈州": "OR",
    "north carolina": "NC",
    "new york": "NY",
    "wy": "WY",
    "indiana": "IN",
    "louisiana": "LA",
    "爱达荷州": "ID",
    "west virginia": "WV",
    "肯塔基州": "KY",
    "oregon": "OR",
    "connecticut": "CT",
    "hi": "HI",
    "印第安纳州": "IN",
    "罗得岛州": "RI",
    "me": "ME",
    "md": "MD",
    "georgia": "GA",
    "ma": "MA",
    "ut": "UT",
    "mo": "MO",
    "蒙大拿州": "MT",
    "mi": "MI",
    "kentucky": "KY",
    "mt": "MT",
    "nebraska": "NE",
    "new hampshire": "NH",
    "ms": "MS",
    "south carolina": "SC",
    "佛蒙特州": "VT",
    "va": "VA",
    "康涅狄格州": "CT",
    "north dakota": "ND",
    "ak": "AK",
    "al": "AL",
    "alaska": "AK",
    "缅因州": "ME",
    "ar": "AR",
    "vt": "VT",
    "il": "IL",
    "in": "IN",
    "ia": "IA",
    "az": "AZ",
    "id": "ID",
    "nh": "NH",
    "新罕布什尔州": "NH",
    "nj": "NJ",
    "nm": "NM",
    "pa": "PA",
    "nc": "NC",
    "nd": "ND",
    "ne": "NE",
    "illinois": "IL",
    "ny": "NY",
    "南卡罗来纳州": "SC",
    "新墨西哥州": "NM",
    "idaho": "ID",
    "德克萨斯州": "TX",
    "科罗拉多州": "CO",
    "kansas": "KS",
    "dc": "DC",
    "montana": "MT",
    "massachusetts": "MA",
    "fl": "FL",
    "alabama": "AL",
    "vermont": "VT",
    "pennsylvania": "PA",
    "ks": "KS",
    "北卡罗来纳州": "NC",
    "missouri": "MO",
    "sc": "SC",
    "北达科他州": "ND",
    "ky": "KY",
    "sd": "SD"
  };

  this.input = $('#location');
  this.stdInput = $('#std-location');
};*/

/* legal service search autocomplete*/
(function ($, window, document) {
  var engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/data/keywords.json'
  });

  var categoryMatcher = function () {
    return function findMatches(q, cb) {
      console.log("query is " + q);
      var matches = [];
      engine.search(q, function (datums) {
        console.log(datums);
        for (var index in datums) {
            var datum = datums[index];
            for (var i in datum['categories']) {
              matches.push({
                query: q,
                keyword: datum['keyword'],
                category: {
                  name: datum['categories'][i]['name'],
                  code: datum['categories'][i]['code']
                }
              });
            }
          }
      });
      console.log(matches);
      cb(matches);
    };
  };

  $('#legal-service').typeahead({
    hint: false
  }, {
    name: "legal-service",
    source: categoryMatcher(),
    display: function (input) {
      if(input['category'].hasOwnProperty('code')){
        return input['category']['name'];
      }
      else{
        return input['keyword'];
      }
    },
    limit: 10,
    templates: {
      suggestion: Handlebars.compile('<div>{{category.name}}</div>')
    }
  }).bind('typeahead:select', function (e, obj) {
    $('#origin-input').val(obj['query']);
    if(obj['category'].hasOwnProperty('code'))
      $('#category').val(obj['category']['code']);
  });
})(jQuery, window, document);

/* location autocomplete*/
(function ($, window, document) {
  var locationDataSource = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/data/states_keywords.json'
  });

  var stdLocation = {
    "delaware": "DE",
    "密歇根州": "MI",
    "rhode island": "RI",
    "ga": "GA",
    "nevada": "NV",
    "maine": "ME",
    "tx": "TX",
    "la": "LA",
    "wyoming": "WY",
    "minnesota": "MN",
    "tn": "TN",
    "华盛顿特区": "DC",
    "maryland": "MD",
    "宾夕法尼亚州": "PA",
    "texas": "TX",
    "iowa": "IA",
    "michigan": "MI",
    "de": "DE",
    "utah": "UT",
    "virginia": "VA",
    "西弗吉尼亚州": "WV",
    "田纳西州": "TN",
    "华盛顿州": "WA",
    "马里兰州": "MD",
    "马萨诸塞州": "MA",
    "hawaii": "HI",
    "nv": "NV",
    "亚拉巴马州": "AL",
    "ohio": "OH",
    "mn": "MN",
    "明尼苏达州": "MN",
    "arizona": "AZ",
    "加利福尼亚州": "CA",
    "怀俄明州": "WY",
    "堪萨斯州": "KS",
    "俄亥俄州": "OH",
    "oklahoma": "OK",
    "佐治亚州": "GA",
    "密西西比州": "MS",
    "新泽西州": "NJ",
    "arkansas": "AR",
    "佛罗里达州": "FL",
    "南达科他州": "SD",
    "路易斯安那州": "LA",
    "ri": "RI",
    "washington d.c.": "DC",
    "夏威夷州": "HI",
    "wisconsin": "WI",
    "亚利桑那州": "AZ",
    "wa": "WA",
    "威斯康星州": "WI",
    "wi": "WI",
    "wv": "WV",
    "california": "CA",
    "new mexico": "NM",
    "阿肯色州": "AR",
    "俄克拉荷马州": "OK",
    "弗吉尼亚州": "VA",
    "伊利诺伊州": "IL",
    "特拉华州": "DE",
    "ok": "OK",
    "oh": "OH",
    "艾奥瓦州": "IA",
    "florida": "FL",
    "内华达州": "NV",
    "纽约州": "NY",
    "阿拉斯加州": "AK",
    "or": "OR",
    "co": "CO",
    "colorado": "CO",
    "ca": "CA",
    "密苏里州": "MO",
    "washington": "WA",
    "内布拉斯加州": "NE",
    "tennessee": "TN",
    "ct": "CT",
    "mississippi": "MS",
    "south dakota": "SD",
    "new jersey": "NJ",
    "犹他州": "UT",
    "俄勒冈州": "OR",
    "north carolina": "NC",
    "new york": "NY",
    "wy": "WY",
    "indiana": "IN",
    "louisiana": "LA",
    "爱达荷州": "ID",
    "west virginia": "WV",
    "肯塔基州": "KY",
    "oregon": "OR",
    "connecticut": "CT",
    "hi": "HI",
    "印第安纳州": "IN",
    "罗得岛州": "RI",
    "me": "ME",
    "md": "MD",
    "georgia": "GA",
    "ma": "MA",
    "ut": "UT",
    "mo": "MO",
    "蒙大拿州": "MT",
    "mi": "MI",
    "kentucky": "KY",
    "mt": "MT",
    "nebraska": "NE",
    "new hampshire": "NH",
    "ms": "MS",
    "south carolina": "SC",
    "佛蒙特州": "VT",
    "va": "VA",
    "康涅狄格州": "CT",
    "north dakota": "ND",
    "ak": "AK",
    "al": "AL",
    "alaska": "AK",
    "缅因州": "ME",
    "ar": "AR",
    "vt": "VT",
    "il": "IL",
    "in": "IN",
    "ia": "IA",
    "az": "AZ",
    "id": "ID",
    "nh": "NH",
    "新罕布什尔州": "NH",
    "nj": "NJ",
    "nm": "NM",
    "pa": "PA",
    "nc": "NC",
    "nd": "ND",
    "ne": "NE",
    "illinois": "IL",
    "ny": "NY",
    "南卡罗来纳州": "SC",
    "新墨西哥州": "NM",
    "idaho": "ID",
    "德克萨斯州": "TX",
    "科罗拉多州": "CO",
    "kansas": "KS",
    "dc": "DC",
    "montana": "MT",
    "massachusetts": "MA",
    "fl": "FL",
    "alabama": "AL",
    "vermont": "VT",
    "pennsylvania": "PA",
    "ks": "KS",
    "北卡罗来纳州": "NC",
    "missouri": "MO",
    "sc": "SC",
    "北达科他州": "ND",
    "ky": "KY",
    "sd": "SD"
  };

  function getStdAddr(addr) {
    if(addr in stdLocation) {
      console.log(stdLocation[addr]);
      return stdLocation[addr];
    }
    return null;
  }

  $('#location').typeahead({
    hint: true
  }, {
    name: 'location-service',
    source: locationDataSource
  }).
  bind('typeahead:select', function () {
    $('#std-location').val(getStdAddr($(this).val().toLowerCase()));
  }).
  bind('typeahead:autocomplete', function () {
    $('#std-location').val(getStdAddr($(this).val().toLowerCase()));
  }).
  on('input', function () {
    $('#std-location').val(getStdAddr($(this).val().toLowerCase()));
  });

  $.getJSON('http://ipinfo.io', function (data) {
    console.log(data);
    if(data['country'] == 'US') {
      var region = data['region'];
      $('#location').val(region);
      $('#std-location').val(stdLocation[region.toLowerCase()]);
    }
  });
})(jQuery, window, document);
