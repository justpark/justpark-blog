import Helmet from 'react-helmet';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import ContainerPreview from '../components/ContainerPreview';
import CardPreview from '../components/CardPreview';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';


import Card from "../components/CardPreview2/Card.jsx";
import CardBody from "../components/CardPreview2/CardBody.jsx";


const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Layout>
      <ContainerPreview>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        {group.map(({ node }) => (
          <CardPreview key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </CardPreview>
        ))}
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </ContainerPreview>
    </Layout>
  );
};
export default IndexPage;
