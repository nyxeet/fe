//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState, useRef, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import TodoContext from "../bricks/todo-list-context";
import Css from "./todo-item.css";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TodoItem",
  //@@viewOff:statics
};

export const TodoItem = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ item }) {
    const [isEdit, setIsEdit] = useState(false);
    const { updateItem, deleteItem } = useContext(TodoContext);
    const itemRef = useRef();

    //@@viewOn:private
    function toggleEdit(isEdit, item) {
      if (!isEdit) {
        itemRef.current = item;
        console.log(itemRef);
      }
      setIsEdit(!isEdit);
    }
    function update(opt) {
      console.log("opt", opt);
      console.log("currentid", itemRef.current.id);
      updateItem(itemRef.current.id, opt.value);
      setIsEdit(!isEdit);
    }
    function deleteI(item) {
      deleteItem(itemRef.current.id);
      setIsEdit(!isEdit);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <UU5.Bricks.Div key={item.id}>
          {isEdit ? (
            <UU5.Forms.ContextSection>
              <UU5.Forms.ContextForm onSave={update} onCancel={toggleEdit}>
                <UU5.Forms.TextButton
                  value={item.text}
                  buttons={[
                    {
                      icon: "mdi-check",
                      onClick: (opt) => update(opt),
                      colorSchema: "info",
                    },
                    {
                      icon: "plus4u5-trash-can",
                      onClick: (opt) => deleteI(opt),
                      colorSchema: "brown",
                    },
                  ]}
                />
              </UU5.Forms.ContextForm>
            </UU5.Forms.ContextSection>
          ) : (
            <UU5.Bricks.Div className={Css.main()}>
              <UU5.Forms.Checkbox value={item.completed} className={Css.checkbox()} />
              <UU5.Bricks.Text content={item.text} />
              <UU5.Bricks.Button style={{ marginLeft: "auto" }} onClick={() => toggleEdit(isEdit, item)}>
                <UU5.Bricks.Icon icon="mdi-pencil" />
              </UU5.Bricks.Button>
            </UU5.Bricks.Div>
          )}
        </UU5.Bricks.Div>
      </>
    );
    //@@viewOff:render
  },
});

export default TodoItem;
