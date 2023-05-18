import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        public_repos: "dummy",
        avatar_url: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tarunCodesHere");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { count } = this.state;
    const { count2 } = this.state;
    const { name, public_repos, avatar_url } = this.state.userInfo;
    const { xyzProp } = this.props;
    return (
      <div>
        <img src={avatar_url}></img>
        <h1>This is Tarun learing class based components</h1>;
        <h3>name : {name}</h3>
        <h3>public repositories : {public_repos}</h3>
        <h4>random prop : {xyzProp}</h4>
      </div>
    );
  }
}

export default ProfileClass;
