import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from "reactotron-redux-saga"

if (process.env.NODE_ENV === "development") {
    const tron = Reactotron.configure({
        port: 3001,
        server: "localhost"
    })
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect()

    console.tron = tron
    tron.clear()
}