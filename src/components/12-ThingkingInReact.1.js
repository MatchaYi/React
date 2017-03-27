import React, {Component} from 'react';


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
function  Products (props) {
    const data = props.data;
    return (
        <tbody>
            <tr><th>{data[0].category}</th></tr>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
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
        return (
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Products data={datas.filter(item => item.category==='Sporting Goods')}/>
                <Products data={datas.filter(item => item.category==='Electronics')}/>
            </table>
        )
    }
}

class FilterableProductTable  extends Component {
    render () {
        return (
            <div>
               <SearchBar /> 
               <br/><br/>
               <ProductTable />
            </div>
        )
    }
}
export default FilterableProductTable 