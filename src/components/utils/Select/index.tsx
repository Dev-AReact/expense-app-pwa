import React from 'react'
import { Select as AntdSelect } from 'antd';
import Props from './type';

function Select({defaultValue = "", width = "100%", options, disabled = false } : Props) {
  return (
    <AntdSelect
      defaultValue={defaultValue}
      style={{ width }}
      disabled={disabled}
      options={options}
    />
  )
}

export default Select