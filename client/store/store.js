import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),

      window.__REDUX_DEVTOOLS_EXTENSION__ && !process.env.PRODUCTION
        ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: "whatismykino" })
        : f => f
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
