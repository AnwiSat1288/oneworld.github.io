// Initialize Firebase with your configuration
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// login function
function login() {
  const email = document.querySelector('#login input[type="text"]').value;
  const password = document.querySelector('#login input[type="password"]').value;

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

// Function to handle signup
function signup() {
  const email = document.querySelector('#createAccount input[placeholder="Email Address"]').value;
  const password = document.querySelector('#createAccount input[placeholder="Password"]').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user;
      const successMessage = `User created: ${user.email}`;
      displaySuccessMessage(successMessage);
     
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

  // Automatically remove the message after a few seconds
  setTimeout(() => {
    successMessageDiv.remove();
  }, 3000); // Adjust the time (in milliseconds) as needed
}
// Event listeners for login and signup forms
document.querySelector('#login button').addEventListener('click', login);
document.querySelector('#createAccount button').addEventListener('click', signup);
