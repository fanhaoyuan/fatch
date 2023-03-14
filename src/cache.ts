import defineMiddleware from './defineMiddleware';

export default defineMiddleware({
    name: 'fatcher-middleware-cache',
    use(context, next) {
        return next();
    },
});

// import { canActivate } from '../core';
// import { defineMiddleware } from '../helpers';
// import { Context, Middleware, MiddlewareResult } from '../interfaces';

// export interface CacheOptions {
//     /**
//      * Validate a request whether needs cache
//      *
//      * @default
//      * (context: Context) => context.method === 'GET'
//      */
//     validate?: (context: Context) => boolean;
//     /**
//      * Time to live (ms).
//      *
//      * If `0`, permanent cache
//      * @default 60000
//      */
//     ttl?: number;

//     /**
//      * @default true
//      */
//     useCache?: boolean;
// }

// const cacheMap = new Map<string, MiddlewareResult>();

// const timer: Record<string, NodeJS.Timer> = {};

// function getClonedData(data: unknown) {
//     return canActivate(data) ? data.clone() : data;
// }

// /**
//  * A middleware for cache response result
//  * @param options
//  */
// export function cache(options: CacheOptions): Middleware {
//     const { validate = (context: Context) => context.method === 'GET', ttl = 60000, useCache = true } = options;

//     return defineMiddleware(async (context, next) => {
//         if (!useCache) {
//             return next();
//         }

//         const cacheKey = `${context.method} ${context.url}`;

//         if (cacheMap.has(cacheKey)) {
//             const result = cacheMap.get(cacheKey) as MiddlewareResult;

//             return {
//                 ...result,
//                 data: getClonedData(result.data),
//             };
//         }

//         const result = await next();

//         if (!validate(context) || ttl <= 0) {
//             return result;
//         }

//         // clone and save;
//         const clonedData = getClonedData(result.data);

//         cacheMap.set(cacheKey, {
//             ...result,
//             data: clonedData,
//         });

//         timer[cacheKey] = setTimeout(() => {
//             cacheMap.delete(cacheKey);
//             delete timer[cacheKey];
//         }, ttl);

//         return result;
//     }, 'fatcher-middleware-cache');
// }
