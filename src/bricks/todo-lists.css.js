import Config from "./config/config";

const main = () => Config.Css.css`
  display: flex;
  justify-content: center;
  align-items:center;


`;

const mainActive = () => Config.Css.css`
  width: 320px;
  background-color: blue;
`;

export default {
  main,
};
