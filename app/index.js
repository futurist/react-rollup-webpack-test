import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

ReactDOM.render(
  <p>Hey</p>,
  document.getElementById('app')
)


function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack', 'import'], ' ')
    return element
  }).catch(error => 'An error occurred while loading the component')
}

setTimeout(()=>{
  getComponent().then(component => {
    document.body.appendChild(component)
  })
}, 3000)

