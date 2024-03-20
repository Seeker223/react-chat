import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '179a6c86-e5fe-4162-b059-29d5a15d9367';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

   // <ChatEngine
       // height="100vh"
       // projectID="179a6c86-e5fe-4162-b059-29d5a15d9367"
      //  userName="baduntobi"
       // userSecret="Bankaiichigo2024"
       // />
// infinite scroll, logout, more customizations...

export default App;