/* ============================================================
 * type-kana
 * ============================================================ */
var romajiToHiragana = {
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",
    "yi": "い",
    "wu": "う",
    "whu": "う",
    "xa": "ぁ",
    "xi": "ぃ",
    "xu": "ぅ",
    "xe": "ぇ",
    "xo": "ぉ",
    "xyi": "ぃ",
    "xye": "ぇ",
    "ye": "いぇ",
    "wha": "うぁ",
    "whi": "うぃ",
    "whe": "うぇ",
    "who": "うぉ",
    "wi": "うぃ",
    "we": "うぇ",
    "va": "ゔぁ",
    "vi": "ゔぃ",
    "vu": "ゔ",
    "ve": "ゔぇ",
    "vo": "ゔぉ",
    "vya": "ゔゃ",
    "vyi": "ゔぃ",
    "vyu": "ゔゅ",
    "vye": "ゔぇ",
    "vyo": "ゔょ",
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    "lka": "ヵ",
    "lke": "ヶ",
    "xka": "ヵ",
    "xke": "ヶ",
    "kya": "きゃ",
    "kyi": "きぃ",
    "kyu": "きゅ",
    "kye": "きぇ",
    "kyo": "きょ",
    "qya": "くゃ",
    "qyu": "くゅ",
    "qyo": "くょ",
    "qwa": "くぁ",
    "qwi": "くぃ",
    "qwu": "くぅ",
    "qwe": "くぇ",
    "qwo": "くぉ",
    "qa": "くぁ",
    "qi": "くぃ",
    "qe": "くぇ",
    "qo": "くぉ",
    "kwa": "くぁ",
    "qyi": "くぃ",
    "qye": "くぇ",
    "ga": "が",
    "gi": "ぎ",
    "gu": "ぐ",
    "ge": "げ",
    "go": "ご",
    "gya": "ぎゃ",
    "gyi": "ぎぃ",
    "gyu": "ぎゅ",
    "gye": "ぎぇ",
    "gyo": "ぎょ",
    "gwa": "ぐぁ",
    "gwi": "ぐぃ",
    "gwu": "ぐぅ",
    "gwe": "ぐぇ",
    "gwo": "ぐぉ",
    "sa": "さ",
    "si": "し",
    "shi": "し",
    "su": "す",
    "se": "せ",
    "so": "そ",
    "za": "ざ",
    "zi": "じ",
    "zu": "ず",
    "ze": "ぜ",
    "zo": "ぞ",
    "ji": "じ",
    "sya": "しゃ",
    "syi": "しぃ",
    "syu": "しゅ",
    "sye": "しぇ",
    "syo": "しょ",
    "sha": "しゃ",
    "shu": "しゅ",
    "she": "しぇ",
    "sho": "しょ",
    "swa": "すぁ",
    "swi": "すぃ",
    "swu": "すぅ",
    "swe": "すぇ",
    "swo": "すぉ",
    "zya": "じゃ",
    "zyi": "じぃ",
    "zyu": "じゅ",
    "zye": "じぇ",
    "zyo": "じょ",
    "ja": "じゃ",
    "ju": "じゅ",
    "je": "じぇ",
    "jo": "じょ",
    "jya": "じゃ",
    "jyi": "じぃ",
    "jyu": "じゅ",
    "jye": "じぇ",
    "jyo": "じょ",
    "ta": "た",
    "ti": "ち",
    "tu": "つ",
    "te": "て",
    "to": "と",
    "chi": "ち",
    "tsu": "つ",
    "ltu": "っ",
    "xtu": "っ",
    "tya": "ちゃ",
    "tyi": "ちぃ",
    "tyu": "ちゅ",
    "tye": "ちぇ",
    "tyo": "ちょ",
    "cha": "ちゃ",
    "chu": "ちゅ",
    "che": "ちぇ",
    "cho": "ちょ",
    "cya": "ちゃ",
    "cyi": "ちぃ",
    "cyu": "ちゅ",
    "cye": "ちぇ",
    "cyo": "ちょ",
    "tsa": "つぁ",
    "tsi": "つぃ",
    "tse": "つぇ",
    "tso": "つぉ",
    "tha": "てゃ",
    "thi": "てぃ",
    "thu": "てゅ",
    "the": "てぇ",
    "tho": "てょ",
    "twa": "とぁ",
    "twi": "とぃ",
    "twu": "とぅ",
    "twe": "とぇ",
    "two": "とぉ",
    "da": "だ",
    "di": "ぢ",
    "du": "づ",
    "de": "で",
    "do": "ど",
    "dya": "ぢゃ",
    "dyi": "ぢぃ",
    "dyu": "ぢゅ",
    "dye": "ぢぇ",
    "dyo": "ぢょ",
    "dha": "でゃ",
    "dhi": "でぃ",
    "dhu": "でゅ",
    "dhe": "でぇ",
    "dho": "でょ",
    "dwa": "どぁ",
    "dwi": "どぃ",
    "dwu": "どぅ",
    "dwe": "どぇ",
    "dwo": "どぉ",
    "na": "な",
    "ni": "に",
    "nu": "ぬ",
    "ne": "ね",
    "no": "の",
    "nya": "にゃ",
    "nyi": "にぃ",
    "nyu": "にゅ",
    "nye": "にぇ",
    "nyo": "にょ",
    "ha": "は",
    "hi": "ひ",
    "hu": "ふ",
    "he": "へ",
    "ho": "ほ",
    "fu": "ふ",
    "hya": "ひゃ",
    "hyi": "ひぃ",
    "hyu": "ひゅ",
    "hye": "ひぇ",
    "hyo": "ひょ",
    "fya": "ふゃ",
    "fyu": "ふゅ",
    "fyo": "ふょ",
    "fwa": "ふぁ",
    "fwi": "ふぃ",
    "fwu": "ふぅ",
    "fwe": "ふぇ",
    "fwo": "ふぉ",
    "fa": "ふぁ",
    "fi": "ふぃ",
    "fe": "ふぇ",
    "fo": "ふぉ",
    "fyi": "ふぃ",
    "fye": "ふぇ",
    "ba": "ば",
    "bi": "び",
    "bu": "ぶ",
    "be": "べ",
    "bo": "ぼ",
    "bya": "びゃ",
    "byi": "びぃ",
    "byu": "びゅ",
    "bye": "びぇ",
    "byo": "びょ",
    "pa": "ぱ",
    "pi": "ぴ",
    "pu": "ぷ",
    "pe": "ぺ",
    "po": "ぽ",
    "pya": "ぴゃ",
    "pyi": "ぴぃ",
    "pyu": "ぴゅ",
    "pye": "ぴぇ",
    "pyo": "ぴょ",
    "ma": "ま",
    "mi": "み",
    "mu": "む",
    "me": "め",
    "mo": "も",
    "mya": "みゃ",
    "myi": "みぃ",
    "myu": "みゅ",
    "mye": "みぇ",
    "myo": "みょ",
    "ya": "や",
    "yu": "ゆ",
    "yo": "よ",
    "xya": "ゃ",
    "xyu": "ゅ",
    "xyo": "ょ",
    "ra": "ら",
    "ri": "り",
    "ru": "る",
    "re": "れ",
    "ro": "ろ",
    "rya": "りゃ",
    "ryi": "りぃ",
    "ryu": "りゅ",
    "rye": "りぇ",
    "ryo": "りょ",
    "la": "ら",
    "li": "り",
    "lu": "る",
    "le": "れ",
    "lo": "ろ",
    "lya": "りゃ",
    "lyi": "りぃ",
    "lyu": "りゅ",
    "lye": "りぇ",
    "lyo": "りょ",
    "wa": "わ",
    "wo": "を",
    "lwe": "ゎ",
    "xwa": "ゎ",
    "n": "ん",
    "nn": "ん",
    "n ": "ん",
    "xn": "ん",
    "ltsu": "っ"
};

var hiraganaToRomaji = {
    "あ": ["a"],
    "い": ["i", "yi"],
    "う": ["u", "wu", "whu"],
    "え": ["e"],
    "お": ["o"],
    "ぁ": ["xa"],
    "ぃ": ["xi", "xyi"],
    "ぅ": ["xu"],
    "ぇ": ["xe", "xye"],
    "ぉ": ["xo"],
    "いぇ": ["ye"],
    "うぁ": ["wha"],
    "うぃ": ["whi", "wi"],
    "うぇ": ["whe", "we"],
    "うぉ": ["who"],
    "ゔぁ": ["va"],
    "ゔぃ": ["vi", "vyi"],
    "ゔ": ["vu"],
    "ゔぇ": ["ve", "vye"],
    "ゔぉ": ["vo"],
    "ゔゃ": ["vya"],
    "ゔゅ": ["vyu"],
    "ゔょ": ["vyo"],
    "か": ["ka"],
    "き": ["ki"],
    "く": ["ku"],
    "け": ["ke"],
    "こ": ["ko"],
    "ヵ": ["lka", "xka"],
    "ヶ": ["lke", "xke"],
    "きゃ": ["kya"],
    "きぃ": ["kyi"],
    "きゅ": ["kyu"],
    "きぇ": ["kye"],
    "きょ": ["kyo"],
    "くゃ": ["qya"],
    "くゅ": ["qyu"],
    "くょ": ["qyo"],
    "くぁ": ["qwa", "qa", "kwa"],
    "くぃ": ["qwi", "qi", "qyi"],
    "くぅ": ["qwu"],
    "くぇ": ["qwe", "qe", "qye"],
    "くぉ": ["qwo", "qo"],
    "が": ["ga"],
    "ぎ": ["gi"],
    "ぐ": ["gu"],
    "げ": ["ge"],
    "ご": ["go"],
    "ぎゃ": ["gya"],
    "ぎぃ": ["gyi"],
    "ぎゅ": ["gyu"],
    "ぎぇ": ["gye"],
    "ぎょ": ["gyo"],
    "ぐぁ": ["gwa"],
    "ぐぃ": ["gwi"],
    "ぐぅ": ["gwu"],
    "ぐぇ": ["gwe"],
    "ぐぉ": ["gwo"],
    "さ": ["sa"],
    "し": ["si", "shi"],
    "す": ["su"],
    "せ": ["se"],
    "そ": ["so"],
    "ざ": ["za"],
    "じ": ["zi", "ji"],
    "ず": ["zu"],
    "ぜ": ["ze"],
    "ぞ": ["zo"],
    "しゃ": ["sya", "sha"],
    "しぃ": ["syi"],
    "しゅ": ["syu", "shu"],
    "しぇ": ["sye", "she"],
    "しょ": ["syo", "sho"],
    "すぁ": ["swa"],
    "すぃ": ["swi"],
    "すぅ": ["swu"],
    "すぇ": ["swe"],
    "すぉ": ["swo"],
    "じゃ": ["zya", "ja", "jya"],
    "じぃ": ["zyi", "jyi"],
    "じゅ": ["zyu", "ju", "jyu"],
    "じぇ": ["zye", "je", "jye"],
    "じょ": ["zyo", "jo", "jyo"],
    "た": ["ta"],
    "ち": ["ti", "chi"],
    "つ": ["tu", "tsu"],
    "て": ["te"],
    "と": ["to"],
    "っ": ["ltu", "xtu", "ltsu"],
    "ちゃ": ["tya", "cha", "cya"],
    "ちぃ": ["tyi", "cyi"],
    "ちゅ": ["tyu", "chu", "cyu"],
    "ちぇ": ["tye", "che", "cye"],
    "ちょ": ["tyo", "cho", "cyo"],
    "つぁ": ["tsa"],
    "つぃ": ["tsi"],
    "つぇ": ["tse"],
    "つぉ": ["tso"],
    "てゃ": ["tha"],
    "てぃ": ["thi"],
    "てゅ": ["thu"],
    "てぇ": ["the"],
    "てょ": ["tho"],
    "とぁ": ["twa"],
    "とぃ": ["twi"],
    "とぅ": ["twu"],
    "とぇ": ["twe"],
    "とぉ": ["two"],
    "だ": ["da"],
    "ぢ": ["di"],
    "づ": ["du"],
    "で": ["de"],
    "ど": ["do"],
    "ぢゃ": ["dya"],
    "ぢぃ": ["dyi"],
    "ぢゅ": ["dyu"],
    "ぢぇ": ["dye"],
    "ぢょ": ["dyo"],
    "でゃ": ["dha"],
    "でぃ": ["dhi"],
    "でゅ": ["dhu"],
    "でぇ": ["dhe"],
    "でょ": ["dho"],
    "どぁ": ["dwa"],
    "どぃ": ["dwi"],
    "どぅ": ["dwu"],
    "どぇ": ["dwe"],
    "どぉ": ["dwo"],
    "な": ["na"],
    "に": ["ni"],
    "ぬ": ["nu"],
    "ね": ["ne"],
    "の": ["no"],
    "にゃ": ["nya"],
    "にぃ": ["nyi"],
    "にゅ": ["nyu"],
    "にぇ": ["nye"],
    "にょ": ["nyo"],
    "は": ["ha"],
    "ひ": ["hi"],
    "ふ": ["hu", "fu"],
    "へ": ["he"],
    "ほ": ["ho"],
    "ひゃ": ["hya"],
    "ひぃ": ["hyi"],
    "ひゅ": ["hyu"],
    "ひぇ": ["hye"],
    "ひょ": ["hyo"],
    "ふゃ": ["fya"],
    "ふゅ": ["fyu"],
    "ふょ": ["fyo"],
    "ふぁ": ["fwa", "fa"],
    "ふぃ": ["fwi", "fi", "fyi"],
    "ふぅ": ["fwu"],
    "ふぇ": ["fwe", "fe", "fye"],
    "ふぉ": ["fwo", "fo"],
    "ば": ["ba"],
    "び": ["bi"],
    "ぶ": ["bu"],
    "べ": ["be"],
    "ぼ": ["bo"],
    "びゃ": ["bya"],
    "びぃ": ["byi"],
    "びゅ": ["byu"],
    "びぇ": ["bye"],
    "びょ": ["byo"],
    "ぱ": ["pa"],
    "ぴ": ["pi"],
    "ぷ": ["pu"],
    "ぺ": ["pe"],
    "ぽ": ["po"],
    "ぴゃ": ["pya"],
    "ぴぃ": ["pyi"],
    "ぴゅ": ["pyu"],
    "ぴぇ": ["pye"],
    "ぴょ": ["pyo"],
    "ま": ["ma"],
    "み": ["mi"],
    "む": ["mu"],
    "め": ["me"],
    "も": ["mo"],
    "みゃ": ["mya"],
    "みぃ": ["myi"],
    "みゅ": ["myu"],
    "みぇ": ["mye"],
    "みょ": ["myo"],
    "や": ["ya"],
    "ゆ": ["yu"],
    "よ": ["yo"],
    "ゃ": ["xya"],
    "ゅ": ["xyu"],
    "ょ": ["xyo"],
    "ら": ["ra", "la"],
    "り": ["ri", "li"],
    "る": ["ru", "lu"],
    "れ": ["re", "le"],
    "ろ": ["ro", "lo"],
    "りゃ": ["rya", "lya"],
    "りぃ": ["ryi", "lyi"],
    "りゅ": ["ryu", "lyu"],
    "りぇ": ["rye", "lye"],
    "りょ": ["ryo", "lyo"],
    "わ": ["wa"],
    "を": ["wo"],
    "ゎ": ["lwe", "xwa"],
    "ん": ["n", "nn", "n ", "xn"]
};


var whatDoIKnow = [				 // end_index
    'あ', 'い', 'う', 'え', 'お', // 5
    'か', 'き', 'く', 'け', 'こ', // 10				 
    'さ', 'し', 'す', 'せ', 'そ', // 15
    'た', 'ち', 'つ', 'て', 'と', // 20
    'な', 'に', 'ぬ', 'ね', 'の', // 25
    'は', 'ひ', 'ふ', 'へ', 'ほ', // 30
    'ま', 'み', 'む', 'め', 'も', // 35
    'や', 'ゆ', 'よ',             // 38
    'ら', 'り', 'る', 'れ', 'ろ', // 43
    'わ', 'を',                  // 45
    'ん',                        // 46
];

var kanaGroupIndices = [
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    38,
    43,
    45,
    46
];

var whatDoIKnowOriginal = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を',
    'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'そ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    'きゃ', 'きゅ', 'きょ',
    'しゃ', 'しゅ', 'しょ',
    'ちゃ', 'ちゅ', 'ちょ',
    'にゃ', 'にゅ', 'にょ',
    'ひゃ', 'にゅ', 'にょ',
    'みゃ', 'みゅ', 'みょ',
    'りゃ', 'りゅ', 'りょ',
    'ぎゃ', 'ぎゅ', 'ぎょ',
    'じゃ', 'じゅ', 'じょ',
    // 'ぢゃ', 'ぢゅ', 'ぢょ',
    'びゃ', 'びゅ', 'びょ',
    'ぴゃ', 'ぴょ', 'ぴょ'
];

var HIRAGANA_START = 0x3041;
var HIRAGANA_END = 0x3096;
var KATAKANA_START = 0x30A1;
var KATAKANA_END = 0x30FA;
var SLIDE_ANIM_MS = 200;
var KANA_FILL_COUNT= 20;

var kanaAttemptCount = KANA_FILL_COUNT;
var maxMostRecentCharactersWidths= 20;

var isCharInRange = function (char, start, end) {
    var code;
    code = char.charCodeAt(0);
    return (start <= code && code <= end);
};

var isCharVowel = function (char, includeY) {
    var regexp;
    if (includeY == null) {
        includeY = true;
    }
    regexp = includeY ? /[aeiouy]/ : /[aeiou]/;
    return char.toLowerCase().charAt(0).search(regexp) !== -1;
};

var _isCharConsonant = function (char, includeY) {
    var regexp;
    if (includeY == null) {
        includeY = true;
    }
    regexp = includeY ? /[bcdfghjklmnpqrstvwxyz]/ : /[bcdfghjklmnpqrstvwxz]/;
    return char.toLowerCase().charAt(0).search(regexp) !== -1;
};

var isCharKatakana = function (char) {
    return isCharInRange(char, KATAKANA_START, KATAKANA_END);
};

var isCharHiragana = function (char) {
    return isCharInRange(char, HIRAGANA_START, HIRAGANA_END);
};

var isCharKana = function (char) {
    return isCharHiragana(char) || isCharKatakana(char);
};

var _isCharNotKana = function (char) {
    return !isCharHiragana(char) && !isCharKatakana(char);
};

var katakanaToHiragana = function (kata) {
    var code, hira, hiraChar, kataChar, _i, _len, _ref;
    hira = [];
    _ref = kata.split("");
    for (_i = 0,
        _len = _ref.length; _i < _len; _i++) {
        kataChar = _ref[_i];
        if (isCharKatakana(kataChar)) {
            code = kataChar.charCodeAt(0);
            code += HIRAGANA_START - KATAKANA_START;
            hiraChar = String.fromCharCode(code);
            hira.push(hiraChar);
        } else {
            hira.push(kataChar);
        }
    }
    return hira.join("");
};

var hiraganaToKatakana = function (hira) {
    var code, hiraChar, kata, kataChar, _i, _len, _ref;
    kata = [];
    _ref = hira.split("");
    for (_i = 0,
        _len = _ref.length; _i < _len; _i++) {
        hiraChar = _ref[_i];
        if (isCharHiragana(hiraChar)) {
            code = hiraChar.charCodeAt(0);
            code += KATAKANA_START - HIRAGANA_START;
            kataChar = String.fromCharCode(code);
            kata.push(kataChar);
        } else {
            kata.push(hiraChar);
        }
    }
    return kata.join("");
};

var romajiToKana = function (romaji) {
    var isKatakana = $('input[name="kana"]:checked').val() == 'katakana';
    var hiragana = romajiToHiragana[romaji];
    if (!hiragana)
        return null;
    return isKatakana ? hiraganaToKatakana(hiragana) : hiragana;
};

function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function getListOfKana() {
    return $('.kana-selection.btn-grey.active').text();
}

function getRandKana(listOfKana) {
    return listOfKana[rand(0, listOfKana.length)];
}

function clearKana()
{
    $('.kana-container').html('').attr('style', '');
}

function fillKana() {
    var kanaList = getListOfKana();
    for (var i = 0; i < KANA_FILL_COUNT; i++) {
        var kanaChar = getRandKana(kanaList);
        var isKatakana = $('input[name="kana"]:checked').val() == 'katakana';
        kanaChar = isKatakana ? hiraganaToKatakana(kanaChar) : kanaChar;

        $('.kana-container').append('<span class="white">' + kanaChar + '</span>');
    }
}

function isInfinityMode()
{
    return $('#infinity-switch').is(':checked');
}

function getKanaCountString()
{
    if(isInfinityMode())
    {
        return kanaAttemptCount.toString();
    }
    else
    {
        return KANA_FILL_COUNT.toString();
    }
}

$('body, html').click(function () {
    $('.romaji-container').focus();
})

var score = 0, time, timer;
var started = false;


function resetKanaAttemptCount(){
    kanaAttemptCount= isInfinityMode() ? 0 : KANA_FILL_COUNT;
}

function incrementKanaAttemptCount() {
    if(isInfinityMode()) ++kanaAttemptCount;
}


$('.btn-start').click(function () {
    started = true;
    resetKanaAttemptCount();

    var parent = $(this).parent();

    $('.kana-selection-block').fadeOut(200);

    $(this).parent().fadeOut(200, function () {

        clearKana();
        fillKana();

        $('.main-container').animate({
            'margin-top': '-150px'
        });

        $('.main-content').slideDown();
        $('.main-content').slideDown();

        $(".main-content").removeClass('hidden').hide().fadeIn("slow", function () {
            if ($('.buttons-score').hasClass('hidden')) {
                $('.buttons-score').removeClass('hidden');
                $('.buttons-score').hide();
                $('.buttons-score').hide().fadeIn("slow");
            }

            $('.romaji-container').attr('contenteditable', true).focus();

            $('.time').text('0:00');
            $('.score').text('0 / ' + getKanaCountString());

            $(".main-content").focus();
        });
    });
});

function end_typing() {
    $('.kana-container').animate({
        'margin-left': '-=' + $(window).width() / 2 + 'px'
    });
    $('.romaji-container').attr('contenteditable', false);

    clearInterval(timer);
    timer = null;

    score = 0;

    $('.main-content').slideUp();
    $('.main-container').animate({
        'margin-top': '-100px'
    });
    $('.kana-selection-block').fadeIn();
    $('.buttons-start').fadeIn();
    $('.btn-start .start').text('Restart');

    started = false;
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) { // esc
        end_typing()
    }
});

function updateScoreBoard()
{
     $('.score').html(score+ ' / ' + kanaAttemptCount);
}

function sumOfMostRecentCharacterWidths()
{
    return mostRecentCharactersWidths.reduce(function(acc, val) { return acc + val;}, 0);
}

var sumOFAllShifts= 0;

function shiftKanaLeft(widthOfCharacter)
{
    sumOFAllShifts += widthOfCharacter;
    
    if ($('.kana-container').is(':animated')) {
        $('.kana-container').finish();
    }
    $('.kana-container').animate({
        'margin-left': '-=' + widthOfCharacter + 'px'
    }, SLIDE_ANIM_MS);
}

function shiftKanaRightSecretly()
{
//mostRecentCharactersWidths.reduce(function(acc, val) { return acc + val;}, 0);

    var currentShift= parseInt($('.kana-container').css('margin-left'), 10);

    var oldKana= $('.kana-container .red,.green').slice(0, -KANA_FILL_COUNT);

    var totalWidthOfRemoved= 0;
    oldKana.each(function() { totalWidthOfRemoved += $(this).width(); });

    oldKana.remove();

    $('.kana-container').css('margin-left', (currentShift + totalWidthOfRemoved) + 'px');
}

$('.romaji-container').keydown(function () {
    if (!timer) {
        time = +new Date()
        timer = setInterval(function () {
            var deltaTime = (+new Date - time) / 1000;
            var s = Math.floor(deltaTime % 60);
            if (s < 10)
                s = '0' + s;
            var m = Math.floor(deltaTime / 60 % 60);
            $('.time').text(m + ':' + s);
        }, 1000);
    }

    if (isInfinityMode())
    {
        if($('.white').length < 30)
        {
            fillKana();
        }
        else if($('.kana-container span').length > 100)
        {
            if ($('.kana-container').is(':animated')) {
                $('.kana-container').promise().done(shiftKanaRightSecretly); // do it after the animation finishes
            }
            else {
                shiftKanaRightSecretly(); // do it now
            }
        }
    }

    var kanaTyped = romajiToKana($(this).text());
    if (kanaTyped) {
        console.log(kanaTyped, $('.white').first().text());
        
        if (kanaTyped == $('.white').first().text()) {
            // SUCCESS
            $(this).html('');
            var w = $('.white').first().addClass('green').removeClass('white').width();
            shiftKanaLeft(w);

            ++score;
            incrementKanaAttemptCount();
            updateScoreBoard();
           
        } else if ($(this).html() !== 'n') {
            // FAILURE
            $(this).html('');
            var w = $('.white').first().addClass('red').removeClass('white').width();
            shiftKanaLeft(w);
            
            incrementKanaAttemptCount();
            updateScoreBoard();
        }
    } else if (!(romajiToKana($(this).text() + 'a') || romajiToKana($(this).text() + 'ha'))) {
        // THAT WASN'T A KANA
        console.log(romajiToKana($(this).html() + 'a'));
        $(this).html('');
        var w = $('.white').first().addClass('red').removeClass('white').width();
        shiftKanaLeft(w);

        incrementKanaAttemptCount();
        updateScoreBoard();
    }

    console.log("length: ", $('.white').length);

    if (!$('.white').length) {
        // RESTORE MENU
        end_typing()
    }
});


$('.check-kanagroup > input').click(function (index) {

    var isChecked = $(this).prop('checked');

    $(this).parents('div').first().children('button').each(function (index) {
        if (isChecked) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
});

$('.kana-selection').click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).toggleClass('active');
    var atLeastOneActive = $(this).parents('div.row').children('button').hasClass('active');

    var kanagroupCheckbox = $(this).parents('div.row').find('label > input');
    kanagroupCheckbox.prop('checked', atLeastOneActive);
});

$('#infinity-switch').on('switchChange.bootstrapSwitch', function (event, state) {
    if($('#infinity-switch').is(':checked'))
    {
        kanaAttemptCount= 1000000000;
    }
    else
    {
        kanaAttemptCount= 100;
    }
});