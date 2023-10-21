
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
    const emailOrUsername = document.querySelector('#loginUsername').value;
    const password = document.querySelector('#loginPassword').value;

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
    const username = document.querySelector('#signupUsername').value;
    const email = document.querySelector('#signupEmail').value;
    const password = document.querySelector('#signupPassword').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

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

