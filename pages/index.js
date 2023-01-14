import styled from "styled-components";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Screen = styled.div`
    background: #f5f9f5;
    background-size: stretch;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        align-items: start;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 100px;
    }
`;

const Title = styled.div`
  color: #2DB12D;
  font-size: 8vw;
  font-weight: 600;
  font-family: ${inter.style.fontFamily};
  
  @media (max-width: 768px) {
    font-size: 60px;
    text-align: left;
    flex-wrap: wrap;
`;

const Subtitle = styled.div`
  color: #2DB12D;
  font-size: 4vw;
  font-weight: 500;
  font-family: ${inter.style.fontFamily};
  
  @media (max-width: 768px) {
    font-size: 35px;
    text-align: left;
    flex-wrap: wrap;
`;

const Button = styled.a`
  z-index: 1;
  background: linear-gradient(to bottom, #44C644, #098809);
  padding: 12px 60px;
  border-radius: 100px;
  color: white;
  font-size: 3vw;
  font-weight: 500;
  font-family: ${inter.style.fontFamily};
  text-decoration: none;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.06);
    transition: 0.2s ease-out;
  }
  
  @media (max-width: 768px) {
    font-size: 35px;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Sage Reader</title>
                <meta
                    name="description"
                    content="AI powered document reader."
                />
                <meta name="image" content="https://boundless.so/cover.png" />
            </Head>
            <Screen>
                <ContentContainer>
                    <br />
                    <br />
                    <br />
                    <Title>Sage</Title>
                    <br />
                    <br />
                    <Subtitle>AI Powered PDF Reader</Subtitle>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button href="https://forms.gle/QdLcaFMHoN6rdSfX8">
                        Request Access
                    </Button>
                </ContentContainer>
            </Screen>
        </>
    );
}

// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>pages/index.js</code>
//           </p>
//           <div>
//             <a
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className={styles.center}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//           <div className={styles.thirteen}>
//             <Image
//               src="/thirteen.svg"
//               alt="13"
//               width={40}
//               height={31}
//               priority
//             />
//           </div>
//         </div>

//         <div className={styles.grid}>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Docs <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Learn <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Templates <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Deploy <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Instantly deploy your Next.js site to a shareable URL
//               with&nbsp;Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </>
//   )
// }
