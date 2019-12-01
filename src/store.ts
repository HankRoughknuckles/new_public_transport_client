import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import rootReducer, {RootState, initialState} from './reducers/rootReducer'

export default function configureAppStore(preloadedState: RootState = initialState) {
  const store = configureStore({
    reducer: rootReducer,
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    // enhancers: [monitorReducersEnhancer]
  })

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store
}
