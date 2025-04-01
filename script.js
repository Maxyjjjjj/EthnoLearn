const appConfig = {
  learningLanguages: [
      "Nahuatl",
      "Inuktitut",
      "Kwak'wala",
      "Navajo",
      "Yucatec Mayan",
      "Nivkh",
      "Quechua",
      "Tagalog",
      "Cherokee",
      "Mohawk",
      "Cree",
      "Mapudungun",
      "Hawaiian",
      "Kildin Sami",
      "Tlingit",
      "Abkhaz",
      "Tsez",
      "Tabasaran",
      "Nenets",
      "Ket",
      "Abenaki",
      "Ainu",
      "Aymara",
      "Shoshone",
      "O'odham",
      "Pitjantjatjara",
      "Djambarrpuyngu",
      "Siberian Yupik",
      "Jeju",
      "Kikuyu",
      "Kumeyaay",
      "Guugu Yimithirr",
      "Mi'kmaq",
      "Aleut",
      "Maasai",
      "Nuu-Chah-Nulth",
      "Nez Perce",
      "ǃKung",
      "Xavante",
      "Uyghur",
      "Sumerian",
      "Rusyn",
      "Zuni",
      "Basque",
      "Welsh",
      "Quapaw",
      "Nheengatu",
      "Powhatan",
      "Samogitian",
      "Yaqui",
      "Tsimshian",
      "Passamaquoddy",
      "Mohave",
      "Lushootseed",
      "Maori",
      "Lhasa Tibetan",
      "Khoekhoe",
      "Katu",
      "Itelmen",
      "Icelandic",
      "Haida",
      "Elfdalian",
      "Deg Xinag",
      "Chukchi",
      "Chulym",
      "Comanche",
      "Beothuk",
      "Bashkir",
      "Selkup",
      "Djeoromitxí",
      "Yakut",
      "Kokborok",
      "Kabardian",
      "Quileute",
      "Dënesųłiné",
      "Tsakhur",
      "Belarusian",
      "Yokuts",
      "Kolyma Yukaghir",
      "Kutenai",
      "Adyghe",
      "Arapaho",
      "Blackfoot",
      "Buryat",
      "Chamorro",
      "Dakota",
      "Evenki",
      "Fijian",
      "Gwich'in",
      "Hopi",
      "Igbo",
      "Jingpo",
      "Kalaallisut",
      "Lakota",
      "Mansi",
      "Naxi",
      "Ojibwe",
      "Pawnee",
      "Rapanui",
      "Sandawe",
      "Tuvan",
      "Udmurt",
      "Veps",
      "Warlpiri",
      "Xhosa",
      "Yoruba",
      "Zhuang",
      "Zulu",
      "Hadza",
      "Khanty",
      "Rohingya",
      "Scots Gaelic",
      "Koryak",
      "Nganasan",
      "Kalmyk",
      "Komi",
      "Yurok",
      "Guarani",
      "Chinook",
      "Caddo",
      "Chechen",
      "Alyutor",
      "Pirahã",
      "Sirenik"
  ],
  interfaceLanguages: ["English", "French", "Ukrainian", "Mongolian", "Spanish", "Japanese", "Chinese", "Korean", "German", "Italian", "Danish", "Swedish", "Polish", "Finnish", "Hungarian", "Vietnamese", "Hindi", "Arabic", "Swahili", "Hebrew", "Thai", "Kazakh", "Czech", "Georgian", "Armenian"],
  defaultInterfaceLanguage: "English"
};

// Initialize interface language selector
const interfaceLanguageSelect = document.getElementById('interfaceLanguage');
if (interfaceLanguageSelect) {
  appConfig.interfaceLanguages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = lang;
    interfaceLanguageSelect.appendChild(option);
  });
  interfaceLanguageSelect.value = appConfig.defaultInterfaceLanguage;
  interfaceLanguageSelect.addEventListener('change', function () {
    const newInterfaceLanguage = this.value;
    localStorage.setItem('interfaceLanguage', newInterfaceLanguage);
    window.location.reload();
  });
  // Load saved interface language from localStorage
  const savedInterfaceLanguage = localStorage.getItem('interfaceLanguage');
  if (savedInterfaceLanguage) {
    interfaceLanguageSelect.value = savedInterfaceLanguage;
  }
}
  $(document).ready(function() {
    // Check if user is logged in
    checkAuthStatus();
  
    function initializeLessonContent() {
      const currentPage = window.location.pathname.replace(/^.*[\\/]/, '');
      const lessonContent = document.getElementById('lessonContent');

      if (!lessonContent) return;

      if (currentPage === 'lesson.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const language = urlParams.get('lang');
        const lessonNumber = parseInt(urlParams.get('lesson')) || 1;

        renderLesson(language, lessonNumber);
      }
    }

    // Initialize when DOM is loaded
    const urlParams = new URLSearchParams(window.location.search);
    const lessonLang = urlParams.get('lang');
  
    if (lessonLang && document.getElementById('lessonContent')) {
      initializeLessonContent();
      const learningSelector = document.getElementById('learningLanguageSelector');
      if (learningSelector) {
        learningSelector.value = lessonLang;
      }
    }

    // Initialize interface language
    const savedInterfaceLang = localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage;
    initializeInterfaceLanguageSelector();
    updateInterfaceLanguage(savedInterfaceLang);
    handleNavigation();
  
    // Initialize language grid if on home page
    if (document.getElementById('languageGrid')) {
      populateLanguageGrid();
    }
  });

  function updateInterfaceLanguage(language) {
    document.documentElement.setAttribute('lang', language);
  
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (uiTranslations[language] && uiTranslations[language][key]) {
        if (element.tagName === 'TITLE') {
          document.title = uiTranslations[language][key];
        }
        element.textContent = uiTranslations[language][key];
      }
    });

    const languageSelectors = document.querySelectorAll('select');
    languageSelectors.forEach(selector => {
      Array.from(selector.options).forEach(option => {
        const langName = languageNameTranslations[language]?.[option.value] || option.value;
        option.textContent = langName;
      });
    });

    const languageCards = document.querySelectorAll('.language-card h3');
    languageCards.forEach(card => {
      const lang = card.closest('.language-card').dataset.language;
      card.textContent = languageNameTranslations[language]?.[lang] || lang;
    });

    const progressCards = document.querySelectorAll('.progress-card h3');
    progressCards.forEach(card => {
      const lang = card.textContent;
      card.textContent = languageNameTranslations[language]?.[lang] || lang;
    });

    document.dir = ['ar', 'he', 'fa'].includes(language) ? 'rtl' : 'ltr';
  }

  function initializeInterfaceLanguageSelector() {
    const interfaceLanguageSelector = document.getElementById('interfaceLanguageSelector');
    if (!interfaceLanguageSelector) return;

    interfaceLanguageSelector.innerHTML = '';
  
    const selectedLanguage = localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage;

    appConfig.interfaceLanguages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.textContent = lang;
    
      if (lang === selectedLanguage) {
        option.selected = true;
      }
    
      interfaceLanguageSelector.appendChild(option);
    });

    interfaceLanguageSelector.addEventListener('change', function() {
      const newLang = this.value;
      localStorage.setItem('interfaceLanguage', newLang);
      updateInterfaceLanguage(newLang);
    
      if (document.getElementById('languageGrid')) {
        populateLanguageGrid();
      }
    });
  }

  function handleNavigation() {
    const homeLink = document.getElementById('homeLink');
    const progressLink = document.getElementById('progressLink');
    const settingsLink = document.getElementById('settingsLink');
    const forumLink = document.getElementById('forumLink');
    const signInLink = document.getElementById('signInLink');
    const contentContainer = document.getElementById('mainContent') || document.getElementById('lessonContent');

    if (!contentContainer) return;

    const setActiveLink = (clickedLink) => {
      [homeLink, progressLink, settingsLink, forumLink].forEach(link => {
        if (link) link.classList.remove('active-nav-link');
      });
      if (clickedLink) clickedLink.classList.add('active-nav-link');
    };

    homeLink?.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveLink(homeLink);
      window.location.href = 'index.html';
    });

    progressLink?.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveLink(progressLink);
      contentContainer.innerHTML = `
        <h2 data-i18n="progress">Your Learning Progress</h2>
        <div class="progress-container">
          ${generateProgressContent()}
        </div>
      `;
      updateInterfaceLanguage(localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage);
    });

    settingsLink?.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveLink(settingsLink);
      contentContainer.innerHTML = `
        <h2 data-i18n="settings">Settings</h2>
        <div class="settings-section">
          <h3 data-i18n="interfaceLanguage">Interface Language:</h3>
          <div id="settingsContent"></div>
        </div>
      `;
      updateInterfaceLanguage(localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage);
      initializeSettingsLanguageSelector();
    });

    forumLink?.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveLink(forumLink);
      window.location.href = 'forum.html';
    });

    signInLink?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'signin.html';
    });
  }

  function generateProgressContent() {
    const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    const currentLanguage = localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage;
  
    if (Object.keys(progress).length === 0) {
      return '<p data-i18n="noProgress">You haven\'t started learning any languages yet.</p>';
    }
  
    return Object.entries(progress).map(([lang, data]) => `
      <div class="progress-card">
        <h3>${languageNameTranslations[currentLanguage]?.[lang] || lang}</h3>
        <p>Lessons completed: ${data.completedLessons || 0}</p>
        <p>Last accessed: ${new Date(data.lastAccessed || Date.now()).toLocaleDateString()}</p>
        <button onclick="redirectToLesson('${lang}')" data-i18n="continue">Continue</button>
      </div>
    `).join('');
  }

  function initializeSettingsLanguageSelector() {
    const settingsContent = document.getElementById('settingsContent');
    if (!settingsContent) return;

    const currentLanguage = localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage;
    const languageSelector = document.createElement('select');
    languageSelector.className = 'language-select';
  
    appConfig.interfaceLanguages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.textContent = languageNameTranslations[currentLanguage]?.[lang] || lang;
      if (lang === currentLanguage) {
        option.selected = true;
      }
      languageSelector.appendChild(option);
    });
  
    settingsContent.innerHTML = '';
    settingsContent.appendChild(languageSelector);
  
    languageSelector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('interfaceLanguage', newLang);
      updateInterfaceLanguage(newLang);
    
      const mainSelector = document.getElementById('interfaceLanguageSelector');
      if (mainSelector) {
        mainSelector.value = newLang;
      }
    
      initializeSettingsLanguageSelector();
    });
  }

  function redirectToLesson(language) {
    if (!language) {
      console.error('No language specified for lesson redirect');
      return;
    }
  
    const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    const currentLesson = progress[language]?.currentLesson || 1;
  
    progress[language] = {
      ...progress[language],
      lastAccessed: Date.now(),
      currentLesson: currentLesson
    };
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  
    window.location.href = `lesson.html?lang=${encodeURIComponent(language)}&lesson=${currentLesson}`;
  }

  function getTotalLessons(language) {
    if (!lessonData[language] || !lessonData[language].lessons) {
      return 0;
    }
    return lessonData[language].lessons.length;
  }

  function populateLanguageGrid() {
    const languageGrid = document.getElementById('languageGrid');
    if (!languageGrid) return;
  
    const currentInterfaceLanguage = localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage;
  
    const sortedLanguages = [...appConfig.learningLanguages].sort((a, b) => {
      const nameA = languageNameTranslations[currentInterfaceLanguage]?.[a] || a;
      const nameB = languageNameTranslations[currentInterfaceLanguage]?.[b] || b;
      return nameA.localeCompare(nameB);
    });
  
    let html = '';
    sortedLanguages.forEach(language => {
      const translatedName = languageNameTranslations[currentInterfaceLanguage]?.[language] || language;
      const nativeName = lessonData[language]?.basicInfo?.nativeName || language;
      const lessonCount = getTotalLessons(language);
    
      html += `
        <div class="language-card" data-language="${language}">
          <h3>${translatedName}</h3>
          <p class="native-name">${nativeName}</p>
          <p class="lesson-count">${lessonCount} ${lessonCount === 1 ? 'lesson' : 'lessons'}</p>
          <button class="start-button" onclick="redirectToLesson('${language}')" data-i18n="startLearning">
            Start Learning
          </button>
        </div>
      `;
    });
  
    languageGrid.innerHTML = html;
    updateInterfaceLanguage(currentInterfaceLanguage);
  }

  function renderLesson(language, lessonNumber) {
    const lessonContent = document.getElementById('lessonContent');
    if (!lessonContent) return;
  
    if (!lessonData || !lessonData[language]) {
      lessonContent.innerHTML = `
        <h2>${languageNameTranslations[localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage][language] || language} - Lesson ${lessonNumber}</h2>
        <p>Lesson content not available.</p>
      `;
      return;
    }
  
    const lesson = lessonData[language].lessons?.[lessonNumber - 1];
    if (!lesson) {
      lessonContent.innerHTML = `
        <h2>${languageNameTranslations[localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage][language] || language} - Lesson ${lessonNumber}</h2>
        <p>This lesson is not available yet.</p>
      `;
      return;
    }
  
    let html = `
      <h2>${languageNameTranslations[localStorage.getItem('interfaceLanguage') || appConfig.defaultInterfaceLanguage][language] || language} - ${lesson.title}</h2>
      <div class="lesson-info">
        <p>Difficulty: ${lesson.difficulty}</p>
      </div>
      <div class="vocabulary-section">
        <h3>Vocabulary</h3>
        <div class="vocabulary-list">
    `;
  
    lesson.vocabulary.forEach(item => {
      html += `
        <div class="vocabulary-item">
          <div class="word">${item.word}</div>
          <div class="translation">${item.translation}</div>
        </div>
      `;
    });
  
    html += `
        </div>
      </div>
      <div class="exercises-section">
        <h3>Exercises</h3>
    `;
  
    lesson.exercises.forEach((exercise, index) => {
      html += `<div class="exercise" data-exercise-id="${index + 1}">`;
    
      if (exercise.type === 'matching') {
        html += `
          <h4>Matching Exercise</h4>
          <div class="matching-exercise">
            <div class="matching-words">
              ${exercise.pairs.map((pair, i) => `
                <div class="matching-word" data-word-id="${i}">${pair.word}</div>
              `).join('')}
            </div>
            <div class="matching-translations">
              ${exercise.pairs.map((pair, i) => `
                <div class="matching-translation" data-translation-id="${i}">${pair.translation}</div>
              `).join('')}
            </div>
          </div>
        `;
      } else if (exercise.type === 'pronunciation') {
        html += `
          <h4>Pronunciation Exercise</h4>
          <div class="pronunciation-exercise">
            ${exercise.words.map(word => `
              <div class="pronunciation-item">
                <div class="pronunciation-word">${word.word}</div>
                <div class="pronunciation-translation">${word.translation}</div>
                <button class="pronunciation-button">Practice</button>
              </div>
            `).join('')}
          </div>
        `;
      } else if (exercise.type === 'multipleChoice') {
        html += `
          <h4>Multiple Choice Exercise</h4>
          <div class="multiple-choice-exercise">
            <div class="question">${exercise.question}</div>
            <div class="options">
              ${exercise.options.map(option => `
                <div class="option">
                  <input type="radio" name="mc-${index}" value="${option}">
                  <label>${option}</label>
                </div>
              `).join('')}
            </div>
            <button class="check-answer-button">Check Answer</button>
          </div>
        `;
      }
    
      html += `</div>`;
    });
  
  html += `
    </div>
    <div class="lesson-navigation">
      ${lessonNumber > 1 ? `<button onclick="changeLessonNumber(${lessonNumber - 1})" class="prev-lesson">Previous Lesson</button>` : ''}
      ${lessonNumber < getTotalLessons(language) ? `<button onclick="changeLessonNumber(${lessonNumber + 1})" class="next-lesson">Next Lesson</button>` : ''}
    </div>
  `;
  
  lessonContent.innerHTML = html;
  
  // Update progress
  const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
  progress[language] = {
    ...progress[language],
    lastAccessed: Date.now(),
    currentLesson: lessonNumber,
    completedLessons: Math.max(progress[language]?.completedLessons || 0, lessonNumber - 1)
  };
  localStorage.setItem('learningProgress', JSON.stringify(progress));
}

// Change lesson number
function changeLessonNumber(newLesson) {
  if (newLesson < 1) return;

  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get('lang');
  
  if (!language) {
    console.error('No language specified for lesson navigation');
    return;
  }

  // Update progress
  const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
  progress[language] = {
    ...progress[language],
    currentLesson: newLesson
  };
  localStorage.setItem('learningProgress', JSON.stringify(progress));
  
  window.location.href = `lesson.html?lang=${encodeURIComponent(language)}&lesson=${newLesson}`;
};

// If checkAuthStatus function is not already defined in script.js, add it:
function checkAuthStatus() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  if (currentUser) {
      // User is logged in
      updateNavForLoggedInUser(currentUser);
  }
}

function updateNavForLoggedInUser(user) {
  const signInLink = $('#signInLink');
  
  if (signInLink.length) {
      signInLink.html(`<span data-i18n="profile">${user.username}</span>`);
      signInLink.attr('href', '#');
      signInLink.after('<li><a href="#" id="logoutLink" data-i18n="logout">Logout</a></li>');
      
      // Add logout functionality
      $('#logoutLink').on('click', function(e) {
          e.preventDefault();
          localStorage.removeItem('currentUser');
          window.location.reload();
      });
  }
}
