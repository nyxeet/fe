//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Card from "../bricks/card";
import Uu5Tiles from "uu5tilesg02";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Cards",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};
const data = [
  { id: 1, name: "Cat", image: "https://i.pinimg.com/originals/b8/9d/f8/b89df8a7546ce15c0b3c68fc27729303.jpg" },
  {
    id: 2,
    name: "Dog",
    image: "https://www.omlet.co.uk/images/originals/Breeds-Teddy-Roosevelt-Terrier-rat-catcher.jpg",
  },
  {
    id: 3,
    name: "Horse",
    image:
      "https://img.dropmark.com/AzUfQ0TDJ4BN9eoZauhS1Ypztmc=/large/cdn2/45696/2b5e336d57e755bc39af97028969c1cfa60f5ec4/short%2520horse.gif",
  },
  {
    id: 4,
    name: "Cow",
    image: "https://image.shutterstock.com/image-photo/small-brown-white-cow-beautiful-260nw-1501286447.jpg",
  },
  {
    id: 5,
    name: "Animal",
    image:
      "https://images.unsplash.com/photo-1530871485912-310c2ac29b80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBhbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 6,
    name: "Hippopotamus",
    image: "https://pleated-jeans.com/wp-content/uploads/2017/07/short-neck19.jpg",
  },
  {
    id: 7,
    name: "horse",
    image:
      "https://img.dropmark.com/AzUfQ0TDJ4BN9eoZauhS1Ypztmc=/large/cdn2/45696/2b5e336d57e755bc39af97028969c1cfa60f5ec4/short%2520horse.gif",
  },
  {
    id: 8,
    name: "cow",
    image: "https://www.activewild.com/wp-content/uploads/2017/10/klipspringer.jpg",
  },
];
export const Cards = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return (
      <>
        <UU5.Bricks.Header level={2} content="header" />
        <Uu5Tiles.Grid
          data={data}
          tileHeight="auto"
          tileMinWidth={200}
          tileMaxWidth={400}
          tileSpacing={8}
          rowSpacing={8}
        >
          <Card data={data.data} />
        </Uu5Tiles.Grid>
        {/* <PagingAutoLoad
          data={data}
          handleLoad={onLoad}
          distance={window.innerHeight}
          pageSize={3}
          error={renderError}
        /> */}
      </>
    );
    //@@viewOff:render
  },
});

export default Cards;
