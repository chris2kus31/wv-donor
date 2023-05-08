import Sponsorship from "@/components/Sponsorship/Sponsorship";
import DefaultLayout from "@/layout/DefaultLayout";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Excercise</title>
      </Head>

      <DefaultLayout>
        <Box boxShadow="lg" borderRadius={10}>
          <Sponsorship />
        </Box>
      </DefaultLayout>
    </>
  );
}
