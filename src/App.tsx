import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import Lista from './components/Lista';

const posts = [
  {
    id: 1,
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    ]
  },
  {
    id: 2,
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    ]
  },
];

function App() {

  return (
    <div>
      <div className={styles.header}>
      <Header />
      </div>
      <body className={styles.body}>
      <div className={styles.lista}>
      <Lista />
      </div>
      </body>
    </div>
  );
}

export default App;
