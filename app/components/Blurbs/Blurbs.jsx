import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blurbList from './blurbList';
import { BlurbsWrapper, Blurb, BlurbTitle, BlurbText } from './Blurbs.style';


const Blurbs = () => {
  return (
    <BlurbsWrapper>
      {blurbList.map((item, index) => (
        <Blurb key={index}>
          <FontAwesomeIcon size="5x" icon={item.icon} />
          <BlurbTitle>
            {item.title}
          </BlurbTitle>
          <BlurbText>{item.text}</BlurbText>
        </Blurb>
      ))}
    </BlurbsWrapper>
  );
};

export default Blurbs;