const firebaseConfig = {
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

function login() {
    const emailOrUsername = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(emailOrUsername, password)
        .then((userCredential) => {
            const user = userCredential.user;
          
        })
        .catch((error) => {
            console.error(error);
      
        });
}

// Signup function
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
          
        })
        .catch((error) => {
            console.error(error);
        
        });
}


document.querySelector('#login button').addEventListener('click', login);
document.querySelector('#createAccount button').addEventListener('click', signup);

