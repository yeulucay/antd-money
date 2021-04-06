import * as React from 'react'
import MoneyInput from './MoneyInput'
import "antd/dist/antd.css";

export default { title: 'antd-money' }

export const basic = () => <MoneyInput style={{width:200}} prefix={"$"} />