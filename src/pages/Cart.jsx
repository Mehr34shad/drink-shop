import React, { Fragment, useContext} from "react";
import { Col, Image, ListGroup, Row, Container, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import contextApi from "../context/contextApi.js";

const Cart = ({ id, image_url, name, price }) => {
  const context = useContext(contextApi);

  // const [list, setlist] = useState([
  //   {
  //     id: id,
  //     image_url: image_url,
  //     name: name,
  //     price: price,
  //   },
  // ]);

  // useEffect(() => {
  //   const data = localStorage.getItem("listBeers");
  //   if (data) {
  //     setlist(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("listBeers", JSON.stringify(list));
  // });

  //   var hours = 24; // Reset when storage is more than 24hours
  // var now = new Date().getTime();
  // var setupTime = localStorage.getItem('setupTime');
  // if (setupTime == null) {
  //     localStorage.setItem('setupTime', now)
  // } else {
  //     if(now-setupTime > hours*60*60*1000) {
  //         localStorage.clear()
  //         localStorage.setItem('setupTime', now);
  //     }
  // }

  // useEffect(() => {
  //   const Data = window.localStorage.getItem('listBeers');
  //   console.log(Data);
  //   setlist(JSON.parse(Data));
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem('listBeers', JSON.stringify(list));
  // });

  return (
    <Fragment>
      <Container className="mt-5">
        <ListGroup>
          <ListGroup.Item key={id} variant="success">
            <Row>
              <Col md={3}>
                <Image src={image_url} fluid rounded style={{ width: "15%" }} />
              </Col>
              <Col md={3} className="mt-4">
                <span style={{ fontSize: "20px", color: "#313131" }}>
                  {name}
                </span>
              </Col>
              <Col
                md={3}
                style={{ fontSize: "20px", color: "#313131" }}
                className="mt-4"
              >
                Price : {price}$
              </Col>
              <Col md={3}>
                <Button
                  className="mt-4 bg-dark float-end"
                  onClick={() => context.handleDeleteCard(id)}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "#ca3e47",
                    marginTop: "5rem",
                  }}
                >
                  <AiFillDelete />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default Cart;
