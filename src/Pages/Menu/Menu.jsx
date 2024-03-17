import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import Featured from "../Home/Featured/Featured";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>PH Care | Portal </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet> 
	<Cover></Cover>
	<Featured></Featured>
	<PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
