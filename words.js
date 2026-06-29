// words.js
// ===== คลังคำศัพท์ส่วนกลาง แยกตามระดับ HSK =====

const LEVELS = {
  1: {
    name: "HSK 1 – ตัวเลข & ทักทาย",
    words: [
      { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "สวัสดี" },
      { hanzi: "谢谢", pinyin: "xiè xiè", meaning: "ขอบคุณ" },
      { hanzi: "再见", pinyin: "zài jiàn", meaning: "ลาก่อน" },
      { hanzi: "一", pinyin: "yī", meaning: "หนึ่ง" },
      { hanzi: "二", pinyin: "èr", meaning: "สอง" },
      { hanzi: "三", pinyin: "sān", meaning: "สาม" },
      { hanzi: "四", pinyin: "sì", meaning: "สี่" },
      { hanzi: "五", pinyin: "wǔ", meaning: "ห้า" },
      { hanzi: "六", pinyin: "liù", meaning: "หก" },
      { hanzi: "七", pinyin: "qī", meaning: "เจ็ด" },
      { hanzi: "八", pinyin: "bā", meaning: "แปด" },
      { hanzi: "九", pinyin: "jiǔ", meaning: "เก้า" },
      { hanzi: "十", pinyin: "shí", meaning: "สิบ" }
    ]
  },
  2: {
    name: "HSK 2 – ครอบครัว & สี",
    words: [
      { hanzi: "爸爸", pinyin: "bà ba", meaning: "พ่อ" },
      { hanzi: "妈妈", pinyin: "mā ma", meaning: "แม่" },
      { hanzi: "哥哥", pinyin: "gē ge", meaning: "พี่ชาย" },
      { hanzi: "姐姐", pinyin: "jiě jie", meaning: "พี่สาว" },
      { hanzi: "弟弟", pinyin: "dì di", meaning: "น้องชาย" },
      { hanzi: "妹妹", pinyin: "mèi mei", meaning: "น้องสาว" },
      { hanzi: "红色", pinyin: "hóng sè", meaning: "สีแดง" },
      { hanzi: "蓝色", pinyin: "lán sè", meaning: "สีน้ำเงิน" },
      { hanzi: "绿色", pinyin: "lǜ sè", meaning: "สีเขียว" },
      { hanzi: "黄色", pinyin: "huáng sè", meaning: "สีเหลือง" },
      { hanzi: "白色", pinyin: "bái sè", meaning: "สีขาว" },
      { hanzi: "黑色", pinyin: "hēi sè", meaning: "สีดำ" }
    ]
  },
  3: {
    name: "HSK 3 – อาหาร & สัตว์",
    words: [
      { hanzi: "米饭", pinyin: "mǐ fàn", meaning: "ข้าว" },
      { hanzi: "面条", pinyin: "miàn tiáo", meaning: "ก๋วยเตี๋ยว" },
      { hanzi: "饺子", pinyin: "jiǎo zi", meaning: "เกี๊ยว" },
      { hanzi: "茶", pinyin: "chá", meaning: "ชา" },
      { hanzi: "水", pinyin: "shuǐ", meaning: "น้ำ" },
      { hanzi: "苹果", pinyin: "píng guǒ", meaning: "แอปเปิ้ล" },
      { hanzi: "猫", pinyin: "māo", meaning: "แมว" },
      { hanzi: "狗", pinyin: "gǒu", meaning: "สุนัข" },
      { hanzi: "鱼", pinyin: "yú", meaning: "ปลา" },
      { hanzi: "鸟", pinyin: "niǎo", meaning: "นก" },
      { hanzi: "马", pinyin: "mǎ", meaning: "ม้า" },
      { hanzi: "牛", pinyin: "niú", meaning: "วัว" }
    ]
  },
  4: {
    name: "HSK 4 – เวลา & สถานที่",
    words: [
      { hanzi: "今天", pinyin: "jīn tiān", meaning: "วันนี้" },
      { hanzi: "明天", pinyin: "míng tiān", meaning: "พรุ่งนี้" },
      { hanzi: "昨天", pinyin: "zuó tiān", meaning: "เมื่อวาน" },
      { hanzi: "早上", pinyin: "zǎo shang", meaning: "เช้า" },
      { hanzi: "晚上", pinyin: "wǎn shang", meaning: "กลางคืน" },
      { hanzi: "学校", pinyin: "xué xiào", meaning: "โรงเรียน" },
      { hanzi: "医院", pinyin: "yī yuàn", meaning: "โรงพยาบาล" },
      { hanzi: "超市", pinyin: "chāo :shì", meaning: "ซุปเปอร์มาร์เก็ต" },
      { hanzi: "银行", pinyin: "yín háng", meaning: "ธนาคาร" },
      { hanzi: "公园", pinyin: "gōng yuán", meaning: "สวนสาธารณะ" },
      { hanzi: "地铁", pinyin: "dì tiě", meaning: "รถไฟใต้ดิน" },
      { hanzi: "机场", pinyin: "jī chǎng", meaning: "สนามบิน" }
    ]
  },
  5: {
    name: "HSK 5 – ประโยคสนทนา",
    words: [
      { hanzi: "你好吗？", pinyin: "nǐ hǎo ma?", meaning: "คุณสบายดีไหม?" },
      { hanzi: "我很好", pinyin: "wǒ hěn hǎo", meaning: "ฉันสบายดี" },
      { hanzi: "我叫…", pinyin: "wǒ jiào…", meaning: "ฉันชื่อ..." },
      { hanzi: "多少钱？", pinyin: "duō shǎo qián?", meaning: "เท่าไหร่?" },
      { hanzi: "在哪里？", pinyin: "zài nǎ lǐ?", meaning: "อยู่ที่ไหน?" },
      { hanzi: "我不懂", pinyin: "wǒ bù dǒng", meaning: "ฉันไม่เข้าใจ" },
      { hanzi: "请再说", pinyin: "qǐng zài shuō", meaning: "ช่วยพูดอีกครั้ง" },
      { hanzi: "我喜欢", pinyin: "wǒ xǐ huān", meaning: "ฉันชอบ" },
      { hanzi: "没关系", pinyin: "méi guān xi", meaning: "ไม่เป็นไร" },
      { hanzi: "对不起", pinyin: "duì bu qǐ", meaning: "ขอโทษ" },
      { hanzi: "好吃！", pinyin: "hǎo chī!", meaning: "อร่อยมาก!" },
      { hanzi: "太贵了", pinyin: "tài guì le", meaning: "แพงมาก" }
    ]
  }
};