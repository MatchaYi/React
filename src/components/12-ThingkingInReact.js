import React, {Component} from 'react';
function SearchBar (props) {
  return (
    <form>
      <input type="text" placeholder='searching'/>
      <p>
        <input type="checkbox"/>
        Only show products in stock.
      </p>
    </form>
  )
}
function ProductCategoryRow (props) {
    return (
        <tr>
            <th colSpan='2'>{props.category}</th>
        </tr>
    )
}
function ProductRow (props) {
  const name = props.product.stocked 
                ? props.product.name 
                : <span style={{color: 'red'}}>{props.product.name}</span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}
class ProductTable extends Component {
  render () {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if(product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.name}/>);
      lastCategory = product.category;
    });
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
class FilterableProductTable extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products}/>
      </div>
    )
  }
}
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 

class FilterableProductTableOut extends Component {
    render () {
        return <FilterableProductTable products={PRODUCTS}/>
    }
}
export default FilterableProductTableOut