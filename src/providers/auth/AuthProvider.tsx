import {
  Authenticator,
  Theme,
  ThemeProvider,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";

type AuthProviderProps = {
  children?: React.ReactNode;
};

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: "code", // 'code' | 'link'
    },
  },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { tokens } = useTheme();
  const theme: Theme = {
    name: "Auth Example Theme",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: tokens.colors.neutral["100"],
          },
          link: {
            color: tokens.colors.primary["80"],
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px ${tokens.colors.primary["60"]}`,
          },
        },
        tabs: {
          item: {
            color: tokens.colors.neutral["80"],
            _active: {
              borderColor: tokens.colors.neutral["100"],
              color: tokens.colors.primary["100"],
            },
          },
        },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Authenticator hideSignUp>{children}</Authenticator>
      </View>
    </ThemeProvider>
  );
};

export { AuthProvider };
