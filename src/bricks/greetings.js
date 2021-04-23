//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import GreetDetail from "../bricks/greet-detail";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Greetings",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};
const data = [
  { id: 1, greeting: "Hello Yarik", name: "Yarik", age: 29 },
  { id: 2, greeting: "Hello Oksana", name: "Oksana", age: 18 },
  { id: 3, greeting: "Hello Simon", name: "Simon", age: 24 },
  { id: 4, greeting: "Hello Sofa", name: "Sofa", age: 18 },
];
export const Greetings = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function _renderMessage() {
      let message = "";
      if (props?.params?.id && props.params.id > 0 && props.params.id < 5) {
        const item = data.find((obj) => obj.id == props.params.id);

        message = item.greeting;
      } else {
        message = "Some default message";
      }
      return message;
    }

    function setNextPage() {
      const { id } = props.params;
      UU5.Environment.setRoute("helloWorld", { id: Number(id) + 1 });
    }
    function setPrevPage() {
      const { id } = props.params;
      UU5.Environment.setRoute("helloWorld", { id: Number(id) - 1 });
    }

    function _handleChangeRoute(item) {
      UU5.Environment.setRoute(<GreetDetail name={item.name} age={item.age} />, { url: { useCase: "greetDetail" } });
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
        <UU5.Bricks.Box
          style="props.style"
          infoHeader="Component's name"
          infoContent={`Visual Component ${STATICS.displayName}`}
        >
          {_renderMessage()}
        </UU5.Bricks.Box>
        <UU5.Bricks.Div>
          <UU5.Bricks.Button content="Next Page" onClick={setNextPage} />
          <UU5.Bricks.Button content="Prev Page" onClick={setPrevPage} />
        </UU5.Bricks.Div>

        <UU5.Bricks.Div>
          {data.map((item, key) => {
            return <UU5.Bricks.Button content={item.greeting} onClick={() => _handleChangeRoute(item)} key={key} />;
          })}
        </UU5.Bricks.Div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default Greetings;
