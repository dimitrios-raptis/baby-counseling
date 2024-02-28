
import offersList from './offersList';
import { OffersWrapper, OffersIntroWrapper, OffersTitle, OffersIntro, Offer, OfferTitle, OfferText, OffersContainer, OfferIcon } from './Offers.style';

const Offers = () => {
  return (
    <OffersWrapper id='about'>
      <OffersIntroWrapper>
        <OffersTitle>
          Tellus sit amet mi lobortis commodo vestibulum
        </OffersTitle>
        <OffersIntro>
          Rolutpat rutrum lacus in feugiat. Maecenas sapien metus, fermentum sed ligula sit amet, cursus semper mi. Nam ac erat lobortis, elementum tellus et, mollis tellus.
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