import {
  Text as ReactText,
  type TextProps as ReactTextProps,
  StyleSheet,
} from "react-native";

import { Colors } from "@/constants/Colors";

export type TextProps = ReactTextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function Text({ style, type = "default", ...rest }: TextProps) {
  return (
    <ReactText
      style={[
        { color: Colors.text },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: "#7a8396",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
