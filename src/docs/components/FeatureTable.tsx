import React from 'react';
import styled from 'styled-components';

type FeatureTableProps = {
  basics: string[];
  additionals?: string[];
  postponed?: string[];
};

export const FeatureTable = ({
  basics,
  additionals,
  postponed,
}: FeatureTableProps) => {
  return (
    <Wrapper>
      <div>
        <CategoryTitle title="Basic" />
        <FeatureList features={basics} />
      </div>
      {additionals?.length && (
        <div>
          <CategoryTitle title="Additional" />
          <FeatureList features={additionals} />
        </div>
      )}
      {postponed?.length && (
        <div>
          <CategoryTitle title="Postponed" />
          <FeatureList features={postponed} />
        </div>
      )}
    </Wrapper>
  );
};

const CategoryTitle = ({ title }: { title: string }) => {
  return <CategoryWrapper className="">{title}</CategoryWrapper>;
};

const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <FeatureListWrapper>
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </FeatureListWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 4px;
  margin-bottom: 24px;

  & > div {
    display: flex;
    border-bottom: 1px solid gray;
  }
`;

const FeatureListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 28px;

  & li {
    font-size: 13px;
  }
`;

const CategoryWrapper = styled.div`
  width: 200px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
`;
