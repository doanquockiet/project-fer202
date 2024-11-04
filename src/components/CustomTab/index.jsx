import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import IconComponent from "./iconProp";

const CustomiseTabs = ({ tabs, className }) => {
  const [key, setKey] = useState(tabs[0].title);
  useEffect(() => {
    const active = document.querySelectorAll("button");
    active &&
      active.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.add(`${style.active}`);
        } else {
          item.classList.remove(`${style.active}`);
        }
      });
  }, [key, className]);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Tabs
            className={`d-flex  ${style.customTabs} ${className}`}
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            {tabs &&
              tabs.length > 0 &&
              tabs.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    title={
                      <IconComponent icon={item.icon} title={item.title} />
                    }
                    eventKey={item.title}
                  >
                    {item.content}
                  </Tab>
                );
              })}
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomiseTabs;
