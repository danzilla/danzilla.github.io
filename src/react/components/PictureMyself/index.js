import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image } from 'antd';
import Masonry from 'react-masonry-css'

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
  // display grid
  return (
    <Row className="p-2" type="flex" justify="center" align="middle">
      <Col style={{ width: "100%", height: "100%" }}>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {/* array of JSX items */}
          {images.map((img, index) => (
            <Image className="card-2" alt="Danustan Alphonza - 'Photograpy', 'coding', 'hobby' " key={index} src={img} />
          ))}
        </Masonry>

      </Col>
    </Row>
  );
}

// State PictureMeMyself
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(PictureMeMyself);



