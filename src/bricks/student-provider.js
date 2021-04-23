//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "../calls";
import Config from "./config/config";
//@@viewOff:imports

export const StudentProvider = createComponent({
  displayName: Config.TAG + "StudentProvider",

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listStudents,
        delete: Calls.deleteStudent,
        setState: Calls.setState,
        updateStudent: Calls.updateStudent,
        createStudent: Calls.createStudent,
      },
    });
    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;

    return children({ state, data, newData, pendingData, errorData, handlerMap });
    //@@viewOff:render
  },
});

export default StudentProvider;
