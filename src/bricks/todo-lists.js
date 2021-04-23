//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useContext, useRef, useEffect } from "uu5g04-hooks";
import Config from "./config/config";
import TodoContext from "../bricks/todo-list-context";
import Css from "./todo-lists.css.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TodoLists",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const TodoList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ item }) {
    const [isEdit, setIsEdit] = useState(false);
    const { updateList, deleteList } = useContext(TodoContext);
    const itemRef = useRef();

    //@@viewOn:private
    function toggleEdit(isEdit, item) {
      if (!isEdit) {
        itemRef.current = item;
      }
      setIsEdit(!isEdit);
    }
    function update(opt) {
      updateList(itemRef.current.id, opt.value);
      setIsEdit(!isEdit);
    }
    function deleteL() {
      deleteList(itemRef.current.id);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <UU5.Bricks.Div className={Css.main()}>
        {isEdit ? (
          <UU5.Forms.ContextSection>
            <UU5.Forms.ContextForm onSave={update} onCancel={() => toggleEdit(isEdit, item)}>
              <UU5.Forms.TextButton
                value={item.name}
                name="name"
                inputAttrs={{ maxLength: 255 }}
                required
                buttons={[
                  {
                    icon: "mdi-check",
                    onClick: (opt) => update(opt),
                    colorSchema: "info",
                  },
                  {
                    icon: "plus4u5-trash-can",
                    onClick: () => deleteL(),
                    colorSchema: "brown",
                  },
                ]}
              />
            </UU5.Forms.ContextForm>
          </UU5.Forms.ContextSection>
        ) : (
          <>
            <UU5.Bricks.Text content={item.name} />
            <UU5.Bricks.Button style={{ marginLeft: "auto" }} onClick={() => toggleEdit(isEdit, item)}>
              <UU5.Bricks.Icon icon="mdi-pencil" />
            </UU5.Bricks.Button>
          </>
        )}
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default TodoList;
