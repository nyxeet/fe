//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect, useContext, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Lists from "../bricks/todo-lists";
import TodoContext from "../bricks/todo-list-context";
import TodoItem from "../bricks/todo-item";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TodoList",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};
const items = {
  itemList: [
    {
      awid: "22222222222222222222222222222222",
      completed: false,
      listId: "6077fd622e12134140f549da",
      text: "texdsasdasadt",
      sys: {
        cts: "2021-04-15T08:46:31.669Z",
        mts: "2021-04-15T08:46:31.669Z",
        rev: 0,
      },
      id: "6077fd672e12134140f549dc",
    },
    {
      awid: "22222222222222222222222222222222",
      completed: false,
      listId: "6077fd622e12134140f549da",
      text: "texdsasdasadt",
      sys: {
        cts: "2021-04-15T08:46:32.140Z",
        mts: "2021-04-15T08:46:32.140Z",
        rev: 0,
      },
      id: "6077fd682e12134140f549de",
    },
    {
      awid: "22222222222222222222222222222222",
      completed: false,
      listId: "6077fd622e12134140f549da",
      text: "texdsasdasadt",
      sys: {
        cts: "2021-04-15T08:46:32.677Z",
        mts: "2021-04-15T08:46:32.677Z",
        rev: 0,
      },
      id: "6077fd682e12134140f549e0",
    },
    {
      awid: "22222222222222222222222222222222",
      completed: false,
      listId: "6077fd622e12134140f549da",
      text: "texdsasdasadt",
      sys: {
        cts: "2021-04-15T09:09:44.405Z",
        mts: "2021-04-15T09:09:44.405Z",
        rev: 0,
      },
      id: "607802d82e12134140f549e3",
    },
  ],
  pageInfo: {
    pageIndex: 0,
    pageSize: 1000,
    total: 4,
  },
  uuAppErrorMap: {},
};
export const TodoList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [completedShowed, setCompletedShowed] = useState(false);
    const { items, createItem } = useContext(TodoContext);
    let currentListId = props?.params?.id;

    //@@viewOn:private

    function renderItems(listId) {
      const filteredItems = items.filter((item) => item.listId === listId && item.completed === false);
      if (filteredItems.length > 0) {
        return filteredItems.map((item) => {
          return <TodoItem item={item} key={item.id} />;
        });
      } else {
        return <UU5.Bricks.Div content={"nothing"} />;
      }
    }
    function create(opt) {
      const value = opt.value;
      createItem(currentListId, value);
    }

    function showCompleted(completedShowed) {
      setCompletedShowed(!completedShowed);
    }
    function renderCompletedItems(listId) {
      const completedItems = items.filter((item) => {
        return item.listId === listId && item.completed === true;
      });
      return completedItems.map((item) => {
        return <TodoItem item={item} key={item.id} />;
      });
      console.log(completedItems);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;

    return (
      <UU5.Bricks.Div colorSchema={"grey"}>
        <UU5.Forms.ContextSection>
          <UU5.Forms.ContextForm>
            <UU5.Forms.TextButton
              label={"create"}
              buttons={[
                {
                  icon: "mdi-check",
                  onClick: (opt) => create(opt),
                  colorSchema: "grey",
                },
              ]}
            />
          </UU5.Forms.ContextForm>
        </UU5.Forms.ContextSection>
        {renderItems(currentListId)}
        <UU5.Bricks.Button content={"Hide completed items"} onClick={() => showCompleted(completedShowed)} />
        {completedShowed && renderCompletedItems(currentListId)}
      </UU5.Bricks.Div>
    );
    //@@viewOff:render
  },
});

export default TodoList;
