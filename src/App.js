import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    let response = await axios.post(`${process.env.REACT_APP_SERVER}/items`, item);
    console.log(response);
    this.getItems();
  }

  getItems = async () => {
    let response = await axios.get(`${process.env.REACT_APP_SERVER}/items`);
    console.log(response);
    const items = response.data;
    this.setState({ items });
  }

  deleteItem = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER}/items`, id);
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items  itemsList={this.state.items} 
                      getitems={this.getItems}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
