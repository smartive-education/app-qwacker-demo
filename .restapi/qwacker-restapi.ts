/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** Type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export interface paths {
  "/posts": {
    /** @description Fetch a paginated list of posts, ordered by the time of their creation. May contain deleted posts. */
    get: operations["PostsController_list"];
    /** @description Create a new post with the logged in user. A post can contain an optional image and must contain text. */
    post: operations["PostsController_create"];
  };
  "/posts/{id}": {
    /** @description Get a specific post. */
    get: operations["PostsController_single"];
    /** @description Create a reply to a post with the logged in user. A reply can contain an optional image and must contain text. */
    post: operations["PostsController_reply"];
    /** @description Deletes a post or reply if it exists and if the logged in user is the author. */
    delete: operations["PostsController_delete"];
  };
  "/posts/{id}/replies": {
    /** @description Get an ordered list of replies for the given post. */
    get: operations["PostsController_replies"];
  };
  "/posts/search": {
    /** @description Search for posts or replies in the database. The result is always paginated and ordered by the time of their creation. */
    post: operations["PostsController_search"];
  };
  "/posts/{id}/likes": {
    /** @description Create a like on a specific post. */
    put: operations["LikesController_like"];
    /** @description Delete a like on a specific post. */
    delete: operations["LikesController_unlike"];
  };
  "/users": {
    /** @description Fetch a paginated list of users, ordered by their username. */
    get: operations["UsersController_list"];
  };
  "/users/me": {
    /** @description Fetch your own authenticated profile. */
    get: operations["UsersController_me"];
  };
  "/users/{id}": {
    /** @description Fetch a user by id. */
    get: operations["UsersController_getById"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  PostsController_list: {
    /** @description Fetch a paginated list of posts, ordered by the time of their creation. May contain deleted posts. */
    parameters?: {
        /** @description The offset for pagination of further calls. Defaults to 0 if omitted. */
        /** @description The amount of posts that is returned in one call. Minimum is 1, maximum is 1000. Defaults to 100. */
        /** @description The ID of a post, to only return posts that are newer than the given post. If omitted, all posts are returned. */
      query?: {
        offset?: number;
        limit?: number;
        newerThan?: string;
      };
    };
    responses: {
      /** @description The paginated list of posts. */
      200: {
        content: {
          "application/json": {
            data?: (OneOf<[{
                /**
                 * Format: ulid 
                 * @description ID of the post, defined in the ULID format. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                id?: string;
                /**
                 * @description ID of the user who created the post. 
                 * @example 179944860378202369
                 */
                creator?: string;
                /**
                 * @description Text in the post. 
                 * @example Hello World! @user #newpost
                 */
                text?: string;
                /**
                 * @description URL - if any - to the media object attached to this post. 
                 * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
                 */
                mediaUrl?: string | null;
                /**
                 * @description If mediaUrl is set, this field contains the mime type of the media object. 
                 * @example image/png
                 */
                mediaType?: string | null;
                /**
                 * @description Number of total likes on this post. 
                 * @example 42
                 */
                likeCount?: number;
                /**
                 * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
                 * @example true
                 */
                likedByUser?: boolean;
                /**
                 * @description Indicates, that this result is a post. 
                 * @example post
                 */
                type?: Record<string, never>;
                /**
                 * @description Number of total replies to this post. 
                 * @example 42
                 */
                replyCount?: number;
              }, {
                /**
                 * Format: ulid 
                 * @description ID of the post, defined in the ULID format. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                id?: string;
                /**
                 * @description ID of the user who created the post. 
                 * @example 179944860378202369
                 */
                creator?: string;
                /**
                 * @description Text in the post. 
                 * @example Hello World! @user #newpost
                 */
                text?: string;
                /**
                 * @description URL - if any - to the media object attached to this post. 
                 * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
                 */
                mediaUrl?: string | null;
                /**
                 * @description If mediaUrl is set, this field contains the mime type of the media object. 
                 * @example image/png
                 */
                mediaType?: string | null;
                /**
                 * @description Number of total likes on this post. 
                 * @example 42
                 */
                likeCount?: number;
                /**
                 * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
                 * @example true
                 */
                likedByUser?: boolean;
                /**
                 * @description Indicates, that this result is a reply to a post. 
                 * @example reply
                 */
                type?: Record<string, never>;
                /**
                 * Format: ulid 
                 * @description Reference ID to the parent post. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                parentId?: string;
              }, {
                /**
                 * @description Indicates, that this result is a deleted post. 
                 * @example deleted
                 */
                type?: Record<string, never>;
                /**
                 * Format: ulid 
                 * @description ID of the post, defined in the ULID format. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                id?: string;
                /**
                 * @description ID of the user who created the post. 
                 * @example 179944860378202369
                 */
                creator?: string;
                /**
                 * @description ID of the parent. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                parentId?: string | null;
              }]>)[];
            /**
             * @description The total count of posts in the system. 
             * @example 1000
             */
            count?: number;
            /**
             * @description If filled, hints the next api call to make to fetch the next page. 
             * @example /posts?offset=100&limit=100
             */
            next?: string | null;
            /**
             * @description If filled, hints the next api call to make to fetch the previous page. 
             * @example /posts?offset=0&limit=100
             */
            previous?: string | null;
          };
        };
      };
    };
  };
  PostsController_create: {
    /** @description Create a new post with the logged in user. A post can contain an optional image and must contain text. */
    /** @description The data for the post to create. */
    requestBody: {
      content: {
        "multipart/form-data": {
          /**
           * @description The text of the post. 
           * @example Hello World!
           */
          text?: string;
          /** @description The image of the post. */
          image?: Record<string, unknown> | null;
        };
      };
    };
    responses: {
      /** @description The post was created. */
      201: {
        content: {
          "application/json": {
            /**
             * Format: ulid 
             * @description ID of the post, defined in the ULID format. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            id?: string;
            /**
             * @description ID of the user who created the post. 
             * @example 179944860378202369
             */
            creator?: string;
            /**
             * @description Text in the post. 
             * @example Hello World! @user #newpost
             */
            text?: string;
            /**
             * @description URL - if any - to the media object attached to this post. 
             * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
             */
            mediaUrl?: string | null;
            /**
             * @description If mediaUrl is set, this field contains the mime type of the media object. 
             * @example image/png
             */
            mediaType?: string | null;
            /**
             * @description Number of total likes on this post. 
             * @example 42
             */
            likeCount?: number;
            /**
             * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
             * @example true
             */
            likedByUser?: boolean;
            /**
             * @description Indicates, that this result is a post. 
             * @example post
             */
            type?: Record<string, never>;
            /**
             * @description Number of total replies to this post. 
             * @example 42
             */
            replyCount?: number;
          };
        };
      };
      /** @description The uploaded file is not an image or bigger than 5MB. */
      400: never;
      /** @description User is unauthorized. */
      401: never;
      /** @description No authenticated user is found. */
      403: never;
    };
  };
  PostsController_single: {
    /** @description Get a specific post. */
    parameters: {
        /**
         * @description The ID (ulid) of the post to get. 
         * @example 01GEESHPQQ4NJKNZJN9AKWQW6G
         */
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The requested post. This may be a post, a reply, or a deleted post. */
      200: {
        content: {
          "application/json": OneOf<[{
            /**
             * Format: ulid 
             * @description ID of the post, defined in the ULID format. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            id?: string;
            /**
             * @description ID of the user who created the post. 
             * @example 179944860378202369
             */
            creator?: string;
            /**
             * @description Text in the post. 
             * @example Hello World! @user #newpost
             */
            text?: string;
            /**
             * @description URL - if any - to the media object attached to this post. 
             * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
             */
            mediaUrl?: string | null;
            /**
             * @description If mediaUrl is set, this field contains the mime type of the media object. 
             * @example image/png
             */
            mediaType?: string | null;
            /**
             * @description Number of total likes on this post. 
             * @example 42
             */
            likeCount?: number;
            /**
             * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
             * @example true
             */
            likedByUser?: boolean;
            /**
             * @description Indicates, that this result is a post. 
             * @example post
             */
            type?: Record<string, never>;
            /**
             * @description Number of total replies to this post. 
             * @example 42
             */
            replyCount?: number;
          }, {
            /**
             * Format: ulid 
             * @description ID of the post, defined in the ULID format. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            id?: string;
            /**
             * @description ID of the user who created the post. 
             * @example 179944860378202369
             */
            creator?: string;
            /**
             * @description Text in the post. 
             * @example Hello World! @user #newpost
             */
            text?: string;
            /**
             * @description URL - if any - to the media object attached to this post. 
             * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
             */
            mediaUrl?: string | null;
            /**
             * @description If mediaUrl is set, this field contains the mime type of the media object. 
             * @example image/png
             */
            mediaType?: string | null;
            /**
             * @description Number of total likes on this post. 
             * @example 42
             */
            likeCount?: number;
            /**
             * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
             * @example true
             */
            likedByUser?: boolean;
            /**
             * @description Indicates, that this result is a reply to a post. 
             * @example reply
             */
            type?: Record<string, never>;
            /**
             * Format: ulid 
             * @description Reference ID to the parent post. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            parentId?: string;
          }, {
            /**
             * @description Indicates, that this result is a deleted post. 
             * @example deleted
             */
            type?: Record<string, never>;
            /**
             * Format: ulid 
             * @description ID of the post, defined in the ULID format. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            id?: string;
            /**
             * @description ID of the user who created the post. 
             * @example 179944860378202369
             */
            creator?: string;
            /**
             * @description ID of the parent. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            parentId?: string | null;
          }]>;
        };
      };
    };
  };
  PostsController_reply: {
    /** @description Create a reply to a post with the logged in user. A reply can contain an optional image and must contain text. */
    parameters: {
        /**
         * @description The ID (ulid) of the post to reply to. 
         * @example 01F1ZQZQXZJZJXZQZQZQZQZQZQ
         */
      path: {
        id: string;
      };
    };
    /** @description The data for the reply to create. */
    requestBody: {
      content: {
        "multipart/form-data": {
          /**
           * @description The text of the reply. 
           * @example Hello World!
           */
          text?: string;
          /** @description The image of the reply. */
          image?: Record<string, unknown> | null;
        };
      };
    };
    responses: {
      /** @description The reply was created. */
      201: {
        content: {
          "application/json": {
            /**
             * Format: ulid 
             * @description ID of the post, defined in the ULID format. 
             * @example 01GDMMR85BEHP8AKV8ZGGM259K
             */
            id?: string;
            /**
             * @description ID of the user who created the post. 
             * @example 179944860378202369
             */
            creator?: string;
            /**
             * @description Text in the post. 
             * @example Hello World! @user #newpost
             */
            text?: string;
            /**
             * @description URL - if any - to the media object attached to this post. 
             * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
             */
            mediaUrl?: string | null;
            /**
             * @description If mediaUrl is set, this field contains the mime type of the media object. 
             * @example image/png
             */
            mediaType?: string | null;
            /**
             * @description Number of total likes on this post. 
             * @example 42
             */
            likeCount?: number;
            /**
             * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
             * @example true
             */
            likedByUser?: boolean;
            /**
             * @description Indicates, that this result is a post. 
             * @example post
             */
            type?: Record<string, never>;
            /**
             * @description Number of total replies to this post. 
             * @example 42
             */
            replyCount?: number;
          };
        };
      };
      /** @description The uploaded file is not an image or bigger than 5MB. */
      400: never;
      /** @description User is unauthorized. */
      401: never;
      /** @description No authenticated user is found. */
      403: never;
      /** @description No post with the given ID was found. */
      404: never;
    };
  };
  PostsController_delete: {
    /** @description Deletes a post or reply if it exists and if the logged in user is the author. */
    parameters: {
        /** @description The ID (ulid) of the post that shall be deleted. */
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The post was deleted if it existed. */
      204: never;
      /** @description User is unauthorized. */
      401: never;
      /** @description No authenticated user is found. */
      403: never;
    };
  };
  PostsController_replies: {
    /** @description Get an ordered list of replies for the given post. */
    parameters: {
        /**
         * @description The ID (ulid) of the post to get the replies from. 
         * @example 01GEESHPQQ4NJKNZJN9AKWQW6G
         */
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The list of replies for a given post. */
      200: {
        content: {
          "application/json": (OneOf<[{
              /**
               * Format: ulid 
               * @description ID of the post, defined in the ULID format. 
               * @example 01GDMMR85BEHP8AKV8ZGGM259K
               */
              id?: string;
              /**
               * @description ID of the user who created the post. 
               * @example 179944860378202369
               */
              creator?: string;
              /**
               * @description Text in the post. 
               * @example Hello World! @user #newpost
               */
              text?: string;
              /**
               * @description URL - if any - to the media object attached to this post. 
               * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
               */
              mediaUrl?: string | null;
              /**
               * @description If mediaUrl is set, this field contains the mime type of the media object. 
               * @example image/png
               */
              mediaType?: string | null;
              /**
               * @description Number of total likes on this post. 
               * @example 42
               */
              likeCount?: number;
              /**
               * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
               * @example true
               */
              likedByUser?: boolean;
              /**
               * @description Indicates, that this result is a reply to a post. 
               * @example reply
               */
              type?: Record<string, never>;
              /**
               * Format: ulid 
               * @description Reference ID to the parent post. 
               * @example 01GDMMR85BEHP8AKV8ZGGM259K
               */
              parentId?: string;
            }, {
              /**
               * @description Indicates, that this result is a deleted post. 
               * @example deleted
               */
              type?: Record<string, never>;
              /**
               * Format: ulid 
               * @description ID of the post, defined in the ULID format. 
               * @example 01GDMMR85BEHP8AKV8ZGGM259K
               */
              id?: string;
              /**
               * @description ID of the user who created the post. 
               * @example 179944860378202369
               */
              creator?: string;
              /**
               * @description ID of the parent. 
               * @example 01GDMMR85BEHP8AKV8ZGGM259K
               */
              parentId?: string | null;
            }]>)[];
        };
      };
    };
  };
  PostsController_search: {
    /** @description Search for posts or replies in the database. The result is always paginated and ordered by the time of their creation. */
    /** @description The search parameters. */
    requestBody: {
      content: {
        "application/json": {
          /**
           * @description Search for posts that contain this text. 
           * @example Hello World
           */
          text?: string | null;
          tags?: (string)[];
          mentions?: (string)[];
          /**
           * @description Search for posts that are replies to other posts. If omitted, all posts are searched. 
           * @example false
           */
          isReply?: boolean | null;
          /**
           * @description The offset for pagination of further calls. 
           * @default 0 
           * @example 0
           */
          offset?: number | null;
          /**
           * @description The amount of posts that is returned in one call. Minimum is 1, maximum is 1000. 
           * @default 100 
           * @example 500
           */
          limit?: number | null;
        };
      };
    };
    responses: {
      /** @description The paginated search result. */
      200: {
        content: {
          "application/json": {
            data?: (OneOf<[{
                /**
                 * Format: ulid 
                 * @description ID of the post, defined in the ULID format. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                id?: string;
                /**
                 * @description ID of the user who created the post. 
                 * @example 179944860378202369
                 */
                creator?: string;
                /**
                 * @description Text in the post. 
                 * @example Hello World! @user #newpost
                 */
                text?: string;
                /**
                 * @description URL - if any - to the media object attached to this post. 
                 * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
                 */
                mediaUrl?: string | null;
                /**
                 * @description If mediaUrl is set, this field contains the mime type of the media object. 
                 * @example image/png
                 */
                mediaType?: string | null;
                /**
                 * @description Number of total likes on this post. 
                 * @example 42
                 */
                likeCount?: number;
                /**
                 * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
                 * @example true
                 */
                likedByUser?: boolean;
                /**
                 * @description Indicates, that this result is a post. 
                 * @example post
                 */
                type?: Record<string, never>;
                /**
                 * @description Number of total replies to this post. 
                 * @example 42
                 */
                replyCount?: number;
              }, {
                /**
                 * Format: ulid 
                 * @description ID of the post, defined in the ULID format. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                id?: string;
                /**
                 * @description ID of the user who created the post. 
                 * @example 179944860378202369
                 */
                creator?: string;
                /**
                 * @description Text in the post. 
                 * @example Hello World! @user #newpost
                 */
                text?: string;
                /**
                 * @description URL - if any - to the media object attached to this post. 
                 * @example https://storage.googleapis.com/cas-fee-adv-qwacker-api-local-dev/1094b5e0-5f30-4f0b-a342-ae12936c42ff
                 */
                mediaUrl?: string | null;
                /**
                 * @description If mediaUrl is set, this field contains the mime type of the media object. 
                 * @example image/png
                 */
                mediaType?: string | null;
                /**
                 * @description Number of total likes on this post. 
                 * @example 42
                 */
                likeCount?: number;
                /**
                 * @description Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false. 
                 * @example true
                 */
                likedByUser?: boolean;
                /**
                 * @description Indicates, that this result is a reply to a post. 
                 * @example reply
                 */
                type?: Record<string, never>;
                /**
                 * Format: ulid 
                 * @description Reference ID to the parent post. 
                 * @example 01GDMMR85BEHP8AKV8ZGGM259K
                 */
                parentId?: string;
              }]>)[];
            /**
             * @description The total count of posts in the executed search. 
             * @example 1000
             */
            count?: number;
            /** @description If filled, hints the search parameters for the next page. */
            next?: ({
              /**
               * @description Search for posts that contain this text. 
               * @example Hello World
               */
              text?: string | null;
              tags?: (string)[];
              mentions?: (string)[];
              /**
               * @description Search for posts that are replies to other posts. If omitted, all posts are searched. 
               * @example false
               */
              isReply?: boolean | null;
              /**
               * @description The offset for pagination of further calls. 
               * @default 0 
               * @example 0
               */
              offset?: number | null;
              /**
               * @description The amount of posts that is returned in one call. Minimum is 1, maximum is 1000. 
               * @default 100 
               * @example 500
               */
              limit?: number | null;
            }) | null;
            /** @description If filled, hints the search parameters for the previous page. */
            previous?: ({
              /**
               * @description Search for posts that contain this text. 
               * @example Hello World
               */
              text?: string | null;
              tags?: (string)[];
              mentions?: (string)[];
              /**
               * @description Search for posts that are replies to other posts. If omitted, all posts are searched. 
               * @example false
               */
              isReply?: boolean | null;
              /**
               * @description The offset for pagination of further calls. 
               * @default 0 
               * @example 0
               */
              offset?: number | null;
              /**
               * @description The amount of posts that is returned in one call. Minimum is 1, maximum is 1000. 
               * @default 100 
               * @example 500
               */
              limit?: number | null;
            }) | null;
          };
        };
      };
    };
  };
  LikesController_like: {
    /** @description Create a like on a specific post. */
    parameters: {
        /** @description The ID (ulid) of the post to like. */
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The like was created. */
      204: never;
      /** @description User is unauthorized. */
      401: never;
      /** @description No authenticated user is found. */
      403: never;
    };
  };
  LikesController_unlike: {
    /** @description Delete a like on a specific post. */
    parameters: {
        /** @description The ID (ulid) of the post to unlike. */
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The like was deleted. This is also returned when no specific userId/postId like was found. */
      204: never;
      /** @description User is unauthorized. */
      401: never;
      /** @description No authenticated user is found. */
      403: never;
    };
  };
  UsersController_list: {
    /** @description Fetch a paginated list of users, ordered by their username. */
    parameters?: {
        /** @description The offset for pagination of further calls. Defaults to 0 if omitted. */
        /** @description The amount of users that is returned in one call. Minimum is 1, maximum is 1000. Defaults to 100. */
      query?: {
        offset?: number;
        limit?: number;
      };
    };
    responses: {
      /** @description The paginated list of users. */
      200: {
        content: {
          "application/json": {
            data?: ({
                /**
                 * @description The (long) ID of the user. 
                 * @example 179828644301046017
                 */
                id?: string;
                /**
                 * @description The username of the user. May be used to mention someone in the posts. 
                 * @example johnDoe
                 */
                userName?: string;
                /**
                 * @description The first name of the user. 
                 * @example John
                 */
                firstName?: string;
                /**
                 * @description The last name of the user. 
                 * @example Doe
                 */
                lastName?: string;
                /** @description URL to the avatar of the user. This field may be empty (empty string). */
                avatarUrl?: string;
              })[];
            /**
             * @description The total count of users in the system. 
             * @example 1000
             */
            count?: number;
            /**
             * @description If filled, hints the next api call to make to fetch the next page. 
             * @example /users?offset=100&limit=100
             */
            next?: string | null;
            /**
             * @description If filled, hints the next api call to make to fetch the previous page. 
             * @example /users?offset=0&limit=100
             */
            previous?: string | null;
          };
        };
      };
    };
  };
  UsersController_me: {
    /** @description Fetch your own authenticated profile. */
    responses: {
      /** @description Your own profile. */
      200: {
        content: {
          "application/json": {
            /**
             * @description The (long) ID of the user. 
             * @example 179828644301046017
             */
            id?: string;
            /**
             * @description The username of the user. May be used to mention someone in the posts. 
             * @example johnDoe
             */
            userName?: string;
            /**
             * @description The first name of the user. 
             * @example John
             */
            firstName?: string;
            /**
             * @description The last name of the user. 
             * @example Doe
             */
            lastName?: string;
            /** @description URL to the avatar of the user. This field may be empty (empty string). */
            avatarUrl?: string;
          };
        };
      };
    };
  };
  UsersController_getById: {
    /** @description Fetch a user by id. */
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The user. */
      200: {
        content: {
          "application/json": {
            /**
             * @description The (long) ID of the user. 
             * @example 179828644301046017
             */
            id?: string;
            /**
             * @description The username of the user. May be used to mention someone in the posts. 
             * @example johnDoe
             */
            userName?: string;
            /**
             * @description The first name of the user. 
             * @example John
             */
            firstName?: string;
            /**
             * @description The last name of the user. 
             * @example Doe
             */
            lastName?: string;
            /** @description URL to the avatar of the user. This field may be empty (empty string). */
            avatarUrl?: string;
          };
        };
      };
    };
  };
}