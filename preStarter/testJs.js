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
    // 1유형: 그림보고 맞추기 (이미지 단어 - 제한시간 10초)
    { q: "우유", a: "milk", type: 1 },
    { q: "가수", a: "singer", type: 1 },
    { q: "남자형제", a: "brother", type: 1 },
    { q: "바나나", a: "banana", type: 1 },
    { q: "길, 도로", a: "road", type: 1 },
    { q: "선생님", a: "teacher", type: 1 },
    { q: "야구", a: "baseball", type: 1 },
    { q: "목", a: "neck", type: 1 },
    { q: "자", a: "ruler", type: 1 },
    { q: "어린이", a: "child", type: 1 },
    { q: "여자형제", a: "sister", type: 1 },
    { q: "시계", a: "clock", type: 1 },
    { q: "교회", a: "church", type: 1 },
    { q: "테니스", a: "tennis", type: 1 },
    { q: "아기", a: "baby", type: 1 },
    { q: "간호사", a: "nurse", type: 1 },
    { q: "지도", a: "map", type: 1 },
    { q: "물", a: "water", type: 1 },
    { q: "배", a: "pear", type: 1 },
    { q: "책", a: "book", type: 1 },
    { q: "칠판", a: "board", type: 1 },
    { q: "직업", a: "job", type: 1 },
    { q: "치즈", a: "cheese", type: 1 },
    { q: "가게, 상점", a: "store", type: 1 },
    { q: "영화", a: "movie", type: 1 },
    { q: "햄버거", a: "hamburger", type: 1 },
    { q: "간식", a: "snack", type: 1 },
    { q: "과일", a: "fruit", type: 1 },
    { q: "수프", a: "soup", type: 1 },
    { q: "아버지", a: "father", type: 1 },
    { q: "발", a: "foot", type: 1 },
    { q: "셋(3)", a: "three", type: 1 },
    { q: "창문", a: "window", type: 1 },
    { q: "공", a: "ball", type: 1 },
    { q: "헬멧", a: "helmet", type: 1 },
    { q: "입술", a: "lip", type: 1 },
    { q: "케이크", a: "cake", type: 1 },
    { q: "연필", a: "pencil", type: 1 },
    { q: "고기", a: "meat", type: 1 },
    { q: "스키", a: "ski", type: 1 },
    { q: "뒷면", a: "back", type: 1 },
    { q: "몸", a: "body", type: 1 },
    { q: "사탕", a: "candy", type: 1 },
    { q: "아침", a: "morning", type: 1 },
    { q: "할머니", a: "grandmother", type: 1 },
    { q: "도시", a: "city", type: 1 },
    { q: "방망이", a: "bat", type: 1 },
    { q: "눈", a: "eye", type: 1 },
    { q: "얼굴", a: "face", type: 1 },
    { q: "입", a: "mouth", type: 1 },
    { q: "복숭아", a: "peach", type: 1 },
    { q: "장갑", a: "glove", type: 1 },
    { q: "골프", a: "golf", type: 1 },
    { q: "빵", a: "bread", type: 1 },
    { q: "코", a: "nose", type: 1 },
    { q: "손", a: "hand", type: 1 },
    { q: "반[학급]", a: "class", type: 1 },
    { q: "농부", a: "farmer", type: 1 },
    { q: "버스", a: "bus", type: 1 },
    { q: "오리", a: "duck", type: 1 },
    { q: "샌드위치", a: "sandwich", type: 1 },
    { q: "비행기", a: "plane", type: 1 },
    { q: "사자", a: "lion", type: 1 },
    { q: "이", a: "teeth", type: 1 },
    { q: "친구", a: "friend", type: 1 },
    { q: "무릎", a: "knee", type: 1 },
    { q: "책상", a: "desk", type: 1 },
    { q: "개미", a: "ant", type: 1 },
    { q: "사과", a: "apple", type: 1 },
    { q: "자전거", a: "bike", type: 1 },

    // 2유형: 뜻보고 맞추기 (이미지 X - 제한시간 15초)
    { q: "프라이팬", a: "pan", type: 2 },
    { q: "자", a: "ruler", type: 2 },
    { q: "초록색", a: "green", type: 2 },
    { q: "시간", a: "time", type: 2 },
    { q: "연필", a: "pencil", type: 2 },
    { q: "비행기", a: "plane", type: 2 },
    { q: "노래하다", a: "sing", type: 2 },
    { q: "의자", a: "chair", type: 2 },
    { q: "별", a: "star", type: 2 },
    { q: "반[학급]", a: "class", type: 2 },
    { q: "만들다", a: "make", type: 2 },
    { q: "어머니", a: "mother", type: 2 },
    { q: "넥타이", a: "tie", type: 2 },
    { q: "하나", a: "one", type: 2 },
    { q: "몸", a: "body", type: 2 },
    { q: "장갑", a: "glove", type: 2 },
    { q: "낮", a: "day", type: 2 },
    { q: "밤", a: "night", type: 2 },
    { q: "햄버거", a: "hamburger", type: 2 },
    { q: "갈색", a: "brown", type: 2 },

    // 3유형: 문장+그림보고 맞추기 (이미지 O - 제한시간 20초)
    { q: "My family loves to _______.", a: "travel", type: 3 },
    { q: "Let's feel the fresh _______.", a: "air", type: 3 },
    { q: "There is a dog _______ the chair.", a: "under", type: 3 },
    { q: "Open the _______, please.", a: "door", type: 3 },
    { q: "I eat _______ for breakfast.", a: "bread", type: 3 },
    { q: "I _______ a gift to my friend.", a: "give", type: 3 },
    { q: "Take your _______.", a: "coat", type: 3 },
    { q: "Can I drink a _______ of milk?", a: "cup", type: 3 },
    { q: "_______ your hands.", a: "clap", type: 3 },
    { q: "She wants to be a ______.", a: "singer", type: 3 },
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
      img: item.type === 1 ? `/preStarter/img/${item.a}` : null,
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

    // 파일 로드 꼬임 방지 연속 체인 스캐너 연동
    if (imgTag && q.img) {
      imgTag.style.display = "block";

      const extensions = [".png", ".jpg", ".PNG", ".JPG"];
      let extIndex = 0;

      function tryNextImage() {
        if (extIndex < extensions.length) {
          const nextSrc = q.img + extensions[extIndex];
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
