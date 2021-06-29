import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  const activityList = activities.map((item) => {
    return <Activity time={item.time} description={item.description} />;
    // const text = `${item.time} ${item.description}`;

    // return (
    //   <li>
    //     {item.time} {item.description}
    //   </li>
    // );
  });

  return (
    activities.length > 0 && (
      <div className="list">
        <li>{activityList}</li>
      </div>
    )
  );

  // const activityList = activities.map((item) => {
  //   return (
  //     <li>
  //       {item.time} {item.description}
  //     </li>
  //   );
  // });

  // return activityList;
}

export default ActivityList;
