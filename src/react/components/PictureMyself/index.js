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
    function importAll(r) { return r.keys().map(r); }
    const images = importAll(require.context('./meMyself', false, /\.(png|jpe?g|svg|mp4)$/));
    const Me = images.map((img, index) => (
      <Image 
        className={animination}
        alt={"Danustan Alphonza - " + descriptions[Math.floor(Math.random() * descriptions.length)]} 
        key={index} src={img} />
    ));
    
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