


const logger = store => next => action => {
  console.log('prev', store.getState())
  next(action)
  console.log('next', store.getState())
}
export default logger