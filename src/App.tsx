import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'
import { increment, decrement } from './store/counterSlice'

function App() {


  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
    <div className='h-screen w-screen bg-amber-50 flex items-center justify-center'>
<button
  className="bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-md text-3xl font-bold"
onClick={() => dispatch(increment())}
>
  +
</button>

<span className="mx-6 text-2xl">{count}</span>

<button
disabled={count === 0}
  className="disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-md text-3xl font-bold"
    onClick={() => dispatch(decrement())}
>
  -
</button>

    </div>

    </>
  )
}

export default App
