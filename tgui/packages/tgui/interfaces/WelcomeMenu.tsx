import { useBackend } from 'tgui/backend';
import { Button, Image, Section, Stack } from 'tgui-core/components';
import { Window } from 'tgui/layouts';
import { resolveAsset } from '../assets';

type WelcomeMenuData = {
  server_name: string;
  message: string;
  discord_url: string;
};

export const WelcomeMenu = () => {
  const { act, data } = useBackend<WelcomeMenuData>();
  const { server_name, message, discord_url } = data;

  return (
    <Window title="Welcome" width={520} height={520}>
      <Window.Content>
        <Stack vertical fill>
          <Stack.Item>
            <Section title={`Welcome to ${server_name || 'the server'}`}>
              {message}
            </Section>
          </Stack.Item>

          <Stack.Item grow />

          <Stack.Item>
            <Stack align="center" justify="center">
              <Stack.Item>
                <Image src="/emoji_cry.png"/>
              </Stack.Item>

              <Stack.Item>
                <Button color="blue" onClick={() => act('discord')}>
                  Join Discord
                </Button>
              </Stack.Item>

              <Stack.Item>
                <Image src="/emoji_beg.png"/>
              </Stack.Item>
            </Stack>
          </Stack.Item>

          <Stack.Item>
            <Button fluid color="good" onClick={() => act('close')}>
              Continue
            </Button>
          </Stack.Item>
        </Stack>
      </Window.Content>
    </Window>
  );
};
