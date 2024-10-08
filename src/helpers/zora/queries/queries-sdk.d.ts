import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The GenericScalar scalar type represents a generic GraphQL scalar value that could be: List or Object. */
    JSONScalar: any;
    datetime: any;
};
export declare type AccumulativeSalesQueryInput = {
    collectionAddress: Scalars['String'];
    tokenId?: InputMaybe<Scalars['String']>;
};
export declare type ActiveMarket = {
    __typename?: 'ActiveMarket';
    collectionAddress?: Maybe<Scalars['String']>;
    marketAddress: Scalars['String'];
    marketType: ActiveMarketType;
    networkInfo: NetworkInfo;
    price?: Maybe<PriceAtTime>;
    properties?: Maybe<ActiveMarketProperties>;
    status: Scalars['String'];
    tokenId?: Maybe<Scalars['String']>;
    transactionInfo: TransactionInfo;
};
export declare type ActiveMarketProperties = LilNounsAuction | NounsAuction | NounsBuilderAuction | V2Auction | V3ReserveAuction;
export declare type ActiveMarketQueryInput = {
    collectionAddress?: InputMaybe<Scalars['String']>;
    marketType: ActiveMarketType;
    token?: InputMaybe<TokenInput>;
};
export declare enum ActiveMarketType {
    ActiveLilNounsAuction = "ACTIVE_LIL_NOUNS_AUCTION",
    ActiveNounsAuction = "ACTIVE_NOUNS_AUCTION",
    ActiveNounsBuilderAuction = "ACTIVE_NOUNS_BUILDER_AUCTION",
    ActiveV2Auction = "ACTIVE_V2_AUCTION",
    ActiveV3ReserveAuction = "ACTIVE_V3_RESERVE_AUCTION"
}
export declare type AggregateAttribute = {
    __typename?: 'AggregateAttribute';
    traitType: Scalars['String'];
    valueMetrics: Array<AggregateAttributeValue>;
};
export declare enum AggregateAttributeSortKey {
    Count = "COUNT",
    None = "NONE",
    Value = "VALUE"
}
export declare type AggregateAttributeSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: AggregateAttributeSortKey;
};
export declare type AggregateAttributeValue = {
    __typename?: 'AggregateAttributeValue';
    count: Scalars['Int'];
    percent: Scalars['Float'];
    value: Scalars['String'];
};
export declare type AggregateAttributesQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type AggregateStat = {
    __typename?: 'AggregateStat';
    accumulativeSales: Array<SalesBucket>;
    floorPrice?: Maybe<Scalars['Float']>;
    nftCount: Scalars['Int'];
    ownerCount: Scalars['Int'];
    ownersByCount: OwnerCountConnection;
    ownersByCount1155: Array<OwnerCount>;
    salesVolume: SalesVolume;
};
export declare type AggregateStatAccumulativeSalesArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    where: AccumulativeSalesQueryInput;
};
export declare type AggregateStatFloorPriceArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    where: CollectionAddressAndAttributesInput;
};
export declare type AggregateStatNftCountArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    where: CollectionAddressOwnerAddressAttributesInput;
};
export declare type AggregateStatOwnerCountArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    where: CollectionAddressAndAttributesInput;
};
export declare type AggregateStatOwnersByCountArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<OwnerCountSortKeySortInput>;
    where: OwnersByCountQueryInput;
};
export declare type AggregateStatOwnersByCount1155Args = {
    where: OwnersByCount1155QueryInput;
};
export declare type AggregateStatSalesVolumeArgs = {
    filter?: InputMaybe<SalesVolumeFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    where: CollectionAddressOwnerAddressAttributesInput;
};
export declare type ApprovalEvent = {
    __typename?: 'ApprovalEvent';
    approvalEventType: ApprovalEventType;
    approved?: Maybe<Scalars['Boolean']>;
    approvedAddress: Scalars['String'];
    collectionAddress: Scalars['String'];
    ownerAddress: Scalars['String'];
    tokenId?: Maybe<Scalars['String']>;
};
export declare enum ApprovalEventType {
    Approval = "APPROVAL",
    ApprovalForAll = "APPROVAL_FOR_ALL"
}
export declare type AttributeFilter = {
    traitType: Scalars['String'];
    value?: InputMaybe<Scalars['String']>;
};
export declare type AudioEncodingTypes = {
    __typename?: 'AudioEncodingTypes';
    large?: Maybe<Scalars['String']>;
    original: Scalars['String'];
};
export declare enum Chain {
    BaseGoerli = "BASE_GOERLI",
    BaseMainnet = "BASE_MAINNET",
    Goerli = "GOERLI",
    Mainnet = "MAINNET",
    OptimismGoerli = "OPTIMISM_GOERLI",
    OptimismMainnet = "OPTIMISM_MAINNET",
    PgnMainnet = "PGN_MAINNET",
    Rinkeby = "RINKEBY",
    Sepolia = "SEPOLIA",
    ZoraGoerli = "ZORA_GOERLI",
    ZoraMainnet = "ZORA_MAINNET"
}
export declare type Collection = {
    __typename?: 'Collection';
    address: Scalars['String'];
    attributes?: Maybe<Array<CollectionAttribute>>;
    description: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    networkInfo: NetworkInfo;
    symbol?: Maybe<Scalars['String']>;
    tokenStandard?: Maybe<TokenStandard>;
    totalSupply?: Maybe<Scalars['Int']>;
};
export declare type CollectionAddressAndAttributesInput = {
    attributes?: InputMaybe<Array<AttributeFilter>>;
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
};
export declare type CollectionAddressOwnerAddressAttributesInput = {
    attributes?: InputMaybe<Array<AttributeFilter>>;
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
};
export declare type CollectionAttribute = {
    __typename?: 'CollectionAttribute';
    traitType?: Maybe<Scalars['String']>;
    valueMetrics: Array<CollectionAttributeValue>;
};
export declare type CollectionAttributeValue = {
    __typename?: 'CollectionAttributeValue';
    count: Scalars['Int'];
    percent: Scalars['Float'];
    value: Scalars['String'];
};
export declare type CollectionConnection = {
    __typename?: 'CollectionConnection';
    nodes: Array<Collection>;
    pageInfo: PageInfo;
};
export declare enum CollectionSortKey {
    Created = "CREATED",
    Name = "NAME",
    None = "NONE"
}
export declare type CollectionSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: CollectionSortKey;
};
export declare type CollectionsQueryInput = {
    collectionAddresses: Array<Scalars['String']>;
};
export declare type Currency = {
    __typename?: 'Currency';
    address: Scalars['String'];
    decimals: Scalars['Int'];
    name: Scalars['String'];
};
export declare type CurrencyAmount = {
    __typename?: 'CurrencyAmount';
    currency: Currency;
    decimal: Scalars['Float'];
    raw: Scalars['String'];
};
export declare type Event = {
    __typename?: 'Event';
    collectionAddress?: Maybe<Scalars['String']>;
    eventType: EventType;
    networkInfo: NetworkInfo;
    properties: EventProperties;
    tokenId?: Maybe<Scalars['String']>;
    transactionInfo: TransactionInfo;
};
export declare type EventConnection = {
    __typename?: 'EventConnection';
    nodes: Array<Event>;
    pageInfo: PageInfo;
};
export declare type EventProperties = ApprovalEvent | LilNounsAuctionEvent | MintEvent | NounsAuctionEvent | Sale | SeaportEvent | TransferEvent | V1MarketEvent | V1MediaEvent | V2AuctionEvent | V3AskEvent | V3ModuleManagerEvent | V3ReserveAuctionEvent;
export declare enum EventSortKey {
    Created = "CREATED"
}
export declare type EventSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: EventSortKey;
};
export declare enum EventType {
    ApprovalEvent = "APPROVAL_EVENT",
    LilNounsAuctionEvent = "LIL_NOUNS_AUCTION_EVENT",
    MintEvent = "MINT_EVENT",
    NounsAuctionEvent = "NOUNS_AUCTION_EVENT",
    SaleEvent = "SALE_EVENT",
    SeaportEvent = "SEAPORT_EVENT",
    TransferEvent = "TRANSFER_EVENT",
    V1MarketEvent = "V1_MARKET_EVENT",
    V1MediaEvent = "V1_MEDIA_EVENT",
    V2AuctionEvent = "V2_AUCTION_EVENT",
    V3AskEvent = "V3_ASK_EVENT",
    V3ModuleManagerEvent = "V3_MODULE_MANAGER_EVENT",
    V3ReserveAuctionEvent = "V3_RESERVE_AUCTION_EVENT"
}
export declare type EventsQueryFilter = {
    bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
    eventTypes?: InputMaybe<Array<EventType>>;
    recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
    sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
    senderAddresses?: InputMaybe<Array<Scalars['String']>>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type EventsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type ImageEncodingTypes = {
    __typename?: 'ImageEncodingTypes';
    large?: Maybe<Scalars['String']>;
    original: Scalars['String'];
    poster?: Maybe<Scalars['String']>;
    thumbnail?: Maybe<Scalars['String']>;
};
export declare type ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes = AudioEncodingTypes | ImageEncodingTypes | UnsupportedEncodingTypes | VideoEncodingTypes;
export declare type LilNounsAuction = {
    __typename?: 'LilNounsAuction';
    address: Scalars['String'];
    amount?: Maybe<PriceAtTime>;
    auctionCurrency: Scalars['String'];
    auctionId: Scalars['String'];
    collectionAddress: Scalars['String'];
    duration: Scalars['String'];
    endTime: Scalars['String'];
    estimatedDurationTime?: Maybe<Scalars['datetime']>;
    firstBidTime?: Maybe<Scalars['datetime']>;
    highestBidPrice?: Maybe<PriceAtTime>;
    highestBidder?: Maybe<Scalars['String']>;
    minBidIncrementPercentage?: Maybe<Scalars['Int']>;
    reservePrice?: Maybe<PriceAtTime>;
    startTime: Scalars['String'];
    timeBuffer?: Maybe<Scalars['Int']>;
    tokenId: Scalars['String'];
    winner?: Maybe<Scalars['String']>;
};
export declare type LilNounsAuctionBidEventProperties = {
    __typename?: 'LilNounsAuctionBidEventProperties';
    extended: Scalars['Boolean'];
    lilNounId: Scalars['String'];
    sender: Scalars['String'];
    value: Scalars['String'];
};
export declare type LilNounsAuctionCreatedEventProperties = {
    __typename?: 'LilNounsAuctionCreatedEventProperties';
    endTime: Scalars['String'];
    lilNounId: Scalars['String'];
    startTime: Scalars['String'];
};
export declare type LilNounsAuctionEvent = {
    __typename?: 'LilNounsAuctionEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    lilNounsAuctionEventType: LilNounsAuctionEventType;
    properties: LilNounsAuctionEventProperties;
    tokenId: Scalars['String'];
};
export declare type LilNounsAuctionEventProperties = LilNounsAuctionBidEventProperties | LilNounsAuctionCreatedEventProperties | LilNounsAuctionExtendedEventProperties | LilNounsAuctionMinBidIncrementPercentageUpdatedEventProperties | LilNounsAuctionReservePriceUpdatedEventProperties | LilNounsAuctionSettledEventProperties | LilNounsAuctionTimeBufferUpdatedEventProperties;
export declare enum LilNounsAuctionEventType {
    LilNounsAuctionHouseAuctionBidEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_BID_EVENT",
    LilNounsAuctionHouseAuctionCreatedEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_CREATED_EVENT",
    LilNounsAuctionHouseAuctionExtendedEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_EXTENDED_EVENT",
    LilNounsAuctionHouseAuctionMinBidIncrementPercentageUpdated = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED",
    LilNounsAuctionHouseAuctionReservePriceUpdatedEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_RESERVE_PRICE_UPDATED_EVENT",
    LilNounsAuctionHouseAuctionSettledEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_SETTLED_EVENT",
    LilNounsAuctionHouseAuctionTimeBufferUpdatedEvent = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_TIME_BUFFER_UPDATED_EVENT"
}
export declare type LilNounsAuctionExtendedEventProperties = {
    __typename?: 'LilNounsAuctionExtendedEventProperties';
    endTime: Scalars['String'];
    lilNounId: Scalars['String'];
};
export declare type LilNounsAuctionMinBidIncrementPercentageUpdatedEventProperties = {
    __typename?: 'LilNounsAuctionMinBidIncrementPercentageUpdatedEventProperties';
    minBidIncrementPercentage: Scalars['String'];
};
export declare type LilNounsAuctionReservePriceUpdatedEventProperties = {
    __typename?: 'LilNounsAuctionReservePriceUpdatedEventProperties';
    reservePrice: Scalars['String'];
};
export declare type LilNounsAuctionSettledEventProperties = {
    __typename?: 'LilNounsAuctionSettledEventProperties';
    amount: Scalars['String'];
    lilNounId: Scalars['String'];
    price: PriceAtTime;
    winner: Scalars['String'];
};
export declare type LilNounsAuctionTimeBufferUpdatedEventProperties = {
    __typename?: 'LilNounsAuctionTimeBufferUpdatedEventProperties';
    timeBuffer: Scalars['String'];
};
export declare type Market = {
    __typename?: 'Market';
    collectionAddress?: Maybe<Scalars['String']>;
    marketAddress: Scalars['String'];
    marketType: MarketType;
    networkInfo: NetworkInfo;
    price?: Maybe<PriceAtTime>;
    properties?: Maybe<MarketProperties>;
    status: Scalars['String'];
    tokenId?: Maybe<Scalars['String']>;
    transactionInfo: TransactionInfo;
};
export declare enum MarketCategory {
    Ask = "ASK",
    Auction = "AUCTION",
    Offer = "OFFER"
}
export declare type MarketProperties = LilNounsAuction | NounsAuction | NounsBuilderAuction | V1Ask | V1BidShare | V1Offer | V2Auction | V3Ask | V3ReserveAuction;
export declare enum MarketSortKey {
    ChainTokenPrice = "CHAIN_TOKEN_PRICE",
    Created = "CREATED",
    NativePrice = "NATIVE_PRICE",
    None = "NONE",
    TimedSaleEnding = "TIMED_SALE_ENDING"
}
export declare type MarketSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: MarketSortKey;
};
export declare enum MarketStatus {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    Invalid = "INVALID"
}
export declare enum MarketType {
    LilNounsAuction = "LIL_NOUNS_AUCTION",
    NounsAuction = "NOUNS_AUCTION",
    NounsBuilderAuction = "NOUNS_BUILDER_AUCTION",
    V1Ask = "V1_ASK",
    V1BidShare = "V1_BID_SHARE",
    V1Offer = "V1_OFFER",
    V2Auction = "V2_AUCTION",
    V3Ask = "V3_ASK",
    V3ReserveAuction = "V3_RESERVE_AUCTION"
}
export declare type MarketTypeFilter = {
    bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
    marketType: MarketType;
    statuses?: InputMaybe<Array<MarketStatus>>;
};
export declare type MarketWithToken = {
    __typename?: 'MarketWithToken';
    market: Market;
    token?: Maybe<Token>;
};
export declare type MarketWithTokenConnection = {
    __typename?: 'MarketWithTokenConnection';
    nodes: Array<MarketWithToken>;
    pageInfo: PageInfo;
};
export declare type MarketsQueryFilter = {
    marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
    priceFilter?: InputMaybe<PriceFilter>;
};
export declare type MarketsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare enum MediaType {
    Audio = "AUDIO",
    Gif = "GIF",
    Html = "HTML",
    Image = "IMAGE",
    Text = "TEXT",
    Video = "VIDEO"
}
export declare type Mint = {
    __typename?: 'Mint';
    collectionAddress: Scalars['String'];
    networkInfo: NetworkInfo;
    originatorAddress: Scalars['String'];
    price: PriceAtTime;
    toAddress: Scalars['String'];
    tokenId: Scalars['String'];
    transactionInfo: TransactionInfo;
};
export declare type MintComment = {
    __typename?: 'MintComment';
    blockNumber: Scalars['Int'];
    collectionAddress: Scalars['String'];
    comment: Scalars['String'];
    fromAddress: Scalars['String'];
    quantity: Scalars['Int'];
    tokenId: Scalars['String'];
};
export declare type MintComments = {
    __typename?: 'MintComments';
    comments: Array<MintComment>;
};
export declare type MintCommentsQueryInput = {
    collectionAddress: Scalars['String'];
    tokenId?: InputMaybe<Scalars['String']>;
};
export declare type MintEvent = {
    __typename?: 'MintEvent';
    collectionAddress: Scalars['String'];
    originatorAddress: Scalars['String'];
    price?: Maybe<PriceAtTime>;
    toAddress: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type MintInfo = {
    __typename?: 'MintInfo';
    mintContext: TransactionInfo;
    originatorAddress: Scalars['String'];
    price?: Maybe<PriceAtTime>;
    toAddress: Scalars['String'];
};
export declare enum MintSortKey {
    None = "NONE",
    Price = "PRICE",
    Time = "TIME",
    TokenId = "TOKEN_ID"
}
export declare type MintSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: MintSortKey;
};
export declare type MintWithTokenAndMarkets = {
    __typename?: 'MintWithTokenAndMarkets';
    markets: Array<Market>;
    mint: Mint;
    token?: Maybe<Token>;
};
export declare type MintWithTokenAndMarketsMarketsArgs = {
    filter?: InputMaybe<MarketsQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<MarketSortKeySortInput>;
};
export declare type MintWithTokenAndMarketsConnection = {
    __typename?: 'MintWithTokenAndMarketsConnection';
    nodes: Array<MintWithTokenAndMarkets>;
    pageInfo: PageInfo;
};
export declare type MintsQueryFilter = {
    priceFilter?: InputMaybe<PriceFilter>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type MintsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    minterAddresses?: InputMaybe<Array<Scalars['String']>>;
    recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare enum Network {
    Base = "BASE",
    Ethereum = "ETHEREUM",
    Optimism = "OPTIMISM",
    Pgn = "PGN",
    Zora = "ZORA"
}
export declare type NetworkInfo = {
    __typename?: 'NetworkInfo';
    chain: Chain;
    network: Network;
};
export declare type NetworkInput = {
    chain: Chain;
    network: Network;
};
export declare type Nouns = {
    __typename?: 'Nouns';
    nounsActiveMarket?: Maybe<NounsBuilderAuction>;
    nounsDaos: NounsDaoConnection;
    nounsEvents: NounsEventConnection;
    nounsMarkets: NounsBuilderAuctionConnection;
    nounsProposal?: Maybe<NounsProposal>;
    nounsProposals: NounsProposalConnection;
    nounsSearch: NounsSearchResultConnection;
};
export declare type NounsNounsActiveMarketArgs = {
    network?: InputMaybe<NetworkInput>;
    where: NounsActiveMarketQueryInput;
};
export declare type NounsNounsDaosArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<NounsSortKeySortInput>;
    where?: InputMaybe<NounsQueryInput>;
};
export declare type NounsNounsEventsArgs = {
    filter?: InputMaybe<NounsEventsQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<EventSortKeySortInput>;
    where?: InputMaybe<NounsEventsQueryInput>;
};
export declare type NounsNounsMarketsArgs = {
    filter?: InputMaybe<NounsMarketsQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<MarketSortKeySortInput>;
    where?: InputMaybe<NounsMarketsQueryInput>;
};
export declare type NounsNounsProposalArgs = {
    network?: InputMaybe<NetworkInput>;
    where: NounsProposalQueryInput;
};
export declare type NounsNounsProposalsArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<NounsProposalSortKeySortInput>;
    where?: InputMaybe<NounsProposalsQueryInput>;
};
export declare type NounsNounsSearchArgs = {
    filterModel?: InputMaybe<NounsSearchFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination: SearchPaginationInput;
    query: NounsSearchQueryInput;
};
export declare type NounsActiveMarketQueryInput = {
    collectionAddress: Scalars['String'];
};
export declare type NounsAuction = {
    __typename?: 'NounsAuction';
    address: Scalars['String'];
    amount?: Maybe<PriceAtTime>;
    auctionCurrency: Scalars['String'];
    auctionId: Scalars['String'];
    collectionAddress: Scalars['String'];
    duration: Scalars['String'];
    endTime: Scalars['String'];
    estimatedDurationTime?: Maybe<Scalars['datetime']>;
    firstBidTime?: Maybe<Scalars['datetime']>;
    highestBidPrice?: Maybe<PriceAtTime>;
    highestBidder?: Maybe<Scalars['String']>;
    minBidIncrementPercentage?: Maybe<Scalars['Int']>;
    reservePrice?: Maybe<PriceAtTime>;
    startTime: Scalars['String'];
    timeBuffer?: Maybe<Scalars['Int']>;
    tokenId: Scalars['String'];
    winner?: Maybe<Scalars['String']>;
};
export declare type NounsAuctionBidEventProperties = {
    __typename?: 'NounsAuctionBidEventProperties';
    extended: Scalars['Boolean'];
    nounId: Scalars['String'];
    sender: Scalars['String'];
    value: Scalars['String'];
};
export declare type NounsAuctionCreatedEventProperties = {
    __typename?: 'NounsAuctionCreatedEventProperties';
    endTime: Scalars['String'];
    nounId: Scalars['String'];
    startTime: Scalars['String'];
};
export declare type NounsAuctionEvent = {
    __typename?: 'NounsAuctionEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    nounsAuctionEventType: NounsAuctionEventType;
    properties: NounsAuctionEventProperties;
    tokenId: Scalars['String'];
};
export declare type NounsAuctionEventProperties = NounsAuctionBidEventProperties | NounsAuctionCreatedEventProperties | NounsAuctionExtendedEventProperties | NounsAuctionMinBidIncrementPercentageUpdatedEventProperties | NounsAuctionReservePriceUpdatedEventProperties | NounsAuctionSettledEventProperties | NounsAuctionTimeBufferUpdatedEventProperties;
export declare enum NounsAuctionEventType {
    NounsAuctionHouseAuctionBidEvent = "NOUNS_AUCTION_HOUSE_AUCTION_BID_EVENT",
    NounsAuctionHouseAuctionCreatedEvent = "NOUNS_AUCTION_HOUSE_AUCTION_CREATED_EVENT",
    NounsAuctionHouseAuctionExtendedEvent = "NOUNS_AUCTION_HOUSE_AUCTION_EXTENDED_EVENT",
    NounsAuctionHouseAuctionMinBidIncrementPercentageUpdated = "NOUNS_AUCTION_HOUSE_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED",
    NounsAuctionHouseAuctionReservePriceUpdatedEvent = "NOUNS_AUCTION_HOUSE_AUCTION_RESERVE_PRICE_UPDATED_EVENT",
    NounsAuctionHouseAuctionSettledEvent = "NOUNS_AUCTION_HOUSE_AUCTION_SETTLED_EVENT",
    NounsAuctionHouseAuctionTimeBufferUpdatedEvent = "NOUNS_AUCTION_HOUSE_AUCTION_TIME_BUFFER_UPDATED_EVENT"
}
export declare type NounsAuctionExtendedEventProperties = {
    __typename?: 'NounsAuctionExtendedEventProperties';
    endTime: Scalars['String'];
    nounId: Scalars['String'];
};
export declare type NounsAuctionMinBidIncrementPercentageUpdatedEventProperties = {
    __typename?: 'NounsAuctionMinBidIncrementPercentageUpdatedEventProperties';
    minBidIncrementPercentage: Scalars['String'];
};
export declare type NounsAuctionReservePriceUpdatedEventProperties = {
    __typename?: 'NounsAuctionReservePriceUpdatedEventProperties';
    reservePrice: Scalars['String'];
};
export declare type NounsAuctionSettledEventProperties = {
    __typename?: 'NounsAuctionSettledEventProperties';
    amount: Scalars['String'];
    nounId: Scalars['String'];
    price: PriceAtTime;
    winner: Scalars['String'];
};
export declare type NounsAuctionTimeBufferUpdatedEventProperties = {
    __typename?: 'NounsAuctionTimeBufferUpdatedEventProperties';
    timeBuffer: Scalars['String'];
};
export declare type NounsBuilderAuction = {
    __typename?: 'NounsBuilderAuction';
    address: Scalars['String'];
    amount?: Maybe<PriceAtTime>;
    auction?: Maybe<Scalars['String']>;
    collectionAddress: Scalars['String'];
    duration: Scalars['String'];
    endTime: Scalars['String'];
    estimatedDurationTime?: Maybe<Scalars['datetime']>;
    extended?: Maybe<Scalars['Boolean']>;
    firstBidTime?: Maybe<Scalars['datetime']>;
    governor?: Maybe<Scalars['String']>;
    highestBidPrice?: Maybe<PriceAtTime>;
    highestBidder?: Maybe<Scalars['String']>;
    manager?: Maybe<Scalars['String']>;
    metadata?: Maybe<Scalars['String']>;
    minBidIncrementPercentage?: Maybe<Scalars['Int']>;
    networkInfo: NetworkInfo;
    reservePrice?: Maybe<PriceAtTime>;
    startTime: Scalars['String'];
    status: MarketStatus;
    timeBuffer?: Maybe<Scalars['String']>;
    tokenId: Scalars['String'];
    transactionInfo: TransactionInfo;
    treasury?: Maybe<Scalars['String']>;
    winner?: Maybe<Scalars['String']>;
};
export declare type NounsBuilderAuctionAuctionBidEventProperties = {
    __typename?: 'NounsBuilderAuctionAuctionBidEventProperties';
    amount: Scalars['String'];
    amountPrice: PriceAtTime;
    bidder: Scalars['String'];
    endTime: Scalars['String'];
    extended: Scalars['Boolean'];
    tokenId: Scalars['String'];
};
export declare type NounsBuilderAuctionAuctionCreatedEventProperties = {
    __typename?: 'NounsBuilderAuctionAuctionCreatedEventProperties';
    endTime: Scalars['String'];
    startTime: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type NounsBuilderAuctionAuctionSettledEventProperties = {
    __typename?: 'NounsBuilderAuctionAuctionSettledEventProperties';
    amount: Scalars['String'];
    amountPrice: PriceAtTime;
    tokenId: Scalars['String'];
    winner: Scalars['String'];
};
export declare type NounsBuilderAuctionConnection = {
    __typename?: 'NounsBuilderAuctionConnection';
    nodes: Array<NounsBuilderAuction>;
    pageInfo: PageInfo;
};
export declare type NounsBuilderAuctionDurationUpdatedEventProperties = {
    __typename?: 'NounsBuilderAuctionDurationUpdatedEventProperties';
    duration: Scalars['String'];
};
export declare type NounsBuilderAuctionEvent = {
    __typename?: 'NounsBuilderAuctionEvent';
    address: Scalars['String'];
    auction: Scalars['String'];
    collectionAddress: Scalars['String'];
    governor: Scalars['String'];
    manager: Scalars['String'];
    metadata: Scalars['String'];
    nounsBuilderAuctionEventType: NounsBuilderAuctionEventType;
    properties: NounsBuilderAuctionEventProperties;
    treasury: Scalars['String'];
};
export declare type NounsBuilderAuctionEventProperties = NounsBuilderAuctionAuctionBidEventProperties | NounsBuilderAuctionAuctionCreatedEventProperties | NounsBuilderAuctionAuctionSettledEventProperties | NounsBuilderAuctionDurationUpdatedEventProperties | NounsBuilderAuctionMinBidIncrementPercentageUpdatedEventProperties | NounsBuilderAuctionReservePriceUpdatedEventProperties | NounsBuilderAuctionTimeBufferUpdatedEventProperties;
export declare enum NounsBuilderAuctionEventType {
    NounsBuilderAuctionAuctionBidEvent = "NOUNS_BUILDER_AUCTION_AUCTION_BID_EVENT",
    NounsBuilderAuctionAuctionCreatedEvent = "NOUNS_BUILDER_AUCTION_AUCTION_CREATED_EVENT",
    NounsBuilderAuctionAuctionSettledEvent = "NOUNS_BUILDER_AUCTION_AUCTION_SETTLED_EVENT",
    NounsBuilderAuctionDurationUpdatedEvent = "NOUNS_BUILDER_AUCTION_DURATION_UPDATED_EVENT",
    NounsBuilderAuctionMinBidIncrementPercentageUpdatedEvent = "NOUNS_BUILDER_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED_EVENT",
    NounsBuilderAuctionReservePriceUpdatedEvent = "NOUNS_BUILDER_AUCTION_RESERVE_PRICE_UPDATED_EVENT",
    NounsBuilderAuctionTimeBufferUpdatedEvent = "NOUNS_BUILDER_AUCTION_TIME_BUFFER_UPDATED_EVENT"
}
export declare type NounsBuilderAuctionMinBidIncrementPercentageUpdatedEventProperties = {
    __typename?: 'NounsBuilderAuctionMinBidIncrementPercentageUpdatedEventProperties';
    minBidIncrementPercentage: Scalars['String'];
};
export declare type NounsBuilderAuctionReservePriceUpdatedEventProperties = {
    __typename?: 'NounsBuilderAuctionReservePriceUpdatedEventProperties';
    reserve: Scalars['String'];
    reservePrice: PriceAtTime;
};
export declare type NounsBuilderAuctionTimeBufferUpdatedEventProperties = {
    __typename?: 'NounsBuilderAuctionTimeBufferUpdatedEventProperties';
    timeBuffer: Scalars['String'];
};
export declare type NounsBuilderGovernorEvent = {
    __typename?: 'NounsBuilderGovernorEvent';
    address: Scalars['String'];
    auction: Scalars['String'];
    collectionAddress: Scalars['String'];
    governor: Scalars['String'];
    manager: Scalars['String'];
    metadata: Scalars['String'];
    nounsBuilderGovernorEventType: NounsBuilderGovernorEventType;
    properties: NounsBuilderGovernorEventProperties;
    treasury: Scalars['String'];
};
export declare type NounsBuilderGovernorEventProperties = NounsBuilderGovernorProposalCanceledEventProperties | NounsBuilderGovernorProposalCreatedEventProperties | NounsBuilderGovernorProposalExecutedEventProperties | NounsBuilderGovernorProposalQueuedEventProperties | NounsBuilderGovernorProposalThresholdBpsUpdatedEventProperties | NounsBuilderGovernorProposalVetoedEventProperties | NounsBuilderGovernorQuorumVotesBpsUpdated | NounsBuilderGovernorVetoerUpdatedEventProperties | NounsBuilderGovernorVoteCastEventProperties | NounsBuilderGovernorVotingDelayUpdatedEventProperties | NounsBuilderGovernorVotingPeriodUpdatedEventProperties;
export declare enum NounsBuilderGovernorEventType {
    NounsBuilderGovernorProposalCanceledEvent = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_CANCELED_EVENT",
    NounsBuilderGovernorProposalCreatedEvent = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_CREATED_EVENT",
    NounsBuilderGovernorProposalExecutedEvent = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_EXECUTED_EVENT",
    NounsBuilderGovernorProposalQueuedEvent = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_QUEUED_EVENT",
    NounsBuilderGovernorProposalVetoedEvent = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_VETOED_EVENT",
    NounsBuilderGovernorVetoerUpdatedEvent = "NOUNS_BUILDER_GOVERNOR_VETOER_UPDATED_EVENT",
    NounsBuilderGovernorVoteCastEvent = "NOUNS_BUILDER_GOVERNOR_VOTE_CAST_EVENT",
    NounsBuilderGovernorVotingDelayUpdatedEvent = "NOUNS_BUILDER_GOVERNOR_VOTING_DELAY_UPDATED_EVENT",
    NounsBuilderGovernorVotingPeriodUpdatedEvent = "NOUNS_BUILDER_GOVERNOR_VOTING_PERIOD_UPDATED_EVENT",
    NounsBuilderProposalThresholdBpsUpdated = "NOUNS_BUILDER_PROPOSAL_THRESHOLD_BPS_UPDATED",
    NounsBuilderQuorumVotesBpsUpdated = "NOUNS_BUILDER_QUORUM_VOTES_BPS_UPDATED"
}
export declare type NounsBuilderGovernorProposalCanceledEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalCanceledEventProperties';
    proposalId: Scalars['String'];
};
export declare type NounsBuilderGovernorProposalCreatedEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalCreatedEventProperties';
    abstainVotes: Scalars['String'];
    againstVotes: Scalars['String'];
    calldatas: Array<Scalars['String']>;
    canceled: Scalars['Boolean'];
    description: Scalars['String'];
    descriptionHash: Scalars['String'];
    executed: Scalars['Boolean'];
    forVotes: Scalars['String'];
    proposalId: Scalars['String'];
    proposalNumber?: Maybe<Scalars['String']>;
    proposalThreshold: Scalars['String'];
    proposer: Scalars['String'];
    quorumVotes: Scalars['String'];
    targets: Array<Scalars['String']>;
    timeCreated: Scalars['String'];
    values: Array<Scalars['String']>;
    vetoed: Scalars['Boolean'];
    voteEnd: Scalars['String'];
    voteStart: Scalars['String'];
};
export declare type NounsBuilderGovernorProposalExecutedEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalExecutedEventProperties';
    proposalId: Scalars['String'];
};
export declare type NounsBuilderGovernorProposalQueuedEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalQueuedEventProperties';
    eta: Scalars['String'];
    proposalId: Scalars['String'];
};
export declare type NounsBuilderGovernorProposalThresholdBpsUpdatedEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalThresholdBpsUpdatedEventProperties';
    newBps: Scalars['String'];
    prevBps: Scalars['String'];
};
export declare type NounsBuilderGovernorProposalVetoedEventProperties = {
    __typename?: 'NounsBuilderGovernorProposalVetoedEventProperties';
    proposalId: Scalars['String'];
};
export declare type NounsBuilderGovernorQuorumVotesBpsUpdated = {
    __typename?: 'NounsBuilderGovernorQuorumVotesBpsUpdated';
    newBps: Scalars['String'];
    prevBps: Scalars['String'];
};
export declare type NounsBuilderGovernorVetoerUpdatedEventProperties = {
    __typename?: 'NounsBuilderGovernorVetoerUpdatedEventProperties';
    newVetoer: Scalars['String'];
    prevVetoer: Scalars['String'];
};
export declare type NounsBuilderGovernorVoteCastEventProperties = {
    __typename?: 'NounsBuilderGovernorVoteCastEventProperties';
    proposalId: Scalars['String'];
    reason: Scalars['String'];
    support: Scalars['String'];
    voter: Scalars['String'];
    weight: Scalars['String'];
};
export declare type NounsBuilderGovernorVotingDelayUpdatedEventProperties = {
    __typename?: 'NounsBuilderGovernorVotingDelayUpdatedEventProperties';
    newVotingDelay: Scalars['String'];
    prevVotingDelay: Scalars['String'];
};
export declare type NounsBuilderGovernorVotingPeriodUpdatedEventProperties = {
    __typename?: 'NounsBuilderGovernorVotingPeriodUpdatedEventProperties';
    newVotingPeriod: Scalars['String'];
    prevVotingPeriod: Scalars['String'];
};
export declare type NounsBuilderManagerDaoDeployedEventProperties = {
    __typename?: 'NounsBuilderManagerDaoDeployedEventProperties';
    auction: Scalars['String'];
    governor: Scalars['String'];
    metadata: Scalars['String'];
    token: Scalars['String'];
    treasury: Scalars['String'];
};
export declare type NounsBuilderManagerEvent = {
    __typename?: 'NounsBuilderManagerEvent';
    address: Scalars['String'];
    nounsBuilderManagerEventType: NounsBuilderManagerEventType;
    properties: NounsBuilderManagerDaoDeployedEventProperties;
};
export declare enum NounsBuilderManagerEventType {
    NounsBuilderManagerDaoDeployedEvent = "NOUNS_BUILDER_MANAGER_DAO_DEPLOYED_EVENT"
}
export declare type NounsDao = {
    __typename?: 'NounsDao';
    auctionAddress?: Maybe<Scalars['String']>;
    collectionAddress: Scalars['String'];
    contractAddress?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    governorAddress?: Maybe<Scalars['String']>;
    metadataAddress?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    networkInfo: NetworkInfo;
    symbol?: Maybe<Scalars['String']>;
    totalSupply?: Maybe<Scalars['Int']>;
    treasuryAddress?: Maybe<Scalars['String']>;
};
export declare type NounsDaoConnection = {
    __typename?: 'NounsDaoConnection';
    nodes: Array<NounsDao>;
    pageInfo: PageInfo;
};
export declare type NounsEvent = {
    __typename?: 'NounsEvent';
    collectionAddress: Scalars['String'];
    eventType: NounsEventType;
    networkInfo: NetworkInfo;
    properties: NounsEventProperties;
    transactionInfo: TransactionInfo;
};
export declare type NounsEventConnection = {
    __typename?: 'NounsEventConnection';
    nodes: Array<NounsEvent>;
    pageInfo: PageInfo;
};
export declare type NounsEventProperties = LilNounsAuctionEvent | NounsAuctionEvent | NounsBuilderAuctionEvent | NounsBuilderGovernorEvent | NounsBuilderManagerEvent;
export declare enum NounsEventType {
    LilNounsAuctionEvent = "LIL_NOUNS_AUCTION_EVENT",
    NounsAuctionEvent = "NOUNS_AUCTION_EVENT",
    NounsBuilderAuctionEvent = "NOUNS_BUILDER_AUCTION_EVENT",
    NounsBuilderGovernorEvent = "NOUNS_BUILDER_GOVERNOR_EVENT",
    NounsBuilderManagerEvent = "NOUNS_BUILDER_MANAGER_EVENT"
}
export declare type NounsEventsQueryFilter = {
    nounsBuilderAuctionEventType?: InputMaybe<NounsBuilderAuctionEventType>;
    nounsBuilderGovernorEventType?: InputMaybe<NounsBuilderGovernorEventType>;
    nounsBuilderManagerEventType?: InputMaybe<NounsBuilderManagerEventType>;
    nounsEventTypes?: InputMaybe<Array<NounsEventType>>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type NounsEventsQueryInput = {
    auctionAddresses?: InputMaybe<Array<Scalars['String']>>;
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    governorAddresses?: InputMaybe<Array<Scalars['String']>>;
};
export declare enum NounsMarketType {
    LilNounsAuction = "LIL_NOUNS_AUCTION",
    NounsAuction = "NOUNS_AUCTION",
    NounsBuilderAuction = "NOUNS_BUILDER_AUCTION"
}
export declare type NounsMarketsQueryFilter = {
    nounsMarketType?: InputMaybe<NounsMarketType>;
    status?: InputMaybe<MarketStatus>;
};
export declare type NounsMarketsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type NounsProposal = {
    __typename?: 'NounsProposal';
    abstainVotes: Scalars['Int'];
    againstVotes: Scalars['Int'];
    auction: Scalars['String'];
    calldatas: Array<Scalars['String']>;
    collectionAddress: Scalars['String'];
    description: Scalars['String'];
    descriptionHash: Scalars['String'];
    executableFrom?: Maybe<Scalars['Int']>;
    expiresAt?: Maybe<Scalars['Int']>;
    forVotes: Scalars['Int'];
    governor: Scalars['String'];
    manager: Scalars['String'];
    metadata: Scalars['String'];
    networkInfo: NetworkInfo;
    proposalId: Scalars['String'];
    proposalNumber: Scalars['Int'];
    proposalThreshold: Scalars['Int'];
    proposer: Scalars['String'];
    quorumVotes: Scalars['Int'];
    status: NounsProposalStatus;
    targets: Array<Scalars['String']>;
    timeCreated: Scalars['Int'];
    title: Scalars['String'];
    transactionInfo: TransactionInfo;
    treasury: Scalars['String'];
    values: Array<Scalars['String']>;
    voteEnd: Scalars['Int'];
    voteStart: Scalars['Int'];
    votes: Array<NounsProposalVote>;
};
export declare type NounsProposalConnection = {
    __typename?: 'NounsProposalConnection';
    nodes: Array<NounsProposal>;
    pageInfo: PageInfo;
};
export declare type NounsProposalQueryInput = {
    proposal?: InputMaybe<ProposalInput>;
    proposalId?: InputMaybe<Scalars['String']>;
};
export declare enum NounsProposalSortKey {
    Created = "CREATED",
    None = "NONE"
}
export declare type NounsProposalSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: NounsProposalSortKey;
};
export declare enum NounsProposalStatus {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Created = "CREATED",
    Defeated = "DEFEATED",
    Executable = "EXECUTABLE",
    Executed = "EXECUTED",
    Expired = "EXPIRED",
    Pending = "PENDING",
    Queued = "QUEUED",
    Succeeded = "SUCCEEDED",
    Vetoed = "VETOED"
}
export declare type NounsProposalVote = {
    __typename?: 'NounsProposalVote';
    proposalId: Scalars['String'];
    reason: Scalars['String'];
    support: Support;
    transactionInfo: TransactionInfo;
    voter: Scalars['String'];
    weight: Scalars['Int'];
};
export declare type NounsProposalsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    proposalIds?: InputMaybe<Array<Scalars['String']>>;
    proposals?: InputMaybe<Array<ProposalInput>>;
};
export declare type NounsQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    memberAddresses?: InputMaybe<Array<Scalars['String']>>;
};
export declare type NounsSearchFilter = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
};
export declare type NounsSearchQueryInput = {
    text: Scalars['String'];
};
export declare type NounsSearchResult = {
    __typename?: 'NounsSearchResult';
    collectionAddress: Scalars['String'];
    entityType: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    networkInfo: NetworkInfo;
};
export declare type NounsSearchResultConnection = {
    __typename?: 'NounsSearchResultConnection';
    nodes: Array<NounsSearchResult>;
    pageInfo: PageInfo;
};
export declare enum NounsSortKey {
    Created = "CREATED",
    None = "NONE"
}
export declare type NounsSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: NounsSortKey;
};
export declare type OffchainOrder = {
    __typename?: 'OffchainOrder';
    calldata?: Maybe<Scalars['String']>;
    collectionAddress?: Maybe<Scalars['String']>;
    contractAddress: Scalars['String'];
    endTime: Scalars['datetime'];
    networkInfo: NetworkInfo;
    offerer: Scalars['String'];
    orderType: Scalars['String'];
    price: PriceAtTime;
    properties: SeaportOrder;
    startTime: Scalars['datetime'];
    tokenId?: Maybe<Scalars['String']>;
};
export declare enum OffchainOrderSortKey {
    ChainTokenPrice = "CHAIN_TOKEN_PRICE",
    EndTime = "END_TIME",
    NativePrice = "NATIVE_PRICE",
    None = "NONE",
    UsdcPrice = "USDC_PRICE"
}
export declare type OffchainOrderSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: OffchainOrderSortKey;
};
export declare type OffchainOrderWithToken = {
    __typename?: 'OffchainOrderWithToken';
    offchainOrder: OffchainOrder;
    token?: Maybe<Token>;
};
export declare type OffchainOrderWithTokenConnection = {
    __typename?: 'OffchainOrderWithTokenConnection';
    nodes: Array<OffchainOrderWithToken>;
    pageInfo: PageInfo;
};
export declare type OffchainOrdersQueryFilter = {
    priceFilter?: InputMaybe<PriceFilter>;
};
export declare type OffchainOrdersQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type OwnerCount = {
    __typename?: 'OwnerCount';
    count: Scalars['Int'];
    latestMint: Scalars['datetime'];
    owner: Scalars['String'];
    tokenIds: Array<Scalars['String']>;
};
export declare type OwnerCountConnection = {
    __typename?: 'OwnerCountConnection';
    nodes: Array<OwnerCount>;
    pageInfo: PageInfo;
};
export declare enum OwnerCountSortKey {
    Count = "COUNT",
    LatestMint = "LATEST_MINT",
    None = "NONE"
}
export declare type OwnerCountSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: OwnerCountSortKey;
};
export declare type OwnersByCount1155QueryInput = {
    collectionAddress: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type OwnersByCountQueryInput = {
    attributes?: InputMaybe<Array<AttributeFilter>>;
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type PageInfo = {
    __typename?: 'PageInfo';
    endCursor?: Maybe<Scalars['String']>;
    hasNextPage: Scalars['Boolean'];
    limit: Scalars['Int'];
};
export declare type PaginationInput = {
    after?: InputMaybe<Scalars['String']>;
    limit: Scalars['Int'];
};
export declare type PriceAtTime = {
    __typename?: 'PriceAtTime';
    blockNumber: Scalars['Int'];
    chainTokenPrice?: Maybe<CurrencyAmount>;
    nativePrice: CurrencyAmount;
    usdcPrice?: Maybe<CurrencyAmount>;
};
export declare type PriceFilter = {
    currencyAddress?: InputMaybe<Scalars['String']>;
    maximumChainTokenPrice?: InputMaybe<Scalars['String']>;
    maximumNativePrice?: InputMaybe<Scalars['String']>;
    minimumChainTokenPrice?: InputMaybe<Scalars['String']>;
    minimumNativePrice?: InputMaybe<Scalars['String']>;
};
export declare type ProposalInput = {
    address: Scalars['String'];
    proposalNumber: Scalars['String'];
};
export declare type ReceivedItem = {
    __typename?: 'ReceivedItem';
    address: Scalars['String'];
    amount: Scalars['String'];
    itemType: Scalars['String'];
    price?: Maybe<PriceAtTime>;
    recipient: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type RootQuery = {
    __typename?: 'RootQuery';
    /** Gets the total set of NFT attributes */
    aggregateAttributes: Array<AggregateAttribute>;
    /** Gets counts, sales volume, and other statistics */
    aggregateStat: AggregateStat;
    /** NFT collection data */
    collections: CollectionConnection;
    /** Contract event information, e.g. Sales, Transfers, Mints, etc. */
    events: EventConnection;
    /** Real time data for active markets */
    market?: Maybe<ActiveMarket>;
    /** Data for specific ZORA markets, e.g. Buy Now, Auctions, Offers */
    markets: MarketWithTokenConnection;
    /** Returns comments made while minting */
    mintComments: MintComments;
    /** Historical minting data */
    mints: MintWithTokenAndMarketsConnection;
    /** Nouns Builder DAOs */
    nouns: Nouns;
    /** Offchain liquidity */
    offchainOrders: OffchainOrderWithTokenConnection;
    /** Historical sales data from ZORA, OpenSea, LooksRare, 0x, and more */
    sales: SaleWithTokenConnection;
    /** Returns search results for a query */
    search: SearchResultConnection;
    /** Gets data on a single token */
    token?: Maybe<TokenWithFullMarketHistory>;
    /** Gets data for multiple tokens */
    tokens: TokenWithMarketsSummaryConnection;
};
export declare type RootQueryAggregateAttributesArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    sort?: InputMaybe<AggregateAttributeSortKeySortInput>;
    where: AggregateAttributesQueryInput;
};
export declare type RootQueryCollectionsArgs = {
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<CollectionSortKeySortInput>;
    where?: InputMaybe<CollectionsQueryInput>;
};
export declare type RootQueryEventsArgs = {
    filter?: InputMaybe<EventsQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<EventSortKeySortInput>;
    where?: InputMaybe<EventsQueryInput>;
};
export declare type RootQueryMarketArgs = {
    network?: InputMaybe<NetworkInput>;
    where: ActiveMarketQueryInput;
};
export declare type RootQueryMarketsArgs = {
    filter?: InputMaybe<MarketsQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<MarketSortKeySortInput>;
    where?: InputMaybe<MarketsQueryInput>;
};
export declare type RootQueryMintCommentsArgs = {
    networks: Array<NetworkInput>;
    where: MintCommentsQueryInput;
};
export declare type RootQueryMintsArgs = {
    filter?: InputMaybe<MintsQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<MintSortKeySortInput>;
    where?: InputMaybe<MintsQueryInput>;
};
export declare type RootQueryOffchainOrdersArgs = {
    filter?: InputMaybe<OffchainOrdersQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<OffchainOrderSortKeySortInput>;
    where?: InputMaybe<OffchainOrdersQueryInput>;
};
export declare type RootQuerySalesArgs = {
    filter?: InputMaybe<SalesQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<SaleSortKeySortInput>;
    where?: InputMaybe<SalesQueryInput>;
};
export declare type RootQuerySearchArgs = {
    filter?: InputMaybe<SearchFilter>;
    pagination: SearchPaginationInput;
    query: SearchQueryInput;
};
export declare type RootQueryTokenArgs = {
    network?: InputMaybe<NetworkInput>;
    token: TokenInput;
};
export declare type RootQueryTokensArgs = {
    filter?: InputMaybe<TokensQueryFilter>;
    networks?: InputMaybe<Array<NetworkInput>>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<TokenSortInput>;
    where?: InputMaybe<TokensQueryInput>;
};
export declare type Sale = {
    __typename?: 'Sale';
    buyerAddress: Scalars['String'];
    collectionAddress: Scalars['String'];
    networkInfo: NetworkInfo;
    price?: Maybe<PriceAtTime>;
    saleContractAddress?: Maybe<Scalars['String']>;
    saleType: Scalars['String'];
    sellerAddress: Scalars['String'];
    tokenId: Scalars['String'];
    transactionInfo: TransactionInfo;
};
export declare enum SaleSortKey {
    ChainTokenPrice = "CHAIN_TOKEN_PRICE",
    NativePrice = "NATIVE_PRICE",
    None = "NONE",
    Time = "TIME"
}
export declare type SaleSortKeySortInput = {
    sortDirection: SortDirection;
    sortKey: SaleSortKey;
};
export declare enum SaleType {
    CryptopunksSale = "CRYPTOPUNKS_SALE",
    FoundationSale = "FOUNDATION_SALE",
    LilNounsAuctionSale = "LIL_NOUNS_AUCTION_SALE",
    LooksRareSale = "LOOKS_RARE_SALE",
    NounsAuctionSale = "NOUNS_AUCTION_SALE",
    NounsBuilderAuctionSale = "NOUNS_BUILDER_AUCTION_SALE",
    OpenseaBundleSale = "OPENSEA_BUNDLE_SALE",
    OpenseaSingleSale = "OPENSEA_SINGLE_SALE",
    RaribleSale = "RARIBLE_SALE",
    SeaportSale = "SEAPORT_SALE",
    SuperrareSale = "SUPERRARE_SALE",
    ZeroxSale = "ZEROX_SALE",
    ZoraV2AuctionSale = "ZORA_V2_AUCTION_SALE",
    ZoraV3AskSale = "ZORA_V3_ASK_SALE",
    ZoraV3ReserveAuctionSale = "ZORA_V3_RESERVE_AUCTION_SALE"
}
export declare type SaleWithToken = {
    __typename?: 'SaleWithToken';
    sale: Sale;
    token?: Maybe<Token>;
};
export declare type SaleWithTokenConnection = {
    __typename?: 'SaleWithTokenConnection';
    nodes: Array<SaleWithToken>;
    pageInfo: PageInfo;
};
export declare type SalesBucket = {
    __typename?: 'SalesBucket';
    count: Scalars['Int'];
    date: Scalars['datetime'];
};
export declare type SalesQueryFilter = {
    priceFilter?: InputMaybe<PriceFilter>;
    saleTypes?: InputMaybe<Array<SaleType>>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type SalesQueryInput = {
    buyerAddresses?: InputMaybe<Array<Scalars['String']>>;
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type SalesVolume = {
    __typename?: 'SalesVolume';
    chainTokenPrice: Scalars['Float'];
    totalCount: Scalars['Int'];
    usdcPrice: Scalars['Float'];
};
export declare type SalesVolumeFilter = {
    saleTypes?: InputMaybe<Array<SaleType>>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type SeaportCounterIncrementedProperties = {
    __typename?: 'SeaportCounterIncrementedProperties';
    newCounter: Scalars['String'];
};
export declare type SeaportEvent = {
    __typename?: 'SeaportEvent';
    address: Scalars['String'];
    eventType: SeaportEventType;
    offerer: Scalars['String'];
    orderHash?: Maybe<Scalars['String']>;
    properties?: Maybe<SeaportEventProperties>;
    zone?: Maybe<Scalars['String']>;
};
export declare type SeaportEventProperties = SeaportCounterIncrementedProperties | SeaportOrderFulfilledProperties;
export declare enum SeaportEventType {
    SeaportCounterIncrementedEvent = "SEAPORT_COUNTER_INCREMENTED_EVENT",
    SeaportOrderCancelledEvent = "SEAPORT_ORDER_CANCELLED_EVENT",
    SeaportOrderFulfilledEvent = "SEAPORT_ORDER_FULFILLED_EVENT",
    SeaportOrderValidatedEvent = "SEAPORT_ORDER_VALIDATED_EVENT"
}
export declare type SeaportOrder = {
    __typename?: 'SeaportOrder';
    conduitKey: Scalars['String'];
    considerations: Array<SeaportOrderItem>;
    counter: Scalars['String'];
    endTime: Scalars['datetime'];
    offerer: Scalars['String'];
    offers: Array<SeaportOrderItem>;
    orderHash: Scalars['String'];
    orderType: Scalars['String'];
    price: PriceAtTime;
    salt: Scalars['String'];
    schemaHash: Scalars['String'];
    signature: Scalars['String'];
    startTime: Scalars['datetime'];
    zone: Scalars['String'];
    zoneHash: Scalars['String'];
};
export declare type SeaportOrderFulfilledProperties = {
    __typename?: 'SeaportOrderFulfilledProperties';
    consideration: Array<ReceivedItem>;
    offer: Array<SpentItem>;
    recipient: Scalars['String'];
};
export declare type SeaportOrderItem = {
    __typename?: 'SeaportOrderItem';
    address: Scalars['String'];
    criteria?: Maybe<Scalars['String']>;
    endAmount: Scalars['String'];
    endPrice?: Maybe<PriceAtTime>;
    itemType: Scalars['String'];
    recipient?: Maybe<Scalars['String']>;
    startAmount: Scalars['String'];
    startPrice?: Maybe<PriceAtTime>;
    tokenId?: Maybe<Scalars['String']>;
};
export declare type SearchFilter = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    entityType?: InputMaybe<SearchableEntity>;
};
export declare type SearchPaginationInput = {
    after?: InputMaybe<Scalars['String']>;
    limit: Scalars['Int'];
};
export declare type SearchQueryInput = {
    text: Scalars['String'];
};
export declare type SearchResult = {
    __typename?: 'SearchResult';
    collectionAddress: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    entity?: Maybe<TokenCollection>;
    entityType: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    networkInfo: NetworkInfo;
    tokenId?: Maybe<Scalars['String']>;
};
export declare type SearchResultConnection = {
    __typename?: 'SearchResultConnection';
    nodes: Array<SearchResult>;
    pageInfo: PageInfo;
};
export declare enum SearchableEntity {
    Collection = "COLLECTION",
    Token = "TOKEN"
}
export declare enum SortDirection {
    Asc = "ASC",
    Desc = "DESC"
}
export declare type SpentItem = {
    __typename?: 'SpentItem';
    address: Scalars['String'];
    amount: Scalars['String'];
    itemType: Scalars['String'];
    price?: Maybe<PriceAtTime>;
    tokenId: Scalars['String'];
};
export declare enum Support {
    Abstain = "ABSTAIN",
    Against = "AGAINST",
    For = "FOR"
}
export declare type TimeFilter = {
    endBlock?: InputMaybe<Scalars['Int']>;
    endDate?: InputMaybe<Scalars['String']>;
    endDatetime?: InputMaybe<Scalars['datetime']>;
    lookbackHours?: InputMaybe<Scalars['Int']>;
    startBlock?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['String']>;
    startDatetime?: InputMaybe<Scalars['datetime']>;
};
export declare type Token = {
    __typename?: 'Token';
    attributes?: Maybe<Array<TokenAttribute>>;
    collectionAddress: Scalars['String'];
    collectionName?: Maybe<Scalars['String']>;
    content?: Maybe<TokenContentMedia>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<TokenContentMedia>;
    lastRefreshTime?: Maybe<Scalars['datetime']>;
    metadata?: Maybe<Scalars['JSONScalar']>;
    mintInfo?: Maybe<MintInfo>;
    name?: Maybe<Scalars['String']>;
    networkInfo: NetworkInfo;
    owner?: Maybe<Scalars['String']>;
    tokenContract?: Maybe<TokenContract>;
    tokenId: Scalars['String'];
    tokenStandard?: Maybe<TokenStandard>;
    tokenUrl?: Maybe<Scalars['String']>;
    tokenUrlMimeType?: Maybe<Scalars['String']>;
};
export declare type TokenAttribute = {
    __typename?: 'TokenAttribute';
    displayType?: Maybe<Scalars['String']>;
    traitType?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
export declare type TokenCollection = Collection | Token;
export declare type TokenContentMedia = {
    __typename?: 'TokenContentMedia';
    mediaEncoding?: Maybe<ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
export declare type TokenContract = {
    __typename?: 'TokenContract';
    chain: Scalars['Int'];
    collectionAddress: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    network: Scalars['String'];
    symbol?: Maybe<Scalars['String']>;
    totalSupply?: Maybe<Scalars['Int']>;
};
export declare type TokenInput = {
    address: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type TokenSortInput = {
    sortAxis?: InputMaybe<MarketCategory>;
    sortDirection: SortDirection;
    sortKey: TokenSortKey;
};
export declare enum TokenSortKey {
    ChainTokenPrice = "CHAIN_TOKEN_PRICE",
    Minted = "MINTED",
    NativePrice = "NATIVE_PRICE",
    None = "NONE",
    TimedSaleEnding = "TIMED_SALE_ENDING",
    TokenId = "TOKEN_ID",
    Transferred = "TRANSFERRED"
}
export declare enum TokenStandard {
    Erc721 = "ERC721",
    Erc1155 = "ERC1155"
}
export declare type TokenWithFullMarketHistory = {
    __typename?: 'TokenWithFullMarketHistory';
    events: Array<Event>;
    markets: Array<Market>;
    sales: Array<Sale>;
    token: Token;
};
export declare type TokenWithFullMarketHistoryEventsArgs = {
    filter?: InputMaybe<EventsQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<EventSortKeySortInput>;
};
export declare type TokenWithFullMarketHistoryMarketsArgs = {
    filter?: InputMaybe<MarketsQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<MarketSortKeySortInput>;
};
export declare type TokenWithFullMarketHistorySalesArgs = {
    filter?: InputMaybe<SalesQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<SaleSortKeySortInput>;
};
export declare type TokenWithMarketsSummary = {
    __typename?: 'TokenWithMarketsSummary';
    events: Array<Event>;
    marketsSummary: Array<Market>;
    sales: Array<Sale>;
    token: Token;
};
export declare type TokenWithMarketsSummaryEventsArgs = {
    filter?: InputMaybe<EventsQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<EventSortKeySortInput>;
};
export declare type TokenWithMarketsSummarySalesArgs = {
    filter?: InputMaybe<SalesQueryFilter>;
    pagination?: InputMaybe<PaginationInput>;
    sort?: InputMaybe<SaleSortKeySortInput>;
};
export declare type TokenWithMarketsSummaryConnection = {
    __typename?: 'TokenWithMarketsSummaryConnection';
    nodes: Array<TokenWithMarketsSummary>;
    pageInfo: PageInfo;
};
export declare type TokensQueryFilter = {
    attributeFilters?: InputMaybe<Array<AttributeFilter>>;
    marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
    mediaType?: InputMaybe<MediaType>;
    priceFilter?: InputMaybe<PriceFilter>;
    timeFilter?: InputMaybe<TimeFilter>;
};
export declare type TokensQueryInput = {
    collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
    ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
    tokens?: InputMaybe<Array<TokenInput>>;
};
export declare type TransactionInfo = {
    __typename?: 'TransactionInfo';
    blockNumber: Scalars['Int'];
    blockTimestamp: Scalars['datetime'];
    logIndex?: Maybe<Scalars['Int']>;
    transactionHash?: Maybe<Scalars['String']>;
};
export declare type TransferEvent = {
    __typename?: 'TransferEvent';
    collectionAddress: Scalars['String'];
    fromAddress: Scalars['String'];
    toAddress: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type UnsupportedEncodingTypes = {
    __typename?: 'UnsupportedEncodingTypes';
    original: Scalars['String'];
};
export declare type V1Ask = {
    __typename?: 'V1Ask';
    address: Scalars['String'];
    amount: PriceAtTime;
    collectionAddress: Scalars['String'];
    currency: Scalars['String'];
    tokenId: Scalars['String'];
    tokenOwner?: Maybe<Scalars['String']>;
    v1AskStatus: Scalars['String'];
};
export declare type V1BidShare = {
    __typename?: 'V1BidShare';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    creator: Scalars['String'];
    owner: Scalars['String'];
    previousOwner: Scalars['String'];
    tokenId: Scalars['String'];
    v1BidShareStatus: Scalars['String'];
};
export declare type V1MarketAskCreatedEventProperties = {
    __typename?: 'V1MarketAskCreatedEventProperties';
    amount: Scalars['String'];
    currency: Scalars['String'];
    price: PriceAtTime;
};
export declare type V1MarketAskRemovedEventProperties = {
    __typename?: 'V1MarketAskRemovedEventProperties';
    amount: Scalars['String'];
    currency: Scalars['String'];
    price: PriceAtTime;
};
export declare type V1MarketBidShareUpdatedEventProperties = {
    __typename?: 'V1MarketBidShareUpdatedEventProperties';
    creator: Scalars['String'];
    owner: Scalars['String'];
    previousOwner: Scalars['String'];
};
export declare type V1MarketEvent = {
    __typename?: 'V1MarketEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    properties: V1MarketEventProperties;
    tokenId: Scalars['String'];
    v1MarketEventType: V1MarketEventType;
};
export declare type V1MarketEventProperties = V1MarketAskCreatedEventProperties | V1MarketAskRemovedEventProperties | V1MarketBidShareUpdatedEventProperties | V1MarketOfferCreatedEventProperties | V1MarketOfferFinalizedEventProperties | V1MarketOfferRemovedEventProperties;
export declare enum V1MarketEventType {
    V1MarketAskCreated = "V1_MARKET_ASK_CREATED",
    V1MarketAskRemoved = "V1_MARKET_ASK_REMOVED",
    V1MarketBidCreated = "V1_MARKET_BID_CREATED",
    V1MarketBidFinalized = "V1_MARKET_BID_FINALIZED",
    V1MarketBidRemoved = "V1_MARKET_BID_REMOVED",
    V1MarketBidShareUpdated = "V1_MARKET_BID_SHARE_UPDATED"
}
export declare type V1MarketOfferCreatedEventProperties = {
    __typename?: 'V1MarketOfferCreatedEventProperties';
    amount: Scalars['String'];
    bidder: Scalars['String'];
    currency: Scalars['String'];
    price: PriceAtTime;
    recipient: Scalars['String'];
    sellOnShare: Scalars['String'];
};
export declare type V1MarketOfferFinalizedEventProperties = {
    __typename?: 'V1MarketOfferFinalizedEventProperties';
    amount: Scalars['String'];
    bidder: Scalars['String'];
    currency: Scalars['String'];
    price: PriceAtTime;
    recipient: Scalars['String'];
    sellOnShare: Scalars['String'];
};
export declare type V1MarketOfferRemovedEventProperties = {
    __typename?: 'V1MarketOfferRemovedEventProperties';
    amount: Scalars['String'];
    bidder: Scalars['String'];
    currency: Scalars['String'];
    price: PriceAtTime;
    recipient: Scalars['String'];
    sellOnShare: Scalars['String'];
};
export declare type V1MediaEvent = {
    __typename?: 'V1MediaEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    eventType: V1MediaEventType;
    owner: Scalars['String'];
    tokenId: Scalars['String'];
    uri: Scalars['String'];
};
export declare enum V1MediaEventType {
    V1MediaTokenMetadataUriUpdatedEvent = "V1_MEDIA_TOKEN_METADATA_URI_UPDATED_EVENT",
    V1MediaTokenUriUpdatedEvent = "V1_MEDIA_TOKEN_URI_UPDATED_EVENT"
}
export declare type V1Offer = {
    __typename?: 'V1Offer';
    address: Scalars['String'];
    amount: PriceAtTime;
    bidder: Scalars['String'];
    collectionAddress: Scalars['String'];
    currency: Scalars['String'];
    recipient: Scalars['String'];
    sellOnShare: Scalars['String'];
    tokenId: Scalars['String'];
    v1OfferStatus: Scalars['String'];
};
export declare type V2Auction = {
    __typename?: 'V2Auction';
    address: Scalars['String'];
    amountCuratorReceived?: Maybe<PriceAtTime>;
    amountTokenOwnerReceived?: Maybe<PriceAtTime>;
    approved: Scalars['Boolean'];
    auctionCurrency: Scalars['String'];
    auctionId: Scalars['String'];
    collectionAddress: Scalars['String'];
    curator: Scalars['String'];
    curatorFeePercentage: Scalars['Int'];
    duration: Scalars['String'];
    estimatedExpirationTime?: Maybe<Scalars['datetime']>;
    firstBidTime?: Maybe<Scalars['datetime']>;
    highestBidPrice?: Maybe<PriceAtTime>;
    highestBidder?: Maybe<Scalars['String']>;
    reservePrice: PriceAtTime;
    tokenId: Scalars['String'];
    tokenOwner: Scalars['String'];
    v2AuctionStatus: Scalars['String'];
};
export declare type V2AuctionApprovalUpdatedEventProperties = {
    __typename?: 'V2AuctionApprovalUpdatedEventProperties';
    approved: Scalars['Boolean'];
};
export declare type V2AuctionBidEventProperties = {
    __typename?: 'V2AuctionBidEventProperties';
    extended: Scalars['Boolean'];
    firstBid: Scalars['Boolean'];
    price: PriceAtTime;
    sender: Scalars['String'];
    value: Scalars['String'];
};
export declare type V2AuctionCanceledEventProperties = {
    __typename?: 'V2AuctionCanceledEventProperties';
    tokenOwner: Scalars['String'];
};
export declare type V2AuctionCreatedEventProperties = {
    __typename?: 'V2AuctionCreatedEventProperties';
    auctionCurrency: Scalars['String'];
    curator: Scalars['String'];
    curatorFeePercentage: Scalars['Int'];
    duration: Scalars['String'];
    price: PriceAtTime;
    reservePrice: Scalars['String'];
    tokenOwner: Scalars['String'];
};
export declare type V2AuctionDurationExtendedEventProperties = {
    __typename?: 'V2AuctionDurationExtendedEventProperties';
    duration: Scalars['String'];
};
export declare type V2AuctionEndedEventProperties = {
    __typename?: 'V2AuctionEndedEventProperties';
    amount: Scalars['String'];
    auctionCurrency: Scalars['String'];
    curator: Scalars['String'];
    curatorFee: Scalars['String'];
    tokenOwner: Scalars['String'];
    winner: Scalars['String'];
};
export declare type V2AuctionEvent = {
    __typename?: 'V2AuctionEvent';
    address: Scalars['String'];
    auctionId: Scalars['Int'];
    collectionAddress: Scalars['String'];
    properties: V2AuctionEventProperties;
    tokenId: Scalars['String'];
    v2AuctionEventType: V2AuctionEventType;
};
export declare type V2AuctionEventProperties = V2AuctionApprovalUpdatedEventProperties | V2AuctionBidEventProperties | V2AuctionCanceledEventProperties | V2AuctionCreatedEventProperties | V2AuctionDurationExtendedEventProperties | V2AuctionEndedEventProperties | V2AuctionReservePriceUpdatedEventProperties;
export declare enum V2AuctionEventType {
    V2AuctionApprovalUpdated = "V2_AUCTION_APPROVAL_UPDATED",
    V2AuctionBid = "V2_AUCTION_BID",
    V2AuctionCanceled = "V2_AUCTION_CANCELED",
    V2AuctionCreated = "V2_AUCTION_CREATED",
    V2AuctionDurationExtended = "V2_AUCTION_DURATION_EXTENDED",
    V2AuctionEnded = "V2_AUCTION_ENDED",
    V2AuctionReservePriceUpdated = "V2_AUCTION_RESERVE_PRICE_UPDATED"
}
export declare type V2AuctionReservePriceUpdatedEventProperties = {
    __typename?: 'V2AuctionReservePriceUpdatedEventProperties';
    price: PriceAtTime;
    reservePrice: Scalars['String'];
};
export declare type V3Ask = {
    __typename?: 'V3Ask';
    address: Scalars['String'];
    askCurrency: Scalars['String'];
    askPrice: PriceAtTime;
    buyer?: Maybe<Scalars['String']>;
    collectionAddress: Scalars['String'];
    finder?: Maybe<Scalars['String']>;
    findersFeeBps?: Maybe<Scalars['Int']>;
    seller: Scalars['String'];
    sellerFundsRecipient?: Maybe<Scalars['String']>;
    tokenId: Scalars['String'];
    v3AskStatus: Scalars['String'];
};
export declare type V3AskCanceledEventProperties = {
    __typename?: 'V3AskCanceledEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    findersFeeBps: Scalars['Int'];
    price: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
};
export declare type V3AskCreatedEventProperties = {
    __typename?: 'V3AskCreatedEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    findersFeeBps: Scalars['Int'];
    price: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
};
export declare type V3AskEvent = {
    __typename?: 'V3AskEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    properties: V3AskEventProperties;
    tokenId: Scalars['String'];
    v3AskEventType: V3AskEventType;
};
export declare type V3AskEventProperties = V3AskCanceledEventProperties | V3AskCreatedEventProperties | V3AskFilledEventProperties | V3AskPriceUpdatedEventProperties | V3AsksCoreEthAskEventProperties | V3AsksCoreEthAskFilledEventProperties | V3AsksCoreEthRoyaltyPayoutEventProperties | V3PrivateAskEventProperties;
export declare enum V3AskEventType {
    V3AsksCoreEthCanceled = "V3_ASKS_CORE_ETH_CANCELED",
    V3AsksCoreEthCreated = "V3_ASKS_CORE_ETH_CREATED",
    V3AsksCoreEthFilled = "V3_ASKS_CORE_ETH_FILLED",
    V3AsksCoreEthPriceUpdated = "V3_ASKS_CORE_ETH_PRICE_UPDATED",
    V3AsksCoreEthRoyaltyPayout = "V3_ASKS_CORE_ETH_ROYALTY_PAYOUT",
    V3AskCanceled = "V3_ASK_CANCELED",
    V3AskCreated = "V3_ASK_CREATED",
    V3AskFilled = "V3_ASK_FILLED",
    V3AskPriceUpdated = "V3_ASK_PRICE_UPDATED",
    V3PrivateAskCanceled = "V3_PRIVATE_ASK_CANCELED",
    V3PrivateAskCreated = "V3_PRIVATE_ASK_CREATED",
    V3PrivateAskFilled = "V3_PRIVATE_ASK_FILLED",
    V3PrivateAskPriceUpdated = "V3_PRIVATE_ASK_PRICE_UPDATED"
}
export declare type V3AskFilledEventProperties = {
    __typename?: 'V3AskFilledEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    buyer: Scalars['String'];
    finder: Scalars['String'];
    findersFeeBps: Scalars['Int'];
    price: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
};
export declare type V3AskPriceUpdatedEventProperties = {
    __typename?: 'V3AskPriceUpdatedEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    findersFeeBps: Scalars['Int'];
    price: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
};
export declare type V3AsksCoreEthAskEventProperties = {
    __typename?: 'V3AsksCoreEthAskEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    price: PriceAtTime;
    seller: Scalars['String'];
    tokenContract: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type V3AsksCoreEthAskFilledEventProperties = {
    __typename?: 'V3AsksCoreEthAskFilledEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    buyer: Scalars['String'];
    price: PriceAtTime;
    seller: Scalars['String'];
    tokenContract: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type V3AsksCoreEthRoyaltyPayoutEventProperties = {
    __typename?: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
    amount: PriceAtTime;
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    recipient: Scalars['String'];
    tokenContract: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type V3ModuleManagerEvent = {
    __typename?: 'V3ModuleManagerEvent';
    address: Scalars['String'];
    approved: Scalars['Boolean'];
    eventType: V3ModuleManagerEventType;
    moduleAddress: Scalars['String'];
    userAddress: Scalars['String'];
};
export declare enum V3ModuleManagerEventType {
    V3ModuleManagerApproved = "V3_MODULE_MANAGER_APPROVED"
}
export declare type V3PrivateAskEventProperties = {
    __typename?: 'V3PrivateAskEventProperties';
    askCurrency: Scalars['String'];
    askPrice: Scalars['String'];
    buyer: Scalars['String'];
    price: PriceAtTime;
    seller: Scalars['String'];
    tokenContract: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type V3ReserveAuction = {
    __typename?: 'V3ReserveAuction';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    currency: Scalars['String'];
    duration: Scalars['String'];
    estimatedDurationTime?: Maybe<Scalars['datetime']>;
    extended: Scalars['Boolean'];
    finder: Scalars['String'];
    findersFeeBps: Scalars['String'];
    firstBid: Scalars['Boolean'];
    firstBidTime: Scalars['String'];
    highestBid: Scalars['String'];
    highestBidPrice?: Maybe<PriceAtTime>;
    highestBidder: Scalars['String'];
    price?: Maybe<PriceAtTime>;
    reserve: Scalars['String'];
    reservePrice: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
    startTime: Scalars['String'];
    status: Scalars['String'];
    tokenId: Scalars['String'];
};
export declare type V3ReserveAuctionAuctionProperties = {
    __typename?: 'V3ReserveAuctionAuctionProperties';
    currency: Scalars['String'];
    duration: Scalars['String'];
    finder: Scalars['String'];
    findersFeeBps: Scalars['String'];
    firstBidTime: Scalars['String'];
    highestBid: Scalars['String'];
    highestBidPrice: PriceAtTime;
    highestBidder: Scalars['String'];
    reserve: Scalars['String'];
    reservePrice: PriceAtTime;
    seller: Scalars['String'];
    sellerFundsRecipient: Scalars['String'];
    startTime: Scalars['String'];
};
export declare type V3ReserveAuctionEvent = {
    __typename?: 'V3ReserveAuctionEvent';
    address: Scalars['String'];
    collectionAddress: Scalars['String'];
    eventType: V3ReserveAuctionEventType;
    properties: V3ReserveAuctionEventProperties;
    tokenId: Scalars['String'];
};
export declare type V3ReserveAuctionEventProperties = V3ReserveAuctionV1AuctionBidProperties | V3ReserveAuctionV1AuctionCanceledProperties | V3ReserveAuctionV1AuctionCreatedProperties | V3ReserveAuctionV1AuctionEndedProperties | V3ReserveAuctionV1AuctionReservePriceUpdatedProperties;
export declare enum V3ReserveAuctionEventType {
    V3ReserveAuctionBid = "V3_RESERVE_AUCTION_BID",
    V3ReserveAuctionCanceled = "V3_RESERVE_AUCTION_CANCELED",
    V3ReserveAuctionCreated = "V3_RESERVE_AUCTION_CREATED",
    V3ReserveAuctionEnded = "V3_RESERVE_AUCTION_ENDED",
    V3ReserveAuctionReservePriceUpdated = "V3_RESERVE_AUCTION_RESERVE_PRICE_UPDATED"
}
export declare type V3ReserveAuctionV1AuctionBidProperties = {
    __typename?: 'V3ReserveAuctionV1AuctionBidProperties';
    auction: V3ReserveAuctionAuctionProperties;
    extended: Scalars['Boolean'];
    firstBid: Scalars['Boolean'];
    price: PriceAtTime;
};
export declare type V3ReserveAuctionV1AuctionCanceledProperties = {
    __typename?: 'V3ReserveAuctionV1AuctionCanceledProperties';
    auction: V3ReserveAuctionAuctionProperties;
};
export declare type V3ReserveAuctionV1AuctionCreatedProperties = {
    __typename?: 'V3ReserveAuctionV1AuctionCreatedProperties';
    auction: V3ReserveAuctionAuctionProperties;
};
export declare type V3ReserveAuctionV1AuctionEndedProperties = {
    __typename?: 'V3ReserveAuctionV1AuctionEndedProperties';
    auction: V3ReserveAuctionAuctionProperties;
};
export declare type V3ReserveAuctionV1AuctionReservePriceUpdatedProperties = {
    __typename?: 'V3ReserveAuctionV1AuctionReservePriceUpdatedProperties';
    auction: V3ReserveAuctionAuctionProperties;
};
export declare type VideoEncodingTypes = {
    __typename?: 'VideoEncodingTypes';
    large?: Maybe<Scalars['String']>;
    original: Scalars['String'];
    poster?: Maybe<Scalars['String']>;
    preview?: Maybe<Scalars['String']>;
    thumbnail?: Maybe<Scalars['String']>;
};
export declare const TokenContractInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const PriceSummaryFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TransactionDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const MintDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const FullMediaFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TokenInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TokenDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const NetworkInfoDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CollectionInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CollectionInfoSearchResultFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CollectionDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const PageInfoDefaultFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const OwnerCountInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const LilNounsAuctionInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const NounsAuctionInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V2AuctionMarketPropertiesFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V3ReserveAuctionPropertiesFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ActiveMarketInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const MarketInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V3AskPropertiesFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V1OfferPropertiesFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V1AskPropertiesFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const MarketPropertiesFullFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const MarketDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const MarketsOnMintInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SaleInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TokensSalesInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V1MarketEventPropertiesInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V2AuctionEventPropertiesInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const V3AskEventPropertiesInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const EventInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TokensEventsInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TokenFullDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SeaportOrderItemDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SeaportOrderDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const OffchainOrderInfoFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const EventsDocument: import("graphql/language/ast").DocumentNode;
export declare const MarketDocument: import("graphql/language/ast").DocumentNode;
export declare const MarketsDocument: import("graphql/language/ast").DocumentNode;
export declare const MintsDocument: import("graphql/language/ast").DocumentNode;
export declare const CollectionsDocument: import("graphql/language/ast").DocumentNode;
export declare const SalesDocument: import("graphql/language/ast").DocumentNode;
export declare const TokensDocument: import("graphql/language/ast").DocumentNode;
export declare const TokenDocument: import("graphql/language/ast").DocumentNode;
export declare const OffchainOrdersDocument: import("graphql/language/ast").DocumentNode;
export declare const AggregateAttributesDocument: import("graphql/language/ast").DocumentNode;
export declare const OwnersByCountDocument: import("graphql/language/ast").DocumentNode;
export declare const OwnersByCount1155Document: import("graphql/language/ast").DocumentNode;
export declare const SalesVolumeDocument: import("graphql/language/ast").DocumentNode;
export declare const OwnerCountDocument: import("graphql/language/ast").DocumentNode;
export declare const NftCountDocument: import("graphql/language/ast").DocumentNode;
export declare const FloorPriceDocument: import("graphql/language/ast").DocumentNode;
export declare const CollectionStatsAggregateDocument: import("graphql/language/ast").DocumentNode;
export declare const SearchDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    events(variables: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery>;
    market(variables: MarketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketQuery>;
    markets(variables: MarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketsQuery>;
    mints(variables: MintsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MintsQuery>;
    collections(variables: CollectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionsQuery>;
    sales(variables: SalesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesQuery>;
    tokens(variables: TokensQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokensQuery>;
    token(variables: TokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenQuery>;
    offchainOrders(variables?: Exact<{
        networks?: InputMaybe<NetworkInput | NetworkInput[]> | undefined;
        where?: InputMaybe<OffchainOrdersQueryInput> | undefined;
        filter?: InputMaybe<OffchainOrdersQueryFilter> | undefined;
        sort?: InputMaybe<OffchainOrderSortKeySortInput> | undefined;
        pagination?: InputMaybe<PaginationInput> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<OffchainOrdersQuery>;
    aggregateAttributes(variables: AggregateAttributesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AggregateAttributesQuery>;
    ownersByCount(variables: OwnersByCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnersByCountQuery>;
    ownersByCount1155(variables: OwnersByCount1155QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnersByCount1155Query>;
    salesVolume(variables: SalesVolumeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesVolumeQuery>;
    ownerCount(variables: OwnerCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnerCountQuery>;
    nftCount(variables: NftCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NftCountQuery>;
    floorPrice(variables: FloorPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FloorPriceQuery>;
    collectionStatsAggregate(variables: CollectionStatsAggregateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionStatsAggregateQuery>;
    search(variables: SearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
export declare type TokenContractInfoFragment = {
    __typename?: 'TokenContract';
    name?: string | null;
    network: string;
    description?: string | null;
    collectionAddress: string;
    symbol?: string | null;
    chain: number;
};
export declare type FullMediaFragment = {
    __typename?: 'TokenContentMedia';
    size?: string | null;
    url?: string | null;
    mimeType?: string | null;
    mediaEncoding?: {
        __typename: 'AudioEncodingTypes';
        original: string;
        large?: string | null;
    } | {
        __typename: 'ImageEncodingTypes';
        original: string;
        large?: string | null;
        poster?: string | null;
        thumbnail?: string | null;
    } | {
        __typename: 'UnsupportedEncodingTypes';
        original: string;
    } | {
        __typename: 'VideoEncodingTypes';
        original: string;
        large?: string | null;
        poster?: string | null;
        preview?: string | null;
        thumbnail?: string | null;
    } | null;
};
export declare type PriceSummaryFragment = {
    __typename?: 'PriceAtTime';
    blockNumber: number;
    chainTokenPrice?: {
        __typename?: 'CurrencyAmount';
        decimal: number;
        raw: string;
    } | null;
    nativePrice: {
        __typename?: 'CurrencyAmount';
        decimal: number;
        raw: string;
        currency: {
            __typename?: 'Currency';
            address: string;
            decimals: number;
            name: string;
        };
    };
    usdcPrice?: {
        __typename?: 'CurrencyAmount';
        decimal: number;
        raw: string;
    } | null;
};
export declare type MintDetailsFragment = {
    __typename?: 'MintInfo';
    originatorAddress: string;
    toAddress: string;
    price?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    mintContext: {
        __typename: 'TransactionInfo';
        blockNumber: number;
        blockTimestamp: any;
        transactionHash?: string | null;
        logIndex?: number | null;
    };
};
export declare type TransactionDetailsFragment = {
    __typename?: 'TransactionInfo';
    blockNumber: number;
    blockTimestamp: any;
    transactionHash?: string | null;
    logIndex?: number | null;
};
export declare type SaleInfoFragment = {
    __typename?: 'Sale';
    saleContractAddress?: string | null;
    buyerAddress: string;
    collectionAddress: string;
    sellerAddress: string;
    tokenId: string;
    transactionInfo: {
        __typename?: 'TransactionInfo';
        blockNumber: number;
        blockTimestamp: any;
        transactionHash?: string | null;
        logIndex?: number | null;
    };
    price?: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type V2AuctionMarketPropertiesFragment = {
    __typename: 'V2Auction';
    firstBidTime?: any | null;
    highestBidder?: string | null;
    curator: string;
    collectionAddress: string;
    curatorFeePercentage: number;
    tokenId: string;
    auctionCurrency: string;
    duration: string;
    estimatedExpirationTime?: any | null;
    v2AuctionStatus: string;
    tokenOwner: string;
    address: string;
    auctionId: string;
    approved: boolean;
    reservePrice: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
    highestBidPrice?: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type V3AskPropertiesFragment = {
    __typename: 'V3Ask';
    buyer?: string | null;
    finder?: string | null;
    findersFeeBps?: number | null;
    sellerFundsRecipient?: string | null;
    v3AskStatus: string;
    seller: string;
    address: string;
    askCurrency: string;
    collectionAddress: string;
    askPrice: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
export declare type V1OfferPropertiesFragment = {
    __typename?: 'V1Offer';
    v1OfferStatus: string;
    sellOnShare: string;
    bidder: string;
    currency: string;
    amount: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
export declare type V1AskPropertiesFragment = {
    __typename?: 'V1Ask';
    v1AskStatus: string;
    currency: string;
    amount: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type MarketPropertiesFull_LilNounsAuction_Fragment = {
    __typename: 'LilNounsAuction';
};
declare type MarketPropertiesFull_NounsAuction_Fragment = {
    __typename: 'NounsAuction';
};
declare type MarketPropertiesFull_NounsBuilderAuction_Fragment = {
    __typename: 'NounsBuilderAuction';
};
declare type MarketPropertiesFull_V1Ask_Fragment = {
    __typename: 'V1Ask';
    v1AskStatus: string;
    currency: string;
    amount: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type MarketPropertiesFull_V1BidShare_Fragment = {
    __typename: 'V1BidShare';
};
declare type MarketPropertiesFull_V1Offer_Fragment = {
    __typename: 'V1Offer';
    v1OfferStatus: string;
    sellOnShare: string;
    bidder: string;
    currency: string;
    amount: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type MarketPropertiesFull_V2Auction_Fragment = {
    __typename: 'V2Auction';
    firstBidTime?: any | null;
    highestBidder?: string | null;
    curator: string;
    collectionAddress: string;
    curatorFeePercentage: number;
    tokenId: string;
    auctionCurrency: string;
    duration: string;
    estimatedExpirationTime?: any | null;
    v2AuctionStatus: string;
    tokenOwner: string;
    address: string;
    auctionId: string;
    approved: boolean;
    reservePrice: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
    highestBidPrice?: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
declare type MarketPropertiesFull_V3Ask_Fragment = {
    __typename: 'V3Ask';
    buyer?: string | null;
    finder?: string | null;
    findersFeeBps?: number | null;
    sellerFundsRecipient?: string | null;
    v3AskStatus: string;
    seller: string;
    address: string;
    askCurrency: string;
    collectionAddress: string;
    askPrice: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type MarketPropertiesFull_V3ReserveAuction_Fragment = {
    __typename: 'V3ReserveAuction';
};
export declare type MarketPropertiesFullFragment = MarketPropertiesFull_LilNounsAuction_Fragment | MarketPropertiesFull_NounsAuction_Fragment | MarketPropertiesFull_NounsBuilderAuction_Fragment | MarketPropertiesFull_V1Ask_Fragment | MarketPropertiesFull_V1BidShare_Fragment | MarketPropertiesFull_V1Offer_Fragment | MarketPropertiesFull_V2Auction_Fragment | MarketPropertiesFull_V3Ask_Fragment | MarketPropertiesFull_V3ReserveAuction_Fragment;
export declare type NetworkInfoDetailsFragment = {
    __typename?: 'NetworkInfo';
    chain: Chain;
    network: Network;
};
export declare type MarketInfoFragment = {
    __typename?: 'Market';
    collectionAddress?: string | null;
    marketAddress: string;
    marketType: MarketType;
    status: string;
    transactionInfo: {
        __typename?: 'TransactionInfo';
        blockNumber: number;
        blockTimestamp: any;
        transactionHash?: string | null;
        logIndex?: number | null;
    };
    price?: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    networkInfo: {
        __typename?: 'NetworkInfo';
        chain: Chain;
        network: Network;
    };
};
export declare type MarketDetailsFragment = {
    __typename?: 'Market';
    properties?: {
        __typename: 'LilNounsAuction';
    } | {
        __typename: 'NounsAuction';
    } | {
        __typename: 'NounsBuilderAuction';
    } | {
        __typename: 'V1Ask';
        v1AskStatus: string;
        currency: string;
        amount: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
    } | {
        __typename: 'V1BidShare';
    } | {
        __typename: 'V1Offer';
        v1OfferStatus: string;
        sellOnShare: string;
        bidder: string;
        currency: string;
        amount: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
    } | {
        __typename: 'V2Auction';
        firstBidTime?: any | null;
        highestBidder?: string | null;
        curator: string;
        collectionAddress: string;
        curatorFeePercentage: number;
        tokenId: string;
        auctionCurrency: string;
        duration: string;
        estimatedExpirationTime?: any | null;
        v2AuctionStatus: string;
        tokenOwner: string;
        address: string;
        auctionId: string;
        approved: boolean;
        reservePrice: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
        highestBidPrice?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | {
        __typename: 'V3Ask';
        buyer?: string | null;
        finder?: string | null;
        findersFeeBps?: number | null;
        sellerFundsRecipient?: string | null;
        v3AskStatus: string;
        seller: string;
        address: string;
        askCurrency: string;
        collectionAddress: string;
        askPrice: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
    } | {
        __typename: 'V3ReserveAuction';
    } | null;
};
export declare type TokenInfoFragment = {
    __typename: 'Token';
    tokenId: string;
    collectionAddress: string;
    lastRefreshTime?: any | null;
    owner?: string | null;
    name?: string | null;
    description?: string | null;
    tokenContract?: {
        __typename?: 'TokenContract';
        name?: string | null;
        network: string;
        description?: string | null;
        collectionAddress: string;
        symbol?: string | null;
        chain: number;
    } | null;
    mintInfo?: {
        __typename?: 'MintInfo';
        originatorAddress: string;
        toAddress: string;
        price?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        mintContext: {
            __typename: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
    } | null;
    image?: {
        __typename?: 'TokenContentMedia';
        size?: string | null;
        url?: string | null;
        mimeType?: string | null;
        mediaEncoding?: {
            __typename: 'AudioEncodingTypes';
            original: string;
            large?: string | null;
        } | {
            __typename: 'ImageEncodingTypes';
            original: string;
            large?: string | null;
            poster?: string | null;
            thumbnail?: string | null;
        } | {
            __typename: 'UnsupportedEncodingTypes';
            original: string;
        } | {
            __typename: 'VideoEncodingTypes';
            original: string;
            large?: string | null;
            poster?: string | null;
            preview?: string | null;
            thumbnail?: string | null;
        } | null;
    } | null;
    content?: {
        __typename?: 'TokenContentMedia';
        size?: string | null;
        url?: string | null;
        mimeType?: string | null;
        mediaEncoding?: {
            __typename: 'AudioEncodingTypes';
            original: string;
            large?: string | null;
        } | {
            __typename: 'ImageEncodingTypes';
            original: string;
            large?: string | null;
            poster?: string | null;
            thumbnail?: string | null;
        } | {
            __typename: 'UnsupportedEncodingTypes';
            original: string;
        } | {
            __typename: 'VideoEncodingTypes';
            original: string;
            large?: string | null;
            poster?: string | null;
            preview?: string | null;
            thumbnail?: string | null;
        } | null;
    } | null;
};
declare type V1MarketEventPropertiesInfo_V1MarketAskCreatedEventProperties_Fragment = {
    __typename: 'V1MarketAskCreatedEventProperties';
    amount: string;
    currency: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V1MarketEventPropertiesInfo_V1MarketAskRemovedEventProperties_Fragment = {
    __typename: 'V1MarketAskRemovedEventProperties';
    amount: string;
    currency: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V1MarketEventPropertiesInfo_V1MarketBidShareUpdatedEventProperties_Fragment = {
    __typename: 'V1MarketBidShareUpdatedEventProperties';
};
declare type V1MarketEventPropertiesInfo_V1MarketOfferCreatedEventProperties_Fragment = {
    __typename: 'V1MarketOfferCreatedEventProperties';
    amount: string;
    currency: string;
    bidder: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V1MarketEventPropertiesInfo_V1MarketOfferFinalizedEventProperties_Fragment = {
    __typename: 'V1MarketOfferFinalizedEventProperties';
    amount: string;
    currency: string;
    bidder: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V1MarketEventPropertiesInfo_V1MarketOfferRemovedEventProperties_Fragment = {
    __typename: 'V1MarketOfferRemovedEventProperties';
    amount: string;
    currency: string;
    bidder: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
export declare type V1MarketEventPropertiesInfoFragment = V1MarketEventPropertiesInfo_V1MarketAskCreatedEventProperties_Fragment | V1MarketEventPropertiesInfo_V1MarketAskRemovedEventProperties_Fragment | V1MarketEventPropertiesInfo_V1MarketBidShareUpdatedEventProperties_Fragment | V1MarketEventPropertiesInfo_V1MarketOfferCreatedEventProperties_Fragment | V1MarketEventPropertiesInfo_V1MarketOfferFinalizedEventProperties_Fragment | V1MarketEventPropertiesInfo_V1MarketOfferRemovedEventProperties_Fragment;
declare type V2AuctionEventPropertiesInfo_V2AuctionApprovalUpdatedEventProperties_Fragment = {
    __typename: 'V2AuctionApprovalUpdatedEventProperties';
    approved: boolean;
};
declare type V2AuctionEventPropertiesInfo_V2AuctionBidEventProperties_Fragment = {
    __typename: 'V2AuctionBidEventProperties';
    sender: string;
    firstBid: boolean;
    extended: boolean;
    value: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V2AuctionEventPropertiesInfo_V2AuctionCanceledEventProperties_Fragment = {
    __typename: 'V2AuctionCanceledEventProperties';
    tokenOwner: string;
};
declare type V2AuctionEventPropertiesInfo_V2AuctionCreatedEventProperties_Fragment = {
    __typename: 'V2AuctionCreatedEventProperties';
    auctionCurrency: string;
    tokenOwner: string;
    curator: string;
    curatorFeePercentage: number;
    duration: string;
    reservePrice: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V2AuctionEventPropertiesInfo_V2AuctionDurationExtendedEventProperties_Fragment = {
    __typename: 'V2AuctionDurationExtendedEventProperties';
    duration: string;
};
declare type V2AuctionEventPropertiesInfo_V2AuctionEndedEventProperties_Fragment = {
    __typename: 'V2AuctionEndedEventProperties';
    tokenOwner: string;
    curator: string;
    winner: string;
    auctionCurrency: string;
    amount: string;
    curatorFee: string;
};
declare type V2AuctionEventPropertiesInfo_V2AuctionReservePriceUpdatedEventProperties_Fragment = {
    __typename: 'V2AuctionReservePriceUpdatedEventProperties';
    reservePrice: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
export declare type V2AuctionEventPropertiesInfoFragment = V2AuctionEventPropertiesInfo_V2AuctionApprovalUpdatedEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionBidEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionCanceledEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionCreatedEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionDurationExtendedEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionEndedEventProperties_Fragment | V2AuctionEventPropertiesInfo_V2AuctionReservePriceUpdatedEventProperties_Fragment;
declare type V3AskEventPropertiesInfo_V3AskCanceledEventProperties_Fragment = {
    __typename: 'V3AskCanceledEventProperties';
    seller: string;
    sellerFundsRecipient: string;
    askCurrency: string;
    askPrice: string;
    findersFeeBps: number;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V3AskEventPropertiesInfo_V3AskCreatedEventProperties_Fragment = {
    __typename: 'V3AskCreatedEventProperties';
    seller: string;
    sellerFundsRecipient: string;
    askCurrency: string;
    askPrice: string;
    findersFeeBps: number;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V3AskEventPropertiesInfo_V3AskFilledEventProperties_Fragment = {
    __typename: 'V3AskFilledEventProperties';
    seller: string;
    sellerFundsRecipient: string;
    askCurrency: string;
    askPrice: string;
    findersFeeBps: number;
    finder: string;
    buyer: string;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V3AskEventPropertiesInfo_V3AskPriceUpdatedEventProperties_Fragment = {
    __typename: 'V3AskPriceUpdatedEventProperties';
    seller: string;
    sellerFundsRecipient: string;
    askCurrency: string;
    askPrice: string;
    findersFeeBps: number;
    price: {
        __typename?: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
};
declare type V3AskEventPropertiesInfo_V3AsksCoreEthAskEventProperties_Fragment = {
    __typename: 'V3AsksCoreEthAskEventProperties';
};
declare type V3AskEventPropertiesInfo_V3AsksCoreEthAskFilledEventProperties_Fragment = {
    __typename: 'V3AsksCoreEthAskFilledEventProperties';
};
declare type V3AskEventPropertiesInfo_V3AsksCoreEthRoyaltyPayoutEventProperties_Fragment = {
    __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
};
declare type V3AskEventPropertiesInfo_V3PrivateAskEventProperties_Fragment = {
    __typename: 'V3PrivateAskEventProperties';
};
export declare type V3AskEventPropertiesInfoFragment = V3AskEventPropertiesInfo_V3AskCanceledEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskCreatedEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskFilledEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskPriceUpdatedEventProperties_Fragment | V3AskEventPropertiesInfo_V3AsksCoreEthAskEventProperties_Fragment | V3AskEventPropertiesInfo_V3AsksCoreEthAskFilledEventProperties_Fragment | V3AskEventPropertiesInfo_V3AsksCoreEthRoyaltyPayoutEventProperties_Fragment | V3AskEventPropertiesInfo_V3PrivateAskEventProperties_Fragment;
export declare type EventInfoFragment = {
    __typename?: 'Event';
    eventType: EventType;
    collectionAddress?: string | null;
    tokenId?: string | null;
    transactionInfo: {
        __typename?: 'TransactionInfo';
        blockNumber: number;
        blockTimestamp: any;
        transactionHash?: string | null;
        logIndex?: number | null;
    };
    properties: {
        __typename: 'ApprovalEvent';
    } | {
        __typename: 'LilNounsAuctionEvent';
    } | {
        __typename: 'MintEvent';
        tokenId: string;
        collectionAddress: string;
        originatorAddress: string;
        toAddress: string;
        price?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | {
        __typename: 'NounsAuctionEvent';
    } | {
        __typename: 'Sale';
    } | {
        __typename: 'SeaportEvent';
    } | {
        __typename: 'TransferEvent';
        fromAddress: string;
        toAddress: string;
        collectionAddress: string;
        tokenId: string;
    } | {
        __typename: 'V1MarketEvent';
        v1MarketEventType: V1MarketEventType;
        address: string;
        collectionAddress: string;
        tokenId: string;
        properties: {
            __typename: 'V1MarketAskCreatedEventProperties';
            amount: string;
            currency: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V1MarketAskRemovedEventProperties';
            amount: string;
            currency: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V1MarketBidShareUpdatedEventProperties';
        } | {
            __typename: 'V1MarketOfferCreatedEventProperties';
            amount: string;
            currency: string;
            bidder: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V1MarketOfferFinalizedEventProperties';
            amount: string;
            currency: string;
            bidder: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V1MarketOfferRemovedEventProperties';
            amount: string;
            currency: string;
            bidder: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        };
    } | {
        __typename: 'V1MediaEvent';
    } | {
        __typename: 'V2AuctionEvent';
        v2AuctionEventType: V2AuctionEventType;
        address: string;
        auctionId: number;
        collectionAddress: string;
        tokenId: string;
        properties: {
            __typename: 'V2AuctionApprovalUpdatedEventProperties';
            approved: boolean;
        } | {
            __typename: 'V2AuctionBidEventProperties';
            sender: string;
            firstBid: boolean;
            extended: boolean;
            value: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V2AuctionCanceledEventProperties';
            tokenOwner: string;
        } | {
            __typename: 'V2AuctionCreatedEventProperties';
            auctionCurrency: string;
            tokenOwner: string;
            curator: string;
            curatorFeePercentage: number;
            duration: string;
            reservePrice: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V2AuctionDurationExtendedEventProperties';
            duration: string;
        } | {
            __typename: 'V2AuctionEndedEventProperties';
            tokenOwner: string;
            curator: string;
            winner: string;
            auctionCurrency: string;
            amount: string;
            curatorFee: string;
        } | {
            __typename: 'V2AuctionReservePriceUpdatedEventProperties';
            reservePrice: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        };
    } | {
        __typename: 'V3AskEvent';
        v3AskEventType: V3AskEventType;
        address: string;
        collectionAddress: string;
        tokenId: string;
        properties: {
            __typename: 'V3AskCanceledEventProperties';
            seller: string;
            sellerFundsRecipient: string;
            askCurrency: string;
            askPrice: string;
            findersFeeBps: number;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V3AskCreatedEventProperties';
            seller: string;
            sellerFundsRecipient: string;
            askCurrency: string;
            askPrice: string;
            findersFeeBps: number;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V3AskFilledEventProperties';
            seller: string;
            sellerFundsRecipient: string;
            askCurrency: string;
            askPrice: string;
            findersFeeBps: number;
            finder: string;
            buyer: string;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V3AskPriceUpdatedEventProperties';
            seller: string;
            sellerFundsRecipient: string;
            askCurrency: string;
            askPrice: string;
            findersFeeBps: number;
            price: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V3AsksCoreEthAskEventProperties';
        } | {
            __typename: 'V3AsksCoreEthAskFilledEventProperties';
        } | {
            __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
        } | {
            __typename: 'V3PrivateAskEventProperties';
        };
    } | {
        __typename: 'V3ModuleManagerEvent';
    } | {
        __typename: 'V3ReserveAuctionEvent';
    };
};
export declare type TokenDetailsFragment = {
    __typename?: 'Token';
    metadata?: any | null;
    tokenUrl?: string | null;
    tokenUrlMimeType?: string | null;
    attributes?: Array<{
        __typename?: 'TokenAttribute';
        traitType?: string | null;
        value?: string | null;
        displayType?: string | null;
    }> | null;
};
export declare type CollectionInfoFragment = {
    __typename?: 'Collection';
    address: string;
    description: string;
    name?: string | null;
    symbol?: string | null;
    totalSupply?: number | null;
    networkInfo: {
        __typename?: 'NetworkInfo';
        chain: Chain;
        network: Network;
    };
};
export declare type CollectionInfoSearchResultFragment = {
    __typename?: 'Collection';
    address: string;
    name?: string | null;
    symbol?: string | null;
    totalSupply?: number | null;
    collectionDescription: string;
};
export declare type CollectionDetailsFragment = {
    __typename?: 'Collection';
    networkInfo: {
        __typename?: 'NetworkInfo';
        chain: Chain;
        network: Network;
    };
    attributes?: Array<{
        __typename?: 'CollectionAttribute';
        traitType?: string | null;
        valueMetrics: Array<{
            __typename?: 'CollectionAttributeValue';
            count: number;
            percent: number;
            value: string;
        }>;
    }> | null;
};
export declare type PageInfoDefaultFragment = {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    limit: number;
};
export declare type OwnerCountInfoFragment = {
    __typename?: 'OwnerCount';
    owner: string;
    count: number;
    tokenIds: Array<string>;
};
export declare type EventsQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    filter?: InputMaybe<EventsQueryFilter>;
    pagination: PaginationInput;
    sort: EventSortKeySortInput;
    where: EventsQueryInput;
}>;
export declare type EventsQuery = {
    __typename?: 'RootQuery';
    events: {
        __typename: 'EventConnection';
        pageInfo: {
            __typename: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename?: 'Event';
            eventType: EventType;
            collectionAddress?: string | null;
            tokenId?: string | null;
            transactionInfo: {
                __typename?: 'TransactionInfo';
                blockNumber: number;
                blockTimestamp: any;
                transactionHash?: string | null;
                logIndex?: number | null;
            };
            properties: {
                __typename: 'ApprovalEvent';
            } | {
                __typename: 'LilNounsAuctionEvent';
            } | {
                __typename: 'MintEvent';
                tokenId: string;
                collectionAddress: string;
                originatorAddress: string;
                toAddress: string;
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
            } | {
                __typename: 'NounsAuctionEvent';
            } | {
                __typename: 'Sale';
            } | {
                __typename: 'SeaportEvent';
            } | {
                __typename: 'TransferEvent';
                fromAddress: string;
                toAddress: string;
                collectionAddress: string;
                tokenId: string;
            } | {
                __typename: 'V1MarketEvent';
                v1MarketEventType: V1MarketEventType;
                address: string;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V1MarketAskCreatedEventProperties';
                    amount: string;
                    currency: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketAskRemovedEventProperties';
                    amount: string;
                    currency: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketBidShareUpdatedEventProperties';
                } | {
                    __typename: 'V1MarketOfferCreatedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketOfferFinalizedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketOfferRemovedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                };
            } | {
                __typename: 'V1MediaEvent';
            } | {
                __typename: 'V2AuctionEvent';
                v2AuctionEventType: V2AuctionEventType;
                address: string;
                auctionId: number;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V2AuctionApprovalUpdatedEventProperties';
                    approved: boolean;
                } | {
                    __typename: 'V2AuctionBidEventProperties';
                    sender: string;
                    firstBid: boolean;
                    extended: boolean;
                    value: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2AuctionCanceledEventProperties';
                    tokenOwner: string;
                } | {
                    __typename: 'V2AuctionCreatedEventProperties';
                    auctionCurrency: string;
                    tokenOwner: string;
                    curator: string;
                    curatorFeePercentage: number;
                    duration: string;
                    reservePrice: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2AuctionDurationExtendedEventProperties';
                    duration: string;
                } | {
                    __typename: 'V2AuctionEndedEventProperties';
                    tokenOwner: string;
                    curator: string;
                    winner: string;
                    auctionCurrency: string;
                    amount: string;
                    curatorFee: string;
                } | {
                    __typename: 'V2AuctionReservePriceUpdatedEventProperties';
                    reservePrice: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                };
            } | {
                __typename: 'V3AskEvent';
                v3AskEventType: V3AskEventType;
                address: string;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V3AskCanceledEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskCreatedEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskFilledEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    finder: string;
                    buyer: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskPriceUpdatedEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AsksCoreEthAskEventProperties';
                } | {
                    __typename: 'V3AsksCoreEthAskFilledEventProperties';
                } | {
                    __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
                } | {
                    __typename: 'V3PrivateAskEventProperties';
                };
            } | {
                __typename: 'V3ModuleManagerEvent';
            } | {
                __typename: 'V3ReserveAuctionEvent';
            };
        }>;
    };
};
export declare type LilNounsAuctionInfoFragment = {
    __typename?: 'LilNounsAuction';
    address: string;
    tokenId: string;
    collectionAddress: string;
    auctionId: string;
    auctionCurrency: string;
    startTime: string;
    endTime: string;
    duration: string;
    firstBidTime?: any | null;
    highestBidder?: string | null;
    estimatedDurationTime?: any | null;
    minBidIncrementPercentage?: number | null;
    winner?: string | null;
    timeBuffer?: number | null;
    highestBidPrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    lilNounsReservePrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    amount?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type NounsAuctionInfoFragment = {
    __typename?: 'NounsAuction';
    address: string;
    tokenId: string;
    collectionAddress: string;
    auctionId: string;
    auctionCurrency: string;
    startTime: string;
    endTime: string;
    duration: string;
    firstBidTime?: any | null;
    highestBidder?: string | null;
    estimatedDurationTime?: any | null;
    minBidIncrementPercentage?: number | null;
    winner?: string | null;
    timeBuffer?: number | null;
    highestBidPrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    nounsReservePrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    amount?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type V3ReserveAuctionPropertiesFragment = {
    __typename?: 'V3ReserveAuction';
    address: string;
    tokenId: string;
    collectionAddress: string;
    status: string;
    firstBid: boolean;
    extended: boolean;
    seller: string;
    reserve: string;
    sellerFundsRecipient: string;
    highestBid: string;
    duration: string;
    startTime: string;
    currency: string;
    finder: string;
    findersFeeBps: string;
    estimatedDurationTime?: any | null;
    v3HighestBidder: string;
    v3FirstBidTime: string;
    price?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    v3AuctionReservePrice: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
    highestBidPrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type ActiveMarketInfoFragment = {
    __typename?: 'ActiveMarket';
    status: string;
    marketAddress: string;
    collectionAddress?: string | null;
    tokenId?: string | null;
    marketType: ActiveMarketType;
    networkInfo: {
        __typename: 'NetworkInfo';
        chain: Chain;
        network: Network;
    };
    transactionInfo: {
        __typename: 'TransactionInfo';
        blockNumber: number;
        blockTimestamp: any;
        transactionHash?: string | null;
        logIndex?: number | null;
    };
    properties?: {
        __typename: 'LilNounsAuction';
        address: string;
        tokenId: string;
        collectionAddress: string;
        auctionId: string;
        auctionCurrency: string;
        startTime: string;
        endTime: string;
        duration: string;
        firstBidTime?: any | null;
        highestBidder?: string | null;
        estimatedDurationTime?: any | null;
        minBidIncrementPercentage?: number | null;
        winner?: string | null;
        timeBuffer?: number | null;
        highestBidPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        lilNounsReservePrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        amount?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | {
        __typename: 'NounsAuction';
        address: string;
        tokenId: string;
        collectionAddress: string;
        auctionId: string;
        auctionCurrency: string;
        startTime: string;
        endTime: string;
        duration: string;
        firstBidTime?: any | null;
        highestBidder?: string | null;
        estimatedDurationTime?: any | null;
        minBidIncrementPercentage?: number | null;
        winner?: string | null;
        timeBuffer?: number | null;
        highestBidPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        nounsReservePrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        amount?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | {
        __typename: 'NounsBuilderAuction';
    } | {
        __typename: 'V2Auction';
        firstBidTime?: any | null;
        highestBidder?: string | null;
        curator: string;
        collectionAddress: string;
        curatorFeePercentage: number;
        tokenId: string;
        auctionCurrency: string;
        duration: string;
        estimatedExpirationTime?: any | null;
        v2AuctionStatus: string;
        tokenOwner: string;
        address: string;
        auctionId: string;
        approved: boolean;
        reservePrice: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
        highestBidPrice?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | {
        __typename: 'V3ReserveAuction';
        address: string;
        tokenId: string;
        collectionAddress: string;
        status: string;
        firstBid: boolean;
        extended: boolean;
        seller: string;
        reserve: string;
        sellerFundsRecipient: string;
        highestBid: string;
        duration: string;
        startTime: string;
        currency: string;
        finder: string;
        findersFeeBps: string;
        estimatedDurationTime?: any | null;
        v3HighestBidder: string;
        v3FirstBidTime: string;
        price?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        v3AuctionReservePrice: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
        highestBidPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | null;
    price?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type MarketQueryVariables = Exact<{
    network?: InputMaybe<NetworkInput>;
    where: ActiveMarketQueryInput;
}>;
export declare type MarketQuery = {
    __typename?: 'RootQuery';
    market?: {
        __typename?: 'ActiveMarket';
        status: string;
        marketAddress: string;
        collectionAddress?: string | null;
        tokenId?: string | null;
        marketType: ActiveMarketType;
        networkInfo: {
            __typename: 'NetworkInfo';
            chain: Chain;
            network: Network;
        };
        transactionInfo: {
            __typename: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        properties?: {
            __typename: 'LilNounsAuction';
            address: string;
            tokenId: string;
            collectionAddress: string;
            auctionId: string;
            auctionCurrency: string;
            startTime: string;
            endTime: string;
            duration: string;
            firstBidTime?: any | null;
            highestBidder?: string | null;
            estimatedDurationTime?: any | null;
            minBidIncrementPercentage?: number | null;
            winner?: string | null;
            timeBuffer?: number | null;
            highestBidPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            lilNounsReservePrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            amount?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'NounsAuction';
            address: string;
            tokenId: string;
            collectionAddress: string;
            auctionId: string;
            auctionCurrency: string;
            startTime: string;
            endTime: string;
            duration: string;
            firstBidTime?: any | null;
            highestBidder?: string | null;
            estimatedDurationTime?: any | null;
            minBidIncrementPercentage?: number | null;
            winner?: string | null;
            timeBuffer?: number | null;
            highestBidPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            nounsReservePrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            amount?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'NounsBuilderAuction';
        } | {
            __typename: 'V2Auction';
            firstBidTime?: any | null;
            highestBidder?: string | null;
            curator: string;
            collectionAddress: string;
            curatorFeePercentage: number;
            tokenId: string;
            auctionCurrency: string;
            duration: string;
            estimatedExpirationTime?: any | null;
            v2AuctionStatus: string;
            tokenOwner: string;
            address: string;
            auctionId: string;
            approved: boolean;
            reservePrice: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
            highestBidPrice?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'V3ReserveAuction';
            address: string;
            tokenId: string;
            collectionAddress: string;
            status: string;
            firstBid: boolean;
            extended: boolean;
            seller: string;
            reserve: string;
            sellerFundsRecipient: string;
            highestBid: string;
            duration: string;
            startTime: string;
            currency: string;
            finder: string;
            findersFeeBps: string;
            estimatedDurationTime?: any | null;
            v3HighestBidder: string;
            v3FirstBidTime: string;
            price?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            v3AuctionReservePrice: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
            highestBidPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | null;
        price?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    } | null;
};
export declare type MarketsQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    filter?: InputMaybe<MarketsQueryFilter>;
    pagination: PaginationInput;
    sort: MarketSortKeySortInput;
    where?: InputMaybe<MarketsQueryInput>;
    includeFullDetails: Scalars['Boolean'];
}>;
export declare type MarketsQuery = {
    __typename?: 'RootQuery';
    markets: {
        __typename: 'MarketWithTokenConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename?: 'MarketWithToken';
            token?: {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                metadata?: any | null;
                tokenUrl?: string | null;
                tokenUrlMimeType?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                attributes?: Array<{
                    __typename?: 'TokenAttribute';
                    traitType?: string | null;
                    value?: string | null;
                    displayType?: string | null;
                }> | null;
            } | null;
            market: {
                __typename?: 'Market';
                collectionAddress?: string | null;
                marketAddress: string;
                marketType: MarketType;
                status: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
                networkInfo: {
                    __typename?: 'NetworkInfo';
                    chain: Chain;
                    network: Network;
                };
                properties?: {
                    __typename: 'LilNounsAuction';
                } | {
                    __typename: 'NounsAuction';
                } | {
                    __typename: 'NounsBuilderAuction';
                } | {
                    __typename: 'V1Ask';
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1BidShare';
                } | {
                    __typename: 'V1Offer';
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2Auction';
                    firstBidTime?: any | null;
                    highestBidder?: string | null;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any | null;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                    highestBidPrice?: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                } | {
                    __typename: 'V3Ask';
                    buyer?: string | null;
                    finder?: string | null;
                    findersFeeBps?: number | null;
                    sellerFundsRecipient?: string | null;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3ReserveAuction';
                } | null;
            };
        }>;
    };
};
export declare type MarketsOnMintInfoFragment = {
    __typename?: 'MintWithTokenAndMarkets';
    markets: Array<{
        __typename?: 'Market';
        collectionAddress?: string | null;
        marketAddress: string;
        marketType: MarketType;
        status: string;
        transactionInfo: {
            __typename?: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        price?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        networkInfo: {
            __typename?: 'NetworkInfo';
            chain: Chain;
            network: Network;
        };
        properties?: {
            __typename: 'LilNounsAuction';
        } | {
            __typename: 'NounsAuction';
        } | {
            __typename: 'NounsBuilderAuction';
        } | {
            __typename: 'V1Ask';
            v1AskStatus: string;
            currency: string;
            amount: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V1BidShare';
        } | {
            __typename: 'V1Offer';
            v1OfferStatus: string;
            sellOnShare: string;
            bidder: string;
            currency: string;
            amount: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V2Auction';
            firstBidTime?: any | null;
            highestBidder?: string | null;
            curator: string;
            collectionAddress: string;
            curatorFeePercentage: number;
            tokenId: string;
            auctionCurrency: string;
            duration: string;
            estimatedExpirationTime?: any | null;
            v2AuctionStatus: string;
            tokenOwner: string;
            address: string;
            auctionId: string;
            approved: boolean;
            reservePrice: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
            highestBidPrice?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'V3Ask';
            buyer?: string | null;
            finder?: string | null;
            findersFeeBps?: number | null;
            sellerFundsRecipient?: string | null;
            v3AskStatus: string;
            seller: string;
            address: string;
            askCurrency: string;
            collectionAddress: string;
            askPrice: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            };
        } | {
            __typename: 'V3ReserveAuction';
        } | null;
    }>;
};
export declare type MintsQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    filter?: InputMaybe<MintsQueryFilter>;
    pagination: PaginationInput;
    sort: MintSortKeySortInput;
    where?: InputMaybe<MintsQueryInput>;
    includeFullDetails: Scalars['Boolean'];
    includeMarkets: Scalars['Boolean'];
}>;
export declare type MintsQuery = {
    __typename?: 'RootQuery';
    mints: {
        __typename: 'MintWithTokenAndMarketsConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename: 'MintWithTokenAndMarkets';
            mint: {
                __typename?: 'Mint';
                collectionAddress: string;
                tokenId: string;
                originatorAddress: string;
                toAddress: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
            };
            token?: {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                metadata?: any | null;
                tokenUrl?: string | null;
                tokenUrlMimeType?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                attributes?: Array<{
                    __typename?: 'TokenAttribute';
                    traitType?: string | null;
                    value?: string | null;
                    displayType?: string | null;
                }> | null;
            } | null;
            markets: Array<{
                __typename?: 'Market';
                collectionAddress?: string | null;
                marketAddress: string;
                marketType: MarketType;
                status: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
                networkInfo: {
                    __typename?: 'NetworkInfo';
                    chain: Chain;
                    network: Network;
                };
                properties?: {
                    __typename: 'LilNounsAuction';
                } | {
                    __typename: 'NounsAuction';
                } | {
                    __typename: 'NounsBuilderAuction';
                } | {
                    __typename: 'V1Ask';
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1BidShare';
                } | {
                    __typename: 'V1Offer';
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2Auction';
                    firstBidTime?: any | null;
                    highestBidder?: string | null;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any | null;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                    highestBidPrice?: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                } | {
                    __typename: 'V3Ask';
                    buyer?: string | null;
                    finder?: string | null;
                    findersFeeBps?: number | null;
                    sellerFundsRecipient?: string | null;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3ReserveAuction';
                } | null;
            }>;
        }>;
    };
};
export declare type CollectionsQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: CollectionsQueryInput;
    pagination: PaginationInput;
    sort: CollectionSortKeySortInput;
    includeFullDetails: Scalars['Boolean'];
}>;
export declare type CollectionsQuery = {
    __typename?: 'RootQuery';
    collections: {
        __typename: 'CollectionConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename?: 'Collection';
            address: string;
            description: string;
            name?: string | null;
            symbol?: string | null;
            totalSupply?: number | null;
            networkInfo: {
                __typename?: 'NetworkInfo';
                chain: Chain;
                network: Network;
            };
            attributes?: Array<{
                __typename?: 'CollectionAttribute';
                traitType?: string | null;
                valueMetrics: Array<{
                    __typename?: 'CollectionAttributeValue';
                    count: number;
                    percent: number;
                    value: string;
                }>;
            }> | null;
        }>;
    };
};
export declare type SalesQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: SalesQueryInput;
    filter?: InputMaybe<SalesQueryFilter>;
    sort: SaleSortKeySortInput;
    pagination: PaginationInput;
    includeFullDetails: Scalars['Boolean'];
}>;
export declare type SalesQuery = {
    __typename?: 'RootQuery';
    sales: {
        __typename: 'SaleWithTokenConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename?: 'SaleWithToken';
            sale: {
                __typename?: 'Sale';
                saleContractAddress?: string | null;
                buyerAddress: string;
                collectionAddress: string;
                sellerAddress: string;
                tokenId: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
            };
            token?: {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                metadata?: any | null;
                tokenUrl?: string | null;
                tokenUrlMimeType?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                attributes?: Array<{
                    __typename?: 'TokenAttribute';
                    traitType?: string | null;
                    value?: string | null;
                    displayType?: string | null;
                }> | null;
            } | null;
        }>;
    };
};
export declare type TokensSalesInfoFragment = {
    __typename?: 'TokenWithMarketsSummary';
    sales: Array<{
        __typename?: 'Sale';
        saleContractAddress?: string | null;
        buyerAddress: string;
        collectionAddress: string;
        sellerAddress: string;
        tokenId: string;
        transactionInfo: {
            __typename?: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        price?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    }>;
};
export declare type TokensEventsInfoFragment = {
    __typename?: 'TokenWithMarketsSummary';
    events: Array<{
        __typename?: 'Event';
        eventType: EventType;
        collectionAddress?: string | null;
        tokenId?: string | null;
        transactionInfo: {
            __typename?: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        properties: {
            __typename: 'ApprovalEvent';
        } | {
            __typename: 'LilNounsAuctionEvent';
        } | {
            __typename: 'MintEvent';
            tokenId: string;
            collectionAddress: string;
            originatorAddress: string;
            toAddress: string;
            price?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'NounsAuctionEvent';
        } | {
            __typename: 'Sale';
        } | {
            __typename: 'SeaportEvent';
        } | {
            __typename: 'TransferEvent';
            fromAddress: string;
            toAddress: string;
            collectionAddress: string;
            tokenId: string;
        } | {
            __typename: 'V1MarketEvent';
            v1MarketEventType: V1MarketEventType;
            address: string;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V1MarketAskCreatedEventProperties';
                amount: string;
                currency: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketAskRemovedEventProperties';
                amount: string;
                currency: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketBidShareUpdatedEventProperties';
            } | {
                __typename: 'V1MarketOfferCreatedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketOfferFinalizedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketOfferRemovedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            };
        } | {
            __typename: 'V1MediaEvent';
        } | {
            __typename: 'V2AuctionEvent';
            v2AuctionEventType: V2AuctionEventType;
            address: string;
            auctionId: number;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V2AuctionApprovalUpdatedEventProperties';
                approved: boolean;
            } | {
                __typename: 'V2AuctionBidEventProperties';
                sender: string;
                firstBid: boolean;
                extended: boolean;
                value: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V2AuctionCanceledEventProperties';
                tokenOwner: string;
            } | {
                __typename: 'V2AuctionCreatedEventProperties';
                auctionCurrency: string;
                tokenOwner: string;
                curator: string;
                curatorFeePercentage: number;
                duration: string;
                reservePrice: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V2AuctionDurationExtendedEventProperties';
                duration: string;
            } | {
                __typename: 'V2AuctionEndedEventProperties';
                tokenOwner: string;
                curator: string;
                winner: string;
                auctionCurrency: string;
                amount: string;
                curatorFee: string;
            } | {
                __typename: 'V2AuctionReservePriceUpdatedEventProperties';
                reservePrice: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            };
        } | {
            __typename: 'V3AskEvent';
            v3AskEventType: V3AskEventType;
            address: string;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V3AskCanceledEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskCreatedEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskFilledEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                finder: string;
                buyer: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskPriceUpdatedEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AsksCoreEthAskEventProperties';
            } | {
                __typename: 'V3AsksCoreEthAskFilledEventProperties';
            } | {
                __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
            } | {
                __typename: 'V3PrivateAskEventProperties';
            };
        } | {
            __typename: 'V3ModuleManagerEvent';
        } | {
            __typename: 'V3ReserveAuctionEvent';
        };
    }>;
};
export declare type TokensQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where?: InputMaybe<TokensQueryInput>;
    filter?: InputMaybe<TokensQueryFilter>;
    pagination: PaginationInput;
    sort: TokenSortInput;
    includeFullDetails: Scalars['Boolean'];
    includeSalesHistory: Scalars['Boolean'];
}>;
export declare type TokensQuery = {
    __typename?: 'RootQuery';
    tokens: {
        __typename: 'TokenWithMarketsSummaryConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename: 'TokenWithMarketsSummary';
            marketsSummary: Array<{
                __typename?: 'Market';
                collectionAddress?: string | null;
                marketAddress: string;
                marketType: MarketType;
                status: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
                networkInfo: {
                    __typename?: 'NetworkInfo';
                    chain: Chain;
                    network: Network;
                };
                properties?: {
                    __typename: 'LilNounsAuction';
                } | {
                    __typename: 'NounsAuction';
                } | {
                    __typename: 'NounsBuilderAuction';
                } | {
                    __typename: 'V1Ask';
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1BidShare';
                } | {
                    __typename: 'V1Offer';
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2Auction';
                    firstBidTime?: any | null;
                    highestBidder?: string | null;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any | null;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                    highestBidPrice?: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                } | {
                    __typename: 'V3Ask';
                    buyer?: string | null;
                    finder?: string | null;
                    findersFeeBps?: number | null;
                    sellerFundsRecipient?: string | null;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3ReserveAuction';
                } | null;
            }>;
            token: {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                metadata?: any | null;
                tokenUrl?: string | null;
                tokenUrlMimeType?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                attributes?: Array<{
                    __typename?: 'TokenAttribute';
                    traitType?: string | null;
                    value?: string | null;
                    displayType?: string | null;
                }> | null;
            };
            sales: Array<{
                __typename?: 'Sale';
                saleContractAddress?: string | null;
                buyerAddress: string;
                collectionAddress: string;
                sellerAddress: string;
                tokenId: string;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
            }>;
            events: Array<{
                __typename?: 'Event';
                eventType: EventType;
                collectionAddress?: string | null;
                tokenId?: string | null;
                transactionInfo: {
                    __typename?: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
                properties: {
                    __typename: 'ApprovalEvent';
                } | {
                    __typename: 'LilNounsAuctionEvent';
                } | {
                    __typename: 'MintEvent';
                    tokenId: string;
                    collectionAddress: string;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                } | {
                    __typename: 'NounsAuctionEvent';
                } | {
                    __typename: 'Sale';
                } | {
                    __typename: 'SeaportEvent';
                } | {
                    __typename: 'TransferEvent';
                    fromAddress: string;
                    toAddress: string;
                    collectionAddress: string;
                    tokenId: string;
                } | {
                    __typename: 'V1MarketEvent';
                    v1MarketEventType: V1MarketEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: 'V1MarketAskCreatedEventProperties';
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V1MarketAskRemovedEventProperties';
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V1MarketBidShareUpdatedEventProperties';
                    } | {
                        __typename: 'V1MarketOfferCreatedEventProperties';
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V1MarketOfferFinalizedEventProperties';
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V1MarketOfferRemovedEventProperties';
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    };
                } | {
                    __typename: 'V1MediaEvent';
                } | {
                    __typename: 'V2AuctionEvent';
                    v2AuctionEventType: V2AuctionEventType;
                    address: string;
                    auctionId: number;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: 'V2AuctionApprovalUpdatedEventProperties';
                        approved: boolean;
                    } | {
                        __typename: 'V2AuctionBidEventProperties';
                        sender: string;
                        firstBid: boolean;
                        extended: boolean;
                        value: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V2AuctionCanceledEventProperties';
                        tokenOwner: string;
                    } | {
                        __typename: 'V2AuctionCreatedEventProperties';
                        auctionCurrency: string;
                        tokenOwner: string;
                        curator: string;
                        curatorFeePercentage: number;
                        duration: string;
                        reservePrice: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V2AuctionDurationExtendedEventProperties';
                        duration: string;
                    } | {
                        __typename: 'V2AuctionEndedEventProperties';
                        tokenOwner: string;
                        curator: string;
                        winner: string;
                        auctionCurrency: string;
                        amount: string;
                        curatorFee: string;
                    } | {
                        __typename: 'V2AuctionReservePriceUpdatedEventProperties';
                        reservePrice: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    };
                } | {
                    __typename: 'V3AskEvent';
                    v3AskEventType: V3AskEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: 'V3AskCanceledEventProperties';
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V3AskCreatedEventProperties';
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V3AskFilledEventProperties';
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        finder: string;
                        buyer: string;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V3AskPriceUpdatedEventProperties';
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        };
                    } | {
                        __typename: 'V3AsksCoreEthAskEventProperties';
                    } | {
                        __typename: 'V3AsksCoreEthAskFilledEventProperties';
                    } | {
                        __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
                    } | {
                        __typename: 'V3PrivateAskEventProperties';
                    };
                } | {
                    __typename: 'V3ModuleManagerEvent';
                } | {
                    __typename: 'V3ReserveAuctionEvent';
                };
            }>;
        }>;
    };
};
export declare type TokenFullDetailsFragment = {
    __typename?: 'TokenWithFullMarketHistory';
    sales: Array<{
        __typename?: 'Sale';
        saleContractAddress?: string | null;
        buyerAddress: string;
        collectionAddress: string;
        sellerAddress: string;
        tokenId: string;
        transactionInfo: {
            __typename?: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        price?: {
            __typename?: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    }>;
    events: Array<{
        __typename?: 'Event';
        eventType: EventType;
        collectionAddress?: string | null;
        tokenId?: string | null;
        transactionInfo: {
            __typename?: 'TransactionInfo';
            blockNumber: number;
            blockTimestamp: any;
            transactionHash?: string | null;
            logIndex?: number | null;
        };
        properties: {
            __typename: 'ApprovalEvent';
        } | {
            __typename: 'LilNounsAuctionEvent';
        } | {
            __typename: 'MintEvent';
            tokenId: string;
            collectionAddress: string;
            originatorAddress: string;
            toAddress: string;
            price?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        } | {
            __typename: 'NounsAuctionEvent';
        } | {
            __typename: 'Sale';
        } | {
            __typename: 'SeaportEvent';
        } | {
            __typename: 'TransferEvent';
            fromAddress: string;
            toAddress: string;
            collectionAddress: string;
            tokenId: string;
        } | {
            __typename: 'V1MarketEvent';
            v1MarketEventType: V1MarketEventType;
            address: string;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V1MarketAskCreatedEventProperties';
                amount: string;
                currency: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketAskRemovedEventProperties';
                amount: string;
                currency: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketBidShareUpdatedEventProperties';
            } | {
                __typename: 'V1MarketOfferCreatedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketOfferFinalizedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1MarketOfferRemovedEventProperties';
                amount: string;
                currency: string;
                bidder: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            };
        } | {
            __typename: 'V1MediaEvent';
        } | {
            __typename: 'V2AuctionEvent';
            v2AuctionEventType: V2AuctionEventType;
            address: string;
            auctionId: number;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V2AuctionApprovalUpdatedEventProperties';
                approved: boolean;
            } | {
                __typename: 'V2AuctionBidEventProperties';
                sender: string;
                firstBid: boolean;
                extended: boolean;
                value: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V2AuctionCanceledEventProperties';
                tokenOwner: string;
            } | {
                __typename: 'V2AuctionCreatedEventProperties';
                auctionCurrency: string;
                tokenOwner: string;
                curator: string;
                curatorFeePercentage: number;
                duration: string;
                reservePrice: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V2AuctionDurationExtendedEventProperties';
                duration: string;
            } | {
                __typename: 'V2AuctionEndedEventProperties';
                tokenOwner: string;
                curator: string;
                winner: string;
                auctionCurrency: string;
                amount: string;
                curatorFee: string;
            } | {
                __typename: 'V2AuctionReservePriceUpdatedEventProperties';
                reservePrice: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            };
        } | {
            __typename: 'V3AskEvent';
            v3AskEventType: V3AskEventType;
            address: string;
            collectionAddress: string;
            tokenId: string;
            properties: {
                __typename: 'V3AskCanceledEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskCreatedEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskFilledEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                finder: string;
                buyer: string;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AskPriceUpdatedEventProperties';
                seller: string;
                sellerFundsRecipient: string;
                askCurrency: string;
                askPrice: string;
                findersFeeBps: number;
                price: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3AsksCoreEthAskEventProperties';
            } | {
                __typename: 'V3AsksCoreEthAskFilledEventProperties';
            } | {
                __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
            } | {
                __typename: 'V3PrivateAskEventProperties';
            };
        } | {
            __typename: 'V3ModuleManagerEvent';
        } | {
            __typename: 'V3ReserveAuctionEvent';
        };
    }>;
};
export declare type TokenQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    token: TokenInput;
    includeFullDetails: Scalars['Boolean'];
}>;
export declare type TokenQuery = {
    __typename?: 'RootQuery';
    token?: {
        __typename: 'TokenWithFullMarketHistory';
        token: {
            __typename: 'Token';
            tokenId: string;
            collectionAddress: string;
            lastRefreshTime?: any | null;
            owner?: string | null;
            name?: string | null;
            description?: string | null;
            metadata?: any | null;
            tokenUrl?: string | null;
            tokenUrlMimeType?: string | null;
            tokenContract?: {
                __typename?: 'TokenContract';
                name?: string | null;
                network: string;
                description?: string | null;
                collectionAddress: string;
                symbol?: string | null;
                chain: number;
            } | null;
            mintInfo?: {
                __typename?: 'MintInfo';
                originatorAddress: string;
                toAddress: string;
                price?: {
                    __typename: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
                mintContext: {
                    __typename: 'TransactionInfo';
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null;
                    logIndex?: number | null;
                };
            } | null;
            image?: {
                __typename?: 'TokenContentMedia';
                size?: string | null;
                url?: string | null;
                mimeType?: string | null;
                mediaEncoding?: {
                    __typename: 'AudioEncodingTypes';
                    original: string;
                    large?: string | null;
                } | {
                    __typename: 'ImageEncodingTypes';
                    original: string;
                    large?: string | null;
                    poster?: string | null;
                    thumbnail?: string | null;
                } | {
                    __typename: 'UnsupportedEncodingTypes';
                    original: string;
                } | {
                    __typename: 'VideoEncodingTypes';
                    original: string;
                    large?: string | null;
                    poster?: string | null;
                    preview?: string | null;
                    thumbnail?: string | null;
                } | null;
            } | null;
            content?: {
                __typename?: 'TokenContentMedia';
                size?: string | null;
                url?: string | null;
                mimeType?: string | null;
                mediaEncoding?: {
                    __typename: 'AudioEncodingTypes';
                    original: string;
                    large?: string | null;
                } | {
                    __typename: 'ImageEncodingTypes';
                    original: string;
                    large?: string | null;
                    poster?: string | null;
                    thumbnail?: string | null;
                } | {
                    __typename: 'UnsupportedEncodingTypes';
                    original: string;
                } | {
                    __typename: 'VideoEncodingTypes';
                    original: string;
                    large?: string | null;
                    poster?: string | null;
                    preview?: string | null;
                    thumbnail?: string | null;
                } | null;
            } | null;
            attributes?: Array<{
                __typename?: 'TokenAttribute';
                traitType?: string | null;
                value?: string | null;
                displayType?: string | null;
            }> | null;
        };
        markets: Array<{
            __typename?: 'Market';
            collectionAddress?: string | null;
            marketAddress: string;
            marketType: MarketType;
            status: string;
            transactionInfo: {
                __typename?: 'TransactionInfo';
                blockNumber: number;
                blockTimestamp: any;
                transactionHash?: string | null;
                logIndex?: number | null;
            };
            price?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            networkInfo: {
                __typename?: 'NetworkInfo';
                chain: Chain;
                network: Network;
            };
            properties?: {
                __typename: 'LilNounsAuction';
            } | {
                __typename: 'NounsAuction';
            } | {
                __typename: 'NounsBuilderAuction';
            } | {
                __typename: 'V1Ask';
                v1AskStatus: string;
                currency: string;
                amount: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V1BidShare';
            } | {
                __typename: 'V1Offer';
                v1OfferStatus: string;
                sellOnShare: string;
                bidder: string;
                currency: string;
                amount: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V2Auction';
                firstBidTime?: any | null;
                highestBidder?: string | null;
                curator: string;
                collectionAddress: string;
                curatorFeePercentage: number;
                tokenId: string;
                auctionCurrency: string;
                duration: string;
                estimatedExpirationTime?: any | null;
                v2AuctionStatus: string;
                tokenOwner: string;
                address: string;
                auctionId: string;
                approved: boolean;
                reservePrice: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
                highestBidPrice?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
            } | {
                __typename: 'V3Ask';
                buyer?: string | null;
                finder?: string | null;
                findersFeeBps?: number | null;
                sellerFundsRecipient?: string | null;
                v3AskStatus: string;
                seller: string;
                address: string;
                askCurrency: string;
                collectionAddress: string;
                askPrice: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
            } | {
                __typename: 'V3ReserveAuction';
            } | null;
        }>;
        sales: Array<{
            __typename?: 'Sale';
            saleContractAddress?: string | null;
            buyerAddress: string;
            collectionAddress: string;
            sellerAddress: string;
            tokenId: string;
            transactionInfo: {
                __typename?: 'TransactionInfo';
                blockNumber: number;
                blockTimestamp: any;
                transactionHash?: string | null;
                logIndex?: number | null;
            };
            price?: {
                __typename?: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        }>;
        events: Array<{
            __typename?: 'Event';
            eventType: EventType;
            collectionAddress?: string | null;
            tokenId?: string | null;
            transactionInfo: {
                __typename?: 'TransactionInfo';
                blockNumber: number;
                blockTimestamp: any;
                transactionHash?: string | null;
                logIndex?: number | null;
            };
            properties: {
                __typename: 'ApprovalEvent';
            } | {
                __typename: 'LilNounsAuctionEvent';
            } | {
                __typename: 'MintEvent';
                tokenId: string;
                collectionAddress: string;
                originatorAddress: string;
                toAddress: string;
                price?: {
                    __typename?: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                } | null;
            } | {
                __typename: 'NounsAuctionEvent';
            } | {
                __typename: 'Sale';
            } | {
                __typename: 'SeaportEvent';
            } | {
                __typename: 'TransferEvent';
                fromAddress: string;
                toAddress: string;
                collectionAddress: string;
                tokenId: string;
            } | {
                __typename: 'V1MarketEvent';
                v1MarketEventType: V1MarketEventType;
                address: string;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V1MarketAskCreatedEventProperties';
                    amount: string;
                    currency: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketAskRemovedEventProperties';
                    amount: string;
                    currency: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketBidShareUpdatedEventProperties';
                } | {
                    __typename: 'V1MarketOfferCreatedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketOfferFinalizedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V1MarketOfferRemovedEventProperties';
                    amount: string;
                    currency: string;
                    bidder: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                };
            } | {
                __typename: 'V1MediaEvent';
            } | {
                __typename: 'V2AuctionEvent';
                v2AuctionEventType: V2AuctionEventType;
                address: string;
                auctionId: number;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V2AuctionApprovalUpdatedEventProperties';
                    approved: boolean;
                } | {
                    __typename: 'V2AuctionBidEventProperties';
                    sender: string;
                    firstBid: boolean;
                    extended: boolean;
                    value: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2AuctionCanceledEventProperties';
                    tokenOwner: string;
                } | {
                    __typename: 'V2AuctionCreatedEventProperties';
                    auctionCurrency: string;
                    tokenOwner: string;
                    curator: string;
                    curatorFeePercentage: number;
                    duration: string;
                    reservePrice: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V2AuctionDurationExtendedEventProperties';
                    duration: string;
                } | {
                    __typename: 'V2AuctionEndedEventProperties';
                    tokenOwner: string;
                    curator: string;
                    winner: string;
                    auctionCurrency: string;
                    amount: string;
                    curatorFee: string;
                } | {
                    __typename: 'V2AuctionReservePriceUpdatedEventProperties';
                    reservePrice: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                };
            } | {
                __typename: 'V3AskEvent';
                v3AskEventType: V3AskEventType;
                address: string;
                collectionAddress: string;
                tokenId: string;
                properties: {
                    __typename: 'V3AskCanceledEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskCreatedEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskFilledEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    finder: string;
                    buyer: string;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AskPriceUpdatedEventProperties';
                    seller: string;
                    sellerFundsRecipient: string;
                    askCurrency: string;
                    askPrice: string;
                    findersFeeBps: number;
                    price: {
                        __typename?: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                } | {
                    __typename: 'V3AsksCoreEthAskEventProperties';
                } | {
                    __typename: 'V3AsksCoreEthAskFilledEventProperties';
                } | {
                    __typename: 'V3AsksCoreEthRoyaltyPayoutEventProperties';
                } | {
                    __typename: 'V3PrivateAskEventProperties';
                };
            } | {
                __typename: 'V3ModuleManagerEvent';
            } | {
                __typename: 'V3ReserveAuctionEvent';
            };
        }>;
    } | null;
};
export declare type SeaportOrderItemDetailsFragment = {
    __typename?: 'SeaportOrderItem';
    itemType: string;
    address: string;
    tokenId?: string | null;
    criteria?: string | null;
    startAmount: string;
    endAmount: string;
    recipient?: string | null;
    startPrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
    endPrice?: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    } | null;
};
export declare type SeaportOrderDetailsFragment = {
    __typename?: 'SeaportOrder';
    orderHash: string;
    offerer: string;
    startTime: any;
    endTime: any;
    orderType: string;
    zone: string;
    zoneHash: string;
    salt: string;
    conduitKey: string;
    counter: string;
    signature: string;
    schemaHash: string;
    price: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
    offers: Array<{
        __typename: 'SeaportOrderItem';
        itemType: string;
        address: string;
        tokenId?: string | null;
        criteria?: string | null;
        startAmount: string;
        endAmount: string;
        recipient?: string | null;
        startPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        endPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    }>;
    considerations: Array<{
        __typename: 'SeaportOrderItem';
        itemType: string;
        address: string;
        tokenId?: string | null;
        criteria?: string | null;
        startAmount: string;
        endAmount: string;
        recipient?: string | null;
        startPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
        endPrice?: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        } | null;
    }>;
};
export declare type OffchainOrderInfoFragment = {
    __typename?: 'OffchainOrder';
    contractAddress: string;
    collectionAddress?: string | null;
    tokenId?: string | null;
    offerer: string;
    startTime: any;
    endTime: any;
    orderType: string;
    calldata?: string | null;
    networkInfo: {
        __typename: 'NetworkInfo';
        chain: Chain;
        network: Network;
    };
    price: {
        __typename: 'PriceAtTime';
        blockNumber: number;
        chainTokenPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
        nativePrice: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
            currency: {
                __typename?: 'Currency';
                address: string;
                decimals: number;
                name: string;
            };
        };
        usdcPrice?: {
            __typename?: 'CurrencyAmount';
            decimal: number;
            raw: string;
        } | null;
    };
    properties: {
        __typename?: 'SeaportOrder';
        orderHash: string;
        offerer: string;
        startTime: any;
        endTime: any;
        orderType: string;
        zone: string;
        zoneHash: string;
        salt: string;
        conduitKey: string;
        counter: string;
        signature: string;
        schemaHash: string;
        price: {
            __typename: 'PriceAtTime';
            blockNumber: number;
            chainTokenPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
            nativePrice: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
                currency: {
                    __typename?: 'Currency';
                    address: string;
                    decimals: number;
                    name: string;
                };
            };
            usdcPrice?: {
                __typename?: 'CurrencyAmount';
                decimal: number;
                raw: string;
            } | null;
        };
        offers: Array<{
            __typename: 'SeaportOrderItem';
            itemType: string;
            address: string;
            tokenId?: string | null;
            criteria?: string | null;
            startAmount: string;
            endAmount: string;
            recipient?: string | null;
            startPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            endPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        }>;
        considerations: Array<{
            __typename: 'SeaportOrderItem';
            itemType: string;
            address: string;
            tokenId?: string | null;
            criteria?: string | null;
            startAmount: string;
            endAmount: string;
            recipient?: string | null;
            startPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
            endPrice?: {
                __typename: 'PriceAtTime';
                blockNumber: number;
                chainTokenPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
                nativePrice: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                    currency: {
                        __typename?: 'Currency';
                        address: string;
                        decimals: number;
                        name: string;
                    };
                };
                usdcPrice?: {
                    __typename?: 'CurrencyAmount';
                    decimal: number;
                    raw: string;
                } | null;
            } | null;
        }>;
    };
};
export declare type OffchainOrdersQueryVariables = Exact<{
    networks?: InputMaybe<Array<NetworkInput> | NetworkInput>;
    where?: InputMaybe<OffchainOrdersQueryInput>;
    filter?: InputMaybe<OffchainOrdersQueryFilter>;
    sort?: InputMaybe<OffchainOrderSortKeySortInput>;
    pagination?: InputMaybe<PaginationInput>;
}>;
export declare type OffchainOrdersQuery = {
    __typename?: 'RootQuery';
    offchainOrders: {
        __typename?: 'OffchainOrderWithTokenConnection';
        nodes: Array<{
            __typename: 'OffchainOrderWithToken';
            token?: {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
            } | null;
            offchainOrder: {
                __typename: 'OffchainOrder';
                contractAddress: string;
                collectionAddress?: string | null;
                tokenId?: string | null;
                offerer: string;
                startTime: any;
                endTime: any;
                orderType: string;
                calldata?: string | null;
                networkInfo: {
                    __typename: 'NetworkInfo';
                    chain: Chain;
                    network: Network;
                };
                price: {
                    __typename: 'PriceAtTime';
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                    nativePrice: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: 'Currency';
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: 'CurrencyAmount';
                        decimal: number;
                        raw: string;
                    } | null;
                };
                properties: {
                    __typename?: 'SeaportOrder';
                    orderHash: string;
                    offerer: string;
                    startTime: any;
                    endTime: any;
                    orderType: string;
                    zone: string;
                    zoneHash: string;
                    salt: string;
                    conduitKey: string;
                    counter: string;
                    signature: string;
                    schemaHash: string;
                    price: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    };
                    offers: Array<{
                        __typename: 'SeaportOrderItem';
                        itemType: string;
                        address: string;
                        tokenId?: string | null;
                        criteria?: string | null;
                        startAmount: string;
                        endAmount: string;
                        recipient?: string | null;
                        startPrice?: {
                            __typename: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        } | null;
                        endPrice?: {
                            __typename: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        } | null;
                    }>;
                    considerations: Array<{
                        __typename: 'SeaportOrderItem';
                        itemType: string;
                        address: string;
                        tokenId?: string | null;
                        criteria?: string | null;
                        startAmount: string;
                        endAmount: string;
                        recipient?: string | null;
                        startPrice?: {
                            __typename: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        } | null;
                        endPrice?: {
                            __typename: 'PriceAtTime';
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                            nativePrice: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: 'Currency';
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: 'CurrencyAmount';
                                decimal: number;
                                raw: string;
                            } | null;
                        } | null;
                    }>;
                };
            };
        }>;
        pageInfo: {
            __typename: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
    };
};
export declare type AggregateAttributesQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: AggregateAttributesQueryInput;
}>;
export declare type AggregateAttributesQuery = {
    __typename?: 'RootQuery';
    aggregateAttributes: Array<{
        __typename?: 'AggregateAttribute';
        traitType: string;
        valueMetrics: Array<{
            __typename?: 'AggregateAttributeValue';
            value: string;
            count: number;
            percent: number;
        }>;
    }>;
};
export declare type OwnersByCountQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    pagination: PaginationInput;
    where: OwnersByCountQueryInput;
    sort?: InputMaybe<OwnerCountSortKeySortInput>;
}>;
export declare type OwnersByCountQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        ownersByCount: {
            __typename?: 'OwnerCountConnection';
            pageInfo: {
                __typename?: 'PageInfo';
                endCursor?: string | null;
                hasNextPage: boolean;
                limit: number;
            };
            nodes: Array<{
                __typename?: 'OwnerCount';
                owner: string;
                count: number;
                tokenIds: Array<string>;
            }>;
        };
    };
};
export declare type OwnersByCount1155QueryVariables = Exact<{
    where: OwnersByCount1155QueryInput;
}>;
export declare type OwnersByCount1155Query = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        ownersByCount1155: Array<{
            __typename?: 'OwnerCount';
            owner: string;
            count: number;
            tokenIds: Array<string>;
        }>;
    };
};
export declare type SalesVolumeQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: CollectionAddressOwnerAddressAttributesInput;
    filter?: InputMaybe<SalesVolumeFilter>;
}>;
export declare type SalesVolumeQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        salesVolume: {
            __typename?: 'SalesVolume';
            chainTokenPrice: number;
            usdcPrice: number;
            totalCount: number;
        };
    };
};
export declare type OwnerCountQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: CollectionAddressAndAttributesInput;
}>;
export declare type OwnerCountQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        ownerCount: number;
    };
};
export declare type NftCountQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: CollectionAddressOwnerAddressAttributesInput;
}>;
export declare type NftCountQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        nftCount: number;
    };
};
export declare type FloorPriceQueryVariables = Exact<{
    networks: Array<NetworkInput> | NetworkInput;
    where: CollectionAddressAndAttributesInput;
}>;
export declare type FloorPriceQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        floorPrice?: number | null;
    };
};
export declare type CollectionStatsAggregateQueryVariables = Exact<{
    collectionAddress: Scalars['String'];
    networks: Array<NetworkInput> | NetworkInput;
}>;
export declare type CollectionStatsAggregateQuery = {
    __typename?: 'RootQuery';
    aggregateStat: {
        __typename?: 'AggregateStat';
        floorPrice?: number | null;
        ownerCount: number;
        nftCount: number;
        salesVolume: {
            __typename?: 'SalesVolume';
            chainTokenPrice: number;
            usdcPrice: number;
            totalCount: number;
        };
    };
};
export declare type SearchQueryVariables = Exact<{
    pagination: SearchPaginationInput;
    query: SearchQueryInput;
    filter?: InputMaybe<SearchFilter>;
    networks: Array<NetworkInput> | NetworkInput;
}>;
export declare type SearchQuery = {
    __typename?: 'RootQuery';
    search: {
        __typename: 'SearchResultConnection';
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null;
            hasNextPage: boolean;
            limit: number;
        };
        nodes: Array<{
            __typename?: 'SearchResult';
            name?: string | null;
            description?: string | null;
            entityType: string;
            collectionAddress: string;
            tokenId?: string | null;
            networkInfo: {
                __typename?: 'NetworkInfo';
                chain: Chain;
                network: Network;
            };
            entity?: {
                __typename: 'Collection';
                address: string;
                name?: string | null;
                symbol?: string | null;
                totalSupply?: number | null;
                collectionDescription: string;
            } | {
                __typename: 'Token';
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any | null;
                owner?: string | null;
                name?: string | null;
                description?: string | null;
                tokenContract?: {
                    __typename?: 'TokenContract';
                    name?: string | null;
                    network: string;
                    description?: string | null;
                    collectionAddress: string;
                    symbol?: string | null;
                    chain: number;
                } | null;
                mintInfo?: {
                    __typename?: 'MintInfo';
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: 'PriceAtTime';
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                        nativePrice: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: 'Currency';
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: 'CurrencyAmount';
                            decimal: number;
                            raw: string;
                        } | null;
                    } | null;
                    mintContext: {
                        __typename: 'TransactionInfo';
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null;
                        logIndex?: number | null;
                    };
                } | null;
                image?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
                content?: {
                    __typename?: 'TokenContentMedia';
                    size?: string | null;
                    url?: string | null;
                    mimeType?: string | null;
                    mediaEncoding?: {
                        __typename: 'AudioEncodingTypes';
                        original: string;
                        large?: string | null;
                    } | {
                        __typename: 'ImageEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        thumbnail?: string | null;
                    } | {
                        __typename: 'UnsupportedEncodingTypes';
                        original: string;
                    } | {
                        __typename: 'VideoEncodingTypes';
                        original: string;
                        large?: string | null;
                        poster?: string | null;
                        preview?: string | null;
                        thumbnail?: string | null;
                    } | null;
                } | null;
            } | null;
        }>;
    };
};
export {};
