
import offersList from './offersList';
import { OffersWrapper, OffersIntroWrapper, OffersTitle, OffersIntro, Offer, OfferTitle, OfferText, OffersContainer, OfferIcon } from './Offers.style';

const Offers = () => {
  return (
    <OffersWrapper id='about'>
      <OffersIntroWrapper>
        <OffersTitle>
          Empowering parenthood: Your supportive hub
        </OffersTitle>
        <OffersIntro>
          Discover a wealth of supportive services to elevate and enrich your experience through the challenges and joys of parenthood
        </OffersIntro>
      </OffersIntroWrapper>
      <OffersContainer>
        {offersList.map((item, index) => (
          <Offer key={index}>
            <OfferIcon size="5x" icon={item.icon} />
            <OfferTitle>
              {item.title}
            </OfferTitle>
            <OfferText>{item.text}</OfferText>
          </Offer>
        ))}
      </OffersContainer>
    </OffersWrapper>
  );
};

export default Offers;