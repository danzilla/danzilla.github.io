import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image } from 'antd';
import LazyLoad from 'react-lazy-load';
import Masonry from 'react-masonry-css';

// get ALL images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./meMyself', false, /\.(png|jpe?g|svg|mp4)$/));

// PictureMeMyself
function PictureMeMyself() {
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
          {/* array of JSX items */}
          {images.map((img, index) => (
            <LazyLoad onContentVisible={() => console.log('look ma I have been lazyloaded: ' + index)}>
              <Image
                className="card-2" 
                alt="Danustan Alphonza - 'Photograpy', 'coding', 'Yumm Yumm flavour-spicy foody', 'Dont want to get comfortable, wants to get comfortable with uncomfortable', 'SEO ho e ing'" 
                key={index}
                src={img} />
            </LazyLoad>
          ))}
        </Masonry>

      </Col>
    </Row>
  );
}

// State PictureMeMyself
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(PictureMeMyself);



