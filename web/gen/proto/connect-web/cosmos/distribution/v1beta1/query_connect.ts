// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/query.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryParamsRequest, QueryParamsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query defines the gRPC querier service for distribution module.
 *
 * @generated from service cosmos.distribution.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.distribution.v1beta1.Query",
  methods: {
    /**
     * Params queries params of the distribution module.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorDistributionInfo
     */
    validatorDistributionInfo: {
      name: "ValidatorDistributionInfo",
      I: QueryValidatorDistributionInfoRequest,
      O: QueryValidatorDistributionInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorOutstandingRewards
     */
    validatorOutstandingRewards: {
      name: "ValidatorOutstandingRewards",
      I: QueryValidatorOutstandingRewardsRequest,
      O: QueryValidatorOutstandingRewardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorCommission
     */
    validatorCommission: {
      name: "ValidatorCommission",
      I: QueryValidatorCommissionRequest,
      O: QueryValidatorCommissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorSlashes queries slash events of a validator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorSlashes
     */
    validatorSlashes: {
      name: "ValidatorSlashes",
      I: QueryValidatorSlashesRequest,
      O: QueryValidatorSlashesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.DelegationRewards
     */
    delegationRewards: {
      name: "DelegationRewards",
      I: QueryDelegationRewardsRequest,
      O: QueryDelegationRewardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.DelegationTotalRewards
     */
    delegationTotalRewards: {
      name: "DelegationTotalRewards",
      I: QueryDelegationTotalRewardsRequest,
      O: QueryDelegationTotalRewardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorValidators queries the validators of a delegator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.DelegatorValidators
     */
    delegatorValidators: {
      name: "DelegatorValidators",
      I: QueryDelegatorValidatorsRequest,
      O: QueryDelegatorValidatorsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.DelegatorWithdrawAddress
     */
    delegatorWithdrawAddress: {
      name: "DelegatorWithdrawAddress",
      I: QueryDelegatorWithdrawAddressRequest,
      O: QueryDelegatorWithdrawAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CommunityPool queries the community pool coins.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Query.CommunityPool
     */
    communityPool: {
      name: "CommunityPool",
      I: QueryCommunityPoolRequest,
      O: QueryCommunityPoolResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

