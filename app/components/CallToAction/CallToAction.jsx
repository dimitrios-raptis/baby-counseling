import { CallToActionWrapper, CallToActionTitle, CallToActionLink } from './CallToAction.style';

const CallToAction = () => {
  return (
    <CallToActionWrapper>
      <CallToActionTitle>
        Explore Parenthood
      </CallToActionTitle>
      <CallToActionLink href='#home'>
        Learn More
      </CallToActionLink>
    </CallToActionWrapper>
  );
};

export default CallToAction;