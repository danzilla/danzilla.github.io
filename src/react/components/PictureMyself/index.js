import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image } from 'antd';
import LazyLoad from 'react-lazy-load';
import Masonry from 'react-masonry-css';

// PictureMeMyself
function PictureMeMyself() {
 
  // Animinations
  const animeEnter = ['fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomRight'];
  let randomAnime = animeEnter[Math.floor(Math.random() * animeEnter.length)];
  let animination = 'card-2 animate__animated animate__' + randomAnime;

  // // Get ALL Images
  // function importAll(r) { return r.keys().map(r); }
  // const images = importAll(require.context('./meMyself', false, /\.(png|jpe?g|svg|mp4)$/));
  // const Me = images.map((img, index) => (
  //   <LazyLoad onContentVisible={() => console.log('Lazyloaded: ' + index)}>
  //     <Image 
  //       className={animination}
  //       alt="Danustan Alphonza - 'Photography', 'coding', 'Yumm Yumm flavour-spicy foody', 'Dont want to get Comfortable, Wants to be Comfortable being Uncomfortable', 'SEO ho e ing'" 
  //       key={index} src={img} />
  //   </LazyLoad>
  // ));

    // Get ALL Images
    let descriptions = [
      "Photography", "Web and Development an IOT", "Design and Coding", "Yumm Yumm Spicy Foody", "SEO hoe ing", "Dont want to get Comfortable, Wants to be Comfortable being Uncomfortable",
      "Life is short, break the rules. forgive quickly, kiss slowly. Love truly. Laugh uncontrollable and never regret anything that make you smile", 
      "Whenever an elephant walks, there are many dogs which bark",
      "The way to get started is to quit talking and begin doing",
      "Rules for happiness: something to do, someone to love, something to hope for",
      "Showing off is the fool's idea of glory",
      "Life truly does begin outside your comfort zone",
      "Not getting what you want is sometimes a wonderful stroke of Luck",
      "Everything happens for a reason. Some are reasons, others are lessons",
      "Honesty, Direct, Bold without being aggressive about it",
      "When we give up on our dreams, we die while still alive",
      "Start and you have to Finish"
    ]
    let imageList = [
      <Image 
        className={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Lone Cross in the farm"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_0.jpg")} />,
      <Image 
        className={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - A Rice Plant"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_1.jpg")} />,
      <Image 
        className={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Early morning Hot Chocolate on a Camping Trip"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_10.jpg")} />,
      <Image 
        className={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Half crescent moon"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_11.jpg")} />,
      <Image 
        className={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Lucille"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_12.jpg")} />,
      <Image
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - tobermory winter expedition"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_13.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - That wheet farm"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_14.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Ohhhh! Lovebirds"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_15.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - All you need is Love and Chocolate"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_16.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Kandy, Peradeniya"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_18.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Trying to be traditional"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_19.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Early morning fishing boats at Trincomalee"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_2.jpg")} />,
      <Image
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Love this climate! Nuwara Eliya"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_20.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Rainbow"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_2000.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Water drops on White Rose"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_21.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Moss"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_22.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - ❤︎ "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_23.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Nightcity "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_24.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - That day in Ottawa, Red. "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_246.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Three "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_25.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - A single flower blooming "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_26.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Rocks, Color, Shape "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_27.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Flower and it was pretty "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_28.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Who else? "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_2_9.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Pretty Flower near Unichai Dam "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_3.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Just Me "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_30.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Rowdy Baby "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_30_1.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - On the way to Nine Arch, Ella "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_31.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - I am not lost "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_32.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Single Jasmine Flower "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_33.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Appama made this Apam/Pancake "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_337.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Chocolate Fruit "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_34.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Are we related to each other? "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_35.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Flexin under Dunhida Water Falls"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_36.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Street food in Chennai"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_37.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Early morning in Sri Lanka"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_38.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Rice Plant in Vaddi"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_39.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Trincomalee Fishman at Dawn"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_4.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Christmas"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_40.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - No croco here"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_41.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Tobermory winter adventure"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_42.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Rice Plant"}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_43.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Cloudy Sky "}
        src={require("./meMyself/Danustan_Alphonza_I_Can_See_the_Tower.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Goku "}
        src={require("./meMyself/Danustan_Alphonza_goku_son.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Beauty at Kawarthawa "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_44.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Stacked "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_45.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Misty and Farmhouse "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_47.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Enthusiastic Star Fish "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_48.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Red Hair "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_49.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Nine Arch Bridge, Ella "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_5.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Coconut Tree at Dusk "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_6.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Firework "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_8.jpg")} />,
      <Image 
        classname={animination} alt={descriptions[Math.floor(Math.random() * descriptions.length)]}
        title={"Danustan Alphonza - Flower "}
        src={require("./meMyself/Danustan_Alphonza_danzilla_danustan_spicy_food_code_hobby_9.jpg")} />,
    ]

  // Images
  const Me = imageList.map((image, index) => (image));
  // BrewakPoints for grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 2
  };
  // Display grid
  return (
    <Row className="p-2" type="flex" justify="center" align="middle">
      <Col style={{ width: "100%", height: "100%" }}>
        <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {Me}
        </Masonry>
      </Col>
    </Row>
  );
}

// State PictureMeMyself
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(PictureMeMyself);