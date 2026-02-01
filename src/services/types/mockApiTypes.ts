import type { PrimitiveTypes } from "../../types/basicTypes";

//type for token usage response
type TokenUsageResponse = {
  timestamp: PrimitiveTypes["string"];
  tokens: PrimitiveTypes["number"];
};

//type for latency distribution response
type LatencyDistributionResponse = {
  latency_ms: PrimitiveTypes["number"];
  request_count: PrimitiveTypes["number"];
};

//type for cost analysis response
type CostAnalysisResponse = {
  model_name: PrimitiveTypes["string"];
  cost: PrimitiveTypes["number"];
};

//type for overall response
type OverallResponse = {
  token: TokenUsageResponse[];
  latency: LatencyDistributionResponse[];
  cost: CostAnalysisResponse[];
};
export type {
  TokenUsageResponse,
  LatencyDistributionResponse,
  CostAnalysisResponse,
  OverallResponse,
};
