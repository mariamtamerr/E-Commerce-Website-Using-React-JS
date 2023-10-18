





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Rating({rating}) {


  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStar} size="x" color="gold" />
      );
    } 
    else {
      stars.push(
        <FontAwesomeIcon key={i} icon={farStar} size="x" color="gold" />
      );
    }
  }

  return <div>{stars}</div>;
}

export default Rating;
