import React, {Component} from 'react';

const dataJson = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: 'Searching...'
        }
    }
    render () {
        return (
            <div>
                <input type="text" placeholder={this.state.search}/>
                <br />
                <label>
                    <input type="checkbox"/>Only show products in stock
                </label>
                
            </div>
        )
    }
}
class ProductCategoryRow  extends Component {
    render () {
        return <tr><th colSpan='2'>{this.props.category}</th></tr>
    }
}
class ProductRow  extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.products.name}</td>
                <td>{this.props.products.price}</td>
            </tr>
        )
    }
}
class ProductTable extends Component {
    render () {
        const rows = [];
        const lastCategory = null;
        this.props.products.forEach(product => {
            if(product.category !== lastCategory) {
               rows.push(<ProductRow category={product.category} key={product.category}/>) 
            }
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class FilterableProductTable  extends Component {
    render () {
        return (
            <div>
               <SearchBar /> 
               <ProductTable product={this.props.products}/>
            </div>
        )
    }
}
export default FilterableProductTable 