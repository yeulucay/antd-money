import * as React from 'react'
import MoneyInput from './MoneyInput'
import "antd/dist/antd.css";

export default { title: 'antd-money' }

export const basic = () => {

  const valChanged = (val:any) => {
    console.log("ON_CHANGE:", val)
  }

  return (
    <MoneyInput style={{width:200}} prefix={"$"} defaultValue={12.45} onChange={valChanged} />
  )
}

