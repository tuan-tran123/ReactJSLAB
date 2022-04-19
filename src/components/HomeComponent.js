import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null} 
                {/*Nếu item designation khác null, trả về CardSubtitle ngươc lại : trả về null*/} 
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} /> {/*Tạo method component RenderCard tại đây để lấy dữ liệu từ promotion, dish and leader */ }

                </div>
                 <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                    
                </div>
                 <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                    
                </div>
            </div>
        </div>


    )

}

export default Home;