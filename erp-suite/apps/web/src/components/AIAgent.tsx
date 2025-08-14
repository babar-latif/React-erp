import React, { useState } from 'react'
import { askAgent } from '../agents/aiAgent'
import axios from 'axios'

interface Message {
  input: string;
  reply: string;
}

function AIAgent() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [history, setHistory] = useState<Message[]>([])

  const handleSubmit = async () => {
    const reply = await askAgent(input)
    setHistory([...history, { input, reply }])
    setResponse(reply)
  }

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0]
    const text = await file.text()
    const reply = await askAgent(`Analyze this file:\n${text}`)
    setResponse(reply)
  }

  const fetchERPData = async () => {
    try {
      const res = await axios.get('/api/erp/data')
      const reply = await askAgent(`Analyze ERP data:\n${JSON.stringify(res.data)}`)
      setResponse(reply)
    } catch (error) {
      setResponse('Error fetching ERP data.')
    }
  }

  return (
    <div>
      <h2>AI Agent</h2>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Ask</button>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={fetchERPData}>Ask about ERP Data</button>
      <p>{response}</p>
      {history.map((msg, idx) => (
        <div key={idx}>
          <strong>You:</strong> {msg.input}<br />
          <strong>Agent:</strong> {msg.reply}<br />
        </div>
      ))}
    </div>
  )
}

export default AIAgent