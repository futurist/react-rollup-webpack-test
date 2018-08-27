import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

ReactDOM.render(
  <p>Hey</p>,
  document.getElementById('app')
)


async function getComponent() {
  var element = document.createElement('div')
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')  
  return element
}
getComponent().then(component => {
  document.body.appendChild(component)
})
