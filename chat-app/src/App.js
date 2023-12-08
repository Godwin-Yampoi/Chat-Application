import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'





const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
          height="100vh"
          projectID="83f8cbee-6af2-4e83-9588-e424572409d7"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}

        />
    )
}

export default App