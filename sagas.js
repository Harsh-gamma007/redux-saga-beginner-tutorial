import { CANCEL } from 'redux-saga'
import { put, takeEvery, all, call, cancel} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  // yield delay(1000)
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}


export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}