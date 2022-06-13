import { useState } from "react"

let myName = "Dorcsi"
let myNumber = 5
let myBoolean = true /*nem dob hibát, nem fogom látni sehol*/

let MyArray = [1, 2, 3, "Béla", true, false, "kazmer", null]
let myUd = undefined
let myNull = null

let person = {
  name: "Alan",
  age: "20"
}

// let people = [
//   { name: "Béla", age: 20 },
//   "Lajos",
//   "Kazmer",
//   "Otto",
//   "Bodri",
//   "Cirmi"
// ]

//loop in js
let people = [
  { name: "Béla", age: 20 },
  { name: "Lajos", age: 2 },
  { name: "kazmer", age: 120 },
  { name: "Otto", age: 25 },
]

//conditional rendering
//operators


let wcounter = 1
const update = () => {
  console.log(wcounter);
  wcounter++
  console.log(wcounter);
}


const App = () => {
  //a setShouldShowt nekem kell beállítni és meghívni is. A változót és a hozzátartozó értéket mókolja a useState, minden egyes alaklommal változik az értéke és folyamatosan újrarenderőldik, mert van benne egy ilyen trigger:
  const [shouldShow, setShouldShow] = useState(false)
  const myToggleFunction = () => {
    setShouldShow(!shouldShow)
  }

  const [counter, setCounter] = useState(1)
  const myIncrementFunction = () => {
    console.log(counter);
    setCounter(counter + 1)
    console.log(counter);
    console.log("------");
  }

  const [myArr, setArr] = useState([])

  return (
    <div>
      {shouldShow ? <p>Hiddent content is shown!!!</p> : <p>Secret content is hidden</p>}
      <button onClick={myToggleFunction}>Toggle</button>

      <p>Counter value:{counter}</p>
      <button onClick={myIncrementFunction}>Increment</button>

      <p>Counter value:{wcounter}</p>
      <button onClick={myIncrementFunction}>Wrong Increment</button>

      <button onClick={() => setArr([...myArr, "Béla"])}>Add Béla</button>
      {myArr.map(elem => <p>{elem}</p>)}


      <h1>Hello world</h1>
      <p>{myName}</p>
      <p>{myNumber}</p>

      <p>{myBoolean.toString()}</p>
      <p>{MyArray}</p>

      <p>{myNull}</p>
      <p>{myUd}</p>

      {/* <p>{myObject}</p> objects are not valid as react childs, cannot render*/}
      <p>{JSON.stringify(person)}</p>
      <p>Név: {person.name} ({person.age})</p>

      <p id="first">paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input type="password" placeholder="akarmi" />

      {/* 
      //Ez helyett map() lent megvan ciklussal:
      <div className="class">
        <p className="card-content">{people[0]}</p>
      </div>

      <div className="class">
        <p className="card-content">{people[1]}</p>
      </div>
      */}

      {/* 
        Amikor a people meg csak siman array volt a nevekkel
      {
        people.map(p => (
          <div className="card" key={p}>
            <p className="card-content">{p}</p>
            <p>Some other content</p>
          </div>
        ))
      } */}

      {
        people.map(p => (
          <div className="card" key={p.name}>
            <p className="card-content">{p.age < 18 ? "*****" : p.name}</p>
            <p>Some other content</p>
          </div>
        ))
      }

    </div>
  );
}

export default App;
