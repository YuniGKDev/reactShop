import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from "../../../utils/number";
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';

const ProductCard = ({ item }) => {
  const [size, setSize] = useState("");
  //const { id } = useParams();
  const [sizeError, setSizeError] = useState(false);

  const navigate = useNavigate();

  let user = true;
  let selectedProduct = null;

  /*
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  */

  const addItemToCart = () => {
    //사이즈를 아직 선택안했다면 에러
    if(size === ""){
      setSizeError(true);
      return;
    }
  
    // 아직 로그인을 안한유저라면 로그인페이지로
    if(!user)
      navigate("/login")

    // 카트에 아이템 추가하기

  };
  const selectSize = (value) => {
    // 사이즈 추가하기
    setSize(value);

    if(setSizeError)
      setSizeError(false);
  };

  return (
    <Container className="product-detail-card">
      <Row>
        <Col sm={6}>
          {/*<img src={selectedProduct?.image} className="w-100" alt="image" />*/}
        </Col>
        <Col className="product-info-area" sm={6}>
          <div className="product-info">{selectedProduct?.name}</div>
          <div className="product-info">
            ₩ {currencyFormat(selectedProduct?.price)}
          </div>
          <div className="product-info">{selectedProduct?.description}</div>

          <Dropdown
            className="drop-down size-drop-down"
            title={size}
            align="start"
            onSelect={(value) => selectSize(value)}
          >
            <Dropdown.Toggle
              className="size-drop-down"
              variant={sizeError ? "outline-danger" : "outline-dark"}
              id="dropdown-basic"
              align="start"
            >
              {size === "" ? "사이즈 선택" : size.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu className="size-drop-down">
              {Object.keys(selectedProduct.stock).length > 0 &&
                Object.keys(selectedProduct.stock).map((item, index) =>
                  selectedProduct.stock[item] > 0 ? (
                    <Dropdown.Item eventKey={item} key={index}>
                      {item.toUpperCase()}
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item eventKey={item} disabled={true} key={index}>
                      {item.toUpperCase()}
                    </Dropdown.Item>
                  )
                )}
            </Dropdown.Menu>
          </Dropdown>
          <div className="warning-message">
            {sizeError && "사이즈를 선택해주세요."}
          </div>
          <Button variant="dark" className="add-button" onClick={addItemToCart}>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard