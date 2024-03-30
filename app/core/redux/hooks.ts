import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, store } from "@/app/core/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
