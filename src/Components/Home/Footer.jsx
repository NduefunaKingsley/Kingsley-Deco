import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <div className='footer'>
         <Card className="text-center bg-dark" >
      <Card.Header>Featured</Card.Header>
      <Card.Body className='text-white'>
        <Card.Title>Dear Valued Costomer</Card.Title>
        <Card.Text>
          For more information on our services, click on the button below
        </Card.Text>
        <Button variant="primary">About Us</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  );
}

export default HeaderAndFooterExample;