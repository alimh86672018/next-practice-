import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Link,
  Preview,
  Text,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body className="bg-white ">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
