/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/durex-invisible.jpg';
import Partnership from 'assets/key-feature/durex-lubricant.jpg';
import Subscription from 'assets/key-feature/durex-red-condoms.jpg';
import Support from 'assets/key-feature/durex-tropical.jpg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Durex Invisible',
    title: 'Durex Invisible',
    text:
      'Durex® Invisible condoms are designed to maximize sensitivity, while still providing a high level of security and protection.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Durex® Lubricants',
    title: 'Durex® Lubricants',
    text:
      'Durex® lube is designed to help keep the excitement coming with two personal lubricants that combine to help ignite much more than conversation',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Durex Red Condoms',
    title: 'Durex Red Condoms',
    text:
      'Ultra thin for enhanced sensitivity. Durex quality: 100% electronically tested with 5 more quality tests carried out on every batch',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Durex Tropical',
    title: 'Durex Tropical',
    text:
      'Love all the flavours in the fruit bowl? With Durex® Tropical, you can choose from four fruity flavours to match your mood at any moment.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="FIND WHAT IS"
          title="YOUR FAVOURITES"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
