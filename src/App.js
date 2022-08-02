import React from "react";
import { data } from "./data";

const Person = (id, src, fName, lName, age) => {
  return (
    <article key={id} className="person">
      <img src={src} alt={`${fName} ${lName}`} />
      <div>
        <h4>
          {fName} {lName}
        </h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
const App = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) =>
          Person(person.id, person.img, person.fName, person.lName, person.age)
        )}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
