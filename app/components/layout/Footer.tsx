import { Box, Detail, HStack, Page } from "@navikt/ds-react";

export function Footer() {
  return (
    <Box className="footer" padding="8" as="footer">
      <Page.Block gutters width="lg">
        <HStack justify={"center"}>
          <Box className={"footer-text"}>
            <Detail>
              © 2024 Jobs Portal | All rights reserved. App created by Anum
            </Detail>
          </Box>
        </HStack>
      </Page.Block>
    </Box>
  );
}
