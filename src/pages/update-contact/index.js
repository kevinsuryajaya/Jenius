import * as React from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import SectionHeader from "../../uikits/section-header";
import CustomInput from "../../uikits/custom-input";
import axios from "axios";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-bottom: 20px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: 0px;
  border-radius: 5px;
  background-color: #5cb85c;
  font-weight: 600;
  color: white;
  width: 100%;
  padding: 5px;
  margin-top: 20px;
`;

export default function UpdateContact(props) {
  const [updateContact, setUpdateContact] = React.useState([]);

  const [status, setStatus] = React.useState("");
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    setUpdateContact({
      ...updateContact,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://simple-contact-crud.herokuapp.com/contact/${props.match.params.id}`,
    }).then((res) => {
      setUpdateContact(res.data.data);
    });
  }, []);
  var temp = {
    firstName: updateContact.firstName,
    lastName: updateContact.lastName,
    age: updateContact.age,
    photo: updateContact.photo,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `https://simple-contact-crud.herokuapp.com/contact/${props.match.params.id}`,
      data: temp,
    })
      .then(function (response) {
        console.log(response.data);
        setStatus(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        setStatus("Bad Request (400)");
      });
  };
  console.log(temp);
  return (
    <React.Fragment>
      <StyledContainer>
        <SectionHeader
          title={"Update Contact"}
          subtitle={"Update contact detail"}
        />
        <Row>
          <Col md="6">
            <form className="" onSubmit={handleSubmit}>
              <CustomInput
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                value={updateContact.firstName}
                onChange={handleChange}
              />
              <CustomInput
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                value={updateContact.lastName}
                onChange={handleChange}
              />
              <CustomInput
                type="text"
                name="age"
                id="age"
                label="Age"
                value={updateContact.age}
                onChange={handleChange}
              />

              <div className="input-field">
                <StyledButton type="submit" onClick={toggle}>
                  Update Contact
                </StyledButton>
              </div>
            </form>
          </Col>
        </Row>
      </StyledContainer>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Notification</ModalHeader>
        <ModalBody>{status}</ModalBody>
      </Modal>
    </React.Fragment>
  );
}
