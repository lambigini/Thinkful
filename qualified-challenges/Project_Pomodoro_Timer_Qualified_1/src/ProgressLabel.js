import React, { useState } from "react";

function ProgressLabel({
  session,
  focusDuration,
  breakDuration,
  minutesToDuration,
  secondsToDuration,
}) {
  const progressWidth =
    session.label === "Focusing"
      ? (focusDuration * 60 - session.timeRemaining) /
        ((focusDuration * 60) / 100)
      : (breakDuration * 60 - session.timeRemaining) /
        ((breakDuration * 60) / 100);

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
