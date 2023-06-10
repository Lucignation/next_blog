import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'About Mide Media',
};

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const AboutPage = () => {
  return (
    <div className={poppins.className}>
      <h1>About Mide Media</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
        molestiae adipisci soluta commodi amet porro, labore consequatur dolorem
        ratione quos architecto obcaecati. Fugiat quasi enim vero ullam delectus
        impedit, quia consectetur quibusdam nobis maxime voluptate similique
        modi perferendis omnis blanditiis dignissimos dolorum nisi minus
        eligendi culpa ut quas vel adipisci!
      </p>
    </div>
  );
};

export default AboutPage;
