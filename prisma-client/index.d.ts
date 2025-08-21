
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tweet
 * 
 */
export type Tweet = $Result.DefaultSelection<Prisma.$TweetPayload>
/**
 * Model CampaignTweet
 * 
 */
export type CampaignTweet = $Result.DefaultSelection<Prisma.$CampaignTweetPayload>
/**
 * Model NFTDistribution
 * 
 */
export type NFTDistribution = $Result.DefaultSelection<Prisma.$NFTDistributionPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model CrawlerTask
 * 
 */
export type CrawlerTask = $Result.DefaultSelection<Prisma.$CrawlerTaskPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model TokenPool
 * 
 */
export type TokenPool = $Result.DefaultSelection<Prisma.$TokenPoolPayload>
/**
 * Model Participation
 * 
 */
export type Participation = $Result.DefaultSelection<Prisma.$ParticipationPayload>
/**
 * Model ClaimRecord
 * 
 */
export type ClaimRecord = $Result.DefaultSelection<Prisma.$ClaimRecordPayload>
/**
 * Model Whitelist
 * 
 */
export type Whitelist = $Result.DefaultSelection<Prisma.$WhitelistPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model TokenInformation
 * 
 */
export type TokenInformation = $Result.DefaultSelection<Prisma.$TokenInformationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DistributionStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type DistributionStatus = (typeof DistributionStatus)[keyof typeof DistributionStatus]


export const Blockchain: {
  SOLANA: 'SOLANA',
  ETHEREUM: 'ETHEREUM',
  POLYGON: 'POLYGON',
  ARBITRUM: 'ARBITRUM',
  OPTIMISM: 'OPTIMISM'
};

export type Blockchain = (typeof Blockchain)[keyof typeof Blockchain]


export const CrawlerTaskType: {
  USER_FETCH: 'USER_FETCH',
  TWEET_FETCH: 'TWEET_FETCH',
  COMMUNITY_FETCH: 'COMMUNITY_FETCH'
};

export type CrawlerTaskType = (typeof CrawlerTaskType)[keyof typeof CrawlerTaskType]


export const CrawlerTaskStatus: {
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type CrawlerTaskStatus = (typeof CrawlerTaskStatus)[keyof typeof CrawlerTaskStatus]


export const CampaignStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  ENDED: 'ENDED',
  CANCELED: 'CANCELED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const TokenPoolType: {
  LAUNCH: 'LAUNCH',
  FUND: 'FUND'
};

export type TokenPoolType = (typeof TokenPoolType)[keyof typeof TokenPoolType]

}

export type DistributionStatus = $Enums.DistributionStatus

export const DistributionStatus: typeof $Enums.DistributionStatus

export type Blockchain = $Enums.Blockchain

export const Blockchain: typeof $Enums.Blockchain

export type CrawlerTaskType = $Enums.CrawlerTaskType

export const CrawlerTaskType: typeof $Enums.CrawlerTaskType

export type CrawlerTaskStatus = $Enums.CrawlerTaskStatus

export const CrawlerTaskStatus: typeof $Enums.CrawlerTaskStatus

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type TokenPoolType = $Enums.TokenPoolType

export const TokenPoolType: typeof $Enums.TokenPoolType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tweet`: Exposes CRUD operations for the **Tweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tweets
    * const tweets = await prisma.tweet.findMany()
    * ```
    */
  get tweet(): Prisma.TweetDelegate<ExtArgs>;

  /**
   * `prisma.campaignTweet`: Exposes CRUD operations for the **CampaignTweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignTweets
    * const campaignTweets = await prisma.campaignTweet.findMany()
    * ```
    */
  get campaignTweet(): Prisma.CampaignTweetDelegate<ExtArgs>;

  /**
   * `prisma.nFTDistribution`: Exposes CRUD operations for the **NFTDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NFTDistributions
    * const nFTDistributions = await prisma.nFTDistribution.findMany()
    * ```
    */
  get nFTDistribution(): Prisma.NFTDistributionDelegate<ExtArgs>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs>;

  /**
   * `prisma.crawlerTask`: Exposes CRUD operations for the **CrawlerTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlerTasks
    * const crawlerTasks = await prisma.crawlerTask.findMany()
    * ```
    */
  get crawlerTask(): Prisma.CrawlerTaskDelegate<ExtArgs>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.tokenPool`: Exposes CRUD operations for the **TokenPool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenPools
    * const tokenPools = await prisma.tokenPool.findMany()
    * ```
    */
  get tokenPool(): Prisma.TokenPoolDelegate<ExtArgs>;

  /**
   * `prisma.participation`: Exposes CRUD operations for the **Participation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participation.findMany()
    * ```
    */
  get participation(): Prisma.ParticipationDelegate<ExtArgs>;

  /**
   * `prisma.claimRecord`: Exposes CRUD operations for the **ClaimRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimRecords
    * const claimRecords = await prisma.claimRecord.findMany()
    * ```
    */
  get claimRecord(): Prisma.ClaimRecordDelegate<ExtArgs>;

  /**
   * `prisma.whitelist`: Exposes CRUD operations for the **Whitelist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whitelists
    * const whitelists = await prisma.whitelist.findMany()
    * ```
    */
  get whitelist(): Prisma.WhitelistDelegate<ExtArgs>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs>;

  /**
   * `prisma.tokenInformation`: Exposes CRUD operations for the **TokenInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenInformations
    * const tokenInformations = await prisma.tokenInformation.findMany()
    * ```
    */
  get tokenInformation(): Prisma.TokenInformationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tweet" | "campaignTweet" | "nFTDistribution" | "systemConfig" | "crawlerTask" | "wallet" | "campaign" | "tokenPool" | "participation" | "claimRecord" | "whitelist" | "referral" | "tokenInformation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tweet: {
        payload: Prisma.$TweetPayload<ExtArgs>
        fields: Prisma.TweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findFirst: {
            args: Prisma.TweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findMany: {
            args: Prisma.TweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          create: {
            args: Prisma.TweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          createMany: {
            args: Prisma.TweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          delete: {
            args: Prisma.TweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          update: {
            args: Prisma.TweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          deleteMany: {
            args: Prisma.TweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          aggregate: {
            args: Prisma.TweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweet>
          }
          groupBy: {
            args: Prisma.TweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TweetCountArgs<ExtArgs>
            result: $Utils.Optional<TweetCountAggregateOutputType> | number
          }
        }
      }
      CampaignTweet: {
        payload: Prisma.$CampaignTweetPayload<ExtArgs>
        fields: Prisma.CampaignTweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignTweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignTweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          findFirst: {
            args: Prisma.CampaignTweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignTweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          findMany: {
            args: Prisma.CampaignTweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>[]
          }
          create: {
            args: Prisma.CampaignTweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          createMany: {
            args: Prisma.CampaignTweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignTweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>[]
          }
          delete: {
            args: Prisma.CampaignTweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          update: {
            args: Prisma.CampaignTweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          deleteMany: {
            args: Prisma.CampaignTweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignTweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignTweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignTweetPayload>
          }
          aggregate: {
            args: Prisma.CampaignTweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignTweet>
          }
          groupBy: {
            args: Prisma.CampaignTweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignTweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignTweetCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignTweetCountAggregateOutputType> | number
          }
        }
      }
      NFTDistribution: {
        payload: Prisma.$NFTDistributionPayload<ExtArgs>
        fields: Prisma.NFTDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NFTDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NFTDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          findFirst: {
            args: Prisma.NFTDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NFTDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          findMany: {
            args: Prisma.NFTDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>[]
          }
          create: {
            args: Prisma.NFTDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          createMany: {
            args: Prisma.NFTDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NFTDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>[]
          }
          delete: {
            args: Prisma.NFTDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          update: {
            args: Prisma.NFTDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          deleteMany: {
            args: Prisma.NFTDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NFTDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NFTDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTDistributionPayload>
          }
          aggregate: {
            args: Prisma.NFTDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNFTDistribution>
          }
          groupBy: {
            args: Prisma.NFTDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NFTDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NFTDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<NFTDistributionCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      CrawlerTask: {
        payload: Prisma.$CrawlerTaskPayload<ExtArgs>
        fields: Prisma.CrawlerTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlerTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlerTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          findFirst: {
            args: Prisma.CrawlerTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlerTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          findMany: {
            args: Prisma.CrawlerTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>[]
          }
          create: {
            args: Prisma.CrawlerTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          createMany: {
            args: Prisma.CrawlerTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrawlerTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>[]
          }
          delete: {
            args: Prisma.CrawlerTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          update: {
            args: Prisma.CrawlerTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          deleteMany: {
            args: Prisma.CrawlerTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlerTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CrawlerTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlerTaskPayload>
          }
          aggregate: {
            args: Prisma.CrawlerTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlerTask>
          }
          groupBy: {
            args: Prisma.CrawlerTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlerTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlerTaskCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlerTaskCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      TokenPool: {
        payload: Prisma.$TokenPoolPayload<ExtArgs>
        fields: Prisma.TokenPoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenPoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenPoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          findFirst: {
            args: Prisma.TokenPoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenPoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          findMany: {
            args: Prisma.TokenPoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>[]
          }
          create: {
            args: Prisma.TokenPoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          createMany: {
            args: Prisma.TokenPoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenPoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>[]
          }
          delete: {
            args: Prisma.TokenPoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          update: {
            args: Prisma.TokenPoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          deleteMany: {
            args: Prisma.TokenPoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenPoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenPoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPoolPayload>
          }
          aggregate: {
            args: Prisma.TokenPoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenPool>
          }
          groupBy: {
            args: Prisma.TokenPoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenPoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenPoolCountArgs<ExtArgs>
            result: $Utils.Optional<TokenPoolCountAggregateOutputType> | number
          }
        }
      }
      Participation: {
        payload: Prisma.$ParticipationPayload<ExtArgs>
        fields: Prisma.ParticipationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findFirst: {
            args: Prisma.ParticipationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findMany: {
            args: Prisma.ParticipationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          create: {
            args: Prisma.ParticipationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          createMany: {
            args: Prisma.ParticipationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          delete: {
            args: Prisma.ParticipationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          update: {
            args: Prisma.ParticipationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParticipationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          aggregate: {
            args: Prisma.ParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation>
          }
          groupBy: {
            args: Prisma.ParticipationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationCountAggregateOutputType> | number
          }
        }
      }
      ClaimRecord: {
        payload: Prisma.$ClaimRecordPayload<ExtArgs>
        fields: Prisma.ClaimRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          findFirst: {
            args: Prisma.ClaimRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          findMany: {
            args: Prisma.ClaimRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>[]
          }
          create: {
            args: Prisma.ClaimRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          createMany: {
            args: Prisma.ClaimRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>[]
          }
          delete: {
            args: Prisma.ClaimRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          update: {
            args: Prisma.ClaimRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          deleteMany: {
            args: Prisma.ClaimRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaimRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimRecordPayload>
          }
          aggregate: {
            args: Prisma.ClaimRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimRecord>
          }
          groupBy: {
            args: Prisma.ClaimRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimRecordCountAggregateOutputType> | number
          }
        }
      }
      Whitelist: {
        payload: Prisma.$WhitelistPayload<ExtArgs>
        fields: Prisma.WhitelistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhitelistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhitelistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          findFirst: {
            args: Prisma.WhitelistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhitelistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          findMany: {
            args: Prisma.WhitelistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>[]
          }
          create: {
            args: Prisma.WhitelistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          createMany: {
            args: Prisma.WhitelistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhitelistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>[]
          }
          delete: {
            args: Prisma.WhitelistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          update: {
            args: Prisma.WhitelistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          deleteMany: {
            args: Prisma.WhitelistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhitelistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhitelistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistPayload>
          }
          aggregate: {
            args: Prisma.WhitelistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhitelist>
          }
          groupBy: {
            args: Prisma.WhitelistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhitelistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhitelistCountArgs<ExtArgs>
            result: $Utils.Optional<WhitelistCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      TokenInformation: {
        payload: Prisma.$TokenInformationPayload<ExtArgs>
        fields: Prisma.TokenInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          findFirst: {
            args: Prisma.TokenInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          findMany: {
            args: Prisma.TokenInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>[]
          }
          create: {
            args: Prisma.TokenInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          createMany: {
            args: Prisma.TokenInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>[]
          }
          delete: {
            args: Prisma.TokenInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          update: {
            args: Prisma.TokenInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          deleteMany: {
            args: Prisma.TokenInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInformationPayload>
          }
          aggregate: {
            args: Prisma.TokenInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenInformation>
          }
          groupBy: {
            args: Prisma.TokenInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenInformationCountArgs<ExtArgs>
            result: $Utils.Optional<TokenInformationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    followersCount: number | null
    followingCount: number | null
    tweetsCount: number | null
    listedCount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    followersCount: number | null
    followingCount: number | null
    tweetsCount: number | null
    listedCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    twitterId: string | null
    name: string | null
    profileImageUrl: string | null
    verified: boolean | null
    description: string | null
    followersCount: number | null
    followingCount: number | null
    tweetsCount: number | null
    listedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    handle: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    twitterId: string | null
    name: string | null
    profileImageUrl: string | null
    verified: boolean | null
    description: string | null
    followersCount: number | null
    followingCount: number | null
    tweetsCount: number | null
    listedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    handle: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    twitterId: number
    name: number
    profileImageUrl: number
    verified: number
    description: number
    followersCount: number
    followingCount: number
    tweetsCount: number
    listedCount: number
    createdAt: number
    updatedAt: number
    handle: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    followersCount?: true
    followingCount?: true
    tweetsCount?: true
    listedCount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    followersCount?: true
    followingCount?: true
    tweetsCount?: true
    listedCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    twitterId?: true
    name?: true
    profileImageUrl?: true
    verified?: true
    description?: true
    followersCount?: true
    followingCount?: true
    tweetsCount?: true
    listedCount?: true
    createdAt?: true
    updatedAt?: true
    handle?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    twitterId?: true
    name?: true
    profileImageUrl?: true
    verified?: true
    description?: true
    followersCount?: true
    followingCount?: true
    tweetsCount?: true
    listedCount?: true
    createdAt?: true
    updatedAt?: true
    handle?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    twitterId?: true
    name?: true
    profileImageUrl?: true
    verified?: true
    description?: true
    followersCount?: true
    followingCount?: true
    tweetsCount?: true
    listedCount?: true
    createdAt?: true
    updatedAt?: true
    handle?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    twitterId: string
    name: string
    profileImageUrl: string | null
    verified: boolean
    description: string | null
    followersCount: number
    followingCount: number
    tweetsCount: number
    listedCount: number
    createdAt: Date
    updatedAt: Date
    handle: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    twitterId?: boolean
    name?: boolean
    profileImageUrl?: boolean
    verified?: boolean
    description?: boolean
    followersCount?: boolean
    followingCount?: boolean
    tweetsCount?: boolean
    listedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handle?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    twitterId?: boolean
    name?: boolean
    profileImageUrl?: boolean
    verified?: boolean
    description?: boolean
    followersCount?: boolean
    followingCount?: boolean
    tweetsCount?: boolean
    listedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handle?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    twitterId?: boolean
    name?: boolean
    profileImageUrl?: boolean
    verified?: boolean
    description?: boolean
    followersCount?: boolean
    followingCount?: boolean
    tweetsCount?: boolean
    listedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    handle?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      twitterId: string
      name: string
      profileImageUrl: string | null
      verified: boolean
      description: string | null
      followersCount: number
      followingCount: number
      tweetsCount: number
      listedCount: number
      createdAt: Date
      updatedAt: Date
      handle: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly twitterId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly description: FieldRef<"User", 'String'>
    readonly followersCount: FieldRef<"User", 'Int'>
    readonly followingCount: FieldRef<"User", 'Int'>
    readonly tweetsCount: FieldRef<"User", 'Int'>
    readonly listedCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly handle: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Tweet
   */

  export type AggregateTweet = {
    _count: TweetCountAggregateOutputType | null
    _avg: TweetAvgAggregateOutputType | null
    _sum: TweetSumAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  export type TweetAvgAggregateOutputType = {
    retweetCount: number | null
    replyCount: number | null
    likeCount: number | null
    quoteCount: number | null
    viewCount: number | null
    bookmarkCount: number | null
  }

  export type TweetSumAggregateOutputType = {
    retweetCount: number | null
    replyCount: number | null
    likeCount: number | null
    quoteCount: number | null
    viewCount: number | null
    bookmarkCount: number | null
  }

  export type TweetMinAggregateOutputType = {
    tweetId: string | null
    text: string | null
    createdAt: Date | null
    retweetCount: number | null
    replyCount: number | null
    likeCount: number | null
    quoteCount: number | null
    viewCount: number | null
    bookmarkCount: number | null
    isRetweet: boolean | null
    isQuote: boolean | null
    isReply: boolean | null
    hasMedia: boolean | null
    fetchedAt: Date | null
    updatedAt: Date | null
    parentTweetId: string | null
    tweetCreatedAt: Date | null
    twitterId: string | null
  }

  export type TweetMaxAggregateOutputType = {
    tweetId: string | null
    text: string | null
    createdAt: Date | null
    retweetCount: number | null
    replyCount: number | null
    likeCount: number | null
    quoteCount: number | null
    viewCount: number | null
    bookmarkCount: number | null
    isRetweet: boolean | null
    isQuote: boolean | null
    isReply: boolean | null
    hasMedia: boolean | null
    fetchedAt: Date | null
    updatedAt: Date | null
    parentTweetId: string | null
    tweetCreatedAt: Date | null
    twitterId: string | null
  }

  export type TweetCountAggregateOutputType = {
    tweetId: number
    text: number
    createdAt: number
    retweetCount: number
    replyCount: number
    likeCount: number
    quoteCount: number
    viewCount: number
    bookmarkCount: number
    isRetweet: number
    isQuote: number
    isReply: number
    hasMedia: number
    tickerSymbols: number
    fetchedAt: number
    updatedAt: number
    parentTweetId: number
    tweetCreatedAt: number
    twitterId: number
    _all: number
  }


  export type TweetAvgAggregateInputType = {
    retweetCount?: true
    replyCount?: true
    likeCount?: true
    quoteCount?: true
    viewCount?: true
    bookmarkCount?: true
  }

  export type TweetSumAggregateInputType = {
    retweetCount?: true
    replyCount?: true
    likeCount?: true
    quoteCount?: true
    viewCount?: true
    bookmarkCount?: true
  }

  export type TweetMinAggregateInputType = {
    tweetId?: true
    text?: true
    createdAt?: true
    retweetCount?: true
    replyCount?: true
    likeCount?: true
    quoteCount?: true
    viewCount?: true
    bookmarkCount?: true
    isRetweet?: true
    isQuote?: true
    isReply?: true
    hasMedia?: true
    fetchedAt?: true
    updatedAt?: true
    parentTweetId?: true
    tweetCreatedAt?: true
    twitterId?: true
  }

  export type TweetMaxAggregateInputType = {
    tweetId?: true
    text?: true
    createdAt?: true
    retweetCount?: true
    replyCount?: true
    likeCount?: true
    quoteCount?: true
    viewCount?: true
    bookmarkCount?: true
    isRetweet?: true
    isQuote?: true
    isReply?: true
    hasMedia?: true
    fetchedAt?: true
    updatedAt?: true
    parentTweetId?: true
    tweetCreatedAt?: true
    twitterId?: true
  }

  export type TweetCountAggregateInputType = {
    tweetId?: true
    text?: true
    createdAt?: true
    retweetCount?: true
    replyCount?: true
    likeCount?: true
    quoteCount?: true
    viewCount?: true
    bookmarkCount?: true
    isRetweet?: true
    isQuote?: true
    isReply?: true
    hasMedia?: true
    tickerSymbols?: true
    fetchedAt?: true
    updatedAt?: true
    parentTweetId?: true
    tweetCreatedAt?: true
    twitterId?: true
    _all?: true
  }

  export type TweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweet to aggregate.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tweets
    **/
    _count?: true | TweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TweetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TweetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetMaxAggregateInputType
  }

  export type GetTweetAggregateType<T extends TweetAggregateArgs> = {
        [P in keyof T & keyof AggregateTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweet[P]>
      : GetScalarType<T[P], AggregateTweet[P]>
  }




  export type TweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithAggregationInput | TweetOrderByWithAggregationInput[]
    by: TweetScalarFieldEnum[] | TweetScalarFieldEnum
    having?: TweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetCountAggregateInputType | true
    _avg?: TweetAvgAggregateInputType
    _sum?: TweetSumAggregateInputType
    _min?: TweetMinAggregateInputType
    _max?: TweetMaxAggregateInputType
  }

  export type TweetGroupByOutputType = {
    tweetId: string
    text: string
    createdAt: Date
    retweetCount: number
    replyCount: number
    likeCount: number
    quoteCount: number
    viewCount: number
    bookmarkCount: number
    isRetweet: boolean
    isQuote: boolean
    isReply: boolean
    hasMedia: boolean
    tickerSymbols: string[]
    fetchedAt: Date
    updatedAt: Date
    parentTweetId: string | null
    tweetCreatedAt: Date
    twitterId: string
    _count: TweetCountAggregateOutputType | null
    _avg: TweetAvgAggregateOutputType | null
    _sum: TweetSumAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  type GetTweetGroupByPayload<T extends TweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetGroupByOutputType[P]>
            : GetScalarType<T[P], TweetGroupByOutputType[P]>
        }
      >
    >


  export type TweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    text?: boolean
    createdAt?: boolean
    retweetCount?: boolean
    replyCount?: boolean
    likeCount?: boolean
    quoteCount?: boolean
    viewCount?: boolean
    bookmarkCount?: boolean
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: boolean
    fetchedAt?: boolean
    updatedAt?: boolean
    parentTweetId?: boolean
    tweetCreatedAt?: boolean
    twitterId?: boolean
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tweetId?: boolean
    text?: boolean
    createdAt?: boolean
    retweetCount?: boolean
    replyCount?: boolean
    likeCount?: boolean
    quoteCount?: boolean
    viewCount?: boolean
    bookmarkCount?: boolean
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: boolean
    fetchedAt?: boolean
    updatedAt?: boolean
    parentTweetId?: boolean
    tweetCreatedAt?: boolean
    twitterId?: boolean
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectScalar = {
    tweetId?: boolean
    text?: boolean
    createdAt?: boolean
    retweetCount?: boolean
    replyCount?: boolean
    likeCount?: boolean
    quoteCount?: boolean
    viewCount?: boolean
    bookmarkCount?: boolean
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: boolean
    fetchedAt?: boolean
    updatedAt?: boolean
    parentTweetId?: boolean
    tweetCreatedAt?: boolean
    twitterId?: boolean
  }


  export type $TweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tweet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tweetId: string
      text: string
      createdAt: Date
      retweetCount: number
      replyCount: number
      likeCount: number
      quoteCount: number
      viewCount: number
      bookmarkCount: number
      isRetweet: boolean
      isQuote: boolean
      isReply: boolean
      hasMedia: boolean
      tickerSymbols: string[]
      fetchedAt: Date
      updatedAt: Date
      parentTweetId: string | null
      tweetCreatedAt: Date
      twitterId: string
    }, ExtArgs["result"]["tweet"]>
    composites: {}
  }

  type TweetGetPayload<S extends boolean | null | undefined | TweetDefaultArgs> = $Result.GetResult<Prisma.$TweetPayload, S>

  type TweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TweetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TweetCountAggregateInputType | true
    }

  export interface TweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tweet'], meta: { name: 'Tweet' } }
    /**
     * Find zero or one Tweet that matches the filter.
     * @param {TweetFindUniqueArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetFindUniqueArgs>(args: SelectSubset<T, TweetFindUniqueArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tweet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TweetFindUniqueOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetFindFirstArgs>(args?: SelectSubset<T, TweetFindFirstArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tweets
     * const tweets = await prisma.tweet.findMany()
     * 
     * // Get first 10 Tweets
     * const tweets = await prisma.tweet.findMany({ take: 10 })
     * 
     * // Only select the `tweetId`
     * const tweetWithTweetIdOnly = await prisma.tweet.findMany({ select: { tweetId: true } })
     * 
     */
    findMany<T extends TweetFindManyArgs>(args?: SelectSubset<T, TweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tweet.
     * @param {TweetCreateArgs} args - Arguments to create a Tweet.
     * @example
     * // Create one Tweet
     * const Tweet = await prisma.tweet.create({
     *   data: {
     *     // ... data to create a Tweet
     *   }
     * })
     * 
     */
    create<T extends TweetCreateArgs>(args: SelectSubset<T, TweetCreateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tweets.
     * @param {TweetCreateManyArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetCreateManyArgs>(args?: SelectSubset<T, TweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tweets and returns the data saved in the database.
     * @param {TweetCreateManyAndReturnArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tweets and only return the `tweetId`
     * const tweetWithTweetIdOnly = await prisma.tweet.createManyAndReturn({ 
     *   select: { tweetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TweetCreateManyAndReturnArgs>(args?: SelectSubset<T, TweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tweet.
     * @param {TweetDeleteArgs} args - Arguments to delete one Tweet.
     * @example
     * // Delete one Tweet
     * const Tweet = await prisma.tweet.delete({
     *   where: {
     *     // ... filter to delete one Tweet
     *   }
     * })
     * 
     */
    delete<T extends TweetDeleteArgs>(args: SelectSubset<T, TweetDeleteArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tweet.
     * @param {TweetUpdateArgs} args - Arguments to update one Tweet.
     * @example
     * // Update one Tweet
     * const tweet = await prisma.tweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetUpdateArgs>(args: SelectSubset<T, TweetUpdateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tweets.
     * @param {TweetDeleteManyArgs} args - Arguments to filter Tweets to delete.
     * @example
     * // Delete a few Tweets
     * const { count } = await prisma.tweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetDeleteManyArgs>(args?: SelectSubset<T, TweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tweets
     * const tweet = await prisma.tweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetUpdateManyArgs>(args: SelectSubset<T, TweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tweet.
     * @param {TweetUpsertArgs} args - Arguments to update or create a Tweet.
     * @example
     * // Update or create a Tweet
     * const tweet = await prisma.tweet.upsert({
     *   create: {
     *     // ... data to create a Tweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tweet we want to update
     *   }
     * })
     */
    upsert<T extends TweetUpsertArgs>(args: SelectSubset<T, TweetUpsertArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetCountArgs} args - Arguments to filter Tweets to count.
     * @example
     * // Count the number of Tweets
     * const count = await prisma.tweet.count({
     *   where: {
     *     // ... the filter for the Tweets we want to count
     *   }
     * })
    **/
    count<T extends TweetCountArgs>(
      args?: Subset<T, TweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TweetAggregateArgs>(args: Subset<T, TweetAggregateArgs>): Prisma.PrismaPromise<GetTweetAggregateType<T>>

    /**
     * Group by Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetGroupByArgs['orderBy'] }
        : { orderBy?: TweetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tweet model
   */
  readonly fields: TweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tweet model
   */ 
  interface TweetFieldRefs {
    readonly tweetId: FieldRef<"Tweet", 'String'>
    readonly text: FieldRef<"Tweet", 'String'>
    readonly createdAt: FieldRef<"Tweet", 'DateTime'>
    readonly retweetCount: FieldRef<"Tweet", 'Int'>
    readonly replyCount: FieldRef<"Tweet", 'Int'>
    readonly likeCount: FieldRef<"Tweet", 'Int'>
    readonly quoteCount: FieldRef<"Tweet", 'Int'>
    readonly viewCount: FieldRef<"Tweet", 'Int'>
    readonly bookmarkCount: FieldRef<"Tweet", 'Int'>
    readonly isRetweet: FieldRef<"Tweet", 'Boolean'>
    readonly isQuote: FieldRef<"Tweet", 'Boolean'>
    readonly isReply: FieldRef<"Tweet", 'Boolean'>
    readonly hasMedia: FieldRef<"Tweet", 'Boolean'>
    readonly tickerSymbols: FieldRef<"Tweet", 'String[]'>
    readonly fetchedAt: FieldRef<"Tweet", 'DateTime'>
    readonly updatedAt: FieldRef<"Tweet", 'DateTime'>
    readonly parentTweetId: FieldRef<"Tweet", 'String'>
    readonly tweetCreatedAt: FieldRef<"Tweet", 'DateTime'>
    readonly twitterId: FieldRef<"Tweet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tweet findUnique
   */
  export type TweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findUniqueOrThrow
   */
  export type TweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findFirst
   */
  export type TweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findFirstOrThrow
   */
  export type TweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findMany
   */
  export type TweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter, which Tweets to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet create
   */
  export type TweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * The data needed to create a Tweet.
     */
    data: XOR<TweetCreateInput, TweetUncheckedCreateInput>
  }

  /**
   * Tweet createMany
   */
  export type TweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tweet createManyAndReturn
   */
  export type TweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tweet update
   */
  export type TweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * The data needed to update a Tweet.
     */
    data: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
    /**
     * Choose, which Tweet to update.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet updateMany
   */
  export type TweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tweets.
     */
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyInput>
    /**
     * Filter which Tweets to update
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet upsert
   */
  export type TweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * The filter to search for the Tweet to update in case it exists.
     */
    where: TweetWhereUniqueInput
    /**
     * In case the Tweet found by the `where` argument doesn't exist, create a new Tweet with this data.
     */
    create: XOR<TweetCreateInput, TweetUncheckedCreateInput>
    /**
     * In case the Tweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
  }

  /**
   * Tweet delete
   */
  export type TweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Filter which Tweet to delete.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet deleteMany
   */
  export type TweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweets to delete
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet without action
   */
  export type TweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
  }


  /**
   * Model CampaignTweet
   */

  export type AggregateCampaignTweet = {
    _count: CampaignTweetCountAggregateOutputType | null
    _avg: CampaignTweetAvgAggregateOutputType | null
    _sum: CampaignTweetSumAggregateOutputType | null
    _min: CampaignTweetMinAggregateOutputType | null
    _max: CampaignTweetMaxAggregateOutputType | null
  }

  export type CampaignTweetAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type CampaignTweetSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type CampaignTweetMinAggregateOutputType = {
    id: number | null
    tweetId: string | null
    campaignId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignTweetMaxAggregateOutputType = {
    id: number | null
    tweetId: string | null
    campaignId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignTweetCountAggregateOutputType = {
    id: number
    tweetId: number
    campaignId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignTweetAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type CampaignTweetSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type CampaignTweetMinAggregateInputType = {
    id?: true
    tweetId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignTweetMaxAggregateInputType = {
    id?: true
    tweetId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignTweetCountAggregateInputType = {
    id?: true
    tweetId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignTweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignTweet to aggregate.
     */
    where?: CampaignTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignTweets to fetch.
     */
    orderBy?: CampaignTweetOrderByWithRelationInput | CampaignTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignTweets
    **/
    _count?: true | CampaignTweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignTweetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignTweetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignTweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignTweetMaxAggregateInputType
  }

  export type GetCampaignTweetAggregateType<T extends CampaignTweetAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignTweet[P]>
      : GetScalarType<T[P], AggregateCampaignTweet[P]>
  }




  export type CampaignTweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignTweetWhereInput
    orderBy?: CampaignTweetOrderByWithAggregationInput | CampaignTweetOrderByWithAggregationInput[]
    by: CampaignTweetScalarFieldEnum[] | CampaignTweetScalarFieldEnum
    having?: CampaignTweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignTweetCountAggregateInputType | true
    _avg?: CampaignTweetAvgAggregateInputType
    _sum?: CampaignTweetSumAggregateInputType
    _min?: CampaignTweetMinAggregateInputType
    _max?: CampaignTweetMaxAggregateInputType
  }

  export type CampaignTweetGroupByOutputType = {
    id: number
    tweetId: string
    campaignId: number
    createdAt: Date
    updatedAt: Date
    _count: CampaignTweetCountAggregateOutputType | null
    _avg: CampaignTweetAvgAggregateOutputType | null
    _sum: CampaignTweetSumAggregateOutputType | null
    _min: CampaignTweetMinAggregateOutputType | null
    _max: CampaignTweetMaxAggregateOutputType | null
  }

  type GetCampaignTweetGroupByPayload<T extends CampaignTweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignTweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignTweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignTweetGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignTweetGroupByOutputType[P]>
        }
      >
    >


  export type CampaignTweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaignTweet"]>

  export type CampaignTweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaignTweet"]>

  export type CampaignTweetSelectScalar = {
    id?: boolean
    tweetId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CampaignTweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignTweet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tweetId: string
      campaignId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignTweet"]>
    composites: {}
  }

  type CampaignTweetGetPayload<S extends boolean | null | undefined | CampaignTweetDefaultArgs> = $Result.GetResult<Prisma.$CampaignTweetPayload, S>

  type CampaignTweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignTweetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignTweetCountAggregateInputType | true
    }

  export interface CampaignTweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignTweet'], meta: { name: 'CampaignTweet' } }
    /**
     * Find zero or one CampaignTweet that matches the filter.
     * @param {CampaignTweetFindUniqueArgs} args - Arguments to find a CampaignTweet
     * @example
     * // Get one CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignTweetFindUniqueArgs>(args: SelectSubset<T, CampaignTweetFindUniqueArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CampaignTweet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignTweetFindUniqueOrThrowArgs} args - Arguments to find a CampaignTweet
     * @example
     * // Get one CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignTweetFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignTweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CampaignTweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetFindFirstArgs} args - Arguments to find a CampaignTweet
     * @example
     * // Get one CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignTweetFindFirstArgs>(args?: SelectSubset<T, CampaignTweetFindFirstArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CampaignTweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetFindFirstOrThrowArgs} args - Arguments to find a CampaignTweet
     * @example
     * // Get one CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignTweetFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignTweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CampaignTweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignTweets
     * const campaignTweets = await prisma.campaignTweet.findMany()
     * 
     * // Get first 10 CampaignTweets
     * const campaignTweets = await prisma.campaignTweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignTweetWithIdOnly = await prisma.campaignTweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignTweetFindManyArgs>(args?: SelectSubset<T, CampaignTweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CampaignTweet.
     * @param {CampaignTweetCreateArgs} args - Arguments to create a CampaignTweet.
     * @example
     * // Create one CampaignTweet
     * const CampaignTweet = await prisma.campaignTweet.create({
     *   data: {
     *     // ... data to create a CampaignTweet
     *   }
     * })
     * 
     */
    create<T extends CampaignTweetCreateArgs>(args: SelectSubset<T, CampaignTweetCreateArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CampaignTweets.
     * @param {CampaignTweetCreateManyArgs} args - Arguments to create many CampaignTweets.
     * @example
     * // Create many CampaignTweets
     * const campaignTweet = await prisma.campaignTweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignTweetCreateManyArgs>(args?: SelectSubset<T, CampaignTweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignTweets and returns the data saved in the database.
     * @param {CampaignTweetCreateManyAndReturnArgs} args - Arguments to create many CampaignTweets.
     * @example
     * // Create many CampaignTweets
     * const campaignTweet = await prisma.campaignTweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignTweets and only return the `id`
     * const campaignTweetWithIdOnly = await prisma.campaignTweet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignTweetCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignTweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CampaignTweet.
     * @param {CampaignTweetDeleteArgs} args - Arguments to delete one CampaignTweet.
     * @example
     * // Delete one CampaignTweet
     * const CampaignTweet = await prisma.campaignTweet.delete({
     *   where: {
     *     // ... filter to delete one CampaignTweet
     *   }
     * })
     * 
     */
    delete<T extends CampaignTweetDeleteArgs>(args: SelectSubset<T, CampaignTweetDeleteArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CampaignTweet.
     * @param {CampaignTweetUpdateArgs} args - Arguments to update one CampaignTweet.
     * @example
     * // Update one CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignTweetUpdateArgs>(args: SelectSubset<T, CampaignTweetUpdateArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CampaignTweets.
     * @param {CampaignTweetDeleteManyArgs} args - Arguments to filter CampaignTweets to delete.
     * @example
     * // Delete a few CampaignTweets
     * const { count } = await prisma.campaignTweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignTweetDeleteManyArgs>(args?: SelectSubset<T, CampaignTweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignTweets
     * const campaignTweet = await prisma.campaignTweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignTweetUpdateManyArgs>(args: SelectSubset<T, CampaignTweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CampaignTweet.
     * @param {CampaignTweetUpsertArgs} args - Arguments to update or create a CampaignTweet.
     * @example
     * // Update or create a CampaignTweet
     * const campaignTweet = await prisma.campaignTweet.upsert({
     *   create: {
     *     // ... data to create a CampaignTweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignTweet we want to update
     *   }
     * })
     */
    upsert<T extends CampaignTweetUpsertArgs>(args: SelectSubset<T, CampaignTweetUpsertArgs<ExtArgs>>): Prisma__CampaignTweetClient<$Result.GetResult<Prisma.$CampaignTweetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CampaignTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetCountArgs} args - Arguments to filter CampaignTweets to count.
     * @example
     * // Count the number of CampaignTweets
     * const count = await prisma.campaignTweet.count({
     *   where: {
     *     // ... the filter for the CampaignTweets we want to count
     *   }
     * })
    **/
    count<T extends CampaignTweetCountArgs>(
      args?: Subset<T, CampaignTweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignTweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignTweetAggregateArgs>(args: Subset<T, CampaignTweetAggregateArgs>): Prisma.PrismaPromise<GetCampaignTweetAggregateType<T>>

    /**
     * Group by CampaignTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignTweetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignTweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignTweetGroupByArgs['orderBy'] }
        : { orderBy?: CampaignTweetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignTweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignTweet model
   */
  readonly fields: CampaignTweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignTweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignTweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignTweet model
   */ 
  interface CampaignTweetFieldRefs {
    readonly id: FieldRef<"CampaignTweet", 'Int'>
    readonly tweetId: FieldRef<"CampaignTweet", 'String'>
    readonly campaignId: FieldRef<"CampaignTweet", 'Int'>
    readonly createdAt: FieldRef<"CampaignTweet", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignTweet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignTweet findUnique
   */
  export type CampaignTweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter, which CampaignTweet to fetch.
     */
    where: CampaignTweetWhereUniqueInput
  }

  /**
   * CampaignTweet findUniqueOrThrow
   */
  export type CampaignTweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter, which CampaignTweet to fetch.
     */
    where: CampaignTweetWhereUniqueInput
  }

  /**
   * CampaignTweet findFirst
   */
  export type CampaignTweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter, which CampaignTweet to fetch.
     */
    where?: CampaignTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignTweets to fetch.
     */
    orderBy?: CampaignTweetOrderByWithRelationInput | CampaignTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignTweets.
     */
    cursor?: CampaignTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignTweets.
     */
    distinct?: CampaignTweetScalarFieldEnum | CampaignTweetScalarFieldEnum[]
  }

  /**
   * CampaignTweet findFirstOrThrow
   */
  export type CampaignTweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter, which CampaignTweet to fetch.
     */
    where?: CampaignTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignTweets to fetch.
     */
    orderBy?: CampaignTweetOrderByWithRelationInput | CampaignTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignTweets.
     */
    cursor?: CampaignTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignTweets.
     */
    distinct?: CampaignTweetScalarFieldEnum | CampaignTweetScalarFieldEnum[]
  }

  /**
   * CampaignTweet findMany
   */
  export type CampaignTweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter, which CampaignTweets to fetch.
     */
    where?: CampaignTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignTweets to fetch.
     */
    orderBy?: CampaignTweetOrderByWithRelationInput | CampaignTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignTweets.
     */
    cursor?: CampaignTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignTweets.
     */
    skip?: number
    distinct?: CampaignTweetScalarFieldEnum | CampaignTweetScalarFieldEnum[]
  }

  /**
   * CampaignTweet create
   */
  export type CampaignTweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * The data needed to create a CampaignTweet.
     */
    data: XOR<CampaignTweetCreateInput, CampaignTweetUncheckedCreateInput>
  }

  /**
   * CampaignTweet createMany
   */
  export type CampaignTweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignTweets.
     */
    data: CampaignTweetCreateManyInput | CampaignTweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignTweet createManyAndReturn
   */
  export type CampaignTweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CampaignTweets.
     */
    data: CampaignTweetCreateManyInput | CampaignTweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignTweet update
   */
  export type CampaignTweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * The data needed to update a CampaignTweet.
     */
    data: XOR<CampaignTweetUpdateInput, CampaignTweetUncheckedUpdateInput>
    /**
     * Choose, which CampaignTweet to update.
     */
    where: CampaignTweetWhereUniqueInput
  }

  /**
   * CampaignTweet updateMany
   */
  export type CampaignTweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignTweets.
     */
    data: XOR<CampaignTweetUpdateManyMutationInput, CampaignTweetUncheckedUpdateManyInput>
    /**
     * Filter which CampaignTweets to update
     */
    where?: CampaignTweetWhereInput
  }

  /**
   * CampaignTweet upsert
   */
  export type CampaignTweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * The filter to search for the CampaignTweet to update in case it exists.
     */
    where: CampaignTweetWhereUniqueInput
    /**
     * In case the CampaignTweet found by the `where` argument doesn't exist, create a new CampaignTweet with this data.
     */
    create: XOR<CampaignTweetCreateInput, CampaignTweetUncheckedCreateInput>
    /**
     * In case the CampaignTweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignTweetUpdateInput, CampaignTweetUncheckedUpdateInput>
  }

  /**
   * CampaignTweet delete
   */
  export type CampaignTweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
    /**
     * Filter which CampaignTweet to delete.
     */
    where: CampaignTweetWhereUniqueInput
  }

  /**
   * CampaignTweet deleteMany
   */
  export type CampaignTweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignTweets to delete
     */
    where?: CampaignTweetWhereInput
  }

  /**
   * CampaignTweet without action
   */
  export type CampaignTweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignTweet
     */
    select?: CampaignTweetSelect<ExtArgs> | null
  }


  /**
   * Model NFTDistribution
   */

  export type AggregateNFTDistribution = {
    _count: NFTDistributionCountAggregateOutputType | null
    _avg: NFTDistributionAvgAggregateOutputType | null
    _sum: NFTDistributionSumAggregateOutputType | null
    _min: NFTDistributionMinAggregateOutputType | null
    _max: NFTDistributionMaxAggregateOutputType | null
  }

  export type NFTDistributionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tweetId: number | null
    amount: number | null
  }

  export type NFTDistributionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tweetId: number | null
    amount: number | null
  }

  export type NFTDistributionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tweetId: number | null
    nftTokenId: string | null
    transactionHash: string | null
    walletAddress: string | null
    amount: number | null
    status: $Enums.DistributionStatus | null
    blockchain: $Enums.Blockchain | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NFTDistributionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tweetId: number | null
    nftTokenId: string | null
    transactionHash: string | null
    walletAddress: string | null
    amount: number | null
    status: $Enums.DistributionStatus | null
    blockchain: $Enums.Blockchain | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NFTDistributionCountAggregateOutputType = {
    id: number
    userId: number
    tweetId: number
    nftTokenId: number
    transactionHash: number
    walletAddress: number
    amount: number
    status: number
    blockchain: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NFTDistributionAvgAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    amount?: true
  }

  export type NFTDistributionSumAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    amount?: true
  }

  export type NFTDistributionMinAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    nftTokenId?: true
    transactionHash?: true
    walletAddress?: true
    amount?: true
    status?: true
    blockchain?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NFTDistributionMaxAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    nftTokenId?: true
    transactionHash?: true
    walletAddress?: true
    amount?: true
    status?: true
    blockchain?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NFTDistributionCountAggregateInputType = {
    id?: true
    userId?: true
    tweetId?: true
    nftTokenId?: true
    transactionHash?: true
    walletAddress?: true
    amount?: true
    status?: true
    blockchain?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NFTDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFTDistribution to aggregate.
     */
    where?: NFTDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTDistributions to fetch.
     */
    orderBy?: NFTDistributionOrderByWithRelationInput | NFTDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NFTDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NFTDistributions
    **/
    _count?: true | NFTDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NFTDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NFTDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NFTDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NFTDistributionMaxAggregateInputType
  }

  export type GetNFTDistributionAggregateType<T extends NFTDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateNFTDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNFTDistribution[P]>
      : GetScalarType<T[P], AggregateNFTDistribution[P]>
  }




  export type NFTDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFTDistributionWhereInput
    orderBy?: NFTDistributionOrderByWithAggregationInput | NFTDistributionOrderByWithAggregationInput[]
    by: NFTDistributionScalarFieldEnum[] | NFTDistributionScalarFieldEnum
    having?: NFTDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NFTDistributionCountAggregateInputType | true
    _avg?: NFTDistributionAvgAggregateInputType
    _sum?: NFTDistributionSumAggregateInputType
    _min?: NFTDistributionMinAggregateInputType
    _max?: NFTDistributionMaxAggregateInputType
  }

  export type NFTDistributionGroupByOutputType = {
    id: number
    userId: number
    tweetId: number
    nftTokenId: string | null
    transactionHash: string | null
    walletAddress: string
    amount: number
    status: $Enums.DistributionStatus
    blockchain: $Enums.Blockchain
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: NFTDistributionCountAggregateOutputType | null
    _avg: NFTDistributionAvgAggregateOutputType | null
    _sum: NFTDistributionSumAggregateOutputType | null
    _min: NFTDistributionMinAggregateOutputType | null
    _max: NFTDistributionMaxAggregateOutputType | null
  }

  type GetNFTDistributionGroupByPayload<T extends NFTDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NFTDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NFTDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NFTDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], NFTDistributionGroupByOutputType[P]>
        }
      >
    >


  export type NFTDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    nftTokenId?: boolean
    transactionHash?: boolean
    walletAddress?: boolean
    amount?: boolean
    status?: boolean
    blockchain?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nFTDistribution"]>

  export type NFTDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    nftTokenId?: boolean
    transactionHash?: boolean
    walletAddress?: boolean
    amount?: boolean
    status?: boolean
    blockchain?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nFTDistribution"]>

  export type NFTDistributionSelectScalar = {
    id?: boolean
    userId?: boolean
    tweetId?: boolean
    nftTokenId?: boolean
    transactionHash?: boolean
    walletAddress?: boolean
    amount?: boolean
    status?: boolean
    blockchain?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NFTDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NFTDistribution"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tweetId: number
      nftTokenId: string | null
      transactionHash: string | null
      walletAddress: string
      amount: number
      status: $Enums.DistributionStatus
      blockchain: $Enums.Blockchain
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nFTDistribution"]>
    composites: {}
  }

  type NFTDistributionGetPayload<S extends boolean | null | undefined | NFTDistributionDefaultArgs> = $Result.GetResult<Prisma.$NFTDistributionPayload, S>

  type NFTDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NFTDistributionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NFTDistributionCountAggregateInputType | true
    }

  export interface NFTDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NFTDistribution'], meta: { name: 'NFTDistribution' } }
    /**
     * Find zero or one NFTDistribution that matches the filter.
     * @param {NFTDistributionFindUniqueArgs} args - Arguments to find a NFTDistribution
     * @example
     * // Get one NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NFTDistributionFindUniqueArgs>(args: SelectSubset<T, NFTDistributionFindUniqueArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NFTDistribution that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NFTDistributionFindUniqueOrThrowArgs} args - Arguments to find a NFTDistribution
     * @example
     * // Get one NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NFTDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, NFTDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NFTDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionFindFirstArgs} args - Arguments to find a NFTDistribution
     * @example
     * // Get one NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NFTDistributionFindFirstArgs>(args?: SelectSubset<T, NFTDistributionFindFirstArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NFTDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionFindFirstOrThrowArgs} args - Arguments to find a NFTDistribution
     * @example
     * // Get one NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NFTDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, NFTDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NFTDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NFTDistributions
     * const nFTDistributions = await prisma.nFTDistribution.findMany()
     * 
     * // Get first 10 NFTDistributions
     * const nFTDistributions = await prisma.nFTDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nFTDistributionWithIdOnly = await prisma.nFTDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NFTDistributionFindManyArgs>(args?: SelectSubset<T, NFTDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NFTDistribution.
     * @param {NFTDistributionCreateArgs} args - Arguments to create a NFTDistribution.
     * @example
     * // Create one NFTDistribution
     * const NFTDistribution = await prisma.nFTDistribution.create({
     *   data: {
     *     // ... data to create a NFTDistribution
     *   }
     * })
     * 
     */
    create<T extends NFTDistributionCreateArgs>(args: SelectSubset<T, NFTDistributionCreateArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NFTDistributions.
     * @param {NFTDistributionCreateManyArgs} args - Arguments to create many NFTDistributions.
     * @example
     * // Create many NFTDistributions
     * const nFTDistribution = await prisma.nFTDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NFTDistributionCreateManyArgs>(args?: SelectSubset<T, NFTDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NFTDistributions and returns the data saved in the database.
     * @param {NFTDistributionCreateManyAndReturnArgs} args - Arguments to create many NFTDistributions.
     * @example
     * // Create many NFTDistributions
     * const nFTDistribution = await prisma.nFTDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NFTDistributions and only return the `id`
     * const nFTDistributionWithIdOnly = await prisma.nFTDistribution.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NFTDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, NFTDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NFTDistribution.
     * @param {NFTDistributionDeleteArgs} args - Arguments to delete one NFTDistribution.
     * @example
     * // Delete one NFTDistribution
     * const NFTDistribution = await prisma.nFTDistribution.delete({
     *   where: {
     *     // ... filter to delete one NFTDistribution
     *   }
     * })
     * 
     */
    delete<T extends NFTDistributionDeleteArgs>(args: SelectSubset<T, NFTDistributionDeleteArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NFTDistribution.
     * @param {NFTDistributionUpdateArgs} args - Arguments to update one NFTDistribution.
     * @example
     * // Update one NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NFTDistributionUpdateArgs>(args: SelectSubset<T, NFTDistributionUpdateArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NFTDistributions.
     * @param {NFTDistributionDeleteManyArgs} args - Arguments to filter NFTDistributions to delete.
     * @example
     * // Delete a few NFTDistributions
     * const { count } = await prisma.nFTDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NFTDistributionDeleteManyArgs>(args?: SelectSubset<T, NFTDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFTDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NFTDistributions
     * const nFTDistribution = await prisma.nFTDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NFTDistributionUpdateManyArgs>(args: SelectSubset<T, NFTDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NFTDistribution.
     * @param {NFTDistributionUpsertArgs} args - Arguments to update or create a NFTDistribution.
     * @example
     * // Update or create a NFTDistribution
     * const nFTDistribution = await prisma.nFTDistribution.upsert({
     *   create: {
     *     // ... data to create a NFTDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NFTDistribution we want to update
     *   }
     * })
     */
    upsert<T extends NFTDistributionUpsertArgs>(args: SelectSubset<T, NFTDistributionUpsertArgs<ExtArgs>>): Prisma__NFTDistributionClient<$Result.GetResult<Prisma.$NFTDistributionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NFTDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionCountArgs} args - Arguments to filter NFTDistributions to count.
     * @example
     * // Count the number of NFTDistributions
     * const count = await prisma.nFTDistribution.count({
     *   where: {
     *     // ... the filter for the NFTDistributions we want to count
     *   }
     * })
    **/
    count<T extends NFTDistributionCountArgs>(
      args?: Subset<T, NFTDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NFTDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NFTDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NFTDistributionAggregateArgs>(args: Subset<T, NFTDistributionAggregateArgs>): Prisma.PrismaPromise<GetNFTDistributionAggregateType<T>>

    /**
     * Group by NFTDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTDistributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NFTDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NFTDistributionGroupByArgs['orderBy'] }
        : { orderBy?: NFTDistributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NFTDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNFTDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NFTDistribution model
   */
  readonly fields: NFTDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NFTDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NFTDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NFTDistribution model
   */ 
  interface NFTDistributionFieldRefs {
    readonly id: FieldRef<"NFTDistribution", 'Int'>
    readonly userId: FieldRef<"NFTDistribution", 'Int'>
    readonly tweetId: FieldRef<"NFTDistribution", 'Int'>
    readonly nftTokenId: FieldRef<"NFTDistribution", 'String'>
    readonly transactionHash: FieldRef<"NFTDistribution", 'String'>
    readonly walletAddress: FieldRef<"NFTDistribution", 'String'>
    readonly amount: FieldRef<"NFTDistribution", 'Int'>
    readonly status: FieldRef<"NFTDistribution", 'DistributionStatus'>
    readonly blockchain: FieldRef<"NFTDistribution", 'Blockchain'>
    readonly error: FieldRef<"NFTDistribution", 'String'>
    readonly createdAt: FieldRef<"NFTDistribution", 'DateTime'>
    readonly updatedAt: FieldRef<"NFTDistribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NFTDistribution findUnique
   */
  export type NFTDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter, which NFTDistribution to fetch.
     */
    where: NFTDistributionWhereUniqueInput
  }

  /**
   * NFTDistribution findUniqueOrThrow
   */
  export type NFTDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter, which NFTDistribution to fetch.
     */
    where: NFTDistributionWhereUniqueInput
  }

  /**
   * NFTDistribution findFirst
   */
  export type NFTDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter, which NFTDistribution to fetch.
     */
    where?: NFTDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTDistributions to fetch.
     */
    orderBy?: NFTDistributionOrderByWithRelationInput | NFTDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFTDistributions.
     */
    cursor?: NFTDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFTDistributions.
     */
    distinct?: NFTDistributionScalarFieldEnum | NFTDistributionScalarFieldEnum[]
  }

  /**
   * NFTDistribution findFirstOrThrow
   */
  export type NFTDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter, which NFTDistribution to fetch.
     */
    where?: NFTDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTDistributions to fetch.
     */
    orderBy?: NFTDistributionOrderByWithRelationInput | NFTDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFTDistributions.
     */
    cursor?: NFTDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFTDistributions.
     */
    distinct?: NFTDistributionScalarFieldEnum | NFTDistributionScalarFieldEnum[]
  }

  /**
   * NFTDistribution findMany
   */
  export type NFTDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter, which NFTDistributions to fetch.
     */
    where?: NFTDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTDistributions to fetch.
     */
    orderBy?: NFTDistributionOrderByWithRelationInput | NFTDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NFTDistributions.
     */
    cursor?: NFTDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTDistributions.
     */
    skip?: number
    distinct?: NFTDistributionScalarFieldEnum | NFTDistributionScalarFieldEnum[]
  }

  /**
   * NFTDistribution create
   */
  export type NFTDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * The data needed to create a NFTDistribution.
     */
    data: XOR<NFTDistributionCreateInput, NFTDistributionUncheckedCreateInput>
  }

  /**
   * NFTDistribution createMany
   */
  export type NFTDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NFTDistributions.
     */
    data: NFTDistributionCreateManyInput | NFTDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NFTDistribution createManyAndReturn
   */
  export type NFTDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NFTDistributions.
     */
    data: NFTDistributionCreateManyInput | NFTDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NFTDistribution update
   */
  export type NFTDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * The data needed to update a NFTDistribution.
     */
    data: XOR<NFTDistributionUpdateInput, NFTDistributionUncheckedUpdateInput>
    /**
     * Choose, which NFTDistribution to update.
     */
    where: NFTDistributionWhereUniqueInput
  }

  /**
   * NFTDistribution updateMany
   */
  export type NFTDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NFTDistributions.
     */
    data: XOR<NFTDistributionUpdateManyMutationInput, NFTDistributionUncheckedUpdateManyInput>
    /**
     * Filter which NFTDistributions to update
     */
    where?: NFTDistributionWhereInput
  }

  /**
   * NFTDistribution upsert
   */
  export type NFTDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * The filter to search for the NFTDistribution to update in case it exists.
     */
    where: NFTDistributionWhereUniqueInput
    /**
     * In case the NFTDistribution found by the `where` argument doesn't exist, create a new NFTDistribution with this data.
     */
    create: XOR<NFTDistributionCreateInput, NFTDistributionUncheckedCreateInput>
    /**
     * In case the NFTDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NFTDistributionUpdateInput, NFTDistributionUncheckedUpdateInput>
  }

  /**
   * NFTDistribution delete
   */
  export type NFTDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
    /**
     * Filter which NFTDistribution to delete.
     */
    where: NFTDistributionWhereUniqueInput
  }

  /**
   * NFTDistribution deleteMany
   */
  export type NFTDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFTDistributions to delete
     */
    where?: NFTDistributionWhereInput
  }

  /**
   * NFTDistribution without action
   */
  export type NFTDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTDistribution
     */
    select?: NFTDistributionSelect<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemConfigSumAggregateOutputType = {
    id: number | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: number | null
    key: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: number | null
    key: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemConfigAvgAggregateInputType = {
    id?: true
  }

  export type SystemConfigSumAggregateInputType = {
    id?: true
  }

  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _avg?: SystemConfigAvgAggregateInputType
    _sum?: SystemConfigSumAggregateInputType
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: number
    key: string
    value: JsonValue
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: Prisma.JsonValue
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */ 
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'Int'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'Json'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
  }


  /**
   * Model CrawlerTask
   */

  export type AggregateCrawlerTask = {
    _count: CrawlerTaskCountAggregateOutputType | null
    _avg: CrawlerTaskAvgAggregateOutputType | null
    _sum: CrawlerTaskSumAggregateOutputType | null
    _min: CrawlerTaskMinAggregateOutputType | null
    _max: CrawlerTaskMaxAggregateOutputType | null
  }

  export type CrawlerTaskAvgAggregateOutputType = {
    id: number | null
    attempts: number | null
    maxAttempts: number | null
  }

  export type CrawlerTaskSumAggregateOutputType = {
    id: number | null
    attempts: number | null
    maxAttempts: number | null
  }

  export type CrawlerTaskMinAggregateOutputType = {
    id: number | null
    type: $Enums.CrawlerTaskType | null
    status: $Enums.CrawlerTaskStatus | null
    sourceId: string | null
    attempts: number | null
    maxAttempts: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlerTaskMaxAggregateOutputType = {
    id: number | null
    type: $Enums.CrawlerTaskType | null
    status: $Enums.CrawlerTaskStatus | null
    sourceId: string | null
    attempts: number | null
    maxAttempts: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlerTaskCountAggregateOutputType = {
    id: number
    type: number
    status: number
    metadata: number
    result: number
    sourceId: number
    attempts: number
    maxAttempts: number
    error: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrawlerTaskAvgAggregateInputType = {
    id?: true
    attempts?: true
    maxAttempts?: true
  }

  export type CrawlerTaskSumAggregateInputType = {
    id?: true
    attempts?: true
    maxAttempts?: true
  }

  export type CrawlerTaskMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    sourceId?: true
    attempts?: true
    maxAttempts?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlerTaskMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    sourceId?: true
    attempts?: true
    maxAttempts?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlerTaskCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    metadata?: true
    result?: true
    sourceId?: true
    attempts?: true
    maxAttempts?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrawlerTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlerTask to aggregate.
     */
    where?: CrawlerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlerTasks to fetch.
     */
    orderBy?: CrawlerTaskOrderByWithRelationInput | CrawlerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlerTasks
    **/
    _count?: true | CrawlerTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrawlerTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrawlerTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlerTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlerTaskMaxAggregateInputType
  }

  export type GetCrawlerTaskAggregateType<T extends CrawlerTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlerTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlerTask[P]>
      : GetScalarType<T[P], AggregateCrawlerTask[P]>
  }




  export type CrawlerTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlerTaskWhereInput
    orderBy?: CrawlerTaskOrderByWithAggregationInput | CrawlerTaskOrderByWithAggregationInput[]
    by: CrawlerTaskScalarFieldEnum[] | CrawlerTaskScalarFieldEnum
    having?: CrawlerTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlerTaskCountAggregateInputType | true
    _avg?: CrawlerTaskAvgAggregateInputType
    _sum?: CrawlerTaskSumAggregateInputType
    _min?: CrawlerTaskMinAggregateInputType
    _max?: CrawlerTaskMaxAggregateInputType
  }

  export type CrawlerTaskGroupByOutputType = {
    id: number
    type: $Enums.CrawlerTaskType
    status: $Enums.CrawlerTaskStatus
    metadata: JsonValue | null
    result: JsonValue | null
    sourceId: string | null
    attempts: number
    maxAttempts: number
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CrawlerTaskCountAggregateOutputType | null
    _avg: CrawlerTaskAvgAggregateOutputType | null
    _sum: CrawlerTaskSumAggregateOutputType | null
    _min: CrawlerTaskMinAggregateOutputType | null
    _max: CrawlerTaskMaxAggregateOutputType | null
  }

  type GetCrawlerTaskGroupByPayload<T extends CrawlerTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlerTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlerTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlerTaskGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlerTaskGroupByOutputType[P]>
        }
      >
    >


  export type CrawlerTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    result?: boolean
    sourceId?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlerTask"]>

  export type CrawlerTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    result?: boolean
    sourceId?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlerTask"]>

  export type CrawlerTaskSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    result?: boolean
    sourceId?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CrawlerTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlerTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.CrawlerTaskType
      status: $Enums.CrawlerTaskStatus
      metadata: Prisma.JsonValue | null
      result: Prisma.JsonValue | null
      sourceId: string | null
      attempts: number
      maxAttempts: number
      error: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crawlerTask"]>
    composites: {}
  }

  type CrawlerTaskGetPayload<S extends boolean | null | undefined | CrawlerTaskDefaultArgs> = $Result.GetResult<Prisma.$CrawlerTaskPayload, S>

  type CrawlerTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CrawlerTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CrawlerTaskCountAggregateInputType | true
    }

  export interface CrawlerTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlerTask'], meta: { name: 'CrawlerTask' } }
    /**
     * Find zero or one CrawlerTask that matches the filter.
     * @param {CrawlerTaskFindUniqueArgs} args - Arguments to find a CrawlerTask
     * @example
     * // Get one CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlerTaskFindUniqueArgs>(args: SelectSubset<T, CrawlerTaskFindUniqueArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CrawlerTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CrawlerTaskFindUniqueOrThrowArgs} args - Arguments to find a CrawlerTask
     * @example
     * // Get one CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlerTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlerTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CrawlerTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskFindFirstArgs} args - Arguments to find a CrawlerTask
     * @example
     * // Get one CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlerTaskFindFirstArgs>(args?: SelectSubset<T, CrawlerTaskFindFirstArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CrawlerTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskFindFirstOrThrowArgs} args - Arguments to find a CrawlerTask
     * @example
     * // Get one CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlerTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlerTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CrawlerTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlerTasks
     * const crawlerTasks = await prisma.crawlerTask.findMany()
     * 
     * // Get first 10 CrawlerTasks
     * const crawlerTasks = await prisma.crawlerTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlerTaskWithIdOnly = await prisma.crawlerTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlerTaskFindManyArgs>(args?: SelectSubset<T, CrawlerTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CrawlerTask.
     * @param {CrawlerTaskCreateArgs} args - Arguments to create a CrawlerTask.
     * @example
     * // Create one CrawlerTask
     * const CrawlerTask = await prisma.crawlerTask.create({
     *   data: {
     *     // ... data to create a CrawlerTask
     *   }
     * })
     * 
     */
    create<T extends CrawlerTaskCreateArgs>(args: SelectSubset<T, CrawlerTaskCreateArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CrawlerTasks.
     * @param {CrawlerTaskCreateManyArgs} args - Arguments to create many CrawlerTasks.
     * @example
     * // Create many CrawlerTasks
     * const crawlerTask = await prisma.crawlerTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlerTaskCreateManyArgs>(args?: SelectSubset<T, CrawlerTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrawlerTasks and returns the data saved in the database.
     * @param {CrawlerTaskCreateManyAndReturnArgs} args - Arguments to create many CrawlerTasks.
     * @example
     * // Create many CrawlerTasks
     * const crawlerTask = await prisma.crawlerTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrawlerTasks and only return the `id`
     * const crawlerTaskWithIdOnly = await prisma.crawlerTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrawlerTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, CrawlerTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CrawlerTask.
     * @param {CrawlerTaskDeleteArgs} args - Arguments to delete one CrawlerTask.
     * @example
     * // Delete one CrawlerTask
     * const CrawlerTask = await prisma.crawlerTask.delete({
     *   where: {
     *     // ... filter to delete one CrawlerTask
     *   }
     * })
     * 
     */
    delete<T extends CrawlerTaskDeleteArgs>(args: SelectSubset<T, CrawlerTaskDeleteArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CrawlerTask.
     * @param {CrawlerTaskUpdateArgs} args - Arguments to update one CrawlerTask.
     * @example
     * // Update one CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlerTaskUpdateArgs>(args: SelectSubset<T, CrawlerTaskUpdateArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CrawlerTasks.
     * @param {CrawlerTaskDeleteManyArgs} args - Arguments to filter CrawlerTasks to delete.
     * @example
     * // Delete a few CrawlerTasks
     * const { count } = await prisma.crawlerTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlerTaskDeleteManyArgs>(args?: SelectSubset<T, CrawlerTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlerTasks
     * const crawlerTask = await prisma.crawlerTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlerTaskUpdateManyArgs>(args: SelectSubset<T, CrawlerTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CrawlerTask.
     * @param {CrawlerTaskUpsertArgs} args - Arguments to update or create a CrawlerTask.
     * @example
     * // Update or create a CrawlerTask
     * const crawlerTask = await prisma.crawlerTask.upsert({
     *   create: {
     *     // ... data to create a CrawlerTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlerTask we want to update
     *   }
     * })
     */
    upsert<T extends CrawlerTaskUpsertArgs>(args: SelectSubset<T, CrawlerTaskUpsertArgs<ExtArgs>>): Prisma__CrawlerTaskClient<$Result.GetResult<Prisma.$CrawlerTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CrawlerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskCountArgs} args - Arguments to filter CrawlerTasks to count.
     * @example
     * // Count the number of CrawlerTasks
     * const count = await prisma.crawlerTask.count({
     *   where: {
     *     // ... the filter for the CrawlerTasks we want to count
     *   }
     * })
    **/
    count<T extends CrawlerTaskCountArgs>(
      args?: Subset<T, CrawlerTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlerTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrawlerTaskAggregateArgs>(args: Subset<T, CrawlerTaskAggregateArgs>): Prisma.PrismaPromise<GetCrawlerTaskAggregateType<T>>

    /**
     * Group by CrawlerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlerTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrawlerTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlerTaskGroupByArgs['orderBy'] }
        : { orderBy?: CrawlerTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrawlerTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlerTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlerTask model
   */
  readonly fields: CrawlerTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlerTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlerTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrawlerTask model
   */ 
  interface CrawlerTaskFieldRefs {
    readonly id: FieldRef<"CrawlerTask", 'Int'>
    readonly type: FieldRef<"CrawlerTask", 'CrawlerTaskType'>
    readonly status: FieldRef<"CrawlerTask", 'CrawlerTaskStatus'>
    readonly metadata: FieldRef<"CrawlerTask", 'Json'>
    readonly result: FieldRef<"CrawlerTask", 'Json'>
    readonly sourceId: FieldRef<"CrawlerTask", 'String'>
    readonly attempts: FieldRef<"CrawlerTask", 'Int'>
    readonly maxAttempts: FieldRef<"CrawlerTask", 'Int'>
    readonly error: FieldRef<"CrawlerTask", 'String'>
    readonly startedAt: FieldRef<"CrawlerTask", 'DateTime'>
    readonly completedAt: FieldRef<"CrawlerTask", 'DateTime'>
    readonly createdAt: FieldRef<"CrawlerTask", 'DateTime'>
    readonly updatedAt: FieldRef<"CrawlerTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlerTask findUnique
   */
  export type CrawlerTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter, which CrawlerTask to fetch.
     */
    where: CrawlerTaskWhereUniqueInput
  }

  /**
   * CrawlerTask findUniqueOrThrow
   */
  export type CrawlerTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter, which CrawlerTask to fetch.
     */
    where: CrawlerTaskWhereUniqueInput
  }

  /**
   * CrawlerTask findFirst
   */
  export type CrawlerTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter, which CrawlerTask to fetch.
     */
    where?: CrawlerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlerTasks to fetch.
     */
    orderBy?: CrawlerTaskOrderByWithRelationInput | CrawlerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlerTasks.
     */
    cursor?: CrawlerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlerTasks.
     */
    distinct?: CrawlerTaskScalarFieldEnum | CrawlerTaskScalarFieldEnum[]
  }

  /**
   * CrawlerTask findFirstOrThrow
   */
  export type CrawlerTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter, which CrawlerTask to fetch.
     */
    where?: CrawlerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlerTasks to fetch.
     */
    orderBy?: CrawlerTaskOrderByWithRelationInput | CrawlerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlerTasks.
     */
    cursor?: CrawlerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlerTasks.
     */
    distinct?: CrawlerTaskScalarFieldEnum | CrawlerTaskScalarFieldEnum[]
  }

  /**
   * CrawlerTask findMany
   */
  export type CrawlerTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter, which CrawlerTasks to fetch.
     */
    where?: CrawlerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlerTasks to fetch.
     */
    orderBy?: CrawlerTaskOrderByWithRelationInput | CrawlerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlerTasks.
     */
    cursor?: CrawlerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlerTasks.
     */
    skip?: number
    distinct?: CrawlerTaskScalarFieldEnum | CrawlerTaskScalarFieldEnum[]
  }

  /**
   * CrawlerTask create
   */
  export type CrawlerTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a CrawlerTask.
     */
    data: XOR<CrawlerTaskCreateInput, CrawlerTaskUncheckedCreateInput>
  }

  /**
   * CrawlerTask createMany
   */
  export type CrawlerTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlerTasks.
     */
    data: CrawlerTaskCreateManyInput | CrawlerTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlerTask createManyAndReturn
   */
  export type CrawlerTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CrawlerTasks.
     */
    data: CrawlerTaskCreateManyInput | CrawlerTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlerTask update
   */
  export type CrawlerTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a CrawlerTask.
     */
    data: XOR<CrawlerTaskUpdateInput, CrawlerTaskUncheckedUpdateInput>
    /**
     * Choose, which CrawlerTask to update.
     */
    where: CrawlerTaskWhereUniqueInput
  }

  /**
   * CrawlerTask updateMany
   */
  export type CrawlerTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlerTasks.
     */
    data: XOR<CrawlerTaskUpdateManyMutationInput, CrawlerTaskUncheckedUpdateManyInput>
    /**
     * Filter which CrawlerTasks to update
     */
    where?: CrawlerTaskWhereInput
  }

  /**
   * CrawlerTask upsert
   */
  export type CrawlerTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the CrawlerTask to update in case it exists.
     */
    where: CrawlerTaskWhereUniqueInput
    /**
     * In case the CrawlerTask found by the `where` argument doesn't exist, create a new CrawlerTask with this data.
     */
    create: XOR<CrawlerTaskCreateInput, CrawlerTaskUncheckedCreateInput>
    /**
     * In case the CrawlerTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlerTaskUpdateInput, CrawlerTaskUncheckedUpdateInput>
  }

  /**
   * CrawlerTask delete
   */
  export type CrawlerTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
    /**
     * Filter which CrawlerTask to delete.
     */
    where: CrawlerTaskWhereUniqueInput
  }

  /**
   * CrawlerTask deleteMany
   */
  export type CrawlerTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlerTasks to delete
     */
    where?: CrawlerTaskWhereInput
  }

  /**
   * CrawlerTask without action
   */
  export type CrawlerTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlerTask
     */
    select?: CrawlerTaskSelect<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    address: string | null
    isPrimary: boolean | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    address: string | null
    isPrimary: boolean | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    address: number
    isPrimary: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    address?: true
    isPrimary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    address: string
    isPrimary: boolean
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    isPrimary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    isPrimary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    address?: boolean
    isPrimary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      isPrimary: boolean
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallet model
   */ 
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'Int'>
    readonly address: FieldRef<"Wallet", 'String'>
    readonly isPrimary: FieldRef<"Wallet", 'Boolean'>
    readonly userId: FieldRef<"Wallet", 'Int'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    remainingAmount: number | null
    marketCap: number | null
    creatorId: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
    totalAmount: bigint | null
    remainingAmount: bigint | null
    marketCap: bigint | null
    creatorId: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    tokenAddress: string | null
    tokenName: string | null
    totalAmount: bigint | null
    remainingAmount: bigint | null
    marketCap: bigint | null
    startTime: Date | null
    endTime: Date | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ticker: string | null
    txHash: string | null
    status: $Enums.CampaignStatus | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    tokenAddress: string | null
    tokenName: string | null
    totalAmount: bigint | null
    remainingAmount: bigint | null
    marketCap: bigint | null
    startTime: Date | null
    endTime: Date | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ticker: string | null
    txHash: string | null
    status: $Enums.CampaignStatus | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tokenAddress: number
    tokenName: number
    totalAmount: number
    remainingAmount: number
    marketCap: number
    startTime: number
    endTime: number
    tags: number
    socialLinks: number
    creatorId: number
    createdAt: number
    updatedAt: number
    ticker: number
    txHash: number
    status: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
    totalAmount?: true
    remainingAmount?: true
    marketCap?: true
    creatorId?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
    totalAmount?: true
    remainingAmount?: true
    marketCap?: true
    creatorId?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tokenAddress?: true
    tokenName?: true
    totalAmount?: true
    remainingAmount?: true
    marketCap?: true
    startTime?: true
    endTime?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    ticker?: true
    txHash?: true
    status?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tokenAddress?: true
    tokenName?: true
    totalAmount?: true
    remainingAmount?: true
    marketCap?: true
    startTime?: true
    endTime?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    ticker?: true
    txHash?: true
    status?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tokenAddress?: true
    tokenName?: true
    totalAmount?: true
    remainingAmount?: true
    marketCap?: true
    startTime?: true
    endTime?: true
    tags?: true
    socialLinks?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    ticker?: true
    txHash?: true
    status?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    name: string | null
    description: string
    tokenAddress: string
    tokenName: string
    totalAmount: bigint
    remainingAmount: bigint
    marketCap: bigint | null
    startTime: Date
    endTime: Date
    tags: string[]
    socialLinks: JsonValue
    creatorId: number
    createdAt: Date
    updatedAt: Date
    ticker: string
    txHash: string
    status: $Enums.CampaignStatus
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tokenAddress?: boolean
    tokenName?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    marketCap?: boolean
    startTime?: boolean
    endTime?: boolean
    tags?: boolean
    socialLinks?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticker?: boolean
    txHash?: boolean
    status?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tokenAddress?: boolean
    tokenName?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    marketCap?: boolean
    startTime?: boolean
    endTime?: boolean
    tags?: boolean
    socialLinks?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticker?: boolean
    txHash?: boolean
    status?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tokenAddress?: boolean
    tokenName?: boolean
    totalAmount?: boolean
    remainingAmount?: boolean
    marketCap?: boolean
    startTime?: boolean
    endTime?: boolean
    tags?: boolean
    socialLinks?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticker?: boolean
    txHash?: boolean
    status?: boolean
  }


  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string
      tokenAddress: string
      tokenName: string
      totalAmount: bigint
      remainingAmount: bigint
      marketCap: bigint | null
      startTime: Date
      endTime: Date
      tags: string[]
      socialLinks: Prisma.JsonValue
      creatorId: number
      createdAt: Date
      updatedAt: Date
      ticker: string
      txHash: string
      status: $Enums.CampaignStatus
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly tokenAddress: FieldRef<"Campaign", 'String'>
    readonly tokenName: FieldRef<"Campaign", 'String'>
    readonly totalAmount: FieldRef<"Campaign", 'BigInt'>
    readonly remainingAmount: FieldRef<"Campaign", 'BigInt'>
    readonly marketCap: FieldRef<"Campaign", 'BigInt'>
    readonly startTime: FieldRef<"Campaign", 'DateTime'>
    readonly endTime: FieldRef<"Campaign", 'DateTime'>
    readonly tags: FieldRef<"Campaign", 'String[]'>
    readonly socialLinks: FieldRef<"Campaign", 'Json'>
    readonly creatorId: FieldRef<"Campaign", 'Int'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly ticker: FieldRef<"Campaign", 'String'>
    readonly txHash: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
  }


  /**
   * Model TokenPool
   */

  export type AggregateTokenPool = {
    _count: TokenPoolCountAggregateOutputType | null
    _avg: TokenPoolAvgAggregateOutputType | null
    _sum: TokenPoolSumAggregateOutputType | null
    _min: TokenPoolMinAggregateOutputType | null
    _max: TokenPoolMaxAggregateOutputType | null
  }

  export type TokenPoolAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    amount: number | null
    creatorId: number | null
  }

  export type TokenPoolSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    amount: bigint | null
    creatorId: number | null
  }

  export type TokenPoolMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    txHash: string | null
    amount: bigint | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.TokenPoolType | null
  }

  export type TokenPoolMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    txHash: string | null
    amount: bigint | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.TokenPoolType | null
  }

  export type TokenPoolCountAggregateOutputType = {
    id: number
    campaignId: number
    txHash: number
    amount: number
    creatorId: number
    createdAt: number
    updatedAt: number
    type: number
    _all: number
  }


  export type TokenPoolAvgAggregateInputType = {
    id?: true
    campaignId?: true
    amount?: true
    creatorId?: true
  }

  export type TokenPoolSumAggregateInputType = {
    id?: true
    campaignId?: true
    amount?: true
    creatorId?: true
  }

  export type TokenPoolMinAggregateInputType = {
    id?: true
    campaignId?: true
    txHash?: true
    amount?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type TokenPoolMaxAggregateInputType = {
    id?: true
    campaignId?: true
    txHash?: true
    amount?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type TokenPoolCountAggregateInputType = {
    id?: true
    campaignId?: true
    txHash?: true
    amount?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    _all?: true
  }

  export type TokenPoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenPool to aggregate.
     */
    where?: TokenPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPools to fetch.
     */
    orderBy?: TokenPoolOrderByWithRelationInput | TokenPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenPools
    **/
    _count?: true | TokenPoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenPoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenPoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenPoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenPoolMaxAggregateInputType
  }

  export type GetTokenPoolAggregateType<T extends TokenPoolAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenPool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenPool[P]>
      : GetScalarType<T[P], AggregateTokenPool[P]>
  }




  export type TokenPoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenPoolWhereInput
    orderBy?: TokenPoolOrderByWithAggregationInput | TokenPoolOrderByWithAggregationInput[]
    by: TokenPoolScalarFieldEnum[] | TokenPoolScalarFieldEnum
    having?: TokenPoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenPoolCountAggregateInputType | true
    _avg?: TokenPoolAvgAggregateInputType
    _sum?: TokenPoolSumAggregateInputType
    _min?: TokenPoolMinAggregateInputType
    _max?: TokenPoolMaxAggregateInputType
  }

  export type TokenPoolGroupByOutputType = {
    id: number
    campaignId: number
    txHash: string
    amount: bigint
    creatorId: number
    createdAt: Date
    updatedAt: Date
    type: $Enums.TokenPoolType
    _count: TokenPoolCountAggregateOutputType | null
    _avg: TokenPoolAvgAggregateOutputType | null
    _sum: TokenPoolSumAggregateOutputType | null
    _min: TokenPoolMinAggregateOutputType | null
    _max: TokenPoolMaxAggregateOutputType | null
  }

  type GetTokenPoolGroupByPayload<T extends TokenPoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenPoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenPoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenPoolGroupByOutputType[P]>
            : GetScalarType<T[P], TokenPoolGroupByOutputType[P]>
        }
      >
    >


  export type TokenPoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    txHash?: boolean
    amount?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["tokenPool"]>

  export type TokenPoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    txHash?: boolean
    amount?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["tokenPool"]>

  export type TokenPoolSelectScalar = {
    id?: boolean
    campaignId?: boolean
    txHash?: boolean
    amount?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }


  export type $TokenPoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenPool"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      txHash: string
      amount: bigint
      creatorId: number
      createdAt: Date
      updatedAt: Date
      type: $Enums.TokenPoolType
    }, ExtArgs["result"]["tokenPool"]>
    composites: {}
  }

  type TokenPoolGetPayload<S extends boolean | null | undefined | TokenPoolDefaultArgs> = $Result.GetResult<Prisma.$TokenPoolPayload, S>

  type TokenPoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenPoolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenPoolCountAggregateInputType | true
    }

  export interface TokenPoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenPool'], meta: { name: 'TokenPool' } }
    /**
     * Find zero or one TokenPool that matches the filter.
     * @param {TokenPoolFindUniqueArgs} args - Arguments to find a TokenPool
     * @example
     * // Get one TokenPool
     * const tokenPool = await prisma.tokenPool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenPoolFindUniqueArgs>(args: SelectSubset<T, TokenPoolFindUniqueArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenPool that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenPoolFindUniqueOrThrowArgs} args - Arguments to find a TokenPool
     * @example
     * // Get one TokenPool
     * const tokenPool = await prisma.tokenPool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenPoolFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenPoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenPool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolFindFirstArgs} args - Arguments to find a TokenPool
     * @example
     * // Get one TokenPool
     * const tokenPool = await prisma.tokenPool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenPoolFindFirstArgs>(args?: SelectSubset<T, TokenPoolFindFirstArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenPool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolFindFirstOrThrowArgs} args - Arguments to find a TokenPool
     * @example
     * // Get one TokenPool
     * const tokenPool = await prisma.tokenPool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenPoolFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenPoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenPools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenPools
     * const tokenPools = await prisma.tokenPool.findMany()
     * 
     * // Get first 10 TokenPools
     * const tokenPools = await prisma.tokenPool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenPoolWithIdOnly = await prisma.tokenPool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenPoolFindManyArgs>(args?: SelectSubset<T, TokenPoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenPool.
     * @param {TokenPoolCreateArgs} args - Arguments to create a TokenPool.
     * @example
     * // Create one TokenPool
     * const TokenPool = await prisma.tokenPool.create({
     *   data: {
     *     // ... data to create a TokenPool
     *   }
     * })
     * 
     */
    create<T extends TokenPoolCreateArgs>(args: SelectSubset<T, TokenPoolCreateArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenPools.
     * @param {TokenPoolCreateManyArgs} args - Arguments to create many TokenPools.
     * @example
     * // Create many TokenPools
     * const tokenPool = await prisma.tokenPool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenPoolCreateManyArgs>(args?: SelectSubset<T, TokenPoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenPools and returns the data saved in the database.
     * @param {TokenPoolCreateManyAndReturnArgs} args - Arguments to create many TokenPools.
     * @example
     * // Create many TokenPools
     * const tokenPool = await prisma.tokenPool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenPools and only return the `id`
     * const tokenPoolWithIdOnly = await prisma.tokenPool.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenPoolCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenPoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenPool.
     * @param {TokenPoolDeleteArgs} args - Arguments to delete one TokenPool.
     * @example
     * // Delete one TokenPool
     * const TokenPool = await prisma.tokenPool.delete({
     *   where: {
     *     // ... filter to delete one TokenPool
     *   }
     * })
     * 
     */
    delete<T extends TokenPoolDeleteArgs>(args: SelectSubset<T, TokenPoolDeleteArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenPool.
     * @param {TokenPoolUpdateArgs} args - Arguments to update one TokenPool.
     * @example
     * // Update one TokenPool
     * const tokenPool = await prisma.tokenPool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenPoolUpdateArgs>(args: SelectSubset<T, TokenPoolUpdateArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenPools.
     * @param {TokenPoolDeleteManyArgs} args - Arguments to filter TokenPools to delete.
     * @example
     * // Delete a few TokenPools
     * const { count } = await prisma.tokenPool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenPoolDeleteManyArgs>(args?: SelectSubset<T, TokenPoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenPools
     * const tokenPool = await prisma.tokenPool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenPoolUpdateManyArgs>(args: SelectSubset<T, TokenPoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenPool.
     * @param {TokenPoolUpsertArgs} args - Arguments to update or create a TokenPool.
     * @example
     * // Update or create a TokenPool
     * const tokenPool = await prisma.tokenPool.upsert({
     *   create: {
     *     // ... data to create a TokenPool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenPool we want to update
     *   }
     * })
     */
    upsert<T extends TokenPoolUpsertArgs>(args: SelectSubset<T, TokenPoolUpsertArgs<ExtArgs>>): Prisma__TokenPoolClient<$Result.GetResult<Prisma.$TokenPoolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolCountArgs} args - Arguments to filter TokenPools to count.
     * @example
     * // Count the number of TokenPools
     * const count = await prisma.tokenPool.count({
     *   where: {
     *     // ... the filter for the TokenPools we want to count
     *   }
     * })
    **/
    count<T extends TokenPoolCountArgs>(
      args?: Subset<T, TokenPoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenPoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenPoolAggregateArgs>(args: Subset<T, TokenPoolAggregateArgs>): Prisma.PrismaPromise<GetTokenPoolAggregateType<T>>

    /**
     * Group by TokenPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenPoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenPoolGroupByArgs['orderBy'] }
        : { orderBy?: TokenPoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenPoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenPool model
   */
  readonly fields: TokenPoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenPool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenPoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenPool model
   */ 
  interface TokenPoolFieldRefs {
    readonly id: FieldRef<"TokenPool", 'Int'>
    readonly campaignId: FieldRef<"TokenPool", 'Int'>
    readonly txHash: FieldRef<"TokenPool", 'String'>
    readonly amount: FieldRef<"TokenPool", 'BigInt'>
    readonly creatorId: FieldRef<"TokenPool", 'Int'>
    readonly createdAt: FieldRef<"TokenPool", 'DateTime'>
    readonly updatedAt: FieldRef<"TokenPool", 'DateTime'>
    readonly type: FieldRef<"TokenPool", 'TokenPoolType'>
  }
    

  // Custom InputTypes
  /**
   * TokenPool findUnique
   */
  export type TokenPoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter, which TokenPool to fetch.
     */
    where: TokenPoolWhereUniqueInput
  }

  /**
   * TokenPool findUniqueOrThrow
   */
  export type TokenPoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter, which TokenPool to fetch.
     */
    where: TokenPoolWhereUniqueInput
  }

  /**
   * TokenPool findFirst
   */
  export type TokenPoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter, which TokenPool to fetch.
     */
    where?: TokenPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPools to fetch.
     */
    orderBy?: TokenPoolOrderByWithRelationInput | TokenPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenPools.
     */
    cursor?: TokenPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenPools.
     */
    distinct?: TokenPoolScalarFieldEnum | TokenPoolScalarFieldEnum[]
  }

  /**
   * TokenPool findFirstOrThrow
   */
  export type TokenPoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter, which TokenPool to fetch.
     */
    where?: TokenPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPools to fetch.
     */
    orderBy?: TokenPoolOrderByWithRelationInput | TokenPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenPools.
     */
    cursor?: TokenPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenPools.
     */
    distinct?: TokenPoolScalarFieldEnum | TokenPoolScalarFieldEnum[]
  }

  /**
   * TokenPool findMany
   */
  export type TokenPoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter, which TokenPools to fetch.
     */
    where?: TokenPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPools to fetch.
     */
    orderBy?: TokenPoolOrderByWithRelationInput | TokenPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenPools.
     */
    cursor?: TokenPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPools.
     */
    skip?: number
    distinct?: TokenPoolScalarFieldEnum | TokenPoolScalarFieldEnum[]
  }

  /**
   * TokenPool create
   */
  export type TokenPoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * The data needed to create a TokenPool.
     */
    data: XOR<TokenPoolCreateInput, TokenPoolUncheckedCreateInput>
  }

  /**
   * TokenPool createMany
   */
  export type TokenPoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenPools.
     */
    data: TokenPoolCreateManyInput | TokenPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenPool createManyAndReturn
   */
  export type TokenPoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenPools.
     */
    data: TokenPoolCreateManyInput | TokenPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenPool update
   */
  export type TokenPoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * The data needed to update a TokenPool.
     */
    data: XOR<TokenPoolUpdateInput, TokenPoolUncheckedUpdateInput>
    /**
     * Choose, which TokenPool to update.
     */
    where: TokenPoolWhereUniqueInput
  }

  /**
   * TokenPool updateMany
   */
  export type TokenPoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenPools.
     */
    data: XOR<TokenPoolUpdateManyMutationInput, TokenPoolUncheckedUpdateManyInput>
    /**
     * Filter which TokenPools to update
     */
    where?: TokenPoolWhereInput
  }

  /**
   * TokenPool upsert
   */
  export type TokenPoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * The filter to search for the TokenPool to update in case it exists.
     */
    where: TokenPoolWhereUniqueInput
    /**
     * In case the TokenPool found by the `where` argument doesn't exist, create a new TokenPool with this data.
     */
    create: XOR<TokenPoolCreateInput, TokenPoolUncheckedCreateInput>
    /**
     * In case the TokenPool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenPoolUpdateInput, TokenPoolUncheckedUpdateInput>
  }

  /**
   * TokenPool delete
   */
  export type TokenPoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
    /**
     * Filter which TokenPool to delete.
     */
    where: TokenPoolWhereUniqueInput
  }

  /**
   * TokenPool deleteMany
   */
  export type TokenPoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenPools to delete
     */
    where?: TokenPoolWhereInput
  }

  /**
   * TokenPool without action
   */
  export type TokenPoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPool
     */
    select?: TokenPoolSelect<ExtArgs> | null
  }


  /**
   * Model Participation
   */

  export type AggregateParticipation = {
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  export type ParticipationAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    influenceScore: number | null
  }

  export type ParticipationSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    influenceScore: number | null
  }

  export type ParticipationMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    influenceScore: number | null
    twitterId: string | null
  }

  export type ParticipationMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    influenceScore: number | null
    twitterId: string | null
  }

  export type ParticipationCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    createdAt: number
    updatedAt: number
    influenceScore: number
    twitterId: number
    _all: number
  }


  export type ParticipationAvgAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    influenceScore?: true
  }

  export type ParticipationSumAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    influenceScore?: true
  }

  export type ParticipationMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    influenceScore?: true
    twitterId?: true
  }

  export type ParticipationMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    influenceScore?: true
    twitterId?: true
  }

  export type ParticipationCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    influenceScore?: true
    twitterId?: true
    _all?: true
  }

  export type ParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participation to aggregate.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participations
    **/
    _count?: true | ParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationMaxAggregateInputType
  }

  export type GetParticipationAggregateType<T extends ParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation[P]>
      : GetScalarType<T[P], AggregateParticipation[P]>
  }




  export type ParticipationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithAggregationInput | ParticipationOrderByWithAggregationInput[]
    by: ParticipationScalarFieldEnum[] | ParticipationScalarFieldEnum
    having?: ParticipationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationCountAggregateInputType | true
    _avg?: ParticipationAvgAggregateInputType
    _sum?: ParticipationSumAggregateInputType
    _min?: ParticipationMinAggregateInputType
    _max?: ParticipationMaxAggregateInputType
  }

  export type ParticipationGroupByOutputType = {
    id: number
    campaignId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    influenceScore: number | null
    twitterId: string
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  type GetParticipationGroupByPayload<T extends ParticipationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influenceScore?: boolean
    twitterId?: boolean
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influenceScore?: boolean
    twitterId?: boolean
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influenceScore?: boolean
    twitterId?: boolean
  }


  export type $ParticipationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      userId: number
      createdAt: Date
      updatedAt: Date
      influenceScore: number | null
      twitterId: string
    }, ExtArgs["result"]["participation"]>
    composites: {}
  }

  type ParticipationGetPayload<S extends boolean | null | undefined | ParticipationDefaultArgs> = $Result.GetResult<Prisma.$ParticipationPayload, S>

  type ParticipationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParticipationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParticipationCountAggregateInputType | true
    }

  export interface ParticipationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participation'], meta: { name: 'Participation' } }
    /**
     * Find zero or one Participation that matches the filter.
     * @param {ParticipationFindUniqueArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationFindUniqueArgs>(args: SelectSubset<T, ParticipationFindUniqueArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Participation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParticipationFindUniqueOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Participation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationFindFirstArgs>(args?: SelectSubset<T, ParticipationFindFirstArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Participation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participation.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationWithIdOnly = await prisma.participation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationFindManyArgs>(args?: SelectSubset<T, ParticipationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Participation.
     * @param {ParticipationCreateArgs} args - Arguments to create a Participation.
     * @example
     * // Create one Participation
     * const Participation = await prisma.participation.create({
     *   data: {
     *     // ... data to create a Participation
     *   }
     * })
     * 
     */
    create<T extends ParticipationCreateArgs>(args: SelectSubset<T, ParticipationCreateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Participations.
     * @param {ParticipationCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationCreateManyArgs>(args?: SelectSubset<T, ParticipationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {ParticipationCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Participation.
     * @param {ParticipationDeleteArgs} args - Arguments to delete one Participation.
     * @example
     * // Delete one Participation
     * const Participation = await prisma.participation.delete({
     *   where: {
     *     // ... filter to delete one Participation
     *   }
     * })
     * 
     */
    delete<T extends ParticipationDeleteArgs>(args: SelectSubset<T, ParticipationDeleteArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Participation.
     * @param {ParticipationUpdateArgs} args - Arguments to update one Participation.
     * @example
     * // Update one Participation
     * const participation = await prisma.participation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationUpdateArgs>(args: SelectSubset<T, ParticipationUpdateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Participations.
     * @param {ParticipationDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationDeleteManyArgs>(args?: SelectSubset<T, ParticipationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationUpdateManyArgs>(args: SelectSubset<T, ParticipationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participation.
     * @param {ParticipationUpsertArgs} args - Arguments to update or create a Participation.
     * @example
     * // Update or create a Participation
     * const participation = await prisma.participation.upsert({
     *   create: {
     *     // ... data to create a Participation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationUpsertArgs>(args: SelectSubset<T, ParticipationUpsertArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participation.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends ParticipationCountArgs>(
      args?: Subset<T, ParticipationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipationAggregateArgs>(args: Subset<T, ParticipationAggregateArgs>): Prisma.PrismaPromise<GetParticipationAggregateType<T>>

    /**
     * Group by Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participation model
   */
  readonly fields: ParticipationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participation model
   */ 
  interface ParticipationFieldRefs {
    readonly id: FieldRef<"Participation", 'Int'>
    readonly campaignId: FieldRef<"Participation", 'Int'>
    readonly userId: FieldRef<"Participation", 'Int'>
    readonly createdAt: FieldRef<"Participation", 'DateTime'>
    readonly updatedAt: FieldRef<"Participation", 'DateTime'>
    readonly influenceScore: FieldRef<"Participation", 'Float'>
    readonly twitterId: FieldRef<"Participation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participation findUnique
   */
  export type ParticipationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findUniqueOrThrow
   */
  export type ParticipationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findFirst
   */
  export type ParticipationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findFirstOrThrow
   */
  export type ParticipationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findMany
   */
  export type ParticipationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter, which Participations to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation create
   */
  export type ParticipationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * The data needed to create a Participation.
     */
    data: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
  }

  /**
   * Participation createMany
   */
  export type ParticipationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participation createManyAndReturn
   */
  export type ParticipationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participation update
   */
  export type ParticipationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * The data needed to update a Participation.
     */
    data: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
    /**
     * Choose, which Participation to update.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation updateMany
   */
  export type ParticipationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
  }

  /**
   * Participation upsert
   */
  export type ParticipationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * The filter to search for the Participation to update in case it exists.
     */
    where: ParticipationWhereUniqueInput
    /**
     * In case the Participation found by the `where` argument doesn't exist, create a new Participation with this data.
     */
    create: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
    /**
     * In case the Participation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
  }

  /**
   * Participation delete
   */
  export type ParticipationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Filter which Participation to delete.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation deleteMany
   */
  export type ParticipationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participations to delete
     */
    where?: ParticipationWhereInput
  }

  /**
   * Participation without action
   */
  export type ParticipationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
  }


  /**
   * Model ClaimRecord
   */

  export type AggregateClaimRecord = {
    _count: ClaimRecordCountAggregateOutputType | null
    _avg: ClaimRecordAvgAggregateOutputType | null
    _sum: ClaimRecordSumAggregateOutputType | null
    _min: ClaimRecordMinAggregateOutputType | null
    _max: ClaimRecordMaxAggregateOutputType | null
  }

  export type ClaimRecordAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    amount: number | null
  }

  export type ClaimRecordSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    amount: bigint | null
  }

  export type ClaimRecordMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    amount: bigint | null
    claimed: boolean | null
    txHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimRecordMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    userId: number | null
    amount: bigint | null
    claimed: boolean | null
    txHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimRecordCountAggregateOutputType = {
    id: number
    campaignId: number
    userId: number
    amount: number
    claimed: number
    txHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimRecordAvgAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
  }

  export type ClaimRecordSumAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
  }

  export type ClaimRecordMinAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    claimed?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimRecordMaxAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    claimed?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimRecordCountAggregateInputType = {
    id?: true
    campaignId?: true
    userId?: true
    amount?: true
    claimed?: true
    txHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimRecord to aggregate.
     */
    where?: ClaimRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimRecords to fetch.
     */
    orderBy?: ClaimRecordOrderByWithRelationInput | ClaimRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimRecords
    **/
    _count?: true | ClaimRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimRecordMaxAggregateInputType
  }

  export type GetClaimRecordAggregateType<T extends ClaimRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimRecord[P]>
      : GetScalarType<T[P], AggregateClaimRecord[P]>
  }




  export type ClaimRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimRecordWhereInput
    orderBy?: ClaimRecordOrderByWithAggregationInput | ClaimRecordOrderByWithAggregationInput[]
    by: ClaimRecordScalarFieldEnum[] | ClaimRecordScalarFieldEnum
    having?: ClaimRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimRecordCountAggregateInputType | true
    _avg?: ClaimRecordAvgAggregateInputType
    _sum?: ClaimRecordSumAggregateInputType
    _min?: ClaimRecordMinAggregateInputType
    _max?: ClaimRecordMaxAggregateInputType
  }

  export type ClaimRecordGroupByOutputType = {
    id: number
    campaignId: number
    userId: number
    amount: bigint
    claimed: boolean
    txHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClaimRecordCountAggregateOutputType | null
    _avg: ClaimRecordAvgAggregateOutputType | null
    _sum: ClaimRecordSumAggregateOutputType | null
    _min: ClaimRecordMinAggregateOutputType | null
    _max: ClaimRecordMaxAggregateOutputType | null
  }

  type GetClaimRecordGroupByPayload<T extends ClaimRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimRecordGroupByOutputType[P]>
        }
      >
    >


  export type ClaimRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    claimed?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["claimRecord"]>

  export type ClaimRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    claimed?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["claimRecord"]>

  export type ClaimRecordSelectScalar = {
    id?: boolean
    campaignId?: boolean
    userId?: boolean
    amount?: boolean
    claimed?: boolean
    txHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ClaimRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      userId: number
      amount: bigint
      claimed: boolean
      txHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claimRecord"]>
    composites: {}
  }

  type ClaimRecordGetPayload<S extends boolean | null | undefined | ClaimRecordDefaultArgs> = $Result.GetResult<Prisma.$ClaimRecordPayload, S>

  type ClaimRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimRecordCountAggregateInputType | true
    }

  export interface ClaimRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaimRecord'], meta: { name: 'ClaimRecord' } }
    /**
     * Find zero or one ClaimRecord that matches the filter.
     * @param {ClaimRecordFindUniqueArgs} args - Arguments to find a ClaimRecord
     * @example
     * // Get one ClaimRecord
     * const claimRecord = await prisma.claimRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimRecordFindUniqueArgs>(args: SelectSubset<T, ClaimRecordFindUniqueArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClaimRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimRecordFindUniqueOrThrowArgs} args - Arguments to find a ClaimRecord
     * @example
     * // Get one ClaimRecord
     * const claimRecord = await prisma.claimRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClaimRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordFindFirstArgs} args - Arguments to find a ClaimRecord
     * @example
     * // Get one ClaimRecord
     * const claimRecord = await prisma.claimRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimRecordFindFirstArgs>(args?: SelectSubset<T, ClaimRecordFindFirstArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClaimRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordFindFirstOrThrowArgs} args - Arguments to find a ClaimRecord
     * @example
     * // Get one ClaimRecord
     * const claimRecord = await prisma.claimRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClaimRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimRecords
     * const claimRecords = await prisma.claimRecord.findMany()
     * 
     * // Get first 10 ClaimRecords
     * const claimRecords = await prisma.claimRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimRecordWithIdOnly = await prisma.claimRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimRecordFindManyArgs>(args?: SelectSubset<T, ClaimRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClaimRecord.
     * @param {ClaimRecordCreateArgs} args - Arguments to create a ClaimRecord.
     * @example
     * // Create one ClaimRecord
     * const ClaimRecord = await prisma.claimRecord.create({
     *   data: {
     *     // ... data to create a ClaimRecord
     *   }
     * })
     * 
     */
    create<T extends ClaimRecordCreateArgs>(args: SelectSubset<T, ClaimRecordCreateArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClaimRecords.
     * @param {ClaimRecordCreateManyArgs} args - Arguments to create many ClaimRecords.
     * @example
     * // Create many ClaimRecords
     * const claimRecord = await prisma.claimRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimRecordCreateManyArgs>(args?: SelectSubset<T, ClaimRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaimRecords and returns the data saved in the database.
     * @param {ClaimRecordCreateManyAndReturnArgs} args - Arguments to create many ClaimRecords.
     * @example
     * // Create many ClaimRecords
     * const claimRecord = await prisma.claimRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaimRecords and only return the `id`
     * const claimRecordWithIdOnly = await prisma.claimRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClaimRecord.
     * @param {ClaimRecordDeleteArgs} args - Arguments to delete one ClaimRecord.
     * @example
     * // Delete one ClaimRecord
     * const ClaimRecord = await prisma.claimRecord.delete({
     *   where: {
     *     // ... filter to delete one ClaimRecord
     *   }
     * })
     * 
     */
    delete<T extends ClaimRecordDeleteArgs>(args: SelectSubset<T, ClaimRecordDeleteArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClaimRecord.
     * @param {ClaimRecordUpdateArgs} args - Arguments to update one ClaimRecord.
     * @example
     * // Update one ClaimRecord
     * const claimRecord = await prisma.claimRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimRecordUpdateArgs>(args: SelectSubset<T, ClaimRecordUpdateArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClaimRecords.
     * @param {ClaimRecordDeleteManyArgs} args - Arguments to filter ClaimRecords to delete.
     * @example
     * // Delete a few ClaimRecords
     * const { count } = await prisma.claimRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimRecordDeleteManyArgs>(args?: SelectSubset<T, ClaimRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimRecords
     * const claimRecord = await prisma.claimRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimRecordUpdateManyArgs>(args: SelectSubset<T, ClaimRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClaimRecord.
     * @param {ClaimRecordUpsertArgs} args - Arguments to update or create a ClaimRecord.
     * @example
     * // Update or create a ClaimRecord
     * const claimRecord = await prisma.claimRecord.upsert({
     *   create: {
     *     // ... data to create a ClaimRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimRecord we want to update
     *   }
     * })
     */
    upsert<T extends ClaimRecordUpsertArgs>(args: SelectSubset<T, ClaimRecordUpsertArgs<ExtArgs>>): Prisma__ClaimRecordClient<$Result.GetResult<Prisma.$ClaimRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClaimRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordCountArgs} args - Arguments to filter ClaimRecords to count.
     * @example
     * // Count the number of ClaimRecords
     * const count = await prisma.claimRecord.count({
     *   where: {
     *     // ... the filter for the ClaimRecords we want to count
     *   }
     * })
    **/
    count<T extends ClaimRecordCountArgs>(
      args?: Subset<T, ClaimRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimRecordAggregateArgs>(args: Subset<T, ClaimRecordAggregateArgs>): Prisma.PrismaPromise<GetClaimRecordAggregateType<T>>

    /**
     * Group by ClaimRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimRecordGroupByArgs['orderBy'] }
        : { orderBy?: ClaimRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaimRecord model
   */
  readonly fields: ClaimRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClaimRecord model
   */ 
  interface ClaimRecordFieldRefs {
    readonly id: FieldRef<"ClaimRecord", 'Int'>
    readonly campaignId: FieldRef<"ClaimRecord", 'Int'>
    readonly userId: FieldRef<"ClaimRecord", 'Int'>
    readonly amount: FieldRef<"ClaimRecord", 'BigInt'>
    readonly claimed: FieldRef<"ClaimRecord", 'Boolean'>
    readonly txHash: FieldRef<"ClaimRecord", 'String'>
    readonly createdAt: FieldRef<"ClaimRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ClaimRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClaimRecord findUnique
   */
  export type ClaimRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter, which ClaimRecord to fetch.
     */
    where: ClaimRecordWhereUniqueInput
  }

  /**
   * ClaimRecord findUniqueOrThrow
   */
  export type ClaimRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter, which ClaimRecord to fetch.
     */
    where: ClaimRecordWhereUniqueInput
  }

  /**
   * ClaimRecord findFirst
   */
  export type ClaimRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter, which ClaimRecord to fetch.
     */
    where?: ClaimRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimRecords to fetch.
     */
    orderBy?: ClaimRecordOrderByWithRelationInput | ClaimRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimRecords.
     */
    cursor?: ClaimRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimRecords.
     */
    distinct?: ClaimRecordScalarFieldEnum | ClaimRecordScalarFieldEnum[]
  }

  /**
   * ClaimRecord findFirstOrThrow
   */
  export type ClaimRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter, which ClaimRecord to fetch.
     */
    where?: ClaimRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimRecords to fetch.
     */
    orderBy?: ClaimRecordOrderByWithRelationInput | ClaimRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimRecords.
     */
    cursor?: ClaimRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimRecords.
     */
    distinct?: ClaimRecordScalarFieldEnum | ClaimRecordScalarFieldEnum[]
  }

  /**
   * ClaimRecord findMany
   */
  export type ClaimRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter, which ClaimRecords to fetch.
     */
    where?: ClaimRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimRecords to fetch.
     */
    orderBy?: ClaimRecordOrderByWithRelationInput | ClaimRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimRecords.
     */
    cursor?: ClaimRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimRecords.
     */
    skip?: number
    distinct?: ClaimRecordScalarFieldEnum | ClaimRecordScalarFieldEnum[]
  }

  /**
   * ClaimRecord create
   */
  export type ClaimRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a ClaimRecord.
     */
    data: XOR<ClaimRecordCreateInput, ClaimRecordUncheckedCreateInput>
  }

  /**
   * ClaimRecord createMany
   */
  export type ClaimRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaimRecords.
     */
    data: ClaimRecordCreateManyInput | ClaimRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimRecord createManyAndReturn
   */
  export type ClaimRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClaimRecords.
     */
    data: ClaimRecordCreateManyInput | ClaimRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimRecord update
   */
  export type ClaimRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a ClaimRecord.
     */
    data: XOR<ClaimRecordUpdateInput, ClaimRecordUncheckedUpdateInput>
    /**
     * Choose, which ClaimRecord to update.
     */
    where: ClaimRecordWhereUniqueInput
  }

  /**
   * ClaimRecord updateMany
   */
  export type ClaimRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaimRecords.
     */
    data: XOR<ClaimRecordUpdateManyMutationInput, ClaimRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClaimRecords to update
     */
    where?: ClaimRecordWhereInput
  }

  /**
   * ClaimRecord upsert
   */
  export type ClaimRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the ClaimRecord to update in case it exists.
     */
    where: ClaimRecordWhereUniqueInput
    /**
     * In case the ClaimRecord found by the `where` argument doesn't exist, create a new ClaimRecord with this data.
     */
    create: XOR<ClaimRecordCreateInput, ClaimRecordUncheckedCreateInput>
    /**
     * In case the ClaimRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimRecordUpdateInput, ClaimRecordUncheckedUpdateInput>
  }

  /**
   * ClaimRecord delete
   */
  export type ClaimRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
    /**
     * Filter which ClaimRecord to delete.
     */
    where: ClaimRecordWhereUniqueInput
  }

  /**
   * ClaimRecord deleteMany
   */
  export type ClaimRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimRecords to delete
     */
    where?: ClaimRecordWhereInput
  }

  /**
   * ClaimRecord without action
   */
  export type ClaimRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimRecord
     */
    select?: ClaimRecordSelect<ExtArgs> | null
  }


  /**
   * Model Whitelist
   */

  export type AggregateWhitelist = {
    _count: WhitelistCountAggregateOutputType | null
    _avg: WhitelistAvgAggregateOutputType | null
    _sum: WhitelistSumAggregateOutputType | null
    _min: WhitelistMinAggregateOutputType | null
    _max: WhitelistMaxAggregateOutputType | null
  }

  export type WhitelistAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WhitelistSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WhitelistMinAggregateOutputType = {
    id: number | null
    userId: number | null
    twitterId: string | null
    referralCode: string | null
    status: string | null
    claimedAt: Date | null
    createdAt: Date | null
    followedAt: Date | null
    postLink: string | null
    postedAt: Date | null
    referredAt: Date | null
    registeredAt: Date | null
    updatedAt: Date | null
  }

  export type WhitelistMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    twitterId: string | null
    referralCode: string | null
    status: string | null
    claimedAt: Date | null
    createdAt: Date | null
    followedAt: Date | null
    postLink: string | null
    postedAt: Date | null
    referredAt: Date | null
    registeredAt: Date | null
    updatedAt: Date | null
  }

  export type WhitelistCountAggregateOutputType = {
    id: number
    userId: number
    twitterId: number
    referralCode: number
    status: number
    claimedAt: number
    createdAt: number
    followedAt: number
    postLink: number
    postedAt: number
    referredAt: number
    registeredAt: number
    updatedAt: number
    _all: number
  }


  export type WhitelistAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WhitelistSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WhitelistMinAggregateInputType = {
    id?: true
    userId?: true
    twitterId?: true
    referralCode?: true
    status?: true
    claimedAt?: true
    createdAt?: true
    followedAt?: true
    postLink?: true
    postedAt?: true
    referredAt?: true
    registeredAt?: true
    updatedAt?: true
  }

  export type WhitelistMaxAggregateInputType = {
    id?: true
    userId?: true
    twitterId?: true
    referralCode?: true
    status?: true
    claimedAt?: true
    createdAt?: true
    followedAt?: true
    postLink?: true
    postedAt?: true
    referredAt?: true
    registeredAt?: true
    updatedAt?: true
  }

  export type WhitelistCountAggregateInputType = {
    id?: true
    userId?: true
    twitterId?: true
    referralCode?: true
    status?: true
    claimedAt?: true
    createdAt?: true
    followedAt?: true
    postLink?: true
    postedAt?: true
    referredAt?: true
    registeredAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhitelistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whitelist to aggregate.
     */
    where?: WhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whitelists to fetch.
     */
    orderBy?: WhitelistOrderByWithRelationInput | WhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Whitelists
    **/
    _count?: true | WhitelistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhitelistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhitelistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhitelistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhitelistMaxAggregateInputType
  }

  export type GetWhitelistAggregateType<T extends WhitelistAggregateArgs> = {
        [P in keyof T & keyof AggregateWhitelist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhitelist[P]>
      : GetScalarType<T[P], AggregateWhitelist[P]>
  }




  export type WhitelistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhitelistWhereInput
    orderBy?: WhitelistOrderByWithAggregationInput | WhitelistOrderByWithAggregationInput[]
    by: WhitelistScalarFieldEnum[] | WhitelistScalarFieldEnum
    having?: WhitelistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhitelistCountAggregateInputType | true
    _avg?: WhitelistAvgAggregateInputType
    _sum?: WhitelistSumAggregateInputType
    _min?: WhitelistMinAggregateInputType
    _max?: WhitelistMaxAggregateInputType
  }

  export type WhitelistGroupByOutputType = {
    id: number
    userId: number
    twitterId: string
    referralCode: string
    status: string
    claimedAt: Date | null
    createdAt: Date
    followedAt: Date | null
    postLink: string | null
    postedAt: Date | null
    referredAt: Date | null
    registeredAt: Date | null
    updatedAt: Date
    _count: WhitelistCountAggregateOutputType | null
    _avg: WhitelistAvgAggregateOutputType | null
    _sum: WhitelistSumAggregateOutputType | null
    _min: WhitelistMinAggregateOutputType | null
    _max: WhitelistMaxAggregateOutputType | null
  }

  type GetWhitelistGroupByPayload<T extends WhitelistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhitelistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhitelistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhitelistGroupByOutputType[P]>
            : GetScalarType<T[P], WhitelistGroupByOutputType[P]>
        }
      >
    >


  export type WhitelistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    twitterId?: boolean
    referralCode?: boolean
    status?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    followedAt?: boolean
    postLink?: boolean
    postedAt?: boolean
    referredAt?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whitelist"]>

  export type WhitelistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    twitterId?: boolean
    referralCode?: boolean
    status?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    followedAt?: boolean
    postLink?: boolean
    postedAt?: boolean
    referredAt?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whitelist"]>

  export type WhitelistSelectScalar = {
    id?: boolean
    userId?: boolean
    twitterId?: boolean
    referralCode?: boolean
    status?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    followedAt?: boolean
    postLink?: boolean
    postedAt?: boolean
    referredAt?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
  }


  export type $WhitelistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Whitelist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      twitterId: string
      referralCode: string
      status: string
      claimedAt: Date | null
      createdAt: Date
      followedAt: Date | null
      postLink: string | null
      postedAt: Date | null
      referredAt: Date | null
      registeredAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["whitelist"]>
    composites: {}
  }

  type WhitelistGetPayload<S extends boolean | null | undefined | WhitelistDefaultArgs> = $Result.GetResult<Prisma.$WhitelistPayload, S>

  type WhitelistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WhitelistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WhitelistCountAggregateInputType | true
    }

  export interface WhitelistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Whitelist'], meta: { name: 'Whitelist' } }
    /**
     * Find zero or one Whitelist that matches the filter.
     * @param {WhitelistFindUniqueArgs} args - Arguments to find a Whitelist
     * @example
     * // Get one Whitelist
     * const whitelist = await prisma.whitelist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhitelistFindUniqueArgs>(args: SelectSubset<T, WhitelistFindUniqueArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Whitelist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WhitelistFindUniqueOrThrowArgs} args - Arguments to find a Whitelist
     * @example
     * // Get one Whitelist
     * const whitelist = await prisma.whitelist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhitelistFindUniqueOrThrowArgs>(args: SelectSubset<T, WhitelistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Whitelist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistFindFirstArgs} args - Arguments to find a Whitelist
     * @example
     * // Get one Whitelist
     * const whitelist = await prisma.whitelist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhitelistFindFirstArgs>(args?: SelectSubset<T, WhitelistFindFirstArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Whitelist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistFindFirstOrThrowArgs} args - Arguments to find a Whitelist
     * @example
     * // Get one Whitelist
     * const whitelist = await prisma.whitelist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhitelistFindFirstOrThrowArgs>(args?: SelectSubset<T, WhitelistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Whitelists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whitelists
     * const whitelists = await prisma.whitelist.findMany()
     * 
     * // Get first 10 Whitelists
     * const whitelists = await prisma.whitelist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whitelistWithIdOnly = await prisma.whitelist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhitelistFindManyArgs>(args?: SelectSubset<T, WhitelistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Whitelist.
     * @param {WhitelistCreateArgs} args - Arguments to create a Whitelist.
     * @example
     * // Create one Whitelist
     * const Whitelist = await prisma.whitelist.create({
     *   data: {
     *     // ... data to create a Whitelist
     *   }
     * })
     * 
     */
    create<T extends WhitelistCreateArgs>(args: SelectSubset<T, WhitelistCreateArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Whitelists.
     * @param {WhitelistCreateManyArgs} args - Arguments to create many Whitelists.
     * @example
     * // Create many Whitelists
     * const whitelist = await prisma.whitelist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhitelistCreateManyArgs>(args?: SelectSubset<T, WhitelistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whitelists and returns the data saved in the database.
     * @param {WhitelistCreateManyAndReturnArgs} args - Arguments to create many Whitelists.
     * @example
     * // Create many Whitelists
     * const whitelist = await prisma.whitelist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whitelists and only return the `id`
     * const whitelistWithIdOnly = await prisma.whitelist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhitelistCreateManyAndReturnArgs>(args?: SelectSubset<T, WhitelistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Whitelist.
     * @param {WhitelistDeleteArgs} args - Arguments to delete one Whitelist.
     * @example
     * // Delete one Whitelist
     * const Whitelist = await prisma.whitelist.delete({
     *   where: {
     *     // ... filter to delete one Whitelist
     *   }
     * })
     * 
     */
    delete<T extends WhitelistDeleteArgs>(args: SelectSubset<T, WhitelistDeleteArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Whitelist.
     * @param {WhitelistUpdateArgs} args - Arguments to update one Whitelist.
     * @example
     * // Update one Whitelist
     * const whitelist = await prisma.whitelist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhitelistUpdateArgs>(args: SelectSubset<T, WhitelistUpdateArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Whitelists.
     * @param {WhitelistDeleteManyArgs} args - Arguments to filter Whitelists to delete.
     * @example
     * // Delete a few Whitelists
     * const { count } = await prisma.whitelist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhitelistDeleteManyArgs>(args?: SelectSubset<T, WhitelistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whitelists
     * const whitelist = await prisma.whitelist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhitelistUpdateManyArgs>(args: SelectSubset<T, WhitelistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Whitelist.
     * @param {WhitelistUpsertArgs} args - Arguments to update or create a Whitelist.
     * @example
     * // Update or create a Whitelist
     * const whitelist = await prisma.whitelist.upsert({
     *   create: {
     *     // ... data to create a Whitelist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whitelist we want to update
     *   }
     * })
     */
    upsert<T extends WhitelistUpsertArgs>(args: SelectSubset<T, WhitelistUpsertArgs<ExtArgs>>): Prisma__WhitelistClient<$Result.GetResult<Prisma.$WhitelistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Whitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistCountArgs} args - Arguments to filter Whitelists to count.
     * @example
     * // Count the number of Whitelists
     * const count = await prisma.whitelist.count({
     *   where: {
     *     // ... the filter for the Whitelists we want to count
     *   }
     * })
    **/
    count<T extends WhitelistCountArgs>(
      args?: Subset<T, WhitelistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhitelistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhitelistAggregateArgs>(args: Subset<T, WhitelistAggregateArgs>): Prisma.PrismaPromise<GetWhitelistAggregateType<T>>

    /**
     * Group by Whitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhitelistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhitelistGroupByArgs['orderBy'] }
        : { orderBy?: WhitelistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhitelistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhitelistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Whitelist model
   */
  readonly fields: WhitelistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Whitelist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhitelistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Whitelist model
   */ 
  interface WhitelistFieldRefs {
    readonly id: FieldRef<"Whitelist", 'Int'>
    readonly userId: FieldRef<"Whitelist", 'Int'>
    readonly twitterId: FieldRef<"Whitelist", 'String'>
    readonly referralCode: FieldRef<"Whitelist", 'String'>
    readonly status: FieldRef<"Whitelist", 'String'>
    readonly claimedAt: FieldRef<"Whitelist", 'DateTime'>
    readonly createdAt: FieldRef<"Whitelist", 'DateTime'>
    readonly followedAt: FieldRef<"Whitelist", 'DateTime'>
    readonly postLink: FieldRef<"Whitelist", 'String'>
    readonly postedAt: FieldRef<"Whitelist", 'DateTime'>
    readonly referredAt: FieldRef<"Whitelist", 'DateTime'>
    readonly registeredAt: FieldRef<"Whitelist", 'DateTime'>
    readonly updatedAt: FieldRef<"Whitelist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Whitelist findUnique
   */
  export type WhitelistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter, which Whitelist to fetch.
     */
    where: WhitelistWhereUniqueInput
  }

  /**
   * Whitelist findUniqueOrThrow
   */
  export type WhitelistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter, which Whitelist to fetch.
     */
    where: WhitelistWhereUniqueInput
  }

  /**
   * Whitelist findFirst
   */
  export type WhitelistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter, which Whitelist to fetch.
     */
    where?: WhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whitelists to fetch.
     */
    orderBy?: WhitelistOrderByWithRelationInput | WhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whitelists.
     */
    cursor?: WhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whitelists.
     */
    distinct?: WhitelistScalarFieldEnum | WhitelistScalarFieldEnum[]
  }

  /**
   * Whitelist findFirstOrThrow
   */
  export type WhitelistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter, which Whitelist to fetch.
     */
    where?: WhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whitelists to fetch.
     */
    orderBy?: WhitelistOrderByWithRelationInput | WhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whitelists.
     */
    cursor?: WhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whitelists.
     */
    distinct?: WhitelistScalarFieldEnum | WhitelistScalarFieldEnum[]
  }

  /**
   * Whitelist findMany
   */
  export type WhitelistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter, which Whitelists to fetch.
     */
    where?: WhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whitelists to fetch.
     */
    orderBy?: WhitelistOrderByWithRelationInput | WhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Whitelists.
     */
    cursor?: WhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whitelists.
     */
    skip?: number
    distinct?: WhitelistScalarFieldEnum | WhitelistScalarFieldEnum[]
  }

  /**
   * Whitelist create
   */
  export type WhitelistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * The data needed to create a Whitelist.
     */
    data: XOR<WhitelistCreateInput, WhitelistUncheckedCreateInput>
  }

  /**
   * Whitelist createMany
   */
  export type WhitelistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Whitelists.
     */
    data: WhitelistCreateManyInput | WhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whitelist createManyAndReturn
   */
  export type WhitelistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Whitelists.
     */
    data: WhitelistCreateManyInput | WhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whitelist update
   */
  export type WhitelistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * The data needed to update a Whitelist.
     */
    data: XOR<WhitelistUpdateInput, WhitelistUncheckedUpdateInput>
    /**
     * Choose, which Whitelist to update.
     */
    where: WhitelistWhereUniqueInput
  }

  /**
   * Whitelist updateMany
   */
  export type WhitelistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Whitelists.
     */
    data: XOR<WhitelistUpdateManyMutationInput, WhitelistUncheckedUpdateManyInput>
    /**
     * Filter which Whitelists to update
     */
    where?: WhitelistWhereInput
  }

  /**
   * Whitelist upsert
   */
  export type WhitelistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * The filter to search for the Whitelist to update in case it exists.
     */
    where: WhitelistWhereUniqueInput
    /**
     * In case the Whitelist found by the `where` argument doesn't exist, create a new Whitelist with this data.
     */
    create: XOR<WhitelistCreateInput, WhitelistUncheckedCreateInput>
    /**
     * In case the Whitelist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhitelistUpdateInput, WhitelistUncheckedUpdateInput>
  }

  /**
   * Whitelist delete
   */
  export type WhitelistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
    /**
     * Filter which Whitelist to delete.
     */
    where: WhitelistWhereUniqueInput
  }

  /**
   * Whitelist deleteMany
   */
  export type WhitelistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whitelists to delete
     */
    where?: WhitelistWhereInput
  }

  /**
   * Whitelist without action
   */
  export type WhitelistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whitelist
     */
    select?: WhitelistSelect<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    id: number | null
    referrerId: number | null
    refereeId: number | null
  }

  export type ReferralSumAggregateOutputType = {
    id: number | null
    referrerId: number | null
    refereeId: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: number | null
    referrerId: number | null
    referrerTwitterId: string | null
    refereeId: number | null
    refereeTwitterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: number | null
    referrerId: number | null
    referrerTwitterId: string | null
    refereeId: number | null
    refereeTwitterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    referrerId: number
    referrerTwitterId: number
    refereeId: number
    refereeTwitterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    id?: true
    referrerId?: true
    refereeId?: true
  }

  export type ReferralSumAggregateInputType = {
    id?: true
    referrerId?: true
    refereeId?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    referrerId?: true
    referrerTwitterId?: true
    refereeId?: true
    refereeTwitterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referrerTwitterId?: true
    refereeId?: true
    refereeTwitterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    referrerId?: true
    referrerTwitterId?: true
    refereeId?: true
    refereeTwitterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: number
    referrerId: number
    referrerTwitterId: string
    refereeId: number
    refereeTwitterId: string
    createdAt: Date
    updatedAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referrerTwitterId?: boolean
    refereeId?: boolean
    refereeTwitterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referrerTwitterId?: boolean
    refereeId?: boolean
    refereeTwitterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referrerTwitterId?: boolean
    refereeId?: boolean
    refereeTwitterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referrerId: number
      referrerTwitterId: string
      refereeId: number
      refereeTwitterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'Int'>
    readonly referrerId: FieldRef<"Referral", 'Int'>
    readonly referrerTwitterId: FieldRef<"Referral", 'String'>
    readonly refereeId: FieldRef<"Referral", 'Int'>
    readonly refereeTwitterId: FieldRef<"Referral", 'String'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
    readonly updatedAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
  }


  /**
   * Model TokenInformation
   */

  export type AggregateTokenInformation = {
    _count: TokenInformationCountAggregateOutputType | null
    _avg: TokenInformationAvgAggregateOutputType | null
    _sum: TokenInformationSumAggregateOutputType | null
    _min: TokenInformationMinAggregateOutputType | null
    _max: TokenInformationMaxAggregateOutputType | null
  }

  export type TokenInformationAvgAggregateOutputType = {
    id: number | null
    marketValue: number | null
    virtualSolReserves: number | null
    virtualTokenReserves: number | null
    realSolReserves: number | null
    realTokenReserves: number | null
    blockTime: number | null
  }

  export type TokenInformationSumAggregateOutputType = {
    id: number | null
    marketValue: number | null
    virtualSolReserves: bigint | null
    virtualTokenReserves: bigint | null
    realSolReserves: bigint | null
    realTokenReserves: bigint | null
    blockTime: number | null
  }

  export type TokenInformationMinAggregateOutputType = {
    id: number | null
    mint: string | null
    name: string | null
    symbol: string | null
    uri: string | null
    platform: string | null
    marketValue: number | null
    virtualSolReserves: bigint | null
    virtualTokenReserves: bigint | null
    realSolReserves: bigint | null
    realTokenReserves: bigint | null
    isComplete: boolean | null
    lastTransactionType: string | null
    blockTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenInformationMaxAggregateOutputType = {
    id: number | null
    mint: string | null
    name: string | null
    symbol: string | null
    uri: string | null
    platform: string | null
    marketValue: number | null
    virtualSolReserves: bigint | null
    virtualTokenReserves: bigint | null
    realSolReserves: bigint | null
    realTokenReserves: bigint | null
    isComplete: boolean | null
    lastTransactionType: string | null
    blockTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenInformationCountAggregateOutputType = {
    id: number
    mint: number
    name: number
    symbol: number
    uri: number
    platform: number
    marketValue: number
    virtualSolReserves: number
    virtualTokenReserves: number
    realSolReserves: number
    realTokenReserves: number
    isComplete: number
    lastTransactionType: number
    blockTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenInformationAvgAggregateInputType = {
    id?: true
    marketValue?: true
    virtualSolReserves?: true
    virtualTokenReserves?: true
    realSolReserves?: true
    realTokenReserves?: true
    blockTime?: true
  }

  export type TokenInformationSumAggregateInputType = {
    id?: true
    marketValue?: true
    virtualSolReserves?: true
    virtualTokenReserves?: true
    realSolReserves?: true
    realTokenReserves?: true
    blockTime?: true
  }

  export type TokenInformationMinAggregateInputType = {
    id?: true
    mint?: true
    name?: true
    symbol?: true
    uri?: true
    platform?: true
    marketValue?: true
    virtualSolReserves?: true
    virtualTokenReserves?: true
    realSolReserves?: true
    realTokenReserves?: true
    isComplete?: true
    lastTransactionType?: true
    blockTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenInformationMaxAggregateInputType = {
    id?: true
    mint?: true
    name?: true
    symbol?: true
    uri?: true
    platform?: true
    marketValue?: true
    virtualSolReserves?: true
    virtualTokenReserves?: true
    realSolReserves?: true
    realTokenReserves?: true
    isComplete?: true
    lastTransactionType?: true
    blockTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenInformationCountAggregateInputType = {
    id?: true
    mint?: true
    name?: true
    symbol?: true
    uri?: true
    platform?: true
    marketValue?: true
    virtualSolReserves?: true
    virtualTokenReserves?: true
    realSolReserves?: true
    realTokenReserves?: true
    isComplete?: true
    lastTransactionType?: true
    blockTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenInformation to aggregate.
     */
    where?: TokenInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInformations to fetch.
     */
    orderBy?: TokenInformationOrderByWithRelationInput | TokenInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenInformations
    **/
    _count?: true | TokenInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenInformationMaxAggregateInputType
  }

  export type GetTokenInformationAggregateType<T extends TokenInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenInformation[P]>
      : GetScalarType<T[P], AggregateTokenInformation[P]>
  }




  export type TokenInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenInformationWhereInput
    orderBy?: TokenInformationOrderByWithAggregationInput | TokenInformationOrderByWithAggregationInput[]
    by: TokenInformationScalarFieldEnum[] | TokenInformationScalarFieldEnum
    having?: TokenInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenInformationCountAggregateInputType | true
    _avg?: TokenInformationAvgAggregateInputType
    _sum?: TokenInformationSumAggregateInputType
    _min?: TokenInformationMinAggregateInputType
    _max?: TokenInformationMaxAggregateInputType
  }

  export type TokenInformationGroupByOutputType = {
    id: number
    mint: string
    name: string | null
    symbol: string | null
    uri: string | null
    platform: string
    marketValue: number
    virtualSolReserves: bigint
    virtualTokenReserves: bigint
    realSolReserves: bigint
    realTokenReserves: bigint
    isComplete: boolean
    lastTransactionType: string | null
    blockTime: number | null
    createdAt: Date
    updatedAt: Date
    _count: TokenInformationCountAggregateOutputType | null
    _avg: TokenInformationAvgAggregateOutputType | null
    _sum: TokenInformationSumAggregateOutputType | null
    _min: TokenInformationMinAggregateOutputType | null
    _max: TokenInformationMaxAggregateOutputType | null
  }

  type GetTokenInformationGroupByPayload<T extends TokenInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenInformationGroupByOutputType[P]>
            : GetScalarType<T[P], TokenInformationGroupByOutputType[P]>
        }
      >
    >


  export type TokenInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mint?: boolean
    name?: boolean
    symbol?: boolean
    uri?: boolean
    platform?: boolean
    marketValue?: boolean
    virtualSolReserves?: boolean
    virtualTokenReserves?: boolean
    realSolReserves?: boolean
    realTokenReserves?: boolean
    isComplete?: boolean
    lastTransactionType?: boolean
    blockTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tokenInformation"]>

  export type TokenInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mint?: boolean
    name?: boolean
    symbol?: boolean
    uri?: boolean
    platform?: boolean
    marketValue?: boolean
    virtualSolReserves?: boolean
    virtualTokenReserves?: boolean
    realSolReserves?: boolean
    realTokenReserves?: boolean
    isComplete?: boolean
    lastTransactionType?: boolean
    blockTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tokenInformation"]>

  export type TokenInformationSelectScalar = {
    id?: boolean
    mint?: boolean
    name?: boolean
    symbol?: boolean
    uri?: boolean
    platform?: boolean
    marketValue?: boolean
    virtualSolReserves?: boolean
    virtualTokenReserves?: boolean
    realSolReserves?: boolean
    realTokenReserves?: boolean
    isComplete?: boolean
    lastTransactionType?: boolean
    blockTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TokenInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mint: string
      name: string | null
      symbol: string | null
      uri: string | null
      platform: string
      marketValue: number
      virtualSolReserves: bigint
      virtualTokenReserves: bigint
      realSolReserves: bigint
      realTokenReserves: bigint
      isComplete: boolean
      lastTransactionType: string | null
      blockTime: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tokenInformation"]>
    composites: {}
  }

  type TokenInformationGetPayload<S extends boolean | null | undefined | TokenInformationDefaultArgs> = $Result.GetResult<Prisma.$TokenInformationPayload, S>

  type TokenInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenInformationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenInformationCountAggregateInputType | true
    }

  export interface TokenInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenInformation'], meta: { name: 'TokenInformation' } }
    /**
     * Find zero or one TokenInformation that matches the filter.
     * @param {TokenInformationFindUniqueArgs} args - Arguments to find a TokenInformation
     * @example
     * // Get one TokenInformation
     * const tokenInformation = await prisma.tokenInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenInformationFindUniqueArgs>(args: SelectSubset<T, TokenInformationFindUniqueArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenInformation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenInformationFindUniqueOrThrowArgs} args - Arguments to find a TokenInformation
     * @example
     * // Get one TokenInformation
     * const tokenInformation = await prisma.tokenInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationFindFirstArgs} args - Arguments to find a TokenInformation
     * @example
     * // Get one TokenInformation
     * const tokenInformation = await prisma.tokenInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenInformationFindFirstArgs>(args?: SelectSubset<T, TokenInformationFindFirstArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationFindFirstOrThrowArgs} args - Arguments to find a TokenInformation
     * @example
     * // Get one TokenInformation
     * const tokenInformation = await prisma.tokenInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenInformations
     * const tokenInformations = await prisma.tokenInformation.findMany()
     * 
     * // Get first 10 TokenInformations
     * const tokenInformations = await prisma.tokenInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenInformationWithIdOnly = await prisma.tokenInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenInformationFindManyArgs>(args?: SelectSubset<T, TokenInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenInformation.
     * @param {TokenInformationCreateArgs} args - Arguments to create a TokenInformation.
     * @example
     * // Create one TokenInformation
     * const TokenInformation = await prisma.tokenInformation.create({
     *   data: {
     *     // ... data to create a TokenInformation
     *   }
     * })
     * 
     */
    create<T extends TokenInformationCreateArgs>(args: SelectSubset<T, TokenInformationCreateArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenInformations.
     * @param {TokenInformationCreateManyArgs} args - Arguments to create many TokenInformations.
     * @example
     * // Create many TokenInformations
     * const tokenInformation = await prisma.tokenInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenInformationCreateManyArgs>(args?: SelectSubset<T, TokenInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenInformations and returns the data saved in the database.
     * @param {TokenInformationCreateManyAndReturnArgs} args - Arguments to create many TokenInformations.
     * @example
     * // Create many TokenInformations
     * const tokenInformation = await prisma.tokenInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenInformations and only return the `id`
     * const tokenInformationWithIdOnly = await prisma.tokenInformation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenInformation.
     * @param {TokenInformationDeleteArgs} args - Arguments to delete one TokenInformation.
     * @example
     * // Delete one TokenInformation
     * const TokenInformation = await prisma.tokenInformation.delete({
     *   where: {
     *     // ... filter to delete one TokenInformation
     *   }
     * })
     * 
     */
    delete<T extends TokenInformationDeleteArgs>(args: SelectSubset<T, TokenInformationDeleteArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenInformation.
     * @param {TokenInformationUpdateArgs} args - Arguments to update one TokenInformation.
     * @example
     * // Update one TokenInformation
     * const tokenInformation = await prisma.tokenInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenInformationUpdateArgs>(args: SelectSubset<T, TokenInformationUpdateArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenInformations.
     * @param {TokenInformationDeleteManyArgs} args - Arguments to filter TokenInformations to delete.
     * @example
     * // Delete a few TokenInformations
     * const { count } = await prisma.tokenInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenInformationDeleteManyArgs>(args?: SelectSubset<T, TokenInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenInformations
     * const tokenInformation = await prisma.tokenInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenInformationUpdateManyArgs>(args: SelectSubset<T, TokenInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenInformation.
     * @param {TokenInformationUpsertArgs} args - Arguments to update or create a TokenInformation.
     * @example
     * // Update or create a TokenInformation
     * const tokenInformation = await prisma.tokenInformation.upsert({
     *   create: {
     *     // ... data to create a TokenInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenInformation we want to update
     *   }
     * })
     */
    upsert<T extends TokenInformationUpsertArgs>(args: SelectSubset<T, TokenInformationUpsertArgs<ExtArgs>>): Prisma__TokenInformationClient<$Result.GetResult<Prisma.$TokenInformationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationCountArgs} args - Arguments to filter TokenInformations to count.
     * @example
     * // Count the number of TokenInformations
     * const count = await prisma.tokenInformation.count({
     *   where: {
     *     // ... the filter for the TokenInformations we want to count
     *   }
     * })
    **/
    count<T extends TokenInformationCountArgs>(
      args?: Subset<T, TokenInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenInformationAggregateArgs>(args: Subset<T, TokenInformationAggregateArgs>): Prisma.PrismaPromise<GetTokenInformationAggregateType<T>>

    /**
     * Group by TokenInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenInformationGroupByArgs['orderBy'] }
        : { orderBy?: TokenInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenInformation model
   */
  readonly fields: TokenInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenInformation model
   */ 
  interface TokenInformationFieldRefs {
    readonly id: FieldRef<"TokenInformation", 'Int'>
    readonly mint: FieldRef<"TokenInformation", 'String'>
    readonly name: FieldRef<"TokenInformation", 'String'>
    readonly symbol: FieldRef<"TokenInformation", 'String'>
    readonly uri: FieldRef<"TokenInformation", 'String'>
    readonly platform: FieldRef<"TokenInformation", 'String'>
    readonly marketValue: FieldRef<"TokenInformation", 'Float'>
    readonly virtualSolReserves: FieldRef<"TokenInformation", 'BigInt'>
    readonly virtualTokenReserves: FieldRef<"TokenInformation", 'BigInt'>
    readonly realSolReserves: FieldRef<"TokenInformation", 'BigInt'>
    readonly realTokenReserves: FieldRef<"TokenInformation", 'BigInt'>
    readonly isComplete: FieldRef<"TokenInformation", 'Boolean'>
    readonly lastTransactionType: FieldRef<"TokenInformation", 'String'>
    readonly blockTime: FieldRef<"TokenInformation", 'Int'>
    readonly createdAt: FieldRef<"TokenInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"TokenInformation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenInformation findUnique
   */
  export type TokenInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter, which TokenInformation to fetch.
     */
    where: TokenInformationWhereUniqueInput
  }

  /**
   * TokenInformation findUniqueOrThrow
   */
  export type TokenInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter, which TokenInformation to fetch.
     */
    where: TokenInformationWhereUniqueInput
  }

  /**
   * TokenInformation findFirst
   */
  export type TokenInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter, which TokenInformation to fetch.
     */
    where?: TokenInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInformations to fetch.
     */
    orderBy?: TokenInformationOrderByWithRelationInput | TokenInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenInformations.
     */
    cursor?: TokenInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenInformations.
     */
    distinct?: TokenInformationScalarFieldEnum | TokenInformationScalarFieldEnum[]
  }

  /**
   * TokenInformation findFirstOrThrow
   */
  export type TokenInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter, which TokenInformation to fetch.
     */
    where?: TokenInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInformations to fetch.
     */
    orderBy?: TokenInformationOrderByWithRelationInput | TokenInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenInformations.
     */
    cursor?: TokenInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenInformations.
     */
    distinct?: TokenInformationScalarFieldEnum | TokenInformationScalarFieldEnum[]
  }

  /**
   * TokenInformation findMany
   */
  export type TokenInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter, which TokenInformations to fetch.
     */
    where?: TokenInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInformations to fetch.
     */
    orderBy?: TokenInformationOrderByWithRelationInput | TokenInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenInformations.
     */
    cursor?: TokenInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInformations.
     */
    skip?: number
    distinct?: TokenInformationScalarFieldEnum | TokenInformationScalarFieldEnum[]
  }

  /**
   * TokenInformation create
   */
  export type TokenInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * The data needed to create a TokenInformation.
     */
    data: XOR<TokenInformationCreateInput, TokenInformationUncheckedCreateInput>
  }

  /**
   * TokenInformation createMany
   */
  export type TokenInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenInformations.
     */
    data: TokenInformationCreateManyInput | TokenInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenInformation createManyAndReturn
   */
  export type TokenInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenInformations.
     */
    data: TokenInformationCreateManyInput | TokenInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenInformation update
   */
  export type TokenInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * The data needed to update a TokenInformation.
     */
    data: XOR<TokenInformationUpdateInput, TokenInformationUncheckedUpdateInput>
    /**
     * Choose, which TokenInformation to update.
     */
    where: TokenInformationWhereUniqueInput
  }

  /**
   * TokenInformation updateMany
   */
  export type TokenInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenInformations.
     */
    data: XOR<TokenInformationUpdateManyMutationInput, TokenInformationUncheckedUpdateManyInput>
    /**
     * Filter which TokenInformations to update
     */
    where?: TokenInformationWhereInput
  }

  /**
   * TokenInformation upsert
   */
  export type TokenInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * The filter to search for the TokenInformation to update in case it exists.
     */
    where: TokenInformationWhereUniqueInput
    /**
     * In case the TokenInformation found by the `where` argument doesn't exist, create a new TokenInformation with this data.
     */
    create: XOR<TokenInformationCreateInput, TokenInformationUncheckedCreateInput>
    /**
     * In case the TokenInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenInformationUpdateInput, TokenInformationUncheckedUpdateInput>
  }

  /**
   * TokenInformation delete
   */
  export type TokenInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
    /**
     * Filter which TokenInformation to delete.
     */
    where: TokenInformationWhereUniqueInput
  }

  /**
   * TokenInformation deleteMany
   */
  export type TokenInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenInformations to delete
     */
    where?: TokenInformationWhereInput
  }

  /**
   * TokenInformation without action
   */
  export type TokenInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInformation
     */
    select?: TokenInformationSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TweetScalarFieldEnum: {
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

  export type TweetScalarFieldEnum = (typeof TweetScalarFieldEnum)[keyof typeof TweetScalarFieldEnum]


  export const CampaignTweetScalarFieldEnum: {
    id: 'id',
    tweetId: 'tweetId',
    campaignId: 'campaignId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignTweetScalarFieldEnum = (typeof CampaignTweetScalarFieldEnum)[keyof typeof CampaignTweetScalarFieldEnum]


  export const NFTDistributionScalarFieldEnum: {
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

  export type NFTDistributionScalarFieldEnum = (typeof NFTDistributionScalarFieldEnum)[keyof typeof NFTDistributionScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const CrawlerTaskScalarFieldEnum: {
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

  export type CrawlerTaskScalarFieldEnum = (typeof CrawlerTaskScalarFieldEnum)[keyof typeof CrawlerTaskScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    address: 'address',
    isPrimary: 'isPrimary',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
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

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const TokenPoolScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    txHash: 'txHash',
    amount: 'amount',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type'
  };

  export type TokenPoolScalarFieldEnum = (typeof TokenPoolScalarFieldEnum)[keyof typeof TokenPoolScalarFieldEnum]


  export const ParticipationScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    influenceScore: 'influenceScore',
    twitterId: 'twitterId'
  };

  export type ParticipationScalarFieldEnum = (typeof ParticipationScalarFieldEnum)[keyof typeof ParticipationScalarFieldEnum]


  export const ClaimRecordScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    userId: 'userId',
    amount: 'amount',
    claimed: 'claimed',
    txHash: 'txHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimRecordScalarFieldEnum = (typeof ClaimRecordScalarFieldEnum)[keyof typeof ClaimRecordScalarFieldEnum]


  export const WhitelistScalarFieldEnum: {
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

  export type WhitelistScalarFieldEnum = (typeof WhitelistScalarFieldEnum)[keyof typeof WhitelistScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referrerTwitterId: 'referrerTwitterId',
    refereeId: 'refereeId',
    refereeTwitterId: 'refereeTwitterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const TokenInformationScalarFieldEnum: {
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

  export type TokenInformationScalarFieldEnum = (typeof TokenInformationScalarFieldEnum)[keyof typeof TokenInformationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DistributionStatus'
   */
  export type EnumDistributionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DistributionStatus'>
    


  /**
   * Reference to a field of type 'DistributionStatus[]'
   */
  export type ListEnumDistributionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DistributionStatus[]'>
    


  /**
   * Reference to a field of type 'Blockchain'
   */
  export type EnumBlockchainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Blockchain'>
    


  /**
   * Reference to a field of type 'Blockchain[]'
   */
  export type ListEnumBlockchainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Blockchain[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'CrawlerTaskType'
   */
  export type EnumCrawlerTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlerTaskType'>
    


  /**
   * Reference to a field of type 'CrawlerTaskType[]'
   */
  export type ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlerTaskType[]'>
    


  /**
   * Reference to a field of type 'CrawlerTaskStatus'
   */
  export type EnumCrawlerTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlerTaskStatus'>
    


  /**
   * Reference to a field of type 'CrawlerTaskStatus[]'
   */
  export type ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrawlerTaskStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'TokenPoolType'
   */
  export type EnumTokenPoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenPoolType'>
    


  /**
   * Reference to a field of type 'TokenPoolType[]'
   */
  export type ListEnumTokenPoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenPoolType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    twitterId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    description?: StringNullableFilter<"User"> | string | null
    followersCount?: IntFilter<"User"> | number
    followingCount?: IntFilter<"User"> | number
    tweetsCount?: IntFilter<"User"> | number
    listedCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    handle?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    twitterId?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    verified?: SortOrder
    description?: SortOrderInput | SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handle?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    twitterId?: string
    handle?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    description?: StringNullableFilter<"User"> | string | null
    followersCount?: IntFilter<"User"> | number
    followingCount?: IntFilter<"User"> | number
    tweetsCount?: IntFilter<"User"> | number
    listedCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "twitterId" | "handle">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    twitterId?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    verified?: SortOrder
    description?: SortOrderInput | SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handle?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    twitterId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    followersCount?: IntWithAggregatesFilter<"User"> | number
    followingCount?: IntWithAggregatesFilter<"User"> | number
    tweetsCount?: IntWithAggregatesFilter<"User"> | number
    listedCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    handle?: StringWithAggregatesFilter<"User"> | string
  }

  export type TweetWhereInput = {
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    tweetId?: StringFilter<"Tweet"> | string
    text?: StringFilter<"Tweet"> | string
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    retweetCount?: IntFilter<"Tweet"> | number
    replyCount?: IntFilter<"Tweet"> | number
    likeCount?: IntFilter<"Tweet"> | number
    quoteCount?: IntFilter<"Tweet"> | number
    viewCount?: IntFilter<"Tweet"> | number
    bookmarkCount?: IntFilter<"Tweet"> | number
    isRetweet?: BoolFilter<"Tweet"> | boolean
    isQuote?: BoolFilter<"Tweet"> | boolean
    isReply?: BoolFilter<"Tweet"> | boolean
    hasMedia?: BoolFilter<"Tweet"> | boolean
    tickerSymbols?: StringNullableListFilter<"Tweet">
    fetchedAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    parentTweetId?: StringNullableFilter<"Tweet"> | string | null
    tweetCreatedAt?: DateTimeFilter<"Tweet"> | Date | string
    twitterId?: StringFilter<"Tweet"> | string
  }

  export type TweetOrderByWithRelationInput = {
    tweetId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
    isRetweet?: SortOrder
    isQuote?: SortOrder
    isReply?: SortOrder
    hasMedia?: SortOrder
    tickerSymbols?: SortOrder
    fetchedAt?: SortOrder
    updatedAt?: SortOrder
    parentTweetId?: SortOrderInput | SortOrder
    tweetCreatedAt?: SortOrder
    twitterId?: SortOrder
  }

  export type TweetWhereUniqueInput = Prisma.AtLeast<{
    tweetId_fetchedAt?: TweetTweetIdFetchedAtCompoundUniqueInput
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    tweetId?: StringFilter<"Tweet"> | string
    text?: StringFilter<"Tweet"> | string
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    retweetCount?: IntFilter<"Tweet"> | number
    replyCount?: IntFilter<"Tweet"> | number
    likeCount?: IntFilter<"Tweet"> | number
    quoteCount?: IntFilter<"Tweet"> | number
    viewCount?: IntFilter<"Tweet"> | number
    bookmarkCount?: IntFilter<"Tweet"> | number
    isRetweet?: BoolFilter<"Tweet"> | boolean
    isQuote?: BoolFilter<"Tweet"> | boolean
    isReply?: BoolFilter<"Tweet"> | boolean
    hasMedia?: BoolFilter<"Tweet"> | boolean
    tickerSymbols?: StringNullableListFilter<"Tweet">
    fetchedAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    parentTweetId?: StringNullableFilter<"Tweet"> | string | null
    tweetCreatedAt?: DateTimeFilter<"Tweet"> | Date | string
    twitterId?: StringFilter<"Tweet"> | string
  }, "tweetId_fetchedAt">

  export type TweetOrderByWithAggregationInput = {
    tweetId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
    isRetweet?: SortOrder
    isQuote?: SortOrder
    isReply?: SortOrder
    hasMedia?: SortOrder
    tickerSymbols?: SortOrder
    fetchedAt?: SortOrder
    updatedAt?: SortOrder
    parentTweetId?: SortOrderInput | SortOrder
    tweetCreatedAt?: SortOrder
    twitterId?: SortOrder
    _count?: TweetCountOrderByAggregateInput
    _avg?: TweetAvgOrderByAggregateInput
    _max?: TweetMaxOrderByAggregateInput
    _min?: TweetMinOrderByAggregateInput
    _sum?: TweetSumOrderByAggregateInput
  }

  export type TweetScalarWhereWithAggregatesInput = {
    AND?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    OR?: TweetScalarWhereWithAggregatesInput[]
    NOT?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    tweetId?: StringWithAggregatesFilter<"Tweet"> | string
    text?: StringWithAggregatesFilter<"Tweet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    retweetCount?: IntWithAggregatesFilter<"Tweet"> | number
    replyCount?: IntWithAggregatesFilter<"Tweet"> | number
    likeCount?: IntWithAggregatesFilter<"Tweet"> | number
    quoteCount?: IntWithAggregatesFilter<"Tweet"> | number
    viewCount?: IntWithAggregatesFilter<"Tweet"> | number
    bookmarkCount?: IntWithAggregatesFilter<"Tweet"> | number
    isRetweet?: BoolWithAggregatesFilter<"Tweet"> | boolean
    isQuote?: BoolWithAggregatesFilter<"Tweet"> | boolean
    isReply?: BoolWithAggregatesFilter<"Tweet"> | boolean
    hasMedia?: BoolWithAggregatesFilter<"Tweet"> | boolean
    tickerSymbols?: StringNullableListFilter<"Tweet">
    fetchedAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    parentTweetId?: StringNullableWithAggregatesFilter<"Tweet"> | string | null
    tweetCreatedAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    twitterId?: StringWithAggregatesFilter<"Tweet"> | string
  }

  export type CampaignTweetWhereInput = {
    AND?: CampaignTweetWhereInput | CampaignTweetWhereInput[]
    OR?: CampaignTweetWhereInput[]
    NOT?: CampaignTweetWhereInput | CampaignTweetWhereInput[]
    id?: IntFilter<"CampaignTweet"> | number
    tweetId?: StringFilter<"CampaignTweet"> | string
    campaignId?: IntFilter<"CampaignTweet"> | number
    createdAt?: DateTimeFilter<"CampaignTweet"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignTweet"> | Date | string
  }

  export type CampaignTweetOrderByWithRelationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignTweetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tweetId_campaignId?: CampaignTweetTweetIdCampaignIdCompoundUniqueInput
    AND?: CampaignTweetWhereInput | CampaignTweetWhereInput[]
    OR?: CampaignTweetWhereInput[]
    NOT?: CampaignTweetWhereInput | CampaignTweetWhereInput[]
    tweetId?: StringFilter<"CampaignTweet"> | string
    campaignId?: IntFilter<"CampaignTweet"> | number
    createdAt?: DateTimeFilter<"CampaignTweet"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignTweet"> | Date | string
  }, "id" | "tweetId_campaignId">

  export type CampaignTweetOrderByWithAggregationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignTweetCountOrderByAggregateInput
    _avg?: CampaignTweetAvgOrderByAggregateInput
    _max?: CampaignTweetMaxOrderByAggregateInput
    _min?: CampaignTweetMinOrderByAggregateInput
    _sum?: CampaignTweetSumOrderByAggregateInput
  }

  export type CampaignTweetScalarWhereWithAggregatesInput = {
    AND?: CampaignTweetScalarWhereWithAggregatesInput | CampaignTweetScalarWhereWithAggregatesInput[]
    OR?: CampaignTweetScalarWhereWithAggregatesInput[]
    NOT?: CampaignTweetScalarWhereWithAggregatesInput | CampaignTweetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampaignTweet"> | number
    tweetId?: StringWithAggregatesFilter<"CampaignTweet"> | string
    campaignId?: IntWithAggregatesFilter<"CampaignTweet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CampaignTweet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignTweet"> | Date | string
  }

  export type NFTDistributionWhereInput = {
    AND?: NFTDistributionWhereInput | NFTDistributionWhereInput[]
    OR?: NFTDistributionWhereInput[]
    NOT?: NFTDistributionWhereInput | NFTDistributionWhereInput[]
    id?: IntFilter<"NFTDistribution"> | number
    userId?: IntFilter<"NFTDistribution"> | number
    tweetId?: IntFilter<"NFTDistribution"> | number
    nftTokenId?: StringNullableFilter<"NFTDistribution"> | string | null
    transactionHash?: StringNullableFilter<"NFTDistribution"> | string | null
    walletAddress?: StringFilter<"NFTDistribution"> | string
    amount?: IntFilter<"NFTDistribution"> | number
    status?: EnumDistributionStatusFilter<"NFTDistribution"> | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFilter<"NFTDistribution"> | $Enums.Blockchain
    error?: StringNullableFilter<"NFTDistribution"> | string | null
    createdAt?: DateTimeFilter<"NFTDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"NFTDistribution"> | Date | string
  }

  export type NFTDistributionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    nftTokenId?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    blockchain?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NFTDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_tweetId?: NFTDistributionUserIdTweetIdCompoundUniqueInput
    AND?: NFTDistributionWhereInput | NFTDistributionWhereInput[]
    OR?: NFTDistributionWhereInput[]
    NOT?: NFTDistributionWhereInput | NFTDistributionWhereInput[]
    userId?: IntFilter<"NFTDistribution"> | number
    tweetId?: IntFilter<"NFTDistribution"> | number
    nftTokenId?: StringNullableFilter<"NFTDistribution"> | string | null
    transactionHash?: StringNullableFilter<"NFTDistribution"> | string | null
    walletAddress?: StringFilter<"NFTDistribution"> | string
    amount?: IntFilter<"NFTDistribution"> | number
    status?: EnumDistributionStatusFilter<"NFTDistribution"> | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFilter<"NFTDistribution"> | $Enums.Blockchain
    error?: StringNullableFilter<"NFTDistribution"> | string | null
    createdAt?: DateTimeFilter<"NFTDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"NFTDistribution"> | Date | string
  }, "id" | "userId_tweetId">

  export type NFTDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    nftTokenId?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    blockchain?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NFTDistributionCountOrderByAggregateInput
    _avg?: NFTDistributionAvgOrderByAggregateInput
    _max?: NFTDistributionMaxOrderByAggregateInput
    _min?: NFTDistributionMinOrderByAggregateInput
    _sum?: NFTDistributionSumOrderByAggregateInput
  }

  export type NFTDistributionScalarWhereWithAggregatesInput = {
    AND?: NFTDistributionScalarWhereWithAggregatesInput | NFTDistributionScalarWhereWithAggregatesInput[]
    OR?: NFTDistributionScalarWhereWithAggregatesInput[]
    NOT?: NFTDistributionScalarWhereWithAggregatesInput | NFTDistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NFTDistribution"> | number
    userId?: IntWithAggregatesFilter<"NFTDistribution"> | number
    tweetId?: IntWithAggregatesFilter<"NFTDistribution"> | number
    nftTokenId?: StringNullableWithAggregatesFilter<"NFTDistribution"> | string | null
    transactionHash?: StringNullableWithAggregatesFilter<"NFTDistribution"> | string | null
    walletAddress?: StringWithAggregatesFilter<"NFTDistribution"> | string
    amount?: IntWithAggregatesFilter<"NFTDistribution"> | number
    status?: EnumDistributionStatusWithAggregatesFilter<"NFTDistribution"> | $Enums.DistributionStatus
    blockchain?: EnumBlockchainWithAggregatesFilter<"NFTDistribution"> | $Enums.Blockchain
    error?: StringNullableWithAggregatesFilter<"NFTDistribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NFTDistribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NFTDistribution"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: IntFilter<"SystemConfig"> | number
    key?: StringFilter<"SystemConfig"> | string
    value?: JsonFilter<"SystemConfig">
    description?: StringNullableFilter<"SystemConfig"> | string | null
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: JsonFilter<"SystemConfig">
    description?: StringNullableFilter<"SystemConfig"> | string | null
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _avg?: SystemConfigAvgOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
    _sum?: SystemConfigSumOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemConfig"> | number
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: JsonWithAggregatesFilter<"SystemConfig">
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type CrawlerTaskWhereInput = {
    AND?: CrawlerTaskWhereInput | CrawlerTaskWhereInput[]
    OR?: CrawlerTaskWhereInput[]
    NOT?: CrawlerTaskWhereInput | CrawlerTaskWhereInput[]
    id?: IntFilter<"CrawlerTask"> | number
    type?: EnumCrawlerTaskTypeFilter<"CrawlerTask"> | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFilter<"CrawlerTask"> | $Enums.CrawlerTaskStatus
    metadata?: JsonNullableFilter<"CrawlerTask">
    result?: JsonNullableFilter<"CrawlerTask">
    sourceId?: StringNullableFilter<"CrawlerTask"> | string | null
    attempts?: IntFilter<"CrawlerTask"> | number
    maxAttempts?: IntFilter<"CrawlerTask"> | number
    error?: StringNullableFilter<"CrawlerTask"> | string | null
    startedAt?: DateTimeNullableFilter<"CrawlerTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"CrawlerTask"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlerTask"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlerTask"> | Date | string
  }

  export type CrawlerTaskOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlerTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CrawlerTaskWhereInput | CrawlerTaskWhereInput[]
    OR?: CrawlerTaskWhereInput[]
    NOT?: CrawlerTaskWhereInput | CrawlerTaskWhereInput[]
    type?: EnumCrawlerTaskTypeFilter<"CrawlerTask"> | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFilter<"CrawlerTask"> | $Enums.CrawlerTaskStatus
    metadata?: JsonNullableFilter<"CrawlerTask">
    result?: JsonNullableFilter<"CrawlerTask">
    sourceId?: StringNullableFilter<"CrawlerTask"> | string | null
    attempts?: IntFilter<"CrawlerTask"> | number
    maxAttempts?: IntFilter<"CrawlerTask"> | number
    error?: StringNullableFilter<"CrawlerTask"> | string | null
    startedAt?: DateTimeNullableFilter<"CrawlerTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"CrawlerTask"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlerTask"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlerTask"> | Date | string
  }, "id">

  export type CrawlerTaskOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrawlerTaskCountOrderByAggregateInput
    _avg?: CrawlerTaskAvgOrderByAggregateInput
    _max?: CrawlerTaskMaxOrderByAggregateInput
    _min?: CrawlerTaskMinOrderByAggregateInput
    _sum?: CrawlerTaskSumOrderByAggregateInput
  }

  export type CrawlerTaskScalarWhereWithAggregatesInput = {
    AND?: CrawlerTaskScalarWhereWithAggregatesInput | CrawlerTaskScalarWhereWithAggregatesInput[]
    OR?: CrawlerTaskScalarWhereWithAggregatesInput[]
    NOT?: CrawlerTaskScalarWhereWithAggregatesInput | CrawlerTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CrawlerTask"> | number
    type?: EnumCrawlerTaskTypeWithAggregatesFilter<"CrawlerTask"> | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusWithAggregatesFilter<"CrawlerTask"> | $Enums.CrawlerTaskStatus
    metadata?: JsonNullableWithAggregatesFilter<"CrawlerTask">
    result?: JsonNullableWithAggregatesFilter<"CrawlerTask">
    sourceId?: StringNullableWithAggregatesFilter<"CrawlerTask"> | string | null
    attempts?: IntWithAggregatesFilter<"CrawlerTask"> | number
    maxAttempts?: IntWithAggregatesFilter<"CrawlerTask"> | number
    error?: StringNullableWithAggregatesFilter<"CrawlerTask"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"CrawlerTask"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"CrawlerTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrawlerTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrawlerTask"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: IntFilter<"Wallet"> | number
    address?: StringFilter<"Wallet"> | string
    isPrimary?: BoolFilter<"Wallet"> | boolean
    userId?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    isPrimary?: BoolFilter<"Wallet"> | boolean
    userId?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
  }, "id" | "address">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wallet"> | number
    address?: StringWithAggregatesFilter<"Wallet"> | string
    isPrimary?: BoolWithAggregatesFilter<"Wallet"> | boolean
    userId?: IntWithAggregatesFilter<"Wallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    name?: StringNullableFilter<"Campaign"> | string | null
    description?: StringFilter<"Campaign"> | string
    tokenAddress?: StringFilter<"Campaign"> | string
    tokenName?: StringFilter<"Campaign"> | string
    totalAmount?: BigIntFilter<"Campaign"> | bigint | number
    remainingAmount?: BigIntFilter<"Campaign"> | bigint | number
    marketCap?: BigIntNullableFilter<"Campaign"> | bigint | number | null
    startTime?: DateTimeFilter<"Campaign"> | Date | string
    endTime?: DateTimeFilter<"Campaign"> | Date | string
    tags?: StringNullableListFilter<"Campaign">
    socialLinks?: JsonFilter<"Campaign">
    creatorId?: IntFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    ticker?: StringFilter<"Campaign"> | string
    txHash?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrder
    tokenAddress?: SortOrder
    tokenName?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    tags?: SortOrder
    socialLinks?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticker?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringNullableFilter<"Campaign"> | string | null
    description?: StringFilter<"Campaign"> | string
    tokenAddress?: StringFilter<"Campaign"> | string
    tokenName?: StringFilter<"Campaign"> | string
    totalAmount?: BigIntFilter<"Campaign"> | bigint | number
    remainingAmount?: BigIntFilter<"Campaign"> | bigint | number
    marketCap?: BigIntNullableFilter<"Campaign"> | bigint | number | null
    startTime?: DateTimeFilter<"Campaign"> | Date | string
    endTime?: DateTimeFilter<"Campaign"> | Date | string
    tags?: StringNullableListFilter<"Campaign">
    socialLinks?: JsonFilter<"Campaign">
    creatorId?: IntFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    ticker?: StringFilter<"Campaign"> | string
    txHash?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrder
    tokenAddress?: SortOrder
    tokenName?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    tags?: SortOrder
    socialLinks?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticker?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    name?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    description?: StringWithAggregatesFilter<"Campaign"> | string
    tokenAddress?: StringWithAggregatesFilter<"Campaign"> | string
    tokenName?: StringWithAggregatesFilter<"Campaign"> | string
    totalAmount?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    remainingAmount?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    marketCap?: BigIntNullableWithAggregatesFilter<"Campaign"> | bigint | number | null
    startTime?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    tags?: StringNullableListFilter<"Campaign">
    socialLinks?: JsonWithAggregatesFilter<"Campaign">
    creatorId?: IntWithAggregatesFilter<"Campaign"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    ticker?: StringWithAggregatesFilter<"Campaign"> | string
    txHash?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
  }

  export type TokenPoolWhereInput = {
    AND?: TokenPoolWhereInput | TokenPoolWhereInput[]
    OR?: TokenPoolWhereInput[]
    NOT?: TokenPoolWhereInput | TokenPoolWhereInput[]
    id?: IntFilter<"TokenPool"> | number
    campaignId?: IntFilter<"TokenPool"> | number
    txHash?: StringFilter<"TokenPool"> | string
    amount?: BigIntFilter<"TokenPool"> | bigint | number
    creatorId?: IntFilter<"TokenPool"> | number
    createdAt?: DateTimeFilter<"TokenPool"> | Date | string
    updatedAt?: DateTimeFilter<"TokenPool"> | Date | string
    type?: EnumTokenPoolTypeFilter<"TokenPool"> | $Enums.TokenPoolType
  }

  export type TokenPoolOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    txHash?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type TokenPoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenPoolWhereInput | TokenPoolWhereInput[]
    OR?: TokenPoolWhereInput[]
    NOT?: TokenPoolWhereInput | TokenPoolWhereInput[]
    campaignId?: IntFilter<"TokenPool"> | number
    txHash?: StringFilter<"TokenPool"> | string
    amount?: BigIntFilter<"TokenPool"> | bigint | number
    creatorId?: IntFilter<"TokenPool"> | number
    createdAt?: DateTimeFilter<"TokenPool"> | Date | string
    updatedAt?: DateTimeFilter<"TokenPool"> | Date | string
    type?: EnumTokenPoolTypeFilter<"TokenPool"> | $Enums.TokenPoolType
  }, "id">

  export type TokenPoolOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    txHash?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    _count?: TokenPoolCountOrderByAggregateInput
    _avg?: TokenPoolAvgOrderByAggregateInput
    _max?: TokenPoolMaxOrderByAggregateInput
    _min?: TokenPoolMinOrderByAggregateInput
    _sum?: TokenPoolSumOrderByAggregateInput
  }

  export type TokenPoolScalarWhereWithAggregatesInput = {
    AND?: TokenPoolScalarWhereWithAggregatesInput | TokenPoolScalarWhereWithAggregatesInput[]
    OR?: TokenPoolScalarWhereWithAggregatesInput[]
    NOT?: TokenPoolScalarWhereWithAggregatesInput | TokenPoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenPool"> | number
    campaignId?: IntWithAggregatesFilter<"TokenPool"> | number
    txHash?: StringWithAggregatesFilter<"TokenPool"> | string
    amount?: BigIntWithAggregatesFilter<"TokenPool"> | bigint | number
    creatorId?: IntWithAggregatesFilter<"TokenPool"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TokenPool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokenPool"> | Date | string
    type?: EnumTokenPoolTypeWithAggregatesFilter<"TokenPool"> | $Enums.TokenPoolType
  }

  export type ParticipationWhereInput = {
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    id?: IntFilter<"Participation"> | number
    campaignId?: IntFilter<"Participation"> | number
    userId?: IntFilter<"Participation"> | number
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    influenceScore?: FloatNullableFilter<"Participation"> | number | null
    twitterId?: StringFilter<"Participation"> | string
  }

  export type ParticipationOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influenceScore?: SortOrderInput | SortOrder
    twitterId?: SortOrder
  }

  export type ParticipationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_campaignId?: ParticipationUserIdCampaignIdCompoundUniqueInput
    twitterId_campaignId?: ParticipationTwitterIdCampaignIdCompoundUniqueInput
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    campaignId?: IntFilter<"Participation"> | number
    userId?: IntFilter<"Participation"> | number
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    influenceScore?: FloatNullableFilter<"Participation"> | number | null
    twitterId?: StringFilter<"Participation"> | string
  }, "id" | "userId_campaignId" | "twitterId_campaignId">

  export type ParticipationOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influenceScore?: SortOrderInput | SortOrder
    twitterId?: SortOrder
    _count?: ParticipationCountOrderByAggregateInput
    _avg?: ParticipationAvgOrderByAggregateInput
    _max?: ParticipationMaxOrderByAggregateInput
    _min?: ParticipationMinOrderByAggregateInput
    _sum?: ParticipationSumOrderByAggregateInput
  }

  export type ParticipationScalarWhereWithAggregatesInput = {
    AND?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    OR?: ParticipationScalarWhereWithAggregatesInput[]
    NOT?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participation"> | number
    campaignId?: IntWithAggregatesFilter<"Participation"> | number
    userId?: IntWithAggregatesFilter<"Participation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    influenceScore?: FloatNullableWithAggregatesFilter<"Participation"> | number | null
    twitterId?: StringWithAggregatesFilter<"Participation"> | string
  }

  export type ClaimRecordWhereInput = {
    AND?: ClaimRecordWhereInput | ClaimRecordWhereInput[]
    OR?: ClaimRecordWhereInput[]
    NOT?: ClaimRecordWhereInput | ClaimRecordWhereInput[]
    id?: IntFilter<"ClaimRecord"> | number
    campaignId?: IntFilter<"ClaimRecord"> | number
    userId?: IntFilter<"ClaimRecord"> | number
    amount?: BigIntFilter<"ClaimRecord"> | bigint | number
    claimed?: BoolFilter<"ClaimRecord"> | boolean
    txHash?: StringNullableFilter<"ClaimRecord"> | string | null
    createdAt?: DateTimeFilter<"ClaimRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClaimRecord"> | Date | string
  }

  export type ClaimRecordOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    claimed?: SortOrder
    txHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaimRecordWhereInput | ClaimRecordWhereInput[]
    OR?: ClaimRecordWhereInput[]
    NOT?: ClaimRecordWhereInput | ClaimRecordWhereInput[]
    campaignId?: IntFilter<"ClaimRecord"> | number
    userId?: IntFilter<"ClaimRecord"> | number
    amount?: BigIntFilter<"ClaimRecord"> | bigint | number
    claimed?: BoolFilter<"ClaimRecord"> | boolean
    txHash?: StringNullableFilter<"ClaimRecord"> | string | null
    createdAt?: DateTimeFilter<"ClaimRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClaimRecord"> | Date | string
  }, "id">

  export type ClaimRecordOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    claimed?: SortOrder
    txHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimRecordCountOrderByAggregateInput
    _avg?: ClaimRecordAvgOrderByAggregateInput
    _max?: ClaimRecordMaxOrderByAggregateInput
    _min?: ClaimRecordMinOrderByAggregateInput
    _sum?: ClaimRecordSumOrderByAggregateInput
  }

  export type ClaimRecordScalarWhereWithAggregatesInput = {
    AND?: ClaimRecordScalarWhereWithAggregatesInput | ClaimRecordScalarWhereWithAggregatesInput[]
    OR?: ClaimRecordScalarWhereWithAggregatesInput[]
    NOT?: ClaimRecordScalarWhereWithAggregatesInput | ClaimRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClaimRecord"> | number
    campaignId?: IntWithAggregatesFilter<"ClaimRecord"> | number
    userId?: IntWithAggregatesFilter<"ClaimRecord"> | number
    amount?: BigIntWithAggregatesFilter<"ClaimRecord"> | bigint | number
    claimed?: BoolWithAggregatesFilter<"ClaimRecord"> | boolean
    txHash?: StringNullableWithAggregatesFilter<"ClaimRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClaimRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClaimRecord"> | Date | string
  }

  export type WhitelistWhereInput = {
    AND?: WhitelistWhereInput | WhitelistWhereInput[]
    OR?: WhitelistWhereInput[]
    NOT?: WhitelistWhereInput | WhitelistWhereInput[]
    id?: IntFilter<"Whitelist"> | number
    userId?: IntFilter<"Whitelist"> | number
    twitterId?: StringFilter<"Whitelist"> | string
    referralCode?: StringFilter<"Whitelist"> | string
    status?: StringFilter<"Whitelist"> | string
    claimedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    createdAt?: DateTimeFilter<"Whitelist"> | Date | string
    followedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    postLink?: StringNullableFilter<"Whitelist"> | string | null
    postedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    referredAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    registeredAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    updatedAt?: DateTimeFilter<"Whitelist"> | Date | string
  }

  export type WhitelistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    twitterId?: SortOrder
    referralCode?: SortOrder
    status?: SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    followedAt?: SortOrderInput | SortOrder
    postLink?: SortOrderInput | SortOrder
    postedAt?: SortOrderInput | SortOrder
    referredAt?: SortOrderInput | SortOrder
    registeredAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type WhitelistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    twitterId?: string
    referralCode?: string
    AND?: WhitelistWhereInput | WhitelistWhereInput[]
    OR?: WhitelistWhereInput[]
    NOT?: WhitelistWhereInput | WhitelistWhereInput[]
    status?: StringFilter<"Whitelist"> | string
    claimedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    createdAt?: DateTimeFilter<"Whitelist"> | Date | string
    followedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    postLink?: StringNullableFilter<"Whitelist"> | string | null
    postedAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    referredAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    registeredAt?: DateTimeNullableFilter<"Whitelist"> | Date | string | null
    updatedAt?: DateTimeFilter<"Whitelist"> | Date | string
  }, "id" | "userId" | "twitterId" | "referralCode">

  export type WhitelistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    twitterId?: SortOrder
    referralCode?: SortOrder
    status?: SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    followedAt?: SortOrderInput | SortOrder
    postLink?: SortOrderInput | SortOrder
    postedAt?: SortOrderInput | SortOrder
    referredAt?: SortOrderInput | SortOrder
    registeredAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: WhitelistCountOrderByAggregateInput
    _avg?: WhitelistAvgOrderByAggregateInput
    _max?: WhitelistMaxOrderByAggregateInput
    _min?: WhitelistMinOrderByAggregateInput
    _sum?: WhitelistSumOrderByAggregateInput
  }

  export type WhitelistScalarWhereWithAggregatesInput = {
    AND?: WhitelistScalarWhereWithAggregatesInput | WhitelistScalarWhereWithAggregatesInput[]
    OR?: WhitelistScalarWhereWithAggregatesInput[]
    NOT?: WhitelistScalarWhereWithAggregatesInput | WhitelistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Whitelist"> | number
    userId?: IntWithAggregatesFilter<"Whitelist"> | number
    twitterId?: StringWithAggregatesFilter<"Whitelist"> | string
    referralCode?: StringWithAggregatesFilter<"Whitelist"> | string
    status?: StringWithAggregatesFilter<"Whitelist"> | string
    claimedAt?: DateTimeNullableWithAggregatesFilter<"Whitelist"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Whitelist"> | Date | string
    followedAt?: DateTimeNullableWithAggregatesFilter<"Whitelist"> | Date | string | null
    postLink?: StringNullableWithAggregatesFilter<"Whitelist"> | string | null
    postedAt?: DateTimeNullableWithAggregatesFilter<"Whitelist"> | Date | string | null
    referredAt?: DateTimeNullableWithAggregatesFilter<"Whitelist"> | Date | string | null
    registeredAt?: DateTimeNullableWithAggregatesFilter<"Whitelist"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Whitelist"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: IntFilter<"Referral"> | number
    referrerId?: IntFilter<"Referral"> | number
    referrerTwitterId?: StringFilter<"Referral"> | string
    refereeId?: IntFilter<"Referral"> | number
    refereeTwitterId?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referrerTwitterId?: SortOrder
    refereeId?: SortOrder
    refereeTwitterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    referrerId_refereeId?: ReferralReferrerIdRefereeIdCompoundUniqueInput
    referrerTwitterId_refereeTwitterId?: ReferralReferrerTwitterIdRefereeTwitterIdCompoundUniqueInput
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    referrerId?: IntFilter<"Referral"> | number
    referrerTwitterId?: StringFilter<"Referral"> | string
    refereeId?: IntFilter<"Referral"> | number
    refereeTwitterId?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
  }, "id" | "referrerId_refereeId" | "referrerTwitterId_refereeTwitterId">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referrerTwitterId?: SortOrder
    refereeId?: SortOrder
    refereeTwitterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Referral"> | number
    referrerId?: IntWithAggregatesFilter<"Referral"> | number
    referrerTwitterId?: StringWithAggregatesFilter<"Referral"> | string
    refereeId?: IntWithAggregatesFilter<"Referral"> | number
    refereeTwitterId?: StringWithAggregatesFilter<"Referral"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type TokenInformationWhereInput = {
    AND?: TokenInformationWhereInput | TokenInformationWhereInput[]
    OR?: TokenInformationWhereInput[]
    NOT?: TokenInformationWhereInput | TokenInformationWhereInput[]
    id?: IntFilter<"TokenInformation"> | number
    mint?: StringFilter<"TokenInformation"> | string
    name?: StringNullableFilter<"TokenInformation"> | string | null
    symbol?: StringNullableFilter<"TokenInformation"> | string | null
    uri?: StringNullableFilter<"TokenInformation"> | string | null
    platform?: StringFilter<"TokenInformation"> | string
    marketValue?: FloatFilter<"TokenInformation"> | number
    virtualSolReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    virtualTokenReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    realSolReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    realTokenReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    isComplete?: BoolFilter<"TokenInformation"> | boolean
    lastTransactionType?: StringNullableFilter<"TokenInformation"> | string | null
    blockTime?: IntNullableFilter<"TokenInformation"> | number | null
    createdAt?: DateTimeFilter<"TokenInformation"> | Date | string
    updatedAt?: DateTimeFilter<"TokenInformation"> | Date | string
  }

  export type TokenInformationOrderByWithRelationInput = {
    id?: SortOrder
    mint?: SortOrder
    name?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    platform?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    isComplete?: SortOrder
    lastTransactionType?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mint?: string
    AND?: TokenInformationWhereInput | TokenInformationWhereInput[]
    OR?: TokenInformationWhereInput[]
    NOT?: TokenInformationWhereInput | TokenInformationWhereInput[]
    name?: StringNullableFilter<"TokenInformation"> | string | null
    symbol?: StringNullableFilter<"TokenInformation"> | string | null
    uri?: StringNullableFilter<"TokenInformation"> | string | null
    platform?: StringFilter<"TokenInformation"> | string
    marketValue?: FloatFilter<"TokenInformation"> | number
    virtualSolReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    virtualTokenReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    realSolReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    realTokenReserves?: BigIntFilter<"TokenInformation"> | bigint | number
    isComplete?: BoolFilter<"TokenInformation"> | boolean
    lastTransactionType?: StringNullableFilter<"TokenInformation"> | string | null
    blockTime?: IntNullableFilter<"TokenInformation"> | number | null
    createdAt?: DateTimeFilter<"TokenInformation"> | Date | string
    updatedAt?: DateTimeFilter<"TokenInformation"> | Date | string
  }, "id" | "mint">

  export type TokenInformationOrderByWithAggregationInput = {
    id?: SortOrder
    mint?: SortOrder
    name?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    uri?: SortOrderInput | SortOrder
    platform?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    isComplete?: SortOrder
    lastTransactionType?: SortOrderInput | SortOrder
    blockTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenInformationCountOrderByAggregateInput
    _avg?: TokenInformationAvgOrderByAggregateInput
    _max?: TokenInformationMaxOrderByAggregateInput
    _min?: TokenInformationMinOrderByAggregateInput
    _sum?: TokenInformationSumOrderByAggregateInput
  }

  export type TokenInformationScalarWhereWithAggregatesInput = {
    AND?: TokenInformationScalarWhereWithAggregatesInput | TokenInformationScalarWhereWithAggregatesInput[]
    OR?: TokenInformationScalarWhereWithAggregatesInput[]
    NOT?: TokenInformationScalarWhereWithAggregatesInput | TokenInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenInformation"> | number
    mint?: StringWithAggregatesFilter<"TokenInformation"> | string
    name?: StringNullableWithAggregatesFilter<"TokenInformation"> | string | null
    symbol?: StringNullableWithAggregatesFilter<"TokenInformation"> | string | null
    uri?: StringNullableWithAggregatesFilter<"TokenInformation"> | string | null
    platform?: StringWithAggregatesFilter<"TokenInformation"> | string
    marketValue?: FloatWithAggregatesFilter<"TokenInformation"> | number
    virtualSolReserves?: BigIntWithAggregatesFilter<"TokenInformation"> | bigint | number
    virtualTokenReserves?: BigIntWithAggregatesFilter<"TokenInformation"> | bigint | number
    realSolReserves?: BigIntWithAggregatesFilter<"TokenInformation"> | bigint | number
    realTokenReserves?: BigIntWithAggregatesFilter<"TokenInformation"> | bigint | number
    isComplete?: BoolWithAggregatesFilter<"TokenInformation"> | boolean
    lastTransactionType?: StringNullableWithAggregatesFilter<"TokenInformation"> | string | null
    blockTime?: IntNullableWithAggregatesFilter<"TokenInformation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TokenInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokenInformation"> | Date | string
  }

  export type UserCreateInput = {
    twitterId: string
    name: string
    profileImageUrl?: string | null
    verified?: boolean
    description?: string | null
    followersCount?: number
    followingCount?: number
    tweetsCount?: number
    listedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    handle: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    twitterId: string
    name: string
    profileImageUrl?: string | null
    verified?: boolean
    description?: string | null
    followersCount?: number
    followingCount?: number
    tweetsCount?: number
    listedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    handle: string
  }

  export type UserUpdateInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    tweetsCount?: IntFieldUpdateOperationsInput | number
    listedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    tweetsCount?: IntFieldUpdateOperationsInput | number
    listedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    twitterId: string
    name: string
    profileImageUrl?: string | null
    verified?: boolean
    description?: string | null
    followersCount?: number
    followingCount?: number
    tweetsCount?: number
    listedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    handle: string
  }

  export type UserUpdateManyMutationInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    tweetsCount?: IntFieldUpdateOperationsInput | number
    listedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: IntFieldUpdateOperationsInput | number
    followingCount?: IntFieldUpdateOperationsInput | number
    tweetsCount?: IntFieldUpdateOperationsInput | number
    listedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type TweetCreateInput = {
    tweetId: string
    text: string
    createdAt?: Date | string
    retweetCount?: number
    replyCount?: number
    likeCount?: number
    quoteCount?: number
    viewCount?: number
    bookmarkCount?: number
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: TweetCreatetickerSymbolsInput | string[]
    fetchedAt: Date | string
    updatedAt?: Date | string
    parentTweetId?: string | null
    tweetCreatedAt: Date | string
    twitterId: string
  }

  export type TweetUncheckedCreateInput = {
    tweetId: string
    text: string
    createdAt?: Date | string
    retweetCount?: number
    replyCount?: number
    likeCount?: number
    quoteCount?: number
    viewCount?: number
    bookmarkCount?: number
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: TweetCreatetickerSymbolsInput | string[]
    fetchedAt: Date | string
    updatedAt?: Date | string
    parentTweetId?: string | null
    tweetCreatedAt: Date | string
    twitterId: string
  }

  export type TweetUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retweetCount?: IntFieldUpdateOperationsInput | number
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    bookmarkCount?: IntFieldUpdateOperationsInput | number
    isRetweet?: BoolFieldUpdateOperationsInput | boolean
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    hasMedia?: BoolFieldUpdateOperationsInput | boolean
    tickerSymbols?: TweetUpdatetickerSymbolsInput | string[]
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTweetId?: NullableStringFieldUpdateOperationsInput | string | null
    tweetCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetUncheckedUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retweetCount?: IntFieldUpdateOperationsInput | number
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    bookmarkCount?: IntFieldUpdateOperationsInput | number
    isRetweet?: BoolFieldUpdateOperationsInput | boolean
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    hasMedia?: BoolFieldUpdateOperationsInput | boolean
    tickerSymbols?: TweetUpdatetickerSymbolsInput | string[]
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTweetId?: NullableStringFieldUpdateOperationsInput | string | null
    tweetCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetCreateManyInput = {
    tweetId: string
    text: string
    createdAt?: Date | string
    retweetCount?: number
    replyCount?: number
    likeCount?: number
    quoteCount?: number
    viewCount?: number
    bookmarkCount?: number
    isRetweet?: boolean
    isQuote?: boolean
    isReply?: boolean
    hasMedia?: boolean
    tickerSymbols?: TweetCreatetickerSymbolsInput | string[]
    fetchedAt: Date | string
    updatedAt?: Date | string
    parentTweetId?: string | null
    tweetCreatedAt: Date | string
    twitterId: string
  }

  export type TweetUpdateManyMutationInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retweetCount?: IntFieldUpdateOperationsInput | number
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    bookmarkCount?: IntFieldUpdateOperationsInput | number
    isRetweet?: BoolFieldUpdateOperationsInput | boolean
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    hasMedia?: BoolFieldUpdateOperationsInput | boolean
    tickerSymbols?: TweetUpdatetickerSymbolsInput | string[]
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTweetId?: NullableStringFieldUpdateOperationsInput | string | null
    tweetCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetUncheckedUpdateManyInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retweetCount?: IntFieldUpdateOperationsInput | number
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    bookmarkCount?: IntFieldUpdateOperationsInput | number
    isRetweet?: BoolFieldUpdateOperationsInput | boolean
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isReply?: BoolFieldUpdateOperationsInput | boolean
    hasMedia?: BoolFieldUpdateOperationsInput | boolean
    tickerSymbols?: TweetUpdatetickerSymbolsInput | string[]
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTweetId?: NullableStringFieldUpdateOperationsInput | string | null
    tweetCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignTweetCreateInput = {
    tweetId: string
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignTweetUncheckedCreateInput = {
    id?: number
    tweetId: string
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignTweetUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignTweetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignTweetCreateManyInput = {
    id?: number
    tweetId: string
    campaignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignTweetUpdateManyMutationInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignTweetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFTDistributionCreateInput = {
    userId: number
    tweetId: number
    nftTokenId?: string | null
    transactionHash?: string | null
    walletAddress: string
    amount?: number
    status?: $Enums.DistributionStatus
    blockchain?: $Enums.Blockchain
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NFTDistributionUncheckedCreateInput = {
    id?: number
    userId: number
    tweetId: number
    nftTokenId?: string | null
    transactionHash?: string | null
    walletAddress: string
    amount?: number
    status?: $Enums.DistributionStatus
    blockchain?: $Enums.Blockchain
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NFTDistributionUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    tweetId?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumDistributionStatusFieldUpdateOperationsInput | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFieldUpdateOperationsInput | $Enums.Blockchain
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFTDistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tweetId?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumDistributionStatusFieldUpdateOperationsInput | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFieldUpdateOperationsInput | $Enums.Blockchain
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFTDistributionCreateManyInput = {
    id?: number
    userId: number
    tweetId: number
    nftTokenId?: string | null
    transactionHash?: string | null
    walletAddress: string
    amount?: number
    status?: $Enums.DistributionStatus
    blockchain?: $Enums.Blockchain
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NFTDistributionUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    tweetId?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumDistributionStatusFieldUpdateOperationsInput | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFieldUpdateOperationsInput | $Enums.Blockchain
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFTDistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tweetId?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumDistributionStatusFieldUpdateOperationsInput | $Enums.DistributionStatus
    blockchain?: EnumBlockchainFieldUpdateOperationsInput | $Enums.Blockchain
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: number
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: number
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlerTaskCreateInput = {
    type: $Enums.CrawlerTaskType
    status?: $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: string | null
    attempts?: number
    maxAttempts?: number
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlerTaskUncheckedCreateInput = {
    id?: number
    type: $Enums.CrawlerTaskType
    status?: $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: string | null
    attempts?: number
    maxAttempts?: number
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlerTaskUpdateInput = {
    type?: EnumCrawlerTaskTypeFieldUpdateOperationsInput | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFieldUpdateOperationsInput | $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlerTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumCrawlerTaskTypeFieldUpdateOperationsInput | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFieldUpdateOperationsInput | $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlerTaskCreateManyInput = {
    id?: number
    type: $Enums.CrawlerTaskType
    status?: $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: string | null
    attempts?: number
    maxAttempts?: number
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlerTaskUpdateManyMutationInput = {
    type?: EnumCrawlerTaskTypeFieldUpdateOperationsInput | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFieldUpdateOperationsInput | $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlerTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumCrawlerTaskTypeFieldUpdateOperationsInput | $Enums.CrawlerTaskType
    status?: EnumCrawlerTaskStatusFieldUpdateOperationsInput | $Enums.CrawlerTaskStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    address: string
    isPrimary?: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    address: string
    isPrimary?: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: number
    address: string
    isPrimary?: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    name?: string | null
    description: string
    tokenAddress: string
    tokenName: string
    totalAmount: bigint | number
    remainingAmount: bigint | number
    marketCap?: bigint | number | null
    startTime: Date | string
    endTime: Date | string
    tags?: CampaignCreatetagsInput | string[]
    socialLinks: JsonNullValueInput | InputJsonValue
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: string
    txHash: string
    status: $Enums.CampaignStatus
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    name?: string | null
    description: string
    tokenAddress: string
    tokenName: string
    totalAmount: bigint | number
    remainingAmount: bigint | number
    marketCap?: bigint | number | null
    startTime: Date | string
    endTime: Date | string
    tags?: CampaignCreatetagsInput | string[]
    socialLinks: JsonNullValueInput | InputJsonValue
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: string
    txHash: string
    status: $Enums.CampaignStatus
  }

  export type CampaignUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CampaignUpdatetagsInput | string[]
    socialLinks?: JsonNullValueInput | InputJsonValue
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CampaignUpdatetagsInput | string[]
    socialLinks?: JsonNullValueInput | InputJsonValue
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
  }

  export type CampaignCreateManyInput = {
    id?: number
    name?: string | null
    description: string
    tokenAddress: string
    tokenName: string
    totalAmount: bigint | number
    remainingAmount: bigint | number
    marketCap?: bigint | number | null
    startTime: Date | string
    endTime: Date | string
    tags?: CampaignCreatetagsInput | string[]
    socialLinks: JsonNullValueInput | InputJsonValue
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: string
    txHash: string
    status: $Enums.CampaignStatus
  }

  export type CampaignUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CampaignUpdatetagsInput | string[]
    socialLinks?: JsonNullValueInput | InputJsonValue
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    remainingAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marketCap?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CampaignUpdatetagsInput | string[]
    socialLinks?: JsonNullValueInput | InputJsonValue
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
  }

  export type TokenPoolCreateInput = {
    campaignId: number
    txHash: string
    amount: bigint | number
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TokenPoolType
  }

  export type TokenPoolUncheckedCreateInput = {
    id?: number
    campaignId: number
    txHash: string
    amount: bigint | number
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TokenPoolType
  }

  export type TokenPoolUpdateInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTokenPoolTypeFieldUpdateOperationsInput | $Enums.TokenPoolType
  }

  export type TokenPoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTokenPoolTypeFieldUpdateOperationsInput | $Enums.TokenPoolType
  }

  export type TokenPoolCreateManyInput = {
    id?: number
    campaignId: number
    txHash: string
    amount: bigint | number
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TokenPoolType
  }

  export type TokenPoolUpdateManyMutationInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTokenPoolTypeFieldUpdateOperationsInput | $Enums.TokenPoolType
  }

  export type TokenPoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTokenPoolTypeFieldUpdateOperationsInput | $Enums.TokenPoolType
  }

  export type ParticipationCreateInput = {
    campaignId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    influenceScore?: number | null
    twitterId: string
  }

  export type ParticipationUncheckedCreateInput = {
    id?: number
    campaignId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    influenceScore?: number | null
    twitterId: string
  }

  export type ParticipationUpdateInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationCreateManyInput = {
    id?: number
    campaignId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    influenceScore?: number | null
    twitterId: string
  }

  export type ParticipationUpdateManyMutationInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    twitterId?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimRecordCreateInput = {
    campaignId: number
    userId: number
    amount: bigint | number
    claimed: boolean
    txHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimRecordUncheckedCreateInput = {
    id?: number
    campaignId: number
    userId: number
    amount: bigint | number
    claimed: boolean
    txHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimRecordUpdateInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimRecordCreateManyInput = {
    id?: number
    campaignId: number
    userId: number
    amount: bigint | number
    claimed: boolean
    txHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimRecordUpdateManyMutationInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistCreateInput = {
    userId: number
    twitterId: string
    referralCode: string
    status?: string
    claimedAt?: Date | string | null
    createdAt?: Date | string
    followedAt?: Date | string | null
    postLink?: string | null
    postedAt?: Date | string | null
    referredAt?: Date | string | null
    registeredAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WhitelistUncheckedCreateInput = {
    id?: number
    userId: number
    twitterId: string
    referralCode: string
    status?: string
    claimedAt?: Date | string | null
    createdAt?: Date | string
    followedAt?: Date | string | null
    postLink?: string | null
    postedAt?: Date | string | null
    referredAt?: Date | string | null
    registeredAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WhitelistUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postLink?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postLink?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistCreateManyInput = {
    id?: number
    userId: number
    twitterId: string
    referralCode: string
    status?: string
    claimedAt?: Date | string | null
    createdAt?: Date | string
    followedAt?: Date | string | null
    postLink?: string | null
    postedAt?: Date | string | null
    referredAt?: Date | string | null
    registeredAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type WhitelistUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postLink?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    twitterId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postLink?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    referrerId: number
    referrerTwitterId: string
    refereeId: number
    refereeTwitterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUncheckedCreateInput = {
    id?: number
    referrerId: number
    referrerTwitterId: string
    refereeId: number
    refereeTwitterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateInput = {
    referrerId?: IntFieldUpdateOperationsInput | number
    referrerTwitterId?: StringFieldUpdateOperationsInput | string
    refereeId?: IntFieldUpdateOperationsInput | number
    refereeTwitterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    referrerTwitterId?: StringFieldUpdateOperationsInput | string
    refereeId?: IntFieldUpdateOperationsInput | number
    refereeTwitterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: number
    referrerId: number
    referrerTwitterId: string
    refereeId: number
    refereeTwitterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    referrerId?: IntFieldUpdateOperationsInput | number
    referrerTwitterId?: StringFieldUpdateOperationsInput | string
    refereeId?: IntFieldUpdateOperationsInput | number
    refereeTwitterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    referrerTwitterId?: StringFieldUpdateOperationsInput | string
    refereeId?: IntFieldUpdateOperationsInput | number
    refereeTwitterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenInformationCreateInput = {
    mint: string
    name?: string | null
    symbol?: string | null
    uri?: string | null
    platform?: string
    marketValue: number
    virtualSolReserves: bigint | number
    virtualTokenReserves: bigint | number
    realSolReserves: bigint | number
    realTokenReserves: bigint | number
    isComplete?: boolean
    lastTransactionType?: string | null
    blockTime?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TokenInformationUncheckedCreateInput = {
    id?: number
    mint: string
    name?: string | null
    symbol?: string | null
    uri?: string | null
    platform?: string
    marketValue: number
    virtualSolReserves: bigint | number
    virtualTokenReserves: bigint | number
    realSolReserves: bigint | number
    realTokenReserves: bigint | number
    isComplete?: boolean
    lastTransactionType?: string | null
    blockTime?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TokenInformationUpdateInput = {
    mint?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    marketValue?: FloatFieldUpdateOperationsInput | number
    virtualSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    virtualTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    lastTransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    blockTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mint?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    marketValue?: FloatFieldUpdateOperationsInput | number
    virtualSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    virtualTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    lastTransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    blockTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenInformationCreateManyInput = {
    id?: number
    mint: string
    name?: string | null
    symbol?: string | null
    uri?: string | null
    platform?: string
    marketValue: number
    virtualSolReserves: bigint | number
    virtualTokenReserves: bigint | number
    realSolReserves: bigint | number
    realTokenReserves: bigint | number
    isComplete?: boolean
    lastTransactionType?: string | null
    blockTime?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TokenInformationUpdateManyMutationInput = {
    mint?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    marketValue?: FloatFieldUpdateOperationsInput | number
    virtualSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    virtualTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    lastTransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    blockTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mint?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    marketValue?: FloatFieldUpdateOperationsInput | number
    virtualSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    virtualTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realSolReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    realTokenReserves?: BigIntFieldUpdateOperationsInput | bigint | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    lastTransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    blockTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    twitterId?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handle?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    twitterId?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handle?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    twitterId?: SortOrder
    name?: SortOrder
    profileImageUrl?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    handle?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    followersCount?: SortOrder
    followingCount?: SortOrder
    tweetsCount?: SortOrder
    listedCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TweetTweetIdFetchedAtCompoundUniqueInput = {
    tweetId: string
    fetchedAt: Date | string
  }

  export type TweetCountOrderByAggregateInput = {
    tweetId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
    isRetweet?: SortOrder
    isQuote?: SortOrder
    isReply?: SortOrder
    hasMedia?: SortOrder
    tickerSymbols?: SortOrder
    fetchedAt?: SortOrder
    updatedAt?: SortOrder
    parentTweetId?: SortOrder
    tweetCreatedAt?: SortOrder
    twitterId?: SortOrder
  }

  export type TweetAvgOrderByAggregateInput = {
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
  }

  export type TweetMaxOrderByAggregateInput = {
    tweetId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
    isRetweet?: SortOrder
    isQuote?: SortOrder
    isReply?: SortOrder
    hasMedia?: SortOrder
    fetchedAt?: SortOrder
    updatedAt?: SortOrder
    parentTweetId?: SortOrder
    tweetCreatedAt?: SortOrder
    twitterId?: SortOrder
  }

  export type TweetMinOrderByAggregateInput = {
    tweetId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
    isRetweet?: SortOrder
    isQuote?: SortOrder
    isReply?: SortOrder
    hasMedia?: SortOrder
    fetchedAt?: SortOrder
    updatedAt?: SortOrder
    parentTweetId?: SortOrder
    tweetCreatedAt?: SortOrder
    twitterId?: SortOrder
  }

  export type TweetSumOrderByAggregateInput = {
    retweetCount?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    quoteCount?: SortOrder
    viewCount?: SortOrder
    bookmarkCount?: SortOrder
  }

  export type CampaignTweetTweetIdCampaignIdCompoundUniqueInput = {
    tweetId: string
    campaignId: number
  }

  export type CampaignTweetCountOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignTweetAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type CampaignTweetMaxOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignTweetMinOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignTweetSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumDistributionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributionStatus | EnumDistributionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributionStatusFilter<$PrismaModel> | $Enums.DistributionStatus
  }

  export type EnumBlockchainFilter<$PrismaModel = never> = {
    equals?: $Enums.Blockchain | EnumBlockchainFieldRefInput<$PrismaModel>
    in?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockchainFilter<$PrismaModel> | $Enums.Blockchain
  }

  export type NFTDistributionUserIdTweetIdCompoundUniqueInput = {
    userId: number
    tweetId: number
  }

  export type NFTDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    nftTokenId?: SortOrder
    transactionHash?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    blockchain?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NFTDistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    amount?: SortOrder
  }

  export type NFTDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    nftTokenId?: SortOrder
    transactionHash?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    blockchain?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NFTDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    nftTokenId?: SortOrder
    transactionHash?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    blockchain?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NFTDistributionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    amount?: SortOrder
  }

  export type EnumDistributionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributionStatus | EnumDistributionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DistributionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistributionStatusFilter<$PrismaModel>
    _max?: NestedEnumDistributionStatusFilter<$PrismaModel>
  }

  export type EnumBlockchainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Blockchain | EnumBlockchainFieldRefInput<$PrismaModel>
    in?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockchainWithAggregatesFilter<$PrismaModel> | $Enums.Blockchain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockchainFilter<$PrismaModel>
    _max?: NestedEnumBlockchainFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCrawlerTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskType | EnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel> | $Enums.CrawlerTaskType
  }

  export type EnumCrawlerTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskStatus | EnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel> | $Enums.CrawlerTaskStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CrawlerTaskCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    result?: SortOrder
    sourceId?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlerTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type CrawlerTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sourceId?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlerTaskMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sourceId?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlerTaskSumOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type EnumCrawlerTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskType | EnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.CrawlerTaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel>
  }

  export type EnumCrawlerTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskStatus | EnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.CrawlerTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isPrimary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tokenAddress?: SortOrder
    tokenName?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    tags?: SortOrder
    socialLinks?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticker?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tokenAddress?: SortOrder
    tokenName?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticker?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tokenAddress?: SortOrder
    tokenName?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticker?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    remainingAmount?: SortOrder
    marketCap?: SortOrder
    creatorId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type EnumTokenPoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPoolType | EnumTokenPoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPoolTypeFilter<$PrismaModel> | $Enums.TokenPoolType
  }

  export type TokenPoolCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    txHash?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type TokenPoolAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
  }

  export type TokenPoolMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    txHash?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type TokenPoolMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    txHash?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type TokenPoolSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    amount?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumTokenPoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPoolType | EnumTokenPoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenPoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenPoolTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenPoolTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ParticipationUserIdCampaignIdCompoundUniqueInput = {
    userId: number
    campaignId: number
  }

  export type ParticipationTwitterIdCampaignIdCompoundUniqueInput = {
    twitterId: string
    campaignId: number
  }

  export type ParticipationCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influenceScore?: SortOrder
    twitterId?: SortOrder
  }

  export type ParticipationAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    influenceScore?: SortOrder
  }

  export type ParticipationMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influenceScore?: SortOrder
    twitterId?: SortOrder
  }

  export type ParticipationMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influenceScore?: SortOrder
    twitterId?: SortOrder
  }

  export type ParticipationSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    influenceScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ClaimRecordCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    claimed?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type ClaimRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    claimed?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimRecordMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    claimed?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimRecordSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type WhitelistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twitterId?: SortOrder
    referralCode?: SortOrder
    status?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    followedAt?: SortOrder
    postLink?: SortOrder
    postedAt?: SortOrder
    referredAt?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhitelistAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WhitelistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twitterId?: SortOrder
    referralCode?: SortOrder
    status?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    followedAt?: SortOrder
    postLink?: SortOrder
    postedAt?: SortOrder
    referredAt?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhitelistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    twitterId?: SortOrder
    referralCode?: SortOrder
    status?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    followedAt?: SortOrder
    postLink?: SortOrder
    postedAt?: SortOrder
    referredAt?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhitelistSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReferralReferrerIdRefereeIdCompoundUniqueInput = {
    referrerId: number
    refereeId: number
  }

  export type ReferralReferrerTwitterIdRefereeTwitterIdCompoundUniqueInput = {
    referrerTwitterId: string
    refereeTwitterId: string
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referrerTwitterId?: SortOrder
    refereeId?: SortOrder
    refereeTwitterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    refereeId?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referrerTwitterId?: SortOrder
    refereeId?: SortOrder
    refereeTwitterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referrerTwitterId?: SortOrder
    refereeId?: SortOrder
    refereeTwitterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    refereeId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TokenInformationCountOrderByAggregateInput = {
    id?: SortOrder
    mint?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    uri?: SortOrder
    platform?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    isComplete?: SortOrder
    lastTransactionType?: SortOrder
    blockTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    blockTime?: SortOrder
  }

  export type TokenInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    mint?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    uri?: SortOrder
    platform?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    isComplete?: SortOrder
    lastTransactionType?: SortOrder
    blockTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenInformationMinOrderByAggregateInput = {
    id?: SortOrder
    mint?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    uri?: SortOrder
    platform?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    isComplete?: SortOrder
    lastTransactionType?: SortOrder
    blockTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenInformationSumOrderByAggregateInput = {
    id?: SortOrder
    marketValue?: SortOrder
    virtualSolReserves?: SortOrder
    virtualTokenReserves?: SortOrder
    realSolReserves?: SortOrder
    realTokenReserves?: SortOrder
    blockTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TweetCreatetickerSymbolsInput = {
    set: string[]
  }

  export type TweetUpdatetickerSymbolsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDistributionStatusFieldUpdateOperationsInput = {
    set?: $Enums.DistributionStatus
  }

  export type EnumBlockchainFieldUpdateOperationsInput = {
    set?: $Enums.Blockchain
  }

  export type EnumCrawlerTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.CrawlerTaskType
  }

  export type EnumCrawlerTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.CrawlerTaskStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CampaignCreatetagsInput = {
    set: string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CampaignUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type EnumTokenPoolTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenPoolType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDistributionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributionStatus | EnumDistributionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributionStatusFilter<$PrismaModel> | $Enums.DistributionStatus
  }

  export type NestedEnumBlockchainFilter<$PrismaModel = never> = {
    equals?: $Enums.Blockchain | EnumBlockchainFieldRefInput<$PrismaModel>
    in?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockchainFilter<$PrismaModel> | $Enums.Blockchain
  }

  export type NestedEnumDistributionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributionStatus | EnumDistributionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributionStatus[] | ListEnumDistributionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DistributionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistributionStatusFilter<$PrismaModel>
    _max?: NestedEnumDistributionStatusFilter<$PrismaModel>
  }

  export type NestedEnumBlockchainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Blockchain | EnumBlockchainFieldRefInput<$PrismaModel>
    in?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Blockchain[] | ListEnumBlockchainFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockchainWithAggregatesFilter<$PrismaModel> | $Enums.Blockchain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockchainFilter<$PrismaModel>
    _max?: NestedEnumBlockchainFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCrawlerTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskType | EnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel> | $Enums.CrawlerTaskType
  }

  export type NestedEnumCrawlerTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskStatus | EnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel> | $Enums.CrawlerTaskStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCrawlerTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskType | EnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskType[] | ListEnumCrawlerTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.CrawlerTaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumCrawlerTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumCrawlerTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrawlerTaskStatus | EnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrawlerTaskStatus[] | ListEnumCrawlerTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCrawlerTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.CrawlerTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumCrawlerTaskStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumTokenPoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPoolType | EnumTokenPoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPoolTypeFilter<$PrismaModel> | $Enums.TokenPoolType
  }

  export type NestedEnumTokenPoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenPoolType | EnumTokenPoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenPoolType[] | ListEnumTokenPoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenPoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenPoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenPoolTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenPoolTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetDefaultArgs instead
     */
    export type TweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignTweetDefaultArgs instead
     */
    export type CampaignTweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignTweetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NFTDistributionDefaultArgs instead
     */
    export type NFTDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NFTDistributionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemConfigDefaultArgs instead
     */
    export type SystemConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CrawlerTaskDefaultArgs instead
     */
    export type CrawlerTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CrawlerTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletDefaultArgs instead
     */
    export type WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenPoolDefaultArgs instead
     */
    export type TokenPoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenPoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipationDefaultArgs instead
     */
    export type ParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimRecordDefaultArgs instead
     */
    export type ClaimRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhitelistDefaultArgs instead
     */
    export type WhitelistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhitelistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferralDefaultArgs instead
     */
    export type ReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReferralDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenInformationDefaultArgs instead
     */
    export type TokenInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenInformationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}