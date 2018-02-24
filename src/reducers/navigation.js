const initialState = {
  mainMenus: [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Gallery',
      to: '/gallery'
    },
    {
      name: 'Page 2',
      to: '/page-2'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
