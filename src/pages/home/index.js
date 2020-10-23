import * as React from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import CustomCard from "../../components/card";

const StyledColumn = styled(Col)`
  margin-bottom: 20px;
`;
export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "GET",
      url: "https://simple-contact-crud.herokuapp.com/contact",
    }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row>
          {data.map((contact) => (
            <StyledColumn md="3">
              <CustomCard
                key={contact.id}
                id={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                age={contact.age}
                photo={contact.photo}
              />
            </StyledColumn>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
