//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues, useRef } from "uu5g04-hooks";
import Calls from "../calls";
import Config from "./config/config";
import Lsi from "./student-form-lsi";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "StudentForm",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const StudentForm = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ student, handleSave, handleCancel, isEditForm }) {
    const inputLsi = useLsiValues(Lsi);
    const imageRef = useRef();
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <UU5.Forms.ContextSection
        level={2}
        header={
          <UU5.Forms.ContextHeader
            content={<UU5.Bricks.Lsi lsi={Lsi.header} />}
            info={<UU5.Bricks.Lsi lsi={Lsi.info} />}
          />
        }
      >
        <UU5.Forms.ContextForm onSave={handleSave} onCancel={handleCancel}>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text
                value={student.name}
                label={inputLsi.name}
                name="name"
                inputAttrs={{ maxLength: 255 }}
                required
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text
                value={student.age}
                label={inputLsi.age}
                name="age"
                required
                inputAttrs={{ maxLength: 255 }}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>

          <UU5.Bricks.Row>
            {isEditForm && (
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Bricks.Image
                  src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${student.userPic}`)}
                  type="rounded"
                  width={400}
                />
              </UU5.Bricks.Column>
            )}

            {!isEditForm && (
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.File ref_={imageRef} label={inputLsi.image} name="userPic" />
              </UU5.Bricks.Column>
            )}
          </UU5.Bricks.Row>

          <UU5.Forms.ContextControls buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={Lsi.submit} /> }} />
        </UU5.Forms.ContextForm>
      </UU5.Forms.ContextSection>
    );
    //@@viewOff:render
  },
});

export default StudentForm;
