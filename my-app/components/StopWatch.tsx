import { Button } from './ui/button'
import useStopwatch from './UseStopWatch'

export function MyStopwatch({ onStop }: { onStop: (time: string) => void }) {
  const {
    totalMilliseconds,
    milliseconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false })

  const handlePause = () => {
    pause()
    const time = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
    onStop(time)
  }

  const handleReset = () => {
    console.log('Reset button clicked')
    reset()
    pause() // Pause immediately after resetting to ensure it doesn't start automatically
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <div
        className="p-4"
        style={{ fontSize: '80px', display: 'inline-block', minWidth: '400px' }}
      >
        <span>{String(minutes).padStart(2, '0')}</span>:
        <span>{String(seconds).padStart(2, '0')}</span>:
        <span>{String(milliseconds).padStart(2, '0')}</span>
      </div>
      <p className={`${isRunning ? 'text-green-500' : 'text-red-600'}`}>
        {isRunning ? 'Running' : 'Not running'}
      </p>
      <Button className="mx-2" onClick={start}>
        Start
      </Button>
      <Button className="mx-2" onClick={handlePause}>
        Pause
      </Button>
      <Button className="mx-2" onClick={handleReset}>
        Reset
      </Button>
    </div>
  )
}
