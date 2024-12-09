import React, { useState } from 'react'
import { useGetProductListQuery } from '../../hooks/product/product';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './components/ProductCard';

const ProductPage = () => {
  let [loading, setLoading] = useState(true);
  const {data, isLoading, isError, error} = useGetProductListQuery(name);

  const [query] = useSearchParams();
  const name = query.get("name");

  return (
    <Container>
      
      <Row>
        { data !== undefined && data.length > 0 ? (
          data.map((item) => (
            <Col md={3} sm={12} key={item._id}>
              <ProductCard item={item} />
            </Col>
          ))
        ) : (
          <div className="text-align-center empty-bag">
            {name === "" ? (
              <h2>등록된 상품이 없습니다!</h2>
            ) : (
              <h2>{name}과 일치한 상품이 없습니다!`</h2>
            )}
          </div>
        )}
      </Row>
      
    </Container>
  )
}

export default ProductPage