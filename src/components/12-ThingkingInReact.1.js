import React, {Component} from 'react';


class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: 'Searching...',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.props.onChange(e.target.checked);
    }
    render () {
        const isStock = this.props.isStock
        return (
            <div>
                <input type="text" placeholder={this.state.search}/>
                <br />
                <label>
                    <input type="checkbox" 
                    checked={isStock}
                    onChange={this.handleChange} />Only show products in stock
                </label>
            </div>
        )
    }
}
function  Products (props) {
    const data = props.data;
    const isStock = props.isStock;
    return (
        <tbody>
            <tr><th>{data[0].category}</th></tr>
            {data.filter(item => isStock ? item.stocked : true).map((item, index) => {
                const color = item.stocked === true ? '' : 'red';
                return (
                    <tr key={index}>
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
        return (
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Products isStock={isStock} data={datas.filter(item => item.category==='Sporting Goods')}/>
                <Products isStock={isStock} data={datas.filter(item => item.category==='Electronics')}/>
            </table>
        )
    }
}

class FilterableProductTable  extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isStock: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (isStock) {
        this.setState({isStock: isStock})
    }
    render () {
        return (
            <div>
               <SearchBar isStock={this.state.isStock} onChange={this.handleChange}/> 
               <br/><br/>
               <ProductTable isStock={this.state.isStock}/>
            </div>
        )
    }
}
export default FilterableProductTable 