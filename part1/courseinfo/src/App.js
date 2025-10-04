
/*
One liner components

const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => <p>{props.part} {props.exercises}</p>
const Total = (props) => <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
*/

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}


const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  
  const parts = props.course.parts

  return (
    <div>
    <Part part={parts[0]['name']} exercises={parts[0]['exercises']} />
    <Part part={parts[1]['name']} exercises={parts[1]['exercises']} />
    <Part part={parts[2]['name']} exercises={parts[2]['exercises']} />
    </div>
  )
}
const Total = (props) => {
  const parts = props.course.parts
  return (
    <p>
      Number of exercises {parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']}
    </p>
  )
}


const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
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
}

  return (
    <div>
      <Header course={course} />
      <Content course={course} />      
      <Total course={course} />
    </div>
  )
}

export default App