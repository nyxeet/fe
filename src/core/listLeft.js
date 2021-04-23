//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useContext, useEffect } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";
import TodoContext from "../bricks/todo-list-context";
import TodoListElement from "../bricks/todo-lists";

import Config from "./config/config.js";

//@@viewOff:imports

export const ListLeft = createVisualComponent({
  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { lists, createList } = useContext(TodoContext);
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;

    const leftMenuItems = lists.map((list) => {
      return {
        id: `list/?id=${list.id}`,
        href: `list/?id=${list.id}`,
        content: <TodoListElement item={list} key={list.id} style={{ borderRadius: 0 }} />,
      };
    });

    return (
      <Plus4U5.App.Left
        {...props}
        logoProps={{
          backgroundColor: UU5.Environment.colors.blue.c700,
          backgroundColorTo: UU5.Environment.colors.blue.c500,
          title: "uuTest",
          companyLogo: Plus4U5.Environment.basePath + "assets/img/unicorn-logo.svg",
          generation: "1",
        }}
        helpHref={null}
      >
        <Plus4U5.App.MenuTree borderBottom items={leftMenuItems} style={{ margin: "0", padding: "0" }} />
        <UU5.Bricks.Button content={"create"} onClick={() => createList()} />
      </Plus4U5.App.Left>
    );
    //@@viewOff:render
  },
});

export default ListLeft;
