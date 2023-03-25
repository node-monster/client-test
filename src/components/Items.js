import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class Items extends Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Accordion>
          {
            this.props.itemsList.map((item, _id) =>
              <Item key={_id} itemData={item}
                getItems={this.props.getItems}
                deleteItem={this.props.deleteItem}
              />
            )
          }
        </Accordion>
      </section>
    );
  }
}

class Item extends Component {

  render() {

    const itemData = this.props.itemData;

    return (
      <Accordion.Item eventKey={this.props}>
        <Accordion.Header>{itemData.name}</Accordion.Header>
        <Accordion.Body>
          <p>
            {itemData.description}
          </p>
          <Button data-testid={`delete-button-${itemData.name}`} onClick={() => this.props.deleteItem(itemData._id)}>Delete Item</Button>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default Items;
