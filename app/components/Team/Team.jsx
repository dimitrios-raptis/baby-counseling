import { TeamWrapper, TeamCard, TeamImage, TeamTitle, TeamSubtitle, TeamText, TeamSocials, TeamSocialIcon, TeamContainer, TeamSectionTitle, TeamCardsWrapper } from './Team.style';
import teamList from './teamList';
import { merge } from 'lodash';
import { faFacebookF, faTwitter, faSquareInstagram, faFacebookMessenger, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const images = require.context('../../../public/assets/team', true);

  const teamImagesList = images.keys().map(image => images(image));

  const teamContent = merge(teamImagesList, teamList);

  return (
    <TeamWrapper id='team'>
      <TeamSectionTitle>
        Meat our team
      </TeamSectionTitle>
      <TeamCardsWrapper>
        {teamContent.map((item, index) => (
          <TeamCard key={index}>
            <TeamImage src={item.default.src} alt="Team member image" width={200} height={300} priority />
            <TeamContainer>
              <TeamTitle>{item.title}</TeamTitle>
              <TeamSubtitle>{item.subtitle}</TeamSubtitle>
              <TeamText>{item.text}</TeamText>
              <TeamSocials>
                <TeamSocialIcon size="2x" icon={faFacebookF} />
                <TeamSocialIcon size="2x" icon={faTwitter} />
                <TeamSocialIcon size="2x" icon={faSquareInstagram} />
                <TeamSocialIcon size="2x" icon={faFacebookMessenger} />
                <TeamSocialIcon size="2x" icon={faLinkedinIn} />
              </TeamSocials>
            </TeamContainer>
          </TeamCard>
        ))}
      </TeamCardsWrapper>
    </TeamWrapper>

  );
};

export default Team;