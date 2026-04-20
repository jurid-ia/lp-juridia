"use client";

import axios, { type AxiosInstance } from "axios";
import { createContext, useContext, useMemo, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://voice-api.juridia.com.br";

export type ApiResponse<T = unknown> = { status: number; body: T };

export interface ApiContextProps {
  PostAPI: <T = unknown>(url: string, data: unknown, auth: boolean) => Promise<ApiResponse<T>>;
  GetAPI: <T = unknown>(url: string, auth: boolean) => Promise<ApiResponse<T>>;
  PutAPI: <T = unknown>(url: string, data: unknown, auth: boolean) => Promise<ApiResponse<T>>;
  DeleteAPI: <T = unknown>(url: string, auth: boolean) => Promise<ApiResponse<T>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  clearToken: () => void;
  addressApi: <T = unknown>(url: string) => Promise<ApiResponse<T>>;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

function treatResponseData(data: unknown): unknown {
  if (
    data &&
    typeof data === "object" &&
    "message" in data &&
    Array.isArray((data as { message: unknown }).message) &&
    ((data as { message: unknown[] }).message).length > 0
  ) {
    const arr = (data as { message: unknown[] }).message;
    return { ...(data as object), message: arr[arr.length - 1] };
  }
  return data;
}

export function ApiContextProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>("");

  const { api, Address } = useMemo<{ api: AxiosInstance; Address: AxiosInstance }>(() => {
    const api = axios.create({ baseURL });
    const Address = axios.create({ baseURL: "https://viacep.com.br/ws/" });
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          setToken("");
          if (typeof window !== "undefined") {
            window.location.href = "https://app.juridia.com.br/sign-in?register";
          }
        }
        return Promise.reject(error);
      },
    );
    return { api, Address };
  }, []);

  function clearToken() {
    setToken("");
  }

  function config(auth: boolean) {
    return {
      headers: {
        Authorization: auth ? `Bearer ${token}` : "",
        "ngrok-skip-browser-warning": "any",
      },
    };
  }

  async function PostAPI<T = unknown>(
    url: string,
    data: unknown,
    auth: boolean,
  ): Promise<ApiResponse<T>> {
    const connect = await api
      .post(url, data, config(auth))
      .then(({ data }) => ({ status: 200, body: data as T }))
      .catch((err) => {
        const message = treatResponseData(err.response?.data) as T;
        const status = err.response?.status || 500;
        return { status, body: message };
      });

    return connect.status === 500 && typeof connect.body === "string"
      ? {
          status: connect.status,
          body: { message: "Ops! algo deu errado, tente novamente" } as unknown as T,
        }
      : connect;
  }

  async function GetAPI<T = unknown>(url: string, auth: boolean): Promise<ApiResponse<T>> {
    const connect = await api
      .get(url, config(auth))
      .then(({ data }) => ({ status: 200, body: data as T }))
      .catch((err) => {
        const message = treatResponseData(err.response?.data) as T;
        const status = err.response?.status || 500;
        return { status, body: message };
      });

    return connect.status === 500 && typeof connect.body === "string"
      ? {
          status: connect.status,
          body: { message: "Ops! algo deu errado, tente novamente" } as unknown as T,
        }
      : connect;
  }

  async function PutAPI<T = unknown>(
    url: string,
    data: unknown,
    auth: boolean,
  ): Promise<ApiResponse<T>> {
    const connect = await api
      .put(url, data, config(auth))
      .then(({ data }) => ({ status: 200, body: data as T }))
      .catch((err) => {
        const message = treatResponseData(err.response?.data) as T;
        const status = err.response?.status || 500;
        return { status, body: message };
      });

    return connect.status === 500 && typeof connect.body === "string"
      ? {
          status: connect.status,
          body: { message: "Ops! algo deu errado, tente novamente" } as unknown as T,
        }
      : connect;
  }

  async function DeleteAPI<T = unknown>(url: string, auth: boolean): Promise<ApiResponse<T>> {
    const connect = await api
      .delete(url, config(auth))
      .then(({ data }) => ({ status: 200, body: data as T }))
      .catch((err) => {
        const message = treatResponseData(err.response?.data) as T;
        const status = err.response?.status || 500;
        return { status, body: message };
      });

    return connect.status === 500 && typeof connect.body === "string"
      ? {
          status: connect.status,
          body: { message: "Ops! algo deu errado, tente novamente" } as unknown as T,
        }
      : connect;
  }

  async function AddressApi<T = unknown>(url: string): Promise<ApiResponse<T>> {
    const connect = await Address.get(url)
      .then(({ data }) => ({ status: 200, body: data as T }))
      .catch((err) => {
        const message = err.response?.data as T;
        const status = err.response?.status || 500;
        return { status, body: message };
      });

    if (connect.status === 500) {
      return {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente" as unknown as T,
      };
    }
    if (connect.status === 413) {
      return {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem" as unknown as T,
      };
    }
    return connect;
  }

  return (
    <ApiContext.Provider
      value={{
        token,
        setToken,
        clearToken,
        PostAPI,
        GetAPI,
        PutAPI,
        DeleteAPI,
        addressApi: AddressApi,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext deve ser usado dentro de um ApiContextProvider");
  }
  return context;
}
