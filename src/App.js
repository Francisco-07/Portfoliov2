import Main from './layout/main'
import React, { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  return loading ? <Main /> : null
}

export default App
