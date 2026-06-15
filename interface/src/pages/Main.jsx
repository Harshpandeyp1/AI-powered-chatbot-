import React from 'react'
import useState from 'react'
import Navbar from '../components/Navbar'
import Chatwindow from '../components/Chatwindow'
import Input from '../components/Input'
const Main = () => {
  const [messages, setMessages] = React.useState([
   
  ])
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col text-slate-200">
      <Navbar setMessages={setMessages} />
      <div className="flex-1 flex flex-col">
        <Chatwindow messages={messages} />
      </div>
      <Input
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  )
}

export default Main