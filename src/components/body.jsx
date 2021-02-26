import React from 'react'

class Body extends React.Component {
  text1() {
    return `${this.props.title}`
  }
  text2() {
    return `${this.props.description}`
  }
  url() {
    return `${this.props.cover}`
  }
  render() {
    return <main>
    <img src={this.url()} alt='cover' />
    <h1>{this.text1()}</h1>
    <h2>{this.text2()}</h2>
    </main>
  }
}

export default Body