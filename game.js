// game.js
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
  // สำหรับควบคุมโหมดสุ่มทีมกลุ่ม
  teamScores: { A: 0, B: 0 },
  teamTurn: 'A', // 'A' = ทีมมังกร 🐉, 'B' = ทีมหงส์ 🦅
  teamQueue: [],
  teamIndex: 0
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
  else if (mode === 'team') startTeamBattle();
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

  const card = document.getElementById('quiz-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'hanzi-appear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

  updateQuizUI();
}

function handleQuizAnswer(btn, isCorrect) {
  const btns = document.querySelectorAll('#quiz-choices .choice-btn');
  btns.forEach(b => b.onclick = null);

  if (isCorrect) {
    btn.classList.add('correct');
    state.quizScore += 10;
    spawnParticles(btn, ['⭐', '✨', '🎉']);
  } else {
    btn.classList.add('wrong');
    state.quizLives--;
    btns.forEach(b => {
      if (b.textContent === state.quizQueue[state.quizIndex].meaning) {
        b.classList.add('correct');
      }
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

  const prev = state.matchSelected;

  if (prev === el) {
    prev.classList.remove('selected');
    state.matchSelected = null;
    return;
  }

  if (prev.dataset.type === el.dataset.type) {
    prev.classList.remove('selected');
    state.matchSelected = el;
    el.classList.add('selected');
    return;
  }

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
    btns.forEach(b => {
      if (b.textContent === state.pinyinQueue[state.pinyinIndex].pinyin) {
        b.classList.add('correct');
      }
    });
  }

  state.pinyinIndex++;
  setTimeout(() => renderPinyinQuestion(), 750);
}

// ===== TEAM BATTLE GAME =====
function startTeamBattle() {
  const words = shuffle([...LEVELS[state.currentLevel].words]);
  state.teamQueue = words.slice(0, Math.min(6, words.length));
  state.teamIndex = 0;
  state.teamScores = { A: 0, B: 0 };
  state.teamTurn = Math.random() < 0.5 ? 'A' : 'B';

  document.getElementById('score-team-a').textContent = 0;
  document.getElementById('score-team-b').textContent = 0;

  showScreen('screen-team');
  renderTeamQuestion();
}

function renderTeamQuestion() {
  if (state.teamIndex >= state.teamQueue.length) {
    let winnerTitle = '';
    let msg = `มังกร 🐉: ${state.teamScores.A} คะแนน VS หงส์ 🦅: ${state.teamScores.B} คะแนน`;
    let emoji = '⚔️';
    let highTeamScore = Math.max(state.teamScores.A, state.teamScores.B);

    if (state.teamScores.A > state.teamScores.B) {
      winnerTitle = 'ทีมมังกร ชนะ! 🐉';
      emoji = '🏆';
    } else if (state.teamScores.B > state.teamScores.A) {
      winnerTitle = 'ทีมหงส์ ชนะ! 🦅';
      emoji = '🏆';
    } else {
      winnerTitle = 'เสมอแบบมิตรภาพ! 🤝';
      emoji = '⚖️';
    }

    state.totalScore += highTeamScore;
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = winnerTitle;
    document.getElementById('result-score').textContent = `${state.teamScores.A} - ${state.teamScores.B}`;
    document.getElementById('result-message').textContent = msg;
    document.getElementById('result-stars').textContent = '✨ การแข่งขันแบบกลุ่ม ✨';
    
    showScreen('screen-result');
    return;
  }

  const current = state.teamQueue[state.teamIndex];
  const activeTeamName = state.teamTurn === 'A' ? '🐉 ทีมมังกร' : '🦅 ทีมหงส์';

  const tagEl = document.getElementById('current-team-tag');
  if (tagEl) tagEl.textContent = `รอบของ: ${activeTeamName}`;

  const turnAnnounce = document.getElementById('team-turn-announcement');
  if (turnAnnounce) turnAnnounce.textContent = `ข้อที่ ${state.teamIndex + 1} ตัวแทนกลุ่ม ${activeTeamName} ประจำที่ตอบ!`;

  const cardWrapper = document.getElementById('team-card-wrapper');
  if (cardWrapper) {
    cardWrapper.style.borderTop = state.teamTurn === 'A' ? '6px solid #e63946' : '6px solid #4895ef';
  }

  document.getElementById('team-hanzi').textContent = current.hanzi;
  document.getElementById('team-pinyin').textContent = current.pinyin;

  const allWords = LEVELS[state.currentLevel].words;
  const wrongs = shuffle(allWords.filter(w => w.meaning !== current.meaning)).slice(0, 3);
  const choices = shuffle([current, ...wrongs]);

  const grid = document.getElementById('team-choices');
  grid.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c.meaning;
    btn.onclick = () => handleTeamAnswer(btn, c.meaning === current.meaning);
    grid.appendChild(btn);
  });
}

function handleTeamAnswer(btn, isCorrect) {
  const btns = document.querySelectorAll('#team-choices .choice-btn');
  btns.forEach(b => b.onclick = null);

  if (isCorrect) {
    btn.classList.add('correct');
    state.teamScores[state.teamTurn] += 20;
    document.getElementById(`score-team-${state.teamTurn === 'A' ? 'a' : 'b'}`).textContent = state.teamScores[state.teamTurn];
    spawnParticles(btn, ['⭐', '✨', '🎉']);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => {
      if (b.textContent === state.teamQueue[state.teamIndex].meaning) {
        b.classList.add('correct');
      }
    });
  }

  state.teamTurn = state.teamTurn === 'A' ? 'B' : 'A';
  state.teamIndex++;
  setTimeout(() => renderTeamQuestion(), 850);
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