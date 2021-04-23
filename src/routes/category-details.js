//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import LearnInstanceContext from "../bricks/learn-instance-context";
import LearnContextProvider from "../bricks/learn-context-provider";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CategoryDetails",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CategoryDetails = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function findCurrentElement({ categoryList }) {
      const currentId = props?.params?.id;

      const resObj = categoryList.find((item) => item.id === currentId);
      return resObj ? resObj : null;
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;

    return (
      <LearnContextProvider>
        <LearnInstanceContext.Consumer>
          {({ data }) => {
            const obj = findCurrentElement(data);
            return (
              <>
                {obj ? (
                  <UU5.Bricks.Div>
                    <UU5.Bricks.Text content={obj.name} />
                    <UU5.Bricks.Text content={obj.awid} />
                    <UU5.Bricks.Text content={obj.id} />
                    <UU5.Bricks.Icon icon={obj.icon} />
                  </UU5.Bricks.Div>
                ) : (
                  "No data received"
                )}
              </>
            );
          }}
        </LearnInstanceContext.Consumer>
      </LearnContextProvider>
    );
    //@@viewOff:render
  },
});

export default CategoryDetails;
