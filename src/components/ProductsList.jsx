import { Component } from "react";
import Card from './Card';

export default class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
        }
    }
    componentDidMount(){
        
    }
    
    render(){
        this.pageNo = this.props.pageNo
        return(
            <div>
                <section className="page-section">
                    <span className="page-subsection-title">
                        <p>NEW ARRIVALS</p>
                    </span>
                    <div className="page-section-cards">
                        {
                            this.props.isLoading ?
                            <div>Loading...</div> 
                            :
                            this.props.products.map((product, key) => 
                                <Card
                                key={key}
                                name = {product.name}
                                image_link = {product.image_link}
                                price = {product.price} />
                            )
                        }
                    </div>
                </section>
                <div className="products-navigation">
                    <button onClick={this.props.prev}
                    disabled={this.pageNo == 1 ? true : false}> 
                    - 
                    </button>
                    <span>{this.pageNo}</span>
                    <button onClick={this.props.next}
                    disabled={this.pageNo == this.props.maxPage ? true : false}>
                         + 
                    </button>
                </div>
            </div>
        );
    }
}