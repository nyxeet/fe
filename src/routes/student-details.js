//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useCall, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import StudentProvider from "../bricks/student-provider";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "StudentDetails",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const StudentDetails = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    let { call, viewState, data, error } = useCall(Calls.getStudent);

    useEffect(() => {
      const currentId = props?.params?.id;
      if (currentId) {
        call({ id: currentId });
      }
    }, []);

    //@@viewOff:hooks
    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage().getAlertBus().addAlert({
        content,
        colorSchema: "red",
      });
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);
    console.log(props);
    return (
      <UU5.Bricks.Div>
        {() => {
          switch (viewState) {
            case "call":
              return <UU5.Bricks.Loader />;
            case "error":
              showError(error);
            case "ready":
              return <UU5.Bricks.Text content={JSON.stringify(data)} />;
          }
        }}
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default StudentDetails;
