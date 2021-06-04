import React, { useState } from "react";
import TimestampsDisplay from "./TimestampsDisplay";


function ClickTimes() {
    
    const timestamps = Date.now();
    
    const [results, setResults] = useState([]);
    
const handleClick = (value) => {
    
setResults([...results, value]);

};

return (
    <section>
   <div>
    <button onClick={() =>handleClick(timestamps)}>Showtime</button>
   </div>
<TimestampsDisplay timestamps={results} />
</section>
);
}

export default ClickTimes;
