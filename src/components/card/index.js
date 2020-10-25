import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styled from "styled-components";
import "../../css/card/index.css";

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledLink = styled(Link)`
  color: #000;
`;

type Props = {
  contactData: array,
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  photo: string,
};

/**
 * @param {Array} props.contactData
 * @param {String} props.id
 * @param {String} props.firstName
 * @param {String} props.lastName
 * @param {Number} props.age
 * @param {String} props.photo
 * @return {React.Node}
 */
export default function CustomCard({
  contactData,
  id,
  firstName,
  lastName,
  age,
  photo,
}: Props): React.Node {
  return (
    <React.Fragment>
      <StyledLink to={{ pathname: `/contact-detail/` + id }}>
        <StyledCard>
          <CardImg className="card__image" src={photo} alt="photo" />
          <CardBody>
            <CardTitle>{firstName}</CardTitle>
            <CardSubtitle>{lastName}</CardSubtitle>
            <CardText>{age}</CardText>
          </CardBody>
        </StyledCard>
      </StyledLink>
    </React.Fragment>
  );
}
