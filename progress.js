document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Show login prompt if not logged in
        document.getElementById('loginPrompt').style.display = 'block';
        document.getElementById('progressContent').style.display = 'none';
        return;
    }
    
    // Populate language dropdown with user's learning languages
    populateLanguageDropdown();
    
    // Load initial progress data
    loadProgressData();
    
    // Add event listener for language selection change
    document.getElementById('progressLanguage').addEventListener('change', loadProgressData);
});

/**
 * Populate the language dropdown with languages the user is learning
 */
function populateLanguageDropdown() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const progressLanguageSelect = document.getElementById('progressLanguage');
    
    // Clear existing options
    progressLanguageSelect.innerHTML = '';
    
    // Get user's learning languages from localStorage
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
    const userLanguages = userProgress[currentUser.username] || {};
    
    // If no languages are being learned, add a default message
    if (Object.keys(userLanguages).length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No languages started yet';
        progressLanguageSelect.appendChild(option);
        return;
    }
    
    // Add each language the user is learning
    Object.keys(userLanguages).forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        progressLanguageSelect.appendChild(option);
    });
}

/**
 * Load and display progress data for the selected language
 */
function loadProgressData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const selectedLanguage = document.getElementById('progressLanguage').value;
    
    if (!selectedLanguage) {
        // No language selected or no languages being learned
        displayEmptyProgress();
        return;
    }
    
    // Get user progress data from localStorage
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
    const languageProgress = userProgress[currentUser.username]?.[selectedLanguage] || {};
    
    // Update overall progress
    updateOverallProgress(languageProgress);
    
    // Update lesson progress list
    updateLessonProgressList(languageProgress, selectedLanguage);
    
    // Update statistics
    updateLearningStatistics(languageProgress, selectedLanguage);
}

/**
 * Display empty progress when no language is selected
 */
function displayEmptyProgress() {
    document.getElementById('overallProgressBar').style.width = '0%';
    document.getElementById('overallProgressPercent').textContent = '0%';
    document.getElementById('lessonProgressList').innerHTML = '<p>Start learning to see your progress!</p>';
    document.getElementById('daysStreak').textContent = '0';
    document.getElementById('completedLessons').textContent = '0';
    document.getElementById('vocabularyLearned').textContent = '0';
    document.getElementById('timeSpent').textContent = '0 hrs';
}

/**
 * Update the overall progress bar and percentage
 */
function updateOverallProgress(languageProgress) {
    const lessons = languageProgress.lessons || {};
    const lessonCount = Object.keys(lessons).length;
    
    if (lessonCount === 0) {
        document.getElementById('overallProgressBar').style.width = '0%';
        document.getElementById('overallProgressPercent').textContent = '0%';
        return;
    }
    
    // Calculate completed lessons
    let completedLessons = 0;
    Object.values(lessons).forEach(lesson => {
        if (lesson.completed) {
            completedLessons++;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((completedLessons / lessonCount) * 100);
    document.getElementById('overallProgressBar').style.width = percentage + '%';
    document.getElementById('overallProgressPercent').textContent = percentage + '%';
}

/**
 * Update the lesson progress list
 */
function updateLessonProgressList(languageProgress, language) {
    const lessonProgressList = document.getElementById('lessonProgressList');
    lessonProgressList.innerHTML = '';
    
    const lessons = languageProgress.lessons || {};
    
    // If no lessons started, show message
    if (Object.keys(lessons).length === 0) {
        lessonProgressList.innerHTML = '<p>No lessons started yet. <a href="languages.html">Start learning now!</a></p>';
        return;
    }
    
    // Create a sorted array of lesson numbers
    const lessonNumbers = Object.keys(lessons).map(Number).sort((a, b) => a - b);
    
    // Create progress item for each lesson
    lessonNumbers.forEach(lessonNumber => {
        const lesson = lessons[lessonNumber];
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-progress-item';
        
        const progressPercentage = lesson.progress || 0;
        const completionStatus = lesson.completed ? 'Completed' : `${progressPercentage}% Complete`;
        
        lessonItem.innerHTML = `
            <div class="lesson-info">
                <h3>Lesson ${lessonNumber}</h3>
                <p>${completionStatus}</p>
            </div>
            <div class="lesson-progress-bar-container">
                <div class="lesson-progress-bar" style="width: ${progressPercentage}%"></div>
            </div>
            <a href="lesson.html?lang=${language}&lesson=${lessonNumber}" class="btn continue-btn">
                ${lesson.completed ? 'Review' : 'Continue'}
            </a>
        `;
        
        lessonProgressList.appendChild(lessonItem);
    });
}

/**
 * Update learning statistics
 */
function updateLearningStatistics(languageProgress, language) {
    // Days streak
    const streak = languageProgress.streak || 0;
    document.getElementById('daysStreak').textContent = streak;
    
    // Completed lessons
    const lessons = languageProgress.lessons || {};
    let completedLessons = 0;
    Object.values(lessons).forEach(lesson => {
        if (lesson.completed) {
            completedLessons++;
        }
    });
    document.getElementById('completedLessons').textContent = completedLessons;
    
    // Vocabulary learned
    const vocabularyLearned = languageProgress.vocabularyLearned || 0;
    document.getElementById('vocabularyLearned').textContent = vocabularyLearned;
    
    // Time spent (in hours)
    const timeSpentMinutes = languageProgress.timeSpent || 0;
    const timeSpentHours = (timeSpentMinutes / 60).toFixed(1);
    document.getElementById('timeSpent').textContent = `${timeSpentHours} hrs`;
}