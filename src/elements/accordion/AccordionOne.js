import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion
      className={`rn-accordion-style ${customStyle}`}
      defaultActiveKey="0"
    >
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            What can you help me with?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            We can help you with any kind of web/mobile software development,
            Shopify solutions and design.{" "}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            How do I work with you?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            You can choose to hire a team to do a fixed-cost project or you can
            hire individual resources on part-time and full-time basis.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            What technologies do you specialize in?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            E-commerce: Shopify, Shopify Plus, Headless Ecommerce and Spree.
            Frontend: Angular JS, React JS, React Native, Vue JS, Gatsby, Next
            JS, Android, iOS and Flutter. Backend: Node JS, Ruby on Rails, PHP,
            Python, DotNet, Laravel, Nest, Express, CodeIgniter and Serverless.
            Dev Ops: Heroku, AWS, Google Cloud, Docker, Azure and CI/CD.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Why should I work with you?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Our prices are competitive and the turn-around time is exceptional;
            there’s complete transparency, round-the-clock visibility and
            post-delivery warranty.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            What do I need to know before contacting you?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            All the features and functionalities that you want to have in your
            website/app.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            How do you guarantee quality?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            Our work goes through extensive quality assurance, manual and
            automated, before the product is delivered to the client. We only
            collect the final payment after the client is fully satisfied with
            our work.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            Why should I hire remotely instead of hiring resources in-house?{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            It’ll cost you less and since the resources will align their timings
            with yours and plan their work as per your convenience, it would be
            exactly like having an in-house employee, only better.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
