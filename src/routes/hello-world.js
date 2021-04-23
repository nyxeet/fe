//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
import Config from "../config/config";
import Greetings from "../bricks/greetings";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "HelloWorld",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const HelloWorld = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [routerParams, setRouterParams] = useState("Header");

    useEffect(() => {
      console.log(props);
      setRouterParams(props?.params?.id);
    }, [props?.params?.id]);

    //@@viewOn:private
    function _readRouterParams() {
      console.log(props.params);
      setRouterParams(props?.params?.id);
    }
    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Header level="1" content={routerParams} />

        <div>Visual Component {STATICS.displayName}</div>
        <UU5.Bricks.Button onClick={_readRouterParams} />
        <Greetings
          params={props.params}
          parentComponent={STATICS.displayName}
          style={{ backgroundColor: UU5.Environment.colors.red.c100 }}
        />
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default HelloWorld;
