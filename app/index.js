import React from 'react'
import lodash from 'lodash'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

ReactDOM.render(
  <p>{lodash.get(null, 'a.b.c', 'Hello')}</p>,
  document.getElementById('app')
)
