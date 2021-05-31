import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  const activityList = activities.map((item) => {
    return <Activity time={item.time} description={item.description} />;
  });

  return (
    activities.length > 0 && (
      <div className="list">
        <ol>{activityList}</ol>
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
