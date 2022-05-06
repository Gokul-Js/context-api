import React, {useState} from 'react'

import PackageContext from './context' // name should be Anything

const Provider = props => {
    const [mission, setMission] = useState({
        mname : "go to America",
        agent : "09",
        accept : "Not Accepted"

    })
  return (
      <PackageContext.Provider 
      value={{
          data: mission,
          isMissionAccepted: () => {
              setMission({...mission, accept: "ACCEPTED"})
          }
      }}
      >
          {props.children}
      </PackageContext.Provider>
  )
}

export default Provider