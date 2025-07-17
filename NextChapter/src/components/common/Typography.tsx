import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { Typography as TypographyTokens } from "../../theme";

interface TypographyProps {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
  accessibilityLabel?: string;
  testID?: string;
}

interface MainTypographyProps extends TypographyProps {
  variant?:
    | "display"
    | "displayXL"
    | "displayLG"
    | "h1"
    | "h2"
    | "h3"
    | "bodyLG"
    | "body"
    | "bodySM"
    | "caption"
    | "muted";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";
  align?: "left" | "center" | "right";
  weight?: "regular" | "medium" | "semiBold" | "bold";
}

// Display Components
export const DisplayXL: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.displayXL,
          fontWeight: TypographyTokens.fontWeights.bold,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.displayXL * 1.2,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const DisplayLG: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.displayLG,
          fontWeight: TypographyTokens.fontWeights.bold,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.displayLG * 1.2,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Heading Components
export const H1: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.h1,
          fontWeight: TypographyTokens.fontWeights.bold,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.h1 * 1.3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const H2: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.h2,
          fontWeight: TypographyTokens.fontWeights.semiBold,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.h2 * 1.3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const H3: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.headingSM,
          fontWeight: TypographyTokens.fontWeights.semiBold,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.headingSM * 1.4,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Body Components
export const BodyLG: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.bodyLG,
          fontWeight: TypographyTokens.fontWeights.regular,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.bodyLG * 1.6,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const Body: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.body,
          fontWeight: TypographyTokens.fontWeights.regular,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.body * 1.6,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const BodySM: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.bodySM,
          fontWeight: TypographyTokens.fontWeights.regular,
          color: theme.colors.text,
          lineHeight: TypographyTokens.fontSizes.bodySM * 1.6,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Caption Component
export const Caption: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.caption,
          fontWeight: TypographyTokens.fontWeights.regular,
          color: theme.colors.textSecondary,
          lineHeight: TypographyTokens.fontSizes.caption * 1.5,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Muted text variant
export const Muted: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        {
          fontSize: TypographyTokens.fontSizes.body,
          fontWeight: TypographyTokens.fontWeights.regular,
          color: theme.colors.textSecondary,
          lineHeight: TypographyTokens.fontSizes.body * 1.6,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Main Typography component with variant system
export const Typography: React.FC<MainTypographyProps> = ({
  children,
  variant = "body",
  color = "primary",
  align = "left",
  weight = "regular",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case "display":
      case "displayXL":
        return {
          fontSize: TypographyTokens.fontSizes.displayXL,
          fontWeight: TypographyTokens.fontWeights.bold,
          lineHeight: TypographyTokens.fontSizes.displayXL * 1.2,
        };
      case "displayLG":
        return {
          fontSize: TypographyTokens.fontSizes.displayLG,
          fontWeight: TypographyTokens.fontWeights.bold,
          lineHeight: TypographyTokens.fontSizes.displayLG * 1.2,
        };
      case "h1":
        return {
          fontSize: TypographyTokens.fontSizes.h1,
          fontWeight: TypographyTokens.fontWeights.bold,
          lineHeight: TypographyTokens.fontSizes.h1 * 1.3,
        };
      case "h2":
        return {
          fontSize: TypographyTokens.fontSizes.h2,
          fontWeight: TypographyTokens.fontWeights.semiBold,
          lineHeight: TypographyTokens.fontSizes.h2 * 1.3,
        };
      case "h3":
        return {
          fontSize: TypographyTokens.fontSizes.h3,
          fontWeight: TypographyTokens.fontWeights.semiBold,
          lineHeight: TypographyTokens.fontSizes.h3 * 1.3,
        };
      case "bodyLG":
        return {
          fontSize: TypographyTokens.fontSizes.bodyLG,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.bodyLG * 1.6,
        };
      case "body":
        return {
          fontSize: TypographyTokens.fontSizes.body,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.body * 1.6,
        };
      case "bodySM":
        return {
          fontSize: TypographyTokens.fontSizes.bodySM,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.bodySM * 1.5,
        };
      case "caption":
        return {
          fontSize: TypographyTokens.fontSizes.caption,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.caption * 1.4,
        };
      case "muted":
        return {
          fontSize: TypographyTokens.fontSizes.body,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.body * 1.6,
        };
      default:
        return {
          fontSize: TypographyTokens.fontSizes.body,
          fontWeight: TypographyTokens.fontWeights.regular,
          lineHeight: TypographyTokens.fontSizes.body * 1.6,
        };
    }
  };

  const getColorStyle = () => {
    switch (color) {
      case "primary":
        return { color: theme.colors.text };
      case "secondary":
        return { color: theme.colors.textSecondary };
      case "tertiary":
        return { color: theme.colors.textTertiary };
      case "success":
        return { color: theme.colors.success };
      case "warning":
        return { color: theme.colors.warning };
      case "error":
        return { color: theme.colors.error };
      default:
        return { color: theme.colors.text };
    }
  };

  const getWeightStyle = () => {
    switch (weight) {
      case "regular":
        return { fontWeight: TypographyTokens.fontWeights.regular };
      case "medium":
        return { fontWeight: TypographyTokens.fontWeights.medium };
      case "semiBold":
        return { fontWeight: TypographyTokens.fontWeights.semiBold };
      case "bold":
        return { fontWeight: TypographyTokens.fontWeights.bold };
      default:
        return { fontWeight: TypographyTokens.fontWeights.regular };
    }
  };

  const getAlignStyle = () => {
    return { textAlign: align as "left" | "center" | "right" };
  };

  return (
    <Text
      style={[
        getVariantStyles(),
        getColorStyle(),
        getWeightStyle(),
        getAlignStyle(),
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
