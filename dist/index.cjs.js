'use strict';

var words = ["A", "Aasgem", "Abfieseln", "Almrausch", "An", "Au", "Auf", "Auffisteign", "Baamwach", "Back", "Bavariae", "Bayer", "Beidl", "Berg", "Bia", "Biagadn", "Biakriagal", "Biaschlegl", "Biawambn", "Biazelt", "Bitt", "Bladl", "Blosmusi", "Bradwurschtsemmal", "Breihaus", "Brezn", "Broadwurschtbudn", "Brodzeid", "Brotzeit", "Bua", "Buachbinda", "Buam", "Bussal", "Charivari", "Damischa", "Deandl", "Deandlgwand", "Des", "Di", "Diandldrahn", "Do", "Dog", "Edlweiss", "Engelgwand", "Enzian", "Ewig", "Fensdaln", "Fingahaggln", "Foidweg", "Freibia", "Fünferl", "Gams", "Gamsbart", "Gar", "Gaudi", "Gelbe", "Giasinga", "Gidarn", "Gipfe", "Gmiadlichkeit", "Goaßmaß", "God", "Godds", "Gott", "Graudwiggal", "Greaßt", "Greichats", "Griasd", "Griasnoggalsubbm", "Gscheckate", "Gschicht", "Gschmeidig", "Gstanzl", "Guglhupf", "Gwiass", "Habedehre", "Haberertanz", "Haferl", "Hawadere", "Heimatland", "Heiwog", "Hemad", "Hendl", "Hetschapfah", "Hi", "Hoam", "Hob", "Hoiwe", "I", "Im", "In", "Jodler", "Kaiwe", "Kimmt", "Kini", "Kirwa", "Klampfn", "Kneedl", "Koa", "Kuaschwanz", "Landla", "Ledahosn", "Leit", "Lem", "Leonhardifahrt", "Lewakaas", "Luja", "Ma", "Maderln", "Maibam", "Mamalad", "Marei", "Marterl", "Maß", "Maßkruag", "Mehra", "Meidromml", "Mim", "Mongdratzal", "Mordsgaudi", "Musi", "Namidog", "Nia", "Nimma", "Nix", "Oachkatzlschwoaf", "Obandeln", "Obandln", "Obazda", "Ohrwaschl", "Oim", "Prosd", "Prosit", "Radi", "Radl", "Radler", "Ramasuri", "Reiwadatschi", "Resi", "Rüam", "Samma", "Sauakraud", "Sauwedda", "Schaung", "Schbozal", "Schdarmbeaga", "Schdeckalfisch", "Schellnsau", "Schichtl", "Schmankal", "Schmarn", "Schnacksln", "Schneid", "Schorsch", "Schuabladdla", "Schwoanshaxn", "See", "Sei", "Semmlkneedl", "Sepp", "Servas", "Singan", "So", "Sodala", "Sog", "Sonn", "Spezi", "Spotzerl", "Spuiratz", "Steckerleis", "Stubn", "Suri", "Sünd", "Tag", "Trachtnhuat", "Umma", "Vergeltsgott", "Wanninger", "Watschnbaam", "Watschnpladdla", "Wea", "Weibaleid", "Weiznglasl", "Weißwiaschd", "Wia", "Wiesn", "Woibbadinga", "Wolpern", "Wos", "Wuascht", "Wurscht", "Wurschtsolod", "Xaver", "Zidern", "Zwedschgndadschi", "a", "aa", "aasgem", "aba", "abfieseln", "acht'n", "af", "allerweil", "am", "amoi", "an", "anbandeln", "aso", "auf", "auf'd", "auf'n", "auffi", "ausgähd", "auszutzeln", "aweng", "baamwach", "back", "baddscher", "barfuaßat", "basd", "beim", "beinand", "biawambn", "biazelt", "bin", "bissal", "bitt", "bittschön", "bloß", "blärrd", "boarischer", "bravs", "brodzeid", "brotzeit", "bussal", "charivari", "d'", "da", "daad", "dadst", "dahoam", "damischa", "daugn", "de", "dea", "deandlgwand", "ded", "dee", "dei", "denn", "der", "des", "di", "dijidiholleri", "do", "drei", "dringma", "du", "eam", "eana", "ebba", "eich", "enzian", "es", "etza", "ewig", "fei", "fensdaln", "fescha", "fias", "foahn", "freibia", "fui", "g'hupft", "gamsbart", "ganze", "gar", "gaudi", "gean", "geh", "gehd", "gehds", "gelbe", "gfoids", "gfreit", "ghupft", "gibt's", "glacht", "glei", "gmahde", "goaßmaß", "gor", "graudwiggal", "greana", "greaßt", "griagd", "griasd", "griaß", "großherzig", "gscheckate", "gscheid", "gscheit", "gschicht", "gschmeidig", "gsprunga", "gsuffa", "guad", "gwihss", "gwiss", "hab", "haferl", "hallelujah", "ham", "hawadere", "hea", "heid", "heitzdog", "helfgod", "hemad", "hera", "hetschapfah", "hi", "hinter'm", "hoam", "hob", "hod", "hog", "hogg", "hoggd", "hoid", "huift", "i", "iabaroi", "im", "imma", "in", "is", "ja", "jedza", "jo", "kenna", "kimmt", "kloan", "ko", "koa", "kost", "kuaschwanz", "kumm", "kummd", "kummt", "landla", "leck", "ledahosn", "legst", "lem", "liab", "liabs", "liberalitas", "lossn", "luja", "lustiga", "ma", "maibam", "marei", "marterl", "mas", "maßkruag", "measi", "mechad", "mehra", "mei", "meidromml", "mi", "midanand", "midananda", "middn", "midnand", "mim", "moan", "moand", "mog", "mogsd", "muas", "muass", "naa", "nacha", "nachad", "nackata", "narrisch", "ned", "need", "nei", "nia", "nieda", "nimma", "nimmds", "nix", "no", "noch", "nois", "nomoi", "o'ha", "oa", "oamoi", "oans", "oba", "obacht", "obandeln", "obandln", "ognudelt", "oiwei", "ollaweil", "om", "owe", "ozapfa", "pfenningguat", "pfiad", "pfundig", "prosd", "radi", "radler", "red", "resch", "sagrisch", "samma", "sammawiedaguad", "san", "sauakraud", "sauba", "sauwedda", "schaugn", "schdarmbeaga", "scheans", "schee", "schnacksln", "scho", "schoo", "schorsch", "schuabladdla", "schuf", "schüds", "sei", "sepp", "singan", "singd", "so", "sodala", "sog", "soi", "soweid", "sowos", "spernzaln", "spezi", "spotzerl", "trihöleridi", "um", "umananda", "umma", "unbandig", "und", "uns", "vasteh", "vo", "von", "vui", "waar", "wann", "wea", "weibaleid", "weida", "wia", "wiad", "wiavui", "wirds", "wo", "woar", "woass", "woaß", "wolln", "wolpern", "wos", "woschechta", "wui", "wuid", "wujn", "wurschtsolod", "z'dringa", "zamm", "zua", "zwoa", "zünftig"];

/**
 * The definition of bavariaIpsum function.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const bavariaIpsum = function (opts) {
  opts = opts || {};
  /**
   * Array of "all" available bavarian words.
   */

  const source = words;
  /**
   * Use start sentence
   */

  const useStartingSentence = opts.useStartingSentence || true;
  /**
   * The default starting sentence.
   */

  const startSentence = opts.startSentence || "Bavaria ipsum dolor sit amet";
  /**
   * Min limit of words in one sentence.
   */

  const minSentenceWords = opts.minSentenceWords || 2;
  /**
   * Max limit of words in one sentence.
   */

  const maxSentenceWords = opts.maxSentenceWords || 20;
  /**
   * The chance to show comma after next word.
   */

  const showCommaChance = opts.showCommaChance || 0.1;
  /**
   * Min limit of sentences in the paragraph.
   */

  const minParagraphSentences = opts.minParagraphSentences || 2;
  /**
   * Max limit of sentences in the paragraph.
   */

  const maxParagraphSentences = opts.maxParagraphSentences || 20;

  const generateWord = () => {
    return source[_getRandomInt(0, source.length - 1)];
  };
  /**
   * Generate random Bavarian sentence.
   */


  const generateSentence = (length = 0) => {
    let sentence = "";
    let i;
    length = length || _getRandomInt(minSentenceWords, maxSentenceWords);

    for (i = 0; i < length; ++i) {
      sentence += generateWord();
      sentence += _shouldShowComma() ? ", " : " ";
    }

    sentence = sentence.replace(/,?\s*$/, "");
    sentence += new RegExp("[?!.]$").test(sentence) ? "" : ".";
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };
  /**
   * Generate paragraph
   */


  const generateParagraph = length => {
    const sentences = []; // eslint-disable-next-line prefer-rest-params

    length = length || _getRandomInt(minParagraphSentences, maxParagraphSentences);
    let i;

    if (useStartingSentence === true) {
      sentences.push(startSentence);
      sentences[sentences.length - 1] += " ";
      sentences[sentences.length - 1] += generateSentence();
      --length;
    }

    for (i = 0; i < length; ++i) {
      sentences.push(generateSentence());
    }

    return sentences;
  };
  /**
   * Return `true` if comma should be shown after next word.
   */


  const _shouldShowComma = () => {
    return Math.random() < showCommaChance ? true : false;
  };
  /**
   * Return random int between min and max.
   */


  const _getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return {
    generateParagraph,
    generateSentence
  };
};

module.exports = bavariaIpsum;
