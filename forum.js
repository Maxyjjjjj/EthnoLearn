$(document).ready(function() {
    // Initialize translations
    updateInterfaceLanguage();
    
    // Check if user is logged in
    checkAuthStatus();
    
    // Load topics
    loadTopics();
    
    // Handle category clicks
    $('.category-item').on('click', function() {
        const category = $(this).data('category');
        loadTopics(category);
    });
    
    // Handle new topic button
    $('#newTopicBtn').on('click', function() {
        // Check if user is logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            // Redirect to sign in page
            window.location.href = 'signin.html';
            return;
        }
        
        // Show new topic modal
        $('#newTopicModal').css('display', 'block');
        
        // Populate language dropdown in the modal
        populateLanguageOptions(document.getElementById('topicCategory'));
    });
    
    // Close modal when clicking on X
    $('.close-modal').on('click', function() {
        $('#newTopicModal').css('display', 'none');
    });
    
    // Close modal when clicking outside of it
    $(window).on('click', function(e) {
        if ($(e.target).is('#newTopicModal')) {
            $('#newTopicModal').css('display', 'none');
        }
    });
    
    // Handle new topic form submission
    $('#newTopicForm').on('submit', function(e) {
        e.preventDefault();
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'signin.html';
            return;
        }
        
        const title = $('#topicTitle').val();
        const category = $('#topicCategory').val();
        const content = $('#topicContent').val();
        
        // Simple validation
        if (!title || !category || !content) {
            const selectedLanguage = getUserInterfaceLanguage();
            alert(uiTranslations[selectedLanguage].pleaseAllFields || 'Please fill in all fields');
            return;
        }
        
        // Create new topic
        const newTopic = {
            id: Date.now().toString(),
            title,
            category,
            content,
            authorId: currentUser.id,
            authorName: currentUser.username,
            createdAt: new Date().toISOString(),
            replies: [],
            views: 0
        };
        
        // Save to localStorage
        const topics = JSON.parse(localStorage.getItem('topics') || '[]');
        topics.push(newTopic);
        localStorage.setItem('topics', JSON.stringify(topics));
        
        // Close modal and reset form
        $('#newTopicModal').css('display', 'none');
        $('#newTopicForm')[0].reset();
        
        // Reload topics
        loadTopics(category);
    });
});

// Load topics from localStorage
function loadTopics(category = null) {
    const topics = JSON.parse(localStorage.getItem('topics') || '[]');
    const topicsList = $('#topicsList');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const selectedLanguage = currentUser?.language || 'English';
    const translations = uiTranslations[selectedLanguage];
    
    // Clear current topics
    topicsList.empty();
    
    // Filter by category if provided
    const filteredTopics = category ? topics.filter(t => t.category === category) : topics;
    
    // Sort by newest first
    filteredTopics.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    if (filteredTopics.length === 0) {
        topicsList.html(`<div class="no-topics-message">${translations.noTopicsYet}</div>`);
        return;
    }
    
    // Add topics to the list
    filteredTopics.forEach(topic => {
        const topicItem = $(`
            <div class="topic-item" data-topic-id="${topic.id}">
                <div class="topic-info">
                    <h4 class="topic-title">${topic.title}</h4>
                    <div class="topic-meta">
                        <span class="topic-author">${topic.authorName}</span> • 
                        <span class="topic-date">${formatDate(topic.createdAt, selectedLanguage)}</span>
                    </div>
                </div>
                <div class="topic-stats">
                    <div class="topic-replies">${topic.replies.length} ${translations.replies}</div>
                    <div class="topic-views">${topic.views} ${translations.views || 'views'}</div>
                </div>
            </div>
        `);
        
        // Add click event to navigate to topic
        topicItem.on('click', function() {
            const topicId = $(this).data('topic-id');
            window.location.href = `topic.html?id=${topicId}`;
        });
        
        topicsList.append(topicItem);
    });
}

// Format date to a readable string
function formatDate(dateString, language) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const translations = uiTranslations[language];
    
    if (diffDays === 0) {
        return translations.today || 'Today';
    } else if (diffDays === 1) {
        return translations.yesterday || 'Yesterday';
    } else if (diffDays < 7) {
        return translations.daysAgo?.replace('{days}', diffDays) || `${diffDays} days ago`;
    } else {
        return date.toLocaleDateString(language);
    }
}

// Check if user is logged in and update interface language accordingly
function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User is logged in
        updateNavForLoggedInUser(currentUser);
        updateInterfaceLanguage();
    }
}

function updateNavForLoggedInUser(user) {
    const signInLink = $('#signInLink');
    const signOutLink = $('#signOutLink');
    const selectedLanguage = user.language || 'English';
    const translations = uiTranslations[selectedLanguage];
    
    signInLink.hide();
    signOutLink.show();
    
    const welcomeMessage = $('#welcomeMessage');
    welcomeMessage.text(`${translations.welcome}, ${user.username}!`);
}

function updateInterfaceLanguage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        const languageSelect = $('#languageSelect');
        const selectedLanguage = currentUser.language || 'English';

        // Set the selected language in the select element
        languageSelect.val(selectedLanguage);

        // Add event listener to handle language change
        languageSelect.on('change', function() {
            const newLanguage = this.value;
            localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, language: newLanguage }));
            updateInterfaceLanguage();
            updateNavForLoggedInUser({ ...currentUser, language: newLanguage });
            refreshLanguageGrid();
            
            // Update all text elements with new translations
            updatePageTranslations(newLanguage);
        });
        
        // Initial load of language grid and translations
        refreshLanguageGrid();
        updatePageTranslations(selectedLanguage);
    }
}

// Function to refresh language grid with new translations
function refreshLanguageGrid() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const languageGrid = $('#languageGrid');
    languageGrid.empty();

    const selectedLanguage = currentUser.language || 'English';
    const languageData = uiTranslations[selectedLanguage];
    
    if (languageData) {
        for (const key in languageData) {
            languageGrid.append(`<li>${key}: ${languageData[key]}</li>`);
        }
    } else {
        console.error('Language data not found for:', selectedLanguage);
    }
}

// Function to update all translatable elements on the page
function updatePageTranslations(language) {
    const translations = uiTranslations[language];
    if (!translations) return;

    $('[data-i18n]').each(function() {
        const key = $(this).data('i18n');
        if (translations[key]) {
            $(this).text(translations[key]);
        }
    });
}