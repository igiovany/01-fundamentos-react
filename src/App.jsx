import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          <Post author="Giovany" content="Que maneiro"></Post>
        </main>
      </div>

    </>
    
    
  )
}
