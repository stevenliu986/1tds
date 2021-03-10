import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../../../../components/Button';
import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';

const CaptainLinkContainer = styled(Container)`
  background-color: #fceac6;
  box-sizing: border-box;
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProcessTitle = styled(Heading)`
  padding:0 100px;
  line-height: 1.3;
  text-align: center;
  color: #c97a40;
`;

const BecomeCaptainButton = styled(Button)`
  background: #97a73f;
  font-family: 'ZCOOL KuaiLe';
  letter-spacing: 2px;
  color: #ffffff;
  margin-top: 52px;
`;

const CaptainLinkBlock = () => (
  <>
    <CaptainLinkContainer>
      <ProcessTitle>
        颠覆传统电商带来社区拼团新体验，顾客就在家门口，居家就能做生意！
      </ProcessTitle>
      <Link href="/become-a-captain">
        <a>
          <BecomeCaptainButton>成为团长</BecomeCaptainButton>
        </a>
      </Link>
    </CaptainLinkContainer>
  </>
);

export default CaptainLinkBlock;
