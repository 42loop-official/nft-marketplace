"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZDK = void 0;
const graphql_request_1 = require("graphql-request");
const queries_sdk_1 = require("./queries/queries-sdk");
const DEFAULT_PROD_ENDPOINT = 'https://api.zora.co/graphql';
class ZDK {
    constructor({ endpoint = DEFAULT_PROD_ENDPOINT, networks = [{ network: queries_sdk_1.Network.Ethereum, chain: queries_sdk_1.Chain.Mainnet }], apiKey = undefined, } = {}) {
        this.defaultPageSize = 50;
        this.apiKeyWrapper = async (action) => {
            const headers = {};
            if (this.apiKey) {
                headers['X-API-KEY'] = this.apiKey;
            }
            const result = await action(headers);
            return result;
        };
        this.getNetworksOption = (networks) => {
            return {
                networks: networks !== null && networks !== void 0 ? networks : this.defaultNetworks,
            };
        };
        this.getPaginationOptions = ({ limit, after } = { limit: this.defaultPageSize }) => {
            return {
                pagination: {
                    limit: limit || this.defaultPageSize,
                    after: after || null,
                },
            };
        };
        /**
         * A function to query Zora API for a set of NFT collections.
         * @param {TokenQueryArgs} - where, filter, pagination, networks, sort, includeFullDetails
         * @returns {Promise<TokensQuery>}
         */
        this.tokens = async ({ where, filter, pagination, networks, sort, includeFullDetails = false, includeSalesHistory = false, }) => this.sdk.tokens({
            where,
            filter,
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Asc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.TokenSortKey.Transferred,
                sortAxis: sort === null || sort === void 0 ? void 0 : sort.sortAxis,
            },
            includeFullDetails,
            includeSalesHistory,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
        });
        /**
         * A function to query Zora API for a specific token.
         * @param {TokenInput} - token
         * @param {NetworkInput} - token
         * @returns {Promise<TokenQuery>}
         */
        this.token = async ({ token, networks = this.defaultNetworks, includeFullDetails = false, }) => await this.sdk.token({
            token,
            networks,
            includeFullDetails,
        });
        /**
         * A function to query Zora API for a collection's event set.
         * @param {EventQueryArgs} - networks, filter, pagination, sort, where
         * @returns {Promise<EventsQuery>}
         */
        this.events = async ({ networks, filter, pagination, sort, where, }) => this.sdk.events({
            filter,
            where,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Desc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.EventSortKey.Created,
            },
        });
        /**
         * A function to query Zora API for a collection's market data.
         * @param {MarketQueryArgs} - networks, filter, pagination, sort, where, includeFullDetails
         * @returns {Promise<MarketsQuery>}
         */
        this.markets = async ({ networks, filter, pagination, sort, where, includeFullDetails = false, }) => this.sdk.markets({
            filter,
            where,
            includeFullDetails,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Desc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.MarketSortKey.None,
            },
        });
        /**
         * A query for getting off-chain liquidity with a variety of protocols.
         *
         * @param {OffchainOrderQueryArgs} - networks, filter, pagiantion, sort, where
         * @returns {Promise<OffchainOrdersQuery>}
         */
        this.offchainOrders = async ({ networks, filter, pagination, sort, where, }) => this.sdk.offchainOrders({
            networks,
            filter,
            pagination,
            sort,
            where,
        });
        /*
         * A function to query Zora API for a collection's market data.
         * @param {MarketQueryArgs} - networks, filter, pagination, sort, where, includeFullDetails
         * @returns {Promise<MarketsQuery>}
         */
        this.market = async ({ network, where }) => this.sdk.market({
            network: network !== null && network !== void 0 ? network : this.defaultNetworks[0],
            where,
        });
        /**
         * A function to query Zora API for a collection's mint data.
         * @param {MintsQueryArgs} - networks, filter, pagination, sort, where, includeFullDetails, includeMarkets
         * @returns {Promise<MintsQuery>}
         */
        this.mints = async ({ networks, filter, pagination, sort, where, includeFullDetails = false, includeMarkets = false, }) => this.sdk.mints({
            filter,
            where,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Desc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.MintSortKey.None,
            },
            includeFullDetails,
            includeMarkets,
        });
        /**
         * A function to query Zora API for a collection's sales data.
         * @param {SalesQueryArgs} - where, networks, filter, pagination, sort, includeFullDetails
         * @returns {Promise<SalesQuery>}
         */
        this.sales = async ({ where, pagination, networks, sort, filter, includeFullDetails = false, }) => this.sdk.sales({
            where,
            filter,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Desc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.SaleSortKey.Time,
            },
            includeFullDetails,
        });
        /**
         * A function to query Zora API for a set of NFT collection's data.
         * @param {CollectionsQueryArgs} - where, networks, pagination, sort, includeFullDetails
         * @returns {Promise<CollectionsQuery>}
         */
        this.collections = async ({ where, pagination, networks, sort, includeFullDetails = false, }) => this.sdk.collections({
            where,
            includeFullDetails,
            ...this.getPaginationOptions(pagination),
            ...this.getNetworksOption(networks),
            sort: {
                sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortDirection) || queries_sdk_1.SortDirection.Desc,
                sortKey: (sort === null || sort === void 0 ? void 0 : sort.sortKey) || queries_sdk_1.CollectionSortKey.Created,
            },
        });
        /**
         * A function to query Zora API for an NFT collection's aggregate statistical data.
         * @param {CollectionStatsAggregateQuery} - networks, collectionAddress
         * @returns {Promise<CollectionStatsAggregateQuery>}
         */
        this.collectionStatsAggregate = async ({ collectionAddress, network, }) => this.sdk.collectionStatsAggregate({
            collectionAddress,
            ...this.getNetworksOption(network ? [network] : undefined),
        });
        /**
         * A function to query Zora API for an NFT collection's data.
         * @param {CollectionQueryArgs} - address, networks, includeFullDetails
         * @returns {Promise<CollectionQuery>}
         */
        this.collection = async ({ address, network, includeFullDetails = true, }) => {
            const collectionsResponse = await this.sdk.collections({
                where: {
                    collectionAddresses: [address],
                },
                pagination: {
                    limit: 2,
                    after: null,
                },
                sort: {
                    sortKey: queries_sdk_1.CollectionSortKey.Created,
                    sortDirection: queries_sdk_1.SortDirection.Asc,
                },
                includeFullDetails,
                ...this.getNetworksOption(network ? [network] : undefined),
            });
            const items = collectionsResponse.collections.nodes;
            if (items.length === 0) {
                throw new Error('No collections found');
            }
            if (items.length === 2) {
                throw new Error('Invariant: multiple collections found, expecting 1');
            }
            return items[0];
        };
        /**
         * A function to query Zora API for a set of NFT collection's owners by count.
         * @param {OwnersByCountQueryVariables} - where, networks, pagination
         * @returns {Promise<OwnersByCountQuery>}
         */
        this.ownersByCount = async ({ where, pagination, networks = this.defaultNetworks, sort = null, }) => this.sdk.ownersByCount({
            where,
            networks,
            pagination,
            sort,
        });
        /**
         * A function to query Zora API for a set of NFT aggregate attribute data.
         * @param {AggregateAttributesQueryVariable} - where, networks
         * @returns {Promise<AggregateAttributesQuery>}
         */
        this.aggregateAttributes = async ({ where, networks = this.defaultNetworks, }) => this.sdk.aggregateAttributes({ where, networks });
        /**
         * A function to query Zora API for a set of NFT collection's sales volume data.
         * @param {SalesVolumeQueryVariables} - where, networks, TimeFilter
         * @returns {Promise<SalesVolumeQuery>}
         */
        this.salesVolume = async ({ where, networks = this.defaultNetworks, filter, }) => this.sdk.salesVolume({
            where,
            networks,
            filter,
        });
        /**
         * A function to query Zora API for a set of NFT owner counts.
         * @param {OwnerCountQueryVariables} - where, networks
         * @returns {Promise<OwnerCountQuery>}
         */
        this.ownerCount = async ({ where, networks = this.defaultNetworks, }) => this.sdk.ownerCount({
            where,
            networks,
        });
        /**
         * A function to query Zora API for a set of NFT collection floor prices
         * @param {FloorPriceQueryVariables} - where, networks
         * @returns {Promise<FloorPriceQuery>}
         */
        this.floorPrice = async ({ where, networks = this.defaultNetworks, }) => this.sdk.floorPrice({
            where,
            networks,
        });
        /**
         * A function to query Zora API for a set of NFT collection count data.
         * @param {NftCountQueryVariables} - where, networks
         * @returns {Promise<NftCountQuery>}
         */
        this.nftCount = async ({ where, networks = this.defaultNetworks, }) => this.sdk.nftCount({
            where,
            networks,
        });
        /**
         * A function to query Zora API to query for an NFT collection with a query string.
         * @param {SearchQueryArgs} - pagination, query, filter
         * @returns {Promise<SearchQuery>}
         */
        this.search = async ({ pagination, query, filter, networks = this.defaultNetworks }) => this.sdk.search({
            filter,
            query: { text: query },
            ...this.getPaginationOptions(pagination),
            networks,
        });
        this.endpoint = endpoint;
        this.defaultNetworks = networks;
        this.sdk = (0, queries_sdk_1.getSdk)(new graphql_request_1.GraphQLClient(this.endpoint), this.apiKeyWrapper);
        this.apiKey = apiKey;
    }
}
exports.ZDK = ZDK;
