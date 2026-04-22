// Project schema — required fields: id, title, role, cat, accent, year, tag, problem, impact[], stack[]
// Optional detail-page fields:
//   cover      — hero image path
//   summary    — 1–2 sentence tagline under the hero title
//   background — longer problem context paragraph
//   approach   — array of { title, body } describing solution steps
//   outcome    — closing paragraph (reflection / lessons learned)
//   gallery    — array of { src, caption }
//   links      — array of { label, href }
//   sections   — array of { heading, body } for freeform extra content

export const categories = [
  { id: "all", label: "全部", count: 0, color: "ink" },
  { id: "ai", label: "AI 應用", color: "g-blue" },
  { id: "data", label: "數據分析", color: "g-red" },
  { id: "web", label: "網頁開發", color: "g-yellow" },
  { id: "growth", label: "行銷轉型", color: "g-green" },
];

export const projects = [
  {
    id: "cathay-copilot",
    title: "國泰金控 M365 Copilot & ChatGPT 賦能管理",
    role: "AI 賦能 PM / Technical PM",
    cat: "ai",
    accent: "g-blue",
    year: "2026",
    tag: "企業級 AI 轉型",
    cover: "/projects/cathay-copilot.jpg",
    summary:
      "在國泰金控 DATA&AI 部擔任 AI 賦能 PM，主導集團兩大核心 AI 產品的落地與營運，把 Copilot 與 ChatGPT 真正帶進 13,000 名員工的日常工作流。",
    problem:
      "金融業面對嚴格 DLP 合規與變革阻力，13,000 名員工如何在安全前提下，真正把 AI 工具用進每日工作？",
    background:
      "在國泰金控擔任 AIPM 實習生期間，我同時主導集團兩大核心 AI 產品的落地與營運：M365 Copilot 的全生命週期管理，以及 OpenAI / ChatGPT 的集團級賦能計畫。金融業的特殊性在於必須在嚴格的 DLP 合規、網路隔離與高度文件保密下，同時推動創新——讓「技術導入」不只是裝工具，而是從資安、教育到行銷敘事的系統工程。",
    approach: [
      {
        title: "M365 Copilot 用戶全生命週期管理",
        body:
          "獨立管理 600+ 名授權用戶，負責授權配置、使用行為追蹤、效能回報到續約評估的全週期。同時展現 Technical PM 的專業深度，直接與微軟原廠顧問對接，排除金融環境下嚴格的資安合規（DLP）與連線障礙，讓工具能在合規前提下穩定運行。",
      },
      {
        title: "OpenAI ChatGPT 集團級啟動與在地化",
        body:
          "深度參與全集團逾 13,000 名員工的啟動與賦能計畫，跨出執行層級，直接對接 OpenAI 原廠團隊進行課程內容校正與在地化審核，確保技術傳達的精準度；同時透過數據優化資源配置、降低變革阻力。",
      },
      {
        title: "產品敘事與發表會 Demo 製作",
        body:
          "主導 OpenAI 與國泰策略合作發表會的 Demo 影片與簡報製作。成品不僅獲得副總採用於正式典禮播放，更贏得 OpenAI 原廠專家的高度讚譽，展現把技術複雜度轉譯為策略敘事的能力。",
      },
      {
        title: "GitHub Copilot TPM 導入",
        body:
          "隨著專案進程跨入 GitHub Copilot 的 TPM 導入工作，與內部網管及資安單位協調整合開發者工作流，確保開發者工具在金融合規邊界下穩定上線。",
      },
    ],
    impact: [
      "主導 OpenAI 集團級啟動計畫，對接原廠進行課程本地化審核",
      "獨立管理 600+ 名 M365 Copilot 用戶全生命週期",
      "與微軟原廠顧問協調 DLP 障礙，確保金融合規下穩定運行",
      "Demo 影片獲副總採用於正式典禮、OpenAI 原廠讚譽",
    ],
    outcome:
      "這段經歷讓我能精準在「技術維運（Ops）」與「產品開發（Development）」思維間切換——從解決第一線 User 的技術詢問，到與原廠共同優化產品體驗。規模化管理企業級 AI 工具的實戰底氣，也為未來在清大服科所深入研究資訊管理與服務科學的整合應用，打下堅實且具前瞻性的基礎。",
    stack: ["M365 Copilot", "GitHub Copilot", "OpenAI", "DLP", "TPM"],
    featured: true,
  },
  {
    id: "seeking-echoes",
    title: "尋找回聲 Seeking the Echoes · AR 實境解謎",
    role: "全端開發 / 使用者研究",
    cat: "ai",
    accent: "g-red",
    year: "2025",
    tag: "國科會大專生研究計畫",
    cover: "/projects/seeking-echoes.png",
    summary:
      "結合 AR 擴增實境與 AI 生成藝術，打造一款行動裝置互動歷史教育遊戲，讓使用者在沉浸式解謎中認識嘉義民雄的在地故事。",
    problem:
      "地方文化傳遞多為單向、缺乏互動，難吸引年輕世代，如何讓使用者在沉浸式解謎中主動認識民雄在地故事？",
    background:
      "當代觀光與教育日益倚重數位科技，然而地方文化的傳遞仍多停留在單向、缺乏互動的形式，難以吸引年輕世代。為回應數位轉型與大學社會責任（USR）的需求，我們攜手深耕地方多年的「打貓街坊文化協會」，以及中正大學「重構大學路」USR 計畫，確保內容正確性，實踐大學資源參與地方發展的角色，推廣文化保存與觀光導覽的創新模式。指導教授：許巍嚴教授。",
    approach: [
      {
        title: "AR 掃描系統",
        body:
          "利用手機鏡頭對實體圖示進行掃描，觸發相應的劇情內容與任務提示。透過 MindAR 的 image target 追蹤技術，把招牌、物件、標誌等預先編入目標資料庫；使用者啟用相機時，系統自動比對辨識是否為有效圖示，作為觸發事件的條件。",
      },
      {
        title: "關卡與對話系統",
        body:
          "關卡採線性解鎖設計，依玩家輸入進行邏輯判斷，成功解謎後導向下個地點或觸發獎勵。遊戲內角色透過對話引導任務，並嵌入外部網頁小遊戲增加整體豐富度。",
      },
      {
        title: "道具與進度系統",
        body:
          "玩家解謎成功後獲得虛擬道具（地圖碎片、角色信物等），自動儲存至背包。完成關卡則開啟「劇情回顧」項目，讓玩家可瀏覽已完成關卡內容，利於二次探索或補完敘事。",
      },
      {
        title: "AI 生成藝術資產",
        body:
          "運用 ChatGPT、SunoAI、Midjourney、LeonardoAI 創作角色圖片與遊戲音樂，壓低製作成本，同時把整套系統模組化，便於未來依需求擴充功能。",
      },
      {
        title: "WebAR 免安裝部署",
        body:
          "以 Unity 為主要開發引擎，結合網頁技術（WebAR）建構跨平台體驗——無需下載 App，使用者透過手機瀏覽器就能直接遊玩，大幅降低遊玩門檻與推廣阻力。",
      },
      {
        title: "實地測試與迭代",
        body:
          "參與 2025 草草戲劇節（單日最高入園 2,300 人）舉辦工作坊；另在中正大學電傳所課程中邀請研究生實測原型，收斂遊戲流程與敘事節奏。",
      },
    ],
    impact: [
      "50+ 位測試者 滿意度達 90% 以上",
      "86% 參與者表示透過遊戲更認識民雄地區",
      "入選 2025 草草戲劇節公開測試（單日最高入園 2,300 人）",
      "通過國科會研究計畫 114-2813-C-194-045-H",
    ],
    outcome:
      "本專題已建立具體原型並完成實地測試，仍有進一步優化空間：使用者體驗可強化互動流程與介面引導，提升不同年齡層的友善度；遊戲化機制可導入多結局劇情與成就系統增強黏著度；後續也建議建置數據分析後台，作為內容優化與推廣策略的依據。2025 大士爺祭前夕，本專題也與打貓街坊文化協會共同舉辦工作坊，讓民眾在祭典氛圍下實際遊玩，認識嘉義民雄的在地文化歷史。",
    stack: ["Unity", "React", "MindAR", "ChatGPT", "Midjourney"],
    featured: true,
  },
  {
    id: "hakka-web",
    title: "客（蛤）仰般講？AI 影像辨識客語學習 Web App",
    role: "全端開發 / AI 模型訓練",
    cat: "ai",
    accent: "g-yellow",
    year: "2024",
    tag: "桃園有 AI 哈客松 · 優選",
    cover: "/projects/hakka-web.jpg",
    summary:
      "以遊戲化的圖鑑收集方式，讓使用者在真實場景中辨識物件、學會對應的客語詞彙，打造一個能走進生活的客語學習體驗。",
    problem:
      "客語詞彙學習缺乏沉浸式工具，如何讓使用者透過現實場景中的物件辨識，遊戲化地收集詞彙？",
    background:
      "桃園市政府主辦的「有 AI 哈客松」競賽希望團隊運用 AI 技術推廣客家文化。我們觀察到傳統客語教材偏向紙本與背誦，缺乏與日常生活連結的沉浸體驗，因此發想出一款「走到哪學到哪」的圖鑑式 AI 學習 App。",
    approach: [
      {
        title: "YOLO 模型訓練",
        body:
          "在 Google Colab 上訓練 YOLO 物件偵測模型，選定與生活場景貼近的類別作為辨識對象，並依訓練成效調整資料集與參數。",
      },
      {
        title: "Flask 後端推論 API",
        body:
          "以 Flask 把訓練好的模型封裝成推論 API，接收前端上傳的即時相機畫面，回傳辨識結果與對應的客語詞彙資料。",
      },
      {
        title: "React 前端遊戲化介面",
        body:
          "以 React 實作圖鑑收集、關卡進度與即時辨識介面，讓使用者在場景中「拍到就收到」，把學習轉化成探索的樂趣。",
      },
    ],
    impact: [
      "以 Google Colab 訓練 YOLO 模型，Flask 串接前端即時辨識",
      "桃園市有 AI 哈客松 技術實作組 優選（前 8 名）",
      "完成從模型訓練 → API → 前端 UI 的全端整合",
    ],
    outcome:
      "這個專案讓我第一次完整走過「模型訓練 → 後端 API → 前端 UI」的全端流程，深化對前後端整合的邏輯概念，也讓我更清楚 AI 模型從實驗室走到使用者面前時，實際會面對哪些工程與使用性的問題。",
    stack: ["YOLO", "React", "Python", "Flask"],
    featured: true,
  },
  {
    id: "fuji",
    title: "福日小賣所 · 民雄在地社群經營",
    role: "社群 / 內容行銷",
    cat: "growth",
    accent: "g-green",
    year: "2024",
    tag: "中正資管電商競賽 冠軍",
    cover: "/projects/fuji.png",
    summary:
      "協助民雄剛起步的在地店家經營社群，用有限資源在三個月內把瀏覽量推上 80K，還意外招來 KLOOK 主動接洽。",
    problem:
      "剛起步的在地店家缺乏網路能見度與行銷能量，如何用有限資源為實體店面導入穩定流量？",
    background:
      "福日小賣所是嘉義民雄的在地小店，剛起步時幾乎沒有網路曝光。我們以中正資管電商競賽為起點，進駐協助操盤社群與內容行銷，用「低預算、高頻率」的方式試圖為實體店面帶來穩定的線上流量。",
    approach: [
      {
        title: "釐清店家定位與受眾",
        body:
          "與老闆訪談理解品牌故事、商品特色與目標客群，把「民雄在地小賣所」的人情味與生活感，轉譯成可以持續產出的內容主題。",
      },
      {
        title: "社群圖文與行銷活動",
        body:
          "製作系列圖文貼文、節慶主題活動與限動互動，維持貼文節奏與品牌一致性；同步操作 LINE 官方帳號經營回頭客。",
      },
      {
        title: "數據追蹤與內容迭代",
        body:
          "以社群後台數據觀察貼文成效，迭代內容主題與發文時段，把有限資源集中在表現最好的內容形式上。",
      },
    ],
    impact: [
      "3 個月 社群瀏覽量突破 80K（+741%）",
      "吸引 KLOOK 主動聯繫，進入合作洽談",
      "中正資管電商競賽 第一名",
    ],
    outcome:
      "老闆親口表示，因為網路宣傳為店面帶來許多新顧客；更意外的是 KLOOK 看見了內容，主動聯繫進入合作洽談。這段經歷讓我學到現行社群行銷的節奏與方法——真正的影響力，來自持續穩定、用對受眾語言說話的內容累積。",
    stack: ["Instagram", "LINE 官方帳號", "Content Design"],
    featured: true,
  },
  {
    id: "3c-dw",
    title: "3C 賣場銷售資料倉儲建模",
    role: "資料倉儲 / BI 分析",
    cat: "data",
    accent: "g-blue",
    year: "2024",
    tag: "Big Data 課堂專案 · 滿分",
    cover: "/projects/3c-dw.png",
    summary:
      "以某 3C 賣場銷售資料為基礎，完成資料倉儲建模、ETL 與 Tableau 視覺化分析，把零散的營運資料收斂為可決策的商業洞察。",
    problem:
      "四張分散的營運資料表（商品 / 顧客 / 銷售 / 時間），如何正規化成可供決策的商業洞察？",
    background:
      "本專案為「大數據的分析與應用」課堂專案，核心挑戰是把原本分散於多張 OLTP 表的資料，重新設計為適合分析的 OLAP 資料倉儲，並產出能直接支援商業決策的儀表板。",
    approach: [
      {
        title: "星型資料倉儲設計",
        body:
          "把商品、顧客、銷售、時間四張資料表梳理成符合星型（Star Schema）的資料倉儲架構，以銷售事件為事實表，周圍放置維度表。",
      },
      {
        title: "SQL 撰寫與 ETL",
        body:
          "使用 SQL JOIN 把四張來源表整合為分析用大表，完成從原始資料到倉儲的 ETL 流程，處理資料清洗、型別統一與缺漏值。",
      },
      {
        title: "Tableau 視覺化儀表板",
        body:
          "以 Tableau 建立銷售趨勢、顧客行為與商品績效的儀表板，最後彙整洞察，針對銷售淡旺季與顧客分群提出具體建議。",
      },
    ],
    impact: [
      "繪製星型資料倉儲（Star Schema），完成 ETL",
      "以 SQL JOIN 整合出分析用主表",
      "透過 Tableau 產出銷售趨勢 / 顧客行為儀表板",
      "專案取得課堂滿分評價",
    ],
    outcome:
      "這個專案讓我綜合運用資料倉儲建模、SQL 操作、BI 工具與商業分析的能力——從 schema 畫起，一路做到儀表板與洞察，也讓我真正體會「資料長什麼樣」會直接決定「能問出什麼問題」。",
    stack: ["SQL", "Tableau", "Star Schema", "ETL"],
  },
  {
    id: "traffic-ml",
    title: "交通事故死亡預測 · ML 模型選型",
    role: "資料科學 / 模型評估",
    cat: "data",
    accent: "g-red",
    year: "2025",
    tag: "AI & ML 課堂專案",
    cover: "/projects/traffic-ml.jpg",
    summary:
      "以真實交通事故資料訓練多種機器學習模型預測是否致死，針對「漏報代價遠高於誤報」的情境，提出情境化的模型選擇建議。",
    problem:
      "在死亡事故預測場景中，漏報（false negative）遠比誤報代價高，如何選出最合適的模型與指標？",
    background:
      "本專案為「人工智慧與機器學習」課堂專案。致命交通事故的預測是典型的「不對稱代價」問題——錯過一個真實致死事件，遠比誤報幾件非致死事件造成更大的社會成本，因此模型選擇不能只看 Accuracy。",
    approach: [
      {
        title: "資料清理與特徵工程",
        body:
          "針對交通事故資料進行缺漏值處理、類別編碼與特徵縮放，並把是否致死設為二元分類目標變數。",
      },
      {
        title: "多模型比較",
        body:
          "建立 Decision Tree、Logistic Regression、Linear Discriminant Analysis、SVC 與 NuSVC 五種模型，控制資料切分方式與隨機種子以確保可比性。",
      },
      {
        title: "情境化指標與選型建議",
        body:
          "以 Recall、Precision、F1 而非單純 Accuracy 作為評估主軸；最終 NuSVC 的 Recall 達 0.63、F1 0.65，被提出作為敏感場景下最優先採用的模型。",
      },
    ],
    impact: [
      "比較 Decision Tree / Logistic / LDA / SVC / NuSVC 五種模型",
      "提出 recall > precision 的情境化選型建議",
      "NuSVC Recall 達 0.63、F1 0.65，作為最敏感模型首選",
    ],
    outcome:
      "這個專案讓我第一次認真回答「哪個模型最好？」這個問題的真實答案：沒有絕對最好，只有在特定場景、特定代價結構下最合適。把模型評估接回業務情境，是資料科學真正能落地的關鍵。",
    stack: ["Python", "Pandas", "Sklearn"],
  },
  {
    id: "ncu-explore",
    title: "中正校系探索網 · 資料庫全端",
    role: "系統設計 / 全端開發",
    cat: "web",
    accent: "g-yellow",
    year: "2024",
    tag: "資料庫課堂專案",
    cover: "/projects/ncu-explore.png",
    summary:
      "從 ER Model 開始設計、完成 1NF–3NF 正規化，並以 PHP + SQL 實作一個提供高中生查詢中正大學系所資訊的全端網站。",
    problem:
      "高中生查詢大學系所資訊時缺乏整合介面，如何用標準 ER Model 建構可搜尋、可收藏、可統計的服務？",
    background:
      "這是資料庫管理課程的期末專案，要求從 ER Model 出發完整走完資料庫設計、系統開發與部署。我們選擇「校系探索網」作為題目，一方面回應高中生選填志願時的資訊落差，另一方面藉此練習關聯式設計的完整邏輯。",
    approach: [
      {
        title: "ER Model 與正規化",
        body:
          "從實體關係圖出發，依據正規化理論完成 1NF → 2NF → 3NF 的資料表設計，確保資料無重複、無異常依賴，也方便後續擴充。",
      },
      {
        title: "搜尋與篩選功能",
        body:
          "提供關鍵字與進階條件篩選，使用者可依學群、地區等條件快速定位想了解的系所。",
      },
      {
        title: "會員系統與喜好清單",
        body:
          "實作會員註冊、登入與喜好清單管理，讓使用者可儲存關注的系所、回訪繼續比較。",
      },
      {
        title: "統計圖表與 RWD",
        body:
          "以使用者行為資料產出統計圖表，提供站方視角的洞察；同時支援響應式設計，兼顧 PC 與手機使用體驗。",
      },
    ],
    impact: [
      "從 ER Model 完成 1NF → 3NF 正規化設計",
      "開發關鍵字＋進階篩選、會員系統、喜好清單",
      "完整 RWD 響應式設計與使用者統計圖表",
    ],
    outcome:
      "這個專案是我第一次把「資料庫建模」當作系統的地基來設計——當 schema 想清楚，後面的功能就像拼圖一樣自然落位。也讓我體會到全端專案裡，看不見的正規化設計，往往比看得見的 UI 還更決定系統能不能長大。",
    stack: ["HTML", "PHP", "SQL", "RWD"],
  },
  {
    id: "taiwan-travel",
    title: "探索 · 福爾摩沙 Taiwan Travel",
    role: "前端開發 / API 整合",
    cat: "web",
    accent: "g-green",
    year: "2024",
    tag: "自學實作專案",
    cover: "/projects/taiwan-travel.jpg",
    summary:
      "串接政府運輸資料流通 TDX API 的台灣景點導覽網站，提供地圖與圖文雙模式瀏覽，並以 Mobile First 完整響應式設計。",
    problem:
      "串接政府 TDX 公開 API，如何讓使用者能以 PC / Mobile 雙介面直覺地探索台灣縣市景點？",
    background:
      "本專案參考 The F2E 前端修煉時光屋的 UI 設計圖（Designer: Jhen），作為我自學現代前端的綜合實作題目，重點在實際對接政府開放資料 API，並把資訊結構轉化為直覺的使用者體驗。",
    approach: [
      {
        title: "TDX API 串接",
        body:
          "串接運輸資料流通 TDX 平台的景點 API，處理 OAuth Token 驗證與分頁資料抓取，將即時景點資料轉換為前端需要的資料結構。",
      },
      {
        title: "地圖 × 列表雙模式",
        body:
          "提供地圖與圖文列表兩種瀏覽模式，支援依縣市地區篩選；讓使用者可以從「我在哪裡附近」或「我想去哪一區」兩個角度出發探索。",
      },
      {
        title: "Mobile First 響應式設計",
        body:
          "以行動裝置為主要設計基準，再向上延伸到桌機版面，確保小螢幕上的篩選、地圖互動與內容閱讀都流暢可用。",
      },
    ],
    impact: [
      "串接運輸資料流通 TDX API 取得即時景點資料",
      "地圖＋列表雙模式切換，支援地區篩選",
      "完整響應式設計，Mobile 體驗優先",
    ],
    outcome:
      "這個專案讓我熟悉政府公開 API 的實務運作：文件、Token、速率限制都不是教科書上的抽象概念，而是要一個個處理的現實。也讓我更熟練把設計稿轉化為可維護的 React 元件結構。",
    stack: ["React", "TailwindCSS", "TDX API"],
  },
  {
    id: "salama-seo",
    title: "傻啦慢食旅 SALAMA · SEO 行銷",
    role: "SEO 操盤 / 成效分析",
    cat: "growth",
    accent: "g-blue",
    year: "2024",
    tag: "中正資管 SEO 競賽 季軍",
    cover: "/projects/salama-seo.png",
    summary:
      "協助商家規劃並架設宣傳網站，以關鍵字策略 + Google Analytics / Search Console 執行 SEO 操盤，把目標關鍵字推上搜尋結果第一位。",
    problem:
      "商家網站在搜尋結果上能見度低，如何透過關鍵字策略與數據分析，在有限時間內提升排名？",
    background:
      "這是中正資管 SEO 競賽的操盤專案。傻啦慢食旅是一間希望拓展觀光客流的商家，競賽要求團隊在限定時間內，用真實數據工具把網站從「搜不到」做到「搜得到、點得進」。",
    approach: [
      {
        title: "關鍵字策略設計",
        body:
          "分析目標受眾搜尋意圖，挑選兼顧流量與競爭度的核心與長尾關鍵字，作為網站內容與頁面結構的骨幹。",
      },
      {
        title: "網站內容與技術優化",
        body:
          "協助規劃與調整網站內容結構、Meta 資訊、內部連結配置，讓搜尋引擎更容易理解頁面主題，也讓使用者看得順。",
      },
      {
        title: "GA / Search Console 數據分析",
        body:
          "以 Google Analytics 與 Search Console 持續追蹤關鍵字排名、點擊與頁面停留時間，依數據迭代內容與關鍵字策略。",
      },
    ],
    impact: [
      "以 Google Analytics / Search Console 執行數據分析",
      "運用關鍵字策略成功將目標關鍵字衝上搜尋結果第 1 位",
      "中正資管 SEO 競賽 第三名",
    ],
    outcome:
      "把目標關鍵字衝上搜尋結果第 1 位，只是操盤結果，更重要的是這段經歷讓我完整走過 SEO 工具的實務操作——從策略、到執行、到看數據修正，真正理解行銷推廣背後的數據迴圈。",
    stack: ["Google Analytics", "Search Console", "SEO"],
  },
  {
    id: "movie-finder",
    title: "電影查詢網站 · React + AppWrite",
    role: "前端開發 / 後端即服務",
    cat: "web",
    accent: "g-red",
    year: "2024",
    tag: "自學實作專案",
    cover: "/projects/movie-finder.png",
    summary:
      "以 React + AppWrite BaaS 架構打造一個具備即時搜尋、熱門排行與收藏紀錄的現代電影資料站，練習前後端整合。",
    problem:
      "如何在不自建後端的前提下，實作一個具備即時搜尋、熱門排行與收藏紀錄的現代電影資料站？",
    background:
      "本專案是我自學前端期間的綜合實作，重點不在「做出一個電影網站」，而是透過這個題目實際體驗 Backend as a Service 的架構如何加速前端開發者獨立出貨完整產品。",
    approach: [
      {
        title: "React + TailwindCSS 前端",
        body:
          "以 React 建構元件化架構、TailwindCSS 快速落地現代化介面，實作搜尋、列表、詳情與收藏等主要頁面。",
      },
      {
        title: "AppWrite BaaS 整合",
        body:
          "使用 AppWrite 作為 Backend as a Service，處理使用者身份、收藏紀錄與搜尋次數統計，省去自建後端與資料庫的時間。",
      },
      {
        title: "熱門排行榜",
        body:
          "以使用者實際搜尋行為資料計算熱門榜，讓榜單能真正反映站內使用情況，而不是寫死在前端的假資料。",
      },
    ],
    impact: [
      "以 React + TailwindCSS 實現流暢介面與排行榜",
      "使用 AppWrite 作為 BaaS 管理使用者行為與資料",
      "深化前後端整合與 BaaS 架構理解",
    ],
    outcome:
      "這個專案讓我理解到 BaaS 並不只是「懶得寫後端的替代品」——它讓前端工程師能以更小的團隊、更快的節奏完整出貨產品，這對獨立開發者與小型團隊來說是實質的生產力槓桿。",
    stack: ["React", "TailwindCSS", "AppWrite"],
  },
];
