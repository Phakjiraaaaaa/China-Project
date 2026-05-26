// ===== VOCABULARY DATA =====
const LEVELS = {
  1: {
    name: "ระดับ 1 – ตัวเลข & ทักทาย",
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
      { hanzi: "十", pinyin: "shí", meaning: "สิบ" },
    ]
  },
  2: {
    name: "ระดับ 2 – ครอบครัว & สี",
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
      { hanzi: "黑色", pinyin: "hēi sè", meaning: "สีดำ" },
    ]
  },
  3: {
    name: "ระดับ 3 – อาหาร & สัตว์",
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
      { hanzi: "牛", pinyin: "niú", meaning: "วัว" },
    ]
  },
  4: {
    name: "ระดับ 4 – เวลา & สถานที่",
    words: [
      { hanzi: "今天", pinyin: "jīn tiān", meaning: "วันนี้" },
      { hanzi: "明天", pinyin: "míng tiān", meaning: "พรุ่งนี้" },
      { hanzi: "昨天", pinyin: "zuó tiān", meaning: "เมื่อวาน" },
      { hanzi: "早上", pinyin: "zǎo shang", meaning: "เช้า" },
      { hanzi: "晚上", pinyin: "wǎn shang", meaning: "กลางคืน" },
      { hanzi: "学校", pinyin: "xué xiào", meaning: "โรงเรียน" },
      { hanzi: "医院", pinyin: "yī yuàn", meaning: "โรงพยาบาล" },
      { hanzi: "超市", pinyin: "chāo shì", meaning: "ซุปเปอร์มาร์เก็ต" },
      { hanzi: "银行", pinyin: "yín háng", meaning: "ธนาคาร" },
      { hanzi: "公园", pinyin: "gōng yuán", meaning: "สวนสาธารณะ" },
      { hanzi: "地铁", pinyin: "dì tiě", meaning: "รถไฟใต้ดิน" },
      { hanzi: "机场", pinyin: "jī chǎng", meaning: "สนามบิน" },
    ]
  },
  5: {
    name: "ระดับ 5 – ประโยคสนทนา",
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
      { hanzi: "太贵了", pinyin: "tài guì le", meaning: "แพงมาก" },
    ]
  }
};

// ===== STATE =====
let state = {
  currentLevel: 1,
  currentMode: 'quiz',
  totalScore: 0,
  quizQueue: [],
  quizIndex: 0,
  quizScore: 0,
  quizLives: 3,
  matchSelected: null,
  matchScore: 0,
  matchTotal: 0,
  matchData: [],
  pinyinQueue: [],
  pinyinIndex: 0,
  pinyinScore: 0,
};

// ===== SCREEN NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('active');
  setTimeout(() => { el.style.display = ''; }, 10);
}

function goHome() {
  document.getElementById('total-score').textContent = state.totalScore;
  showScreen('screen-home');
}

// ===== START LEVEL =====
function startLevel(level) {
  state.currentLevel = level;
  document.getElementById('mode-level-name').textContent = LEVELS[level].name;
  showScreen('screen-mode');
}

// ===== START GAME MODE =====
function startGame(mode) {
  state.currentMode = mode;
  if (mode === 'quiz') startQuiz();
  else if (mode === 'match') startMatch();
  else if (mode === 'pinyin') startPinyin();
}

function retryGame() {
  startGame(state.currentMode);
}

// ===== QUIZ GAME =====
function startQuiz() {
  const words = shuffle([...LEVELS[state.currentLevel].words]);
  state.quizQueue = words.slice(0, Math.min(10, words.length));
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizLives = 3;
  updateQuizUI();
  showScreen('screen-quiz');
  renderQuizQuestion();
}

function updateQuizUI() {
  document.getElementById('quiz-lives').textContent = '❤️'.repeat(state.quizLives);
  document.getElementById('quiz-score').textContent = state.quizScore;
  const pct = ((state.quizIndex) / state.quizQueue.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  document.getElementById('quiz-count').textContent = `${state.quizIndex + 1}/${state.quizQueue.length}`;
}

function renderQuizQuestion() {
  if (state.quizIndex >= state.quizQueue.length) {
    showResult('quiz', state.quizScore, state.quizQueue.length * 10);
    return;
  }
  const current = state.quizQueue[state.quizIndex];
  document.getElementById('quiz-hanzi').textContent = current.hanzi;
  document.getElementById('quiz-pinyin').textContent = current.pinyin;

  // Generate choices (1 correct + 3 wrong)
  const allWords = LEVELS[state.currentLevel].words;
  const wrongs = shuffle(allWords.filter(w => w.meaning !== current.meaning)).slice(0, 3);
  const choices = shuffle([current, ...wrongs]);

  const grid = document.getElementById('quiz-choices');
  grid.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c.meaning;
    btn.onclick = () => handleQuizAnswer(btn, c.meaning === current.meaning);
    grid.appendChild(btn);
  });

  // Animate card
  const card = document.getElementById('quiz-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'hanzi-appear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

  updateQuizUI();
}

function handleQuizAnswer(btn, isCorrect) {
  const btns = document.querySelectorAll('#quiz-choices .choice-btn');
  btns.forEach(b => b.onclick = null); // disable

  if (isCorrect) {
    btn.classList.add('correct');
    state.quizScore += 10;
    spawnParticles(btn, ['⭐', '✨', '🎉']);
  } else {
    btn.classList.add('wrong');
    state.quizLives--;
    // Show correct answer
    btns.forEach(b => {
      if (b.classList.contains('correct')) return;
    });
  }

  document.getElementById('quiz-lives').textContent = '❤️'.repeat(Math.max(0, state.quizLives));
  document.getElementById('quiz-score').textContent = state.quizScore;

  if (state.quizLives <= 0) {
    setTimeout(() => showResult('quiz', state.quizScore, state.quizQueue.length * 10), 800);
    return;
  }

  state.quizIndex++;
  setTimeout(() => renderQuizQuestion(), 700);
}

// ===== MATCH GAME =====
function startMatch() {
  const words = shuffle([...LEVELS[state.currentLevel].words]).slice(0, 6);
  state.matchData = words;
  state.matchScore = 0;
  state.matchTotal = words.length;
  state.matchSelected = null;

  document.getElementById('match-score').textContent = 0;
  document.getElementById('match-total').textContent = words.length;
  document.getElementById('match-feedback').textContent = '';

  const hanziCol = document.createElement('div');
  hanziCol.className = 'match-col';
  const meaningCol = document.createElement('div');
  meaningCol.className = 'match-col';

  const shuffledHanzi = shuffle([...words]);
  const shuffledMeaning = shuffle([...words]);

  shuffledHanzi.forEach(w => {
    const el = document.createElement('div');
    el.className = 'match-item hanzi-item';
    el.textContent = w.hanzi;
    el.dataset.key = w.hanzi;
    el.dataset.type = 'hanzi';
    el.onclick = () => handleMatchClick(el);
    hanziCol.appendChild(el);
  });

  shuffledMeaning.forEach(w => {
    const el = document.createElement('div');
    el.className = 'match-item meaning-item';
    el.textContent = w.meaning + '\n' + w.pinyin;
    el.style.whiteSpace = 'pre-line';
    el.dataset.key = w.hanzi;
    el.dataset.type = 'meaning';
    el.onclick = () => handleMatchClick(el);
    meaningCol.appendChild(el);
  });

  const area = document.getElementById('match-area');
  area.innerHTML = '';
  area.appendChild(hanziCol);
  area.appendChild(meaningCol);

  showScreen('screen-match');
}

function handleMatchClick(el) {
  if (el.classList.contains('matched')) return;

  if (!state.matchSelected) {
    state.matchSelected = el;
    el.classList.add('selected');
    return;
  }

  // Already have one selected
  const prev = state.matchSelected;

  if (prev === el) {
    // Deselect
    prev.classList.remove('selected');
    state.matchSelected = null;
    return;
  }

  // Same type? Swap selection
  if (prev.dataset.type === el.dataset.type) {
    prev.classList.remove('selected');
    state.matchSelected = el;
    el.classList.add('selected');
    return;
  }

  // Different types – check match
  const isMatch = prev.dataset.key === el.dataset.key;
  if (isMatch) {
    prev.classList.remove('selected');
    prev.classList.add('matched');
    el.classList.add('matched');
    state.matchSelected = null;
    state.matchScore++;
    document.getElementById('match-score').textContent = state.matchScore;
    spawnParticles(el, ['✨', '🌟', '💫']);
    document.getElementById('match-feedback').textContent = '✅ ถูกต้อง!';
    setTimeout(() => document.getElementById('match-feedback').textContent = '', 1000);

    if (state.matchScore >= state.matchTotal) {
      setTimeout(() => showResult('match', state.matchScore * 15, state.matchTotal * 15), 800);
    }
  } else {
    // Wrong
    prev.classList.remove('selected');
    prev.classList.add('wrong-flash');
    el.classList.add('wrong-flash');
    document.getElementById('match-feedback').textContent = '❌ ไม่ตรงกัน ลองใหม่!';
    setTimeout(() => {
      prev.classList.remove('wrong-flash');
      el.classList.remove('wrong-flash');
      document.getElementById('match-feedback').textContent = '';
    }, 600);
    state.matchSelected = null;
  }
}

// ===== PINYIN GAME =====
function startPinyin() {
  const words = shuffle([...LEVELS[state.currentLevel].words]);
  state.pinyinQueue = words.slice(0, Math.min(10, words.length));
  state.pinyinIndex = 0;
  state.pinyinScore = 0;
  updatePinyinUI();
  showScreen('screen-pinyin');
  renderPinyinQuestion();
}

function updatePinyinUI() {
  document.getElementById('pinyin-score').textContent = state.pinyinScore;
  const pct = (state.pinyinIndex / state.pinyinQueue.length) * 100;
  document.getElementById('pinyin-progress').style.width = pct + '%';
  document.getElementById('pinyin-count').textContent = `${state.pinyinIndex + 1}/${state.pinyinQueue.length}`;
}

function renderPinyinQuestion() {
  if (state.pinyinIndex >= state.pinyinQueue.length) {
    showResult('pinyin', state.pinyinScore, state.pinyinQueue.length * 10);
    return;
  }

  const current = state.pinyinQueue[state.pinyinIndex];
  document.getElementById('pinyin-hanzi').textContent = current.hanzi;
  document.getElementById('pinyin-meaning').textContent = current.meaning;

  const allWords = LEVELS[state.currentLevel].words;
  const wrongs = shuffle(allWords.filter(w => w.pinyin !== current.pinyin)).slice(0, 3);
  const choices = shuffle([current, ...wrongs]);

  const grid = document.getElementById('pinyin-choices');
  grid.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c.pinyin;
    btn.onclick = () => handlePinyinAnswer(btn, c.pinyin === current.pinyin);
    grid.appendChild(btn);
  });

  updatePinyinUI();
}

function handlePinyinAnswer(btn, isCorrect) {
  const btns = document.querySelectorAll('#pinyin-choices .choice-btn');
  btns.forEach(b => b.onclick = null);

  if (isCorrect) {
    btn.classList.add('correct');
    state.pinyinScore += 10;
    document.getElementById('pinyin-score').textContent = state.pinyinScore;
    spawnParticles(btn, ['🎊', '⭐', '✨']);
  } else {
    btn.classList.add('wrong');
    // Highlight correct
    btns.forEach(b => {
      if (b.textContent === state.pinyinQueue[state.pinyinIndex].pinyin) {
        b.classList.add('correct');
      }
    });
  }

  state.pinyinIndex++;
  setTimeout(() => renderPinyinQuestion(), 750);
}

// ===== RESULT SCREEN =====
function showResult(mode, score, maxScore) {
  state.totalScore += score;

  const pct = maxScore > 0 ? score / maxScore : 0;
  let emoji, title, msg, stars;

  if (pct >= 0.9) {
    emoji = '🏆'; title = 'ยอดเยี่ยม!'; msg = '你真棒！ เก่งมากเลย!'; stars = '⭐⭐⭐';
  } else if (pct >= 0.7) {
    emoji = '🎉'; title = 'ดีมาก!'; msg = '继续努力！ ต้องเก่งขึ้นอีก!'; stars = '⭐⭐';
  } else if (pct >= 0.5) {
    emoji = '💪'; title = 'พยายามต่อไป!'; msg = '加油！ สู้ๆ ลองอีกครั้ง!'; stars = '⭐';
  } else {
    emoji = '📚'; title = 'ฝึกอีกหน่อยนะ!'; msg = '多练习！ ฝึกบ่อยๆ จะเก่งเอง!'; stars = '☆';
  }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score').textContent = `${score} / ${maxScore}`;
  document.getElementById('result-message').textContent = msg;
  document.getElementById('result-stars').textContent = stars;

  showScreen('screen-result');

  // Celebration particles
  if (pct >= 0.7) {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const emojis = ['🎊', '🎉', '⭐', '✨', '🌟', '💫', '🏮'];
        const el = document.createElement('div');
        el.className = 'particle';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 90 + 5 + '%';
        el.style.top = Math.random() * 60 + 20 + '%';
        document.getElementById('particles-container').appendChild(el);
        setTimeout(() => el.remove(), 1500);
      }, i * 100);
    }
  }
}

// ===== UTILITIES =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function spawnParticles(el, emojis) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 5; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 60) + 'px';
    p.style.top = (rect.top + (Math.random() - 0.5) * 30) + 'px';
    document.getElementById('particles-container').appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

// ===== INIT =====
document.getElementById('total-score').textContent = state.totalScore;
