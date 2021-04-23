import UU5 from "uu5g04";
import UuTest from "uu_test_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuTest.Bricks.TodoListProvider`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuTest.Bricks.TodoListProvider />);
    expect(wrapper).toMatchSnapshot();
  });
});
