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

var englishToJapaneseSpecialTokens = {
    "\u00A0" : [" ", "。", "\u00A0", "\u3000"], //nbsp
    " ": [" ", "。", "\u00A0", "\u3000"], // space allowed to substitute "。" for typing simplicity, Non-Breaking Soace, Ideographic Space
    ".": [ ".", "。", "・"],
    ",": ["、"],
    "'": ["「", "」"],
    '"': ["『","』"],
    "-": ["-", "〜", "ー", "ー"],
    "?": ["?"],
    "?": ["!"],
    "/": ["/"],
    "(": ["(", "（"], // Full Width Left Parenthesis
    ")": [")", "）"], // Full Width Right Parenthesis
    "{": ["{"],
    "}": ["}"],
    "+": ["+"],
    "0": ["0"],
    "1": ["1"],
    "2": ["2"],
    "3": ["3"],
    "4": ["4"],
    "5": ["5"],
    "6": ["6"],
    "7": ["7"],
    "8": ["8"],
    "9": ["9"]
}

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
    "し": ["shi","si"],
    "す": ["su"],
    "せ": ["se"],
    "そ": ["so"],
    "ざ": ["za"],
    "じ": ["ji", "zi"],
    "ず": ["zu"],
    "ぜ": ["ze"],
    "ぞ": ["zo"],
    "しゃ": ["sha", "sya"],
    "しぃ": ["syi"],
    "しゅ": ["shu", "syu"],
    "しぇ": ["she", "sye"],
    "しょ": ["sho", "syo"],
    "すぁ": ["swa"],
    "すぃ": ["swi"],
    "すぅ": ["swu"],
    "すぇ": ["swe"],
    "すぉ": ["swo"],
    "じゃ": ["ja", "zya", "jya"],
    "じぃ": ["jyi", "zyi"],
    "じゅ": ["ju", "zyu", "jyu"],
    "じぇ": ["je", "zye", "jye"],
    "じょ": ["jo", "zyo", "jyo"],
    "た": ["ta"],
    "ち": ["chi", "ti"],
    "つ": ["tsu", "tu"],
    "て": ["te"],
    "と": ["to"],
    "っ": ["ltu", "xtu", "ltsu"],
    "ちゃ": ["cha", "tya", "cya"],
    "ちぃ": ["tyi", "cyi"],
    "ちゅ": ["chu", "tyu", "cyu"],
    "ちぇ": ["che", "tye", "cye"],
    "ちょ": ["cho", "tyo", "cyo"],
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
    "ふ": ["fu", "hu"],
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

var hiraganaDigraphCharacters = 
[
    "ぁ",
    "ぃ",
    "ぅ",
    "ぇ",
    "ぉ",
    "ゃ",
    "ゅ",
    "ょ",
    "っ",
];

var whatDoIKnow = [
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
    'が','ぎ','ぐ','げ','ご',
    'ざ','じ','ず','ぜ','ぞ',
    'だ','ぢ','づ','で','ど',
    'ば','び','ぶ','べ','ぼ',
    'ぱ','ぴ','ぷ','ぺ','ぽ',
    'ゔ', // vu (bu)
    'きゃ', 'きゅ', 'きょ',
    'しゃ', 'しゅ', 'しょ',
    'ちゃ', 'ちゅ', 'ちょ',
    'にゃ', 'にゅ', 'にょ',
    'ひゃ', 'ひゅ', 'ひょ',
    'みゃ', 'みゅ', 'みょ',
    'りゃ', 'りゅ', 'りょ',
    'ぎゃ', 'ぎゅ', 'ぎょ',
    'じゃ', 'じゅ', 'じょ',
    'びゃ', 'びゅ', 'びょ',
    'ぴゃ', 'ぴゅ', 'ぴょ',
];

var kanaDisplayStructure = [
    [ 'あ', 'い', 'う', 'え', 'お' ],
    [ 'か', 'き', 'く', 'け', 'こ' ],
    [ 'さ', 'し', 'す', 'せ', 'そ' ],
    [ 'た', 'ち', 'つ', 'て', 'と' ],
    [ 'な', 'に', 'ぬ', 'ね', 'の' ],
    [ 'は', 'ひ', 'ふ', 'へ', 'ほ' ],
    [ 'ま', 'み', 'む', 'め', 'も' ],
    [ 'や', 'ゆ', 'よ' ],
    [ 'ら', 'り', 'る', 'れ', 'ろ' ],
    [ 'わ', 'を' ],
    [ 'ん' ], 
    // end column 0
    [ 'が','ぎ','ぐ','げ','ご' ],
    [ 'ざ','じ','ず','ぜ','ぞ' ],
    [ 'だ','ぢ','づ','で','ど' ],
    [ 'ば','び','ぶ','べ','ぼ' ],
    [ 'ぱ','ぴ','ぷ','ぺ','ぽ' ],
    [ 'ゔ' ], // vu (bu )
    // end column 1
    [ 'きゃ', 'きゅ', 'きょ' ],
    [ 'しゃ', 'しゅ', 'しょ' ],
    [ 'ちゃ', 'ちゅ', 'ちょ' ],
    [ 'にゃ', 'にゅ', 'にょ' ],
    [ 'ひゃ', 'ひゅ', 'ひょ' ],
    [ 'みゃ', 'みゅ', 'みょ' ],
    [ 'りゃ', 'りゅ', 'りょ' ],
    [ 'ぎゃ', 'ぎゅ', 'ぎょ' ],
    [ 'じゃ', 'じゅ', 'じょ' ],
    [ 'びゃ', 'びゅ', 'びょ' ],
    [ 'ぴゃ', 'ぴゅ', 'ぴょ' ],
    // end column 2
];

var kanaDisplayStructureColumnEndIndices = [11, 17, 28]

var HIRAGANA_START = 0x3041;
var HIRAGANA_END = 0x3096;
var KATAKANA_START = 0x30A1;
var KATAKANA_END = 0x30FA;
var SLIDE_ANIM_MS = 200;
var KANA_FILL_COUNT = 20;

var kanaAttemptCount = KANA_FILL_COUNT;
var maxMostRecentCharactersWidths = 20;

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

var isCharEnglishSpecialToken  = function(char) {
    return englishToJapaneseSpecialTokens[char] != null;
};

var isCharJapaneseSpecialToken = function(char) {
    var result = false;
    for(key in englishToJapaneseSpecialTokens)
    {
        var JapaneseChars = englishToJapaneseSpecialTokens[key];
        if(JapaneseChars.contains(char))
        {
            result = true;
            break;
        }
    }
    return result;
};

var _isCharNotKana = function (char) {
    return !isCharHiragana(char) && !isCharKatakana(char);
};

var isStringTypeable= function(str) {
    var isValid= true;
    for(var k= 0; isValid && (k < str.length); ++k)
    {
        isValid = 
            isCharHiragana(str[k]) || 
            isCharKatakana(str[k]) ||
            isCharJapaneseSpecialToken(str[k]);
    }
    return isValid;
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
    var hiragana = romajiToHiragana[romaji];
    var isHiragana = hiragana != null;
    
    if (!isHiragana)
    {
        // check if it's a special character
        var whitespace= englishToJapaneseSpecialTokens[romaji];
        return (!whitespace) ? null : whitespace;
    }
    // must return an array
    return isKatakanaMode() ? [hiraganaToKatakana(hiragana)] : [hiragana];
};

var kanaToRomaji = function (kana) {
    var hiraganaChar = (isCharHiragana(kana) ? kana : katakanaToHiragana(kana));
    var romaji = hiraganaToRomaji[hiraganaChar][0];
    return romaji;
};

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function isInfinityMode() {
    return $('#infinity-switch').is(':checked');
}

function isWordMode() {
    return $('#word-mode-switch').is(':checked');
}

function isHiraganaMode() {
    return $('input[name="kana"]:checked').val() == 'hiragana';
}

function isKatakanaMode() {
    return $('input[name="kana"]:checked').val() == 'katakana';
}

function getListOfSelectedKana() {
    return $('.kana-selection.btn-grey.active').map(function(){
        return $.trim($(this).text());
     }).get();
}

function getRandKana(listOfKana) {
    return listOfKana[rand(0, listOfKana.length)];
}

function getRandWord(listOfWords){
    return listOfWords[rand(0, listOfWords.length)];
}

function getListOfRandomSelectedKana(selectedKanaList) {
    var output = [];
    
    for (var i = 0; i < KANA_FILL_COUNT; i++) {
        var kanaChar = getRandKana(selectedKanaList);
        kanaChar = isKatakanaMode() ? hiraganaToKatakana(kanaChar) : kanaChar;
        output.push(kanaChar);
    }

    return output;
}

function getListOfRandomWords(selectedKanaList){
    var output = [];
    for (var i = 0; i < KANA_FILL_COUNT;) {
        var randWord= getRandWord(wordCorpus).jap;
        if(isStringTypeable(randWord))
        {
            output.push(randWord);
            i += randWord.length;
        }
        else
        {
            console.log("Cannot Type: " + randWord);
        }
    }
    return output;
}

function clearKana() {
    $('.kana-container').html('').attr('style', '');
}

function fillKana() {
    if(isWordMode())
    {
        var selectedKanaList = getListOfSelectedKana();
        var randWordList= getListOfRandomWords(selectedKanaList);
        for (var i = 0; i < randWordList.length; i++) {
            for (var k = 0; k < randWordList[i].length; k++) {
                $('.kana-container').append('<span class="white">' + randWordList[i][k] + '</span>');
            }
            $('.kana-container').append('<span class="white">。</span>');
        }
    }
    else // Kana Mode
    {
        var selectedKanaList = getListOfSelectedKana();
        var randKanaList= getListOfRandomSelectedKana(selectedKanaList);
        for (var i = 0; i < randKanaList.length; i++) {
            $('.kana-container').append('<span class="white">' + randKanaList[i] + '</span>');
        }
    }
}

function getKanaCountString() {
    if (isInfinityMode()) {
        return kanaAttemptCount.toString();
    }
    else {
        return KANA_FILL_COUNT.toString();
    }
}

$('body, html').click(function () {
    $('.romaji-container').focus();
})

var score = 0, time, timer;
var started = false;


function resetKanaAttemptCount() {
    kanaAttemptCount = isInfinityMode() ? 0 : KANA_FILL_COUNT;
}

function incrementKanaAttemptCount() {
    if (isInfinityMode())
    {
        ++kanaAttemptCount;
    }
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

function updateScoreBoard() {
    $('.score').html(score + ' / ' + kanaAttemptCount);
}

function sumOfMostRecentCharacterWidths() {
    return mostRecentCharactersWidths.reduce(function (acc, val) { return acc + val; }, 0);
}

var sumOFAllShifts = 0;

function shiftKanaLeft(widthOfCharacter) {
    sumOFAllShifts += widthOfCharacter;

    if ($('.kana-container').is(':animated')) {
        $('.kana-container').finish();
    }
    $('.kana-container').animate({
        'margin-left': '-=' + widthOfCharacter + 'px'
    }, SLIDE_ANIM_MS);
}

function shiftKanaRightSecretly() {
    //mostRecentCharactersWidths.reduce(function(acc, val) { return acc + val;}, 0);

    var currentShift = parseInt($('.kana-container').css('margin-left'), 10);

    var oldKana = $('.kana-container .red,.green').slice(0, -KANA_FILL_COUNT);

    var totalWidthOfRemoved = 0;
    oldKana.each(function () { totalWidthOfRemoved += $(this).width(); });

    oldKana.remove();

    $('.kana-container').css('margin-left', (currentShift + totalWidthOfRemoved) + 'px');
}

function startTimer()
{
    time = new Date()
    timer = setInterval(function () {
        var deltaTime = (+new Date - time) / 1000;
        var s = Math.floor(deltaTime % 60);
        if (s < 10)
            s = '0' + s;
        var m = Math.floor(deltaTime / 60 % 60);
        $('.time').text(m + ':' + s);
    }, 1000);
}

function updateSuccessfulKanaEntry(currentKanaElement)
{
    var currentKana = currentKanaElement.text();
    var currentRomaji = kanaToRomaji(currentKana);

    var kanaWidth = currentKanaElement.addClass('green').removeClass('white').width();
    shiftKanaLeft(kanaWidth);

    if(!isCharJapaneseSpecialToken(currentKana)) 
    {
        ++score;
        incrementKanaAttemptCount();
        updateScoreBoard();
    }
}

function updateFailedKanaEntry(currentKanaElement)
{
    var currentKana = currentKanaElement.text();
    var currentRomaji = kanaToRomaji(currentKana);

    // place the answer above the failed character, turn it red.
    var kanaWidth = currentKanaElement
        .append('<span class="small_above">' + currentRomaji + '')
        .addClass('red')
        .removeClass('white')
        .width();
    shiftKanaLeft(kanaWidth);
  
    if(!isCharJapaneseSpecialToken(currentKana)) 
    {
        incrementKanaAttemptCount();
        updateScoreBoard();
    }
}

function isRomajiStartOfKana(typedCharacters)
{
    for(var key in romajiToHiragana)
    {
        if(key.startsWith(typedCharacters))
        {
            return true;
        }
    }
    return false;
}

$('.romaji-container').keyup(function () {
    // kick up the timer after the user starts typing.
    if (!timer)
    {
        startTimer();
    }

    if (isInfinityMode())
    {
        var numKanaLeft = $('.white').length;
        if (numKanaLeft < 30) 
        {
            fillKana(); // refill
        }
        else if ($('.kana-container span').length > 100) 
        {
            if ($('.kana-container').is(':animated')) 
            {
                $('.kana-container').promise().done(shiftKanaRightSecretly); // shift after the animation finishes
            }
            else 
            {
                shiftKanaRightSecretly(); // shift now
            }
        }
    }

    var typedCharacters= $(this).text();
    var kanaTyped = romajiToKana(typedCharacters);

    var currentKanaElement = $('.white').first();
    var currentKana = currentKanaElement.text();

    var currentRomaji = kanaToRomaji(currentKana);

    if(typedCharacters.length < currentRomaji.length)
    {
        // DO NOTHING. No character data OR the user hasn't typed enough.
    }
    else if (kanaTyped) 
    {
        console.log("Typed|Current: ", kanaTyped[0], "|", currentKana);
        
        if (kanaTyped.contains(currentKana)) 
        {
            // SUCCESS
            $(this).html(''); // clear the typed character
            updateSuccessfulKanaEntry(currentKanaElement);
        } 
        else
        {
            // FAILURE
            $(this).html(''); // clear the typed character
            updateFailedKanaEntry(currentKanaElement);
        }
    }
    else if(!isRomajiStartOfKana(typedCharacters))
    {
        // THAT WASN'T A KANA
        $(this).html(''); // clear the typed character
        updateFailedKanaEntry(currentKanaElement);
    }

    var numKanaLeft= $('.white').length;
    if (numKanaLeft == 0) 
    {
        end_typing()  // RESTORE MENU
    }
});

function handleKanaGroupCheckboxOnClick(event) {
    var isChecked = $(this).prop('checked');
    $(this).parents('label').siblings('button').each(function () {
        if (isChecked) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
}

function handleKanaSelectionOnClick(event) {
    // stop anything else from handling this event
    event.preventDefault();
    event.stopImmediatePropagation();

    // toggle the kana being active
    $(this).toggleClass('active');

    // set the row's checkbox to true if at least one is active, false if none are active
    var atLeastOneActive = $(this).parents('div.row').children('button').hasClass('active');
    var kanagroupCheckbox = $(this).siblings('label').find('input');
    kanagroupCheckbox.prop('checked', atLeastOneActive);
}

// construct all the kana buttons for each column
$('.kana-selection-container > .row > .col').each(function(index) {

    var startStructureIndex= (index > 0) ? kanaDisplayStructureColumnEndIndices[index-1] : 0;
    var endStructureIndex= kanaDisplayStructureColumnEndIndices[index];
    
    if(endStructureIndex)
    {
        for (var rowIndex= startStructureIndex; rowIndex < endStructureIndex; ++rowIndex)
        {
            var rowElement = $('<div></div>', {"class":"row", id: (("kanaGroup" + index) + rowIndex)});

            var checkboxLabel = $("<label></label>", {"class": "checkbox check-kanagroup"});
            var checkboxInput = $("<input>", {"type":"checkbox", "value":"", "id":"group1", "data-toggle":"checkbox", "checked":"true"});
            checkboxInput.click(handleKanaGroupCheckboxOnClick);
            $(checkboxLabel).append(checkboxInput);
            rowElement.append(checkboxLabel);

            var rowKana = kanaDisplayStructure[rowIndex];
            for (var kanaIndex= 0; kanaIndex < rowKana.length; ++kanaIndex)
            {
                var kanaButton = $("<button>", {"class": "btn btn-primary btn-huge kana-selection btn-grey active", "data-toggle":"button", "aria-pressed":"false", "autocomplete":"off"});
                kanaButton.click(handleKanaSelectionOnClick);
                kanaButton.append(rowKana[kanaIndex]);

                rowElement.append(kanaButton);
            }

            $(this).append(rowElement);
        }
    }
    else
    {
        console.log("bad column index for kana-selection-container");
    }
});

// By default, disable the digraphs (Yōon)
$('.check-kanagroup').each(function(index) {
    if(index >= kanaDisplayStructureColumnEndIndices[1])
    {
        this.click();
    }
})

// swap the kana selectors from hiragana to katakana when the radio button changes.
$('input[name="kana"]').click(function()
{
    $('.kana-selection').each(
        function () 
        { 
            var currentText = $(this).text();
            var convertedText = isHiraganaMode() ? katakanaToHiragana(currentText) : hiraganaToKatakana(currentText);
            $(this).text(convertedText);
        });
});