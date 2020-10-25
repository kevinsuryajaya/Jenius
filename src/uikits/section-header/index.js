import * as React from 'react';
import { Row, Col } from "reactstrap";
import '../../css/section-header/index.css';

type Props = {
    title: string,
    subtitle: string,
} 

/**
 * @param {String} props.title
 * @param {String} props.subtitle
 * @return {React.Node}
 */
export default function SectionHeader({title,subtitle}: Props):React.Node{
    return(
        <React.Fragment>
        <Row className="header">
          <Col className="header__content">
            <h5 className="header__title">{title}</h5>
            <p className="header__subtitle ">
              {subtitle}
            </p>
          </Col>
        </Row>
        </React.Fragment>
    )
}