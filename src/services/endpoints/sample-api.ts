import { baseApi } from "@/services/base-api";
import { API_TAGS } from "@/constants";
import type { ApiResponse } from "@/types";

export interface SampleItem {
  id: string;
  title: string;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
}

/**
 * Sample feature endpoint injecting into the centralized baseApi.
 */
export const sampleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSampleItems: builder.query<ApiResponse<SampleItem[]>, void>({
      query: () => "/sample",
      providesTags: [API_TAGS.SAMPLE],
    }),
    getSampleItemById: builder.query<ApiResponse<SampleItem>, string>({
      query: (id) => `/sample/${id}`,
      providesTags: (_result, _error, id) => [{ type: API_TAGS.SAMPLE, id }],
    }),
    createSampleItem: builder.mutation<
      ApiResponse<SampleItem>,
      Omit<SampleItem, "id" | "createdAt">
    >({
      query: (body) => ({
        url: "/sample",
        method: "POST",
        body,
      }),
      invalidatesTags: [API_TAGS.SAMPLE],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSampleItemsQuery, useGetSampleItemByIdQuery, useCreateSampleItemMutation } =
  sampleApi;
