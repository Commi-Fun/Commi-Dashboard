
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  twitterId: 'twitterId',
  name: 'name',
  profileImageUrl: 'profileImageUrl',
  verified: 'verified',
  description: 'description',
  followersCount: 'followersCount',
  followingCount: 'followingCount',
  tweetsCount: 'tweetsCount',
  listedCount: 'listedCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  handle: 'handle'
};

exports.Prisma.TweetScalarFieldEnum = {
  tweetId: 'tweetId',
  text: 'text',
  createdAt: 'createdAt',
  retweetCount: 'retweetCount',
  replyCount: 'replyCount',
  likeCount: 'likeCount',
  quoteCount: 'quoteCount',
  viewCount: 'viewCount',
  bookmarkCount: 'bookmarkCount',
  isRetweet: 'isRetweet',
  isQuote: 'isQuote',
  isReply: 'isReply',
  hasMedia: 'hasMedia',
  tickerSymbols: 'tickerSymbols',
  fetchedAt: 'fetchedAt',
  updatedAt: 'updatedAt',
  parentTweetId: 'parentTweetId',
  tweetCreatedAt: 'tweetCreatedAt',
  twitterId: 'twitterId'
};

exports.Prisma.CampaignTweetScalarFieldEnum = {
  id: 'id',
  tweetId: 'tweetId',
  campaignId: 'campaignId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NFTDistributionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  tweetId: 'tweetId',
  nftTokenId: 'nftTokenId',
  transactionHash: 'transactionHash',
  walletAddress: 'walletAddress',
  amount: 'amount',
  status: 'status',
  blockchain: 'blockchain',
  error: 'error',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SystemConfigScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CrawlerTaskScalarFieldEnum = {
  id: 'id',
  type: 'type',
  status: 'status',
  metadata: 'metadata',
  result: 'result',
  sourceId: 'sourceId',
  attempts: 'attempts',
  maxAttempts: 'maxAttempts',
  error: 'error',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WalletScalarFieldEnum = {
  id: 'id',
  address: 'address',
  isPrimary: 'isPrimary',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CampaignScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  tokenAddress: 'tokenAddress',
  tokenName: 'tokenName',
  totalAmount: 'totalAmount',
  remainingAmount: 'remainingAmount',
  marketCap: 'marketCap',
  startTime: 'startTime',
  endTime: 'endTime',
  tags: 'tags',
  socialLinks: 'socialLinks',
  creatorId: 'creatorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ticker: 'ticker',
  txHash: 'txHash',
  status: 'status'
};

exports.Prisma.TokenPoolScalarFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  txHash: 'txHash',
  amount: 'amount',
  creatorId: 'creatorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type'
};

exports.Prisma.ParticipationScalarFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  influenceScore: 'influenceScore',
  twitterId: 'twitterId'
};

exports.Prisma.ClaimRecordScalarFieldEnum = {
  id: 'id',
  campaignId: 'campaignId',
  userId: 'userId',
  amount: 'amount',
  claimed: 'claimed',
  txHash: 'txHash',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WhitelistScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  twitterId: 'twitterId',
  referralCode: 'referralCode',
  status: 'status',
  claimedAt: 'claimedAt',
  createdAt: 'createdAt',
  followedAt: 'followedAt',
  postLink: 'postLink',
  postedAt: 'postedAt',
  referredAt: 'referredAt',
  registeredAt: 'registeredAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReferralScalarFieldEnum = {
  id: 'id',
  referrerId: 'referrerId',
  referrerTwitterId: 'referrerTwitterId',
  refereeId: 'refereeId',
  refereeTwitterId: 'refereeTwitterId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokenInformationScalarFieldEnum = {
  id: 'id',
  mint: 'mint',
  name: 'name',
  symbol: 'symbol',
  uri: 'uri',
  platform: 'platform',
  marketValue: 'marketValue',
  virtualSolReserves: 'virtualSolReserves',
  virtualTokenReserves: 'virtualTokenReserves',
  realSolReserves: 'realSolReserves',
  realTokenReserves: 'realTokenReserves',
  isComplete: 'isComplete',
  lastTransactionType: 'lastTransactionType',
  blockTime: 'blockTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.DistributionStatus = exports.$Enums.DistributionStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

exports.Blockchain = exports.$Enums.Blockchain = {
  SOLANA: 'SOLANA',
  ETHEREUM: 'ETHEREUM',
  POLYGON: 'POLYGON',
  ARBITRUM: 'ARBITRUM',
  OPTIMISM: 'OPTIMISM'
};

exports.CrawlerTaskType = exports.$Enums.CrawlerTaskType = {
  USER_FETCH: 'USER_FETCH',
  TWEET_FETCH: 'TWEET_FETCH',
  COMMUNITY_FETCH: 'COMMUNITY_FETCH'
};

exports.CrawlerTaskStatus = exports.$Enums.CrawlerTaskStatus = {
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

exports.CampaignStatus = exports.$Enums.CampaignStatus = {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  ENDED: 'ENDED',
  CANCELED: 'CANCELED'
};

exports.TokenPoolType = exports.$Enums.TokenPoolType = {
  LAUNCH: 'LAUNCH',
  FUND: 'FUND'
};

exports.Prisma.ModelName = {
  User: 'User',
  Tweet: 'Tweet',
  CampaignTweet: 'CampaignTweet',
  NFTDistribution: 'NFTDistribution',
  SystemConfig: 'SystemConfig',
  CrawlerTask: 'CrawlerTask',
  Wallet: 'Wallet',
  Campaign: 'Campaign',
  TokenPool: 'TokenPool',
  Participation: 'Participation',
  ClaimRecord: 'ClaimRecord',
  Whitelist: 'Whitelist',
  Referral: 'Referral',
  TokenInformation: 'TokenInformation'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
