import React, { useState } from "react";

function ProgressLabel({
  session,
  focusDuration,
  breakDuration,
  minutesToDuration,
  secondsToDuration,
  isTimerRunning,
  showLabel,
}) {
  const progressWidth =
    session.label === "Focusing"
      ? parseInt(focusDuration * 60 - session.timeRemaining) /
        ((focusDuration * 60) / 100)
      : parseInt(breakDuration * 60 - session.timeRemaining) /
        ((breakDuration * 60) / 100);

  // console.log(
  //   `${session.label} for focus ${focusDuration} break ${breakDuration} `
  // );

  // console.log(`progressWidth ${progressWidth} `);
  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session.label} for{" "}
            {session.label === "Focusing"
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)}{" "}
            minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {session.label === "Focusing"
              ? secondsToDuration(session.timeRemaining)
              : secondsToDuration(session.timeRemaining)}{" "}
            remaining
          </p>
          {!isTimerRunning && showLabel ? <h2>PAUSED</h2> : null}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressWidth} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progressWidth}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressLabel;
