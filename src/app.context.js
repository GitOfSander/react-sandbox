import * as React from 'react'

const AppContext = React.createContext([
  {
    loginPanelHeight: '',
    setLoginPanelHeight: (height) => {}
  }
])

export default AppContext