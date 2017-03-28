import React, {Component} from 'react';
import _ from 'underscore';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }
    handleChange (e) {
        this.props.onCheckedChange(e.target.checked);
    }
    searchChange (e) {
        this.props.onSearchChange(e.target.value);
    }
    render () {
        const isStock = this.props.isStock;
        return (
            <form >
                <input type="text" placeholder='Searching...' onChange={this.searchChange}/>
                <p>
                    <input type="checkbox" 
                    checked={isStock}
                    onChange={this.handleChange} />Only show products in stock
                </p>
            </form>
        )
    }
}
function  Products (props) {
    const categorized_prods = _.groupBy(props.data, prod => prod.category);
    const categories = Object.keys(categorized_prods);
    return (
        <tbody>
        {
               categories.map(category =>
                  [<tr><td colSpan='2'>{category}</td></tr>].concat(
                      categorized_prods[category].map(prod => {
                          let color = prod.stock ? '': 'cyan';
                          return (
                              <tr key={prod.name}>
                                  <td style={{color}}>{prod.name}</td>
                                  <td>{prod.price}</td>
                              </tr>
                          );
                      })
                  )
               )
        }
        </tbody>
    )
}

const dataJson = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class ProductTable extends Component {
    render () {
        const isStock = this.props.isStock;
        const searchText = this.props.searchText;
        const datas = dataJson.filter(prod => isStock || prod.stocked)
                              .filter(prod => prod.name.indexOf(searchText) !== -1);
        return (
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Products data={datas}/>
                />
            </table>
        )
    }
}

class FilterableProductTable  extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isStock: false,
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }
    handleChange (isStock) {
        this.setState({isStock: isStock})
    }
    searchChange (searchText) {
        this.setState({searchText: searchText})
    }
    render () {
        return (
            <div>
               <SearchBar 
                    isStock={this.state.isStock} 
                    searchText={this.state.searchText}
                    onCheckedChange={this.handleChange} 
                    onSearchChange={this.searchChange}/> 
               <br/><br/>
               <ProductTable isStock={this.state.isStock} searchText={this.state.searchText}/>
            </div>
        )
    }
}
export default FilterableProductTable 
