
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

