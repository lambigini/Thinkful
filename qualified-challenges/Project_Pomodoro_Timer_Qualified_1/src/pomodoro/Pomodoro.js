import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import FocusBreakDuration from "../FocusBreakDuration";
import PlayStopButton from "../PlayStopButton";
import ProgressLabel from "../ProgressLabel";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // ToDo: Allow the user to adjust the focus and break duration.
  const [focusDuration, setfocusDuration] = useState(25);
  const [breakDuration, setbreakDuration] = useState(5);
  const [showLabel, setShowLabel] = useState(false);

  const handleDecreaseFocus = (event) => {
    return setfocusDuration((currentFocus) => Math.max(5, currentFocus - 5));
  };

  const handleIncreseFocus = (event) => {
    return setfocusDuration((currentFocus) => Math.min(60, currentFocus + 5));
  };

  const handleDecreaseBreak = (event) => {
    return setbreakDuration((currentBreak) => Math.max(1, currentBreak - 1));
  };

  const handleIncreseBreak = (event) => {
    return setbreakDuration((currentBreak) => Math.min(15, currentBreak + 1));
  };

  const handleStopButton = () => {
    console.log(" stop button clicked");
    setSession((current) => (current = null));
    setIsTimerRunning((current) => (current = false));
    setfocusDuration((current) => (current = 25));
    setbreakDuration((current) => (current = 5));
    setShowLabel((currentValue) => (currentValue = false));
  };
  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setShowLabel((currentValue) => (currentValue = true));
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  return (
    <div className="pomodoro">
      <FocusBreakDuration
        focusDuration={focusDuration}
        breakDuration={breakDuration}
        isTimerRunning={isTimerRunning}
        session={session}
        minutesToDuration={minutesToDuration}
        handleDecreaseFocus={handleDecreaseFocus}
        handleIncreseFocus={handleIncreseFocus}
        handleDecreaseBreak={handleDecreaseBreak}
        handleIncreseBreak={handleIncreseBreak}
      />

      <PlayStopButton
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        classNames={classNames}
        handleStopButton={handleStopButton}
        session={session}
      />
      {showLabel ? (
        <ProgressLabel
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
          minutesToDuration={minutesToDuration}
          secondsToDuration={secondsToDuration}
          isTimerRunning={isTimerRunning}
          showLabel={showLabel}
        />
      ) : null}
    </div>
  );
}

export default Pomodoro;
