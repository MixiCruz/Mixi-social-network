import { createPost, getPost, deletePost } from '../FirebaseConfig/toPost';
import { auth, logOut } from '../FirebaseConfig/firebaseConfig';

const Home = (navigateTo) => {
  // contenedor principar
  const homeSection = document.createElement('div');
  homeSection.classList.add('flex');
  homeSection.setAttribute('id', 'homeSection');

  // contenedor header
  const header = document.createElement('header');
  header.classList.add('flex');
  header.setAttribute('id', 'contentSection');

  const welcomeTitle = document.createElement('h1');
  welcomeTitle.classList.add('welcome-title');
  welcomeTitle.textContent = 'Instapet';

  const logo = document.createElement('img');
  logo.setAttribute('src', './img/Insta pet2.png');
  logo.setAttribute('id', 'logo');

  // contenerdor post
  const postContainer = document.createElement('div');
  postContainer.classList.add('postContainer');

  const postMessage = document.createElement('textarea');
  postMessage.setAttribute('type', 'text');
  postMessage.setAttribute('placeholder', '¿Miau, Woaw, Pio? Escribe los pensamientos de tu mascota, ¡Diviertete!');
  postMessage.setAttribute('id', 'postMessage');

  const buttonPublicar = document.createElement('button');
  buttonPublicar.textContent = 'Publicar';
  buttonPublicar.classList.add('btn');

  const buttonLogout = document.createElement('button');
  buttonLogout.classList.add('btn');
  buttonLogout.textContent = 'Cerrar sesión';

  buttonLogout.addEventListener('click', () => {
    logOut().then(() => {
      alert('Hasta pronto');
      navigateTo('/');
    }).catch(() => {
      alert('no cierra');
    });
  });

  homeSection.append(header, postContainer);
  header.append(welcomeTitle, logo, buttonLogout);
  postContainer.append(postMessage, buttonPublicar);

  buttonPublicar.addEventListener('click', () => {
    createPost(postMessage.value).then(() => {
      alert('publicación agregada');
      navigateTo('/Home');
    }).catch(() => {
      alert('no funciona');
    });
  });



  console.log(getPost());

  getPost().then((arrayPost) => {
    console.log(arrayPost, "hola mixi");
    arrayPost.forEach((post) => {
      console.log(post.correo)
      console.log(post.texto)

      const feed = document.createElement('div');
      feed.classList.add('feed');
      feed.setAttribute('id', 'allPost');

      const userText = document.createElement('h5');
      userText.textContent = post.correo;

      const onePost = document.createElement('p');
      onePost.textContent = post.texto;

      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Eliminar';
      buttonDelete.classList.add('btn');

      buttonDelete.addEventListener('click', () => {
        console.log(post.id);
        deletePost(post.id).then(() => {
          alert('Post eliminado');
          navigateTo('/Home');
        }).catch(() => {
          alert('no funciona');
        });
      });

      feed.append(userText, onePost, buttonDelete);
      homeSection.append(feed);
    });
  });
  return homeSection;
};

export default Home;
