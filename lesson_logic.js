// lesson_logic.js - Core lesson functionality

/**
 * Initialize the lesson page when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('lang');
    const lessonNumber = parseInt(urlParams.get('lesson')) || 1;
  
    if (language && document.getElementById('lessonContent')) {
      renderLesson(language, lessonNumber);
    }
  });
  
  /**
   * Render the lesson content based on language and lesson number
   * @param {string} language - The language code
   * @param {number} lessonNumber - The lesson number
   */
  function renderLesson(language, lessonNumber) {
    const lessonContent = document.getElementById('lessonContent');
    if (!lessonContent) return;
  
    lessonContent.innerHTML = '';
      
    if (!isValidLesson(language, lessonNumber)) {
      showLessonNotFound(lessonContent);
      return;
    }
  
    const lesson = lessonData[language].lessons[lessonNumber - 1];
    const html = generateLessonHTML(lesson, language, lessonNumber);
      
    lessonContent.innerHTML = html;
    initializeExercises();
    updateLearningProgress(language, lessonNumber);
  }
  
  /**
   * Check if the requested lesson exists
   * @param {string} language - The language code
   * @param {number} lessonNumber - The lesson number
   * @returns {boolean} - Whether the lesson exists
   */
  function isValidLesson(language, lessonNumber) {
    return lessonData && 
           lessonData[language] && 
           lessonData[language].lessons && 
           lessonData[language].lessons[lessonNumber - 1];
  }
  
  /**
   * Show a message when a lesson is not found
   * @param {HTMLElement} container - The container element
   */
  function showLessonNotFound(container) {
    const interfaceLanguage = localStorage.getItem('interfaceLanguage') || 'English';
    const translations = lessonTranslations[interfaceLanguage];
    container.innerHTML = `
      <div class="lesson-not-found">
        <h2>${translations.lessonNotFound}</h2>
        <p>${translations.lessonNotFoundDesc}</p>
        <a href="index.html" class="return-home">${translations.returnHome}</a>
      </div>
    `;
  }
  
  /**
   * Generate the complete HTML for a lesson
   * @param {Object} lesson - The lesson data
   * @param {string} language - The language code
   * @param {number} lessonNumber - The lesson number
   * @returns {string} - The generated HTML
   */
  function generateLessonHTML(lesson, language, lessonNumber) {
    const interfaceLanguage = localStorage.getItem('interfaceLanguage') || 'English';
    const translations = lessonTranslations[interfaceLanguage];
      
    return `
      <div class="lesson-container">
        <h2>${translations.lessonTitle}</h2>
        <div class="lesson-info">
          <p>${translations.difficulty}: ${translations[lesson.difficulty.toLowerCase()]}</p>
          <p>${translations.lessonNumber}: ${lessonNumber}</p>
        </div>
        ${generateVocabularyHTML(lesson, translations)}
        ${generateExercisesHTML(lesson, translations)}
        ${generateNavigationHTML(language, lessonNumber, translations)}
      </div>
    `;
  }
  
  /**
   * Generate HTML for the vocabulary section
   * @param {Object} lesson - The lesson data
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateVocabularyHTML(lesson, translations) {
    return `
      <div class="vocabulary-section">
        <h3>${translations.vocabulary}</h3>
        <div class="vocabulary-list">
          ${lesson.vocabulary.map(item => `
            <div class="vocabulary-item">
              <div class="word">${item.word}</div>
              <div class="translation">${item.translation}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  /**
   * Generate HTML for the exercises section
   * @param {Object} lesson - The lesson data
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateExercisesHTML(lesson, translations) {
    return `
      <div class="exercises-section">
        <h3>${translations.exercises}</h3>
        ${lesson.exercises.map((exercise, index) => 
          generateExerciseHTML(exercise, index, translations)
        ).join('')}
      </div>
    `;
  }
  
  /**
   * Generate HTML for a single exercise
   * @param {Object} exercise - The exercise data
   * @param {number} index - The exercise index
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateExerciseHTML(exercise, index, translations) {
    let html = `<div class="exercise" data-exercise-id="${index + 1}">`;
      
    switch (exercise.type) {
      case 'matching':
        html += generateMatchingExerciseHTML(exercise, translations);
        break;
      case 'pronunciation':
        html += generatePronunciationExerciseHTML(exercise, translations);
        break;
      case 'multipleChoice':
        html += generateMultipleChoiceExerciseHTML(exercise, translations);
        break;
    }
      
    html += `</div>`;
    return html;
  }
  
  /**
   * Generate HTML for a matching exercise
   * @param {Object} exercise - The exercise data
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateMatchingExerciseHTML(exercise, translations) {
    return `
      <h4>${translations.matching}</h4>
      <p class="instructions">${translations.matchingInstructions}</p>
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
  }
  
  /**
   * Generate HTML for a pronunciation exercise
   * @param {Object} exercise - The exercise data
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generatePronunciationExerciseHTML(exercise, translations) {
    return `
      <h4>${translations.pronunciation}</h4>
      <p class="instructions">${translations.pronunciationInstructions}</p>
      <div class="pronunciation-exercise" data-language="${exercise.language || 'en-US'}">
        ${exercise.words.map(word => `
          <div class="pronunciation-item">
            <div class="pronunciation-word">${word.word}</div>
            <div class="pronunciation-translation">${word.translation}</div>
            <button class="pronunciation-button">${translations.record}</button>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  /**
   * Generate HTML for a multiple choice exercise
   * @param {Object} exercise - The exercise data
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateMultipleChoiceExerciseHTML(exercise, translations) {
    const exerciseId = exercise.id || `mc-${Date.now()}`;
    
    return `
      <h4>${translations.multipleChoice}</h4>
      <div class="multiple-choice-exercise" data-correct-answer="${exercise.correctAnswer}">
        <div class="question">${exercise.question}</div>
        <div class="options">
          ${exercise.options.map(option => `
            <div class="option">
              <input type="radio" name="${exerciseId}" value="${option}">
              <label>${option}</label>
            </div>
          `).join('')}
        </div>
        <button class="check-answer-button">${translations.checkAnswer}</button>
      </div>
    `;
  }
  
  /**
   * Generate HTML for lesson navigation
   * @param {string} language - The language code
   * @param {number} lessonNumber - The lesson number
   * @param {Object} translations - The translations object
   * @returns {string} - The generated HTML
   */
  function generateNavigationHTML(language, lessonNumber, translations) {
    return `
      <div class="lesson-navigation">
        ${lessonNumber > 1 ? 
          `<button onclick="changeLessonNumber(${lessonNumber - 1})" class="prev-lesson">
            ${translations.previousLesson}
          </button>` : ''
        }
        ${lessonNumber < lessonData[language].lessons.length ? 
          `<button onclick="changeLessonNumber(${lessonNumber + 1})" class="next-lesson">
            ${translations.nextLesson}
          </button>` : ''
        }
      </div>
    `;
  }
  
  /**
   * Initialize all exercise types
   */
  function initializeExercises() {
    initializeMultipleChoiceExercises();
    initializeMatchingExercises();
    initializePronunciationExercises();
  }
  
  /**
   * Initialize multiple choice exercises
   */
  function initializeMultipleChoiceExercises() {
    document.querySelectorAll('.multiple-choice-exercise').forEach(exercise => {
      const checkButton = exercise.querySelector('.check-answer-button');
      
      checkButton?.addEventListener('click', () => {
        const selectedOption = exercise.querySelector('input[type="radio"]:checked');
        if (!selectedOption) return;
          
        const isCorrect = selectedOption.value === exercise.dataset.correctAnswer;
        const optionElement = selectedOption.closest('.option');
        
        // Clear previous results
        exercise.querySelectorAll('.option').forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
        });
        
        // Add appropriate class
        optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
          const urlParams = new URLSearchParams(window.location.search);
          const language = urlParams.get('lang');
          const lessonNumber = parseInt(urlParams.get('lesson')) || 1;
          updateLearningProgress(language, lessonNumber);
        }
      });
    });
  }
  
  /**
   * Initialize matching exercises
   */
  function initializeMatchingExercises() {
    document.querySelectorAll('.matching-exercise').forEach(exercise => {
      let selectedWord = null;
      const words = exercise.querySelectorAll('.matching-word');
      const translations = exercise.querySelectorAll('.matching-translation');
  
      words.forEach(word => {
        word.addEventListener('click', () => {
          if (word.classList.contains('matched')) return;
          
          if (selectedWord) {
            selectedWord.classList.remove('selected');
          }
          
          word.classList.add('selected');
          selectedWord = word;
        });
      });
  
      translations.forEach(translation => {
        translation.addEventListener('click', () => {
          if (!selectedWord || translation.classList.contains('matched')) return;
          
          const wordId = selectedWord.getAttribute('data-word-id');
          const translationId = translation.getAttribute('data-translation-id');
          
          if (wordId === translationId) {
            handleCorrectMatch(selectedWord, translation, exercise);
            
            if (isExerciseCompleted(words)) {
              exercise.classList.add('completed');
              const urlParams = new URLSearchParams(window.location.search);
              const language = urlParams.get('lang');
              const lessonNumber = parseInt(urlParams.get('lesson')) || 1;
              updateLearningProgress(language, lessonNumber);
            }
          } else {
            handleIncorrectMatch(selectedWord, translation);
          }
          
          selectedWord = null;
        });
      });
    });
  }
  
  /**
   * Handle a correct match in a matching exercise
   * @param {HTMLElement} word - The word element
   * @param {HTMLElement} translation - The translation element
   * @param {HTMLElement} exercise - The exercise container
   */
  function handleCorrectMatch(word, translation, exercise) {
    word.classList.add('matched');
    translation.classList.add('matched');
    word.classList.remove('selected');
    drawConnectionLine(word, translation, exercise);
  }
  
  /**
   * Handle an incorrect match in a matching exercise
   * @param {HTMLElement} word - The word element
   * @param {HTMLElement} translation - The translation element
   */
  function handleIncorrectMatch(word, translation) {
    word.classList.add('error');
    translation.classList.add('error');
    
    setTimeout(() => {
      word.classList.remove('error', 'selected');
      translation.classList.remove('error');
    }, 1000);
  }
  
  /**
   * Draw a connection line between matched elements
   * @param {HTMLElement} word - The word element
   * @param {HTMLElement} translation - The translation element
   * @param {HTMLElement} exercise - The exercise container
   */
  function drawConnectionLine(word, translation, exercise) {
    const connection = document.createElement('div');
    connection.classList.add('connection-line');
    exercise.appendChild(connection);
      
    const wordRect = word.getBoundingClientRect();
    const translationRect = translation.getBoundingClientRect();
    const exerciseRect = exercise.getBoundingClientRect();
      
    connection.style.left = (wordRect.right - exerciseRect.left) + 'px';
    connection.style.top = (wordRect.top + wordRect.height/2 - exerciseRect.top) + 'px';
    connection.style.width = (translationRect.left - wordRect.right) + 'px';
  }
  
  /**
   * Check if a matching exercise is completed
   * @param {NodeList} words - The word elements
   * @returns {boolean} - Whether all words are matched
   */
  function isExerciseCompleted(words) {
    return Array.from(words).every(w => w.classList.contains('matched'));
  }
  
  /**
   * Initialize pronunciation exercises
   */
  function initializePronunciationExercises() {
    document.querySelectorAll('.pronunciation-exercise').forEach(exercise => {
      const language = exercise.dataset.language || 'en-US';
      const buttons = exercise.querySelectorAll('.pronunciation-button');
      
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const item = button.closest('.pronunciation-item');
          const word = item.querySelector('.pronunciation-word').textContent;
          
          speakWord(word, language, button);
        });
      });
    });
  }
  
  /**
   * Speak a word using speech synthesis
   * @param {string} word - The word to speak
   * @param {string} language - The language code
   * @param {HTMLElement} button - The button element
   */
  function speakWord(word, language, button) {
    try {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = language;
      
      button.classList.add('playing');
      utterance.onend = () => button.classList.remove('playing');
      
      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis failed:', error);
      button.classList.remove('playing');
    }
  }
  
  /**
   * Update the user's learning progress
   * @param {string} language - The language code
   * @param {number} lessonNumber - The lesson number
   */
  function updateLearningProgress(language, lessonNumber) {
    if (!language) return;
    
    const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    
    progress[language] = {
      ...progress[language],
      lastAccessed: Date.now(),
      currentLesson: lessonNumber,
      completedLessons: Math.max(progress[language]?.completedLessons || 0, lessonNumber)
    };
    
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  }
  
  /**
   * Change to a different lesson
   * @param {number} newLesson - The new lesson number
   */
  function changeLessonNumber(newLesson) {
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('lang');
    
    if (!language) return;
  
    if (newLesson < 1) newLesson = 1;
    
    const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    progress[language] = {
      ...progress[language],
      currentLesson: newLesson,
      lastAccessed: Date.now()
    };
    localStorage.setItem('learningProgress', JSON.stringify(progress));
    
    window.location.href = `lesson.html?lang=${encodeURIComponent(language)}&lesson=${newLesson}`;
  }
  
  /**
   * Record audio for pronunciation practice
   * @param {string} language - The language code for speech recognition
   */
  function recordAudio(language) {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition not supported in this browser');
      return;
    }
  
    const recognition = new webkitSpeechRecognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    let isRecording = false;
    
    const pronunciationButtons = document.querySelectorAll('.pronunciation-button');
    pronunciationButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (isRecording) {
          stopRecording(button, recognition);
          isRecording = false;
        } else {
          startRecording(button, recognition);
          isRecording = true;
        }
      });
    });
  
    setupRecognitionEventHandlers(recognition);
  }
  
  /**
   * Start recording audio
   * @param {HTMLElement} button - The button element
   * @param {SpeechRecognition} recognition - The speech recognition object
   */
  function startRecording(button, recognition) {
    button.textContent = 'Stop';
    button.classList.add('recording');
    recognition.start();
  }
  
  /**
   * Stop recording audio
   * @param {HTMLElement} button - The button element
   * @param {SpeechRecognition} recognition - The speech recognition object
   */
  function stopRecording(button, recognition) {
    button.textContent = 'Record';
    button.classList.remove('recording');
    recognition.stop();
  }
  
  /**
   * Set up event handlers for speech recognition
   * @param {SpeechRecognition} recognition - The speech recognition object
   */
  function setupRecognitionEventHandlers(recognition) {
    recognition.onstart = () => console.log('Recording started');
  
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      const pronunciationItem = event.target.closest('.pronunciation-item');
        
      if (pronunciationItem) {
        const word = pronunciationItem.querySelector('.pronunciation-word').textContent;
        const button = pronunciationItem.querySelector('.pronunciation-button');
          
        const similarity = compareSimilarity(transcript.toLowerCase(), word.toLowerCase());
        pronunciationItem.classList.add(similarity > 0.8 ? 'correct' : 'incorrect');
          
        stopRecording(button, recognition);
      }
    };
  
    recognition.onerror = error => {
      console.error('Speech recognition error:', error);
      const button = document.querySelector('.pronunciation-button.recording');
      if (button) {
        stopRecording(button, recognition);
      }
    };
  
    recognition.onend = () => {
      const button = document.querySelector('.pronunciation-button.recording');
      if (button && button.classList.contains('recording')) {
        recognition.start();
      }
    };
  }
  
  /**
   * Compare the similarity between two strings
   * @param {string} str1 - First string
   * @param {string} str2 - Second string
   * @returns {number} - Similarity score between 0 and 1
   */
  function compareSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
      
    if (longer.length === 0) return 1.0;
      
    return (longer.length - levenshteinDistance(longer, shorter)) / parseFloat(longer.length);
  }
  
  /**
   * Calculate the Levenshtein distance between two strings
   * @param {string} s1 - First string
   * @param {string} s2 - Second string
   * @returns {number} - The edit distance
   */
  function levenshteinDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    
    const len1 = s1.length;
    const len2 = s2.length;
    const d = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
    
    for (let i = 0; i <= len1; i++) {
      d[i][0] = i;
    }
    
    for (let j = 1; j <= len2; j++) {
      d[0][j] = j;
    }
    
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1,      // deletion
          d[i][j - 1] + 1,      // insertion
          d[i - 1][j - 1] + cost // substitution
        );
      }
    }
    
    return d[len1][len2];
  }

  /**
   * Show a message when the lesson is not found
   * @param {HTMLElement} container - The container element
   * @param {string} message - The error message
   */
  function showLessonNotFoundError(container, message) {
    container.innerHTML = `
      <div class="lesson-not-found">
        <h2>Lesson Not Found</h2>
        <p>${message}</p>
      </div>
    `;
  }
