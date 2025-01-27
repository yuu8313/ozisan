/* This file contains AI-related transformation rules */
const priorityRules = [
  [/こんにちは/g, "こんにちは〜❤️"],
  [/おはよう/g, "おはよ〜！😘"],
  [/こんばんは/g, "こんばんは〜😊"],
  [/さようなら/g, "バイバイ〜😘💕"],
  [/お疲れ様です/g, "おつかれさま〜❤️"],
  [/失礼します/g, "失礼しまちゅ〜💕"],
  [/申し訳ありません/g, "ごめんちゅ…🥺"],
  [/了解しました/g, "りょ〜かい😉"],
  [/お世話になります/g, "よろしくちゅ〜💕"],
  [/承知しました/g, "承知だよ〜ん😘"],
  [/おやすみなさい/g, "おやちゅみ〜💤😘"],
  [/ただいま/g, "ただいま〜❤️"],
  [/お帰りなさい/g, "おかえり〜😘"],
  [/いってきます/g, "いってきまちゅ〜💕"],
  [/いってらっしゃい/g, "いってらっちゃい〜😘"]
];

const endingRules = [
  [/です。$/g, "だよ〜ん❤️"],
  [/ます。$/g, "まちゅ〜💕"],
  [/でした。$/g, "だったよ〜ん😊"],
  [/ました。$/g, "ましたぁ〜💖"],
  [/だ。$/g, "だよ〜😘"],
  [/である。$/g, "だよ〜ん❤️"],
  [/のです。$/g, "のよ〜ん😊"],
  [/ください。$/g, "くだちゃい💕"],
  [/ですね。$/g, "だよね〜😘"],
  [/ますね。$/g, "まちゅね〜💕"],
  [/だった。$/g, "だったのよ〜ん💕"],
  [/ですか。$/g, "かな〜？😘"],
  [/ますか。$/g, "まちゅか〜？❤️"],
  [/のか。$/g, "のかな〜？😊"],
  [/かもしれません。$/g, "かもしれないよ〜ん💕"]
];

const wordRules = [
  [/私|わたし|あたし|わたくし|自分|俺|おれ|わし|余|拙者|小生|拙者|某|手前/g, "僕"],
  [/あなた|君|きみ|おまえ|お前|汝|貴方|貴女|あんた|そちら|そなた|あなた様|君様|きみ様|お前様|汝様/g, "キミ"],
  [/彼|かれ|あいつ|こいつ|そいつ|彼氏|かれし|あの人|その人|この人/g, "アイツ"],
  [/彼女|かのじょ|あの子|その子|この子|彼女さん|かのじょさん|あの方|その方|この方/g, "アノコ"],
  [/皆様|みなさま|皆さん|みなさん|諸君|各位|かたがた|方々|人々|諸氏|皆様方|みなさまがた|皆さん方|みなさんがたがた|諸君方|各位様方|かたがたさまがた|方々様方|人々様方|諸氏様方/g, "みんな"],
  [/僕ら|私たち|我々|われわれ|自分たち/g, "ボクたち"],
  [/あなたたち|君たち|きみたち|お前たち|汝ら/g, "キミたち"],
  [/彼ら|かれら|あいつら|こいつら|そいつら/g, "アイツら"],
  [/彼女たち|かのじょたち|あの子たち|その子たち|この子たち/g, "アノコたち"],
  [/思います/g, "思うよ〜😊"],
  [/です/g, "だよ〜ん"],
  [/ます/g, "まちゅ"],
  [/<([^>]+)>さん/g, "<$1>ちゃん❤️"],
  [/\{([^}]+)\}/g, "【$1】✨"],
  [/\*([^>]+)\*/g, "$1💫"],
  [/~([^>]+)~/g, "$1💝"],
  [/\^([^>]+)\^/g, "$1🌟"],
  [/いいえ/g, "ちがうよ〜😅"],
  [/はい/g, "そうだよ〜ん😘"],
  [/すみません/g, "ごめんちゅ🥺"],
  [/ありがとう/g, "ありがと〜💕"],
  [/わかりました/g, "わかったよ〜ん😊"],
  [/お願いします/g, "お願いちゅる❤️"],
  [/疲れた/g, "つかれちゃった😫"],
  [/頑張/g, "がんば"],
  [/すごい/g, "すごーい✨"],
  [/うれしい|嬉しい/g, "うれぴ〜💕"],
  [/良い|いい/g, "ええ〜"],
  [/かわいい/g, "かわよ〜❤️"],
  [/美しい/g, "うつくしみ〜✨"],
  [/素敵/g, "ステキ〜💖"],
  [/大丈夫/g, "だいじょうぶだよ〜ん😊"],
  [/残念/g, "ざんねん〜😢"],
  [/楽しい/g, "たのしみ〜💕"],
  [/寂しい|悲しい/g, "かなちい〜😢"],
  [/待って/g, "まってまって〜💦"],
  [/本当/g, "ほんと〜に"],
  [/どうして/g, "なんでなの〜？🤔"],
  [/帰る/g, "かえっちゃう"],
  [/食べ/g, "もぐもぐ"],
  [/飲み/g, "ごくごく"],
  [/寝/g, "すやすや"],
  [/行く/g, "いっちゃう"],
  [/来る/g, "くるよ〜ん"],
  [/見る/g, "みちゃう"],
  [/聞く/g, "きいちゃう"],
  [/話す/g, "おしゃべりする"],
  [/考える/g, "かんがえちゃう"],
  [/できる/g, "できちゃう💪"],
  [/欲しい/g, "ほしみ〜🥺"],
  [/面白い/g, "おもしろみ〜😆"],
  [/驚いた/g, "びっくりん！😲"],
  [/忙しい/g, "いそがしみ〜💦"],
  [/眠い/g, "ねむねむ〜😴"],
  [/お腹すいた/g, "おなかぺこぺこ〜🍙"],
  [/頭痛い/g, "あたまいたいよ〜😫"],
  [/寒い/g, "さむさむ〜🥶"],
  [/暑い/g, "あちゅい〜🥵"]
];

const emojiRules = [
  [/！/g, "！😊"],
  [/\?/g, "？🤔"],
  [/。/g, "よ〜❤️"],
  [/…/g, "…😢"],
  [/笑/g, "😆"],
  [/泣/g, "😢"],
  [/汗/g, "💦"],
  [/怒/g, "😠"],
  [/驚/g, "😲"],
  [/照/g, "☺️"],
  [/困/g, "😅"],
  [/爆/g, "💥"]
];

const emojiCombos = [
  "🤔😘😃😆❓",
  "😎😂😅❤️❗",
  "❤️😎🤔💦",
  "😉😂❤️❗",
  "😊🤔💦❤️",
  "😎💦❤️❗"
];
function getRandomEmojiCombo() {
  const randomIndex = Math.floor(Math.random() * emojiCombos.length);
  return emojiCombos[randomIndex];
}
function preserveQuotedText(text) {
  const preserved = [];
  const pattern = /"([^"]+)"/g;
  const modifiedText = text.replace(pattern, (_, content) => {
    preserved.push(content);
    return `__PRESERVED${preserved.length - 1}__`;
  });
  return { text: modifiedText, preserved };
}
function restoreQuotedText(text, preserved) {
  let result = text;
  preserved.forEach((content, index) => {
    result = result.replace(`__PRESERVED${index}__`, `"${content}"`);
  });
  return result;
}
function getRandomEndingEmoji() {
  const endingEmojis = ["❤️", "💕", "😊", "✨", "💝", "🥰", "💫", "😘"];
  const randomIndex = Math.floor(Math.random() * endingEmojis.length);
  return endingEmojis[randomIndex];
}
function convertToOjisan(text) {
  const { text: workingText, preserved } = preserveQuotedText(text);
  let result = workingText;
  result = result.replace(/\[コンボ\]/g, getRandomEmojiCombo());
  priorityRules.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });
  const allRules = [...endingRules, ...wordRules, ...emojiRules];
  allRules.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });
  result = restoreQuotedText(result, preserved);
  if (!result.match(/[❤️💕😊✨💝🥰💫😘]$/)) {
    result += getRandomEndingEmoji();
  }
  return result;
}

export { convertToOjisan as c };
/* End of AI transformation rules */
//# sourceMappingURL=ai-MDC4CiVt.js.map
