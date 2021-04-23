//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import TodoListContext from "./todo-list-context";
//@@viewOff:imports

let initialLists = [
  {
    awid: "22222222222222222222222222222222",
    name: "heh1",
    id: "6077ec26e3a8ad402c4d38d0",
  },
  {
    awid: "22222222222222222222222222222222",
    name: "heh",
    id: "6077fd622e12134140f549da",
  },
];
let initialItems = [
  {
    awid: "22222222222222222222222222222222",
    completed: false,
    listId: "6077fd622e12134140f549da",
    text: "texd",
    id: "6077fd672e12134140f549dc",
    completed: false,
  },
  {
    awid: "22222222222222222222222222222222",
    completed: false,
    listId: "6077fd622e12134140f549da",
    text: "texdsa",
    id: "6077fd682e12134140f549de",
    completed: false,
  },
  {
    awid: "22222222222222222222222222222222",
    completed: false,
    listId: "6077fd622e12134140f549da",
    text: "texdsasda",
    id: "6077fd682e12134140f549e0",
    completed: false,
  },
  {
    awid: "22222222222222222222222222222222",
    completed: false,
    listId: "6077fd622e12134140f549da",
    text: "texdsasdasadt",
    id: "607802d82e12134140f549e3",
    completed: true,
  },
];

export const TodoListProvider = createComponent({
  displayName: Config.TAG + "TodoListProvider",

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children }) {
    const [items, setItems] = useState(initialItems);
    const [lists, setLists] = useState(initialLists);

    //@@viewOn:private
    function updateList(id, opt) {
      console.log(opt);
      let newList = [...lists];

      let updateItem = lists.find((list) => list.id === id);
      let updateIdx = null;
      lists.find((list, idx) => {
        if (list.id === id) {
          updateIdx = idx;
        }
      });

      updateItem = {
        ...updateItem,
        name: opt,
      };

      newList.splice(updateIdx, 1, updateItem);

      setLists(newList);
    }
    function updateItem(id, opt) {
      let newItems = [...items];

      let updateItem = items.find((list) => list.id === id);
      let updateIdx;
      items.find((list, idx) => {
        if (list.id === id) {
          updateIdx = idx;
        }
      });
      console.log(opt);
      updateItem = {
        ...updateItem,
        text: opt,
      };
      newItems.splice(updateIdx, 1, updateItem);

      setItems(newItems);
    }
    function createList() {
      let newList = [...lists];
      newList.push({
        awid: "22222222222222222222222222222222",
        name: `List ${newList.length + 1}`,
        id: UU5.Common.Tools.generateUUID(),
      });
      setLists(newList);
    }

    function createItem(listId, value) {
      let newItems = [...items];
      newItems.push({
        awid: "22222222222222222222222222222222",
        completed: false,
        listId: listId,
        text: value,
        id: UU5.Common.Tools.generateUUID(),
      });
      setItems(newItems);
      console.log(newItems);
    }
    function deleteItem(id) {
      let newItems = [...items];
      console.log(items);
      let deleteIdx = null;
      items.find((list, idx) => {
        console.log(idx);
        if (list.id === id) {
          deleteIdx = idx;
        }
      });
      newItems.splice(deleteIdx, 1);

      setItems(newItems);
    }
    function deleteList(id) {
      let newLists = [...lists];

      let deleteIdx = null;
      lists.find((list, idx) => {
        if (list.id === id) {
          deleteIdx = idx;
        }
      });
      newLists.splice(deleteIdx, 1);

      setLists(newLists);
      UU5.Environment.setRoute("list");
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;

    return (
      <TodoListContext.Provider
        value={{ lists, items, updateList, createList, createItem, updateItem, deleteItem, deleteList }}
      >
        {children}
      </TodoListContext.Provider>
    );
    //@@viewOff:render
  },
});

export default TodoListProvider;
