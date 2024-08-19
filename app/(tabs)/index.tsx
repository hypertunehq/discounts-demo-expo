import { View, StyleSheet, TextInput } from "react-native";
import { useHypertune } from "@/generated/hypertune.react";
import { PlanTypeEnumValues } from "@/generated/hypertune";
import { Colors } from "@/constants/Colors";
import { Text } from "@/components/Text";
import { useState } from "react";

export default function Plans() {
  const hypertune = useHypertune();
  const prices = hypertune.prices().get();

  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text type="title">Plans</Text>
      </View>
      {PlanTypeEnumValues.map((plan) => (
        <Plan key={plan} plan={plan} price={prices[plan]} code={code} />
      ))}
      <TextInput
        value={code}
        onChangeText={setCode}
        style={styles.input}
        placeholder="Referral code"
      />
    </View>
  );
}

function Plan({
  plan,
  price,
  code,
}: {
  plan: string;
  price: number;
  code: string;
}) {
  const hypertune = useHypertune();

  // const discountName = hypertune.discount().name({ fallback: "discount" });
  // const discountPercentage = hypertune.discount().percentage({ fallback: 0 });
  // const isEnabled = hypertune.discount().isEnabled({ fallback: false });

  // const discounts = isEnabled
  //   ? [{ name: discountName, percentage: discountPercentage }]
  //   : [];

  const discounts = hypertune.discounts().map((discount) => discount.get());

  const totalDiscount = discounts.reduce(
    (total, current) => total + current.percentage * price,
    0,
  );

  return (
    <View style={styles.planContainer} key={plan}>
      <Text type="subtitle">
        {plan.charAt(0).toUpperCase() + plan.substring(1)}
      </Text>
      <Text
        style={
          totalDiscount > 0
            ? { textDecorationLine: "line-through", color: "#ed544b" }
            : {}
        }
      >
        ${price} per month
      </Text>
      {totalDiscount > 0 && (
        <>
          {discounts.map(({ name, percentage }) => (
            <Text style={{ color: "#3b9e62" }}>
              {(percentage * 100).toFixed(0)}% {name}
            </Text>
          ))}
        </>
      )}
      {totalDiscount > 0 && (
        <Text>${(price - totalDiscount).toFixed(2)} per month</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.background,
    padding: 25,
    paddingTop: 80,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  planContainer: {
    backgroundColor: "#fcfcfd",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.border,
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.border,
    padding: 12,
  },
});
