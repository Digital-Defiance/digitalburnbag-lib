import {
  ICanaryProviderConfig,
  ProviderCategory,
} from '../interfaces/canary-provider';

/**
 * Built-in provider configurations.
 * These can be used as-is or as templates for custom providers.
 */

/**
 * GitHub provider configuration.
 * Monitors commits, issues, PRs, and other GitHub activity.
 */
export const GITHUB_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'github',
  name: 'GitHub',
  description:
    'Monitor GitHub activity including commits, issues, pull requests, and comments',
  category: ProviderCategory.DEVELOPER,
  icon: 'github',
  baseUrl: 'https://api.github.com',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://github.com/login/oauth/authorize',
      tokenUrl: 'https://github.com/login/oauth/access_token',
      clientId: '', // Set via environment
      clientSecret: '', // Set via environment
      scopes: ['read:user', 'repo'],
      redirectUri: '', // Set via environment
    },
  },
  rateLimit: {
    maxRequests: 5000,
    windowMs: 60 * 60 * 1000, // 1 hour
    minDelayMs: 100,
  },
  endpoints: {
    activity: {
      path: '/users/{userId}/events',
      method: 'GET',
      queryParams: {
        per_page: '100',
      },
      responseMapping: {
        eventsPath: '$',
        timestampPath: 'created_at',
        timestampFormat: 'iso8601',
        activityTypePath: 'type',
        eventIdPath: 'id',
      },
    },
    healthCheck: {
      path: '/user',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/user',
      method: 'GET',
      userIdPath: 'login',
      usernamePath: 'name',
    },
  },
  defaultLookbackMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  minCheckIntervalMs: 15 * 60 * 1000, // 15 minutes
  supportsWebhooks: true,
  enabledByDefault: true,
  customHeaders: {
    Accept: 'application/vnd.github.v3+json',
  },
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Fitbit provider configuration.
 * Monitors steps, heart rate, sleep, and other fitness data.
 */
export const FITBIT_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'fitbit',
  name: 'Fitbit',
  description:
    'Monitor Fitbit activity including steps, heart rate, and sleep data',
  category: ProviderCategory.HEALTH_FITNESS,
  icon: 'fitbit',
  baseUrl: 'https://api.fitbit.com',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://www.fitbit.com/oauth2/authorize',
      tokenUrl: 'https://api.fitbit.com/oauth2/token',
      clientId: '',
      clientSecret: '',
      scopes: ['activity', 'heartrate', 'sleep', 'profile'],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 150,
    windowMs: 60 * 60 * 1000, // 1 hour
    minDelayMs: 500,
  },
  endpoints: {
    activity: {
      path: '/1/user/-/activities/date/{date}.json',
      method: 'GET',
      responseMapping: {
        eventsPath: '$.activities',
        timestampPath: 'startTime',
        timestampFormat: 'iso8601',
        activityTypePath: 'activityName',
        numericValuePath: 'steps',
        eventIdPath: 'logId',
      },
    },
    healthCheck: {
      path: '/1/user/-/profile.json',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/1/user/-/profile.json',
      method: 'GET',
      userIdPath: 'user.encodedId',
      usernamePath: 'user.displayName',
    },
  },
  defaultLookbackMs: 24 * 60 * 60 * 1000, // 1 day
  minCheckIntervalMs: 60 * 60 * 1000, // 1 hour (Fitbit syncs infrequently)
  supportsWebhooks: true,
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 2000,
    backoffMultiplier: 2,
  },
};

/**
 * Strava provider configuration.
 * Monitors running, cycling, and other athletic activities.
 */
export const STRAVA_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'strava',
  name: 'Strava',
  description: 'Monitor Strava activities including runs, rides, and workouts',
  category: ProviderCategory.HEALTH_FITNESS,
  icon: 'strava',
  baseUrl: 'https://www.strava.com/api/v3',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://www.strava.com/oauth/authorize',
      tokenUrl: 'https://www.strava.com/oauth/token',
      clientId: '',
      clientSecret: '',
      scopes: ['read', 'activity:read'],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 100,
    windowMs: 15 * 60 * 1000, // 15 minutes
    minDelayMs: 1000,
  },
  endpoints: {
    activity: {
      path: '/athlete/activities',
      method: 'GET',
      queryParams: {
        per_page: '30',
        after: '{sinceUnix}',
      },
      responseMapping: {
        eventsPath: '$',
        timestampPath: 'start_date',
        timestampFormat: 'iso8601',
        activityTypePath: 'type',
        eventIdPath: 'id',
        numericValuePath: 'distance',
        locationPaths: {
          latitude: 'start_latlng[0]',
          longitude: 'start_latlng[1]',
        },
      },
    },
    healthCheck: {
      path: '/athlete',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/athlete',
      method: 'GET',
      userIdPath: 'id',
      usernamePath: 'username',
    },
  },
  defaultLookbackMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  minCheckIntervalMs: 30 * 60 * 1000, // 30 minutes
  supportsWebhooks: true,
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Twitter/X provider configuration.
 * Monitors tweets, likes, and other Twitter activity.
 */
export const TWITTER_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'twitter',
  name: 'Twitter/X',
  description: 'Monitor Twitter activity including tweets, retweets, and likes',
  category: ProviderCategory.SOCIAL_MEDIA,
  icon: 'twitter',
  baseUrl: 'https://api.twitter.com/2',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://twitter.com/i/oauth2/authorize',
      tokenUrl: 'https://api.twitter.com/2/oauth2/token',
      clientId: '',
      clientSecret: '',
      scopes: ['tweet.read', 'users.read', 'offline.access'],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 300,
    windowMs: 15 * 60 * 1000, // 15 minutes
    minDelayMs: 200,
  },
  endpoints: {
    activity: {
      path: '/users/{userId}/tweets',
      method: 'GET',
      queryParams: {
        max_results: '100',
        'tweet.fields': 'created_at,text',
        start_time: '{sinceISO}',
      },
      responseMapping: {
        eventsPath: '$.data',
        timestampPath: 'created_at',
        timestampFormat: 'iso8601',
        defaultActivityType: 'tweet',
        eventIdPath: 'id',
      },
    },
    healthCheck: {
      path: '/users/me',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/users/me',
      method: 'GET',
      userIdPath: 'data.id',
      usernamePath: 'data.username',
    },
  },
  defaultLookbackMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  minCheckIntervalMs: 15 * 60 * 1000, // 15 minutes
  supportsWebhooks: false, // Twitter webhooks require enterprise
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Google provider configuration.
 * Monitors Google account activity (last login, etc.)
 */
export const GOOGLE_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'google',
  name: 'Google',
  description: 'Monitor Google account activity and last sign-in',
  category: ProviderCategory.PRODUCTIVITY,
  icon: 'google',
  baseUrl: 'https://www.googleapis.com',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: 'https://oauth2.googleapis.com/token',
      clientId: '',
      clientSecret: '',
      scopes: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/gmail.readonly',
      ],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 1000,
    windowMs: 60 * 1000, // 1 minute
    minDelayMs: 100,
  },
  endpoints: {
    activity: {
      path: '/gmail/v1/users/me/messages',
      method: 'GET',
      queryParams: {
        maxResults: '10',
        q: 'newer_than:7d',
      },
      responseMapping: {
        eventsPath: '$.messages',
        timestampPath: 'internalDate',
        timestampFormat: 'unix_ms',
        defaultActivityType: 'email',
        eventIdPath: 'id',
      },
    },
    healthCheck: {
      path: '/oauth2/v1/userinfo',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/oauth2/v1/userinfo',
      method: 'GET',
      userIdPath: 'id',
      usernamePath: 'email',
    },
  },
  defaultLookbackMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  minCheckIntervalMs: 60 * 60 * 1000, // 1 hour
  supportsWebhooks: true,
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Slack provider configuration.
 * Monitors Slack presence and message activity.
 */
export const SLACK_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'slack',
  name: 'Slack',
  description: 'Monitor Slack presence status and message activity',
  category: ProviderCategory.COMMUNICATION,
  icon: 'slack',
  baseUrl: 'https://slack.com/api',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://slack.com/oauth/v2/authorize',
      tokenUrl: 'https://slack.com/api/oauth.v2.access',
      clientId: '',
      clientSecret: '',
      scopes: ['users:read', 'users.profile:read'],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 50,
    windowMs: 60 * 1000, // 1 minute
    minDelayMs: 1000,
  },
  endpoints: {
    activity: {
      path: '/users.getPresence',
      method: 'GET',
      queryParams: {
        user: '{userId}',
      },
      responseMapping: {
        eventsPath: '$',
        timestampPath: 'last_activity',
        timestampFormat: 'unix',
        defaultActivityType: 'presence',
        eventIdPath: 'presence',
      },
    },
    healthCheck: {
      path: '/auth.test',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/users.identity',
      method: 'GET',
      userIdPath: 'user.id',
      usernamePath: 'user.name',
    },
  },
  defaultLookbackMs: 24 * 60 * 60 * 1000, // 1 day
  minCheckIntervalMs: 5 * 60 * 1000, // 5 minutes
  supportsWebhooks: true,
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Discord provider configuration.
 * Monitors Discord presence and activity.
 */
export const DISCORD_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'discord',
  name: 'Discord',
  description: 'Monitor Discord presence and activity status',
  category: ProviderCategory.COMMUNICATION,
  icon: 'discord',
  baseUrl: 'https://discord.com/api/v10',
  auth: {
    type: 'oauth2',
    oauth2: {
      authorizationUrl: 'https://discord.com/api/oauth2/authorize',
      tokenUrl: 'https://discord.com/api/oauth2/token',
      clientId: '',
      clientSecret: '',
      scopes: ['identify', 'guilds'],
      redirectUri: '',
    },
  },
  rateLimit: {
    maxRequests: 50,
    windowMs: 1000, // 1 second
    minDelayMs: 50,
  },
  endpoints: {
    activity: {
      path: '/users/@me',
      method: 'GET',
      responseMapping: {
        eventsPath: '$',
        timestampPath: 'premium_since', // Limited activity data available
        timestampFormat: 'iso8601',
        defaultActivityType: 'presence',
        eventIdPath: 'id',
      },
    },
    healthCheck: {
      path: '/users/@me',
      method: 'GET',
      expectedStatus: 200,
    },
    userProfile: {
      path: '/users/@me',
      method: 'GET',
      userIdPath: 'id',
      usernamePath: 'username',
    },
  },
  defaultLookbackMs: 24 * 60 * 60 * 1000, // 1 day
  minCheckIntervalMs: 5 * 60 * 1000, // 5 minutes
  supportsWebhooks: true,
  enabledByDefault: true,
  retry: {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2,
  },
};

/**
 * Custom webhook provider template.
 * Users can clone and customize this for their own services.
 */
export const CUSTOM_WEBHOOK_TEMPLATE: ICanaryProviderConfig<string> = {
  id: 'custom-webhook-template',
  name: 'Custom Webhook',
  description: 'Template for creating custom webhook-based providers',
  category: ProviderCategory.CUSTOM_WEBHOOK,
  icon: 'webhook',
  baseUrl: 'https://your-service.example.com',
  auth: {
    type: 'webhook',
    webhook: {
      webhookSecret: '', // Set by user
      signatureAlgorithm: 'sha256',
      signatureHeader: 'X-Signature-256',
    },
  },
  endpoints: {
    activity: {
      path: '/api/heartbeat',
      method: 'POST',
      bodyTemplate: JSON.stringify({
        userId: '{userId}',
        since: '{sinceISO}',
      }),
      responseMapping: {
        eventsPath: '$.events',
        timestampPath: 'timestamp',
        timestampFormat: 'iso8601',
        activityTypePath: 'type',
        eventIdPath: 'id',
      },
    },
  },
  defaultLookbackMs: 24 * 60 * 60 * 1000, // 1 day
  minCheckIntervalMs: 5 * 60 * 1000, // 5 minutes
  supportsWebhooks: true,
  enabledByDefault: false,
};

/**
 * BrightChain/DigitalBurnbag native provider.
 * Monitors activity on our own platform.
 */
export const BIRDBAG_PROVIDER_CONFIG: ICanaryProviderConfig<string> = {
  id: 'birdbag',
  name: 'BrightChain / DigitalBurnbag',
  description: 'Monitor activity on BrightChain and DigitalBurnbag platforms',
  category: ProviderCategory.PLATFORM_NATIVE,
  icon: 'brightchain',
  baseUrl: '', // Internal - no external API needed
  auth: {
    type: 'custom',
    customHeaderTemplate: 'Internal-Auth {sessionToken}',
  },
  endpoints: {
    activity: {
      path: '/internal/user-activity',
      method: 'GET',
      queryParams: {
        since: '{sinceISO}',
      },
      responseMapping: {
        eventsPath: '$.activities',
        timestampPath: 'timestamp',
        timestampFormat: 'iso8601',
        activityTypePath: 'type',
        eventIdPath: 'id',
      },
    },
  },
  defaultLookbackMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  minCheckIntervalMs: 60 * 1000, // 1 minute (internal, no rate limits)
  supportsWebhooks: true,
  enabledByDefault: true,
};

/**
 * All built-in provider configurations.
 */
export const BUILTIN_PROVIDER_CONFIGS: ICanaryProviderConfig<string>[] = [
  GITHUB_PROVIDER_CONFIG,
  FITBIT_PROVIDER_CONFIG,
  STRAVA_PROVIDER_CONFIG,
  TWITTER_PROVIDER_CONFIG,
  GOOGLE_PROVIDER_CONFIG,
  SLACK_PROVIDER_CONFIG,
  DISCORD_PROVIDER_CONFIG,
  BIRDBAG_PROVIDER_CONFIG,
];

/**
 * Get a built-in provider config by ID.
 */
export function getBuiltinProviderConfig(
  id: string,
): ICanaryProviderConfig<string> | undefined {
  return BUILTIN_PROVIDER_CONFIGS.find((config) => config.id === id);
}
