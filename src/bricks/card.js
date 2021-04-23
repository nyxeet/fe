//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Card",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Card = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    image: "https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <UU5.Bricks.Card>
        {console.log(props)}
        <UU5.Bricks.Header level="2" style={{ textAlign: "center" }}>
          {props.data.name}
        </UU5.Bricks.Header>
        <UU5.Bricks.Image src={props.data.image} height="320px" />
      </UU5.Bricks.Card>
    ) : null;
    //@@viewOff:render
  },
});

export default Card;
