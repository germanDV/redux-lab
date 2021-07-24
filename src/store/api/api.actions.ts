import { AnyAction } from 'redux';
import { Action } from '../store'

// Action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// Action creators
type RequestMeta = {
  method: string;
  url: string;
  domain: string;
}
type ApiRequestArgs = {
  domain: string;
  method: string;
  url: string;
  body?: object;
}
export type ApiRequestAction = Action<object | undefined, RequestMeta>
export function apiRequest({ domain, body, method, url }: ApiRequestArgs): ApiRequestAction {
  return {
    type: `${domain} ${API_REQUEST}`,
    payload: body,
    meta: {
      method,
      url,
      domain,
    },
  }
}

type ApiSuccessArgs = {
  domain: string;
  response: object;
}
export type ApiSuccessAction = Action<object, { domain: string }>
export function apiSuccess({ domain, response }: ApiSuccessArgs): ApiSuccessAction {
  return {
    type: `${domain} ${API_SUCCESS}`,
    payload: response,
    meta: { domain }
  }
}

type ApiErrorArgs = {
  domain: string;
  error: string;
}
export type ApiErrorAction = Action<string, { domain: string }>
export function apiError({ domain, error }: ApiErrorArgs): ApiErrorAction {
  return {
    type: `${domain} ${API_ERROR}`,
    payload: error,
    meta: { domain }
  }
}

// Action guards
export function isApiRequestAction(action: AnyAction): action is ApiRequestAction {
  return action.type.includes(API_REQUEST)
}

export function isApiSuccessAction(action: AnyAction): action is ApiSuccessAction {
  return action.type.includes(API_SUCCESS)
}

export function isApiErrorAction(action: AnyAction): action is ApiErrorAction {
  return action.type.includes(API_ERROR)
}
