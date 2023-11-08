import { useState } from "react";
function Counter(){
    let [count, setCount] = useState(0);
    const tanggt = () => {
        const newValue = count + 1;
        setCount(newValue);
      };
      const giamgt = () => {
        const newValue = count - 1;
        setCount(newValue);
      };
    
      return (
        <div>
          Giá trị {count}
          <br/>
          <div>
            <button onClick={tanggt}>Tăng</button>
          </div><br/>
          <div>
            <button onClick={giamgt}>giam</button>
          </div>
        </div>
      );
}
export default Counter;
