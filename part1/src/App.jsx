

const Title = ({course}) => {
//   // const {course} = props == const course = props.course
   return <h1>{course}</h1>
}

const Part = ({parts}) => {
  return parts.map(part => <> <p>{part.name} {part.exercises}</p> </>)
}

const Total = ({parts}) => {
  const total = parts.reduce((totalExercice, part) => totalExercice + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

// const Title = ({course}) => <h1>{course}</h1>

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Title course={course} />
      <Part parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
