import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {

  return (
    <>
      <Header></Header>
      <Post
        author="Giovany" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam fugiat cum! Eveniet enim, voluptates exercitationem amet quo alias et blanditiis dignissimos nostrum, consequuntur accusamus animi atque tempora debitis aspernatur!"
      />
    </>
    
  )
}
