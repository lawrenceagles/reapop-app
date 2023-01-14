
import React from 'react';
import { setUpNotifications } from 'reapop'
import Notification from './components/Notification';

setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true
  }
})

function App() {
  return (
    <div>
      <Notification />
    </div>
  )
}
export default App;