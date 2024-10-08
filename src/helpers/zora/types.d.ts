export type { AggregateAttributesQueryVariables, CollectionSortKey, CollectionSortKeySortInput, CollectionsQuery, CollectionsQueryInput, SortDirection, TokenInput, TokenSortKey, TokensQuery, SalesVolumeQueryVariables, OwnersByCountQueryVariables, TokensQueryFilter, TokensQueryInput, } from './queries/queries-sdk';
import { Chain, Network, NetworkInput, TokenInput, TokensQueryInput, TokensQueryFilter, CollectionsQueryInput, CollectionSortKeySortInput, TokenSortInput, EventsQueryInput, EventsQueryFilter, EventSortKeySortInput, MarketSortKeySortInput, MarketsQueryFilter, MarketsQueryInput, MintsQueryFilter, MintsQueryInput, MintSortKeySortInput, ActiveMarketQueryInput, SearchQueryVariables, SalesQueryInput, SaleSortKeySortInput, SalesQueryFilter, PaginationInput, OffchainOrdersQueryInput, OffchainOrderSortKeySortInput, OffchainOrdersQueryFilter } from './queries/queries-sdk';
import { CollectionsQuery, TokenQuery, TokensQuery } from './queries/queries-sdk';
export declare type CollectionResponseList = CollectionsQuery['collections']['nodes'];
export declare type CollectionResponseItem = CollectionResponseList[0];
export declare type TokensResponseList = TokensQuery['tokens']['nodes'];
export declare type TokensResponseItem = TokensResponseList[0];
export declare type TokenResponseItem = NonNullable<TokenQuery['token']>;
export { Chain as ZDKChain, Network as ZDKNetwork };
export declare type OverrideNetworksOption = NetworkInput[];
export declare type OverridePaginationOptions = PaginationInput;
declare type SharedQueryParams = {
    networks?: NetworkInput[];
    pagination?: OverridePaginationOptions;
};
export declare type CollectionsQueryArgs = {
    where: CollectionsQueryInput;
    includeFullDetails?: boolean;
    sort: CollectionSortKeySortInput;
} & SharedQueryParams;
export declare type TokensQueryArgs = {
    where: TokensQueryInput;
    filter?: TokensQueryFilter;
    sort?: TokenSortInput;
    includeFullDetails?: boolean;
    includeSalesHistory?: boolean;
} & SharedQueryParams;
export declare type EventsQueryArgs = {
    where: EventsQueryInput;
    sort?: EventSortKeySortInput;
    filter?: EventsQueryFilter;
} & SharedQueryParams;
export declare type MarketsQueryArgs = {
    where: MarketsQueryInput;
    sort: MarketSortKeySortInput;
    filter: MarketsQueryFilter;
    includeFullDetails: boolean;
} & SharedQueryParams;
export declare type ActiveMarketQueryArgs = {
    network?: NetworkInput;
    where: ActiveMarketQueryInput;
};
export declare type MintsQueryArgs = {
    where: MintsQueryInput;
    sort?: MintSortKeySortInput;
    filter?: MintsQueryFilter;
    includeFullDetails?: boolean;
    includeMarkets?: boolean;
} & SharedQueryParams;
export declare type SalesQueryArgs = {
    where: SalesQueryInput;
    sort: SaleSortKeySortInput;
    filter: SalesQueryFilter;
    includeFullDetails: boolean;
} & SharedQueryParams;
export declare type CollectionStatsAggregateQuery = {
    collectionAddress: string;
    network: NetworkInput;
};
export declare type OffchainOrderQueryArgs = {
    where?: OffchainOrdersQueryInput;
    networks?: NetworkInput[];
    pagination?: PaginationInput;
    sort?: OffchainOrderSortKeySortInput;
    filter?: OffchainOrdersQueryFilter;
};
export declare type TokenQueryArgs = {
    network?: NetworkInput[] | NetworkInput;
    token: TokenInput;
    includeFullDetails?: boolean;
};
export declare type CollectionQueryArgs = {
    address: string;
    network?: NetworkInput;
    includeFullDetails?: boolean;
};
export interface ListOptions<SortInput> {
    networks?: OverrideNetworksOption;
    pagination?: OverridePaginationOptions;
    sort?: SortInput;
    includeFullDetails?: boolean;
}
export declare type SearchQueryArgs = {
    query: string;
    filter?: SearchQueryVariables['filter'];
    pagination?: SearchQueryVariables['pagination'];
    networks?: NetworkInput[];
};
export interface AggregateOptions {
    networks?: OverrideNetworksOption;
}
export declare type TokenQueryList = TokenInput;
