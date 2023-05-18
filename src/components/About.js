import ProfileClassComponent from "./ProfileClass";
import React from "react";
import { Outlet } from "react-router-dom";
import Shimmer from "./Shimmer";
//
export const About = function () {
  return (
    <div>
      <Outlet></Outlet>
      <ProfileClassComponent></ProfileClassComponent>
    </div>
  );
};

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
