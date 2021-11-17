import { useState, useEffect } from 'react'

import Button from './components/Button'
import useComponentDidMount from './hooks/useComponentDidMount'

const usersArray = [
  {
    name: "Marco"
  },
  {
    name: "Alin"
  },
  {
    name: "Edouard"
  }
]

const App = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("marco")
  const [users, setUsers] = useState(usersArray)

  useComponentDidMount("App") // Exemple de hook

  useEffect(() => { // => componentDidUpdate mais seulement le state counter
    console.log("counter a changé")
  }, [counter])

  useEffect(() => { // => componentDidUpdate mais seulement le state name
    console.log("name a changé")
  }, [name])

  useEffect(() => {
    console.log(counter)
    console.log(name)
  }, [counter, name])



  const handleButtonClick = () => {
    setCounter(counter + 1)
    setName("alin")
    
    const clonedArray = [...users]
    clonedArray[1].name = "eloi"
    setUsers(clonedArray)
  }

  return (
    <>
      <h1>Mon super compteur signé {name}</h1>
      <p>La valeur de mon compteur est: {counter}</p>
      <Button label="+" handleClick={handleButtonClick}/>
      {users.map(user => (
        <p key={user.name}>{user.name}</p>
      ))}
    </>
  )
}

export default App




// import React, { Component } from 'react';
// import userEvent from '@testing-library/user-event'

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       counter: 0,
//       name: "marco",
//       user: usersArray
//     }
//   }

  // componentDidMount() {
  //   console.log("mon component vient d'etre monté")
  // }

  // componentDidUpdate(prevProps, prevState) {
  //    if (prevState.counter !== this.state.counter) {
  //      console.log("counter a changé")
  //    }
  // }

//   // this.setState({ counter: 1 })

//   render() {
//     return (
//       <div>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// export default App;