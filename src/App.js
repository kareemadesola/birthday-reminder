import React from "react";
import { data } from "./data";

const Person = (src, fName, lName, age) => {
  return (
    <>
      <img src={src} alt={`${fName}${lName}`} />
      <h3>
        {fName} {lName}
      </h3>
      <h5>{age} years</h5>
    </>
  );
};
const App = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <main>
      <h1>5 birthdays today</h1>
      {people.map((person) =>
        Person(person.img, person.fName, person.lName, person.age)
      )}
      <button onClick={() => setPeople([])}>Clear All</button>
    </main>
  );
};
export default App;
