'use client'

import { useState, useEffect, useRef } from 'react'

function useStopwatch({ autoStart = false } = {}) {
  const [time, setTime] = useState(0) // time in milliseconds
  const [isRunning, setIsRunning] = useState(autoStart)
  const timerRef = useRef(null)

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setTime(0)
    setIsRunning(false) // Ensure the stopwatch is not running after resetting
  }

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10) // Update every 10 milliseconds
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => clearInterval(timerRef.current)
  }, [isRunning])

  const totalSeconds = Math.floor(time / 1000)
  const displayMilliseconds = (time % 1000) / 10 // Adjust to display up to 99
  const displaySeconds = Math.floor((time / 1000) % 60)
  const minutes = Math.floor(time / 60000)

  return {
    totalMilliseconds: time,
    totalSeconds,
    milliseconds: displayMilliseconds,
    seconds: displaySeconds,
    minutes,
    isRunning,
    start,
    pause,
    reset,
  }
}

export default useStopwatch
