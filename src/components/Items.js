import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import axios from 'axios';

class Items extends Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, _id) =>
                <Item key={_id} itemData={item}
                  getItems={this.props.getItems}
                />
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

class Item extends Component {


  constructor(props) {
    super(props);
    this.getItems = this.props.getItems;
  }


  deleteItem = async (id) => {
      await axios.delete(`${process.env.REACT_APP_SERVER}/items/${id}`);
  }

  render() {

    const itemData = this.props.itemData;

    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{itemData.description}</td>
        <td>
          <Button data-testid={`delete-button-${itemData.name}`} onClick={() => this.deleteItem(itemData._id)}>Delete Item</Button>
        </td>
      </tr>
    );
  }
}

export default Items;
