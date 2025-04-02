document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'signin.html';
        return;
    }
    
    // Populate interface language dropdown
    populateInterfaceLanguages();
    
    // Load user settings
    loadUserSettings();
    
    // Event listeners
    $('#saveSettingsBtn').on('click', saveSettings);
    $('#changeUsernameBtn').on('click', showChangeUsernameModal);
    $('#changeEmailBtn').on('click', showChangeEmailModal);
    $('#changePasswordBtn').on('click', showChangePasswordModal);
    $('#interfaceLanguage').on('change', updateInterfacePreview);
});

/**
 * Populate interface language options
 */
function populateInterfaceLanguages() {
    const interfaceLanguageSelect = document.getElementById('interfaceLanguage');
    const currentLanguage = localStorage.getItem('interfaceLanguage') || 'English';
    
    // Clear existing options
    interfaceLanguageSelect.innerHTML = '';
    
    // Add available interface languages
    const interfaceLanguages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Russian'];
    
    interfaceLanguages.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        if (language === currentLanguage) {
            option.selected = true;
        }
        interfaceLanguageSelect.appendChild(option);
    });
}

/**
 * Load user settings from localStorage
 */
function loadUserSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Set form values
    $('#username').val(currentUser.username);
    $('#email').val(currentUser.email);
    
    // Set notification preferences (if they exist)
    $('#emailNotifications').prop('checked', currentUser.emailNotifications || false);
    $('#forumNotifications').prop('checked', currentUser.forumNotifications || false);
    
    // Set interface language
    const interfaceLanguage = localStorage.getItem('interfaceLanguage') || 'English';
    $('#interfaceLanguage').val(interfaceLanguage);
}

/**
 * Save user settings
 */
function saveSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Update notification settings
    currentUser.emailNotifications = $('#emailNotifications').is(':checked');
    currentUser.forumNotifications = $('#forumNotifications').is(':checked');
    
    // Save interface language
    const interfaceLanguage = $('#interfaceLanguage').val();
    localStorage.setItem('interfaceLanguage', interfaceLanguage);
    
    // Update user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update users array in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.username === currentUser.username);
    
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    alert('Settings saved successfully!');
}

/**
 * Update interface preview when language changes
 */
function updateInterfacePreview() {
    // This would show a preview of the interface in the selected language
    // For now, we'll just log it
    console.log('Interface language changed to: ' + $('#interfaceLanguage').val());
}

// Modal functions for changing username, email, and password
function showChangeUsernameModal() {
    // Implementation for username change modal
    const newUsername = prompt('Enter new username:');
    if (newUsername && newUsername.trim()) {
        updateUsername(newUsername.trim());
    }
}

function showChangeEmailModal() {
    // Implementation for email change modal
    const newEmail = prompt('Enter new email:');
    if (newEmail && newEmail.trim()) {
        updateEmail(newEmail.trim());
    }
}

function showChangePasswordModal() {
    // Implementation for password change modal
    const currentPassword = prompt('Enter current password:');
    if (!currentPassword) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentPassword !== currentUser.password) {
        alert('Current password is incorrect');
        return;
    }
    
    const newPassword = prompt('Enter new password:');
    if (newPassword && newPassword.trim()) {
        updatePassword(newPassword.trim());
    }
}

// Functions to update user data
function updateUsername(newUsername) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    if (users.some(user => user.username === newUsername && user.username !== currentUser.username)) {
        alert('Username already exists');
        return;
    }
    
    // Update username
    const userIndex = users.findIndex(user => user.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex].username = newUsername;
        currentUser.username = newUsername;
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        $('#username').val(newUsername);
        alert('Username updated successfully');
    }
}

function updateEmail(newEmail) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.some(user => user.email === newEmail && user.username !== currentUser.username)) {
        alert('Email already exists');
        return;
    }
    
    // Update email
    const userIndex = users.findIndex(user => user.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex].email = newEmail;
        currentUser.email = newEmail;
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        $('#email').val(newEmail);
        alert('Email updated successfully');
    }
}

function updatePassword(newPassword) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Update password
    const userIndex = users.findIndex(user => user.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        currentUser.password = newPassword;
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        alert('Password updated successfully');
    }
}