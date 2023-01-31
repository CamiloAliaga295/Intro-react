import {Button, Card} from 'react-bootstrap';

const CardImage = props => {

    const {title,coment,src } = props


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={src}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {coment}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardImage