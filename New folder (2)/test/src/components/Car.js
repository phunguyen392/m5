import { useState, useEffect } from "react";

function Car() {
  let [car, setCar] = useState(0);
  let [valueCar, setValueCar] = useState("");

  const choice = e => {
    setCar(e.target.value);
  };
  useEffect(() => {
    switch (car) {
      case "vl1":
        setValueCar("jav")
        break;
      case "vl2":
        setValueCar("kav")
        break;
      case "vl3":
        setValueCar("cav")
        break;

    }
  }, [car]);

  return (
    <div>
      a:<select onChange={e => {choice(e)}}>
        <option value="vl1" >value1</option>
        <option value="vl2" >value2</option>
        <option value="vl1" >value3</option>

      </select>
      <h2>your: {valueCar} </h2>
    </div>
  )
}
export default Car;