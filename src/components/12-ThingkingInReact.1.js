import React, {Component} from 'react';


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
    const data = props.data;
    const isStock = props.isStock;
    const searchText = props.searchText;
    return (
        <tbody>
            <tr><th>{data[0].category}</th></tr>
            {data.filter(item => isStock ? item.stocked : true)
            .filter(item => item.name.toLowerCase().indexOf(searchText) > -1 || item.price.indexOf(searchText) > -1)
            .map(item => {
                const color = item.stocked === true ? '' : 'red';
                return (
                    <tr key={item.name}>
                        <td style={{color:color}}>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })}
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
        const datas = dataJson;
        const isStock = this.props.isStock;
        const searchText = this.props.searchText;
        return (
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Products isStock={isStock} 
                data={datas.filter(item => item.category==='Sporting Goods')}
                searchText={searchText}
                />
                <Products isStock={isStock} 
                data={datas.filter(item => item.category==='Electronics')}
                searchText={searchText}
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