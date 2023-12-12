import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student } from "../modals/Student";
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6572a8f0192318b7db40788e.mockapi.io/",
    // prepareHeaders: (headers) => {
    //   headers.set("Access-Control-Allow-Headers", "*");
    // },
  }),
  tagTypes: ["Student"],

  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/rtk-query",
      providesTags: ["Student"],
      transformResponse: (response: Student[], meta, args: any) => {
        if (args === 2) {
          return response.slice(0, 4);
        }
        return response;
      },
    }),
    getStudent: builder.query<Student, string>({
      query: (id) => `/rtk-query/${id}`,
      providesTags: ["Student"],
    }),
    addStudent: builder.mutation<void, Student>({
      query: (student) => ({
        url: "/rtk-query",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/rtk-query/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation<void, Student>({
      query: ({ id, ...rest }) => ({
        url: `/rtk-query/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentApi;