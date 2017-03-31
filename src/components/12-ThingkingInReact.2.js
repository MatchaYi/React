import React, {Component} from 'react';
import _ from 'underscore'

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.searchChange = this.searchChange.bind(this);
        this.checkedChange = this.checkedChange.bind(this);
    }
    searchChange (e) {
        this.props.onSearchChange(e.target.value);
    }
    checkedChange (e) {
        this.props.onCheckedChange(e.target.checked)
    }
    render () {
        return (
            <form>
                <input type="text" placeholder='Searching' onChange={this.searchChange}/>
                <p>
                    <input type="checkbox" onChange={this.checkedChange}/>
                    Only show products in stock.
                </p>
            </form>
        )
    }
}
class Product extends Component {
    render () {
        const category_prods = _.groupBy(this.props.products,prod => prod.category);
        const categories = Object.keys(category_prods);
        return (
            <tbody>
                {
                   categories.map(category => 
                        [<tr><th>{category}</th></tr>].concat(
                            category_prods[category].map(prod => {
                                const color = prod.stocked ? '' : 'red';
                                return (
                                    <tr>
                                        <td style={{color}}>{prod.name}</td>
                                        <td>{prod.price}</td>
                                    </tr>
                                )
                            })
                        )
                   ) 
                }
            </tbody>
        )
    }
}
function TableList (props) {
    const isStock = props.isStock;
    const searchText = props.searchText;
    const products = props.products.filter(prod => !isStock || prod.stocked)
                                   .filter(prod => prod.name.indexOf(searchText) !== -1);
    
    return (
        <table>
            <thead>
                <tr colSpan='2'><th>name</th><th>price</th></tr>
            </thead>
            <Product products={products}/> 
        </table>
    )
}
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class Out extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isStock : false,
            searchText: ''
        }
        this.searchChange = this.searchChange.bind(this);
        this.checkedChange = this.checkedChange.bind(this);
    }
    searchChange (searchText) {
        this.setState({searchText});
    }
    checkedChange (isStock) {
        this.setState({isStock})
    }
    render () {
        return (
            <div>
                <SearchBar onSearchChange={this.searchChange} onCheckedChange={this.checkedChange}/>
                <TableList products={PRODUCTS} isStock={this.state.isStock} searchText={this.state.searchText}/> 
            </div>
        )     
    }
}
export default Out