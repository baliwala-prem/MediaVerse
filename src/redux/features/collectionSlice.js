import { createSlice } from "@reduxjs/toolkit";
import reducer from "./searchSlice";
import { toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState: initialState,
    reducers: {
        addCollection: (state, action) => {
            let alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))

            }

        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state, action) => {
            state.items = [];
            localStorage.removeItem('collection');
        },
        addToast: () => {
            toast.success("📁 Saved to Collection!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                icon: "❤️",

                style: {
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    color: "#fff",
                    border: "3px solid black",
                    borderRadius: "16px",
                    boxShadow: "6px 6px 0px black",
                    fontWeight: "700",
                    fontSize: "16px",
                    padding: "16px",
                },

                progressStyle: {
                    background: "linear-gradient(90deg, #00ff87, #60efff)",
                    height: "5px",
                },
            });
        },
        removeToast: () => {
            toast.error("🗑️ Removed from Collection!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: "💔",
                style: {
                    background: "linear-gradient(135deg, #ef4444, #dc2626)",
                    color: "#fff",
                    borderRadius: "15px",
                    border: "3px solid black",
                    boxShadow: "6px 6px 0px black",
                    fontWeight: "bold",
                    fontSize: "16px",
                },
            });
        }
    }

})

export const {
    addCollection,
    removeCollection,
    clearCollection,
    addToast,
    removeToast
} = collectionSlice.actions;

export default collectionSlice.reducer;