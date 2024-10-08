"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionInfoSearchResultFragmentDoc = exports.CollectionInfoFragmentDoc = exports.NetworkInfoDetailsFragmentDoc = exports.TokenDetailsFragmentDoc = exports.TokenInfoFragmentDoc = exports.FullMediaFragmentDoc = exports.MintDetailsFragmentDoc = exports.TransactionDetailsFragmentDoc = exports.PriceSummaryFragmentDoc = exports.TokenContractInfoFragmentDoc = exports.V3ReserveAuctionEventType = exports.V3ModuleManagerEventType = exports.V3AskEventType = exports.V2AuctionEventType = exports.V1MediaEventType = exports.V1MarketEventType = exports.TokenStandard = exports.TokenSortKey = exports.Support = exports.SortDirection = exports.SearchableEntity = exports.SeaportEventType = exports.SaleType = exports.SaleSortKey = exports.OwnerCountSortKey = exports.OffchainOrderSortKey = exports.NounsSortKey = exports.NounsProposalStatus = exports.NounsProposalSortKey = exports.NounsMarketType = exports.NounsEventType = exports.NounsBuilderManagerEventType = exports.NounsBuilderGovernorEventType = exports.NounsBuilderAuctionEventType = exports.NounsAuctionEventType = exports.Network = exports.MintSortKey = exports.MediaType = exports.MarketType = exports.MarketStatus = exports.MarketSortKey = exports.MarketCategory = exports.LilNounsAuctionEventType = exports.EventType = exports.EventSortKey = exports.CollectionSortKey = exports.Chain = exports.ApprovalEventType = exports.AggregateAttributeSortKey = exports.ActiveMarketType = void 0;
exports.getSdk = exports.SearchDocument = exports.CollectionStatsAggregateDocument = exports.FloorPriceDocument = exports.NftCountDocument = exports.OwnerCountDocument = exports.SalesVolumeDocument = exports.OwnersByCount1155Document = exports.OwnersByCountDocument = exports.AggregateAttributesDocument = exports.OffchainOrdersDocument = exports.TokenDocument = exports.TokensDocument = exports.SalesDocument = exports.CollectionsDocument = exports.MintsDocument = exports.MarketsDocument = exports.MarketDocument = exports.EventsDocument = exports.OffchainOrderInfoFragmentDoc = exports.SeaportOrderDetailsFragmentDoc = exports.SeaportOrderItemDetailsFragmentDoc = exports.TokenFullDetailsFragmentDoc = exports.TokensEventsInfoFragmentDoc = exports.EventInfoFragmentDoc = exports.V3AskEventPropertiesInfoFragmentDoc = exports.V2AuctionEventPropertiesInfoFragmentDoc = exports.V1MarketEventPropertiesInfoFragmentDoc = exports.TokensSalesInfoFragmentDoc = exports.SaleInfoFragmentDoc = exports.MarketsOnMintInfoFragmentDoc = exports.MarketDetailsFragmentDoc = exports.MarketPropertiesFullFragmentDoc = exports.V1AskPropertiesFragmentDoc = exports.V1OfferPropertiesFragmentDoc = exports.V3AskPropertiesFragmentDoc = exports.MarketInfoFragmentDoc = exports.ActiveMarketInfoFragmentDoc = exports.V3ReserveAuctionPropertiesFragmentDoc = exports.V2AuctionMarketPropertiesFragmentDoc = exports.NounsAuctionInfoFragmentDoc = exports.LilNounsAuctionInfoFragmentDoc = exports.OwnerCountInfoFragmentDoc = exports.PageInfoDefaultFragmentDoc = exports.CollectionDetailsFragmentDoc = void 0;
const tslib_1 = require("tslib");
const graphql_tag_1 = (0, tslib_1.__importDefault)(require("graphql-tag"));
var ActiveMarketType;
(function (ActiveMarketType) {
    ActiveMarketType["ActiveLilNounsAuction"] = "ACTIVE_LIL_NOUNS_AUCTION";
    ActiveMarketType["ActiveNounsAuction"] = "ACTIVE_NOUNS_AUCTION";
    ActiveMarketType["ActiveNounsBuilderAuction"] = "ACTIVE_NOUNS_BUILDER_AUCTION";
    ActiveMarketType["ActiveV2Auction"] = "ACTIVE_V2_AUCTION";
    ActiveMarketType["ActiveV3ReserveAuction"] = "ACTIVE_V3_RESERVE_AUCTION";
})(ActiveMarketType = exports.ActiveMarketType || (exports.ActiveMarketType = {}));
var AggregateAttributeSortKey;
(function (AggregateAttributeSortKey) {
    AggregateAttributeSortKey["Count"] = "COUNT";
    AggregateAttributeSortKey["None"] = "NONE";
    AggregateAttributeSortKey["Value"] = "VALUE";
})(AggregateAttributeSortKey = exports.AggregateAttributeSortKey || (exports.AggregateAttributeSortKey = {}));
var ApprovalEventType;
(function (ApprovalEventType) {
    ApprovalEventType["Approval"] = "APPROVAL";
    ApprovalEventType["ApprovalForAll"] = "APPROVAL_FOR_ALL";
})(ApprovalEventType = exports.ApprovalEventType || (exports.ApprovalEventType = {}));
var Chain;
(function (Chain) {
    Chain["BaseGoerli"] = "BASE_GOERLI";
    Chain["BaseMainnet"] = "BASE_MAINNET";
    Chain["Goerli"] = "GOERLI";
    Chain["Mainnet"] = "MAINNET";
    Chain["OptimismGoerli"] = "OPTIMISM_GOERLI";
    Chain["OptimismMainnet"] = "OPTIMISM_MAINNET";
    Chain["PgnMainnet"] = "PGN_MAINNET";
    Chain["Rinkeby"] = "RINKEBY";
    Chain["Sepolia"] = "SEPOLIA";
    Chain["ZoraGoerli"] = "ZORA_GOERLI";
    Chain["ZoraMainnet"] = "ZORA_MAINNET";
})(Chain = exports.Chain || (exports.Chain = {}));
var CollectionSortKey;
(function (CollectionSortKey) {
    CollectionSortKey["Created"] = "CREATED";
    CollectionSortKey["Name"] = "NAME";
    CollectionSortKey["None"] = "NONE";
})(CollectionSortKey = exports.CollectionSortKey || (exports.CollectionSortKey = {}));
var EventSortKey;
(function (EventSortKey) {
    EventSortKey["Created"] = "CREATED";
})(EventSortKey = exports.EventSortKey || (exports.EventSortKey = {}));
var EventType;
(function (EventType) {
    EventType["ApprovalEvent"] = "APPROVAL_EVENT";
    EventType["LilNounsAuctionEvent"] = "LIL_NOUNS_AUCTION_EVENT";
    EventType["MintEvent"] = "MINT_EVENT";
    EventType["NounsAuctionEvent"] = "NOUNS_AUCTION_EVENT";
    EventType["SaleEvent"] = "SALE_EVENT";
    EventType["SeaportEvent"] = "SEAPORT_EVENT";
    EventType["TransferEvent"] = "TRANSFER_EVENT";
    EventType["V1MarketEvent"] = "V1_MARKET_EVENT";
    EventType["V1MediaEvent"] = "V1_MEDIA_EVENT";
    EventType["V2AuctionEvent"] = "V2_AUCTION_EVENT";
    EventType["V3AskEvent"] = "V3_ASK_EVENT";
    EventType["V3ModuleManagerEvent"] = "V3_MODULE_MANAGER_EVENT";
    EventType["V3ReserveAuctionEvent"] = "V3_RESERVE_AUCTION_EVENT";
})(EventType = exports.EventType || (exports.EventType = {}));
var LilNounsAuctionEventType;
(function (LilNounsAuctionEventType) {
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionBidEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_BID_EVENT";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionCreatedEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_CREATED_EVENT";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionExtendedEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_EXTENDED_EVENT";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionMinBidIncrementPercentageUpdated"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionReservePriceUpdatedEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_RESERVE_PRICE_UPDATED_EVENT";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionSettledEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_SETTLED_EVENT";
    LilNounsAuctionEventType["LilNounsAuctionHouseAuctionTimeBufferUpdatedEvent"] = "LIL_NOUNS_AUCTION_HOUSE_AUCTION_TIME_BUFFER_UPDATED_EVENT";
})(LilNounsAuctionEventType = exports.LilNounsAuctionEventType || (exports.LilNounsAuctionEventType = {}));
var MarketCategory;
(function (MarketCategory) {
    MarketCategory["Ask"] = "ASK";
    MarketCategory["Auction"] = "AUCTION";
    MarketCategory["Offer"] = "OFFER";
})(MarketCategory = exports.MarketCategory || (exports.MarketCategory = {}));
var MarketSortKey;
(function (MarketSortKey) {
    MarketSortKey["ChainTokenPrice"] = "CHAIN_TOKEN_PRICE";
    MarketSortKey["Created"] = "CREATED";
    MarketSortKey["NativePrice"] = "NATIVE_PRICE";
    MarketSortKey["None"] = "NONE";
    MarketSortKey["TimedSaleEnding"] = "TIMED_SALE_ENDING";
})(MarketSortKey = exports.MarketSortKey || (exports.MarketSortKey = {}));
var MarketStatus;
(function (MarketStatus) {
    MarketStatus["Active"] = "ACTIVE";
    MarketStatus["Canceled"] = "CANCELED";
    MarketStatus["Completed"] = "COMPLETED";
    MarketStatus["Invalid"] = "INVALID";
})(MarketStatus = exports.MarketStatus || (exports.MarketStatus = {}));
var MarketType;
(function (MarketType) {
    MarketType["LilNounsAuction"] = "LIL_NOUNS_AUCTION";
    MarketType["NounsAuction"] = "NOUNS_AUCTION";
    MarketType["NounsBuilderAuction"] = "NOUNS_BUILDER_AUCTION";
    MarketType["V1Ask"] = "V1_ASK";
    MarketType["V1BidShare"] = "V1_BID_SHARE";
    MarketType["V1Offer"] = "V1_OFFER";
    MarketType["V2Auction"] = "V2_AUCTION";
    MarketType["V3Ask"] = "V3_ASK";
    MarketType["V3ReserveAuction"] = "V3_RESERVE_AUCTION";
})(MarketType = exports.MarketType || (exports.MarketType = {}));
var MediaType;
(function (MediaType) {
    MediaType["Audio"] = "AUDIO";
    MediaType["Gif"] = "GIF";
    MediaType["Html"] = "HTML";
    MediaType["Image"] = "IMAGE";
    MediaType["Text"] = "TEXT";
    MediaType["Video"] = "VIDEO";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
var MintSortKey;
(function (MintSortKey) {
    MintSortKey["None"] = "NONE";
    MintSortKey["Price"] = "PRICE";
    MintSortKey["Time"] = "TIME";
    MintSortKey["TokenId"] = "TOKEN_ID";
})(MintSortKey = exports.MintSortKey || (exports.MintSortKey = {}));
var Network;
(function (Network) {
    Network["Base"] = "BASE";
    Network["Ethereum"] = "ETHEREUM";
    Network["Optimism"] = "OPTIMISM";
    Network["Pgn"] = "PGN";
    Network["Zora"] = "ZORA";
})(Network = exports.Network || (exports.Network = {}));
var NounsAuctionEventType;
(function (NounsAuctionEventType) {
    NounsAuctionEventType["NounsAuctionHouseAuctionBidEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_BID_EVENT";
    NounsAuctionEventType["NounsAuctionHouseAuctionCreatedEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_CREATED_EVENT";
    NounsAuctionEventType["NounsAuctionHouseAuctionExtendedEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_EXTENDED_EVENT";
    NounsAuctionEventType["NounsAuctionHouseAuctionMinBidIncrementPercentageUpdated"] = "NOUNS_AUCTION_HOUSE_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED";
    NounsAuctionEventType["NounsAuctionHouseAuctionReservePriceUpdatedEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_RESERVE_PRICE_UPDATED_EVENT";
    NounsAuctionEventType["NounsAuctionHouseAuctionSettledEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_SETTLED_EVENT";
    NounsAuctionEventType["NounsAuctionHouseAuctionTimeBufferUpdatedEvent"] = "NOUNS_AUCTION_HOUSE_AUCTION_TIME_BUFFER_UPDATED_EVENT";
})(NounsAuctionEventType = exports.NounsAuctionEventType || (exports.NounsAuctionEventType = {}));
var NounsBuilderAuctionEventType;
(function (NounsBuilderAuctionEventType) {
    NounsBuilderAuctionEventType["NounsBuilderAuctionAuctionBidEvent"] = "NOUNS_BUILDER_AUCTION_AUCTION_BID_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionAuctionCreatedEvent"] = "NOUNS_BUILDER_AUCTION_AUCTION_CREATED_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionAuctionSettledEvent"] = "NOUNS_BUILDER_AUCTION_AUCTION_SETTLED_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionDurationUpdatedEvent"] = "NOUNS_BUILDER_AUCTION_DURATION_UPDATED_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionMinBidIncrementPercentageUpdatedEvent"] = "NOUNS_BUILDER_AUCTION_MIN_BID_INCREMENT_PERCENTAGE_UPDATED_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionReservePriceUpdatedEvent"] = "NOUNS_BUILDER_AUCTION_RESERVE_PRICE_UPDATED_EVENT";
    NounsBuilderAuctionEventType["NounsBuilderAuctionTimeBufferUpdatedEvent"] = "NOUNS_BUILDER_AUCTION_TIME_BUFFER_UPDATED_EVENT";
})(NounsBuilderAuctionEventType = exports.NounsBuilderAuctionEventType || (exports.NounsBuilderAuctionEventType = {}));
var NounsBuilderGovernorEventType;
(function (NounsBuilderGovernorEventType) {
    NounsBuilderGovernorEventType["NounsBuilderGovernorProposalCanceledEvent"] = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_CANCELED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorProposalCreatedEvent"] = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_CREATED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorProposalExecutedEvent"] = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_EXECUTED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorProposalQueuedEvent"] = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_QUEUED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorProposalVetoedEvent"] = "NOUNS_BUILDER_GOVERNOR_PROPOSAL_VETOED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorVetoerUpdatedEvent"] = "NOUNS_BUILDER_GOVERNOR_VETOER_UPDATED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorVoteCastEvent"] = "NOUNS_BUILDER_GOVERNOR_VOTE_CAST_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorVotingDelayUpdatedEvent"] = "NOUNS_BUILDER_GOVERNOR_VOTING_DELAY_UPDATED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderGovernorVotingPeriodUpdatedEvent"] = "NOUNS_BUILDER_GOVERNOR_VOTING_PERIOD_UPDATED_EVENT";
    NounsBuilderGovernorEventType["NounsBuilderProposalThresholdBpsUpdated"] = "NOUNS_BUILDER_PROPOSAL_THRESHOLD_BPS_UPDATED";
    NounsBuilderGovernorEventType["NounsBuilderQuorumVotesBpsUpdated"] = "NOUNS_BUILDER_QUORUM_VOTES_BPS_UPDATED";
})(NounsBuilderGovernorEventType = exports.NounsBuilderGovernorEventType || (exports.NounsBuilderGovernorEventType = {}));
var NounsBuilderManagerEventType;
(function (NounsBuilderManagerEventType) {
    NounsBuilderManagerEventType["NounsBuilderManagerDaoDeployedEvent"] = "NOUNS_BUILDER_MANAGER_DAO_DEPLOYED_EVENT";
})(NounsBuilderManagerEventType = exports.NounsBuilderManagerEventType || (exports.NounsBuilderManagerEventType = {}));
var NounsEventType;
(function (NounsEventType) {
    NounsEventType["LilNounsAuctionEvent"] = "LIL_NOUNS_AUCTION_EVENT";
    NounsEventType["NounsAuctionEvent"] = "NOUNS_AUCTION_EVENT";
    NounsEventType["NounsBuilderAuctionEvent"] = "NOUNS_BUILDER_AUCTION_EVENT";
    NounsEventType["NounsBuilderGovernorEvent"] = "NOUNS_BUILDER_GOVERNOR_EVENT";
    NounsEventType["NounsBuilderManagerEvent"] = "NOUNS_BUILDER_MANAGER_EVENT";
})(NounsEventType = exports.NounsEventType || (exports.NounsEventType = {}));
var NounsMarketType;
(function (NounsMarketType) {
    NounsMarketType["LilNounsAuction"] = "LIL_NOUNS_AUCTION";
    NounsMarketType["NounsAuction"] = "NOUNS_AUCTION";
    NounsMarketType["NounsBuilderAuction"] = "NOUNS_BUILDER_AUCTION";
})(NounsMarketType = exports.NounsMarketType || (exports.NounsMarketType = {}));
var NounsProposalSortKey;
(function (NounsProposalSortKey) {
    NounsProposalSortKey["Created"] = "CREATED";
    NounsProposalSortKey["None"] = "NONE";
})(NounsProposalSortKey = exports.NounsProposalSortKey || (exports.NounsProposalSortKey = {}));
var NounsProposalStatus;
(function (NounsProposalStatus) {
    NounsProposalStatus["Active"] = "ACTIVE";
    NounsProposalStatus["Canceled"] = "CANCELED";
    NounsProposalStatus["Created"] = "CREATED";
    NounsProposalStatus["Defeated"] = "DEFEATED";
    NounsProposalStatus["Executable"] = "EXECUTABLE";
    NounsProposalStatus["Executed"] = "EXECUTED";
    NounsProposalStatus["Expired"] = "EXPIRED";
    NounsProposalStatus["Pending"] = "PENDING";
    NounsProposalStatus["Queued"] = "QUEUED";
    NounsProposalStatus["Succeeded"] = "SUCCEEDED";
    NounsProposalStatus["Vetoed"] = "VETOED";
})(NounsProposalStatus = exports.NounsProposalStatus || (exports.NounsProposalStatus = {}));
var NounsSortKey;
(function (NounsSortKey) {
    NounsSortKey["Created"] = "CREATED";
    NounsSortKey["None"] = "NONE";
})(NounsSortKey = exports.NounsSortKey || (exports.NounsSortKey = {}));
var OffchainOrderSortKey;
(function (OffchainOrderSortKey) {
    OffchainOrderSortKey["ChainTokenPrice"] = "CHAIN_TOKEN_PRICE";
    OffchainOrderSortKey["EndTime"] = "END_TIME";
    OffchainOrderSortKey["NativePrice"] = "NATIVE_PRICE";
    OffchainOrderSortKey["None"] = "NONE";
    OffchainOrderSortKey["UsdcPrice"] = "USDC_PRICE";
})(OffchainOrderSortKey = exports.OffchainOrderSortKey || (exports.OffchainOrderSortKey = {}));
var OwnerCountSortKey;
(function (OwnerCountSortKey) {
    OwnerCountSortKey["Count"] = "COUNT";
    OwnerCountSortKey["LatestMint"] = "LATEST_MINT";
    OwnerCountSortKey["None"] = "NONE";
})(OwnerCountSortKey = exports.OwnerCountSortKey || (exports.OwnerCountSortKey = {}));
var SaleSortKey;
(function (SaleSortKey) {
    SaleSortKey["ChainTokenPrice"] = "CHAIN_TOKEN_PRICE";
    SaleSortKey["NativePrice"] = "NATIVE_PRICE";
    SaleSortKey["None"] = "NONE";
    SaleSortKey["Time"] = "TIME";
})(SaleSortKey = exports.SaleSortKey || (exports.SaleSortKey = {}));
var SaleType;
(function (SaleType) {
    SaleType["CryptopunksSale"] = "CRYPTOPUNKS_SALE";
    SaleType["FoundationSale"] = "FOUNDATION_SALE";
    SaleType["LilNounsAuctionSale"] = "LIL_NOUNS_AUCTION_SALE";
    SaleType["LooksRareSale"] = "LOOKS_RARE_SALE";
    SaleType["NounsAuctionSale"] = "NOUNS_AUCTION_SALE";
    SaleType["NounsBuilderAuctionSale"] = "NOUNS_BUILDER_AUCTION_SALE";
    SaleType["OpenseaBundleSale"] = "OPENSEA_BUNDLE_SALE";
    SaleType["OpenseaSingleSale"] = "OPENSEA_SINGLE_SALE";
    SaleType["RaribleSale"] = "RARIBLE_SALE";
    SaleType["SeaportSale"] = "SEAPORT_SALE";
    SaleType["SuperrareSale"] = "SUPERRARE_SALE";
    SaleType["ZeroxSale"] = "ZEROX_SALE";
    SaleType["ZoraV2AuctionSale"] = "ZORA_V2_AUCTION_SALE";
    SaleType["ZoraV3AskSale"] = "ZORA_V3_ASK_SALE";
    SaleType["ZoraV3ReserveAuctionSale"] = "ZORA_V3_RESERVE_AUCTION_SALE";
})(SaleType = exports.SaleType || (exports.SaleType = {}));
var SeaportEventType;
(function (SeaportEventType) {
    SeaportEventType["SeaportCounterIncrementedEvent"] = "SEAPORT_COUNTER_INCREMENTED_EVENT";
    SeaportEventType["SeaportOrderCancelledEvent"] = "SEAPORT_ORDER_CANCELLED_EVENT";
    SeaportEventType["SeaportOrderFulfilledEvent"] = "SEAPORT_ORDER_FULFILLED_EVENT";
    SeaportEventType["SeaportOrderValidatedEvent"] = "SEAPORT_ORDER_VALIDATED_EVENT";
})(SeaportEventType = exports.SeaportEventType || (exports.SeaportEventType = {}));
var SearchableEntity;
(function (SearchableEntity) {
    SearchableEntity["Collection"] = "COLLECTION";
    SearchableEntity["Token"] = "TOKEN";
})(SearchableEntity = exports.SearchableEntity || (exports.SearchableEntity = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "ASC";
    SortDirection["Desc"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var Support;
(function (Support) {
    Support["Abstain"] = "ABSTAIN";
    Support["Against"] = "AGAINST";
    Support["For"] = "FOR";
})(Support = exports.Support || (exports.Support = {}));
var TokenSortKey;
(function (TokenSortKey) {
    TokenSortKey["ChainTokenPrice"] = "CHAIN_TOKEN_PRICE";
    TokenSortKey["Minted"] = "MINTED";
    TokenSortKey["NativePrice"] = "NATIVE_PRICE";
    TokenSortKey["None"] = "NONE";
    TokenSortKey["TimedSaleEnding"] = "TIMED_SALE_ENDING";
    TokenSortKey["TokenId"] = "TOKEN_ID";
    TokenSortKey["Transferred"] = "TRANSFERRED";
})(TokenSortKey = exports.TokenSortKey || (exports.TokenSortKey = {}));
var TokenStandard;
(function (TokenStandard) {
    TokenStandard["Erc721"] = "ERC721";
    TokenStandard["Erc1155"] = "ERC1155";
})(TokenStandard = exports.TokenStandard || (exports.TokenStandard = {}));
var V1MarketEventType;
(function (V1MarketEventType) {
    V1MarketEventType["V1MarketAskCreated"] = "V1_MARKET_ASK_CREATED";
    V1MarketEventType["V1MarketAskRemoved"] = "V1_MARKET_ASK_REMOVED";
    V1MarketEventType["V1MarketBidCreated"] = "V1_MARKET_BID_CREATED";
    V1MarketEventType["V1MarketBidFinalized"] = "V1_MARKET_BID_FINALIZED";
    V1MarketEventType["V1MarketBidRemoved"] = "V1_MARKET_BID_REMOVED";
    V1MarketEventType["V1MarketBidShareUpdated"] = "V1_MARKET_BID_SHARE_UPDATED";
})(V1MarketEventType = exports.V1MarketEventType || (exports.V1MarketEventType = {}));
var V1MediaEventType;
(function (V1MediaEventType) {
    V1MediaEventType["V1MediaTokenMetadataUriUpdatedEvent"] = "V1_MEDIA_TOKEN_METADATA_URI_UPDATED_EVENT";
    V1MediaEventType["V1MediaTokenUriUpdatedEvent"] = "V1_MEDIA_TOKEN_URI_UPDATED_EVENT";
})(V1MediaEventType = exports.V1MediaEventType || (exports.V1MediaEventType = {}));
var V2AuctionEventType;
(function (V2AuctionEventType) {
    V2AuctionEventType["V2AuctionApprovalUpdated"] = "V2_AUCTION_APPROVAL_UPDATED";
    V2AuctionEventType["V2AuctionBid"] = "V2_AUCTION_BID";
    V2AuctionEventType["V2AuctionCanceled"] = "V2_AUCTION_CANCELED";
    V2AuctionEventType["V2AuctionCreated"] = "V2_AUCTION_CREATED";
    V2AuctionEventType["V2AuctionDurationExtended"] = "V2_AUCTION_DURATION_EXTENDED";
    V2AuctionEventType["V2AuctionEnded"] = "V2_AUCTION_ENDED";
    V2AuctionEventType["V2AuctionReservePriceUpdated"] = "V2_AUCTION_RESERVE_PRICE_UPDATED";
})(V2AuctionEventType = exports.V2AuctionEventType || (exports.V2AuctionEventType = {}));
var V3AskEventType;
(function (V3AskEventType) {
    V3AskEventType["V3AsksCoreEthCanceled"] = "V3_ASKS_CORE_ETH_CANCELED";
    V3AskEventType["V3AsksCoreEthCreated"] = "V3_ASKS_CORE_ETH_CREATED";
    V3AskEventType["V3AsksCoreEthFilled"] = "V3_ASKS_CORE_ETH_FILLED";
    V3AskEventType["V3AsksCoreEthPriceUpdated"] = "V3_ASKS_CORE_ETH_PRICE_UPDATED";
    V3AskEventType["V3AsksCoreEthRoyaltyPayout"] = "V3_ASKS_CORE_ETH_ROYALTY_PAYOUT";
    V3AskEventType["V3AskCanceled"] = "V3_ASK_CANCELED";
    V3AskEventType["V3AskCreated"] = "V3_ASK_CREATED";
    V3AskEventType["V3AskFilled"] = "V3_ASK_FILLED";
    V3AskEventType["V3AskPriceUpdated"] = "V3_ASK_PRICE_UPDATED";
    V3AskEventType["V3PrivateAskCanceled"] = "V3_PRIVATE_ASK_CANCELED";
    V3AskEventType["V3PrivateAskCreated"] = "V3_PRIVATE_ASK_CREATED";
    V3AskEventType["V3PrivateAskFilled"] = "V3_PRIVATE_ASK_FILLED";
    V3AskEventType["V3PrivateAskPriceUpdated"] = "V3_PRIVATE_ASK_PRICE_UPDATED";
})(V3AskEventType = exports.V3AskEventType || (exports.V3AskEventType = {}));
var V3ModuleManagerEventType;
(function (V3ModuleManagerEventType) {
    V3ModuleManagerEventType["V3ModuleManagerApproved"] = "V3_MODULE_MANAGER_APPROVED";
})(V3ModuleManagerEventType = exports.V3ModuleManagerEventType || (exports.V3ModuleManagerEventType = {}));
var V3ReserveAuctionEventType;
(function (V3ReserveAuctionEventType) {
    V3ReserveAuctionEventType["V3ReserveAuctionBid"] = "V3_RESERVE_AUCTION_BID";
    V3ReserveAuctionEventType["V3ReserveAuctionCanceled"] = "V3_RESERVE_AUCTION_CANCELED";
    V3ReserveAuctionEventType["V3ReserveAuctionCreated"] = "V3_RESERVE_AUCTION_CREATED";
    V3ReserveAuctionEventType["V3ReserveAuctionEnded"] = "V3_RESERVE_AUCTION_ENDED";
    V3ReserveAuctionEventType["V3ReserveAuctionReservePriceUpdated"] = "V3_RESERVE_AUCTION_RESERVE_PRICE_UPDATED";
})(V3ReserveAuctionEventType = exports.V3ReserveAuctionEventType || (exports.V3ReserveAuctionEventType = {}));
exports.TokenContractInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokenContractInfo on TokenContract {
  name
  network
  description
  collectionAddress
  symbol
  chain
}
    `;
exports.PriceSummaryFragmentDoc = (0, graphql_tag_1.default) `
    fragment PriceSummary on PriceAtTime {
  blockNumber
  chainTokenPrice {
    decimal
    raw
  }
  nativePrice {
    decimal
    raw
    currency {
      address
      decimals
      name
    }
  }
  usdcPrice {
    decimal
    raw
  }
}
    `;
exports.TransactionDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment TransactionDetails on TransactionInfo {
  blockNumber
  blockTimestamp
  transactionHash
  logIndex
}
    `;
exports.MintDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment MintDetails on MintInfo {
  price {
    __typename
    ...PriceSummary
  }
  originatorAddress
  toAddress
  mintContext {
    __typename
    ...TransactionDetails
  }
}
    ${exports.PriceSummaryFragmentDoc}
${exports.TransactionDetailsFragmentDoc}`;
exports.FullMediaFragmentDoc = (0, graphql_tag_1.default) `
    fragment FullMedia on TokenContentMedia {
  size
  url
  size
  mimeType
  mediaEncoding {
    ... on ImageEncodingTypes {
      __typename
      original
      large
      poster
      thumbnail
    }
    ... on VideoEncodingTypes {
      __typename
      original
      large
      poster
      preview
      thumbnail
    }
    ... on AudioEncodingTypes {
      __typename
      original
      large
    }
    ... on UnsupportedEncodingTypes {
      __typename
      original
    }
  }
}
    `;
exports.TokenInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokenInfo on Token {
  __typename
  tokenId
  tokenContract {
    ...TokenContractInfo
  }
  mintInfo {
    ...MintDetails
  }
  collectionAddress
  lastRefreshTime
  owner
  name
  description
  image {
    ...FullMedia
  }
  content {
    ...FullMedia
  }
}
    ${exports.TokenContractInfoFragmentDoc}
${exports.MintDetailsFragmentDoc}
${exports.FullMediaFragmentDoc}`;
exports.TokenDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokenDetails on Token {
  metadata
  tokenUrl
  tokenUrlMimeType
  attributes {
    traitType
    value
    displayType
  }
}
    `;
exports.NetworkInfoDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment NetworkInfoDetails on NetworkInfo {
  chain
  network
}
    `;
exports.CollectionInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment CollectionInfo on Collection {
  address
  description
  name
  symbol
  totalSupply
  networkInfo {
    ...NetworkInfoDetails
  }
}
    ${exports.NetworkInfoDetailsFragmentDoc}`;
exports.CollectionInfoSearchResultFragmentDoc = (0, graphql_tag_1.default) `
    fragment CollectionInfoSearchResult on Collection {
  address
  collectionDescription: description
  name
  symbol
  totalSupply
}
    `;
exports.CollectionDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment CollectionDetails on Collection {
  networkInfo {
    ...NetworkInfoDetails
  }
  attributes {
    traitType
    valueMetrics {
      count
      percent
      value
    }
  }
}
    ${exports.NetworkInfoDetailsFragmentDoc}`;
exports.PageInfoDefaultFragmentDoc = (0, graphql_tag_1.default) `
    fragment PageInfoDefault on PageInfo {
  endCursor
  hasNextPage
  limit
}
    `;
exports.OwnerCountInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment OwnerCountInfo on OwnerCount {
  owner
  count
  tokenIds
}
    `;
exports.LilNounsAuctionInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment LilNounsAuctionInfo on LilNounsAuction {
  address
  tokenId
  collectionAddress
  auctionId
  auctionCurrency
  highestBidPrice {
    __typename
    ...PriceSummary
  }
  startTime
  endTime
  duration
  firstBidTime
  highestBidder
  estimatedDurationTime
  lilNounsReservePrice: reservePrice {
    __typename
    ...PriceSummary
  }
  amount {
    __typename
    ...PriceSummary
  }
  minBidIncrementPercentage
  winner
  timeBuffer
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.NounsAuctionInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment NounsAuctionInfo on NounsAuction {
  address
  tokenId
  collectionAddress
  auctionId
  auctionCurrency
  highestBidPrice {
    __typename
    ...PriceSummary
  }
  startTime
  endTime
  duration
  firstBidTime
  highestBidder
  estimatedDurationTime
  nounsReservePrice: reservePrice {
    __typename
    ...PriceSummary
  }
  amount {
    __typename
    ...PriceSummary
  }
  minBidIncrementPercentage
  winner
  timeBuffer
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V2AuctionMarketPropertiesFragmentDoc = (0, graphql_tag_1.default) `
    fragment V2AuctionMarketProperties on V2Auction {
  __typename
  firstBidTime
  highestBidder
  curator
  collectionAddress
  curatorFeePercentage
  tokenId
  auctionCurrency
  duration
  estimatedExpirationTime
  v2AuctionStatus
  tokenOwner
  address
  auctionId
  approved
  reservePrice {
    ...PriceSummary
  }
  highestBidPrice {
    ...PriceSummary
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V3ReserveAuctionPropertiesFragmentDoc = (0, graphql_tag_1.default) `
    fragment V3ReserveAuctionProperties on V3ReserveAuction {
  address
  tokenId
  collectionAddress
  status
  firstBid
  extended
  price {
    __typename
    ...PriceSummary
  }
  seller
  reserve
  v3AuctionReservePrice: reservePrice {
    __typename
    ...PriceSummary
  }
  sellerFundsRecipient
  highestBid
  highestBidPrice {
    __typename
    ...PriceSummary
  }
  v3HighestBidder: highestBidder
  duration
  startTime
  v3FirstBidTime: firstBidTime
  currency
  finder
  findersFeeBps
  estimatedDurationTime
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.ActiveMarketInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment ActiveMarketInfo on ActiveMarket {
  networkInfo {
    __typename
    ...NetworkInfoDetails
  }
  transactionInfo {
    __typename
    ...TransactionDetails
  }
  status
  marketAddress
  collectionAddress
  tokenId
  marketType
  properties {
    __typename
    ... on LilNounsAuction {
      ...LilNounsAuctionInfo
    }
    ... on NounsAuction {
      ...NounsAuctionInfo
    }
    ... on V2Auction {
      ...V2AuctionMarketProperties
    }
    ... on V3ReserveAuction {
      ...V3ReserveAuctionProperties
    }
  }
  price {
    __typename
    ...PriceSummary
  }
}
    ${exports.NetworkInfoDetailsFragmentDoc}
${exports.TransactionDetailsFragmentDoc}
${exports.LilNounsAuctionInfoFragmentDoc}
${exports.NounsAuctionInfoFragmentDoc}
${exports.V2AuctionMarketPropertiesFragmentDoc}
${exports.V3ReserveAuctionPropertiesFragmentDoc}
${exports.PriceSummaryFragmentDoc}`;
exports.MarketInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment MarketInfo on Market {
  collectionAddress
  marketAddress
  marketType
  transactionInfo {
    ...TransactionDetails
  }
  price {
    ...PriceSummary
  }
  status
  networkInfo {
    ...NetworkInfoDetails
  }
}
    ${exports.TransactionDetailsFragmentDoc}
${exports.PriceSummaryFragmentDoc}
${exports.NetworkInfoDetailsFragmentDoc}`;
exports.V3AskPropertiesFragmentDoc = (0, graphql_tag_1.default) `
    fragment V3AskProperties on V3Ask {
  __typename
  buyer
  finder
  findersFeeBps
  sellerFundsRecipient
  v3AskStatus
  seller
  address
  askCurrency
  collectionAddress
  askPrice {
    ...PriceSummary
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V1OfferPropertiesFragmentDoc = (0, graphql_tag_1.default) `
    fragment V1OfferProperties on V1Offer {
  v1OfferStatus
  sellOnShare
  bidder
  currency
  amount {
    ...PriceSummary
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V1AskPropertiesFragmentDoc = (0, graphql_tag_1.default) `
    fragment V1AskProperties on V1Ask {
  v1AskStatus
  currency
  amount {
    ...PriceSummary
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.MarketPropertiesFullFragmentDoc = (0, graphql_tag_1.default) `
    fragment MarketPropertiesFull on MarketProperties {
  __typename
  ...V2AuctionMarketProperties
  ...V3AskProperties
  ...V1OfferProperties
  ...V1AskProperties
}
    ${exports.V2AuctionMarketPropertiesFragmentDoc}
${exports.V3AskPropertiesFragmentDoc}
${exports.V1OfferPropertiesFragmentDoc}
${exports.V1AskPropertiesFragmentDoc}`;
exports.MarketDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment MarketDetails on Market {
  properties {
    ...MarketPropertiesFull
  }
}
    ${exports.MarketPropertiesFullFragmentDoc}`;
exports.MarketsOnMintInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment MarketsOnMintInfo on MintWithTokenAndMarkets {
  markets(pagination: {limit: 10}, sort: {sortKey: NONE, sortDirection: DESC}) {
    ...MarketInfo
    ...MarketDetails
  }
}
    ${exports.MarketInfoFragmentDoc}
${exports.MarketDetailsFragmentDoc}`;
exports.SaleInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment SaleInfo on Sale {
  saleContractAddress
  transactionInfo {
    ...TransactionDetails
  }
  buyerAddress
  collectionAddress
  price {
    ...PriceSummary
  }
  sellerAddress
  tokenId
}
    ${exports.TransactionDetailsFragmentDoc}
${exports.PriceSummaryFragmentDoc}`;
exports.TokensSalesInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokensSalesInfo on TokenWithMarketsSummary {
  sales(pagination: {limit: 10}, sort: {sortKey: TIME, sortDirection: DESC}) {
    ...SaleInfo
  }
}
    ${exports.SaleInfoFragmentDoc}`;
exports.V1MarketEventPropertiesInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment V1MarketEventPropertiesInfo on V1MarketEventProperties {
  __typename
  ... on V1MarketAskCreatedEventProperties {
    amount
    price {
      ...PriceSummary
    }
    currency
  }
  ... on V1MarketAskRemovedEventProperties {
    amount
    price {
      ...PriceSummary
    }
    currency
  }
  ... on V1MarketOfferCreatedEventProperties {
    amount
    price {
      ...PriceSummary
    }
    currency
    bidder
  }
  ... on V1MarketOfferFinalizedEventProperties {
    amount
    price {
      ...PriceSummary
    }
    currency
    bidder
  }
  ... on V1MarketOfferRemovedEventProperties {
    amount
    price {
      ...PriceSummary
    }
    currency
    bidder
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V2AuctionEventPropertiesInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment V2AuctionEventPropertiesInfo on V2AuctionEventProperties {
  __typename
  ... on V2AuctionBidEventProperties {
    sender
    firstBid
    extended
    value
    price {
      ...PriceSummary
    }
  }
  ... on V2AuctionCreatedEventProperties {
    auctionCurrency
    tokenOwner
    curator
    curatorFeePercentage
    duration
    reservePrice
    price {
      ...PriceSummary
    }
  }
  ... on V2AuctionCanceledEventProperties {
    tokenOwner
  }
  ... on V2AuctionDurationExtendedEventProperties {
    duration
  }
  ... on V2AuctionBidEventProperties {
    sender
    firstBid
    extended
    value
    price {
      ...PriceSummary
    }
  }
  ... on V2AuctionEndedEventProperties {
    tokenOwner
    curator
    winner
    auctionCurrency
    amount
    curatorFee
  }
  ... on V2AuctionReservePriceUpdatedEventProperties {
    reservePrice
    price {
      ...PriceSummary
    }
  }
  ... on V2AuctionEndedEventProperties {
    tokenOwner
    curator
    winner
    auctionCurrency
    amount
    curatorFee
  }
  ... on V2AuctionApprovalUpdatedEventProperties {
    approved
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.V3AskEventPropertiesInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment V3AskEventPropertiesInfo on V3AskEventProperties {
  __typename
  ... on V3AskCreatedEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskCanceledEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskPriceUpdatedEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskFilledEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
    finder
    buyer
  }
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.EventInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment EventInfo on Event {
  transactionInfo {
    ...TransactionDetails
  }
  eventType
  collectionAddress
  tokenId
  properties {
    __typename
    ... on MintEvent {
      tokenId
      collectionAddress
      originatorAddress
      toAddress
      price {
        ...PriceSummary
      }
    }
    ... on TransferEvent {
      fromAddress
      toAddress
      collectionAddress
      tokenId
    }
    ... on V1MarketEvent {
      v1MarketEventType
      address
      collectionAddress
      tokenId
      properties {
        ...V1MarketEventPropertiesInfo
      }
    }
    ... on V2AuctionEvent {
      v2AuctionEventType
      address
      auctionId
      collectionAddress
      tokenId
      properties {
        ...V2AuctionEventPropertiesInfo
      }
    }
    ... on V3AskEvent {
      v3AskEventType
      address
      collectionAddress
      tokenId
      properties {
        ...V3AskEventPropertiesInfo
      }
    }
  }
}
    ${exports.TransactionDetailsFragmentDoc}
${exports.PriceSummaryFragmentDoc}
${exports.V1MarketEventPropertiesInfoFragmentDoc}
${exports.V2AuctionEventPropertiesInfoFragmentDoc}
${exports.V3AskEventPropertiesInfoFragmentDoc}`;
exports.TokensEventsInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokensEventsInfo on TokenWithMarketsSummary {
  events(pagination: {limit: 10}, sort: {sortKey: CREATED, sortDirection: DESC}) {
    ...EventInfo
  }
}
    ${exports.EventInfoFragmentDoc}`;
exports.TokenFullDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment TokenFullDetails on TokenWithFullMarketHistory {
  sales(pagination: {limit: 10}, sort: {sortKey: TIME, sortDirection: DESC}) {
    ...SaleInfo @include(if: $includeFullDetails)
  }
  events(pagination: {limit: 10}, sort: {sortKey: CREATED, sortDirection: DESC}) {
    ...EventInfo
  }
}
    ${exports.SaleInfoFragmentDoc}
${exports.EventInfoFragmentDoc}`;
exports.SeaportOrderItemDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment SeaportOrderItemDetails on SeaportOrderItem {
  itemType
  address
  tokenId
  criteria
  startAmount
  endAmount
  startPrice {
    __typename
    ...PriceSummary
  }
  endPrice {
    __typename
    ...PriceSummary
  }
  recipient
}
    ${exports.PriceSummaryFragmentDoc}`;
exports.SeaportOrderDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment SeaportOrderDetails on SeaportOrder {
  orderHash
  offerer
  startTime
  endTime
  orderType
  price {
    __typename
    ...PriceSummary
  }
  offers {
    __typename
    ...SeaportOrderItemDetails
  }
  considerations {
    __typename
    ...SeaportOrderItemDetails
  }
  zone
  zoneHash
  salt
  conduitKey
  counter
  signature
  schemaHash
}
    ${exports.PriceSummaryFragmentDoc}
${exports.SeaportOrderItemDetailsFragmentDoc}`;
exports.OffchainOrderInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment OffchainOrderInfo on OffchainOrder {
  networkInfo {
    __typename
    ...NetworkInfoDetails
  }
  contractAddress
  collectionAddress
  tokenId
  offerer
  startTime
  endTime
  orderType
  price {
    __typename
    ...PriceSummary
  }
  properties {
    ...SeaportOrderDetails
  }
  calldata
}
    ${exports.NetworkInfoDetailsFragmentDoc}
${exports.PriceSummaryFragmentDoc}
${exports.SeaportOrderDetailsFragmentDoc}`;
exports.EventsDocument = (0, graphql_tag_1.default) `
    query events($networks: [NetworkInput!]!, $filter: EventsQueryFilter, $pagination: PaginationInput!, $sort: EventSortKeySortInput!, $where: EventsQueryInput!) {
  events(
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
    where: $where
  ) {
    __typename
    pageInfo {
      __typename
      ...PageInfoDefault
    }
    nodes {
      ...EventInfo
    }
  }
}
    ${exports.PageInfoDefaultFragmentDoc}
${exports.EventInfoFragmentDoc}`;
exports.MarketDocument = (0, graphql_tag_1.default) `
    query market($network: NetworkInput, $where: ActiveMarketQueryInput!) {
  market(network: $network, where: $where) {
    ...ActiveMarketInfo
  }
}
    ${exports.ActiveMarketInfoFragmentDoc}`;
exports.MarketsDocument = (0, graphql_tag_1.default) `
    query markets($networks: [NetworkInput!]!, $filter: MarketsQueryFilter, $pagination: PaginationInput!, $sort: MarketSortKeySortInput!, $where: MarketsQueryInput, $includeFullDetails: Boolean!) {
  markets(
    networks: $networks
    filter: $filter
    sort: $sort
    where: $where
    pagination: $pagination
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      market {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${exports.TokenInfoFragmentDoc}
${exports.TokenDetailsFragmentDoc}
${exports.MarketInfoFragmentDoc}
${exports.MarketDetailsFragmentDoc}`;
exports.MintsDocument = (0, graphql_tag_1.default) `
    query mints($networks: [NetworkInput!]!, $filter: MintsQueryFilter, $pagination: PaginationInput!, $sort: MintSortKeySortInput!, $where: MintsQueryInput, $includeFullDetails: Boolean!, $includeMarkets: Boolean!) {
  mints(
    where: $where
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      __typename
      mint {
        collectionAddress
        tokenId
        originatorAddress
        toAddress
        transactionInfo {
          ...TransactionDetails
        }
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      ...MarketsOnMintInfo @include(if: $includeMarkets)
    }
  }
}
    ${exports.TransactionDetailsFragmentDoc}
${exports.TokenInfoFragmentDoc}
${exports.TokenDetailsFragmentDoc}
${exports.MarketsOnMintInfoFragmentDoc}`;
exports.CollectionsDocument = (0, graphql_tag_1.default) `
    query collections($networks: [NetworkInput!]!, $where: CollectionsQueryInput!, $pagination: PaginationInput!, $sort: CollectionSortKeySortInput!, $includeFullDetails: Boolean!) {
  collections(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      ...CollectionInfo
      ...CollectionDetails @include(if: $includeFullDetails)
    }
  }
}
    ${exports.CollectionInfoFragmentDoc}
${exports.CollectionDetailsFragmentDoc}`;
exports.SalesDocument = (0, graphql_tag_1.default) `
    query sales($networks: [NetworkInput!]!, $where: SalesQueryInput!, $filter: SalesQueryFilter, $sort: SaleSortKeySortInput!, $pagination: PaginationInput!, $includeFullDetails: Boolean!) {
  sales(
    networks: $networks
    where: $where
    filter: $filter
    sort: $sort
    pagination: $pagination
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      sale {
        ...SaleInfo
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${exports.SaleInfoFragmentDoc}
${exports.TokenInfoFragmentDoc}
${exports.TokenDetailsFragmentDoc}`;
exports.TokensDocument = (0, graphql_tag_1.default) `
    query tokens($networks: [NetworkInput!]!, $where: TokensQueryInput, $filter: TokensQueryFilter, $pagination: PaginationInput!, $sort: TokenSortInput!, $includeFullDetails: Boolean!, $includeSalesHistory: Boolean!) {
  tokens(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
    filter: $filter
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      __typename
      marketsSummary {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      ...TokensSalesInfo @include(if: $includeSalesHistory)
      ...TokensEventsInfo @include(if: $includeFullDetails)
    }
  }
}
    ${exports.MarketInfoFragmentDoc}
${exports.MarketDetailsFragmentDoc}
${exports.TokenInfoFragmentDoc}
${exports.TokenDetailsFragmentDoc}
${exports.TokensSalesInfoFragmentDoc}
${exports.TokensEventsInfoFragmentDoc}`;
exports.TokenDocument = (0, graphql_tag_1.default) `
    query token($networks: [NetworkInput!]!, $token: TokenInput!, $includeFullDetails: Boolean!) {
  token(networks: $networks, token: $token) {
    __typename
    token {
      __typename
      ...TokenInfo
      ...TokenDetails @include(if: $includeFullDetails)
    }
    ...TokenFullDetails @include(if: $includeFullDetails)
    markets(
      pagination: {limit: 10, after: null}
      sort: {sortKey: NONE, sortDirection: DESC}
    ) {
      ...MarketInfo
      ...MarketDetails @include(if: $includeFullDetails)
    }
  }
}
    ${exports.TokenInfoFragmentDoc}
${exports.TokenDetailsFragmentDoc}
${exports.TokenFullDetailsFragmentDoc}
${exports.MarketInfoFragmentDoc}
${exports.MarketDetailsFragmentDoc}`;
exports.OffchainOrdersDocument = (0, graphql_tag_1.default) `
    query offchainOrders($networks: [NetworkInput!], $where: OffchainOrdersQueryInput, $filter: OffchainOrdersQueryFilter, $sort: OffchainOrderSortKeySortInput, $pagination: PaginationInput) {
  offchainOrders(
    networks: $networks
    where: $where
    filter: $filter
    sort: $sort
    pagination: $pagination
  ) {
    nodes {
      __typename
      token {
        __typename
        ...TokenInfo
      }
      offchainOrder {
        __typename
        ...OffchainOrderInfo
      }
    }
    pageInfo {
      __typename
      ...PageInfoDefault
    }
  }
}
    ${exports.TokenInfoFragmentDoc}
${exports.OffchainOrderInfoFragmentDoc}
${exports.PageInfoDefaultFragmentDoc}`;
exports.AggregateAttributesDocument = (0, graphql_tag_1.default) `
    query aggregateAttributes($networks: [NetworkInput!]!, $where: AggregateAttributesQueryInput!) {
  aggregateAttributes(networks: $networks, where: $where) {
    traitType
    valueMetrics {
      value
      count
      percent
    }
  }
}
    `;
exports.OwnersByCountDocument = (0, graphql_tag_1.default) `
    query ownersByCount($networks: [NetworkInput!]!, $pagination: PaginationInput!, $where: OwnersByCountQueryInput!, $sort: OwnerCountSortKeySortInput) {
  aggregateStat {
    ownersByCount(
      networks: $networks
      pagination: $pagination
      where: $where
      sort: $sort
    ) {
      pageInfo {
        endCursor
        hasNextPage
        limit
      }
      nodes {
        ...OwnerCountInfo
      }
    }
  }
}
    ${exports.OwnerCountInfoFragmentDoc}`;
exports.OwnersByCount1155Document = (0, graphql_tag_1.default) `
    query ownersByCount1155($where: OwnersByCount1155QueryInput!) {
  aggregateStat {
    ownersByCount1155(where: $where) {
      ...OwnerCountInfo
    }
  }
}
    ${exports.OwnerCountInfoFragmentDoc}`;
exports.SalesVolumeDocument = (0, graphql_tag_1.default) `
    query salesVolume($networks: [NetworkInput!]!, $where: CollectionAddressOwnerAddressAttributesInput!, $filter: SalesVolumeFilter) {
  aggregateStat {
    salesVolume(where: $where, networks: $networks, filter: $filter) {
      chainTokenPrice
      usdcPrice
      totalCount
    }
  }
}
    `;
exports.OwnerCountDocument = (0, graphql_tag_1.default) `
    query ownerCount($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    ownerCount(where: $where, networks: $networks)
  }
}
    `;
exports.NftCountDocument = (0, graphql_tag_1.default) `
    query nftCount($networks: [NetworkInput!]!, $where: CollectionAddressOwnerAddressAttributesInput!) {
  aggregateStat {
    nftCount(where: $where, networks: $networks)
  }
}
    `;
exports.FloorPriceDocument = (0, graphql_tag_1.default) `
    query floorPrice($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    floorPrice(where: $where, networks: $networks)
  }
}
    `;
exports.CollectionStatsAggregateDocument = (0, graphql_tag_1.default) `
    query collectionStatsAggregate($collectionAddress: String!, $networks: [NetworkInput!]!) {
  aggregateStat {
    floorPrice(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    ownerCount(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    nftCount(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    salesVolume(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    ) {
      chainTokenPrice
      usdcPrice
      totalCount
    }
  }
}
    `;
exports.SearchDocument = (0, graphql_tag_1.default) `
    query search($pagination: SearchPaginationInput!, $query: SearchQueryInput!, $filter: SearchFilter, $networks: [NetworkInput!]!) {
  search(pagination: $pagination, query: $query, filter: $filter, networks: $networks) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      name
      description
      entityType
      collectionAddress
      networkInfo {
        chain
        network
      }
      tokenId
      entity {
        __typename
        ... on Token {
          ...TokenInfo
        }
        ... on Collection {
          ...CollectionInfoSearchResult
        }
      }
    }
  }
}
    ${exports.TokenInfoFragmentDoc}
${exports.CollectionInfoSearchResultFragmentDoc}`;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        events(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.EventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'events');
        },
        market(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MarketDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'market');
        },
        markets(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MarketsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'markets');
        },
        mints(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MintsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'mints');
        },
        collections(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CollectionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'collections');
        },
        sales(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SalesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'sales');
        },
        tokens(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'tokens');
        },
        token(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'token');
        },
        offchainOrders(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OffchainOrdersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'offchainOrders');
        },
        aggregateAttributes(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AggregateAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'aggregateAttributes');
        },
        ownersByCount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OwnersByCountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ownersByCount');
        },
        ownersByCount1155(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OwnersByCount1155Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ownersByCount1155');
        },
        salesVolume(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SalesVolumeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'salesVolume');
        },
        ownerCount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OwnerCountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ownerCount');
        },
        nftCount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.NftCountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'nftCount');
        },
        floorPrice(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FloorPriceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'floorPrice');
        },
        collectionStatsAggregate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CollectionStatsAggregateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'collectionStatsAggregate');
        },
        search(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SearchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'search');
        }
    };
}
exports.getSdk = getSdk;
