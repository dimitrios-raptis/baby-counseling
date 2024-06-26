import { FooterWrapper, FooterColumn, FooterInfoText, Logo, FooterTitle, FooterContactInfo, ContactIcon, ContactText, ContactLink, LinksListItem, ListLink, FooterCopy, FooterCopyText } from './Footer.style';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterColumn>
          <Logo src="/assets/logo.gif" alt="Logo" width={200} height={66.66} className="object-contain w-1/2 lg:w-1/3" />
          <FooterInfoText>
            From nurturing infant development to strengthening family bonds, we&apos;re here to guide you every step of the way. Join us in celebrating the joys of parenthood and accessing the support you need for a fulfilling journey.
          </FooterInfoText>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>
            Contact Information
          </FooterTitle>

          <FooterContactInfo>
            <ContactIcon size="2x" icon={faLocationDot} />
            <ContactText>
              1234 Meadowbrook Lane, <br />
              Springfield, London, UK
            </ContactText>
          </FooterContactInfo>
          <FooterContactInfo>
            <ContactIcon size="2x" icon={faPhone} />
            <ContactText>
              <ContactLink href="tel:#">0712-3456-789</ContactLink>
              <br />
              <ContactLink href="tel:#">0712-7893-456</ContactLink>
            </ContactText>
          </FooterContactInfo>
          <FooterContactInfo>
            <ContactIcon size="2x" icon={faEnvelope} />
            <ContactText>
              <ContactLink href="mailto:#">info@babycounselingdemo.org</ContactLink>
            </ContactText>
          </FooterContactInfo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>
            Usefull Links
          </FooterTitle>
          <ul>
            <LinksListItem>
              <ListLink href='#home'>– Home</ListLink>
            </LinksListItem>
            <LinksListItem>
              <ListLink href='#about'>– About</ListLink>
            </LinksListItem>
            <LinksListItem>
              <ListLink href='#team'>– Team</ListLink>
            </LinksListItem>
          </ul>
        </FooterColumn>
      </FooterWrapper >
      <FooterCopy>
        <FooterCopyText>©&nbsp;2024 Baby Counseling &nbsp; All Rights Reserved</FooterCopyText>
      </FooterCopy>
    </>
  );
};

export default Footer;