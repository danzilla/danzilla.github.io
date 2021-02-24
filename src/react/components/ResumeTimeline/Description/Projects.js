import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Typography, Card, Tag } from 'antd';
const { Title } = Typography;
const { Meta } = Card;
// Projects
class Projects extends Component {
  render() {
    return (
      <>
        <Row className="py-1" style={{ height: 'auto' }} type="flex" justify="center" align="middle">
          <Row> <Title className="font-2" style={{ color: "#08979c" }} level={2} type="danger">Projects</Title> </Row>
          <Row>
            <Col className="m-1" style={{position: "relative", overflow: "hidden"}}>
              <Card style={{ width: 220 }}>
                <Meta className="my-1" title={<a href="https://github.com/danzilla/blingBlaw">Minimalist budget App</a>} />
                <div>
                  <Tag color="magenta">NodeJs</Tag>
                  <Tag color="red">JavaScript</Tag>
                  <Tag color="volcano">Express</Tag>
                  <Tag color="orange">PostgreSQL</Tag>
                  <Tag color="cyan">GraphQL</Tag>
                  <Tag color="gold">React</Tag>
                  <Tag color="lime">Redux + Thunk</Tag>
                  <Tag color="green">Ant.Design</Tag>
                  <Tag color="blue">React-Router</Tag>
                  <Tag color="geekblue">REST and GraphQL</Tag>
                  <Tag color="purple">Docker</Tag>
                </div>
              </Card>
            </Col>

            <Col className="m-1" style={{position: "relative", overflow: "hidden"}}>
              <Card style={{ width: 220 }}>
                <Meta className="my-1" title={<><a href="https://github.com/danzilla/quizzy">Quiz App</a></>} />
                <div>
                  <Tag color="magenta">NodeJs</Tag>
                  <Tag color="orange">MongoDB</Tag>
                  <Tag color="volcano">Express</Tag>
                  <Tag color="gold">React</Tag>
                  <Tag color="blue">React-Router</Tag>
                  <Tag color="purple">Bootstrap</Tag>
                  <Tag color="green">Axios</Tag>
                </div>
              </Card>
            </Col>

            <Col className="m-1" style={{position: "relative", overflow: "hidden"}}>
              <Card style={{ width: 220 }}>
                <Meta className="my-1" title={<a href="https://github.com/danzilla/cocktailsRecipes">Cocktails Recipes</a>} />
                <div>
                  <Tag color="magenta">NodeJs</Tag>
                  <Tag color="gold">React</Tag>
                  <Tag color="lime">Redux + Thunk</Tag>
                  <Tag color="green">Axios</Tag>
                  <Tag color="blue">React-Router</Tag>
                  <Tag color="purple">Bootstrap</Tag>
                </div>
              </Card>
            </Col>

            <Col className="m-1" style={{position: "relative", overflow: "hidden"}}>
              <Card style={{ width: 240 }}>
                <Meta className="my-1" title={<a href="https://github.com/danzilla/intro-to-cryptographic-primitives">Cryptographic Primitives</a>} />
                <div>
                  <Tag color="magenta">Python - Flask</Tag>
                  <Tag color="gold">cryptography</Tag>
                  <Tag color="lime">Pydes </Tag>
                  <Tag color="green">Bootstrap</Tag>
                </div>
              </Card>
            </Col>

          </Row>

        </Row>
      </>
    );
  }
}
// State Projects
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Projects);