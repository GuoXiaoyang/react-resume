import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: 0, width: 0};
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  updateDimensions() {
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    const style = {height: this.state.height};
    return (
      <header id="home" style={style}>
        {this.props.children}
      </header>
    );
  }
}

export default Header;