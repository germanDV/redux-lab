import React, { ReactElement } from 'react'
import Books from './Books'
import System from './System'
import BookInfo from './BookInfo'

const App = (): ReactElement => {
  return (
    <div className='layout'>
      <main>
        <h1>REDUX EXPLORATION</h1>
        <Books />
      </main>
      <aside>
        <System />
        <BookInfo />
      </aside>
    </div>
  )
}

export default App
