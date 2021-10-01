import React from 'react'
import ContactCard from '../ui/ContactCard'

const Register = () => {
  const [data, setData] = React.useState([])
  // api call in javascript
  //1. XMLHttpRequest
  //2. fetch
  //3. axios
  //4. jquery/ajax
  //syncrous
  /*
  for (var i = 0; i <= 10; i++) {
    console.log("inside loop => ", i);
  }
  console.log("loop ended");
*/
  // asynrous
  //nashta
  //1 tea 5min
  //2 egg 10min
  //3. bread 5min
  // shower

  //shower tea on fire
  // egg bread toaster
  //end

  //asynrouns return promise
  //three state of promise
  //Pending: initial state, neither fulfilled nor rejected.
  //Fulfilled: operation completed successfully.
  //Rejected: operation failed.
  //to call api
  // 1. fetch javascript fucntion (limitation internet explorer)
  // 2. axois third party lbrary
  //syncronus block
  //asynrouns none block
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const fetchFunction = async () => {
    const response = await fetch(apiUrl)
    const result = await response.json()
    if (result) {
      setData(result)
    }
    /*
    const result = fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        console.log(data)
        return data.json()
      })
      .then(result => {
        console.log(result)
        setData(result)
      })
      .catch(error => {
        console.log(error)
      })
      */
  }

  React.useEffect(() => {
    fetchFunction()
  }, [setData])

  return (
    <>
      {data.map(({name, email, address}) => (
        <ContactCard name={name} email={email} address={address} />
      ))}
      <h1>waiting for the data</h1>
    </>
  )
}

export default Register
