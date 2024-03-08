import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-light text-black">
      <Card.Img src="https://media.architecturaldigest.com/photos/61fc6aac9e1381243886999c/16:9/w_2560%2Cc_limit/Private%2520Residence1207_1.jpg" alt="Card image" className='head' />
      <Card.ImgOverlay className='title'>
        <Card.Title><h1>Welcome to Kingsley's Deco</h1></Card.Title>
        <Card.Text>
          <h4>We sell only the best at affordable prices</h4>
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;