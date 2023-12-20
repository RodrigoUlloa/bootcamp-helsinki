import { useState } from 'react'

import './App.css'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function StatisticsLine ({text, value}) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function StatisticsTable (props) {
  return props.all ? (
    <div>
      <br></br>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text='Good' value={props.good} />
          <StatisticsLine text='Neutral' value={props.neutral} />
          <StatisticsLine text='Good' value={props.bad} />
        </tbody>
      </table>
    </div>
  ) : (
    <p> no feedback given</p>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good + (-bad)) / (all)

  return (
    <div>
      <h2> Give feed back </h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <StatisticsTable good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App
