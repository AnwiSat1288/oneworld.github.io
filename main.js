
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
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const successMessage = `Logged in as: ${user.email}`;
            displaySuccessMessage(successMessage);
        })
        .catch((error) => {
            console.error(error);
        });
}

function signup() {
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
    const successMessageDiv = document.createElement('div');
    successMessageDiv.className = 'success-message';
    successMessageDiv.textContent = message;
    document.body.appendChild(successMessageDiv);

    setTimeout(() => {
        successMessageDiv.remove();
    }, 3000); 
}

document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('signupButton').addEventListener('click', signup);
