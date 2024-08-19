/* eslint-disable */

import * as sdk from "hypertune";

export const queryId = "ec3e0220-6064-4fe9-9e2c-4bb77a25f044";

export const query: sdk.Query<sdk.ObjectValueWithVariables> = {"variableDefinitions":{},"fragmentDefinitions":{"Discount":{"type":"InlineFragment","objectTypeName":"Discount","selection":{"isEnabled":{"fieldArguments":{},"fieldQuery":null},"percentage":{"fieldArguments":{},"fieldQuery":null},"name":{"fieldArguments":{},"fieldQuery":null}}},"PlanPrices":{"type":"InlineFragment","objectTypeName":"PlanPrices","selection":{"free":{"fieldArguments":{},"fieldQuery":null},"pro":{"fieldArguments":{},"fieldQuery":null},"business":{"fieldArguments":{},"fieldQuery":null}}},"Plans":{"type":"InlineFragment","objectTypeName":"Plans","selection":{"free":{"fieldArguments":{},"fieldQuery":null},"pro":{"fieldArguments":{},"fieldQuery":null},"business":{"fieldArguments":{},"fieldQuery":null}}},"Feature":{"type":"InlineFragment","objectTypeName":"Feature","selection":{"name":{"fieldArguments":{},"fieldQuery":null},"plans":{"fieldArguments":{},"fieldQuery":{"Plans":{"type":"FragmentSpread","fragmentName":"Plans"}}}}},"FeatureGroup":{"type":"InlineFragment","objectTypeName":"FeatureGroup","selection":{"name":{"fieldArguments":{},"fieldQuery":null},"feature":{"fieldArguments":{},"fieldQuery":{"Feature":{"type":"FragmentSpread","fragmentName":"Feature"}}}}}},"fieldQuery":{"Query":{"type":"InlineFragment","objectTypeName":"Query","selection":{"root":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Root":{"type":"InlineFragment","objectTypeName":"Root","selection":{"discounts":{"fieldArguments":{},"fieldQuery":{"Discount":{"type":"FragmentSpread","fragmentName":"Discount"}}},"prices":{"fieldArguments":{},"fieldQuery":{"PlanPrices":{"type":"FragmentSpread","fragmentName":"PlanPrices"}}},"featureGrid":{"fieldArguments":{},"fieldQuery":{"FeatureGroup":{"type":"FragmentSpread","fragmentName":"FeatureGroup"}}}}}}}}}}};
  
/**
 * @deprecated use '@vercel/flags/providers/hypertune' package instead.
 */
export const vercelFlagDefinitions = {};

export type Rec = {

}

export const EnvironmentEnumValues = [
  "development",
  "production",
  "test"
] as const;
export type Environment = typeof EnvironmentEnumValues[number];

export const CountryEnumValues = [
  "UnitedStates",
  "UnitedKingdom",
  "France",
  "Germany"
] as const;
export type Country = typeof CountryEnumValues[number];

export type Rec3 = {
  id: string;
  name: string;
  email: string;
  country: Country;
}

export const PlanTypeEnumValues = [
  "free",
  "pro",
  "business"
] as const;
export type PlanType = typeof PlanTypeEnumValues[number];

export type Rec4 = {
  id: string;
  name: string;
  plan: PlanType;
}

/**
 * This `Context` input type is used for the `context` argument on your root field.
 * It contains details of the current `user` and `environment`.
 * 
 * You can define other custom input types with fields that are primitives, enums 
 * or other input types.
 */
export type Rec2 = {
  environment: Environment;
  user: Rec3;
  organization: Rec4;
  referralCode: string;
}

export type RootArgs = {
  context: Rec2;
}

export type Discount = {
  isEnabled: boolean;
  percentage: number;
  name: string;
}

const discountFallback = {isEnabled:false,percentage:0,name:""};

export class DiscountNode extends sdk.Node {
  override typeName = "Discount" as const;

  get({ fallback = discountFallback as Discount}: { fallback?: Discount } = {}): Discount {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Discount;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22isEnabled%22%7D})
   */
  isEnabled({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("isEnabled", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22percentage%22%7D})
   */
  percentage({ args = {}, fallback }: { args?: Rec; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("percentage", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: Rec; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

export type PlanPrices = {
  free: number;
  pro: number;
  business: number;
}

const planPricesFallback = {free:0,pro:0,business:0};

export class PlanPricesNode extends sdk.Node {
  override typeName = "PlanPrices" as const;

  get({ fallback = planPricesFallback as PlanPrices}: { fallback?: PlanPrices } = {}): PlanPrices {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as PlanPrices;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eprices%3Efree})
   */
  free({ args = {}, fallback }: { args?: Rec; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("free", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eprices%3Epro})
   */
  pro({ args = {}, fallback }: { args?: Rec; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("pro", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eprices%3Ebusiness})
   */
  business({ args = {}, fallback }: { args?: Rec; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("business", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }
}

export type Plans = {
  free: boolean;
  pro: boolean;
  business: boolean;
}

const plansFallback = {free:false,pro:false,business:false};

export class PlansNode extends sdk.Node {
  override typeName = "Plans" as const;

  get({ fallback = plansFallback as Plans}: { fallback?: Plans } = {}): Plans {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Plans;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid%3Efeature%3Eplans%3Efree})
   */
  free({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("free", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid%3Efeature%3Eplans%3Epro})
   */
  pro({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("pro", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid%3Efeature%3Eplans%3Ebusiness})
   */
  business({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("business", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

export type Feature = {
  name: string;
  plans: Plans;
}

const featureFallback = {name:"",plans:{free:false,pro:false,business:false}};

export class FeatureNode extends sdk.Node {
  override typeName = "Feature" as const;

  get({ fallback = featureFallback as Feature}: { fallback?: Feature } = {}): Feature {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Feature;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Feature%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: Rec; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Feature%22%2C%22selectedChildName%22%3A%22plans%22%7D})
   */
  plans({ args = {} }: { args?: Rec; } = {}): PlansNode {
    const props0 = this.getFieldNodeProps("plans", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Plans"
    ) {
      return new PlansNode(props0);
    }

    const node = new PlansNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type FeatureGroup = {
  name: string;
  feature: Feature[];
}

const featureGroupFallback = {name:"",feature:[]};

export class FeatureGroupNode extends sdk.Node {
  override typeName = "FeatureGroup" as const;

  get({ fallback = featureGroupFallback as FeatureGroup}: { fallback?: FeatureGroup } = {}): FeatureGroup {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as FeatureGroup;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22FeatureGroup%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: Rec; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22FeatureGroup%22%2C%22selectedChildName%22%3A%22feature%22%7D})
   */
  feature({ args = {}, listFallbackLength = 0 }: { args?: Rec; listFallbackLength?: number; } = {}): FeatureNode[] {
    const props0 = this.getFieldNodeProps("feature", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "Feature"
      ) {
        return new FeatureNode(props1);
      }
  
      const node = new FeatureNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }
}

export type Root = {
  discounts: Discount[];
  prices: PlanPrices;
  featureGrid: FeatureGroup[];
}

const rootFallback = {discounts:[],prices:{free:0,pro:0,business:0},featureGrid:[]};

export class RootNode extends sdk.Node {
  override typeName = "Root" as const;

  getRootArgs(): RootArgs {
    const { step } = this.props;
    return (step?.type === 'GetFieldStep' ? step.fieldArguments : {}) as RootArgs;
  }

  get({ fallback = rootFallback as Root}: { fallback?: Root } = {}): Root {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Root;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Ediscounts})
   */
  discounts({ args = {}, listFallbackLength = 0 }: { args?: Rec; listFallbackLength?: number; } = {}): DiscountNode[] {
    const props0 = this.getFieldNodeProps("discounts", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "Discount"
      ) {
        return new DiscountNode(props1);
      }
  
      const node = new DiscountNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eprices})
   */
  prices({ args = {} }: { args?: Rec; } = {}): PlanPricesNode {
    const props0 = this.getFieldNodeProps("prices", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "PlanPrices"
    ) {
      return new PlanPricesNode(props0);
    }

    const node = new PlanPricesNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid})
   */
  featureGrid({ args = {}, listFallbackLength = 0 }: { args?: Rec; listFallbackLength?: number; } = {}): FeatureGroupNode[] {
    const props0 = this.getFieldNodeProps("featureGrid", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "FeatureGroup"
      ) {
        return new FeatureGroupNode(props1);
      }
  
      const node = new FeatureGroupNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export type Source = {
  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root: Root;
}

const sourceFallback = {root:{discounts:[],prices:{free:0,pro:0,business:0},featureGrid:[]}};

export type Rec6 = {
  args: RootArgs;
}

export type Rec5 = {
  root: Rec6;
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export class SourceNode extends sdk.Node {
  override typeName = "Query" as const;

  get({ args, fallback = sourceFallback as Source}: { args: Rec5; fallback?: Source }): Source {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, []), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Source;
  }

  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root({ args }: { args: RootArgs; }): RootNode {
    const props0 = this.getFieldNodeProps("root", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Root"
    ) {
      return new RootNode(props0);
    }

    const node = new RootNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type VariableValues = Rec;
export type DehydratedState = sdk.DehydratedState<Source, VariableValues>
export type CreateSourceOptions = { 
  token: string; 
  variableValues?: VariableValues;
  override?: sdk.DeepPartial<Source> | null;
} & sdk.CreateOptions

export function createSource({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return sdk.create({
    NodeConstructor: SourceNode,
    token,
    query,
    queryId,
    variableValues,
    override,
    options,
  });
}

export const emptySource = new SourceNode({
  context: null,
  logger: null,
  parent: null,
  step: null,
  expression: null,
});

export function createSourceForServerOnly({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return typeof window === "undefined"
    ? createSource({ token, variableValues, override, ...options })
    : emptySource;
}

/**
 * @deprecated use createSource instead.
 */
export const initHypertune = createSource
/**
 * @deprecated use SourceNode instead.
 */
export type QueryNode = SourceNode;
/**
 * @deprecated use Source instead.
 */
export type Query = Source;
