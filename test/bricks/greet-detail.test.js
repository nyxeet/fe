import UU5 from "uu5g04";
import UuTest from "uu_test_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuTest.Bricks.GreetDetail`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuTest.Bricks.GreetDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
