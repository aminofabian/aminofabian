import { NextPage } from 'next';

interface Props {
  data: {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    image: string;
    sameAs: string[];
    jobTitle: string;
    worksFor: {
      '@type': string;
      name: string;
    };
    skills: string[];
  };
}

const StructuredData: NextPage<Props> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
