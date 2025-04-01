// Topic view functionality
$(document).ready(function() {
    // Initialize translations
    updateInterfaceLanguage();
    
    // Check if user is logged in
    checkAuthStatus();
    
    // Get topic ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('id');
    
    if (!topicId) {
        // Redirect to forum if no topic ID
        window.location.href = 'forum.html';
        return;
    }
    
    // Load topic details
    loadTopic(topicId);
    
    // Handle reply form visibility
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        $('#replyForm').show();
        $('#signInToReply').hide();
    } else {
        $('#replyForm').hide();
        $('#signInToReply').show();
    }
    
    // Handle reply form submission
    $('#replyForm').on('submit', function(e) {
        e.preventDefault();
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'signin.html';
            return;
        }
        
        const content = $('#replyContent').val();
        
        // Simple validation
        if (!content) {
            alert('Please enter a reply');
            return;
        }
        
        // Add reply to topic
        addReply(topicId, content, currentUser);
        
        // Reset form
        $('#replyForm')[0].reset();
    });
});

// Load topic details
function loadTopic(topicId) {
    const topics = JSON.parse(localStorage.getItem('topics') || '[]');
    const topic = topics.find(t => t.id === topicId);
    
    if (!topic) {
        // Topic not found, redirect to forum
        window.location.href = 'forum.html';
        return;
    }
    
    // Update page title
    document.title = `${topic.title} - Indigenous Language Learning`;
    
    // Update topic views
    updateTopicViews(topicId);
    
    // Display topic details
    const topicDetails = $('#topicDetails');
    topicDetails.html(`
        <h2 class="topic-title-header">${topic.title}</h2>
        <div class="topic-meta">
            <span class="topic-category">${getCategoryName(topic.category)}</span> • 
            <span class="topic-author">${topic.authorName}</span> • 
            <span class="topic-date">${formatDate(topic.createdAt)}</span>
        </div>
        <div class="topic-content">${formatContent(topic.content)}</div>
    `);
    
    // Display replies
    const repliesList = $('#repliesList');
    repliesList.empty();
    
    if (topic.replies.length === 0) {
        repliesList.html('<div class="no-replies-message" data-i18n="noRepliesYet">No replies yet. Be the first to reply!</div>');
        return;
    }
    
    // Sort replies by oldest first
    topic.replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    
    // Add replies to the list
    topic.replies.forEach(reply => {
        const replyItem = $(`
            <div class="reply-item">
                <div class="reply-meta">
                    <span class="reply-author">${reply.authorName}</span>
                    <span class="reply-date">${formatDate(reply.createdAt)}</span>
                </div>
                <div class="reply-content">${formatContent(reply.content)}</div>
            </div>
        `);
        
        repliesList.append(replyItem);
    });
}

// Add reply to topic
function addReply(topicId, content, user) {
    const topics = JSON.parse(localStorage.getItem('topics') || '[]');
    const topicIndex = topics.findIndex(t => t.id === topicId);
    
    if (topicIndex === -1) {
        return;
    }
    
    // Create new reply
    const newReply = {
        id: Date.now().toString(),
        content,
        authorId: user.id,
        authorName: user.username,
        createdAt: new Date().toISOString()
    };
    
    // Add reply to topic
    topics[topicIndex].replies.push(newReply);
    
    // Save to localStorage
    localStorage.setItem('topics', JSON.stringify(topics));
    
    // Reload topic
    loadTopic(topicId);
}

// Update topic views
function updateTopicViews(topicId) {
    const topics = JSON.parse(localStorage.getItem('topics') || '[]');
    const topicIndex = topics.findIndex(t => t.id === topicId);
    
    if (topicIndex === -1) {
        return;
    }
    
    // Increment views
    topics[topicIndex].views += 1;
    
    // Save to localStorage
    localStorage.setItem('topics', JSON.stringify(topics));
}

// Get category name from category ID
function getCategoryName(categoryId) {
    const categories = {
        'general': 'General Discussion',
        'learning': 'Learning Tips',
        'resources': 'Resources',
        'events': 'Events'
    };
    
    return categories[categoryId] || categoryId;
}

// Format content with line breaks
function formatContent(content) {
    return content.replace(/\n/g, '<br>');
}

// Format date to a readable string
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else {
        return date.toLocaleDateString();
    }
}
