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
        this.props.onCheckedChange(e.target.checked);
    }
    render () {
        return (
            <form>
                <input type="text" placeholder='Searching...' 
                        onChange={this.searchChange}/>
                <br/>
                <label>
                    <input type="checkbox" 
                            onChange={this.checkedChange}/>
                    Only show products in stock.
                </label>
            </form>
        );
    }
}

function ProductTable (props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

class ProcuctsList extends Component {
    render() {
        const products = this.props.products;
        const category_prods = _.groupBy(products,prod => prod.category);
        const categories = Object.keys(category_prods);
        return (
            <ProductTable>
               {categories.map(category => (
                    [<tr><th colSpan='2'>{category}</th></tr>].concat(
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
                  ))
               }
            </ProductTable>
        )
    }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
class FilterableProductTable extends Component {
    constructor (props) {
        super(props);
        this.state={
            searchText: '',
            isChecked: false
        };
        this.searchChange = this.searchChange.bind(this);
        this.checkedChange = this.checkedChange.bind(this);
    }
     searchChange(searchText) {
        this.setState({searchText});
    }
    checkedChange(isChecked) {
        this.setState({isChecked});
    }
    render() {
        const isChecked = this.state.isChecked;
        const searchText = this.state.searchText;
        const products = PRODUCTS.filter(prod => !isChecked || prod.stocked)
                                 .filter(prod => prod.name.indexOf(searchText) !== -1);
        return (
            <div>
                <SearchBar onCheckedChange={this.checkedChange}
                           onSearchChange={this.searchChange}
                />
                <ProcuctsList products={products}/>
            </div>
        )
    }
}

class ThingkingInReact extends Component {
    render () {
        return <FilterableProductTable  />
    }
}

export default ThingkingInReact