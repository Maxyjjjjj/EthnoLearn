// Authentication functionality
$(document).ready(function() {
    // Initialize translations
    updateInterfaceLanguage();
    
    // Check if user is already logged in
    checkAuthStatus();
    
    // Handle sign in form submission
    $('#signInForm').on('submit', function(e) {
        e.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();
        
        // Simple validation
        if (!email || !password) {
            showError('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send this to a server
        // For demo purposes, we'll use localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Store auth status in localStorage
            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                username: user.username,
                email: user.email,
                preferredLanguage: user.preferredLanguage || 'en'
            }));
            
            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            showError('Invalid email or password');
        }
    });
    
    // Handle registration form submission
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        
        // Simple validation
        if (!username || !email || !password || !confirmPassword) {
            showError('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        // In a real application, you would send this to a server
        // For demo purposes, we'll use localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if email already exists
        if (users.some(u => u.email === email)) {
            showError('Email already in use');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password,
            preferredLanguage: 'en',
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Store auth status in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            preferredLanguage: newUser.preferredLanguage
        }));
        
        // Redirect to home page
        window.location.href = 'index.html';
    });

    // Handle language selection
    $('#languageSelect').on('change', function() {
        const selectedLanguage = $(this).val();
        setLanguage(selectedLanguage);
        
        // Update user's preferred language if logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            currentUser.preferredLanguage = selectedLanguage;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Update in users array
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].preferredLanguage = selectedLanguage;
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    });
});

// Check if user is logged in
function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User is logged in
        updateNavForLoggedInUser(currentUser);
    }
}

// Update navigation for logged in user
function updateNavForLoggedInUser(user) {
    // This function will be called on all pages to update the navigation
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

// Show error message
function showError(message) {
    // Check if error element exists, if not create it
    let errorElement = $('.error-message');
    if (errorElement.length === 0) {
        errorElement = $('<div class="error-message"></div>');
        $('.auth-container form').prepend(errorElement);
    }
    
    errorElement.text(message).show();
    
    // Hide after 5 seconds
    setTimeout(() => {
        errorElement.hide();
    }, 5000);
}

// Show success message
function showSuccess(message) {
    // Check if success element exists, if not create it
    let successElement = $('.success-message');
    if (successElement.length === 0) {
        successElement = $('<div class="success-message"></div>');
        $('.auth-container form').prepend(successElement);
    }
    
    successElement.text(message).show();
    
    // Hide after 5 seconds
    setTimeout(() => {
        successElement.hide();
    }, 5000);
}

// Update interface language
function updateInterfaceLanguage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

    if (currentUser && currentUser.preferredLanguage) {
        // User is logged in, use their preferred language
        setLanguage(currentUser.preferredLanguage);
    } else {
        // User is not logged in or no preferred language, use current/default language
        setLanguage(currentLanguage);
    }
}

// Set interface language
function setLanguage(language) {
    // Update language in localStorage
    localStorage.setItem('preferredLanguage', language);
    
    // Update language selector if it exists
    const languageSelect = $('#languageSelect');
    if (languageSelect.length) {
        languageSelect.val(language);
    }
    
    // Update interface elements
    updateInterfaceElements(language);
}

// Update interface elements based on language
function updateInterfaceElements(language) {
    // Update language in localStorage
    localStorage.setItem('preferredLanguage', language);
}

/**
 * Social Authentication Module
 * Handles authentication with various social providers
 */

// Configuration for OAuth providers
const oauthConfig = {
    facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID,
        redirectUri: `${window.location.origin}/oauth-callback.html`,
        scope: 'email',
        authUrl: 'https://www.facebook.com/v12.0/dialog/oauth'
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        redirectUri: `${window.location.origin}/oauth-callback.html`,
        scope: 'email profile',
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID,
        redirectUri: `${window.location.origin}/oauth-callback.html`,
        scope: 'identify email guilds',
        authUrl: 'https://discord.com/api/oauth2/authorize'
    }
};

// Initialize social authentication
document.addEventListener('DOMContentLoaded', function() {
    // Initialize social login buttons
    initSocialButtons();
    
    // Check if we're on the OAuth callback page
    if (window.location.pathname.includes('oauth-callback')) {
        handleAuthCallback();
    }
});

/**
 * Initialize social login buttons with event listeners
 */
function initSocialButtons() {
    // Get all social login buttons
    const socialButtons = {
        google: document.querySelector('.google-btn'),
        discord: document.querySelector('.discord-btn'),
        apple: document.querySelector('.apple-btn'),
        twitter: document.querySelector('.twitter-btn')
    };

    // Add event listeners to each button
    Object.entries(socialButtons).forEach(([provider, button]) => {
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                initiateOAuthFlow(provider);
            });
        }
    });
}

/**
 * Generate a random state parameter for OAuth security
 */
function generateState() {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Initiate the OAuth flow for the specified provider
 * @param {string} provider - The OAuth provider (google, discord, etc.)
 */
function initiateOAuthFlow(provider) {
    try {
        // Check if provider config exists
        if (!oauthConfig[provider]) {
            throw new Error(`Provider ${provider} is not configured`);
        }

        // Generate and store state parameter to prevent CSRF attacks
        const state = generateState();
        localStorage.setItem('oauth_state', state);
        localStorage.setItem('oauth_provider', provider);
        
        // Build the authorization URL
        const config = oauthConfig[provider];
        const authUrl = new URL(config.authUrl);
        
        // Add query parameters
        authUrl.searchParams.append('client_id', config.clientId);
        authUrl.searchParams.append('redirect_uri', config.redirectUri);
        authUrl.searchParams.append('response_type', 'code');
        authUrl.searchParams.append('scope', config.scope);
        authUrl.searchParams.append('state', state);
        
        // Add provider-specific parameters
        if (provider === 'google') {
            authUrl.searchParams.append('prompt', 'select_account');
        } else if (provider === 'twitter') {
            authUrl.searchParams.append('code_challenge_method', 'S256');
            // In a real implementation, you'd generate a code challenge
            const codeChallenge = generateCodeChallenge();
            authUrl.searchParams.append('code_challenge', codeChallenge);
            localStorage.setItem('code_verifier', codeChallenge); // Simplified for example
        }
        
        // Redirect to the authorization URL
        console.log(`Initiating ${provider} OAuth flow`);
        window.location.href = authUrl.toString();
        
    } catch (error) {
        console.error(`OAuth initialization error for ${provider}:`, error);
        showAuthError(`Failed to initialize ${provider} login: ${error.message}`);
    }
}

/**
 * Generate a code challenge for PKCE (Simplified)
 * In a real implementation, this would use crypto APIs properly
 */
function generateCodeChallenge() {
    const verifier = generateState() + generateState();
    // In a real implementation, you'd hash this with SHA-256
    return verifier;
}

/**
 * Handle the OAuth callback after provider redirects back
 */
function handleAuthCallback() {
    try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');
        
        // Check for errors from OAuth provider
        if (error) {
            throw new Error(`Provider returned error: ${error}`);
        }
        
        // Verify state parameter to prevent CSRF attacks
        const storedState = localStorage.getItem('oauth_state');
        if (!state || state !== storedState) {
            throw new Error('Invalid state parameter');
        }
        
        // Get the provider from localStorage
        const provider = localStorage.getItem('oauth_provider');
        if (!provider) {
            throw new Error('No provider information found');
        }
        
        // Clear OAuth state data
        localStorage.removeItem('oauth_state');
        localStorage.removeItem('oauth_provider');
        
        // Exchange the authorization code for tokens
        exchangeCodeForTokens(code, provider);
        
    } catch (error) {
        console.error('OAuth callback error:', error);
        showAuthError(`Authentication failed: ${error.message}`);
        // Redirect back to login page after a delay
        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 3000);
    }
}

/**
 * Exchange authorization code for access and ID tokens
 * @param {string} code - The authorization code from OAuth provider
 * @param {string} provider - The OAuth provider name
 */
function exchangeCodeForTokens(code, provider) {
    // Show loading indicator
    showLoadingIndicator();
    
    // In a real implementation, this would be a server-side call
    // For security, token exchange should happen on your backend
    const tokenEndpoint = '/api/auth/token';
    
    fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code,
            provider,
            redirectUri: oauthConfig[provider].redirectUri,
            // Include code_verifier for PKCE if needed
            codeVerifier: localStorage.getItem('code_verifier')
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Token exchange failed');
            });
        }
        return response.json();
    })
    .then(data => {
        // Store authentication data
        storeAuthData(data);
        
        // Get user profile data
        return fetchUserProfile(data.accessToken, provider);
    })
    .then(userData => {
        // Store user profile data
        storeUserData(userData);
        
        // Show success message
        showAuthSuccess(`Successfully signed in with ${provider}`);
        
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    })
    .catch(error => {
        console.error('Token exchange error:', error);
        showAuthError(`Authentication failed: ${error.message}`);
        
        // Redirect back to login page after a delay
        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 3000);
    })
    .finally(() => {
        // Hide loading indicator
        hideLoadingIndicator();
        
        // Clean up any remaining OAuth data
        localStorage.removeItem('code_verifier');
    });
}

/**
 * Fetch user profile data from the provider's API
 * @param {string} accessToken - The OAuth access token
 * @param {string} provider - The OAuth provider name
 * @returns {Promise<Object>} - User profile data
 */
function fetchUserProfile(accessToken, provider) {
    // Define API endpoints for each provider
    const profileEndpoints = {
        google: 'https://www.googleapis.com/oauth2/v3/userinfo',
        discord: 'https://discord.com/api/users/@me',
        facebook: 'https://graph.facebook.com/v13.0/me',
    };
    
    // Get the appropriate endpoint
    const endpoint = profileEndpoints[provider];
    
    // Make the API request
    return fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Failed to fetch user profile');
            });
        }
        return response.json();
    })
    .then(data => {
        // Normalize user data based on provider
        return normalizeUserData(data, provider);
    });
}

/**
 * Normalize user data from different providers into a standard format
 * @param {Object} data - Raw user data from provider
 * @param {string} provider - The OAuth provider name
 * @returns {Object} - Normalized user data
 */
function normalizeUserData(data, provider) {
    // Create a standardized user object
    const user = {
        id: '',
        name: '',
        email: '',
        picture: '',
        provider: provider
    };
    
    // Map provider-specific fields to our standard format
    switch (provider) {
        case 'google':
            user.id = data.sub;
            user.name = data.name;
            user.email = data.email;
            user.picture = data.picture;
            break;
            
        case 'discord':
            user.id = data.id;
            user.name = data.username;
            user.email = data.email;
            user.picture = data.avatar 
                ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png` 
                : null;
            break;
            
        case "facebook":
            user.id = data.id;
            user.name = data.name;
            user.email = data.email;
            user.picture = data.picture.data.url;
            break;
    }
    
    return user;
}

/**
 * Store authentication data securely
 * @param {Object} data - Authentication data including tokens
 */
function storeAuthData(data) {
    // In a production app, consider using more secure storage methods
    localStorage.setItem('auth_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    localStorage.setItem('token_expiry', Date.now() + (data.expiresIn * 1000));
}

/**
 * Store user profile data
 * @param {Object} userData - User profile data
 */
function storeUserData(userData) {
    localStorage.setItem('user_data', JSON.stringify(userData));
}

/**
 * Show authentication error message
 * @param {string} message - Error message to display
 */
function showAuthError(message) {
    // Create error element if it doesn't exist
    let errorElement = document.getElementById('auth-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = 'auth-error';
        errorElement.className = 'auth-message error';
        document.body.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

/**
 * Show authentication success message
 * @param {string} message - Success message to display
 */
function showAuthSuccess(message) {
    // Create success element if it doesn't exist
    let successElement = document.getElementById('auth-success');
    if (!successElement) {
        successElement = document.createElement('div');
        successElement.id = 'auth-success';
        successElement.className = 'auth-message success';
        document.body.appendChild(successElement);
    }
    
    successElement.textContent = message;
    successElement.style.display = 'block';
}

/**
 * Show loading indicator during authentication
 */
function showLoadingIndicator() {
    // Create loading element if it doesn't exist
    let loadingElement = document.getElementById('auth-loading');
    if (!loadingElement) {
        loadingElement = document.createElement('div');
        loadingElement.id = 'auth-loading';
        loadingElement.className = 'auth-loading';
        loadingElement.innerHTML = '<div class="spinner"></div><p>Authenticating...</p>';
        document.body.appendChild(loadingElement);
    }
    
    loadingElement.style.display = 'flex';
}

/**
 * Hide loading indicator
 */
function hideLoadingIndicator() {
    const loadingElement = document.getElementById('auth-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

/**
 * Check if user is authenticated
 * @returns {boolean} - Whether user is authenticated
 */
function isAuthenticated() {
    const token = localStorage.getItem('auth_token');
    const expiry = localStorage.getItem('token_expiry');
    
    if (!token || !expiry) {
        return false;
    }
    
    // Check if token is expired
    return Date.now() < parseInt(expiry, 10);
}

/**
 * Sign out the current user
 */
function signOut() {
    // Clear all authentication data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_expiry');
    localStorage.removeItem('user_data');
    
    // Redirect to sign in page
    window.location.href = 'signin.html';
}

// Export functions for use in other scripts
window.socialAuth = {
    signOut,
    isAuthenticated,
    getCurrentUser: () => {
        const userData = localStorage.getItem('user_data');
        return userData ? JSON.parse(userData) : null;
    }
};
