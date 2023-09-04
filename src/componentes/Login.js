import { loginUser } from '../FirebaseConfig/createUser';

const Login = (navigateTo) => {
  const section = document.createElement('section');
  section.classList.add('form-container');
  section.classList.add('loginpage');

  const header = document.createElement('header');
  header.classList.add('flex');
  header.setAttribute('id', 'contentSection');

  const logo = document.createElement('img');
  logo.setAttribute('src', './img/Insta pet2.png');
  logo.setAttribute('id', 'logoGrande');

  const welcomeTitle = document.createElement('h1');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = '¡Bienvenido a InstaPET!';

  const loginTitle = document.createElement('h3');
  loginTitle.classList.add('form-title');
  loginTitle.textContent = 'Inicia sesión';

  const loginForm = document.createElement('form');
  loginForm.setAttribute('id', 'contendor');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  btnContainer.classList.add('flex');

  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'Iniciar Sesión';
  btnLogin.classList.add('btn');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginUser(email.value, password.value)
      .then((userCredential) => {
        navigateTo('/Home');
        //   Signed in
        const user = userCredential.user;
        console.log(user);
        alert('Bienvenido');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  });

  const btnRegister = document.createElement('button');
  btnRegister.textContent = 'Registrate';
  btnRegister.classList.add('btn');
  btnRegister.addEventListener('click', () => navigateTo('/Register'));

  section.append(header, loginForm);
  header.append(welcomeTitle, logo, loginTitle);
  loginForm.append(email, password, btnContainer);
  btnContainer.append(btnLogin, btnRegister);

  return section;
};

export default Login;
