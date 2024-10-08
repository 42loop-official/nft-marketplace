import { ActiveMarketQueryArgs, CollectionQueryArgs, CollectionsQueryArgs, CollectionStatsAggregateQuery, EventsQueryArgs, MarketsQueryArgs, MintsQueryArgs, OffchainOrderQueryArgs, OverrideNetworksOption, SalesQueryArgs, SearchQueryArgs, TokenQueryArgs, TokensQueryArgs } from './types';
import { AggregateAttributesQueryVariables, Chain, FloorPriceQueryVariables, getSdk, Network, NftCountQueryVariables, OwnerCountQueryVariables, OwnersByCountQueryVariables, SalesVolumeQueryVariables } from './queries/queries-sdk';
declare type OptionalNetwork<K> = Omit<K, 'networks'> & {
    networks?: OverrideNetworksOption;
};
declare type ZDKOptions = {
    endpoint?: string;
    networks?: OverrideNetworksOption;
    apiKey?: string;
};
export declare class ZDK {
    endpoint: string;
    defaultNetworks: OverrideNetworksOption;
    defaultPageSize: number;
    apiKey?: string;
    sdk: ReturnType<typeof getSdk>;
    constructor({ endpoint, networks, apiKey, }?: ZDKOptions);
    private apiKeyWrapper;
    private getNetworksOption;
    private getPaginationOptions;
    /**
     * A function to query Zora API for a set of NFT collections.
     * @param {TokenQueryArgs} - where, filter, pagination, networks, sort, includeFullDetails
     * @returns {Promise<TokensQuery>}
     */
    tokens: ({ where, filter, pagination, networks, sort, includeFullDetails, includeSalesHistory, }: TokensQueryArgs) => Promise<import("./types").TokensQuery>;
    /**
     * A function to query Zora API for a specific token.
     * @param {TokenInput} - token
     * @param {NetworkInput} - token
     * @returns {Promise<TokenQuery>}
     */
    token: ({ token, networks, includeFullDetails, }: OptionalNetwork<TokenQueryArgs>) => Promise<import("./queries/queries-sdk").TokenQuery>;
    /**
     * A function to query Zora API for a collection's event set.
     * @param {EventQueryArgs} - networks, filter, pagination, sort, where
     * @returns {Promise<EventsQuery>}
     */
    events: ({ networks, filter, pagination, sort, where, }: EventsQueryArgs) => Promise<import("./queries/queries-sdk").EventsQuery>;
    /**
     * A function to query Zora API for a collection's market data.
     * @param {MarketQueryArgs} - networks, filter, pagination, sort, where, includeFullDetails
     * @returns {Promise<MarketsQuery>}
     */
    markets: ({ networks, filter, pagination, sort, where, includeFullDetails, }: MarketsQueryArgs) => Promise<import("./queries/queries-sdk").MarketsQuery>;
    /**
     * A query for getting off-chain liquidity with a variety of protocols.
     *
     * @param {OffchainOrderQueryArgs} - networks, filter, pagiantion, sort, where
     * @returns {Promise<OffchainOrdersQuery>}
     */
    offchainOrders: ({ networks, filter, pagination, sort, where, }: OffchainOrderQueryArgs) => Promise<import("./queries/queries-sdk").OffchainOrdersQuery>;
    market: ({ network, where }: ActiveMarketQueryArgs) => Promise<import("./queries/queries-sdk").MarketQuery>;
    /**
     * A function to query Zora API for a collection's mint data.
     * @param {MintsQueryArgs} - networks, filter, pagination, sort, where, includeFullDetails, includeMarkets
     * @returns {Promise<MintsQuery>}
     */
    mints: ({ networks, filter, pagination, sort, where, includeFullDetails, includeMarkets, }: MintsQueryArgs) => Promise<import("./queries/queries-sdk").MintsQuery>;
    /**
     * A function to query Zora API for a collection's sales data.
     * @param {SalesQueryArgs} - where, networks, filter, pagination, sort, includeFullDetails
     * @returns {Promise<SalesQuery>}
     */
    sales: ({ where, pagination, networks, sort, filter, includeFullDetails, }: SalesQueryArgs) => Promise<import("./queries/queries-sdk").SalesQuery>;
    /**
     * A function to query Zora API for a set of NFT collection's data.
     * @param {CollectionsQueryArgs} - where, networks, pagination, sort, includeFullDetails
     * @returns {Promise<CollectionsQuery>}
     */
    collections: ({ where, pagination, networks, sort, includeFullDetails, }: CollectionsQueryArgs) => Promise<import("./types").CollectionsQuery>;
    /**
     * A function to query Zora API for an NFT collection's aggregate statistical data.
     * @param {CollectionStatsAggregateQuery} - networks, collectionAddress
     * @returns {Promise<CollectionStatsAggregateQuery>}
     */
    collectionStatsAggregate: ({ collectionAddress, network, }: CollectionStatsAggregateQuery) => Promise<import("./queries/queries-sdk").CollectionStatsAggregateQuery>;
    /**
     * A function to query Zora API for an NFT collection's data.
     * @param {CollectionQueryArgs} - address, networks, includeFullDetails
     * @returns {Promise<CollectionQuery>}
     */
    collection: ({ address, network, includeFullDetails, }: CollectionQueryArgs) => Promise<{
        __typename?: "Collection" | undefined;
        address: string;
        description: string;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalSupply?: number | null | undefined;
        networkInfo: {
            __typename?: "NetworkInfo" | undefined;
            chain: Chain;
            network: Network;
        };
        attributes?: {
            __typename?: "CollectionAttribute" | undefined;
            traitType?: string | null | undefined;
            valueMetrics: {
                __typename?: "CollectionAttributeValue" | undefined;
                count: number;
                percent: number;
                value: string;
            }[];
        }[] | null | undefined;
    }>;
    /**
     * A function to query Zora API for a set of NFT collection's owners by count.
     * @param {OwnersByCountQueryVariables} - where, networks, pagination
     * @returns {Promise<OwnersByCountQuery>}
     */
    ownersByCount: ({ where, pagination, networks, sort, }: OptionalNetwork<OwnersByCountQueryVariables>) => Promise<import("./queries/queries-sdk").OwnersByCountQuery>;
    /**
     * A function to query Zora API for a set of NFT aggregate attribute data.
     * @param {AggregateAttributesQueryVariable} - where, networks
     * @returns {Promise<AggregateAttributesQuery>}
     */
    aggregateAttributes: ({ where, networks, }: OptionalNetwork<AggregateAttributesQueryVariables>) => Promise<import("./queries/queries-sdk").AggregateAttributesQuery>;
    /**
     * A function to query Zora API for a set of NFT collection's sales volume data.
     * @param {SalesVolumeQueryVariables} - where, networks, TimeFilter
     * @returns {Promise<SalesVolumeQuery>}
     */
    salesVolume: ({ where, networks, filter, }: OptionalNetwork<SalesVolumeQueryVariables>) => Promise<import("./queries/queries-sdk").SalesVolumeQuery>;
    /**
     * A function to query Zora API for a set of NFT owner counts.
     * @param {OwnerCountQueryVariables} - where, networks
     * @returns {Promise<OwnerCountQuery>}
     */
    ownerCount: ({ where, networks, }: OptionalNetwork<OwnerCountQueryVariables>) => Promise<import("./queries/queries-sdk").OwnerCountQuery>;
    /**
     * A function to query Zora API for a set of NFT collection floor prices
     * @param {FloorPriceQueryVariables} - where, networks
     * @returns {Promise<FloorPriceQuery>}
     */
    floorPrice: ({ where, networks, }: OptionalNetwork<FloorPriceQueryVariables>) => Promise<import("./queries/queries-sdk").FloorPriceQuery>;
    /**
     * A function to query Zora API for a set of NFT collection count data.
     * @param {NftCountQueryVariables} - where, networks
     * @returns {Promise<NftCountQuery>}
     */
    nftCount: ({ where, networks, }: OptionalNetwork<NftCountQueryVariables>) => Promise<import("./queries/queries-sdk").NftCountQuery>;
    /**
     * A function to query Zora API to query for an NFT collection with a query string.
     * @param {SearchQueryArgs} - pagination, query, filter
     * @returns {Promise<SearchQuery>}
     */
    search: ({ pagination, query, filter, networks }: SearchQueryArgs) => Promise<import("./queries/queries-sdk").SearchQuery>;
}
export {};
