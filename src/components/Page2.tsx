// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicPage2,
  DefaultPage2Props
} from "./plasmic/chat_box_sg/PlasmicPage2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Page2Props extends Omit<DefaultPage2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultPage2Props altogether and have
// total control over the props for your component.
export interface Page2Props extends DefaultPage2Props {}

function Page2_(props: Page2Props, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicPage2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPage2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Page2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicPage2 root={{ ref }} {...props} />;
}

const Page2 = React.forwardRef(Page2_);
export default Page2;
