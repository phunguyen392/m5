import React, { Component } from 'react';

class bt1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  handleToggleExpand = () => {
    this.setState((prevState) => ({
      isExpand: !prevState.isExpand
    }));
  }

  render() {
    const { isExpand } = this.state;

    return (
      <div>
        <h1>Conditional Rendering</h1>
        {isExpand ? (
          <div>
            <button onClick={this.handleToggleExpand}>Đóng giới thiệu</button>
            <p>Nội dung giới thiệu</p>
          </div>
        ) : (
          <button onClick={this.handleToggleExpand}>Xem giới thiệu</button>
        )}
      </div>
    );
  }
}

export default bt1;