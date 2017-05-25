/* ============================================================
 * type-kana
 * ============================================================ */
var romajiToHiragana = {
"a":"あ",
"i":"い",
"u":"う",
"e":"え",
"o":"お",
"yi":"い",
"wu":"う",
"whu":"う",
"xa":"ぁ",
"xi":"ぃ",
"xu":"ぅ",
"xe":"ぇ",
"xo":"ぉ",
"xyi":"ぃ",
"xye":"ぇ",
"ye":"いぇ",
"wha":"うぁ",
"whi":"うぃ",
"whe":"うぇ",
"who":"うぉ",
"wi":"うぃ",
"we":"うぇ",
"va":"ゔぁ",
"vi":"ゔぃ",
"vu":"ゔ",
"ve":"ゔぇ",
"vo":"ゔぉ",
"vya":"ゔゃ",
"vyi":"ゔぃ",
"vyu":"ゔゅ",
"vye":"ゔぇ",
"vyo":"ゔょ",
"ka":"か",
"ki":"き",
"ku":"く",
"ke":"け",
"ko":"こ",
"lka":"ヵ",
"lke":"ヶ",
"xka":"ヵ",
"xke":"ヶ",
"kya":"きゃ",
"kyi":"きぃ",
"kyu":"きゅ",
"kye":"きぇ",
"kyo":"きょ",
"qya":"くゃ",
"qyu":"くゅ",
"qyo":"くょ",
"qwa":"くぁ",
"qwi":"くぃ",
"qwu":"くぅ",
"qwe":"くぇ",
"qwo":"くぉ",
"qa":"くぁ",
"qi":"くぃ",
"qe":"くぇ",
"qo":"くぉ",
"kwa":"くぁ",
"qyi":"くぃ",
"qye":"くぇ",
"ga":"が",
"gi":"ぎ",
"gu":"ぐ",
"ge":"げ",
"go":"ご",
"gya":"ぎゃ",
"gyi":"ぎぃ",
"gyu":"ぎゅ",
"gye":"ぎぇ",
"gyo":"ぎょ",
"gwa":"ぐぁ",
"gwi":"ぐぃ",
"gwu":"ぐぅ",
"gwe":"ぐぇ",
"gwo":"ぐぉ",
"sa":"さ",
"si":"し",
"shi":"し",
"su":"す",
"se":"せ",
"so":"そ",
"za":"ざ",
"zi":"じ",
"zu":"ず",
"ze":"ぜ",
"zo":"ぞ",
"ji":"じ",
"sya":"しゃ",
"syi":"しぃ",
"syu":"しゅ",
"sye":"しぇ",
"syo":"しょ",
"sha":"しゃ",
"shu":"しゅ",
"she":"しぇ",
"sho":"しょ",
"swa":"すぁ",
"swi":"すぃ",
"swu":"すぅ",
"swe":"すぇ",
"swo":"すぉ",
"zya":"じゃ",
"zyi":"じぃ",
"zyu":"じゅ",
"zye":"じぇ",
"zyo":"じょ",
"ja":"じゃ",
"ju":"じゅ",
"je":"じぇ",
"jo":"じょ",
"jya":"じゃ",
"jyi":"じぃ",
"jyu":"じゅ",
"jye":"じぇ",
"jyo":"じょ",
"ta":"た",
"ti":"ち",
"tu":"つ",
"te":"て",
"to":"と",
"chi":"ち",
"tsu":"つ",
"ltu":"っ",
"xtu":"っ",
"tya":"ちゃ",
"tyi":"ちぃ",
"tyu":"ちゅ",
"tye":"ちぇ",
"tyo":"ちょ",
"cha":"ちゃ",
"chu":"ちゅ",
"che":"ちぇ",
"cho":"ちょ",
"cya":"ちゃ",
"cyi":"ちぃ",
"cyu":"ちゅ",
"cye":"ちぇ",
"cyo":"ちょ",
"tsa":"つぁ",
"tsi":"つぃ",
"tse":"つぇ",
"tso":"つぉ",
"tha":"てゃ",
"thi":"てぃ",
"thu":"てゅ",
"the":"てぇ",
"tho":"てょ",
"twa":"とぁ",
"twi":"とぃ",
"twu":"とぅ",
"twe":"とぇ",
"two":"とぉ",
"da":"だ",
"di":"ぢ",
"du":"づ",
"de":"で",
"do":"ど",
"dya":"ぢゃ",
"dyi":"ぢぃ",
"dyu":"ぢゅ",
"dye":"ぢぇ",
"dyo":"ぢょ",
"dha":"でゃ",
"dhi":"でぃ",
"dhu":"でゅ",
"dhe":"でぇ",
"dho":"でょ",
"dwa":"どぁ",
"dwi":"どぃ",
"dwu":"どぅ",
"dwe":"どぇ",
"dwo":"どぉ",
"na":"な",
"ni":"に",
"nu":"ぬ",
"ne":"ね",
"no":"の",
"nya":"にゃ",
"nyi":"にぃ",
"nyu":"にゅ",
"nye":"にぇ",
"nyo":"にょ",
"ha":"は",
"hi":"ひ",
"hu":"ふ",
"he":"へ",
"ho":"ほ",
"fu":"ふ",
"hya":"ひゃ",
"hyi":"ひぃ",
"hyu":"ひゅ",
"hye":"ひぇ",
"hyo":"ひょ",
"fya":"ふゃ",
"fyu":"ふゅ",
"fyo":"ふょ",
"fwa":"ふぁ",
"fwi":"ふぃ",
"fwu":"ふぅ",
"fwe":"ふぇ",
"fwo":"ふぉ",
"fa":"ふぁ",
"fi":"ふぃ",
"fe":"ふぇ",
"fo":"ふぉ",
"fyi":"ふぃ",
"fye":"ふぇ",
"ba":"ば",
"bi":"び",
"bu":"ぶ",
"be":"べ",
"bo":"ぼ",
"bya":"びゃ",
"byi":"びぃ",
"byu":"びゅ",
"bye":"びぇ",
"byo":"びょ",
"pa":"ぱ",
"pi":"ぴ",
"pu":"ぷ",
"pe":"ぺ",
"po":"ぽ",
"pya":"ぴゃ",
"pyi":"ぴぃ",
"pyu":"ぴゅ",
"pye":"ぴぇ",
"pyo":"ぴょ",
"ma":"ま",
"mi":"み",
"mu":"む",
"me":"め",
"mo":"も",
"mya":"みゃ",
"myi":"みぃ",
"myu":"みゅ",
"mye":"みぇ",
"myo":"みょ",
"ya":"や",
"yu":"ゆ",
"yo":"よ",
"xya":"ゃ",
"xyu":"ゅ",
"xyo":"ょ",
"ra":"ら",
"ri":"り",
"ru":"る",
"re":"れ",
"ro":"ろ",
"rya":"りゃ",
"ryi":"りぃ",
"ryu":"りゅ",
"rye":"りぇ",
"ryo":"りょ",
"la":"ら",
"li":"り",
"lu":"る",
"le":"れ",
"lo":"ろ",
"lya":"りゃ",
"lyi":"りぃ",
"lyu":"りゅ",
"lye":"りぇ",
"lyo":"りょ",
"wa":"わ",
"wo":"を",
"lwe":"ゎ",
"xwa":"ゎ",
"n":"ん",
"nn":"ん",
"n ":"ん",
"xn":"ん",
"ltsu":"っ"
};

var hiraganaToRomaji = {
"あ":["a"],
"い":["i","yi"],
"う":["u","wu","whu"],
"え":["e"],
"お":["o"],
"ぁ":["xa"],
"ぃ":["xi","xyi"],
"ぅ":["xu"],
"ぇ":["xe","xye"],
"ぉ":["xo"],
"いぇ":["ye"],
"うぁ":["wha"],
"うぃ":["whi","wi"],
"うぇ":["whe","we"],
"うぉ":["who"],
"ゔぁ":["va"],
"ゔぃ":["vi","vyi"],
"ゔ":["vu"],
"ゔぇ":["ve","vye"],
"ゔぉ":["vo"],
"ゔゃ":["vya"],
"ゔゅ":["vyu"],
"ゔょ":["vyo"],
"か":["ka"],
"き":["ki"],
"く":["ku"],
"け":["ke"],
"こ":["ko"],
"ヵ":["lka","xka"],
"ヶ":["lke","xke"],
"きゃ":["kya"],
"きぃ":["kyi"],
"きゅ":["kyu"],
"きぇ":["kye"],
"きょ":["kyo"],
"くゃ":["qya"],
"くゅ":["qyu"],
"くょ":["qyo"],
"くぁ":["qwa","qa","kwa"],
"くぃ":["qwi","qi","qyi"],
"くぅ":["qwu"],
"くぇ":["qwe","qe","qye"],
"くぉ":["qwo","qo"],
"が":["ga"],
"ぎ":["gi"],
"ぐ":["gu"],
"げ":["ge"],
"ご":["go"],
"ぎゃ":["gya"],
"ぎぃ":["gyi"],
"ぎゅ":["gyu"],
"ぎぇ":["gye"],
"ぎょ":["gyo"],
"ぐぁ":["gwa"],
"ぐぃ":["gwi"],
"ぐぅ":["gwu"],
"ぐぇ":["gwe"],
"ぐぉ":["gwo"],
"さ":["sa"],
"し":["si","shi"],
"す":["su"],
"せ":["se"],
"そ":["so"],
"ざ":["za"],
"じ":["zi","ji"],
"ず":["zu"],
"ぜ":["ze"],
"ぞ":["zo"],
"しゃ":["sya","sha"],
"しぃ":["syi"],
"しゅ":["syu","shu"],
"しぇ":["sye","she"],
"しょ":["syo","sho"],
"すぁ":["swa"],
"すぃ":["swi"],
"すぅ":["swu"],
"すぇ":["swe"],
"すぉ":["swo"],
"じゃ":["zya","ja","jya"],
"じぃ":["zyi","jyi"],
"じゅ":["zyu","ju","jyu"],
"じぇ":["zye","je","jye"],
"じょ":["zyo","jo","jyo"],
"た":["ta"],
"ち":["ti","chi"],
"つ":["tu","tsu"],
"て":["te"],
"と":["to"],
"っ":["ltu","xtu","ltsu"],
"ちゃ":["tya","cha","cya"],
"ちぃ":["tyi","cyi"],
"ちゅ":["tyu","chu","cyu"],
"ちぇ":["tye","che","cye"],
"ちょ":["tyo","cho","cyo"],
"つぁ":["tsa"],
"つぃ":["tsi"],
"つぇ":["tse"],
"つぉ":["tso"],
"てゃ":["tha"],
"てぃ":["thi"],
"てゅ":["thu"],
"てぇ":["the"],
"てょ":["tho"],
"とぁ":["twa"],
"とぃ":["twi"],
"とぅ":["twu"],
"とぇ":["twe"],
"とぉ":["two"],
"だ":["da"],
"ぢ":["di"],
"づ":["du"],
"で":["de"],
"ど":["do"],
"ぢゃ":["dya"],
"ぢぃ":["dyi"],
"ぢゅ":["dyu"],
"ぢぇ":["dye"],
"ぢょ":["dyo"],
"でゃ":["dha"],
"でぃ":["dhi"],
"でゅ":["dhu"],
"でぇ":["dhe"],
"でょ":["dho"],
"どぁ":["dwa"],
"どぃ":["dwi"],
"どぅ":["dwu"],
"どぇ":["dwe"],
"どぉ":["dwo"],
"な":["na"],
"に":["ni"],
"ぬ":["nu"],
"ね":["ne"],
"の":["no"],
"にゃ":["nya"],
"にぃ":["nyi"],
"にゅ":["nyu"],
"にぇ":["nye"],
"にょ":["nyo"],
"は":["ha"],
"ひ":["hi"],
"ふ":["hu","fu"],
"へ":["he"],
"ほ":["ho"],
"ひゃ":["hya"],
"ひぃ":["hyi"],
"ひゅ":["hyu"],
"ひぇ":["hye"],
"ひょ":["hyo"],
"ふゃ":["fya"],
"ふゅ":["fyu"],
"ふょ":["fyo"],
"ふぁ":["fwa","fa"],
"ふぃ":["fwi","fi","fyi"],
"ふぅ":["fwu"],
"ふぇ":["fwe","fe","fye"],
"ふぉ":["fwo","fo"],
"ば":["ba"],
"び":["bi"],
"ぶ":["bu"],
"べ":["be"],
"ぼ":["bo"],
"びゃ":["bya"],
"びぃ":["byi"],
"びゅ":["byu"],
"びぇ":["bye"],
"びょ":["byo"],
"ぱ":["pa"],
"ぴ":["pi"],
"ぷ":["pu"],
"ぺ":["pe"],
"ぽ":["po"],
"ぴゃ":["pya"],
"ぴぃ":["pyi"],
"ぴゅ":["pyu"],
"ぴぇ":["pye"],
"ぴょ":["pyo"],
"ま":["ma"],
"み":["mi"],
"む":["mu"],
"め":["me"],
"も":["mo"],
"みゃ":["mya"],
"みぃ":["myi"],
"みゅ":["myu"],
"みぇ":["mye"],
"みょ":["myo"],
"や":["ya"],
"ゆ":["yu"],
"よ":["yo"],
"ゃ":["xya"],
"ゅ":["xyu"],
"ょ":["xyo"],
"ら":["ra","la"],
"り":["ri","li"],
"る":["ru","lu"],
"れ":["re","le"],
"ろ":["ro","lo"],
"りゃ":["rya","lya"],
"りぃ":["ryi","lyi"],
"りゅ":["ryu","lyu"],
"りぇ":["rye","lye"],
"りょ":["ryo", "lyo"],
"わ":["wa"],
"を":["wo"],
"ゎ":["lwe", "xwa"],
"ん":["n","nn","n ","xn"]
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

var minKanaGroupIndex = 3;
var maxKanaGroupIndex = 3;
var numKana = 100;

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

var isCharInRange = function(char, start, end) {
    var code;
    code = char.charCodeAt(0);
    return ( start <= code && code <= end) ;
};

var isCharVowel = function(char, includeY) {
    var regexp;
    if (includeY == null) {
        includeY = true;
    }
    regexp = includeY ? /[aeiouy]/ : /[aeiou]/;
    return char.toLowerCase().charAt(0).search(regexp) !== -1;
};

var _isCharConsonant = function(char, includeY) {
    var regexp;
    if (includeY == null) {
        includeY = true;
    }
    regexp = includeY ? /[bcdfghjklmnpqrstvwxyz]/ : /[bcdfghjklmnpqrstvwxz]/;
    return char.toLowerCase().charAt(0).search(regexp) !== -1;
};

var isCharKatakana = function(char) {
    return isCharInRange(char, KATAKANA_START, KATAKANA_END);
};

var isCharHiragana = function(char) {
    return isCharInRange(char, HIRAGANA_START, HIRAGANA_END);
};

var isCharKana = function(char) {
    return isCharHiragana(char) || isCharKatakana(char);
};

var _isCharNotKana = function(char) {
    return !isCharHiragana(char) && !isCharKatakana(char);
};

var katakanaToHiragana = function(kata) {
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

var hiraganaToKatakana = function(hira) {
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

var romajiToKana = function(romaji) {
    var isKatakana = $('input[name="kana"]:checked').val() == 'katakana';
    var hiragana = romajiToHiragana[romaji];
    if (!hiragana)
        return null;
    return isKatakana ? hiraganaToKatakana(hiragana) : hiragana;
};

function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

Math.clamp = function(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

Math.increasing = function(a, b) {
    return a > b ? [b, a] : [a, b];
}

function getKanaGroupBeginIndex(kanaGroupIndex) {
    if (minKanaGroupIndex == 0)
        return 0;

    var groupIndex = Math.clamp((kanaGroupIndex - 1), 0, kanaGroupIndices.length - 1)
    return kanaGroupIndices[groupIndex];
}

function getKanaGroupEndIndex(kanaGroupIndex) {
    var groupIndex = Math.clamp(kanaGroupIndex, 0, kanaGroupIndices.length - 1)
    return kanaGroupIndices[groupIndex];
}

function getListOfKana() {
    return whatDoIKnow;
}

function getRandKana(listOfKana) {
    return listOfKana[rand(0, listOfKana.length - 1)];
}

$('body, html').click(function() {
    $('.romaji-container').focus();
})

var score = 0, time, timer;
var started = false;

$('.btn-start').click(function() {
    started = true;

    var parent= $(this).parent();

    $(this).parent().fadeOut(200, function() {

        $('.kana-container').html('').attr('style', '');
        var kanaList = getListOfKana();
        for (var i = 0; i < numKana; i++) {
            var kanaChar = getRandKana(kanaList);
            var isKatakana = $('input[name="kana"]:checked').val() == 'katakana';
            kanaChar = isKatakana ? hiraganaToKatakana(kanaChar) : kanaChar;

            $('.kana-container').append('<span class="white">' + kanaChar + '</span>');
        }

		$('.main-container').animate({
			'margin-top': '-150px'
		});

        $('.main-content').slideDown();
        $(".main-content:hidden:first").toggleClass('hidden').hide().fadeIn("slow", function() {
			$('.buttons-score').toggleClass('hidden').hide().fadeIn("fast");
			$('.romaji-container').attr('contenteditable', true).focus();

			$('.time').text('0:00');
			$('.score').text('0/100');
		});
    });
});

$('.romaji-container').keyup(function() {
    if (!timer) {
        time = +new Date()
        timer = setInterval(function() {
            var deltaTime = (+new Date - time) / 1000;
            var s = Math.floor(deltaTime % 60);
            if (s < 10)
                s = '0' + s;
            var m = Math.floor(deltaTime / 60 % 60);
            $('.time').text(m + ':' + s);
        }, 1000);
    }
    var kanaTyped = romajiToKana($(this).text());
    if (kanaTyped) {
        console.log(kanaTyped, $('.white').first().text());
        if (kanaTyped == $('.white').first().text()) {
            $(this).html('');
            var w = $('.white').first().addClass('green').removeClass('white').width();
            $('.kana-container').animate({
                'margin-left': '-=' + w + 'px'
            }, 200);
            $('.score').html(++score + ' / 100');
        } else if ($(this).html() !== 'n') {
            $(this).html('');
            var w = $('.white').first().addClass('red').removeClass('white').width();
            $('.kana-container').animate({
                'margin-left': '-=' + w + 'px'
            }, 200);
        }
    } else if (!(romajiToKana($(this).text() + 'a') || romajiToKana($(this).text() + 'ha'))) {
        console.log(romajiToKana($(this).html() + 'a'));
        $(this).html('');
        var w = $('.white').first().addClass('red').removeClass('white').width();
        $('.kana-container').animate({
            'margin-left': '-=' + w + 'px'
        }, 200);
    }
    if (!$('.white').length) {
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
        $('.buttons-start').fadeIn();
        $('.btn-start .start').text('Restart');

        started = false;
    }
});
