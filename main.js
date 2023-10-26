
var firebaseConfig = {
  apiKey: "AIzaSyCFU1OjM0k92TwxMoZFJzVTsBt3ay87oyM",
  authDomain: "one-world-github-pages.firebaseapp.com",
  projectId: "one-world-github-pages",
  storageBucket: "one-world-github-pages.appspot.com",
  messagingSenderId: "385838863817",
  appId: "1:385838863817:web:64cedc14591327081f0418",
  measurementId: "G-TRDX1DL84J"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function login() {
    // Function to handle the login process
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const successMessage = `Logged in as: ${user.email}`;
            displaySuccessMessage(successMessage);

            // Redirect to the profile page after a successful login
            window.location.href = 'profile.html';
        })
        .catch((error) => {
            console.error(error);
            const errorMessage = `Login failed: ${error.message}`;
            displayErrorMessage(errorMessage);
        });
}

function displayErrorMessage(message) {
    const errorMessageDiv = document.createElement('div');
    errorMessageDiv.className = 'error-message';
    errorMessageDiv.textContent = message;
    document.body.appendChild(errorMessageDiv);

    setTimeout(() => {
        errorMessageDiv.remove();
    }, 3000);
}
function signup() {
    // Function to handle the signup process
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const successMessage = `User created: ${user.email}`;
            displaySuccessMessage(successMessage);

            // Store user data in the Firebase Realtime Database
            const userData = {
                username: username,
                email: email,
            };

            database.ref('users/' + user.uid).set(userData);
        })
        .catch((error) => {
            console.error(error);
        });
}

function displaySuccessMessage(message) {
    // Function to display a success message
    const successMessageDiv = document.createElement('div');
    successMessageDiv.className = 'success-message';
    successMessageDiv.textContent = message;
    document.body.appendChild(successMessageDiv);

    setTimeout(() => {
        successMessageDiv.remove();
    }, 3000); 
}

// Event listeners for the login and signup buttons
document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('signupButton').addEventListener('click', signup);
