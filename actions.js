// reducer去使用
export const GET_COUNT_ASYNC = 'get count async'

// view层去触发
export const getCountAsync = (payload) => {
  return (dispatch) => {
    setTimout(() => {
      dispatch({
        type: GET_COUNT_ASYNC,
        payload: Math.random()
      })
    }, 1000)
  }
}