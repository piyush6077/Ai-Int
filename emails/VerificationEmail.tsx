import {
    Html, 
    Head, 
    Font,
    Preview, 
    Heading, 
    Row,
    Section, 
    Text, 
    Button
} from "@react-email/components";

interface VerificationEmailProps {
    username:string,
    otp:string
}

export default function VerificationEmail ({username, otp}: VerificationEmailProps){
    return (
        <Html lang="" dir="ltr">
            <Head>
                <title>Verififcaton Code</title>
                <Font 
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url:'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92FrlMu4mxKkTU1Kg.woff2',
                        format: "woff2"
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <Preview>Here&apos;s your verification code: {otp}</Preview>
                <Section>
                    <Row>
                        <Heading as="h2">Hello {username}</Heading>
                    </Row>
                    <Row>
                        <Text>
                            Thanks you for registering , Please use the following verification 
                            code to complete your registration 
                        </Text>
                    </Row>
                    <Row>
                        <Text>{otp}</Text>
                    </Row>
                    <Row>
                        <Text>
                            If you did not request this code , Ignore the Email
                        </Text>
                    </Row>
                </Section>
            </Head>
        </Html>
    )
}