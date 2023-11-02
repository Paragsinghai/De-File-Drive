/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../header";
import Loader from "../loader";
import styles from "./page-wrapper.module.css";

export default function PageWrapper({
  children,
  handleConnectWallet,
  headerLabel,
  isLoading,
  loadingText,
}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
      </Head>

      <div className={styles["container"]}>
        <Header
          handleConnectWallet={handleConnectWallet}
          headerLabel={headerLabel}
        />
        <div className={styles["page-container"]}>{children}</div>
      </div>
      <Loader isLoading={isLoading} loadingText={loadingText} />
    </>
  );
}
