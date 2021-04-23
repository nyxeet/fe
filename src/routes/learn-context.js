//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import LearnInstanceContext from "../bricks/learn-instance-context";
import LearnContextProvider from "../bricks/learn-context-provider";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "LearnContext",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const LearnContext = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function categoryDetailsRoute(id) {
      UU5.Environment.setRoute("categoryDetails", { id });
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
        <div>Visual Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}

        <LearnContextProvider>
          <LearnInstanceContext.Consumer>
            {({ data }) => {
              return (
                <UU5.Bricks.Div>
                  {data.categoryList.map((item) => {
                    return (
                      <UU5.Bricks.Button
                        content={item.name}
                        onClick={() => categoryDetailsRoute(item.id)}
                        key={item.id}
                      />
                    );
                  })}
                </UU5.Bricks.Div>
              );
            }}
          </LearnInstanceContext.Consumer>
        </LearnContextProvider>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default LearnContext;
