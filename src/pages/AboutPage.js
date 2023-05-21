import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className='underline'></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit numquam nam deleniti magnam, adipisci exercitationem vero aliquid nesciunt ipsum illum non! Veniam, consequuntur illo dignissimos eligendi magnam nesciunt cumque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione nam tenetur at assumenda voluptatum quam, consectetur eligendi odio molestias corrupti aspernatur quod eum, itaque dolorum natus? Pariatur, adipisci neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tempora voluptatem voluptas maiores nostrum tempore ducimus omnis, temporibus rem sunt perferendis. Ad delectus cum facilis repellendus sapiente? Aperiam, ea odio?

        </p>
      </article>

    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
