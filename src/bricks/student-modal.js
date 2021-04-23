//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import StudentDetails from "../routes/student-details";
import StudentForm from "./student-form";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "StudentModal",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const StudentModal = createVisualComponentWithRef({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props, ref) {
    const modalRef = useRef();
    const studentRef = useRef();

    useImperativeHandle(ref, () => ({
      open: (student, isEditForm) => {
        studentRef.current = student;
        modalRef.current.open({
          header: <UU5.Bricks.Text content={student.name || "Create student"} />,
          content: (
            <StudentForm
              student={student}
              isEditForm={isEditForm}
              handleSave={isEditForm ? handleUpdate : handleCreate}
              handleCancel={handleCancel}
            />
          ),
          footer: '<uu5string/><UuContentKit.Bricks.BlockSuccess content="It is working!" />',
        });
      },
    }));
    //@@viewOn:private
    function handleUpdate(opt) {
      console.log(opt);
      modalRef.current.close(true, () => {
        props.handlerMap.updateStudent({ id: studentRef.current.id, ...opt.values });
      });
    }
    function handleCreate(opt) {
      console.log(opt);
      modalRef.current.close(true, () => {
        props.handlerMap.createStudent({ ...opt.values });
      });
    }
    function handleCancel() {
      modalRef.current.close();
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return <UU5.Bricks.Modal size="l" ref_={modalRef} />;
    //@@viewOff:render
  },
});

export default StudentModal;
