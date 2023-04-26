import { Outlet, json } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

//
export class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <div>
          <h1>About us</h1>
          <h6>{}</h6>
          <Profile name={"Ram Babu jha"} xyzProp={"iuetiogeotiio"} />
          <ProfileClassComponent
            name={"1st child "}
            xyzProp={"mkcbaharjaakebaatakr"}
          />
        </div>
      </>
    );
  }
}

//
/**
 ******* which is called first for multiple children********************
 *-------------------------------------------------------------------------------
 *  parent constructor
 * parent render
 *    1st child - constructor
 *    1st child - render()
 *    2nd child - constructor
 *    2nd child - render
 *
 * DOM IS UPDATED FOR CHILDREN & NOW APIs WILL BE CALLED
 *
 *    1st child - component did mount
 *    2nd child - component did mount
 * parent component did mount
 * -----------------------------------------------------------------------------
 */
