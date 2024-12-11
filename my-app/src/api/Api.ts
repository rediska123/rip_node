/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  /**
   * Is staff
   * @default false
   */
  is_staff?: boolean;
  /**
   * Is superuser
   * @default false
   */
  is_superuser?: boolean;
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string;
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string;
}

export interface AmountRequest {
  /** Amount */
  amount: number;
}

export interface ClientCard {
  /** ID */
  id?: number;
  /**
   * Name
   * @maxLength 255
   */
  name?: string | null;
  /**
   * Phone
   * @maxLength 20
   */
  phone?: string | null;
  /**
   * Accepted date
   * @format date-time
   */
  accepted_date?: string | null;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  /**
   * Status
   * @min -2147483648
   * @max 2147483647
   */
  status?: number;
  /**
   * Submited date
   * @format date-time
   */
  submited_date?: string | null;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Moderator
   * @minLength 1
   */
  moderator?: string | null;
}

export interface ClientCardPass {
  /**
   * Pass name
   * @minLength 1
   */
  pass_name: string;
  /**
   * Pass price
   * @minLength 1
   */
  pass_price: string;
  /**
   * Amount
   * @min -2147483648
   * @max 2147483647
   */
  amount: number;
  /** ID */
  id?: number;
  /**
   * Pass description
   * @minLength 1
   */
  pass_description: string;
  /**
   * Pass image
   * @minLength 1
   */
  pass_image: string;
}

export interface ClientCardDetails {
  /** ID */
  id?: number;
  /**
   * Name
   * @maxLength 255
   */
  name?: string | null;
  /**
   * Phone
   * @maxLength 20
   */
  phone?: string | null;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  /**
   * Submited date
   * @format date-time
   */
  submited_date?: string | null;
  /**
   * Accepted date
   * @format date-time
   */
  accepted_date?: string | null;
  /**
   * Status
   * @min -2147483648
   * @max 2147483647
   */
  status?: number;
  passes?: ClientCardPass[];
  /**
   * Username
   * @minLength 1
   */
  username: string;
}

export interface Pass {
  /** ID */
  id?: number;
  /**
   * Name
   * @maxLength 255
   */
  name?: string | null;
  /** Description */
  description?: string | null;
  /**
   * Price
   * @min -2147483648
   * @max 2147483647
   */
  price?: number | null;
  /** Image */
  image?: string | null;
  /** Status */
  status?: boolean;
}

export interface EditClientCard {
  /**
   * Name
   * @maxLength 255
   */
  name?: string | null;
  /**
   * Phone
   * @maxLength 20
   */
  phone?: string | null;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  passes?: Pass[];
}

export interface PassesResponse {
  equipment: Pass[];
  /** Clientcard id */
  clientcard_id: number;
  /** Clientcard count */
  clientcard_count: number;
}

export interface EditUser {
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  passes?: ClientCardPass[];
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://127.0.0.1:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Абонементы на транспорт API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://127.0.0.1:8000
 * @contact <vasya@pupkin.ru>
 *
 * Апи для оформления абонемента
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthCreate
     * @request POST:/auth/
     * @secure
     */
    authCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  clientCardPass = {
    /**
     * No description
     *
     * @tags client_card_pass
     * @name ClientCardPassUpdate
     * @request PUT:/client_card_pass/{id}/
     * @secure
     */
    clientCardPassUpdate: (id: string, data: AmountRequest, params: RequestParams = {}) =>
      this.request<ClientCard, any>({
        path: `/client_card_pass/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_card_pass
     * @name ClientCardPassDelete
     * @request DELETE:/client_card_pass/{id}/
     * @secure
     */
    clientCardPassDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/client_card_pass/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  clientCards = {
    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsList
     * @request GET:/client_cards/
     * @secure
     */
    clientCardsList: (params: RequestParams = {}) =>
      this.request<ClientCard, any>({
        path: `/client_cards/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsRead
     * @request GET:/client_cards/{id}/
     * @secure
     */
    clientCardsRead: (id: string, params: RequestParams = {}) =>
      this.request<ClientCardDetails, any>({
        path: `/client_cards/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsUpdate
     * @request PUT:/client_cards/{id}/
     * @secure
     */
    clientCardsUpdate: (id: string, data: EditClientCard, params: RequestParams = {}) =>
      this.request<ClientCardDetails, any>({
        path: `/client_cards/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsDelete
     * @request DELETE:/client_cards/{id}/
     * @secure
     */
    clientCardsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/client_cards/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsAcceptCreate
     * @request POST:/client_cards/{id}/accept/
     * @secure
     */
    clientCardsAcceptCreate: (id: string, data: ClientCard, params: RequestParams = {}) =>
      this.request<ClientCard, any>({
        path: `/client_cards/${id}/accept/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags client_cards
     * @name ClientCardsSubmitCreate
     * @request POST:/client_cards/{id}/submit/
     * @secure
     */
    clientCardsSubmitCreate: (id: string, data: ClientCardDetails, params: RequestParams = {}) =>
      this.request<ClientCardDetails, any>({
        path: `/client_cards/${id}/submit/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags logout
     * @name LogoutCreate
     * @request POST:/logout/
     * @secure
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout/`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  passes = {
    /**
     * No description
     *
     * @tags passes
     * @name PassesList
     * @request GET:/passes/
     * @secure
     */
    passesList: (params: RequestParams = {}) =>
      this.request<PassesResponse, any>({
        path: `/passes/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesCreate
     * @request POST:/passes/
     * @secure
     */
    passesCreate: (data: Pass, params: RequestParams = {}) =>
      this.request<Pass, any>({
        path: `/passes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesRead
     * @request GET:/passes/{id}/
     * @secure
     */
    passesRead: (id: string, params: RequestParams = {}) =>
      this.request<Pass, any>({
        path: `/passes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesCreate2
     * @request POST:/passes/{id}/
     * @originalName passesCreate
     * @duplicate
     * @secure
     */
    passesCreate2: (id: string, data: Pass, params: RequestParams = {}) =>
      this.request<Pass, any>({
        path: `/passes/${id}/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesUpdate
     * @request PUT:/passes/{id}/
     * @secure
     */
    passesUpdate: (id: string, data: Pass, params: RequestParams = {}) =>
      this.request<Pass, any>({
        path: `/passes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesDelete
     * @request DELETE:/passes/{id}/
     * @secure
     */
    passesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/passes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags passes
     * @name PassesAddCreate
     * @request POST:/passes/{id}/add
     * @secure
     */
    passesAddCreate: (id: string, data: AmountRequest, params: RequestParams = {}) =>
      this.request<AmountRequest, any>({
        path: `/passes/${id}/add`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  userEdit = {
    /**
     * No description
     *
     * @tags user-edit
     * @name UserEditUpdate
     * @request PUT:/user-edit/
     * @secure
     */
    userEditUpdate: (data: EditUser, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user-edit/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserCreate
     * @request POST:/user/
     * @secure
     */
    userCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
