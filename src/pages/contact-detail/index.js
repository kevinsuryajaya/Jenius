import * as React from "react";
import axios from "axios";
import styled from 'styled-components';
import { Container, Row, Col } from "reactstrap";
import "../../css/contact-detail/index.css";

const StyledContainer = styled(Container)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-bottom:20px;
  border-radius:5px;
`
const StyledRow = styled(Row)`
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 20px;
`
export default function ContactDetail(props) {
  const [data, setData] = React.useState([]);
  const [id_contact, set_id_contact] = React.useState("");

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://simple-contact-crud.herokuapp.com/contact/${props.match.params.id}`,
    }).then((res) => {
      setData(res.data.data);
    });
    set_id_contact(props.match.params.id);
  }, []);

  console.log(props);
  return (
    <React.Fragment>
      <StyledContainer>
      <StyledRow>
      <Col className="header">
       <h5 className="header__title">Contact Detail</h5>
       <p className="header__subtitle ">This is the detail of the contact person</p>
      </Col>
      </StyledRow>
        <Row>
          <Col md="6" className="image__section">
            <img className="image__value" src={data.photo} alt={data.firstName} />
          </Col>
          <Col md="6">
            <div className="detail">
              <div className="detail__section">
                <p>Name</p>
              </div>
              <div className="detail__value">
                <p>
                  {data.firstName} {data.lastName}
                </p>
              </div>
              </div>
              <div className="detail">
               <div className="detail__section">
                <p>Age</p>
              </div>
              <div className="detail__value">
                <p>
                  {data.age}
                </p>
              </div>
            </div>
            <button className="detail__button">Edit</button>
          </Col>
          
        </Row>
      </StyledContainer>
    </React.Fragment>
  );
}
