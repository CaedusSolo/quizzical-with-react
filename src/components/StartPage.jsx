import React, { useContext } from 'react'
import { AppContext } from '../App'

function StartPage() {

  const {onStartBtnClick} = useContext(AppContext)

  return (
    <div className='startPage'>
        <h3>Quizzical</h3>
        <button className="btn" onClick={onStartBtnClick}>Begin Quiz</button>
    </div>
  )
}

export default StartPage