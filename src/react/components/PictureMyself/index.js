import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image } from 'antd';
import LazyLoad from 'react-lazy-load';
import Masonry from 'react-masonry-css';

// PictureMeMyself
function PictureMeMyself() {

  // get ALL images
  function importAll(r) { return r.keys().map(r); }
  const images = importAll(require.context('./meMyself', false, /\.(png|jpe?g|svg|mp4)$/));

  // Animinationx
  const animeEnter = ['backInUp', 'backInDown', 'backInLeft', 'bounceIn', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomRight'];
  let randomAnime = animeEnter[Math.floor(Math.random() * animeEnter.length)];

  // BrewakPoints for grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 2
  };

  // Images
  let animination = 'card-2 animate__animated animate__' + randomAnime;
  const Me = images.map((img, index) => (
        <LazyLoad onContentVisible={() => console.log('Lazyloaded: ' + index)}>
          <Image className={animination}
            alt="Danustan Alphonza - 'Photograpy', 'coding', 'Yumm Yumm flavour-spicy foody', 'Dont want to get comfortable, wants to get comfortable with uncomfortable', 'SEO ho e ing'" 
            key={index} src={img} />
        </LazyLoad>
      ));

  // Display grid
  return (
    <Row className="p-2" type="flex" justify="center" align="middle">
      <Col style={{ width: "100%", height: "100%" }}>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {Me}
        </Masonry>
      </Col>
    </Row>
  );
}

// State PictureMeMyself
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(PictureMeMyself);



