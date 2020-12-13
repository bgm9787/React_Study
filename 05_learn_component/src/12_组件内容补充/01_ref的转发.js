import React, { PureComponent, createRef, forwardRef } from 'react';

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

// function Profile(props) {
//   // 这种做法是错误的，拿不到ref属性
//   return <p ref={props.ref}>Profile</p>
// }

// 高阶组件forwardRef
const Profile = forwardRef(function(props, ref) {
  return <p ref={ref}>Profile</p>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        {/* 在任何一个元素或组件上写ref 都不会当做一个普通属性来传递，而是交给react内部来管理 */}
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef}/>

        <Profile ref={this.profileRef} name={"why"}/>

        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}
