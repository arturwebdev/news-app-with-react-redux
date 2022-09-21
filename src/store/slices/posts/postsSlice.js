import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    editId: null,
    data: [],
    dataMore: {},
    max: 0,
    loading: false,
  },
  
  reducers: {
    addNewComment(state, {payload}) {
      if(payload.body) {
        return {
          ...state,
          dataMore: {
            ...state.dataMore,
            comments: [
              ...state.dataMore.comments,
              {
                id: new Date().getTime(),
                body: payload.body,
                name: payload.name
              }
            ]
          },
          data: [
            ...state.data.map(el => {
              if(el.id === state.dataMore.id){
                return {
                  ...state.dataMore,
                  comments: [
                    ...state.dataMore.comments,
                    {
                      id: new Date().getTime(),
                      body: payload.body,
                      name: payload.name
                    }
                  ]
                }
              }
              return el
            })
          ]
        }
      }
      return state
  },

  setDataMore(state, { payload }) {
    return {
      ...state,
      dataMore: state.data.find(el => el.id === payload),
    };
  },

  deleteText(state, action) {
    return {
      ...state, 
      dataMore: {
        ...state.dataMore,
        comments: [
          ...state.dataMore.comments.filter(comment => comment.id !== action.payload)
        ]
      },
      data: [
        ...state.data.map(el => {
          if(el.id === state.dataMore.id){
            return {
              ...state.dataMore,
              comments: [
                ...state.dataMore.comments.filter(comment => comment.id !== action.payload)
              ]
            }
          }
          return el
        })
      ]
    }
  },

  setEditId(state, {payload}) {
    return {
      ...state,
      editId: payload
    }
  },

  editComment(state, {payload}) {
    return {
      ...state,
      dataMore: {
        ...state.dataMore,
        comments: [
          ...state.dataMore.comments.map(el => {
            if(el.id === state.editId) {
              return {
                ...el,
                name: payload.name,
                body: payload.comment
              }
            }
            return el
          })
        ]
      },
      data: [
        ...state.data.map(el => {
          if(el.id === state.dataMore.id){
            return {
              ...state.dataMore,
              comments: [
                ...state.dataMore.comments.map(el => {
                  if(el.id === state.editId) {
                    return {
                      ...el,
                      name: payload.name,
                      body: payload.comment
                    }
                  }
                  return el
                })
              ]
            }
          }
          return el
        })
      ],
      editId: null
    }
  }

  },

  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        data: [...payload],
        max: payload.length,
        showData: payload.splice(0, 10),
      };
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { editComment, addNewComment, setEditId, setDataMore, deleteText } = postsSlice.actions;

export default postsSlice.reducer;



