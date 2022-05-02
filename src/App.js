import React, { Suspense } from 'react'
const Main = React.lazy(() => import('./layout/main'))

function App() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Main />
      </Suspense>
    </>
  )
}

export default App
