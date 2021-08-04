import { applyMiddleware, compose, createStore } from 'redux'
import reduxWebsocket, {connect} from '@giantmachines/redux-websocket'

import reducer from '../reducer'

export default function trainStatus() {

  const reduxWebsocketMiddleware = reduxWebsocket();

  const store = createStore(reducer, applyMiddleware(reduxWebsocketMiddleware))

  store.dispatch(connect(("rata.digitraffic.fi", 80, "myclientid_" + parseInt(Math.random() * 10000, 10))))

  console.log(store)
  }
