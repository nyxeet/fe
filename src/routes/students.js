//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
import { createVisualComponentWithRef, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import StudentProvider from "../bricks/student-provider";
import Calls from "../calls";

import StudentModal from "../bricks/student-modal";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Students",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Students = createVisualComponentWithRef({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const deleteRef = useRef();
    const setStateRef = useRef();
    const modalRef = useRef();
    const updateStudentRef = useRef();
    //@@viewOn:hooks

    //@@viewOff:hooks
    //@@viewOn:private
    function handleStudentDetails(id) {
      UU5.Environment.setRoute("studentDetails", { id });
    }
    function handleDeleteStudent(id) {
      console.log("DELETE");

      deleteRef.current({ id });
    }
    function setFinalState(id) {
      console.log("FINAL");
      setStateRef.current({ id, state: "final" });
    }
    function openModal(student, isEditModal = true) {
      modalRef.current.open(student, isEditModal);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    function showError(content) {
      UU5.Environment.getPage().getAlertBus().addAlert({
        content,
        colorSchema: "red",
      });
    }
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }
    function renderTile(item) {
      item = item.data.data;
      return (
        <UU5.Bricks.Row key={item.id}>
          <UU5.Bricks.Header level={1}>{item.name}</UU5.Bricks.Header>
          <UU5.Bricks.Text>{item.age}</UU5.Bricks.Text>
          <UU5.Bricks.Image
            width="320px"
            src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${item.userPic}`)}
            authenticate
          />
          <UU5.Bricks.Button content={item.name} onClick={() => handleStudentDetails(item.id)} />
          <UU5.Bricks.Button content={`delete ${item.name}`} onClick={() => handleDeleteStudent(item.id)} />
          <UU5.Bricks.Button content={`setFinalState ${item.name}`} onClick={() => setFinalState(item.id)} />
          <UU5.Bricks.Button content={`Modal ${item.name}`} onClick={() => openModal(item)} />
        </UU5.Bricks.Row>
      );
    }

    function renderReady(students, handlerMap) {
      return (
        <>
          <UU5.Bricks.Header level={2} content="header" />
          <UU5.Bricks.Button colorSchema="green" content={`Create student`} onClick={() => openModal({}, false)} />
          <Uu5Tiles.Grid
            data={students}
            tileHeight="auto"
            tileMinWidth={200}
            tileMaxWidth={400}
            tileSpacing={8}
            rowSpacing={8}
          >
            {renderTile}
          </Uu5Tiles.Grid>
          <StudentModal ref={modalRef} handlerMap={handlerMap} />
          {/* <PagingAutoLoad
          data={data}
          handleLoad={onLoad}
          distance={window.innerHeight}
          pageSize={3}
          error={renderError}
        /> */}
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <UU5.Bricks.Container>
        <StudentProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            setStateRef.current = handlerMap.setState;
            deleteRef.current = handlerMap.delete;
            updateStudentRef.current = handlerMap.updateStudent;

            switch (state) {
              case "pending":
              case "pendingNoData":
                return renderLoad();
              case "error":
              case "errorNoData":
                return renderError(errorData);
              case "itemPending":
              case "ready":
              case "readyNoData":
              default:
                return renderReady(data, handlerMap);
            }
          }}
        </StudentProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default Students;
