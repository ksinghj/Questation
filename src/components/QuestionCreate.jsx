import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createQuestionSheet, clickContinue } from '../actions'
import history from '../history'

import '../styles/QuestionCreate/index.css'

const QuestionCreate = ({ createQuestionSheet, clickContinue }) => {
  const INITIAL_STATE = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  }
  const [inputs, setInputs] = useState(INITIAL_STATE)
  const [clickCount, setClickCount] = useState(0)

  const onFormSubmit = e => {
    e.preventDefault()
    createQuestionSheet(inputs)
    history.push('/review')
  }

  const handeInput1Change = e => {
    setInputs({ ...inputs, input1: e.target.value })
  }

  const handeInput2Change = e => {
    setInputs({ ...inputs, input2: e.target.value })
  }

  const handeInput3Change = e => {
    setInputs({ ...inputs, input3: e.target.value })
  }

  const handeInput4Change = e => {
    setInputs({ ...inputs, input4: e.target.value })
  }

  const handeInput5Change = e => {
    setInputs({ ...inputs, input5: e.target.value })
  }

  clickContinue = () => {
    switch (clickCount) {
      case 0:
        alert('pls check')
        setClickCount(1)
        break
      case 1:
        clickContinue()
        setClickCount(0)
        break
      default:
        console.log('Possible error in clickContinue')
        break
    }
  }

  return (
    <div className="questioncreate__container">
      <h2>Create a Question Sheet</h2>
      <p>Questation only allows 5 questions for now. Ommit all commas.</p>
      <p>
        <strong>Warning:</strong> After pressing continue you won't be able to edit your questions, so double check!
      </p>
      <form onSubmit={onFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="ui input questioncreate__input">
          <input onChange={handeInput1Change} id="1" placeholder="33+(4*2)/2" />
        </div>
        <div className="ui input questioncreate__input">
          <input onChange={handeInput2Change} id="2" />
        </div>
        <div className="ui input questioncreate__input">
          <input onChange={handeInput3Change} id="3" />
        </div>
        <div className="ui input questioncreate__input">
          <input onChange={handeInput4Change} id="4" />
        </div>
        <div className="ui input questioncreate__input">
          <input onChange={handeInput5Change} id="5" />
        </div>
        <button className="button questioncreate__continue" type="submit">
          Continue
        </button>
      </form>
    </div>
  )
}

export default connect(null, { createQuestionSheet, clickContinue })(QuestionCreate)
