window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 및 초기 설정
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // -----------------------------
  // 공통 함수: 배열 섞기
  // -----------------------------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // -----------------------------
  // 1. 원본 데이터 (Pre-starter)
  // -----------------------------
  const rawData = [
    // 1유형: 그림보고 맞추기 (Part 1 데이터 - 제한시간 10초)
    { q: "유니폼, 단체복", a: "uniform", type: 1 },
    { q: "연주회, 콘서트", a: "concert", type: 1 },
    { q: "안경", a: "glasses", type: 1 },
    { q: "방, -실", a: "room", type: 1 },
    { q: "황소", a: "ox", type: 1 },
    { q: "무지개", a: "rainbow", type: 1 },
    { q: "딸기", a: "strawberry", type: 1 },
    { q: "재킷", a: "jacket", type: 1 },
    { q: "오늘", a: "today", type: 1 },
    { q: "공간, 장소", a: "space", type: 1 },
    { q: "버튼, 단추", a: "button", type: 1 },
    { q: "맑은", a: "clear", type: 1 },
    { q: "여왕", a: "queen", type: 1 },
    { q: "벌레, 작은 곤충", a: "bug", type: 1 },
    { q: "가수", a: "singer", type: 1 },
    { q: "음악가", a: "musician", type: 1 },
    { q: "노래", a: "song", type: 1 },
    { q: "피자", a: "pizza", type: 1 },
    { q: "변호사", a: "lawyer", type: 1 },
    { q: "벌", a: "bee", type: 1 },
    { q: "휴가", a: "holiday", type: 1 },
    { q: "커튼", a: "curtain", type: 1 },
    { q: "경찰관", a: "police officer", type: 1 },
    { q: "동물", a: "animal", type: 1 },
    { q: "분", a: "minute", type: 1 },
    { q: "왕", a: "king", type: 1 },
    { q: "기린", a: "giraffe", type: 1 },
    { q: "호수", a: "lake", type: 1 },
    { q: "스웨터", a: "sweater", type: 1 },
    { q: "나무, 목재", a: "wood", type: 1 },
    { q: "가게", a: "shop", type: 1 },
    { q: "시골, 나라", a: "country", type: 1 },
    { q: "매트", a: "mat", type: 1 },
    { q: "오렌지", a: "orange", type: 1 },
    { q: "표, 입장권", a: "ticket", type: 1 },
    { q: "어른", a: "adult", type: 1 },
    { q: "운동장", a: "playground", type: 1 },
    { q: "경기", a: "match", type: 1 },
    { q: "교과서", a: "textbook", type: 1 },
    { q: "빗자루", a: "broom", type: 1 },
    { q: "치과의사", a: "dentist", type: 1 },
    { q: "설탕", a: "sugar", type: 1 },
    { q: "숙제", a: "homework", type: 1 },
    { q: "토끼", a: "rabbit", type: 1 },
    { q: "도서관", a: "library", type: 1 },
    { q: "결혼", a: "wedding", type: 1 },
    { q: "악어", a: "crocodile", type: 1 },
    { q: "아들", a: "son", type: 1 },
    { q: "사람들", a: "people", type: 1 },
    { q: "단어", a: "word", type: 1 },
    { q: "곰인형", a: "teddy bear", type: 1 },
    { q: "수박", a: "watermelon", type: 1 },
    { q: "벨트", a: "belt", type: 1 },
    { q: "강아지", a: "puppy", type: 1 },
    { q: "안전한", a: "safe", type: 1 },
    { q: "비행기", a: "airplane", type: 1 },
    { q: "혀", a: "tongue", type: 1 },
    { q: "수첩, 일기", a: "diary", type: 1 },
    { q: "아이들", a: "children", type: 1 },
    { q: "크림", a: "cream", type: 1 },
    { q: "장갑", a: "gloves", type: 1 },
    { q: "점심(식사)", a: "lunch", type: 1 },
    { q: "식탁", a: "table", type: 1 },
    { q: "피부", a: "skin", type: 1 },
    { q: "정거장, 역", a: "station", type: 1 },
    { q: "카페", a: "cafe", type: 1 },
    { q: "오후", a: "afternoon", type: 1 },
    { q: "목걸이", a: "necklace", type: 1 },
    { q: "역사", a: "history", type: 1 },
    { q: "쓰레기", a: "trash", type: 1 },

    // 2유형: 뜻보고 맞추기 (Part 2 데이터 - 제한시간 15초)
    { q: "~위에", a: "over", type: 2 },
    { q: "반복하다", a: "repeat", type: 2 },
    { q: "시원한", a: "cool", type: 2 }, // 테이블 표기 그대로 반영 (추후 cool 등으로 수정 가능)
    { q: "새로운", a: "new", type: 2 },
    { q: "(종이나 천을) 접다", a: "fold", type: 2 },
    { q: "언젠가", a: "someday", type: 2 },
    { q: "함께, 같이", a: "together", type: 2 },
    { q: "큰, 많은", a: "large", type: 2 },
    { q: "보다", a: "see", type: 2 },
    { q: "끝내다", a: "finish", type: 2 },
    { q: "보여주다", a: "show", type: 2 },
    { q: "유명한", a: "famous", type: 2 },
    { q: "따뜻한", a: "warm", type: 2 },
    { q: "지루한", a: "bored", type: 2 },
    { q: "가르치다", a: "teach", type: 2 },
    { q: "각각(의)", a: "each", type: 2 },
    { q: "깨끗한, 청소하다", a: "clean", type: 2 },
    { q: "걱정하다", a: "worry", type: 2 },
    { q: "친절한", a: "kind", type: 2 },
    { q: "전화하다, ~라고 부르다", a: "call", type: 2 },

    // 3유형: 문장보고 맞추기 (Part 3 데이터 - 제한시간 20초)
    { q: "I have a runny nose and a sore _______.", a: "throat", type: 3 },
    { q: "She is a famous _______.", a: "singer", type: 3 },
    { q: "I'm _______ to see you.", a: "glad", type: 3 },
    { q: "Raise your hand if you have any _______.", a: "question", type: 3 },
    { q: "He is a soccer team _______.", a: "leader", type: 3 },
    { q: "I'm _______ to go.", a: "ready", type: 3 },
    { q: "Let's go _______!", a: "outside", type: 3 },
    { q: "My favorite _______ is onion.", a: "vegetable", type: 3 },
    { q: "We _______ about our new teacher.", a: "talk", type: 3 },
    { q: "What _______ is this?", a: "animal", type: 3 },
  ];

  const allAnswerPool = rawData.map((d) => d.a);

  // -----------------------------
  // 2. 최종 시험 문제 배열 생성 (경로 최적화)
  // -----------------------------
  const questions = rawData.map((item) => {
    const wrongOnes = shuffle(
      allAnswerPool.filter((ans) => ans !== item.a),
    ).slice(0, 3);
    const options = shuffle([item.a, ...wrongOnes]);

    return {
      title: item.q,
      options: options,
      correctIndex: options.indexOf(item.a),
      type: item.type,
      // 상대 경로 포맷 최적화 고정
      img: item.type === 1 ? `/starter/img/${item.a}` : null,
    };
  });

  // -----------------------------
  // 3. 정답 테이블 동적 생성 (결과창 구조화)
  // -----------------------------
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    const totalQuestions = questions.length;
    const groupSize = 5;
    const groupCount = Math.ceil(totalQuestions / groupSize);

    for (let g = 0; g < groupCount; g++) {
      const start = g * groupSize + 1;
      const titleRow = document.createElement("tr");
      const titleLabelCell = document.createElement("td");
      titleLabelCell.textContent = "문제";
      titleRow.appendChild(titleLabelCell);

      const answerRow = document.createElement("tr");
      const answerLabelCell = document.createElement("td");
      answerLabelCell.textContent = "선택";
      answerRow.appendChild(answerLabelCell);

      for (let n = start; n < start + groupSize && n <= totalQuestions; n++) {
        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleTd.textContent = questions[n - 1].title.split("\n")[0];
        titleRow.appendChild(titleTd);

        const answerTd = document.createElement("td");
        answerTd.id = "answer-q" + n;
        answerTd.className = "answer";
        answerRow.appendChild(answerTd);
      }
      tbody.appendChild(titleRow);
      tbody.appendChild(answerRow);
    }
  }

  // -----------------------------
  // 4. 시험 상태 변수 제어
  // -----------------------------
  let currentQuestion = 0;
  let selectedIndex = null;
  let timeLeft = 10;
  let countdownInterval = null;
  let correctCount = 0;

  const questionLabel = document.getElementById("questionLabel");
  const buttons = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
    document.querySelector(".four"),
  ];
  const timerSpan = document.getElementById("timer-sec");

  function startTimer(duration) {
    if (countdownInterval) clearInterval(countdownInterval);
    timeLeft = duration;
    if (timerSpan) timerSpan.textContent = timeLeft;

    countdownInterval = setInterval(() => {
      timeLeft--;
      if (timerSpan) timerSpan.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    if (currentQuestion >= questions.length) return;
    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) {
      cell.textContent = "-";
      cell.classList.add("wrong-cell");
    }
    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  // 전체 화면 노출 상태 리셋 제어
  function finishExam() {
    if (countdownInterval) clearInterval(countdownInterval);

    const testPanel = document.querySelector(".test-panel-wrapper");
    if (testPanel) testPanel.style.display = "none";

    document.querySelector(".examOver").style.display = "block";
  }

  // -----------------------------
  // 5. 핵심: 문제 출력 및 이미지 체인 스위칭 로직
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;

    // 선택 효과 보정 초기화
    buttons.forEach((btn) => {
      if (btn) {
        btn.classList.remove("selected");
        const chk = btn.querySelector(".check-icon");
        if (chk) chk.remove();
      }
    });

    const imgTag = document.getElementById("questionImage");

    // 이전 상태 이미지 경로 전면 소거 및 가림 처리
    if (imgTag) {
      imgTag.src = "";
      imgTag.onerror = null;
      imgTag.style.display = "none";
    }

    // 1유형 텍스트 잔상 소거 및 유형 제어
    if (questionLabel) {
      if (q.type === 1) {
        questionLabel.innerHTML = "";
        questionLabel.textContent = "";
      } else {
        questionLabel.innerHTML = q.title.replace(/\n/g, "<br>");
      }
    }

    // ------------------------------------------------===
    //   이미지 로드
    // ------------------------------------------------===
    if (imgTag && q.img) {
      imgTag.style.display = "block";

      const extensions = [".jpg"];
      let extIndex = 0;

      function tryNextImage() {
        if (extIndex < extensions.length) {
          let nextSrc = "";

          // 1. 로컬 라이브 서버 환경인 경우 (127.0.0.1 또는 localhost)
          if (
            window.location.hostname === "127.0.0.1" ||
            window.location.hostname === "localhost"
          ) {
            // 주소창 바로 뒤에 starter가 붙음
            nextSrc =
              window.location.origin + "/" + q.img + extensions[extIndex];
          }
          // 2. 깃허브 Pages 등 실제 온라인 배포 서버 환경인 경우
          else {
            // 주소창 중간에 tosel2026 경로를 강제로 명시하여 조립함
            nextSrc =
              window.location.origin +
              "/tosel2026/" +
              q.img +
              extensions[extIndex];
          }

          console.log(`[이미지 로드 시도] 주소: ${nextSrc}`); // 콘솔 확인용 로그

          extIndex++;
          imgTag.src = nextSrc;
        } else {
          imgTag.style.display = "none";
          imgTag.onerror = null;
        }
      }

      imgTag.onerror = tryNextImage;
      tryNextImage();
    }

    const btnFive = document.querySelector(".five");
    if (btnFive) btnFive.style.display = "none";

    // 보기 주입 (.opt-text 호환성 유지)
    q.options.forEach((opt, idx) => {
      const btn = buttons[idx];
      if (btn) {
        const textSpan = btn.querySelector(".opt-text");
        if (textSpan) {
          textSpan.textContent = opt;
        } else {
          btn.textContent = opt;
        }
      }
    });

    // 유형별 제한 시간 스펙 지정 (1유형: 10초 / 2유형: 15초 / 3유형: 20초)
    let duration = 10;
    if (q.type === 2) duration = 15;
    if (q.type === 3) duration = 20;

    startTimer(duration);
  }

  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (countdownInterval) clearInterval(countdownInterval);

    const selectedText = q.options[choiceIndex];
    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) cell.textContent = selectedText;

    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      if (cell) cell.classList.add("wrong-cell");
    }

    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  // -----------------------------
  // 6. 단축키 인터랙션 및 결과지 출력 (멀티 페이지)
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3 };

  document.addEventListener("keydown", function (e) {
    if (currentQuestion >= questions.length) return;

    if (e.code === "Space") {
      e.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~4 중 하나를 선택하세요.");
        return;
      }
      handleAnswer(selectedIndex);
      return;
    }

    const idx = keyToIndex[e.key];
    if (idx !== undefined) {
      selectedIndex = idx;
      buttons.forEach((btn, i) => {
        if (btn) {
          if (i === idx) {
            btn.classList.add("selected");
          } else {
            btn.classList.remove("selected");
          }
        }
      });
    }
  });

  window.resultOk = function () {
    const pw = prompt("결과를 보려면 비밀번호를 입력하세요.");
    if (pw !== "1234") {
      alert("비밀번호가 올바르지 않습니다.");
      return;
    }

    document.querySelector(".examOver").style.display = "none";
    document.querySelector(".answer-panel").style.display = "block";

    document.getElementById("result-name").textContent = studentNameValue;
    document.getElementById("result-correct").textContent = correctCount;
    document.getElementById("result-total").textContent = questions.length;

    const element = document.querySelector(".answer-panel");

    // 멀티 페이지 가로 누수 없는 PDF 인쇄 제어 모듈
    setTimeout(() => {
      html2canvas(element, { backgroundColor: "#ffffff", useCORS: true }).then(
        (canvas) => {
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF("p", "mm", "a4");
          const imgData = canvas.toDataURL("image/png");

          const imgWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          const dateStr = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "");
          pdf.save(`${dateStr}_${studentNameValue}_결과.pdf`);
        },
      );
    }, 500);
  };

  renderQuestion();
};
