import { CallToActionWrapper, CallToActionTitle, CallToActionLink } from './CallToAction.style';

const CallToAction = () => {
  return (
    <CallToActionWrapper>
      <CallToActionTitle>
        &#x23;1 Vestibulum laoreet
      </CallToActionTitle>
      <CallToActionLink href='#home'>
        Learn More
      </CallToActionLink>
    </CallToActionWrapper>
  );
};

export default CallToAction;