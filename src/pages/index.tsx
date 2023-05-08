import Sponsorship from "@/components/Sponsorship/Sponsorship";
import DefaultLayout from "@/layout/DefaultLayout";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

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
