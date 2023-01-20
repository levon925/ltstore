import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'AirPods 2',
          img: 'AirPods-2.jpg',
          desc: 'უმაღლესი ხარისხის Apple AirPods 2-ის რეპლიკა',
          category: 'airpods',
          price: '59.99'
        },
        {
          id: 2,
          title: 'AirPods 3',
          img: 'AirPods-3.jpeg',
          desc: 'უმაღლესი ხარისხის Apple AirPods 3-ის რეპლიკა',
          category: 'airpods',
          price: '69.99'
        },
        {
          id: 3,
          title: 'AirPods Pro',
          img: 'AirPods-Pro.jpeg',
          desc: 'უმაღლესი ხარისხის Apple AirPods Pro-ს რეპლიკა',
          category: 'airpods',
          price: '79.99'
        },
        {
          id: 4,
          title: 'AirPods Pro 2',
          img: 'AirPods-Pro-2.webp',
          desc: 'უმაღლესი ხარისხის Apple AirPods Pro 2-ის რეპლიკა',
          category: 'airpods',
          price: '99.99'
        },
        {
          id: 5,
          title: 'Iphone X ქეისი',
          img: 'Iphone-X-Case.jpeg',
          desc: 'Iphone X ქეისის აღწერა',
          category: 'cases',
          price: '9.99'
        },
        {
          id: 6,
          title: 'Apple 20w fast charger',
          img: 'Apple-20w-Charger.jpg',
          desc: 'Apple-ის პროდუქციის სწრაფი დამტენი',
          category: 'chargers',
          price: '59.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category ==='all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;
