import React from "react";

import { NextPage } from "next";

import { firestore } from "../../services/firebase/client";

const pokemons = {
  data: [
    { no: 1, name: "フシギダネ", area: 0 },
    { no: 2, name: "フシギソウ", area: 0 },
    { no: 3, name: "フシギバナ", area: 0 },
    { no: 4, name: "ヒトカゲ", area: 0 },
    { no: 5, name: "リザード", area: 0 },
    { no: 6, name: "リザードン", area: 0 },
    { no: 7, name: "ゼニガメ", area: 0 },
    { no: 8, name: "カメール", area: 0 },
    { no: 9, name: "カメックス", area: 0 },
    { no: 10, name: "キャタピー", area: 0 },
    { no: 11, name: "トランセル", area: 0 },
    { no: 12, name: "バタフリー", area: 0 },
    { no: 13, name: "ビードル", area: 0 },
    { no: 14, name: "コクーン", area: 0 },
    { no: 15, name: "スピアー", area: 0 },
    { no: 16, name: "ポッポ", area: 0 },
    { no: 17, name: "ピジョン", area: 0 },
    { no: 18, name: "ピジョット", area: 0 },
    { no: 19, name: "コラッタ", area: 0 },
    { no: 20, name: "ラッタ", area: 0 },
    { no: 21, name: "オニスズメ", area: 0 },
    { no: 22, name: "オニドリル", area: 0 },
    { no: 23, name: "アーボ", area: 0 },
    { no: 24, name: "アーボック", area: 0 },
    { no: 25, name: "ピカチュウ", area: 0 },
    { no: 26, name: "ライチュウ", area: 0 },
    { no: 27, name: "サンド", area: 0 },
    { no: 28, name: "サンドパン", area: 0 },
    { no: 29, name: "ニドラン♀", area: 0 },
    { no: 30, name: "ニドリーナ", area: 0 },
    { no: 31, name: "ニドクイン", area: 0 },
    { no: 32, name: "ニドラン♂", area: 0 },
    { no: 33, name: "ニドリーノ", area: 0 },
    { no: 34, name: "ニドキング", area: 0 },
    { no: 35, name: "ピッピ", area: 0 },
    { no: 36, name: "ピクシー", area: 0 },
    { no: 37, name: "ロコン", area: 0 },
    { no: 38, name: "キュウコン", area: 0 },
    { no: 39, name: "プリン", area: 0 },
    { no: 40, name: "プクリン", area: 0 },
    { no: 41, name: "ズバット", area: 0 },
    { no: 42, name: "ゴルバット", area: 0 },
    { no: 43, name: "ナゾノクサ", area: 0 },
    { no: 44, name: "クサイハナ", area: 0 },
    { no: 45, name: "ラフレシア", area: 0 },
    { no: 46, name: "パラス", area: 0 },
    { no: 47, name: "パラセクト", area: 0 },
    { no: 48, name: "コンパン", area: 0 },
    { no: 49, name: "モルフォン", area: 0 },
    { no: 50, name: "ディグダ", area: 0 },
    { no: 51, name: "ダグトリオ", area: 0 },
    { no: 52, name: "ニャース", area: 0 },
    { no: 53, name: "ペルシアン", area: 0 },
    { no: 54, name: "コダック", area: 0 },
    { no: 55, name: "ゴルダック", area: 0 },
    { no: 56, name: "マンキー", area: 0 },
    { no: 57, name: "オコリザル", area: 0 },
    { no: 58, name: "ガーディ", area: 0 },
    { no: 59, name: "ウインディ", area: 0 },
    { no: 60, name: "ニョロモ", area: 0 },
    { no: 61, name: "ニョロゾ", area: 0 },
    { no: 62, name: "ニョロボン", area: 0 },
    { no: 63, name: "ケーシィ", area: 0 },
    { no: 64, name: "ユンゲラー", area: 0 },
    { no: 65, name: "フーディン", area: 0 },
    { no: 66, name: "ワンリキー", area: 0 },
    { no: 67, name: "ゴーリキー", area: 0 },
    { no: 68, name: "カイリキー", area: 0 },
    { no: 69, name: "マダツボミ", area: 0 },
    { no: 70, name: "ウツドン", area: 0 },
    { no: 71, name: "ウツボット", area: 0 },
    { no: 72, name: "メノクラゲ", area: 0 },
    { no: 73, name: "ドククラゲ", area: 0 },
    { no: 74, name: "イシツブテ", area: 0 },
    { no: 75, name: "ゴローン", area: 0 },
    { no: 76, name: "ゴローニャ", area: 0 },
    { no: 77, name: "ポニータ", area: 0 },
    { no: 78, name: "ギャロップ", area: 0 },
    { no: 79, name: "ヤドン", area: 0 },
    { no: 80, name: "ヤドラン", area: 0 },
    { no: 81, name: "コイル", area: 0 },
    { no: 82, name: "レアコイル", area: 0 },
    { no: 83, name: "カモネギ", area: 0 },
    { no: 84, name: "ドードー", area: 0 },
    { no: 85, name: "ドードリオ", area: 0 },
    { no: 86, name: "パウワウ", area: 0 },
    { no: 87, name: "ジュゴン", area: 0 },
    { no: 88, name: "ベトベター", area: 0 },
    { no: 89, name: "ベトベトン", area: 0 },
    { no: 90, name: "シェルダー", area: 0 },
    { no: 91, name: "パルシェン", area: 0 },
    { no: 92, name: "ゴース", area: 0 },
    { no: 93, name: "ゴースト", area: 0 },
    { no: 94, name: "ゲンガー", area: 0 },
    { no: 95, name: "イワーク", area: 0 },
    { no: 96, name: "スリープ", area: 0 },
    { no: 97, name: "スリーパー", area: 0 },
    { no: 98, name: "クラブ", area: 0 },
    { no: 99, name: "キングラー", area: 0 },
    { no: 100, name: "ビリリダマ", area: 0 },
    { no: 101, name: "マルマイン", area: 0 },
    { no: 102, name: "タマタマ", area: 0 },
    { no: 103, name: "ナッシー", area: 0 },
    { no: 104, name: "カラカラ", area: 0 },
    { no: 105, name: "ガラガラ", area: 0 },
    { no: 106, name: "サワムラー", area: 0 },
    { no: 107, name: "エビワラー", area: 0 },
    { no: 108, name: "ベロリンガ", area: 0 },
    { no: 109, name: "ドガース", area: 0 },
    { no: 110, name: "マタドガス", area: 0 },
    { no: 111, name: "サイホーン", area: 0 },
    { no: 112, name: "サイドン", area: 0 },
    { no: 113, name: "ラッキー", area: 0 },
    { no: 114, name: "モンジャラ", area: 0 },
    { no: 115, name: "ガルーラ", area: 0 },
    { no: 116, name: "タッツー", area: 0 },
    { no: 117, name: "シードラ", area: 0 },
    { no: 118, name: "トサキント", area: 0 },
    { no: 119, name: "アズマオウ", area: 0 },
    { no: 120, name: "ヒトデマン", area: 0 },
    { no: 121, name: "スターミー", area: 0 },
    { no: 122, name: "バリヤード", area: 0 },
    { no: 123, name: "ストライク", area: 0 },
    { no: 124, name: "ルージュラ", area: 0 },
    { no: 125, name: "エレブー", area: 0 },
    { no: 126, name: "ブーバー", area: 0 },
    { no: 127, name: "カイロス", area: 0 },
    { no: 128, name: "ケンタロス", area: 0 },
    { no: 129, name: "コイキング", area: 0 },
    { no: 130, name: "ギャラドス", area: 0 },
    { no: 131, name: "ラプラス", area: 0 },
    { no: 132, name: "メタモン", area: 0 },
    { no: 133, name: "イーブイ", area: 0 },
    { no: 134, name: "シャワーズ", area: 0 },
    { no: 135, name: "サンダース", area: 0 },
    { no: 136, name: "ブースター", area: 0 },
    { no: 137, name: "ポリゴン", area: 0 },
    { no: 138, name: "オムナイト", area: 0 },
    { no: 139, name: "オムスター", area: 0 },
    { no: 140, name: "カブト", area: 0 },
    { no: 141, name: "カブトプス", area: 0 },
    { no: 142, name: "プテラ", area: 0 },
    { no: 143, name: "カビゴン", area: 0 },
    { no: 144, name: "フリーザー", area: 0 },
    { no: 145, name: "サンダー", area: 0 },
    { no: 146, name: "ファイヤー", area: 0 },
    { no: 147, name: "ミニリュウ", area: 0 },
    { no: 148, name: "ハクリュー", area: 0 },
    { no: 149, name: "カイリュー", area: 0 },
    { no: 150, name: "ミュウツー", area: 0 },
    { no: 151, name: "ミュウ", area: 0 },
    { no: 152, name: "チコリータ", area: 1 },
    { no: 153, name: "ベイリーフ", area: 1 },
    { no: 154, name: "メガニウム", area: 1 },
    { no: 155, name: "ヒノアラシ", area: 1 },
    { no: 156, name: "マグマラシ", area: 1 },
    { no: 157, name: "バクフーン", area: 1 },
    { no: 158, name: "ワニノコ", area: 1 },
    { no: 159, name: "アリゲイツ", area: 1 },
    { no: 160, name: "オーダイル", area: 1 },
    { no: 161, name: "オタチ", area: 1 },
    { no: 162, name: "オオタチ", area: 1 },
    { no: 163, name: "ホーホー", area: 1 },
    { no: 164, name: "ヨルノズク", area: 1 },
    { no: 165, name: "レディバ", area: 1 },
    { no: 166, name: "レディアン", area: 1 },
    { no: 167, name: "イトマル", area: 1 },
    { no: 168, name: "アリアドス", area: 1 },
    { no: 169, name: "クロバット", area: 1 },
    { no: 170, name: "チョンチー", area: 1 },
    { no: 171, name: "ランターン", area: 1 },
    { no: 172, name: "ピチュー", area: 1 },
    { no: 173, name: "ピィ", area: 1 },
    { no: 174, name: "ププリン", area: 1 },
    { no: 175, name: "トゲピー", area: 1 },
    { no: 176, name: "トゲチック", area: 1 },
    { no: 177, name: "ネイティ", area: 1 },
    { no: 178, name: "ネイティオ", area: 1 },
    { no: 179, name: "メリープ", area: 1 },
    { no: 180, name: "モココ", area: 1 },
    { no: 181, name: "デンリュウ", area: 1 },
    { no: 182, name: "キレイハナ", area: 1 },
    { no: 183, name: "マリル", area: 1 },
    { no: 184, name: "マリルリ", area: 1 },
    { no: 185, name: "ウソッキー", area: 1 },
    { no: 186, name: "ニョロトノ", area: 1 },
    { no: 187, name: "ハネッコ", area: 1 },
    { no: 188, name: "ポポッコ", area: 1 },
    { no: 189, name: "ワタッコ", area: 1 },
    { no: 190, name: "エイパム", area: 1 },
    { no: 191, name: "ヒマナッツ", area: 1 },
    { no: 192, name: "キマワリ", area: 1 },
    { no: 193, name: "ヤンヤンマ", area: 1 },
    { no: 194, name: "ウパー", area: 1 },
    { no: 195, name: "ヌオー", area: 1 },
    { no: 196, name: "エーフィ", area: 1 },
    { no: 197, name: "ブラッキー", area: 1 },
    { no: 198, name: "ヤミカラス", area: 1 },
    { no: 199, name: "ヤドキング", area: 1 },
    { no: 200, name: "ムウマ", area: 1 },
    { no: 201, name: "アンノーン", area: 1 },
    { no: 202, name: "ソーナンス", area: 1 },
    { no: 203, name: "キリンリキ", area: 1 },
    { no: 204, name: "クヌギダマ", area: 1 },
    { no: 205, name: "フォレトス", area: 1 },
    { no: 206, name: "ノコッチ", area: 1 },
    { no: 207, name: "グライガー", area: 1 },
    { no: 208, name: "ハガネール", area: 1 },
    { no: 209, name: "ブルー", area: 1 },
    { no: 210, name: "グランブル", area: 1 },
    { no: 211, name: "ハリーセン", area: 1 },
    { no: 212, name: "ハッサム", area: 1 },
    { no: 213, name: "ツボツボ", area: 1 },
    { no: 214, name: "ヘラクロス", area: 1 },
    { no: 215, name: "ニューラ", area: 1 },
    { no: 216, name: "ヒメグマ", area: 1 },
    { no: 217, name: "リングマ", area: 1 },
    { no: 218, name: "マグマッグ", area: 1 },
    { no: 219, name: "マグカルゴ", area: 1 },
    { no: 220, name: "ウリムー", area: 1 },
    { no: 221, name: "イノムー", area: 1 },
    { no: 222, name: "サニーゴ", area: 1 },
    { no: 223, name: "テッポウオ", area: 1 },
    { no: 224, name: "オクタン", area: 1 },
    { no: 225, name: "デリバード", area: 1 },
    { no: 226, name: "マンタイン", area: 1 },
    { no: 227, name: "エアームド", area: 1 },
    { no: 228, name: "デルビル", area: 1 },
    { no: 229, name: "ヘルガー", area: 1 },
    { no: 230, name: "キングドラ", area: 1 },
    { no: 231, name: "ゴマゾウ", area: 1 },
    { no: 232, name: "ドンファン", area: 1 },
    { no: 233, name: "ポリゴン2", area: 1 },
    { no: 234, name: "オドシシ", area: 1 },
    { no: 235, name: "ドーブル", area: 1 },
    { no: 236, name: "バルキー", area: 1 },
    { no: 237, name: "カポエラー", area: 1 },
    { no: 238, name: "ムチュール", area: 1 },
    { no: 239, name: "エレキッド", area: 1 },
    { no: 240, name: "ブビィ", area: 1 },
    { no: 241, name: "ミルタンク", area: 1 },
    { no: 242, name: "ハピナス", area: 1 },
    { no: 243, name: "ライコウ", area: 1 },
    { no: 244, name: "エンテイ", area: 1 },
    { no: 245, name: "スイクン", area: 1 },
    { no: 246, name: "ヨーギラス", area: 1 },
    { no: 247, name: "サナギラス", area: 1 },
    { no: 248, name: "バンギラス", area: 1 },
    { no: 249, name: "ルギア", area: 1 },
    { no: 250, name: "ホウオウ", area: 1 },
    { no: 251, name: "セレビィ", area: 1 },
    { no: 252, name: "キモリ", area: 2 },
    { no: 253, name: "ジュプトル", area: 2 },
    { no: 254, name: "ジュカイン", area: 2 },
    { no: 255, name: "アチャモ", area: 2 },
    { no: 256, name: "ワカシャモ", area: 2 },
    { no: 257, name: "バシャーモ", area: 2 },
    { no: 258, name: "ミズゴロウ", area: 2 },
    { no: 259, name: "ヌマクロー", area: 2 },
    { no: 260, name: "ラグラージ", area: 2 },
    { no: 261, name: "ポチエナ", area: 2 },
    { no: 262, name: "グラエナ", area: 2 },
    { no: 263, name: "ジグザグマ", area: 2 },
    { no: 264, name: "マッスグマ", area: 2 },
    { no: 265, name: "ケムッソ", area: 2 },
    { no: 266, name: "カラサリス", area: 2 },
    { no: 267, name: "アゲハント", area: 2 },
    { no: 268, name: "マユルド", area: 2 },
    { no: 269, name: "ドクケイル", area: 2 },
    { no: 270, name: "ハスボー", area: 2 },
    { no: 271, name: "ハスブレロ", area: 2 },
    { no: 272, name: "ルンパッパ", area: 2 },
    { no: 273, name: "タネボー", area: 2 },
    { no: 274, name: "コノハナ", area: 2 },
    { no: 275, name: "ダーテング", area: 2 },
    { no: 276, name: "スバメ", area: 2 },
    { no: 277, name: "オオスバメ", area: 2 },
    { no: 278, name: "キャモメ", area: 2 },
    { no: 279, name: "ペリッパー", area: 2 },
    { no: 280, name: "ラルトス", area: 2 },
    { no: 281, name: "キルリア", area: 2 },
    { no: 282, name: "サーナイト", area: 2 },
    { no: 283, name: "アメタマ", area: 2 },
    { no: 284, name: "アメモース", area: 2 },
    { no: 285, name: "キノココ", area: 2 },
    { no: 286, name: "キノガッサ", area: 2 },
    { no: 287, name: "ナマケロ", area: 2 },
    { no: 288, name: "ヤルキモノ", area: 2 },
    { no: 289, name: "ケッキング", area: 2 },
    { no: 290, name: "ツチニン", area: 2 },
    { no: 291, name: "テッカニン", area: 2 },
    { no: 292, name: "ヌケニン", area: 2 },
    { no: 293, name: "ゴニョニョ", area: 2 },
    { no: 294, name: "ドゴーム", area: 2 },
    { no: 295, name: "バクオング", area: 2 },
    { no: 296, name: "マクノシタ", area: 2 },
    { no: 297, name: "ハリテヤマ", area: 2 },
    { no: 298, name: "ルリリ", area: 2 },
    { no: 299, name: "ノズパス", area: 2 },
    { no: 300, name: "エネコ", area: 2 },
    { no: 301, name: "エネコロロ", area: 2 },
    { no: 302, name: "ヤミラミ", area: 2 },
    { no: 303, name: "クチート", area: 2 },
    { no: 304, name: "ココドラ", area: 2 },
    { no: 305, name: "コドラ", area: 2 },
    { no: 306, name: "ボスゴドラ", area: 2 },
    { no: 307, name: "アサナン", area: 2 },
    { no: 308, name: "チャーレム", area: 2 },
    { no: 309, name: "ラクライ", area: 2 },
    { no: 310, name: "ライボルト", area: 2 },
    { no: 311, name: "プラスル", area: 2 },
    { no: 312, name: "マイナン", area: 2 },
    { no: 313, name: "バルビート", area: 2 },
    { no: 314, name: "イルミーゼ", area: 2 },
    { no: 315, name: "ロゼリア", area: 2 },
    { no: 316, name: "ゴクリン", area: 2 },
    { no: 317, name: "マルノーム", area: 2 },
    { no: 318, name: "キバニア", area: 2 },
    { no: 319, name: "サメハダー", area: 2 },
    { no: 320, name: "ホエルコ", area: 2 },
    { no: 321, name: "ホエルオー", area: 2 },
    { no: 322, name: "ドンメル", area: 2 },
    { no: 323, name: "バクーダ", area: 2 },
    { no: 324, name: "コータス", area: 2 },
    { no: 325, name: "バネブー", area: 2 },
    { no: 326, name: "ブーピッグ", area: 2 },
    { no: 327, name: "パッチール", area: 2 },
    { no: 328, name: "ナックラー", area: 2 },
    { no: 329, name: "ビブラーバ", area: 2 },
    { no: 330, name: "フライゴン", area: 2 },
    { no: 331, name: "サボネア", area: 2 },
    { no: 332, name: "ノクタス", area: 2 },
    { no: 333, name: "チルット", area: 2 },
    { no: 334, name: "チルタリス", area: 2 },
    { no: 335, name: "ザングース", area: 2 },
    { no: 336, name: "ハブネーク", area: 2 },
    { no: 337, name: "ルナトーン", area: 2 },
    { no: 338, name: "ソルロック", area: 2 },
    { no: 339, name: "ドジョッチ", area: 2 },
    { no: 340, name: "ナマズン", area: 2 },
    { no: 341, name: "ヘイガニ", area: 2 },
    { no: 342, name: "シザリガー", area: 2 },
    { no: 343, name: "ヤジロン", area: 2 },
    { no: 344, name: "ネンドール", area: 2 },
    { no: 345, name: "リリーラ", area: 2 },
    { no: 346, name: "ユレイドル", area: 2 },
    { no: 347, name: "アノプス", area: 2 },
    { no: 348, name: "アーマルド", area: 2 },
    { no: 349, name: "ヒンバス", area: 2 },
    { no: 350, name: "ミロカロス", area: 2 },
    {
      no: 351,
      name: [
        "ポワルン",
        "ポワルン(たいようのすがた)",
        "ポワルン(あまみずのすがた)",
        "ポワルン(ゆきぐものすがた)",
      ],
      area: 2,
    },
    // { no: 351, name: "ポワルン(たいようのすがた)", area: 2 },
    // { no: 351, name: "ポワルン(あまみずのすがた)", area: 2 },
    // { no: 351, name: "ポワルン(ゆきぐものすがた)", area: 2 },
    // { no: 352, name: "カクレオン", area: 2 },
    { no: 353, name: "カゲボウズ", area: 2 },
    { no: 354, name: "ジュペッタ", area: 2 },
    { no: 355, name: "ヨマワル", area: 2 },
    { no: 356, name: "サマヨール", area: 2 },
    { no: 357, name: "トロピウス", area: 2 },
    { no: 358, name: "チリーン", area: 2 },
    { no: 359, name: "アブソル", area: 2 },
    { no: 360, name: "ソーナノ", area: 2 },
    { no: 361, name: "ユキワラシ", area: 2 },
    { no: 362, name: "オニゴーリ", area: 2 },
    { no: 363, name: "タマザラシ", area: 2 },
    { no: 364, name: "トドグラー", area: 2 },
    { no: 365, name: "トドゼルガ", area: 2 },
    { no: 366, name: "パールル", area: 2 },
    { no: 367, name: "ハンテール", area: 2 },
    { no: 368, name: "サクラビス", area: 2 },
    { no: 369, name: "ジーランス", area: 2 },
    { no: 370, name: "ラブカス", area: 2 },
    { no: 371, name: "タツベイ", area: 2 },
    { no: 372, name: "コモルー", area: 2 },
    { no: 373, name: "ボーマンダ", area: 2 },
    { no: 374, name: "ダンバル", area: 2 },
    { no: 375, name: "メタング", area: 2 },
    { no: 376, name: "メタグロス", area: 2 },
    { no: 377, name: "レジロック", area: 2 },
    { no: 378, name: "レジアイス", area: 2 },
    { no: 379, name: "レジスチル", area: 2 },
    { no: 380, name: "ラティアス", area: 2 },
    { no: 381, name: "ラティオス", area: 2 },
    { no: 382, name: "カイオーガ", area: 2 },
    { no: 383, name: "グラードン", area: 2 },
    { no: 384, name: "レックウザ", area: 2 },
    { no: 385, name: "ジラーチ", area: 2 },
    { no: 386, name: "デオキシス", area: 2 },
    { no: 387, name: "ナエトル", area: 3 },
    { no: 388, name: "ハヤシガメ", area: 3 },
    { no: 389, name: "ドダイトス", area: 3 },
    { no: 390, name: "ヒコザル", area: 3 },
    { no: 391, name: "モウカザル", area: 3 },
    { no: 392, name: "ゴウカザル", area: 3 },
    { no: 393, name: "ポッチャマ", area: 3 },
    { no: 394, name: "ポッタイシ", area: 3 },
    { no: 395, name: "エンペルト", area: 3 },
    { no: 396, name: "ムックル", area: 3 },
    { no: 397, name: "ムクバード", area: 3 },
    { no: 398, name: "ムクホーク", area: 3 },
    { no: 399, name: "ビッパ", area: 3 },
    { no: 400, name: "ビーダル", area: 3 },
    { no: 401, name: "コロボーシ", area: 3 },
    { no: 402, name: "コロトック", area: 3 },
    { no: 403, name: "コリンク", area: 3 },
    { no: 404, name: "ルクシオ", area: 3 },
    { no: 405, name: "レントラー", area: 3 },
    { no: 406, name: "スボミー", area: 3 },
    { no: 407, name: "ロズレイド", area: 3 },
    { no: 408, name: "ズガイドス", area: 3 },
    { no: 409, name: "ラムパルド", area: 3 },
    { no: 410, name: "タテトプス", area: 3 },
    { no: 411, name: "トリデプス", area: 3 },
    { no: 412, name: "ミノムッチ", area: 3 },
    {
      no: 413,
      name: [
        "ミノマダム(くさきのミノ)",
        "ミノマダム(すなちのミノ)",
        "(ゴミのミノ)",
      ],
      area: 3,
    },
    { no: 414, name: "ガーメイル", area: 3 },
    { no: 415, name: "ミツハニー", area: 3 },
    { no: 416, name: "ビークイン", area: 3 },
    { no: 417, name: "パチリス", area: 3 },
    { no: 418, name: "ブイゼル", area: 3 },
    { no: 419, name: "フローゼル", area: 3 },
    { no: 420, name: "チェリンボ", area: 3 },
    { no: 421, name: "チェリム", area: 3 },
    { no: 422, name: "カラナクシ", area: 3 },
    { no: 423, name: "トリトドン", area: 3 },
    { no: 424, name: "エテボース", area: 3 },
    { no: 425, name: "フワンテ", area: 3 },
    { no: 426, name: "フワライド", area: 3 },
    { no: 427, name: "ミミロル", area: 3 },
    { no: 428, name: "ミミロップ", area: 3 },
    { no: 429, name: "ムウマージ", area: 3 },
    { no: 430, name: "ドンカラス", area: 3 },
    { no: 431, name: "ニャルマー", area: 3 },
    { no: 432, name: "ブニャット", area: 3 },
    { no: 433, name: "リーシャン", area: 3 },
    { no: 434, name: "スカンプー", area: 3 },
    { no: 435, name: "スカタンク", area: 3 },
    { no: 436, name: "ドーミラー", area: 3 },
    { no: 437, name: "ドータクン", area: 3 },
    { no: 438, name: "ウソハチ", area: 3 },
    { no: 439, name: "マネネ", area: 3 },
    { no: 440, name: "ピンプク", area: 3 },
    { no: 441, name: "ペラップ", area: 3 },
    { no: 442, name: "ミカルゲ", area: 3 },
    { no: 443, name: "フカマル", area: 3 },
    { no: 444, name: "ガバイト", area: 3 },
    { no: 445, name: "ガブリアス", area: 3 },
    { no: 446, name: "ゴンベ", area: 3 },
    { no: 447, name: "リオル", area: 3 },
    { no: 448, name: "ルカリオ", area: 3 },
    { no: 449, name: "ヒポポタス", area: 3 },
    { no: 450, name: "カバルドン", area: 3 },
    { no: 451, name: "スコルピ", area: 3 },
    { no: 452, name: "ドラピオン", area: 3 },
    { no: 453, name: "グレッグル", area: 3 },
    { no: 454, name: "ドクロッグ", area: 3 },
    { no: 455, name: "マスキッパ", area: 3 },
    { no: 456, name: "ケイコウオ", area: 3 },
    { no: 457, name: "ネオラント", area: 3 },
    { no: 458, name: "タマンタ", area: 3 },
    { no: 459, name: "ユキカブリ", area: 3 },
    { no: 460, name: "ユキノオー", area: 3 },
    { no: 461, name: "マニューラ", area: 3 },
    { no: 462, name: "ジバコイル", area: 3 },
    { no: 463, name: "ベロベルト", area: 3 },
    { no: 464, name: "ドサイドン", area: 3 },
    { no: 465, name: "モジャンボ", area: 3 },
    { no: 466, name: "エレキブル", area: 3 },
    { no: 467, name: "ブーバーン", area: 3 },
    { no: 468, name: "トゲキッス", area: 3 },
    { no: 469, name: "メガヤンマ", area: 3 },
    { no: 470, name: "リーフィア", area: 3 },
    { no: 471, name: "グレイシア", area: 3 },
    { no: 472, name: "グライオン", area: 3 },
    { no: 473, name: "マンムー", area: 3 },
    { no: 474, name: "ポリゴンZ", area: 3 },
    { no: 475, name: "エルレイド", area: 3 },
    { no: 476, name: "ダイノーズ", area: 3 },
    { no: 477, name: "ヨノワール", area: 3 },
    { no: 478, name: "ユキメノコ", area: 3 },
    // { no: 479, name: "ロトム", area: 3 },
    // { no: 479, name: "ロトム(ヒートロトム)", area: 3 },
    // { no: 479, name: "ロトム(スピンロトム)", area: 3 },
    // { no: 479, name: "ロトム(フロストロトム)", area: 3 },
    // { no: 479, name: "ロトム(ウォッシュロトム)", area: 3 },
    // { no: 479, name: "ロトム(カットロトム)", area: 3 },
    { no: 480, name: "ユクシー", area: 3 },
    { no: 481, name: "エムリット", area: 3 },
    { no: 482, name: "アグノム", area: 3 },
    { no: 483, name: "ディアルガ", area: 3 },
    { no: 484, name: "パルキア", area: 3 },
    { no: 485, name: "ヒードラン", area: 3 },
    { no: 486, name: "レジギガス", area: 3 },
    { no: 487, name: "ギラティナ", area: 3 },
    { no: 488, name: "クレセリア", area: 3 },
    // { no: 489, name: "フィオネ", area: 3 },
    // { no: 490, name: "マナフィ", area: 3 },
    { no: 491, name: "ダークライ", area: 3 },
    { no: 494, name: "ビクティニ", area: 4 },
    { no: 495, name: "ツタージャ", area: 4 },
    { no: 496, name: "ジャノビー", area: 4 },
    { no: 497, name: "ジャローダ", area: 4 },
    { no: 498, name: "ポカブ", area: 4 },
    { no: 499, name: "チャオブー", area: 4 },
    { no: 500, name: "エンブオー", area: 4 },
    { no: 501, name: "ミジュマル", area: 4 },
    { no: 502, name: "フタチマル", area: 4 },
    { no: 503, name: "ダイケンキ", area: 4 },
    { no: 504, name: "ミネズミ", area: 4 },
    { no: 505, name: "ミルホッグ", area: 4 },
    { no: 506, name: "ヨーテリー", area: 4 },
    { no: 507, name: "ハーデリア", area: 4 },
    { no: 508, name: "ムーランド", area: 4 },
    { no: 509, name: "チョロネコ", area: 4 },
    { no: 510, name: "レパルダス", area: 4 },
    { no: 511, name: "ヤナップ", area: 4 },
    { no: 512, name: "ヤナッキー", area: 4 },
    { no: 513, name: "バオップ", area: 4 },
    { no: 514, name: "バオッキー", area: 4 },
    { no: 515, name: "ヒヤップ", area: 4 },
    { no: 516, name: "ヒヤッキー", area: 4 },
    // { no: 517, name: "ムンナ", area: 4 },
    // { no: 518, name: "ムシャーナ", area: 4 },
    { no: 519, name: "マメパト", area: 4 },
    { no: 520, name: "ハトーボー", area: 4 },
    { no: 521, name: "ケンホロウ", area: 4 },
    { no: 522, name: "シママ", area: 4 },
    { no: 523, name: "ゼブライカ", area: 4 },
    { no: 524, name: "ダンゴロ", area: 4 },
    { no: 525, name: "ガントル", area: 4 },
    { no: 526, name: "ギガイアス", area: 4 },
    { no: 527, name: "コロモリ", area: 4 },
    { no: 528, name: "ココロモリ", area: 4 },
    { no: 529, name: "モグリュー", area: 4 },
    { no: 530, name: "ドリュウズ", area: 4 },
    { no: 531, name: "タブンネ", area: 4 },
    { no: 532, name: "ドッコラー", area: 4 },
    { no: 533, name: "ドテッコツ", area: 4 },
    { no: 534, name: "ローブシン", area: 4 },
    { no: 535, name: "オタマロ", area: 4 },
    { no: 536, name: "ガマガル", area: 4 },
    { no: 537, name: "ガマゲロゲ", area: 4 },
    { no: 538, name: "ナゲキ", area: 4 },
    { no: 539, name: "ダゲキ", area: 4 },
    { no: 540, name: "クルミル", area: 4 },
    { no: 541, name: "クルマユ", area: 4 },
    { no: 542, name: "ハハコモリ", area: 4 },
    { no: 543, name: "フシデ", area: 4 },
    { no: 544, name: "ホイーガ", area: 4 },
    { no: 545, name: "ペンドラー", area: 4 },
    { no: 546, name: "モンメン", area: 4 },
    { no: 547, name: "エルフーン", area: 4 },
    { no: 548, name: "チュリネ", area: 4 },
    { no: 549, name: "ドレディア", area: 4 },
    { no: 550, name: "バスラオ", area: 4 },
    // { no: 551, name: "メグロコ", area: 4 },
    // { no: 552, name: "ワルビル", area: 4 },
    // { no: 553, name: "ワルビアル", area: 4 },
    { no: 554, name: "ダルマッカ", area: 4 },
    { no: 555, name: "ヒヒダルマ", area: 4 },
    // { no: 555, name: "ヒヒダルマ(ダルマモード)", area: 4 },
    { no: 556, name: "マラカッチ", area: 4 },
    { no: 557, name: "イシズマイ", area: 4 },
    { no: 558, name: "イワパレス", area: 4 },
    { no: 559, name: "ズルッグ", area: 4 },
    { no: 560, name: "ズルズキン", area: 4 },
    { no: 561, name: "シンボラー", area: 4 },
    { no: 562, name: "デスマス", area: 4 },
    { no: 563, name: "デスカーン", area: 4 },
    { no: 564, name: "プロトーガ", area: 4 },
    { no: 565, name: "アバゴーラ", area: 4 },
    { no: 566, name: "アーケン", area: 4 },
    { no: 567, name: "アーケオス", area: 4 },
    { no: 568, name: "ヤブクロン", area: 4 },
    { no: 569, name: "ダストダス", area: 4 },
    // { no: 570, name: "ゾロア", area: 4 },
    // { no: 571, name: "ゾロアーク", area: 4 },
    { no: 572, name: "チラーミィ", area: 4 },
    { no: 573, name: "チラチーノ", area: 4 },
    { no: 574, name: "ゴチム", area: 4 },
    { no: 575, name: "ゴチミル", area: 4 },
    { no: 576, name: "ゴチルゼル", area: 4 },
    { no: 577, name: "ユニラン", area: 4 },
    { no: 578, name: "ダブラン", area: 4 },
    { no: 579, name: "ランクルス", area: 4 },
    { no: 580, name: "コアルヒー", area: 4 },
    { no: 581, name: "スワンナ", area: 4 },
    // { no: 582, name: "バニプッチ", area: 4 },
    // { no: 583, name: "バニリッチ", area: 4 },
    // { no: 584, name: "バイバニラ", area: 4 },
    // { no: 585, name: "シキジカ", area: 4 },
    // { no: 586, name: "メブキジカ", area: 4 },
    { no: 587, name: "エモンガ", area: 4 },
    { no: 588, name: "カブルモ", area: 4 },
    { no: 589, name: "シュバルゴ", area: 4 },
    { no: 590, name: "タマゲタケ", area: 4 },
    { no: 591, name: "モロバレル", area: 4 },
    // { no: 592, name: "プルリル", area: 4 },
    // { no: 593, name: "ブルンゲル", area: 4 },
    { no: 594, name: "ママンボウ", area: 4 },
    { no: 595, name: "バチュル", area: 4 },
    { no: 596, name: "デンチュラ", area: 4 },
    { no: 597, name: "テッシード", area: 4 },
    { no: 598, name: "ナットレイ", area: 4 },
    { no: 599, name: "ギアル", area: 4 },
    { no: 600, name: "ギギアル", area: 4 },
    { no: 601, name: "ギギギアル", area: 4 },
    // { no: 602, name: "シビシラス", area: 4 },
    // { no: 603, name: "シビビール", area: 4 },
    // { no: 604, name: "シビルドン", area: 4 },
    { no: 605, name: "リグレー", area: 4 },
    { no: 606, name: "オーベム", area: 4 },
    { no: 607, name: "ヒトモシ", area: 4 },
    { no: 608, name: "ランプラー", area: 4 },
    { no: 609, name: "シャンデラ", area: 4 },
    { no: 610, name: "キバゴ", area: 4 },
    { no: 611, name: "オノンド", area: 4 },
    { no: 612, name: "オノノクス", area: 4 },
    { no: 613, name: "クマシュン", area: 4 },
    { no: 614, name: "ツンベアー", area: 4 },
    { no: 615, name: "フリージオ", area: 4 },
    { no: 616, name: "チョボマキ", area: 4 },
    { no: 617, name: "アギルダー", area: 4 },
    { no: 618, name: "マッギョ", area: 4 },
    // { no: 619, name: "コジョフー", area: 4 },
    // { no: 620, name: "コジョンド", area: 4 },
    // { no: 621, name: "クリムガン", area: 4 },
    { no: 622, name: "ゴビット", area: 4 },
    { no: 623, name: "ゴルーグ", area: 4 },
    // { no: 624, name: "コマタナ", area: 4 },
    // { no: 625, name: "キリキザン", area: 4 },
    { no: 626, name: "バッフロン", area: 4 },
    { no: 627, name: "ワシボン", area: 4 },
    { no: 628, name: "ウォーグル", area: 4 },
    // { no: 629, name: "バルチャイ", area: 4 },
    // { no: 630, name: "バルジーナ", area: 4 },
    { no: 631, name: "クイタラン", area: 4 },
    { no: 632, name: "アイアント", area: 4 },
    { no: 633, name: "モノズ", area: 4 },
    { no: 634, name: "ジヘッド", area: 4 },
    { no: 635, name: "サザンドラ", area: 4 },
    // { no: 636, name: "メラルバ", area: 4 },
    // { no: 637, name: "ウルガモス", area: 4 },
    { no: 638, name: "コバルオン", area: 4 },
    { no: 639, name: "テラキオン", area: 4 },
    { no: 640, name: "ビリジオン", area: 4 },
    // { no: 641, name: "トルネロス", area: 4 },
    // { no: 642, name: "ボルトロス", area: 4 },
    { no: 643, name: "レシラム", area: 4 },
    { no: 644, name: "ゼクロム", area: 4 },
    // { no: 645, name: "ランドロス", area: 4 },
    { no: 646, name: "キュレム", area: 4 },
    // { no: 647, name: "ケルディオ", area: 4 },
    // { no: 648, name: "メロエッタ(ボイスフォルム)", area: 4 },
    // { no: 648, name: "メロエッタ(ステップフォルム)", area: 4 },
    { no: 649, name: "ゲノセクト", area: 4 },
    { no: 808, name: "メルタン", area: 99 },
    { no: 809, name: "メルメタル", area: 99 },
    { no: 862, name: "タチフサグマ", area: 7 },
    { no: 863, name: "ニャイキング", area: 7 },

    // アローラ
    { no: 19, name: "コラッタ", area: 6 },
    { no: 20, name: "ラッタ", area: 6 },
    { no: 26, name: "ライチュウ", area: 6 },
    { no: 27, name: "サンド", area: 6 },
    { no: 28, name: "サンドパン", area: 6 },
    { no: 37, name: "ロコン", area: 6 },
    { no: 38, name: "キュウコン", area: 6 },
    { no: 50, name: "ディグダ", area: 6 },
    { no: 51, name: "ダグトリオ", area: 6 },
    { no: 52, name: "ニャース", area: 6 },
    { no: 53, name: "ペルシアン", area: 6 },
    { no: 74, name: "イシツブテ", area: 6 },
    { no: 75, name: "ゴローン", area: 6 },
    { no: 76, name: "ゴローニャ", area: 6 },
    { no: 88, name: "ベトベター", area: 6 },
    { no: 89, name: "ベトベトン", area: 6 },
    { no: 103, name: "ナッシー", area: 6 },
    { no: 105, name: "ガラガラ", area: 6 },

    // ガラル
    // { no: 77, name: "ポニータ", area: 7 },
    // { no: 78, name: "ギャロップ", area: 7 },
    // { no: 79, name: "ヤドン", area: 7 },
    // { no: 80, name: "ヤドラン", area: 7 },
    { no: 83, name: "カモネギ", area: 7 },
    { no: 52, name: "ニャース", area: 7 },
    { no: 110, name: "マタドガス", area: 7 },
    // { no: 122, name: "バリヤード", area: 7 },
    // { no: 144, name: "フリーザー", area: 7 },
    // { no: 145, name: "サンダー", area: 7 },
    // { no: 146, name: "ファイヤー", area: 7 },
    // { no: 222, name: "サニーゴ", area: 7 },
    { no: 263, name: "ジグザグマ", area: 7 },
    { no: 264, name: "マッスグマ", area: 7 },
    { no: 554, name: "ダルマッカ", area: 7 },
    { no: 555, name: "ヒヒダルマ", area: 7 },
    // { no: 555, name: "ヒヒダルマ(ダルマモード)", area: 7 },
    // { no: 562, name: "デスマス", area: 7 },
    { no: 618, name: "マッギョ", area: 7 },
  ],
};

export const setPokemons = async (): Promise<void> => {
  const doc = firestore.doc(`public/v1/master/pokemons`);
  await doc.set(pokemons);
};

const Page: NextPage = () => {
  const clickHandler = async () => {
    await setPokemons();
    console.log(pokemons);
  };

  return (
    <div>
      <button onClick={clickHandler}>submit</button>
    </div>
  );
};

export default Page;
