import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Typography, Card, Tag } from 'antd';
const { Title } = Typography;
const { Meta } = Card;
// Projects
class Projects extends Component {
  render() {
    return (
      <Row className="py-1" type="flex" justify="center" align="middle">
        
        <Title className="font-2" style={{ color: "#08979c" }} level={2} type="danger">Projects</Title>

        <Col>
          <Row justify="center" type="flex" align="middle">
            <Col md={7} sm={20} className="card-2 m-1 p-1">
              <Title level={5} type="danger">
                <a href="https://github.com/danzilla/blingBlaw">Minimalist budget App</a>
              </Title>
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
            </Col>
            <Col md={7} sm={20} className="card-2 m-1 p-1">
              <Title level={5} type="danger">
                <a href="https://github.com/danzilla/quizzy">Quiz App</a>
              </Title>
              <div>
                <Tag color="magenta">NodeJs</Tag>
                <Tag color="orange">MongoDB</Tag>
                <Tag color="volcano">Express</Tag>
                <Tag color="gold">React</Tag>
                <Tag color="blue">React-Router</Tag>
                <Tag color="purple">Bootstrap</Tag>
                <Tag color="green">Axios</Tag>
              </div>
            </Col>
            <Col md={7} sm={20} className="card-2 m-1 p-1">
              <Title level={5} type="danger">
                <a href="https://github.com/danzilla/cocktailsRecipes">Cocktails Recipes</a>
              </Title>
              <div>
                <Tag color="magenta">NodeJs</Tag>
                <Tag color="orange">MongoDB</Tag>
                <Tag color="volcano">Express</Tag>
                <Tag color="gold">React</Tag>
                <Tag color="blue">React-Router</Tag>
                <Tag color="purple">Bootstrap</Tag>
                <Tag color="green">Axios</Tag>
              </div>
            </Col>
            <Col md={7} sm={20} className="card-2 m-1 p-1">
              <Title level={5} type="danger">
                <a href="https://github.com/danzilla/intro-to-cryptographic-primitives">Cryptographic Primitives</a>
              </Title>
              <div>
                <Tag color="magenta">Python - Flask</Tag>
                <Tag color="gold">cryptography</Tag>
                <Tag color="lime">Pydes </Tag>
                <Tag color="green">Bootstrap</Tag>
              </div>
            </Col>
          </Row>
        </Col>
        
      </Row>
    );
  }
}
// State Projects
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Projects);