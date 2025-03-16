import { UnorderedList } from "@inkjs/ui";
import { Box, Text } from "ink";
export const HelpPage = () => {
  return (
    <>
      <Box borderStyle="classic" marginRight={2}>
        <Text>Some helper tool for developers frontend and backend</Text>
      </Box>
      <UnorderedList>
        <UnorderedList.Item>
          <Text>Components (components)</Text>

          <UnorderedList>
            <UnorderedList.Item>
              <Text>List (list)</Text>
              <Text>List all available components in from the repository</Text>
            </UnorderedList.Item>

            <UnorderedList.Item>
              <Text>Download (download)</Text>
              <Text>Download a component from the repository</Text>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Text>Init (init)</Text>
              <Text>Init the config file for downloading components</Text>
            </UnorderedList.Item>
          </UnorderedList>
        </UnorderedList.Item>
      </UnorderedList>
    </>
  );
};