

const Title = ({course}) => {
//   // const {course} = props == const course = props.course
   return <h1>{course}</h1>
}

const Part = ({part, exercise}) => {
  return <p>{part} {exercise}</p>
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return <p> Number of exercise {exercises1 + exercises2 + exercises3} </p>
}

// const Title = ({course}) => <h1>{course}</h1>

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Title course={course} />
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </>
  )
}

export default App
