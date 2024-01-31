import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: 'center'}}>
        <p>I'm 20 years old and I live in High School Boulevard, San Fernando, Pampanga.
          My hobbies are reading and watching anime. 
          I took computer engineering because I took some interest in computer stuffs. 
          I'm still unsure of my future but I hope I can apply what I will learn in my course to my future.</p>
        </p>
          <p style={{ textAlign: 'center'}}>
          <strong>EXPECTATIONS IN THIS SUBJECT:</strong>
          <ul style={{ listStyle: 'disc',
          textAlign: 'left', marginLeft:'2em'}}>
            <li>To understand the lessons thoroughly</li>
            <li>To be guided when I don't understand the lesson</li>
            <li>To become better at being a Computer Engineer</li>
          </ul>
        </p>
      </section>
    </Layout>
  );
}