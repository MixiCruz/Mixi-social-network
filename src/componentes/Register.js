import { createUser } from '../FirebaseConfig/createUser';

const Register = (navigateTo) => {
  const registerSection = document.createElement('section');
  registerSection.classList.add('container-register');
  registerSection.classList.add('flex');

  const registerTitle = document.createElement('h1');
  registerTitle.textContent = '¡Registrate!';
  registerTitle.classList.add('welcome-title');

  const registerForm = document.createElement('form');
  registerForm.classList.add('formRegister');
  registerForm.setAttribute('id', 'Register');

  const username = document.createElement('input');
  username.setAttribute('type', 'name');
  username.setAttribute('placeholder', 'Nombre de mascota');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electrónico');
  email.setAttribute('id', 'emailUser');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  password.setAttribute('id', 'passwordUser');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'REGISTRARSE';
  buttonRegister.classList.add('btn');
  buttonRegister.setAttribute('id', 'registerbtn');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser(email.value, password.value).then((userCredential) => {
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

  registerForm.append(username, email, password, buttonRegister);
  registerSection.append(registerTitle, registerForm);

  return registerSection;
};

export default Register;
